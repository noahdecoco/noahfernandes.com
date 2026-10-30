import aboutImage from "../../../assets/noah-flute-sunrise.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { JOURNEYS_PATH } from "../../../config";
import { inlineLink } from "../../../styles";

export default function About() {
  return (
    <Section
      id="about"
      glow="radial-gradient(ellipse 60% 55% at 20% 50%, rgba(201,150,44,0.24), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 15%, rgba(168,84,46,0.18), transparent 70%)"
    >
      <SectionTitle>About</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
        <img
          src={aboutImage}
          alt="Noah playing bansuri flute on a misty bridge at sunrise"
          loading="lazy"
          className="w-full max-w-md mx-auto md:max-w-none aspect-[4/5] object-cover rounded-2xl"
        />
        <div className="font-body text-bone/75 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            I'm Noah, born and raised in Goa, India, and based in Amsterdam
            since 2015. I create immersive music
            with the instruments I've collected from the places I've
            travelled to over the years. My music is live and adaptive, an
            ever-evolving connection between the energy present in me and the
            space.
          </p>
          <p>
            For years my music was earth and fire: loud rock, hard drums,
            screaming. Then it became air and water: soft vocals, flute,
            stillness. Today I bring all of those elements together. Every set
            starts with listening, to myself, to the people and to the space,
            and the music becomes whatever the moment needs: a dance, a
            journey inward, or something in between.
          </p>
          <p>
            I offer my music at sound journeys, retreats and ceremonies,
            ecstatic dances and festivals. In 2024 I founded{" "}
            <a href={JOURNEYS_PATH} className={inlineLink}>
              Safe and Sound Journeys
            </a>
            , sound journeys where live music holds the container for inner
            healing. As a facilitator, I also guide
            Tribe Sessions, workshops where people find their own sound and
            make music together. For me, it's all about connection,
            through the beautiful power of music and sound: with ourselves,
            with each other, and with the joy of being human and alive.
          </p>
        </div>
      </div>
    </Section>
  );
}
