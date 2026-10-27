import { useState, type ReactNode } from "react";
import heroImage from "../assets/bg-hero.jpg";
import offeringsImage from "../assets/bg-offerings.jpg";
import watchImage from "../assets/noah-background.jpg";
import contactImage from "../assets/bg-contact.jpg";
import listenImage from "../assets/bg-listen.jpg";
import aboutImage from "../assets/noah-about.jpg";
import ContactForm from "./ContactForm";
import NewsletterForm, { newsletterEnabled } from "./NewsletterForm";
import { useEvents } from "./events";
import NotifyDialog from "./NotifyDialog";

// edit everything below this line to change the site's copy and links
const EMAIL = "hello@noahfernandes.com";
const KVK = "80492827";
const BTW_ID = "NL003447542B70";
const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";
const SSJ_URL = "https://hipsy.nl/safeandsoundjourneys";

// YouTube video IDs (the part after watch?v= in the link).
// the cover is a frame from the middle of the video (maxres1/2/3 = early/middle/late),
// so it skips the text on the YouTube thumbnail. add `frame: "maxres1"` to pick another.
const VIDEOS: { id: string; title: string; frame?: string }[] = [
  { id: "oRT6zA0aBbU", title: "Calm your anxious mind" },
  { id: "QKBYHoLNZ9U", title: "A Sound Journey from Ashram to Jungle" },
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

const OFFERINGS: {
  title: string;
  body: string;
  link?: { label: string; href: string };
}[] = [
  {
    title: "Sound Journeys",
    body: "Immersive, slowly unfolding soundscapes for sound journeys, guiding people inward for deep rest and self-discovery. I also host my own.",
    link: { label: "Safe and Sound Journeys", href: SSJ_URL },
  },
  {
    title: "Retreats & Ceremony",
    body: "Live music for wellness retreats and ceremonies, played alongside facilitators to support people as they go deeper within.",
  },
  {
    title: "Ecstatic Dance & Festivals",
    body: "Live, looped and improvised sets for ecstatic dances, festivals and venues, carrying the crowd from stillness to release and back again.",
  },
  {
    title: "Tribe Sessions",
    body: "Workshops I facilitate, where we discover the sound each of us carries and learn to resonate as one, through voice, body percussion and unplugged instruments.",
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

// short quotes from Safe and Sound Journeys reviews on Hipsy
const REVIEWS = [
  {
    quote: "The music Noah makes picks you up and takes you along.",
    name: "Bas",
  },
  {
    quote: "Noah's music and singing created a safe space for me.",
    name: "Ine",
  },
  {
    quote:
      "Music and vibrations are such a powerful f*cking medicine. Wow, I felt alive.",
    name: "Thomas",
  },
  {
    quote:
      "One of the most powerful breathwork and sound journeys I've experienced.",
    name: "Faried",
  },
];

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What kind of music do you play?",
    a: "Mostly live looping, layering sounds in the moment. Every set is shaped by the room, so no two are the same.",
  },
  {
    q: "Can I book you for my event or retreat?",
    a: "Yes. Fill in the form below with the date, location, type of session and number of people, and we'll take it from there. I can also pair a set with a workshop, so your group gets to dance to the music and make it too.",
  },
  {
    q: "Do you offer private sessions?",
    a: 'Yes. Alongside events, I offer private sessions for individuals, couples and small groups, such as a sound journey or a private ceremony. Choose "Private session" in the form below and tell me what you\'re looking for.',
  },
  {
    q: "Where are you from?",
    a: "I'm originally from Goa, India, and I'm mixed: half Indian, half French. I've lived in India and Singapore, and I'm now based in Amsterdam. If your event is elsewhere, get in touch and we'll see what's possible.",
  },
  {
    q: "Do you bring your own equipment?",
    a: "Yes, I bring my own instruments and looping setup. Get in touch and I'll send you my tech rider, so you know exactly what I need from the venue.",
  },
  {
    q: "Do you consider plant medicine a drug?",
    a: (
      <>
        No. When plant medicine is used consciously, with intention and in a
        held ceremonial setting, I see it as medicine, not a drug. Through{" "}
        <a
          href={SSJ_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-1 hover:text-ochre transition-colors"
        >
          Safe and Sound Journeys
        </a>
        , I occasionally hold gentle ceremonies with truffle tea, which is
        legal in the Netherlands.
      </>
    ),
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

// fine film grain laid over plain sections so the brown doesn't read as flat
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// full-width band, optionally with its own darkened photo behind it.
// without a photo, `glow` places a soft warm light (a CSS background) instead.
function Section({
  id,
  image,
  overlay = "bg-bark/80",
  className = "",
  padding = "py-24 sm:py-32",
  glow,
  children,
}: {
  id?: string;
  image?: string;
  overlay?: string;
  className?: string;
  padding?: string;
  glow?: string;
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
      {!image && glow && (
        <>
          <div className="absolute inset-0" style={{ background: glow }} />
          <div
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: GRAIN }}
          />
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
  const events = useEvents();
  const [notifyFor, setNotifyFor] = useState<string | null>(null);
  const nav = events.length
    ? [{ label: "Events", href: "#events" }, ...NAV]
    : NAV;

  return (
    <div className="min-h-screen bg-bark text-bone">
      {/* top bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-bark/70 backdrop-blur-md border-b border-bone/10">
        <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display italic text-lg text-bone">
            Noah Fernandes
          </a>
          <div className="flex items-center gap-6">
            {nav.map((n) => (
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
            Amsterdam-based Live-Looping Artist
          </p>
          <h1 className="font-display italic text-bone mt-5 text-5xl sm:text-7xl lg:text-8xl leading-none">
            Noah Fernandes
          </h1>
          <p className="font-body text-bone/85 text-base sm:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
            Organic, evolving music created in the moment with real
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
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {OFFERINGS.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-bone/15 bg-bark/40 backdrop-blur-sm p-8 sm:odd:last:col-span-2"
            >
              <h3 className="font-body text-ochre text-sm uppercase tracking-[0.25em]">
                {o.title}
              </h3>
              <p className="font-body text-bone/75 text-base leading-relaxed mt-4">
                {o.body}
              </p>
              {o.link && (
                <a
                  href={o.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 font-body text-ochre text-sm hover:text-bone transition-colors"
                >
                  {o.link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* events: read live from the Google Sheet, hidden when nothing is coming up */}
      {events.length > 0 && (
        <Section
          id="events"
          glow="radial-gradient(ellipse 50% 60% at 15% 40%, rgba(201,150,44,0.18), transparent 70%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(74,93,58,0.25), transparent 70%)"
        >
          <SectionTitle kicker="Come and join">Upcoming Events</SectionTitle>
          <ul className="max-w-3xl mx-auto divide-y divide-bone/10 border-y border-bone/10">
            {events.map((e) => (
              <li
                key={`${e.date.getTime()}-${e.title}`}
                className="flex items-center gap-5 sm:gap-8 py-6"
              >
                <div className="w-14 sm:w-16 shrink-0 text-center">
                  <p className="font-display text-bone text-3xl sm:text-4xl leading-none">
                    {e.date.getDate()}
                  </p>
                  <p className="font-body text-ochre text-[11px] uppercase tracking-[0.2em] mt-2">
                    {e.date.toLocaleString("en-GB", { month: "short" })}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  {e.type && (
                    <span className="inline-block rounded-full border border-ochre/50 text-ochre font-body text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 mb-2">
                      {e.type}
                    </span>
                  )}
                  <h3 className="font-display italic text-bone text-xl sm:text-2xl leading-tight">
                    {e.title}
                  </h3>
                  <p className="font-body text-bone/60 text-sm mt-1">
                    {[
                      e.date.toLocaleDateString("en-GB", { weekday: "long" }),
                      e.time,
                      e.venue,
                      e.city,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
                {e.link ? (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-bone/30 text-bone font-body text-xs sm:text-sm px-4 sm:px-5 py-2 hover:border-ochre hover:text-ochre transition-colors"
                  >
                    Info
                  </a>
                ) : (
                  // no link yet: offer the newsletter in a pop-up so they hear when it opens
                  newsletterEnabled && (
                    <button
                      type="button"
                      onClick={() => setNotifyFor(e.title)}
                      className="shrink-0 rounded-full border border-dashed border-bone/30 text-bone/70 font-body text-xs sm:text-sm px-4 sm:px-5 py-2 hover:border-ochre hover:text-ochre transition-colors cursor-pointer"
                    >
                      Notify me
                    </button>
                  )
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

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

      {/* reviews: what people say after a journey */}
      <Section
        id="reviews"
        padding="py-20 sm:py-24"
        glow="radial-gradient(ellipse 50% 60% at 85% 30%, rgba(201,150,44,0.16), transparent 70%), radial-gradient(ellipse 45% 50% at 10% 85%, rgba(74,93,58,0.22), transparent 70%)"
      >
        <SectionTitle kicker="From Safe and Sound Journeys">Kind Words</SectionTitle>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 max-w-4xl mx-auto">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="text-center">
              <blockquote className="font-display italic text-bone text-xl sm:text-2xl leading-snug">
                “{r.quote}”
              </blockquote>
              <figcaption className="font-body text-ochre/80 text-xs uppercase tracking-[0.25em] mt-4">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-center mt-12">
          <a
            href={SSJ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Read all reviews on Hipsy
          </a>
        </p>
      </Section>

      {/* listen: studio recordings, deliberately quieter than the live videos */}
      <Section id="listen" image={listenImage} overlay="bg-bark/85" padding="py-20 sm:py-24">
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

      {/* newsletter: a slim band, right where fans have just watched and listened */}
      {newsletterEnabled && (
        <section id="newsletter" className="scroll-mt-16 border-y border-bone/10 bg-bark">
          <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16 text-center">
            <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em]">
              Newsletter
            </p>
            <p className="font-display italic text-bone text-2xl sm:text-3xl mt-3">
              New sessions and upcoming dates, in your inbox
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </section>
      )}

      {/* about */}
      <Section
        id="about"
        glow="radial-gradient(ellipse 60% 55% at 20% 50%, rgba(201,150,44,0.24), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 15%, rgba(168,84,46,0.18), transparent 70%)"
      >
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
              I'm Noah, born and raised in Goa, India. I create immersive music
              with the instruments I've collected from the places I've
              travelled to over the years. My music is live and adaptive, an
              ever-evolving connection between the energy present in me and the
              space.
            </p>
            <p>
              For years my music was earth and fire: loud rock, hard drums,
              screaming. Then it became air and water: soft vocals, flute,
              stillness. Today I bring all of those elements together. Every set
              starts with listening, to myself, to the people and to the space,
              and the music becomes whatever the moment needs: a dance, a
              journey inward, or something in between.
            </p>
            <p>
              I offer my music at sound journeys, retreats and ceremonies,
              ecstatic dances and festivals. In 2024 I founded{" "}
              <a
                href={SSJ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone underline underline-offset-4 decoration-1 decoration-ochre/60 hover:text-ochre transition-colors"
              >
                Safe and Sound Journeys
              </a>
              , sound journeys where live music holds the container for inner
              healing. As a facilitator, I also guide
              Tribe Sessions, workshops where people find their own sound and
              make music together. For me, it's all about connection,
              through the beautiful power of music and sound: with ourselves,
              with each other, and with the joy of being human and alive.
            </p>
          </div>
        </div>
      </Section>

      {/* faq */}
      <Section
        id="faq"
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 55% 50% at 85% 60%, rgba(62,58,94,0.35), transparent 70%), radial-gradient(ellipse 45% 40% at 10% 10%, rgba(201,150,44,0.10), transparent 70%)"
      >
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
            Or email me directly at{" "}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </p>
        </div>
      </Section>

      <NotifyDialog eventTitle={notifyFor} onClose={() => setNotifyFor(null)} />

      <footer className="border-t border-bone/10 py-12 px-6 text-center">
        {newsletterEnabled && (
          <div className="mb-10">
            <p className="font-body text-bone/60 text-sm mb-4">
              Stay in the loop
            </p>
            <NewsletterForm compact />
          </div>
        )}
        <Socials />
        <a
          href={`mailto:${EMAIL}`}
          className={`${linkClass} inline-block mt-5`}
        >
          {EMAIL}
        </a>
        <p className="font-body text-bone/35 text-xs mt-6">
          © {new Date().getFullYear()} Noah Fernandes · KvK {KVK} · btw {BTW_ID}
        </p>
      </footer>
    </div>
  );
}
