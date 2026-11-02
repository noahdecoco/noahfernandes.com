import heroImage from "../../../assets/journey-room-instruments.jpg";
import { ghostButton, primaryButton } from "../../../styles";
import { PARALLAX_IMAGE, useParallax } from "../../../hooks/useParallax";

export default function Hero() {
  const imageRef = useParallax<HTMLImageElement>(0.25);

  return (
    <section className="relative min-h-[85svh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="A canal-side room set up for a sound journey, with singing bowls, chimes, a guitar and mats"
        ref={imageRef}
        className={PARALLAX_IMAGE}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/60 via-bark/50 to-bark" />

      <div className="relative w-full mx-auto max-w-5xl px-6 pb-20 sm:pb-28 pt-32 text-center">
        <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-bone/80">
          Safe and Sound Journeys
        </p>
        <h1 className="font-display italic text-bone mt-5 text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
          Let the music hold you, so you can let go
        </h1>
        <p className="font-body text-bone/85 text-base sm:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
          Sound journeys where live music holds the space for inner healing.
          In and around Amsterdam.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <a href="#upcoming" className={`${primaryButton} w-full sm:w-auto`}>
            Join a journey
          </a>
          <a href="#expect" className={`${ghostButton} w-full sm:w-auto`}>
            What to expect
          </a>
        </div>
      </div>
    </section>
  );
}
