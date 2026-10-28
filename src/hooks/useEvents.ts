import { useEffect, useState } from "react";
import { EVENTS_CSV_URL, SAMPLE_CSV, toEvents, type EventItem } from "../lib/events";

// one request per page load, shared by every component that asks for events
// (the header needs them for its menu, the page for its list)
let request: Promise<EventItem[]> | null = null;

function loadEvents(): Promise<EventItem[]> {
  if (!request) {
    request = !EVENTS_CSV_URL
      ? Promise.resolve(import.meta.env.DEV ? toEvents(SAMPLE_CSV) : [])
      : fetch(EVENTS_CSV_URL)
          .then((r) => (r.ok ? r.text() : ""))
          .then(toEvents)
          .catch(() => []); // if the sheet can't be reached the events simply stay hidden
  }
  return request;
}

// upcoming events from the Google Sheet, loaded in the browser
export function useEvents(): EventItem[] {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadEvents().then((list) => !cancelled && setEvents(list));
    return () => {
      cancelled = true;
    };
  }, []);

  return events;
}
