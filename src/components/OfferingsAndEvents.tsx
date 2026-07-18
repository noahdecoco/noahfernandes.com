const offerings = [
    {
        label: "One-on-one",
        title: "Individual coaching",
        description:
            "Ongoing sessions grounded in parts work, held in whatever container the moment calls for. In person in Amsterdam, or online.",
    },
    {
        label: "Going deeper",
        title: "Psychedelic-assisted packages",
        description:
            "Truffle ceremonies with real preparation and integration on either side, so what comes up in the session actually has somewhere to land.",
    },
    {
        label: "Together",
        title: "Group sessions",
        description:
            "There's a different kind of power in doing this work alongside others. Being witnessed, and witnessing someone else recognize themselves in what you're going through, changes the shape of it.",
    },
];

export default function OfferingsAndEvents() {
    return (
        <section className="w-full bg-bone py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto">
                {/* offerings */}
                <p className="font-body text-xs uppercase tracking-[0.3em] text-bark/45 mb-6">
                    What's offered
                </p>
                <h2
                    className="font-display italic text-bark mb-16"
                    style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: 1.2, fontWeight: 600 }}
                >
                    A few ways to work together.
                </h2>

                <div className="flex flex-col">
                    {offerings.map((offer, i) => (
                        <div
                            key={offer.title}
                            className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 py-8 ${
                                i !== offerings.length - 1 ? "border-b border-bark/10" : ""
                            }`}
                        >
              <span className="font-body text-xs uppercase tracking-[0.25em] text-clay w-full sm:w-40 shrink-0 pt-1">
                {offer.label}
              </span>
                            <div className="flex-1">
                                <h3 className="font-display italic text-bark text-2xl sm:text-3xl mb-3">
                                    {offer.title}
                                </h3>
                                <p className="font-body text-bark/70 text-base leading-relaxed max-w-xl">
                                    {offer.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* groups and events */}
                <div className="mt-24 sm:mt-32">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-bark/45 mb-6">
                        Groups and events
                    </p>
                    <h2
                        className="font-display italic text-bark mb-10"
                        style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", lineHeight: 1.25, fontWeight: 600 }}
                    >
                        Upcoming group ceremonies, retreats, and workshops are listed on Hipsy.
                    </h2>

                    <div className="flex items-center gap-3 mb-10">
            <span className="font-display text-ochre text-lg tracking-widest" aria-hidden="true">
              ★★★★★
            </span>
                        <span className="font-body text-bark/60 text-sm">
              5.0 from Hipsy reviews
            </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                        <div>
                            <p className="font-display italic text-bark text-lg leading-snug">
                                "I went in without knowing what to expect. When it was over,
                                I felt like a weight had lifted off my chest. Noah explained
                                everything clearly, and took real time for everyone."
                            </p>
                            <p className="font-body text-bark/50 text-xs uppercase tracking-wide mt-3">
                                Jan Poiter
                            </p>
                        </div>
                        <div>
                            <p className="font-display italic text-bark text-lg leading-snug">
                                "Noah's music and singing created a safe space, he's a
                                wonderful facilitator. It was soft and warm, exactly what I
                                needed that day. I'll definitely be back."
                            </p>
                            <p className="font-body text-bark/50 text-xs uppercase tracking-wide mt-3">
                                Ine Werens
                            </p>
                        </div>
                        <div>
                            <p className="font-display italic text-bark text-lg leading-snug">
                                "This ceremony gave my body, mind, and soul exactly what
                                they needed: to land, to feel safe, to be held in a way I
                                can't reach on my own. It let me fully reset and release
                                grief and loneliness I'd been carrying, feelings that had
                                left me stuck for a long time."
                            </p>
                            <p className="font-body text-bark/50 text-xs uppercase tracking-wide mt-3">
                                Karin Olsson
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://hipsy.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-body inline-flex items-center gap-2 text-clay text-lg font-medium"
                    >
                        View events on Hipsy
                        <span
                            className="transition-transform duration-200 group-hover:translate-x-1.5"
                            aria-hidden="true"
                        >
              →
            </span>
                    </a>
                </div>

                {/* safety, short and quiet, not a liability form */}
                <p className="font-body text-bark/50 text-sm mt-20 pt-8 border-t border-bark/10 max-w-md">
                    Psychedelic work always starts with a screening conversation, to
                    make sure it's the right fit and the right timing.
                </p>
            </div>
        </section>
    );
}