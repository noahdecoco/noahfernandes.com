export default function HowItWorks() {
    return (
        <section
            className="w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
            style={{
                backgroundColor: "#EFE8D8",
                backgroundImage:
                    "radial-gradient(rgba(36,29,21,0.07) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }}
        >
            <div className="max-w-5xl mx-auto">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-bark/45 mb-6">
                    How this works
                </p>
                <h2
                    className="font-display italic text-bark mb-16 sm:mb-20"
                    style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: 1.2, fontWeight: 600 }}
                >
                    Three layers, one held space.
                </h2>

                {/* outer — the container, lifted off the patterned backdrop with a solid fill and soft shadow */}
                <div
                    className="rounded-[2rem] border-2 border-moss/40 bg-bone p-5 sm:p-8 lg:p-10"
                    style={{ boxShadow: "0 20px 50px -20px rgba(36,29,21,0.25)" }}
                >
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-moss">
            The container: presence, silence, or sound
          </span>
                    <p className="font-body text-bark/75 mt-3 mb-8 max-w-lg text-[0.98rem] leading-relaxed">
                        Every session is held in a calm, steady container: presence,
                        silence, or live music and sound when it's called for. Never a
                        playlist, because when it's happening right there with you, it
                        changes everything.
                    </p>

                    {/* middle — parts work, the primary work */}
                    <div className="rounded-3xl bg-clay/95 p-6 sm:p-10 lg:p-12">
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-bone/70">
              Parts work: what actually happens
            </span>
                        <p className="font-body text-bone mt-3 mb-8 max-w-lg text-[0.98rem] sm:text-base leading-relaxed">
                            Inside that held space is the parts work, Internal Family
                            Systems, in plain terms: getting to know the different parts of
                            you, and building a stronger relationship with all of them.
                            Less fragmented. More whole.
                        </p>

                        {/* inner — going deeper with psychedelic assistance */}
                        <div className="rounded-2xl border-2 border-dashed border-dusk/50 bg-bark/10 p-6 sm:p-8">
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-bone/80">
                Going deeper with psychedelic assistance
              </span>
                            <p className="font-body text-bone/90 mt-3 max-w-md text-[0.95rem] leading-relaxed">
                                For those who want to go further, truffles can be brought in
                                as assistance. These spaces stay held the same way, with
                                live music and sound healing, reaching parts of you that
                                have been forgotten, repressed, or protected for a long
                                time. This is where the deepest healing tends to happen, at
                                the root. Entirely optional, and never the starting point.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}