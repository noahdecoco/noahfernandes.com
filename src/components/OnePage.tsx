import type { ReactNode } from "react";
import noahImage from "../assets/noah.jpg";
import backgroundImage from "../assets/noah-background.jpg";
import aboutImage from "../assets/noah-about.jpg";
import ContactForm from "./ContactForm";

// edit everything below this line to change the site's copy and links
// shown as written; the tel: link strips spaces. leave empty to hide it.
const PHONE: string = "+31 6 31958895";
const EMAIL = "hello@noahfernandes.com";
const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";

// YouTube video IDs (the part after watch?v= in the link)
const VIDEOS = [
  { id: "oRT6zA0aBbU", title: "Calm your anxious mind" },
  { id: "vl_704ZeMqs", title: "Zen & Funky Live Looping Session" },
  { id: "BHkwrfycJvU", title: "Chill and groovy live looping session" },
  { id: "2OI-pz6DttQ", title: "Healing Bansuri Melodies" },
];

const SOCIALS = [
  {
    label: "Spotify",
    href: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`,
  },
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
    title: "Breathwork",
    body: "Live music that follows the breath and the arc of the session, so the space feels held.",
  },
  {
    title: "Body Percussion",
    body: "Workshops where the body becomes the instrument. We clap, stomp and sing our way into rhythm, connection and play.",
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
    a: "Yes. Fill in the form below with the date, location, type of session and number of people, and we'll take it from there.",
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
    q: "Are your sets alcohol- and drug-free?",
    a: "Yes. I don't drink, and my music is made for clear, conscious spaces where people celebrate and go deep without needing anything else.",
  },
  {
    q: "Do you consider plant medicine a drug?",
    a: "No. When plant medicine is used consciously, with intention and in a held ceremonial setting, I see it as medicine, not a drug.",
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
        className="fixed inset-0 w-full h-full object-cover gryscale blur-xs scale-110"
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
            Sound Artist & Musician
          </p>

          <p className="font-body text-bone/45 text-xs uppercase tracking-[0.15em] mt-3">
            Based in Amsterdam
          </p>

          <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed mt-6">
            Live music for ecstatic dance, sound healing, breathwork and
            ceremony. For spaces where people come to feel, move and heal.
          </p>

          <div className="w-full flex flex-col gap-3 mt-10">
            <a
              href="#contact"
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
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
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
                className="rounded-2xl border border-bone/15 bg-bark/50 p-5 sm:odd:last:col-span-2"
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

        {/* watch */}
        <section id="watch" className="py-16">
          <SectionTitle>Watch</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {VIDEOS.map((v) => (
              <div key={v.id}>
                <iframe
                  title={v.title}
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  className="w-full aspect-video rounded-2xl border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="font-body text-bone/65 text-sm mt-2">{v.title}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a
              href="https://www.youtube.com/@sounds-like-noah"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              More on YouTube
            </a>
          </p>
        </section>

        {/* about */}
        <section id="about" className="py-16">
          <SectionTitle>About</SectionTitle>
          <img
            src={aboutImage}
            alt="Noah playing bansuri flute on a misty bridge at sunrise"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-2xl border border-bone/15 mb-8"
          />
          <div className="font-body text-bone/70 text-sm sm:text-base leading-relaxed space-y-5">
            <p>
              I was born in Goa to a Goan father and a French mother. My dad is a musician, so music was always around me, and my mum is a wonderful cook, so I learned early how to enjoy the good things in life. I wrote my first song at six, splashing in the bathtub and singing at the top of my lungs. My dad recorded it, made a backing track, and soon after I was singing it live on stage. I later picked up guitar and flute, but drums and percussion have always had my heart.
            </p>
            <p>
              For years my music was earth and fire: 90s rock, hitting the drums hard and screaming my lungs out on stage. What made it special was always the people. I used to tell audiences: I love making this music, but when you love it, I love it even more.
            </p>
            <p>
              Then I quit alcohol, and everything shifted. Sober, my music turned to air and water: soft vocals, gentle guitar and flute, music for stillness and inner journeys. Eventually I found my way to ecstatic dances, where people celebrated through music without drugs or alcohol, and to plant medicine ceremonies, where music carried people deeper within.
            </p>
            <p>
              Today I bring all of it together: earth, fire, air and water. I create soundscapes that move between states, from stillness to release and back again, all played live on real instruments and a looper, with no samples. In a time when so much music is machine-made, I'm here to remind us that music was made by humans, for humans. I'm just the vessel it moves through, and sharing it is my gift. Music is the medicine.
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
                  <span className="text-ochre transition-transform group-open:rotate-45">
                    +
                  </span>
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
            Hosting a dance, retreat, session or ceremony? Tell me about it and
            I'll get back to you.
          </p>
          <div className="mt-8">
            <ContactForm email={EMAIL} />
          </div>
          <p className="font-body text-bone/55 text-sm mt-8">
            Prefer to talk first?{" "}
            {PHONE && (
              <>
                Call{" "}
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className={linkClass}
                >
                  {PHONE}
                </a>{" "}
                or email{" "}
              </>
            )}
            {!PHONE && "Email "}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </p>
          <p className="font-body text-bone/30 text-xs mt-16">
            © {new Date().getFullYear()} Noah Fernandes
          </p>
        </section>
      </main>
    </div>
  );
}
