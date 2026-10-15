import type { ReactNode } from "react";
import noahImage from "../assets/noah.jpg";
import backgroundImage from "../assets/noah-background.jpg";

// edit everything below this line to change the site's copy and links
const BOOKING_URL = "https://calendar.app.google/A8TXEoD3zxwKnkRo9";
const EMAIL = "hello@noahfernandes.com";
const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";

const SOCIALS = [
    { label: "Spotify", href: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}` },
    { label: "YouTube", href: "https://www.youtube.com/@sounds-like-noah" },
    { label: "Instagram", href: "https://www.instagram.com/sounds.like.noah/" },
];

const OFFERINGS = [
    {
        title: "Ecstatic Dance",
        body: "Live, looped and improvised sets that carry a room from stillness to release and back again.",
    },
    {
        title: "Sound Healing",
        body: "Immersive soundscapes for sound baths and healing sessions, private or in groups.",
    },
    {
        title: "Yoga & Breathwork",
        body: "Live music that follows the breath and the flow of the class, so the space feels held.",
    },
    {
        title: "Ceremony",
        body: "Music for plant medicine and other ceremonies, with care for the people in the circle.",
    },
];

const FAQS = [
    {
        q: "What kind of music do you play?",
        a: "Mostly live looping, layering sounds in the moment. Every set is shaped by the room, so no two are the same.",
    },
    {
        q: "Can I book you for my event or retreat?",
        a: "Yes. Book a call or send me an email with the date, location, type of session and number of people, and we'll take it from there.",
    },
    {
        q: "Where are you based?",
        a: "Amsterdam. Get in touch if your event is elsewhere and we'll see what's possible.",
    },
    {
        q: "Do you bring your own equipment?",
        a: "I bring my instruments and looping setup. For larger rooms we'll talk through sound system needs ahead of time.",
    },
    {
        q: "How do I hear your music first?",
        a: "Have a listen on Spotify below, or watch live sessions on YouTube.",
    },
];

const linkClass =
    "font-body text-bone/55 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200";

function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="font-display italic text-bone text-2xl sm:text-3xl text-center mb-8">
            {children}
        </h2>
    );
}

export default function OnePage() {
    return (
        <div className="relative min-h-screen bg-bark overflow-hidden">
            {/* faded black and white blurred background */}
            <img
                src={backgroundImage}
                alt=""
                className="fixed inset-0 w-full h-full object-cover grayscale blur-xs scale-110"
                style={{ opacity: 0.8 }}
            />
            <div className="fixed inset-0 bg-bark/75" />

            <main className="relative z-10 mx-auto w-full max-w-xl px-6">
                {/* hero */}
                <section className="min-h-screen flex flex-col items-center justify-center text-center py-16">
                    {/* soft glow behind the portrait */}
                    <div className="relative">
                        <div
                            className="absolute -inset-12 rounded-full blur-3xl opacity-40 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(201,150,44,0.5), transparent 70%)",
                            }}
                        />
                        <img
                            src={noahImage}
                            alt="Noah Fernandes"
                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border border-bone/25"
                        />
                    </div>

                    <h1 className="font-display italic text-bone mt-6 text-3xl sm:text-4xl">
                        Noah Fernandes
                    </h1>

                    <p className="font-body text-xs uppercase tracking-[0.2em] mt-3 text-clay">
                        Musician · Music as medicine
                    </p>

                    <p className="font-body text-bone/45 text-xs uppercase tracking-[0.15em] mt-3">
                        Based in Amsterdam
                    </p>

                    <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed mt-6">
                        Live music for ecstatic dance, sound healing, yoga,
                        breathwork and ceremony. For spaces where people come
                        to feel, move and heal.
                    </p>

                    <div className="w-full flex flex-col gap-3 mt-10">
                        <a
                            href={BOOKING_URL}
                            className="w-full rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base py-3.5 transition-transform duration-200 hover:scale-[1.02]"
                        >
                            Book me for your event
                        </a>
                        <a
                            href="#listen"
                            className="w-full rounded-full border border-bone/25 text-bone font-body font-medium text-sm sm:text-base py-3.5 transition-colors duration-200 hover:border-ochre/60 hover:text-ochre"
                        >
                            Listen
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-8">
                        {SOCIALS.map((s) => (
                            <a key={s.label} href={s.href} className={linkClass}>
                                {s.label}
                            </a>
                        ))}
                    </div>
                </section>

                {/* offerings */}
                <section id="offerings" className="py-16">
                    <SectionTitle>Where my music lives</SectionTitle>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {OFFERINGS.map((o) => (
                            <div
                                key={o.title}
                                className="rounded-2xl border border-bone/15 bg-bark/50 p-5"
                            >
                                <h3 className="font-body text-ochre text-sm uppercase tracking-[0.15em]">
                                    {o.title}
                                </h3>
                                <p className="font-body text-bone/70 text-sm leading-relaxed mt-2">
                                    {o.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* listen */}
                <section id="listen" className="py-16">
                    <SectionTitle>Listen</SectionTitle>
                    <iframe
                        title="Noah Fernandes on Spotify"
                        src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?theme=0`}
                        className="w-full rounded-2xl border-0"
                        height="352"
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                </section>

                {/* about */}
                <section id="about" className="py-16 text-center">
                    <SectionTitle>About</SectionTitle>
                    <div className="font-body text-bone/70 text-sm sm:text-base leading-relaxed space-y-5">
                        <p>
                            Raised in Goa with music always around me, I've been
                            performing since I was six. Today I make music that
                            moves in many directions, and I offer it wherever
                            people gather to work on themselves.
                        </p>
                        <p>
                            On the dance floor, in a sound bath, on the yoga mat
                            or in ceremony, my aim is the same: to create a
                            space where people can drop out of their heads and
                            into their bodies. Music is the medicine.
                        </p>
                    </div>
                </section>

                {/* faq */}
                <section id="faq" className="py-16">
                    <SectionTitle>FAQ</SectionTitle>
                    <div className="space-y-3">
                        {FAQS.map((f) => (
                            <details
                                key={f.q}
                                className="group rounded-2xl border border-bone/15 bg-bark/50 px-5 py-4"
                            >
                                <summary className="font-body text-bone text-sm sm:text-base cursor-pointer list-none flex justify-between gap-4">
                                    {f.q}
                                    <span className="text-ochre transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="font-body text-bone/65 text-sm leading-relaxed mt-3">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* contact */}
                <section id="contact" className="py-16 pb-24 text-center">
                    <SectionTitle>Let's work together</SectionTitle>
                    <p className="font-body text-bone/70 text-sm sm:text-base leading-relaxed">
                        Hosting a dance, retreat, class or ceremony? Book a call
                        or drop me a line.
                    </p>
                    <div className="w-full flex flex-col gap-3 mt-8">
                        <a
                            href={BOOKING_URL}
                            className="w-full rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base py-3.5 transition-transform duration-200 hover:scale-[1.02]"
                        >
                            Book a call
                        </a>
                    </div>
                    <a href={`mailto:${EMAIL}`} className={`${linkClass} inline-block mt-5`}>
                        {EMAIL}
                    </a>
                    <p className="font-body text-bone/30 text-xs mt-16">
                        © {new Date().getFullYear()} Noah Fernandes
                    </p>
                </section>
            </main>
        </div>
    );
}
