import type { Faq } from "../../components/FaqSection";
import type { Review } from "../../components/ReviewsSection";
import { JOURNEYS_PATH } from "../../config";
import { inlineLink } from "../../styles";

// edit this file to change the home page's videos, offerings, reviews and FAQ
// (contact details, socials and menus live in src/config.ts)

// YouTube video IDs (the part after watch?v= in the link).
// the cover is a frame from the middle of the video (maxres1/2/3 = early/middle/late),
// so it skips the text on the YouTube thumbnail. add `frame: "maxres1"` to pick another.
export type Video = { id: string; title: string; frame?: string };

export const VIDEOS: Video[] = [
  { id: "oRT6zA0aBbU", title: "Calm your anxious mind" },
  { id: "QKBYHoLNZ9U", title: "A Sound Journey from Ashram to Jungle" },
  { id: "BHkwrfycJvU", title: "Chill and groovy live looping session" },
  { id: "2OI-pz6DttQ", title: "Healing Bansuri Melodies" },
];

export type Offering = {
  title: string;
  body: string;
  link?: { label: string; href: string };
};

export const OFFERINGS: Offering[] = [
  {
    title: "Sound Journeys",
    body: "Immersive, slowly unfolding live music that guides people inward, on its own or woven into breathwork, ceremonies and retreats.",
    link: { label: "Safe and Sound Journeys", href: JOURNEYS_PATH },
  },
  {
    title: "Live Sets",
    body: "Improvised sets made for dancing and movement, at ecstatic dances, festivals and venues, carrying the people from stillness to release and back again.",
  },
  {
    title: "Tribe Sessions",
    body: "Workshops where we discover the sound each of us carries and learn to resonate as one, through voice, body percussion and unplugged instruments.",
  },
];

// short quotes from Safe and Sound Journeys reviews on Hipsy
export const REVIEWS: Review[] = [
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

export const FAQS: Faq[] = [
  {
    q: "What kind of music do you play?",
    a: "Mostly live looping, layering sounds in the moment. Every set is shaped by the people who are there, so no two are the same.",
  },
  {
    q: "Can I book you for my event or retreat?",
    a: "Yes. Fill in the form below with the date, location, type of session and number of people, and we'll take it from there. I can also pair a sound journey with a Tribe Session, so your group gets to journey with the music and make it too.",
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
        <a href={JOURNEYS_PATH} className={inlineLink}>
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
