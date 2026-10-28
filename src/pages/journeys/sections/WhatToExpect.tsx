import sessionImage from "../../../assets/private-journey.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { STEPS } from "../content";

export default function WhatToExpect() {
  return (
    <Section
      id="expect"
      className="border-t border-bone/10"
      glow="radial-gradient(ellipse 60% 55% at 15% 60%, rgba(62,58,94,0.32), transparent 70%)"
    >
      <SectionTitle kicker="What a journey is like">What to Expect</SectionTitle>
      <img
        src={sessionImage}
        alt="Noah sitting beside someone resting under a blanket after a private journey, among plants and a drum"
        loading="lazy"
        className="w-full max-w-4xl mx-auto aspect-[16/9] object-cover rounded-2xl mb-14 sm:mb-16"
      />
      <ol className="max-w-3xl mx-auto space-y-10">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-6 sm:gap-8">
            <span className="font-display italic text-ochre text-3xl sm:text-4xl leading-none w-8 shrink-0">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display italic text-bone text-xl sm:text-2xl leading-tight">
                {s.title}
              </h3>
              <p className="font-body text-bone/70 text-base leading-relaxed mt-2">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
