import type { Faq } from "../../components/FaqSection";
import type { Review } from "../../components/ReviewsSection";
import { inlineLink } from "../../styles";

// edit this file to change the Safe and Sound Journeys page

export const JOURNEYS = [
  {
    title: "Sound Healing Journeys",
    body: "Lie down, close your eyes and let live music support your inner healing and well-being.",
  },
  {
    title: "Breathwork Concerts",
    body: "With a breathwork facilitator guiding you, the music supports your breath and helps you integrate the experience afterwards.",
  },
  {
    title: "Movement & Sound",
    body: "Live music combined with movement, dance or yoga, so the body can follow the sound.",
  },
  {
    title: "Private Journeys",
    body: (
      <>
        Arranged just for you or your own small group, shaped around what you
        need right now.{" "}
        <a href="/#contact" className={inlineLink}>
          Get in touch
        </a>{" "}
        to plan one.
      </>
    ),
  },
];

export const STEPS = [
  {
    title: "Arrive",
    body: "Settle in, have some tea and get to know each other. There's time to ask anything you want to know.",
  },
  {
    title: "Set an intention",
    body: "We take a moment to notice what you're carrying and what you'd like to explore.",
  },
  {
    title: "Journey",
    body: "Lying down, sitting or moving, the music holds you. Whatever comes up is welcome: grief, stress, joy, laughter or simply rest.",
  },
  {
    title: "Come back",
    body: "We return slowly, share if you want to, and talk about how to take what you found into everyday life.",
  },
];

// reviews from Hipsy, kept close to how people wrote them
export const REVIEWS: Review[] = [
  {
    quote:
      "One of the most powerful breathwork and sound journeys I've experienced.",
    name: "Faried",
  },
  {
    quote: "This ceremony was exactly what my body and mind and soul needed.",
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

export const FAQS: Faq[] = [
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
    q: "Are truffles right for me?",
    a: "Not for everyone. If you take medication, are pregnant, or have a history of heart or mental health conditions, please get in touch before booking, so we can talk about whether it's safe for you.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothes and some water. Mats, cushions and blankets are usually there, and each event page says if you need anything else.",
  },
  {
    q: "Can I book a private journey for myself, a couple or my own group?",
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
export const JOURNEY_TYPES = ["journey", "ceremony", "breathwork", "movement"];
