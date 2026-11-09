import listenImage from "../../../assets/instruments-on-rug.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import Split from "../../../components/layout/Split";
import { SPOTIFY_ARTIST_ID } from "../../../config";

// studio recordings, deliberately quieter than the live videos
export default function Listen() {
  return (
    <Section id="listen" image={listenImage} overlay="bg-bark/85" padding="py-20 sm:py-24">
      <Split
        aside={
          <>
            <SectionTitle kicker="Studio recordings" align="left" spacing="mb-6">
              Listen
            </SectionTitle>
            <p className="font-body text-bone/65 text-base">
              Tracks produced in my home studio.
            </p>
          </>
        }
      >
      <iframe
        title="Noah Fernandes on Spotify"
        src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?theme=0`}
        className="w-full block rounded-xl border-0"
        height="352"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      </Split>
    </Section>
  );
}
