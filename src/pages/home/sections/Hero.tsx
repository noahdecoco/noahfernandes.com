import heroImage from "../../../assets/goa-palms-dusk.jpg";
import Socials from "../../../components/Socials";
import { ghostButton, primaryButton } from "../../../styles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex items-end overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Palm trees reflected in still water at dusk in Goa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/30 to-bark" />

      <div className="relative w-full mx-auto max-w-5xl px-6 pb-20 sm:pb-28 pt-32 text-center">
        <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-bone/80">
          Amsterdam-based Live-Looping Artist
        </p>
        <h1 className="font-display italic text-bone mt-5 text-5xl sm:text-7xl lg:text-8xl leading-none">
          Noah Fernandes
        </h1>
        <p className="font-body text-bone/85 text-base sm:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
          Organic, evolving music created in the moment with real
          instruments collected from around the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <a href="/#contact" className={`${primaryButton} w-full sm:w-auto`}>
            Book me for your event
          </a>
          <a href="/#watch" className={`${ghostButton} w-full sm:w-auto`}>
            Watch me live
          </a>
        </div>
        <div className="mt-10">
          <Socials />
        </div>
      </div>
    </section>
  );
}
