import listenImage from "../../../assets/instruments-on-rug.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { SPOTIFY_ARTIST_ID } from "../../../config";

// studio recordings, deliberately quieter than the live videos
export default function Listen() {
  return (
    <Section id="listen" image={listenImage} overlay="bg-bark/85" padding="py-20 sm:py-24">
      <SectionTitle kicker="Studio recordings">Listen</SectionTitle>
      <p className="font-body text-bone/65 text-base text-center -mt-6 mb-10">
        Tracks produced in my home studio.
      </p>
      <iframe
        title="Noah Fernandes on Spotify"
        src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?theme=0`}
        className="w-full max-w-2xl mx-auto block rounded-2xl border-0"
        height="352"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </Section>
  );
}
