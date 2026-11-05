import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { JOURNEYS } from "../content";

// the kinds of journeys on offer
export default function JourneyTypes() {
  return (
    <Section
      id="journeys"
      className="border-t border-bone/10"
      glow="radial-gradient(ellipse 50% 50% at 85% 20%, rgba(201,150,44,0.14), transparent 70%)"
    >
      <SectionTitle kicker="Ways to journey">Journeys</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {JOURNEYS.map((j) => (
          <div
            key={j.title}
            className="rounded-2xl border border-bone/15 bg-bark/40 p-8"
          >
            <h3 className="font-body text-ochre text-sm uppercase tracking-[0.25em]">
              {j.title}
            </h3>
            <p className="font-body text-bone/75 text-base leading-relaxed mt-4">
              {j.body}
            </p>
          </div>
        ))}
      </div>
      <p className="font-body text-bone/60 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto mt-10">
        Some journeys can be paired with a microdose of truffles, which are
        legal in the Netherlands. This is always your choice.
      </p>
    </Section>
  );
}
