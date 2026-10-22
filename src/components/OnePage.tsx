import { useState, type ReactNode } from "react";
import heroImage from "../assets/bg-hero.jpg";
import offeringsImage from "../assets/bg-offerings.jpg";
import watchImage from "../assets/noah-background.jpg";
import contactImage from "../assets/bg-contact.jpg";
import aboutImage from "../assets/noah-about.jpg";
import ContactForm from "./ContactForm";

// edit everything below this line to change the site's copy and links
// shown as written; the tel: link strips spaces. leave empty to hide it.
const PHONE: string = "+31 6 31958895";
const EMAIL = "hello@noahfernandes.com";
const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";

// YouTube video IDs (the part after watch?v= in the link).
// the cover is a frame from the middle of the video (maxres1/2/3 = early/middle/late),
// so it skips the text on the YouTube thumbnail. add `frame: "maxres1"` to pick another.
const VIDEOS: { id: string; title: string; frame?: string }[] = [
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
    title: "Ecstatic Dance & Festivals",
    body: "Live, looped and improvised sets for ecstatic dances, festivals and live venues, carrying a crowd from stillness to release and back again.",
  },
  {
    title: "Sound Journeys",
    body: "Immersive soundscapes for mindful deep inner exploration, self discovery and healing.",
  },
  {
    title: "Retreats & Ceremony",
    body: "Live music for wellness retreats and ceremonial events, working alongside facilitators to hold the journey.",
  },
  // {
  //   title: "Breathwork",
  //   body: "Live music that follows the breath and the arc of the session, so the space feels held.",
  // },
  // {
  //   title: "Body Percussion",
  //   body: "Workshops where the body becomes the instrument. We clap, stomp and sing our way into rhythm, connection and play.",
  // },
  // {
  //   title: "Ceremony",
  //   body: "Music for plant medicine and other ceremonies, with care for the people in the circle.",
  // },
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
    q: "Do you work one-on-one?",
    a: 'Yes. Alongside events, I offer private sessions for individuals and couples, such as a sound journey or a private ceremony. Choose "Private session" in the form below and tell me what you\'re looking for.',
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
    q: "Do you drink or use anything when you play?",
    a: "No. I don't drink, and I don't need anything to go deep. Whatever the venue, my music is made to bring people out of their heads and into their bodies and hearts.",
  },
  {
    q: "Do you consider plant medicine a drug?",
    a: "No. When plant medicine is used consciously, with intention and in a held ceremonial setting, I see it as medicine, not a drug.",
  },
  {
    q: "How do I hear your music first?",
    a: "Watch my live looping sessions on YouTube below, or listen to my studio recordings on Spotify.",
  },
];

const NAV = [
  { label: "Watch", href: "#watch" },
  { label: "Listen", href: "#listen" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const linkClass =
  "font-body text-bone/60 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200";
const primaryButton =
  "inline-block rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base px-8 py-3.5 transition-transform duration-200 hover:scale-[1.03]";
const ghostButton =
  "inline-block rounded-full border border-bone/30 text-bone font-body font-medium text-sm sm:text-base px-8 py-3.5 transition-colors duration-200 hover:border-ochre/70 hover:text-ochre";

function SectionTitle({
  children,
  kicker,
}: {
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {kicker && (
        <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em] mb-4">
          {kicker}
        </p>
      )}
      <h2 className="font-body font-light text-bone uppercase text-2xl sm:text-4xl tracking-[0.35em] sm:tracking-[0.45em] pl-[0.35em] sm:pl-[0.45em]">
        {children}
      </h2>
      <div className="mx-auto mt-6 h-px w-12 bg-ochre/60" />
    </div>
  );
}

// full-width band, optionally with its own darkened photo behind it
function Section({
  id,
  image,
  overlay = "bg-bark/80",
  className = "",
  padding = "py-24 sm:py-32",
  children,
}: {
  id?: string;
  image?: string;
  overlay?: string;
  className?: string;
  padding?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 overflow-hidden ${className}`}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${overlay}`} />
        </>
      )}
      <div className={`relative mx-auto w-full max-w-5xl px-6 ${padding}`}>
        {children}
      </div>
    </section>
  );
}

