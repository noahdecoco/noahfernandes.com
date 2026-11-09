import watchImage from "../../../assets/home-studio-setup.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { YOUTUBE_URL } from "../../../config";
import { VIDEOS } from "../content";
import VideoCard from "./VideoCard";

export default function Watch() {
  const [featured, ...moreVideos] = VIDEOS;

  return (
    <Section id="watch" image={watchImage} overlay="bg-bark/85">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2 mb-12 sm:mb-16">
        <SectionTitle kicker="Live sessions" align="left" spacing="mb-0">
          Watch
        </SectionTitle>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-ochre text-sm hover:text-bone transition-colors pb-2"
        >
          More on YouTube →
        </a>
      </div>
      <VideoCard {...featured} featured />
      <div className="grid gap-6 sm:grid-cols-3 mt-6">
        {moreVideos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
    </Section>
  );
}
