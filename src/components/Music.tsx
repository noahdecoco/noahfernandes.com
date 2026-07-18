const tracks = [
    { title: "Homecoming", duration: "4:12" },
    { title: "Slow Fire", duration: "3:48" },
    { title: "River Bed", duration: "5:03", free: true },
];

export default function Music() {
    return (
        <section className="w-full bg-bark py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-bone/45 mb-6">
                    Music
                </p>
                <h2
                    className="font-display italic text-bone mb-4"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, fontWeight: 600 }}
                >
                    Close your eyes.
                </h2>
                <p className="font-body text-bone/70 text-base sm:text-lg leading-relaxed max-w-md mb-16">
                    Music has always been a part of my life, long before this became
                    work. Here is a small window into it. Sit close, let it carry you
                    inwards, and see what comes up and how it makes you feel.
                </p>

                {/* the record sleeve */}
                <div className="rounded-[2.5rem] border border-bone/15 overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                    {/* cover art, styled like a player rather than a plain image slot */}
                    <div
                        className="relative aspect-square md:aspect-auto min-h-[320px] flex items-center justify-center overflow-hidden"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 40%, rgba(74,93,58,0.35), rgba(36,29,21,0.95) 70%)",
                        }}
                    >
                        <p className="font-body text-bone/30 text-xs text-center px-8 absolute top-6 left-0 right-0 tracking-wide uppercase">
                            Image placeholder, portrait or an instrument in low light
                        </p>

                        <button
                            type="button"
                            aria-label="Play"
                            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                            style={{
                                backgroundColor: "rgba(239,232,216,0.08)",
                                border: "1px solid rgba(239,232,216,0.3)",
                            }}
                        >
              <span
                  className="w-0 h-0 ml-1"
                  style={{
                      borderTop: "12px solid transparent",
                      borderBottom: "12px solid transparent",
                      borderLeft: "18px solid #C9962C",
                  }}
              />
                        </button>
                    </div>

                    {/* track list */}
                    <div className="p-6 sm:p-10 flex flex-col justify-center">
                        <ul className="flex flex-col">
                            {tracks.map((track, i) => (
                                <li
                                    key={track.title}
                                    className={`flex items-center justify-between py-4 ${
                                        i !== tracks.length - 1 ? "border-b border-bone/10" : ""
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                    <span className="font-body text-bone/40 text-sm w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                                        <span className="font-display italic text-bone text-lg sm:text-xl">
                      {track.title}
                    </span>
                                        {track.free && (
                                            <span className="font-body text-[10px] uppercase tracking-wider text-ochre border border-ochre/40 rounded-full px-2 py-0.5">
                        Free download
                      </span>
                                        )}
                                    </div>
                                    <span className="font-body text-bone/40 text-sm">
                    {track.duration}
                  </span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 pt-6 border-t border-bone/10">
                            <a
                                href="https://open.spotify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-ochre text-sm underline underline-offset-4 decoration-1"
                            >
                                Full discography on Spotify
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-bone/60 text-sm underline underline-offset-4 decoration-1"
                            >
                                Live sessions on YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}