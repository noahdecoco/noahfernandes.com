import type { ReactNode } from "react";
import Section from "./layout/Section";
import SectionTitle from "./layout/SectionTitle";

export type Faq = { q: string; a: ReactNode };

// questions that fold open on click
export default function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: Faq[];
}) {
  return (
    <Section
      id="faq"
      className="border-t border-bone/10"
      glow="radial-gradient(ellipse 55% 50% at 85% 60%, rgba(62,58,94,0.35), transparent 70%), radial-gradient(ellipse 45% 40% at 10% 10%, rgba(201,150,44,0.10), transparent 70%)"
    >
      <SectionTitle>{title}</SectionTitle>
      <div className="max-w-3xl mx-auto divide-y divide-bone/10 border-y border-bone/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="font-body text-bone text-base sm:text-lg cursor-pointer list-none flex justify-between gap-6">
              {f.q}
              <span className="text-ochre text-xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="font-body text-bone/65 text-base leading-relaxed mt-4 pr-10">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
