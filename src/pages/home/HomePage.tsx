import FaqSection from "../../components/FaqSection";
import { newsletterEnabled } from "../../components/forms/NewsletterForm";
import PageLayout from "../../components/layout/PageLayout";
import ReviewsSection from "../../components/ReviewsSection";
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

  return (
    <PageLayout page="home" cta={{ label: "Book", href: "/#contact" }}>
      <Hero />
      <Offerings />
      {events.length > 0 && <Events events={events} />}
      <Watch />
      <ReviewsSection kicker="From Safe and Sound Journeys" reviews={REVIEWS} />
      <Listen />
      {newsletterEnabled && <NewsletterBand />}
      <About />
      <FaqSection title="FAQ" faqs={FAQS} />
      <Contact />
    </PageLayout>
  );
}
