export default function Philosophy() {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center py-24 sm:py-0">
            {/* background — placeholder, swap for a real forest/jungle photo */}
            <img
                src="https://picsum.photos/1800/1400?grayscale"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "sepia(0.25) hue-rotate(60deg) saturate(1.3) contrast(1.05) brightness(0.5)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bark/85 via-bark/40 to-bark/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(36,29,21,0.15),rgba(36,29,21,0.75)_75%)]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                {/* the clearing — a held, quiet space in the middle of the forest */}
                <div
                    className="max-w-xl rounded-[2.5rem] px-8 py-10 sm:px-12 sm:py-14"
                    style={{
                        backgroundColor: "rgba(36,29,21,0.55)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(239,232,216,0.15)",
                    }}
                >
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-bone/45 mb-8">
                        How this is held
                    </p>

                    <h2
                        className="font-display italic text-bone"
                        style={{
                            fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                            lineHeight: 1.2,
                            fontWeight: 600,
                        }}
                    >
                        Transformation happens through
                        <br className="hidden sm:block" /> presence, not force.
                    </h2>

                    <div className="mt-8 flex flex-col gap-5 max-w-md">
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            Every session is grounded in compassion and gentle inquiry.
                            Soft, but powerful enough to move what actually needs to move.
                        </p>
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            A seed becomes a tree in its own time, not before. And a tree
                            becoming part of a forest is never really a solitary thing.
                            Real growth rarely happens alone.
                        </p>
                    </div>
                </div>
            </div>

            {/* placeholder tag */}
            <div className="font-body absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-20 px-3 py-1.5 rounded-full text-[11px] tracking-wide bg-bark/55 text-bone border border-bone/25">
                Image placeholder, forest or jungle canopy
            </div>
        </section>
    );
}