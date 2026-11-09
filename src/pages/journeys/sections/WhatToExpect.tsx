import roomImage from "../../../assets/journey-room-blankets.jpg";
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
      <div className="grid gap-12 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-16 items-start">
      <div>
      <SectionTitle kicker="What a journey is like" align="left">
        What to Expect
      </SectionTitle>
      <ol className="space-y-10">
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
      </div>
      <img
        src={roomImage}
        alt="A canal-side room with mats, blankets and candles laid out on a wooden floor"
        loading="lazy"
        className="-mx-6 w-[calc(100%+3rem)] max-w-none md:mx-0 md:w-[calc(100%+4rem)] lg:w-[calc(100%+10rem)] md:mt-32 aspect-[4/5] object-cover md:sticky md:top-24"
      />
      </div>
    </Section>
  );
}
