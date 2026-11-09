import guideImage from "../../../assets/noah-staff-field.jpg";
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
      <div className="grid gap-12 md:grid-cols-[5fr_6fr] md:gap-16 items-center">
        <img
          src={guideImage}
          alt="Noah holding a wooden staff in an open field, looking out over the land"
          loading="lazy"
          className="-mx-6 w-[calc(100%+3rem)] max-w-none md:mx-0 md:w-[calc(100%+4rem)] md:-ml-16 lg:w-[calc(100%+10rem)] lg:-ml-40 aspect-[4/5] object-cover object-[50%_45%]"
        />
        <div className="font-body text-bone/75 text-base sm:text-lg leading-relaxed space-y-6">
          <SectionTitle kicker="Who holds the space" align="left">
            Your Guide
          </SectionTitle>
          <p>
            Safe and Sound Journeys was founded in 2024 by Noah Fernandes, an
            Amsterdam-based musician and facilitator. He guides the journeys,
            often together with guest practitioners.
          </p>
          <p>
            Noah plays voice, flute, guitar, drums and instruments collected on
            his travels, live and in the moment, so every journey sounds
            different and follows the people who are there.
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
