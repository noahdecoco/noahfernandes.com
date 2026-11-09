import contactImage from "../../../assets/goa-river-palms.jpg";
import ContactForm from "../../../components/forms/ContactForm";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import Split from "../../../components/layout/Split";
import { EMAIL } from "../../../config";
import { linkClass } from "../../../styles";

export default function Contact() {
  return (
    <Section id="contact" image={contactImage} overlay="bg-bark/85">
      <Split
        aside={
          <>
            <SectionTitle kicker="Let's work together" align="left" spacing="mb-6">
              Book
            </SectionTitle>
            <p className="font-body text-bone/80 text-base sm:text-lg leading-relaxed">
              Hosting a journey, a dance, a retreat or a workshop? Tell me about
              it and I'll get back to you.
            </p>
            <p className="font-body text-bone/65 text-sm mt-6">
              Or email me directly at{" "}
              <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                {EMAIL}
              </a>
            </p>
          </>
        }
      >
        <div className="border-l-2 border-ochre/60 bg-bark/50 backdrop-blur-sm p-6 sm:p-10">
          <ContactForm email={EMAIL} />
        </div>
      </Split>
    </Section>
  );
}
