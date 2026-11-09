import { HIPSY_URL } from "../config";
import { linkClass } from "../styles";
import Section from "./layout/Section";
import SectionTitle from "./layout/SectionTitle";

export type Review = { quote: string; name: string };

// "Kind Words": short review quotes with a link to all reviews on Hipsy
export default function ReviewsSection({
  kicker,
  reviews,
  className,
}: {
  kicker: string;
  reviews: Review[];
  className?: string;
}) {
  return (
    <Section
      id="reviews"
      className={className}
      padding="py-20 sm:py-24"
      glow="radial-gradient(ellipse 50% 60% at 85% 30%, rgba(201,150,44,0.16), transparent 70%), radial-gradient(ellipse 45% 50% at 10% 85%, rgba(74,93,58,0.22), transparent 70%)"
    >
      <SectionTitle kicker={kicker}>Kind Words</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className={`max-w-xl ${i % 2 ? "ml-auto text-right" : "text-left"}`}
          >
            <blockquote className="font-display italic text-bone text-2xl sm:text-3xl leading-snug">
              “{r.quote}”
            </blockquote>
            <figcaption className="font-body text-ochre/80 text-xs uppercase tracking-[0.25em] mt-4">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="text-center mt-16">
        <a
          href={HIPSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Read all reviews on Hipsy
        </a>
      </p>
    </Section>
  );
}
