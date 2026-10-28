import { BTW_ID, EMAIL, FOOTER_LINKS, KVK } from "../../config";
import { linkClass } from "../../styles";
import NewsletterForm, { newsletterEnabled } from "../forms/NewsletterForm";
import Socials from "../Socials";

export default function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 py-12 px-6 text-center">
      {newsletterEnabled && (
        <div className="mb-10">
          <p className="font-body text-bone/60 text-sm mb-4">Stay in the loop</p>
          <NewsletterForm compact />
        </div>
      )}
      <nav
        aria-label="Site"
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
      >
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-body text-bone/70 text-xs uppercase tracking-[0.2em] hover:text-ochre transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <Socials />
      <a href={`mailto:${EMAIL}`} className={`${linkClass} inline-block mt-5`}>
        {EMAIL}
      </a>
      <p className="font-body text-bone/35 text-xs mt-6">
        © {new Date().getFullYear()} Noah Fernandes · KvK {KVK} · btw {BTW_ID}
      </p>
    </footer>
  );
}
