// TODO: swap for a close-up portrait of Noah's face
import portrait from "../../../assets/noah-staff-field.jpg";
import Socials from "../../../components/Socials";
import { ghostButton, primaryButton } from "../../../styles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden md:min-h-svh md:flex md:items-center"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 25% 45%, rgba(201,150,44,0.22), transparent 70%), radial-gradient(ellipse 50% 50% at 85% 80%, rgba(168,84,46,0.18), transparent 70%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-6xl md:px-6 md:pt-28 md:pb-20 grid md:grid-cols-[5fr_6fr] md:gap-16 lg:gap-20 items-center">
        <figure className="relative">
          <img
            src={portrait}
            alt="Portrait of Noah Fernandes outdoors"
            className="w-full aspect-[4/5] max-h-[75svh] md:max-h-none object-cover object-[50%_22%]"
          />
          <div className="md:hidden absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-bark" />
        </figure>

        <div className="relative px-6 md:px-0 -mt-10 md:mt-0 pb-20 md:pb-0 text-center md:text-left">
          <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-ochre/90">
            Musical Shaman &amp; Sound Healer
          </p>
          <h1 className="font-display italic text-bone mt-4 text-5xl sm:text-6xl lg:text-7xl leading-none">
            Noah Fernandes
          </h1>
          <p className="font-display italic text-bone/90 text-xl sm:text-2xl leading-snug text-balance mt-6">
            Creating sonic spaces for stillness, movement and connection.
          </p>
          <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed mt-6 max-w-xl mx-auto md:mx-0">
            Noah holds the music at psychedelic retreats, ceremonies and sound
            healing journeys. Not just bowls and gongs: guitar, flutes, voice
            and drums, played live and shaped by the people in the room. With a
            background in counselling, he brings care and steadiness to every
            space he holds.
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-10">
            <a href="/#contact" className={`${primaryButton} w-full sm:w-auto`}>
              Book Noah for your event
            </a>
            <a href="/#watch" className={`${ghostButton} w-full sm:w-auto`}>
              Watch him live
            </a>
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
