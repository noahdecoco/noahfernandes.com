import { useState, type ReactNode } from "react";
import {
  HIPSY_URL,
  EventList,
  Section,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  ghostButton,
  inlineLink,
  linkClass,
  primaryButton,
  useScrollToHash,
} from "./site";
import heroImage from "../assets/journey-room.jpg";
import sessionImage from "../assets/journey-session.jpg";
import founderImage from "../assets/noah-tree.jpg";
import NewsletterForm, { newsletterEnabled } from "./NewsletterForm";
import { useEvents, type EventItem } from "./events";
import NotifyDialog from "./NotifyDialog";

// edit everything below this line to change the Safe and Sound Journeys page

const JOURNEYS = [
  {
    title: "Sound Journeys",
    body: "Lie down, close your eyes and let live music carry you inward. Voice, flute, drums and instruments from around the world, played in the moment for the people in the room.",
  },
  {
    title: "Breathwork & Sound",
    body: "Conscious breathing, guided together with a breathwork facilitator, while the music follows the breath from the first inhale to the quiet afterwards.",
  },
  {
    title: "Ceremony",
    body: "Occasionally, a gentle ceremony with truffle tea, held with preparation, live music and integration. Always optional, and legal in the Netherlands.",
  },
  {
    title: "Private Journeys",
    body: "A journey for one person, a couple or a small group, shaped around what you need right now.",
  },
];

const STEPS = [
  {
    title: "Arrive",
    body: "Settle in, have some tea and meet the group. There's time to ask anything you want to know.",
  },
  {
    title: "Set an intention",
    body: "We take a moment to notice what you're carrying and what you'd like to explore.",
  },
  {
    title: "Journey",
    body: "Lying down or sitting, eyes closed, the music holds you. Whatever comes up is welcome: grief, stress, joy, laughter or simply rest.",
  },
  {
    title: "Come back",
    body: "We return slowly, share if you want to, and talk about how to take what you found into everyday life.",
  },
];

// reviews from Hipsy, kept close to how people wrote them
const REVIEWS = [
  {
    quote:
      "One of the most powerful breathwork and sound journeys I've experienced.",
    name: "Faried",
  },
  {
    quote:
      "This ceremony was exactly what my body and mind and soul needed.",
    name: "Karin",
  },
  {
    quote: "Noah's music and singing created a safe space for me.",
    name: "Ine",
  },
  { quote: "It felt like a warm embrace.", name: "Verena" },
  {
    quote:
      "Such a lovely afternoon of breathwork and beautiful sounds. I felt very welcome and comfortable.",
    name: "Hayden",
  },
  {
    quote:
      "I went into it not knowing what to expect. But when it was over I felt a load off my chest.",
    name: "Jan",
  },
];

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Do I need any experience?",
    a: "No. Most people come without having done anything like this before. I'll explain everything at the start, and you can go at your own pace.",
  },
  {
    q: "Is this therapy?",
    a: "No. Journeys can be deeply healing, but they're not a replacement for therapy or medical care. If you're going through something heavy, it can be a good companion to the support you already have.",
  },
  {
    q: "Are truffles legal?",
    a: "Yes, magic truffles are legal in the Netherlands. Only some journeys include them, it's always your choice, and most journeys are without any medicine at all.",
  },
  {
    q: "Is a ceremony right for me?",
    a: "Not for everyone. If you take medication, are pregnant, or have a history of heart or mental health conditions, please get in touch before booking a ceremony, so we can talk about whether it's safe for you.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothes and some water. Mats, cushions and blankets are usually there, and each event page says if you need anything else.",
  },
  {
    q: "Can I book a private journey or one for my group?",
    a: (
      <>
        Yes. Tell me a bit about what you're looking for through the{" "}
        <a href="/#contact" className={inlineLink}>
          contact form
        </a>{" "}
        and we'll find a good fit.
      </>
    ),
  },
];

// the sheet's Type column decides where an event shows up.
// these types appear here; Set, Workshop and Festival only on the home page.
const JOURNEY_TYPES = ["journey", "ceremony", "breathwork"];
const isJourney = (e: EventItem) =>
  JOURNEY_TYPES.includes(e.type.trim().toLowerCase());

