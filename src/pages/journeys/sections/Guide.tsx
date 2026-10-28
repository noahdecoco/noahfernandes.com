import founderImage from "../../../assets/noah-beech-tree.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { ghostButton } from "../../../styles";

// short founder section that links back to the home page
export default function Guide() {
  return (
    <Section
      className="border-t border-bone/10"
      glow="radial-gradient(ellipse 60% 55% at 20% 50%, rgba(201,150,44,0.24), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 15%, rgba(168,84,46,0.18), transparent 70%)"
    >
      <SectionTitle kicker="Who holds the space">Your Guide</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
        <img
          src={founderImage}
          alt="Noah sitting on a log bench beneath a huge old beech tree"
          loading="lazy"
          className="w-full max-w-md mx-auto md:max-w-none aspect-[4/5] object-cover rounded-2xl"
        />
        <div className="font-body text-bone/75 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Safe and Sound Journeys was founded in 2024 by Noah Fernandes, an
            Amsterdam-based live-looping artist and parts-work (IFS)
            practitioner. He guides the journeys, often together with guest
            facilitators.
          </p>
          <p>
            Noah plays voice, flute, guitar, drums and instruments collected
            on his travels, live and in the moment, so every journey sounds
            different and follows the people in the room.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="/#about" className={ghostButton}>
              More about Noah
            </a>
            <a href="/#watch" className={ghostButton}>
              Hear his music
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
