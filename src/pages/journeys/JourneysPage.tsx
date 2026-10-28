import FaqSection from "../../components/FaqSection";
import PageLayout from "../../components/layout/PageLayout";
import ReviewsSection from "../../components/ReviewsSection";
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
  const journeys = useEvents().filter(isJourney);

  return (
    <PageLayout
      page="journeys"
      cta={{ label: "Join a journey", shortLabel: "Join", href: "#upcoming" }}
    >
      <Hero />
      <Intro />
      <JourneyTypes />
      <WhatToExpect />
      <UpcomingJourneys events={journeys} />
      <ReviewsSection
        kicker="From people who journeyed"
        reviews={REVIEWS}
        className="border-t border-bone/10"
      />
      <FaqSection title="Questions" faqs={FAQS} />
      <Guide />
    </PageLayout>
  );
}
