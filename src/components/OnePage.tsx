import noahImage from "../assets/noah.jpg";

export default function OnePage() {
    return (
        <div className="min-h-screen bg-bark flex items-center justify-center px-6 py-16">
            <div className="relative w-full max-w-sm flex flex-col items-center text-center">
                {/* soft glow behind the portrait */}
                <div
                    className="absolute -top-6 w-56 h-56 rounded-full blur-3xl opacity-40 pointer-events-none"
                    style={{
                        background:

                          "radial-gradient(circle, rgba(201,150,44,0.5), transparent 70%)",
                    }}
                />

                <img
                    src={noahImage}
                    alt="Noah Fernandes"
                    className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border border-bone/25"
                />

                <h1 className="font-display italic text-bone mt-6 text-3xl sm:text-4xl">
                    Noah Fernandes
                </h1>

                <h2 className="font-body text-xs uppercase tracking-[0.2em] mt-3 flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-clay">Counsellor</span>
                    <span className="text-bone/25">·</span>
                    <span className="text-clay">Facilitator</span>
                    <span className="text-bone/25">·</span>
                    <span className="text-clay">Sound Artist</span>
                </h2>

                <p className="font-body text-bone/45 text-xs uppercase tracking-[0.15em] mt-3">
                    Amsterdam, in person or online
                </p>

                <p className="font-body text-bone/70 text-sm sm:text-base leading-relaxed mt-6 max-w-xs">
                    Raised in Goa with music always around me, I later trained as a counsellor in Internal Family Systems, NVC, and Transactional Analysis. Today I bring it all together, music, presence, and parts work, to help people find their way back to themselves and their relationships.
                </p>

                <div className="w-full flex flex-col gap-3 mt-10">
                    <a
                        href="https://calendar.app.google/A8TXEoD3zxwKnkRo9"
                        className="w-full rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base py-3.5 transition-transform duration-200 hover:scale-[1.02]"
                    >
                        Discovery call
                    </a>
                    <a
                        href="https://hipsy.nl/shop/safeandsoundjourneys"
                        className="w-full rounded-full border border-bone/25 text-bone font-body font-medium text-sm sm:text-base py-3.5 transition-colors duration-200 hover:border-ochre/60 hover:text-ochre"
                    >
                        Events &amp; retreats
                    </a>
                </div>

                <a
                    href="mailto:hello@noahfernandes.com"
                    className="font-body text-bone/55 text-sm mt-5 underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200"
                >
                    hello@noahfernandes.com
                </a>

                <div className="flex items-center justify-center gap-6 mt-8">
                    <a
                        href="https://open.spotify.com/artist/5p3IIXsYQPHxCrtggdRAJ6?si=4pBycRO0TemUVqR4rtF_DA"
                        className="font-body text-bone/55 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200"
                    >
                        Spotify
                    </a>
                    <a
                        href="#"
                        className="font-body text-bone/55 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200"
                    >
                        YouTube
                    </a>
                    <a
                        href="#"
                        className="font-body text-bone/55 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
}