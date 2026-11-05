import { parseCsv } from "./csv";

// paste the "Publish to web" CSV link of the events Google Sheet here.
// columns (row 1): Date | Time | Title | Type | Venue | City | Link | Publish | Private
// Date must be year-month-day, e.g. 2026-11-14. Past events are hidden automatically.
// Type: Journey, Ceremony, Breathwork, Movement, Set, Workshop or Festival. The first four
// also appear on the Journeys page; every event appears on the home page.
// Publish: a checkbox (or yes / x); unticked rows stay hidden. Without the column, every row shows.
// Private: a checkbox (or yes / x); the event shows with a "Private" label instead of a link or Notify me.
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
  private: boolean;
};

// only used while developing locally without a sheet, so the section can be previewed
export const SAMPLE_CSV = `Date,Time,Title,Type,Venue,City,Link,Publish,Private
2099-11-14,19:30,Tribe Session,Workshop,Sample venue,Amsterdam,https://example.com,TRUE
2099-11-22,20:00,Ecstatic Dance,Set,Sample venue,Amsterdam,,TRUE
2099-11-30,20:00,Draft event,Set,,Amsterdam,,FALSE
2099-12-01,14:00,Private Journey,Journey,,Amsterdam,,TRUE,TRUE
2099-12-06,11:00,"Sound Journey, winter edition",Journey,,Utrecht,https://example.com,TRUE`;

export function toEvents(text: string): EventItem[] {
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
    private: col("private"),
  };
  const isTicked = (value: string) =>
    ["true", "yes", "y", "x", "✓", "1"].includes(value.toLowerCase());
  const isPublished = (r: string[]) =>
    idx.publish < 0 || isTicked(get(r, idx.publish));
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
        private: isTicked(get(r, idx.private)),
      };
    })
    .filter((e) => e.title && !isNaN(e.date.getTime()) && e.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}
