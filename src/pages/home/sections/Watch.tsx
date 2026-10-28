import watchImage from "../../../assets/home-studio-setup.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { YOUTUBE_URL } from "../../../config";
import { ghostButton } from "../../../styles";
import { VIDEOS } from "../content";
import VideoCard from "./VideoCard";

export default function Watch() {
  const [featured, ...moreVideos] = VIDEOS;

  return (
    <Section id="watch" image={watchImage} overlay="bg-bark/85">
      <SectionTitle kicker="Live looping sessions">Watch</SectionTitle>
      <VideoCard {...featured} featured />
      <div className="grid gap-6 sm:grid-cols-3 mt-6">
        {moreVideos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
      <p className="text-center mt-12">
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButton}
        >
          More on YouTube
        </a>
      </p>
    </Section>
  );
}
