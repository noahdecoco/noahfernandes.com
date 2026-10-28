import EventList from "../../../components/EventList";
import NewsletterForm, { newsletterEnabled } from "../../../components/forms/NewsletterForm";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { INSTAGRAM_URL } from "../../../config";
import type { EventItem } from "../../../lib/events";
import { inlineLink } from "../../../styles";

// read live from the Google Sheet. always on the page, because the menu links here;
// when nothing is planned it points people to the newsletter and Instagram instead.
export default function Events({
  events,
}: {
  // null while the sheet is loading
  events: EventItem[] | null;
}) {
  return (
    <Section
      id="events"
      glow="radial-gradient(ellipse 50% 60% at 15% 40%, rgba(201,150,44,0.18), transparent 70%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(74,93,58,0.25), transparent 70%)"
    >
      <SectionTitle kicker="Come and join">Upcoming Events</SectionTitle>
      {events === null ? null : events.length > 0 ? (
        <EventList events={events} />
      ) : (
        <div className="max-w-xl mx-auto text-center">
          <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
            Nothing is planned right now. Join the newsletter or follow me on{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              Instagram
            </a>{" "}
            to hear about new dates first.
          </p>
          {newsletterEnabled && (
            <div className="mt-8">
              <NewsletterForm />
            </div>
          )}
        </div>
      )}
    </Section>
  );
}
