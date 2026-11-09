import EventList from "../../../components/EventList";
import NewsletterForm, { newsletterEnabled } from "../../../components/forms/NewsletterForm";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import Split from "../../../components/layout/Split";
import { HIPSY_URL } from "../../../config";
import type { EventItem } from "../../../lib/events";
import { ghostButton } from "../../../styles";

// always shown, because the header button points here
export default function UpcomingJourneys({
  events,
}: {
  // null while the sheet is loading
  events: EventItem[] | null;
}) {
  return (
    <Section
      id="upcoming"
      className="border-t border-bone/10"
      glow="radial-gradient(ellipse 50% 60% at 15% 40%, rgba(201,150,44,0.18), transparent 70%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(74,93,58,0.25), transparent 70%)"
    >
      <Split aside={<SectionTitle kicker="Come and join" align="left" spacing="mb-0">Upcoming Journeys</SectionTitle>}>
      {events === null ? null : events.length > 0 ? (
        <EventList events={events} />
      ) : (
        <div className="max-w-xl">
          <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
            No journeys are scheduled right now. Leave your email and you'll
            be the first to hear when the next one opens.
          </p>
          {newsletterEnabled && (
            <div className="mt-8">
              <NewsletterForm />
            </div>
          )}
        </div>
      )}
      <p className="mt-12">
        <a
          href={HIPSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButton}
        >
          All journeys on Hipsy
        </a>
      </p>
      </Split>
    </Section>
  );
}
