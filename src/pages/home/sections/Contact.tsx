import contactImage from "../../../assets/goa-river-palms.jpg";
import ContactForm from "../../../components/forms/ContactForm";
import Section from "../../../components/layout/Section";
import SectionTitle from "../../../components/layout/SectionTitle";
import { EMAIL } from "../../../config";
import { linkClass } from "../../../styles";

export default function Contact() {
  return (
    <Section id="contact" image={contactImage} overlay="bg-bark/85">
      <SectionTitle kicker="Let's work together">Book</SectionTitle>
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-bone/80 text-base sm:text-lg leading-relaxed">
          Hosting a dance, retreat, session or ceremony? Tell me about it and
          I'll get back to you.
        </p>
        <div className="mt-10 rounded-2xl border border-bone/15 bg-bark/50 backdrop-blur-sm p-6 sm:p-10">
          <ContactForm email={EMAIL} />
        </div>
        <p className="font-body text-bone/65 text-sm mt-8">
          Or email me directly at{" "}
          <a href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
        </p>
      </div>
    </Section>
  );
}
