import NewsletterForm from "../../../components/forms/NewsletterForm";

// a slim band, right where fans have just watched and listened
export default function NewsletterBand() {
  return (
    <section id="newsletter" className="scroll-mt-16 border-y border-bone/10 bg-bark">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 text-center">
        <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em]">
          Newsletter
        </p>
        <p className="font-display italic text-bone text-2xl sm:text-3xl mt-3">
          New sessions and upcoming dates, in your inbox
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
