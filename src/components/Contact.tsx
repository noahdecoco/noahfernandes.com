export default function Contact() {
    return (
        <section className="w-full bg-bone" id="contact">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-bark/45 mb-6">
                    Get in touch
                </p>
                <h2
                    className="font-display italic text-bark mb-6 max-w-2xl"
                    style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)", lineHeight: 1.15, fontWeight: 600 }}
                >
                    Come home to yourself, whenever you're ready.
                </h2>
                <p className="font-body text-bark/70 text-base sm:text-lg leading-relaxed max-w-md mb-12">
                    The easiest way to start is a short call. No pressure, no
                    commitment, just a conversation to see if this is the right fit.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-20">
                    <a
                        href="tel:+31600000000"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-body font-medium transition-transform duration-200 hover:scale-[1.03] bg-ochre text-bark"
                        style={{ fontSize: "1.05rem" }}
                    >
                        Book a call
                    </a>

                    <div className="flex flex-col gap-1">
                        <a
                            href="tel:+31600000000"
                            className="font-body text-bark/80 text-base underline underline-offset-4 decoration-1"
                        >
                            +31 6 31 95 88 95
                        </a>
                        <a
                            href="mailto:hello@noahfernandes.com"
                            className="font-body text-bark/80 text-base underline underline-offset-4 decoration-1"
                        >
                            hello@noahfernandes.com
                        </a>
                    </div>
                </div>

                {/* secondary, lower commitment options */}
                <div className="border-t border-bark/10 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
                    <div>
                        <h3 className="font-display italic text-bark text-xl mb-3">
                            Not ready to talk yet?
                        </h3>
                        <p className="font-body text-bark/65 text-sm leading-relaxed mb-4">
                            Join the newsletter for the occasional update on group sessions
                            and retreats.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex gap-2"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Your email"
                                className="flex-1 min-w-0 rounded-full bg-transparent border border-bark/25 px-4 py-2.5 font-body text-sm text-bark placeholder:text-bark/40 focus:outline-none focus:border-clay"
                            />
                            <button
                                type="submit"
                                className="shrink-0 rounded-full px-5 py-2.5 font-body text-sm font-medium bg-bark text-bone transition-transform duration-200 hover:scale-[1.03]"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="font-display italic text-bark text-xl mb-3">
                            Prefer a community around you?
                        </h3>
                        <p className="font-body text-bark/65 text-sm leading-relaxed mb-4">
                            Join the WhatsApp community for group ceremonies and events as
                            they're announced.
                        </p>
                        <a
                            href="https://chat.whatsapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group font-body inline-flex items-center gap-2 text-clay text-sm font-medium"
                        >
                            Join the community
                            <span
                                className="transition-transform duration-200 group-hover:translate-x-1.5"
                                aria-hidden="true"
                            >
                →
              </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* footer bar */}
            <div className="border-t border-bark/10">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="font-body text-bark/50 text-xs">
                        Safe and Sound Journeys, Noah Fernandes
                    </p>
                    <p className="font-body text-bark/50 text-xs">
                        Amsterdam, in person and online
                    </p>
                </div>
            </div>
        </section>
    );
}