import Section from "../../../components/layout/Section";

export default function Intro() {
  return (
    <Section
      padding="py-20 sm:py-24"
      glow="radial-gradient(ellipse 55% 60% at 20% 40%, rgba(74,93,58,0.28), transparent 70%), radial-gradient(ellipse 45% 50% at 85% 70%, rgba(62,58,94,0.30), transparent 70%)"
    >
      <div className="max-w-2xl mx-auto text-center font-body text-bone/80 text-base sm:text-lg leading-relaxed space-y-6">
        <p>
          Safe and Sound Journeys creates warm and welcoming journeys where
          live music and sound hold the space for inner healing. They take
          place in and around Amsterdam, in carefully chosen venues or
          together with other facilitators and organisers.
        </p>
        <p>
          We slow down and make room for whatever wants to come up: grief,
          stress, heartbreak, joy, laughter or curiosity. All parts of you
          are welcome.
        </p>
      </div>
    </Section>
  );
}
