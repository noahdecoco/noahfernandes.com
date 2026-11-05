import Section from "../../../components/layout/Section";

export default function Intro() {
  return (
    <Section
      padding="py-20 sm:py-24"
      glow="radial-gradient(ellipse 55% 60% at 20% 40%, rgba(74,93,58,0.28), transparent 70%), radial-gradient(ellipse 45% 50% at 85% 70%, rgba(62,58,94,0.30), transparent 70%)"
    >
      <div className="max-w-2xl mx-auto text-center font-body text-bone/80 text-base sm:text-lg leading-relaxed space-y-6">
        <p>
          Safe and Sound Journeys brings live music, breath and movement
          together in warm and welcoming journeys. They take place in and around
          Amsterdam, in carefully chosen venues or together with
          other facilitators and organisers. Join an open journey, or arrange a
          private one.
        </p>
      </div>
    </Section>
  );
}
