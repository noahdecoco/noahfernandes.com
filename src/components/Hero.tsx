export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* background image */}
            <img
                src="/src/assets/hero-background.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "contrast(1.05) brightness(0.85)" }}
            />

            {/* scrim: darker toward the bottom so text stays legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-bark/35 via-bark/55 to-bark/95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(201,150,44,0.18),transparent_55%)]" />

            {/* vertical side label */}
            <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <span className="font-body text-xs uppercase text-bone/55 tracking-[0.3em] [writing-mode:vertical-rl]">
          Amsterdam · in person &amp; online
        </span>
            </div>

            {/* content — anchored low, asymmetric */}
            <div className="relative z-10 w-full min-h-screen flex flex-col justify-end">
                <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* headline + subtext */}
                        <div className="max-w-3xl">
                            <h1
                                className="font-display italic text-bone leading-[1.04]"
                                style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", fontWeight: 600 }}
                            >
                                Come home to yourself.
                            </h1>

                            <p className="font-body mt-6 max-w-md text-bone/80 text-[1.05rem] font-light leading-relaxed">
                                A space to feel what's been sitting quietly underneath, held
                                with presence, live music, and no rush to get anywhere.
                            </p>
                        </div>

                        {/* CTA block */}
                        <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
                            <a
                                href="#contact"
                                className="group font-body inline-flex items-center gap-2 text-ochre text-[1.35rem] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-bone focus-visible:outline-offset-4"
                            >
                                Book a call
                                <span
                                    className="transition-transform duration-200 group-hover:translate-x-1.5"
                                    aria-hidden="true"
                                >
                  →
                </span>
                            </a>
                            <a
                                href="#contact"
                                className="font-body underline underline-offset-4 decoration-1 text-bone/70 text-[0.95rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-bone focus-visible:outline-offset-4"
                            >
                                or reach out directly by phone or email
                            </a>
                        </div>
                    </div>
                </div>

                {/* scroll cue */}
                <div className="hidden sm:flex justify-center pb-6">
                    <div className="w-px h-10 bg-bone/40 animate-[ssj-scroll_2.2s_ease-in-out_infinite] motion-reduce:animate-none" />
                </div>
            </div>
        </section>
    );
}