export default function Journeys() {
  const events = useEvents().filter(isJourney);
  const [notifyFor, setNotifyFor] = useState<string | null>(null);
  useScrollToHash(events.length);

  return (
    <div className="min-h-screen bg-bark text-bone">
      <SiteHeader
        page="journeys"
        cta={{ label: "Join a journey", shortLabel: "Join", href: "#upcoming" }}
      />

      {/* hero */}
      <section className="relative min-h-[85svh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="A canal-side room set up for a sound journey, with singing bowls, chimes, a guitar and mats"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/60 via-bark/50 to-bark" />

        <div className="relative w-full mx-auto max-w-5xl px-6 pb-20 sm:pb-28 pt-32 text-center">
          <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-bone/80">
            Safe and Sound Journeys
          </p>
          <h1 className="font-display italic text-bone mt-5 text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
            Let the music hold you, so you can let go
          </h1>
          <p className="font-body text-bone/85 text-base sm:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
            Sound journeys where live music holds the space for inner healing.
            In and around Amsterdam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <a href="#upcoming" className={`${primaryButton} w-full sm:w-auto`}>
              Join a journey
            </a>
            <a href="#expect" className={`${ghostButton} w-full sm:w-auto`}>
              What to expect
            </a>
          </div>
        </div>
      </section>

      {/* intro */}
      <Section
        padding="py-20 sm:py-24"
        glow="radial-gradient(ellipse 55% 60% at 20% 40%, rgba(74,93,58,0.28), transparent 70%), radial-gradient(ellipse 45% 50% at 85% 70%, rgba(62,58,94,0.30), transparent 70%)"
      >
        <div className="max-w-2xl mx-auto text-center font-body text-bone/80 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Safe and Sound Journeys creates warm and welcoming journeys where
            live music and sound hold the space for inner healing. They take
            place in and around Amsterdam, in carefully chosen venues or
            together with other facilitators and organisers.
          </p>
          <p>
            We slow down and make room for whatever wants to come up: grief,
            stress, heartbreak, joy, laughter or curiosity. All parts of you
            are welcome.
          </p>
        </div>
      </Section>

      {/* the kinds of journeys */}
      <Section
        id="journeys"
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 50% 50% at 85% 20%, rgba(201,150,44,0.14), transparent 70%)"
      >
        <SectionTitle kicker="Ways to journey">Journeys</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {JOURNEYS.map((j) => (
            <div
              key={j.title}
              className="rounded-2xl border border-bone/15 bg-bark/40 p-8"
            >
              <h3 className="font-body text-ochre text-sm uppercase tracking-[0.25em]">
                {j.title}
              </h3>
              <p className="font-body text-bone/75 text-base leading-relaxed mt-4">
                {j.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* what a journey is like */}
      <Section
        id="expect"
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 60% 55% at 15% 60%, rgba(62,58,94,0.32), transparent 70%)"
      >
        <SectionTitle kicker="What a journey is like">What to Expect</SectionTitle>
        <img
          src={sessionImage}
          alt="Noah sitting beside someone resting under a blanket after a private journey, among plants and a drum"
          loading="lazy"
          className="w-full max-w-4xl mx-auto aspect-[16/9] object-cover rounded-2xl mb-14 sm:mb-16"
        />
        <ol className="max-w-3xl mx-auto space-y-10">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-6 sm:gap-8">
              <span className="font-display italic text-ochre text-3xl sm:text-4xl leading-none w-8 shrink-0">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display italic text-bone text-xl sm:text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="font-body text-bone/70 text-base leading-relaxed mt-2">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* upcoming: always shown, because the header button points here */}
      <Section
        id="upcoming"
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 50% 60% at 15% 40%, rgba(201,150,44,0.18), transparent 70%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(74,93,58,0.25), transparent 70%)"
      >
        <SectionTitle kicker="Come and join">Upcoming Journeys</SectionTitle>
        {events.length > 0 ? (
          <EventList events={events} onNotify={setNotifyFor} />
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
              No journeys are scheduled right now. Leave your email and you'll
              be the first to hear when the next one opens.
            </p>
            {newsletterEnabled && (
              <div className="mt-8">
                <NewsletterForm />
              </div>
            )}
          </div>
        )}
        <p className="text-center mt-12">
          <a
            href={HIPSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={ghostButton}
          >
            All journeys on Hipsy
          </a>
        </p>
      </Section>

      {/* reviews */}
      <Section
        id="reviews"
        className="border-t border-bone/10"
        padding="py-20 sm:py-24"
        glow="radial-gradient(ellipse 50% 60% at 85% 30%, rgba(201,150,44,0.16), transparent 70%), radial-gradient(ellipse 45% 50% at 10% 85%, rgba(74,93,58,0.22), transparent 70%)"
      >
        <SectionTitle kicker="From people who journeyed">Kind Words</SectionTitle>
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
            href={HIPSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Read all reviews on Hipsy
          </a>
        </p>
      </Section>

      {/* faq */}
      <Section
        id="faq"
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 55% 50% at 85% 60%, rgba(62,58,94,0.35), transparent 70%), radial-gradient(ellipse 45% 40% at 10% 10%, rgba(201,150,44,0.10), transparent 70%)"
      >
        <SectionTitle>Questions</SectionTitle>
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

      {/* founder */}
      <Section
        className="border-t border-bone/10"
        glow="radial-gradient(ellipse 60% 55% at 20% 50%, rgba(201,150,44,0.24), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 15%, rgba(168,84,46,0.18), transparent 70%)"
      >
        <SectionTitle kicker="Who holds the space">Your Guide</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-center">
          <img
            src={founderImage}
            alt="Noah sitting on a log bench beneath a huge old beech tree"
            loading="lazy"
            className="w-full max-w-md mx-auto md:max-w-none aspect-[4/5] object-cover rounded-2xl"
          />
          <div className="font-body text-bone/75 text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              Safe and Sound Journeys was founded in 2024 by Noah Fernandes, an
              Amsterdam-based live-looping artist and parts-work (IFS)
              practitioner. He guides the journeys, often together with guest
              facilitators.
            </p>
            <p>
              Noah plays voice, flute, guitar, drums and instruments collected
              on his travels, live and in the moment, so every journey sounds
              different and follows the people in the room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="/#about" className={ghostButton}>
                More about Noah
              </a>
              <a href="/#watch" className={ghostButton}>
                Hear his music
              </a>
            </div>
          </div>
        </div>
      </Section>

      <NotifyDialog eventTitle={notifyFor} onClose={() => setNotifyFor(null)} />

      <SiteFooter />
    </div>
  );
}
