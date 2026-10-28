import { useEffect, useState } from "react";
import { EVENTS_CSV_URL, SAMPLE_CSV, toEvents, type EventItem } from "../lib/events";

// upcoming events from the Google Sheet, loaded in the browser
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
