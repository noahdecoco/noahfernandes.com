import offeringsImage from "../../../assets/journey-room-mats.jpg";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { external } from "../../../lib/links";
import { OFFERINGS } from "../content";

// each column steps down a little, like notes rising on a stave
const STAGGER = ["md:mt-0", "md:mt-16", "md:mt-32"];
const NUMERALS = ["i", "ii", "iii"];

export default function Offerings() {
  return (
    <Section id="offerings" image={offeringsImage} overlay="bg-bark/85">
      <SectionTitle kicker="Where my music lives" align="left">
        Offerings
      </SectionTitle>
      <div className="grid gap-14 md:grid-cols-3 md:gap-10">
        {OFFERINGS.map((o, i) => (
          <div
            key={o.title}
            className={`relative border-l border-ochre/30 pl-6 ${STAGGER[i] ?? ""}`}
          >
            <span
              aria-hidden="true"
              className="block font-display italic text-ochre/50 text-5xl leading-none mb-4"
            >
              {NUMERALS[i]}
            </span>
            <h3 className="font-display italic text-bone text-2xl sm:text-3xl leading-tight">
              {o.title}
            </h3>
            <p className="font-body text-bone/70 text-base leading-relaxed mt-4">
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
