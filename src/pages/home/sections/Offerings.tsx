import offeringsImage from "../../../assets/journey-room-mats.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { external } from "../../../lib/links";
import { OFFERINGS } from "../content";

export default function Offerings() {
  return (
    <Section id="offerings" image={offeringsImage} overlay="bg-bark/85">
      <SectionTitle kicker="Where my music lives">Offerings</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {OFFERINGS.map((o) => (
          <div
            key={o.title}
            className="rounded-2xl border border-bone/15 bg-bark/40 backdrop-blur-sm p-8"
          >
            <h3 className="font-body text-ochre text-sm uppercase tracking-[0.25em]">
              {o.title}
            </h3>
            <p className="font-body text-bone/75 text-base leading-relaxed mt-4">
              {o.body}
            </p>
            {o.link && (
              <a
                href={o.link.href}
                {...external(o.link.href)}
                className="inline-block mt-5 font-body text-ochre text-sm hover:text-bone transition-colors"
              >
                {o.link.label} →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
