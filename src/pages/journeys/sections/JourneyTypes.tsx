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
      <SectionTitle kicker="Ways to journey" align="left">
        Journeys
      </SectionTitle>
      <div className="grid gap-14 sm:grid-cols-2 sm:gap-x-16">
        {JOURNEYS.map((j, i) => (
          <div
            key={j.title}
            className={`border-l border-ochre/30 pl-6 ${i % 2 ? "sm:mt-20 sm:-mb-20" : ""}`}
          >
            <span
              aria-hidden="true"
              className="block font-display italic text-ochre/50 text-5xl leading-none mb-4"
            >
              {["i", "ii", "iii", "iv", "v", "vi"][i]}
            </span>
            <h3 className="font-display italic text-bone text-2xl sm:text-3xl leading-tight">
              {j.title}
            </h3>
            <p className="font-body text-bone/70 text-base leading-relaxed mt-4">
              {j.body}
            </p>
          </div>
        ))}
      </div>
      <p className="font-body text-bone/60 text-sm sm:text-base leading-relaxed max-w-xl mt-16 sm:mt-28 italic">
        Some journeys can be paired with a microdose of truffles, which are
        legal in the Netherlands. This is always your choice.
      </p>
    </Section>
  );
}
