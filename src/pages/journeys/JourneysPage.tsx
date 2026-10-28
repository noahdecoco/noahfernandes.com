import { useState } from "react";
import FaqSection from "../../components/FaqSection";
import NotifyDialog from "../../components/forms/NotifyDialog";
import ReviewsSection from "../../components/ReviewsSection";
import SiteFooter from "../../components/layout/SiteFooter";
import SiteHeader from "../../components/layout/SiteHeader";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { useEvents } from "../../hooks/useEvents";
import type { EventItem } from "../../lib/events";
import { FAQS, JOURNEY_TYPES, REVIEWS } from "./content";
import Guide from "./sections/Guide";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import JourneyTypes from "./sections/JourneyTypes";
import UpcomingJourneys from "./sections/UpcomingJourneys";
import WhatToExpect from "./sections/WhatToExpect";

const isJourney = (e: EventItem) =>
  JOURNEY_TYPES.includes(e.type.trim().toLowerCase());

export default function JourneysPage() {
  const events = useEvents().filter(isJourney);
  const [notifyFor, setNotifyFor] = useState<string | null>(null);
  useScrollToHash(events.length);

  return (
    <div className="min-h-screen bg-bark text-bone">
      <SiteHeader
        page="journeys"
        cta={{ label: "Join a journey", shortLabel: "Join", href: "#upcoming" }}
      />
      <Hero />
      <Intro />
      <JourneyTypes />
      <WhatToExpect />
      <UpcomingJourneys events={events} onNotify={setNotifyFor} />
      <ReviewsSection
        kicker="From people who journeyed"
        reviews={REVIEWS}
        className="border-t border-bone/10"
      />
      <FaqSection title="Questions" faqs={FAQS} />
      <Guide />
      <NotifyDialog eventTitle={notifyFor} onClose={() => setNotifyFor(null)} />
      <SiteFooter />
    </div>
  );
}