// shows a styled still from the video; the real player only loads on click
function VideoCard({
  id,
  title,
  frame = "maxres2",
  featured = false,
}: {
  id: string;
  title: string;
  frame?: string;
  featured?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const radius = featured ? "rounded-2xl" : "rounded-xl";

  if (playing) {
    return (
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        className={`w-full aspect-video ${radius} border-0 shadow-2xl`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className={`group relative block w-full aspect-video overflow-hidden ${radius} border border-bone/10 shadow-2xl cursor-pointer text-left`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/${frame}.jpg`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover sepia-[35%] saturate-[0.8] brightness-[0.7] transition duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/20 to-transparent" />

      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-bone/60 backdrop-blur-sm bg-bark/20 transition duration-300 group-hover:bg-ochre group-hover:border-ochre ${featured ? "w-20 h-20 sm:w-24 sm:h-24" : "w-14 h-14"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`fill-bone ml-1 transition-colors group-hover:fill-bark ${featured ? "w-7 h-7 sm:w-8 sm:h-8" : "w-5 h-5"}`}
          aria-hidden="true"
        >
          <path d="M7 4.5v15l13-7.5z" />
        </svg>
      </span>

      <span
        className={`absolute inset-x-0 bottom-0 ${featured ? "p-6 sm:p-8" : "p-4"}`}
      >
        <span
          className={`block font-display italic text-bone leading-tight ${featured ? "text-2xl sm:text-4xl" : "text-lg"}`}
        >
          {title}
        </span>
      </span>
    </button>
  );
}

function Socials() {
  return (
    <div className="flex items-center justify-center gap-6">
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
  );
}

export default function OnePage() {
  const [featured, ...moreVideos] = VIDEOS;

  return (
    <div className="min-h-screen bg-bark text-bone">
      {/* top bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-bark/70 backdrop-blur-md border-b border-bone/10">
        <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display italic text-lg text-bone">
            Noah Fernandes
          </a>
          <div className="flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hidden md:inline font-body text-xs uppercase tracking-[0.2em] text-bone/70 hover:text-ochre transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-ochre/70 text-ochre font-body text-xs uppercase tracking-[0.2em] px-4 py-2 hover:bg-ochre hover:text-bark transition-colors"
            >
              Book
            </a>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section
        id="top"
        className="relative min-h-svh flex items-end overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Palm trees reflected in still water at dusk in Goa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/30 to-bark" />

        <div className="relative w-full mx-auto max-w-5xl px-6 pb-20 sm:pb-28 pt-32 text-center">
          <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-bone/80">
            Amsterdam based Live-Looping Artist
          </p>
          <h1 className="font-display italic text-bone mt-5 text-5xl sm:text-7xl lg:text-8xl leading-none">
            Noah Fernandes
          </h1>
          <p className="font-body text-bone/85 text-base sm:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
            Organic and evolving sound journeys created in real time with
            instruments collected from around the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <a href="#contact" className={`${primaryButton} w-full sm:w-auto`}>
              Book me for your event
            </a>
            <a href="#watch" className={`${ghostButton} w-full sm:w-auto`}>
              Watch me live
            </a>
          </div>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </section>

      {/* offerings */}
      <Section id="offerings" image={offeringsImage} overlay="bg-bark/85">
        <SectionTitle kicker="Where my music lives">Offerings</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-bone/15 bg-bark/40 backdrop-blur-sm p-8 sm:odd:last:col-span-2 lg:odd:last:col-span-1"
            >
              <h3 className="font-body text-ochre text-sm uppercase tracking-[0.25em]">
                {o.title}
              </h3>
              <p className="font-body text-bone/75 text-base leading-relaxed mt-4">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* watch */}
      <Section id="watch" image={watchImage} overlay="bg-bark/85">
        <SectionTitle kicker="Live looping sessions">Watch</SectionTitle>
        <VideoCard {...featured} featured />
        <div className="grid gap-6 sm:grid-cols-3 mt-6">
          {moreVideos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
        <p className="text-center mt-12">
          <a
            href="https://www.youtube.com/@sounds-like-noah"
            target="_blank"
            rel="noopener noreferrer"
            className={ghostButton}
          >
            More on YouTube
          </a>
        </p>
      </Section>

      {/* listen: studio recordings, deliberately quieter than the live videos */}
      <Section id="listen" padding="py-20 sm:py-24">
        <SectionTitle kicker="Studio recordings">Listen</SectionTitle>
        <p className="font-body text-bone/65 text-base text-center -mt-6 mb-10">
          Tracks produced in my home studio.
        </p>
        <iframe
          title="Noah Fernandes on Spotify"
          src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?theme=0`}
          className="w-full max-w-2xl mx-auto block rounded-2xl border-0"
          height="352"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </Section>

      {/* about */}
      <Section id="about">
        <SectionTitle>About</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
          <img
            src={aboutImage}
            alt="Noah playing bansuri flute on a misty bridge at sunrise"
            loading="lazy"
            className="w-full max-w-md mx-auto md:max-w-none aspect-[4/5] object-cover rounded-2xl"
          />
          <div className="font-body text-bone/75 text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              I'm Noah, born and raised in Goa, India. I create immersive sound
              journeys with the instruments I've collected from the places I've
              travelled to over the years. My music is live and adaptive, an
              ever-evolving connection between the energy present in me and the
              space.
            </p>
            <p>
              For years my music was earth and fire: loud rock, hard drums,
              screaming. Then it became air and water: soft vocals, flute,
              stillness. Today I bring all of those elements together, and a set
              can move through any of them.
            </p>
            <p>
              I offer my music at ecstatic dances, sound journeys and
              ceremonies. For me, it's all about connection: with ourselves,
              with each other, and with the joy of being human and alive.
            </p>
          </div>
        </div>
      </Section>

      {/* faq */}
      <Section id="faq" className="border-t border-bone/10">
        <SectionTitle>FAQ</SectionTitle>
        <div className="max-w-3xl mx-auto divide-y divide-bone/10 border-y border-bone/10">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="font-body text-bone text-base sm:text-lg cursor-pointer list-none flex justify-between gap-6">
                {f.q}
                <span className="text-ochre text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="font-body text-bone/65 text-base leading-relaxed mt-4 pr-10">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* contact */}
      <Section id="contact" image={contactImage} overlay="bg-bark/85">
        <SectionTitle kicker="Let's work together">Book</SectionTitle>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-bone/80 text-base sm:text-lg leading-relaxed">
            Hosting a dance, retreat, session or ceremony? Tell me about it and
            I'll get back to you.
          </p>
          <div className="mt-10 rounded-2xl border border-bone/15 bg-bark/50 backdrop-blur-sm p-6 sm:p-10">
            <ContactForm email={EMAIL} />
          </div>
          <p className="font-body text-bone/65 text-sm mt-8">
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
        </div>
      </Section>

      <footer className="border-t border-bone/10 py-12 text-center">
        <Socials />
        <p className="font-body text-bone/35 text-xs mt-6">
          © {new Date().getFullYear()} Noah Fernandes
        </p>
      </footer>
    </div>
  );
}
