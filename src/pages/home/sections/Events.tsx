import EventList from "../../../components/EventList";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import type { EventItem } from "../../../lib/events";

// read live from the Google Sheet; the page leaves this out when nothing is coming up
export default function Events({
  events,
  onNotify,
}: {
  events: EventItem[];
  onNotify: (title: string) => void;
}) {
  return (
    <Section
      id="events"
      glow="radial-gradient(ellipse 50% 60% at 15% 40%, rgba(201,150,44,0.18), transparent 70%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(74,93,58,0.25), transparent 70%)"
    >
      <SectionTitle kicker="Come and join">Upcoming Events</SectionTitle>
      <EventList events={events} onNotify={onNotify} />
    </Section>
  );
}
