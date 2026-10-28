import { useState } from "react";
import FaqSection from "../../components/FaqSection";
import { newsletterEnabled } from "../../components/forms/NewsletterForm";
import NotifyDialog from "../../components/forms/NotifyDialog";
import ReviewsSection from "../../components/ReviewsSection";
import SiteFooter from "../../components/layout/SiteFooter";
import SiteHeader from "../../components/layout/SiteHeader";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { useEvents } from "../../hooks/useEvents";
import { FAQS, REVIEWS } from "./content";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Hero from "./sections/Hero";
import Listen from "./sections/Listen";
import NewsletterBand from "./sections/NewsletterBand";
import Offerings from "./sections/Offerings";
import Watch from "./sections/Watch";

export default function HomePage() {
  const events = useEvents();
  const [notifyFor, setNotifyFor] = useState<string | null>(null);
  useScrollToHash(events.length);

  return (
    <div className="min-h-screen bg-bark text-bone">
      <SiteHeader
        page="home"
        showEvents={events.length > 0}
        cta={{ label: "Book", href: "/#contact" }}
      />
      <Hero />
      <Offerings />
      {events.length > 0 && <Events events={events} onNotify={setNotifyFor} />}
      <Watch />
      <ReviewsSection kicker="From Safe and Sound Journeys" reviews={REVIEWS} />
      <Listen />
      {newsletterEnabled && <NewsletterBand />}
      <About />
      <FaqSection title="FAQ" faqs={FAQS} />
      <Contact />
      <NotifyDialog eventTitle={notifyFor} onClose={() => setNotifyFor(null)} />
      <SiteFooter />
    </div>
  );
}
