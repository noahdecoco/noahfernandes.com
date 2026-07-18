const stanzas = [
    {
        text: "This tends to be for people on the other side of a divorce, who still don't know what to do with everything it stirred up.",
        emphasis: "still don't know",
        indent: "lg:pl-0",
    },
    {
        text: "For people whose relationship is slipping, who don't know how to hold onto it, or whether they should.",
        emphasis: "slipping",
        indent: "lg:pl-12",
    },
    {
        text: "For people who already know, quietly, that this isn't right, but haven't found the courage to leave.",
        emphasis: "haven't found the courage",
        indent: "lg:pl-6",
    },
    {
        text: "For people who've gone quiet inside, who can't find the words for what they feel at work, at home, with the people closest to them.",
        emphasis: "gone quiet inside",
        indent: "lg:pl-16",
    },
    {
        text: "For people who want, more than anything, to feel again. To connect. To love, without holding so much back.",
        emphasis: "feel again. To connect. To love",
        indent: "lg:pl-4",
    },
];

function renderStanza(stanza: (typeof stanzas)[number]) {
    const parts = stanza.text.split(stanza.emphasis);
    return (
        <>
            {parts[0]}
            <span className="text-clay">{stanza.emphasis}</span>
            {parts[1]}
        </>
    );
}

export default function WhoThisIsFor() {
    return (
        <section className="relative w-full bg-bone py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
            {/* grounding thread — quiet vertical line, not a numbered sequence */}
            <div
                className="hidden lg:block absolute left-10 top-24 bottom-24 w-px bg-bark/15"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto lg:ml-24">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-bark/45 mb-10">
                    Who this tends to be for
                </p>

                <div className="flex flex-col gap-10 sm:gap-12">
                    {stanzas.map((stanza, i) => (
                        <p
                            key={i}
                            className={`font-display italic text-bark ${stanza.indent}`}
                            style={{
                                fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)",
                                lineHeight: 1.45,
                                fontWeight: 500,
                            }}
                        >
                            {renderStanza(stanza)}
                        </p>
                    ))}
                </div>

                <p className="font-body text-bark/60 text-base mt-16 max-w-md">
                    If any of that sounds familiar, you're in the right place. There's
                    no wrong door to start through.
                </p>
            </div>
        </section>
    );
}