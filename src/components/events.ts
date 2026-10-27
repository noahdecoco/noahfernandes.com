import { useEffect, useState } from "react";

// paste the "Publish to web" CSV link of the events Google Sheet here.
// columns (row 1): Date | Time | Title | Type | Venue | City | Link | Publish
// Date must be year-month-day, e.g. 2026-11-14. Past events are hidden automatically.
// Type: Journey, Ceremony, Breathwork, Set, Workshop or Festival. The first three
// also appear on the Journeys page; every event appears on the home page.
// Publish: a checkbox (or yes / x); unticked rows stay hidden. Without the column, every row shows.
export const EVENTS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkrw5tC0iPbw0SYta-B7U5vplT6OZPAaTdH_z1Nmvz2PVqNqKO-xTMRPbQCNo6ZeMrui-AGoqMK-a8/pub?gid=0&single=true&output=csv";

export type EventItem = {
  date: Date;
  time: string;
  title: string;
  type: string;
  venue: string;
  city: string;
  link: string;
};

// only used while developing locally without a sheet, so the section can be previewed
const SAMPLE_CSV = `Date,Time,Title,Type,Venue,City,Link,Publish
2099-11-14,19:30,Tribe Session,Workshop,Sample venue,Amsterdam,https://example.com,TRUE
2099-11-22,20:00,Ecstatic Dance,Set,Sample venue,Amsterdam,,TRUE
2099-11-30,20:00,Draft event,Set,,Amsterdam,,FALSE
2099-12-06,11:00,"Sound Journey, winter edition",Journey,,Utrecht,https://example.com,TRUE`;

// small CSV parser that understands quoted fields ("a, b") and doubled quotes
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function toEvents(text: string): EventItem[] {
  const [header, ...rows] = parseCsv(text);
  if (!header) return [];
  const col = (name: string) =>
    header.findIndex((h) => h.trim().toLowerCase() === name);
  const idx = {
    date: col("date"),
    time: col("time"),
    title: col("title"),
    type: col("type"),
    venue: col("venue"),
    city: col("city"),
    link: col("link"),
    publish: col("publish"),
  };
  const isPublished = (r: string[]) =>
    idx.publish < 0 ||
    ["true", "yes", "y", "x", "✓", "1"].includes(get(r, idx.publish).toLowerCase());
  const get = (r: string[], i: number) => (i >= 0 ? (r[i] ?? "").trim() : "");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return rows
    .filter(isPublished)
    .map((r) => {
      const m = get(r, idx.date).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
      return {
        date: m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(NaN),
        time: get(r, idx.time),
        title: get(r, idx.title),
        type: get(r, idx.type),
        venue: get(r, idx.venue),
        city: get(r, idx.city),
        link: get(r, idx.link),
      };
    })
    .filter((e) => e.title && !isNaN(e.date.getTime()) && e.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function useEvents(): EventItem[] {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    if (!EVENTS_CSV_URL) {
      if (import.meta.env.DEV) setEvents(toEvents(SAMPLE_CSV));
      return;
    }
    let cancelled = false;
    fetch(EVENTS_CSV_URL)
      .then((r) => (r.ok ? r.text() : ""))
      .then((text) => !cancelled && setEvents(toEvents(text)))
      .catch(() => {}); // if the sheet can't be reached the section simply stays hidden
    return () => {
      cancelled = true;
    };
  }, []);

  return events;
}
