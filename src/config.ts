import { siInstagram, siSpotify, siYoutube } from "simple-icons";

// details shared by every page: contact, business numbers, links and menus
export const EMAIL = "hello@noahfernandes.com";
export const KVK = "80492827";
export const BTW_ID = "NL003447542B70";
export const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";
export const YOUTUBE_URL = "https://www.youtube.com/@sounds-like-noah";
export const HIPSY_URL = "https://hipsy.nl/safeandsoundjourneys";
export const JOURNEYS_PATH = "/journeys/";
export const INSTAGRAM_URL = "https://www.instagram.com/sounds.like.noah/";
export const INSIGHT_TIMER_URL = "https://insighttimer.com/noahfernandes";

// not in simple-icons: a singing bowl, like the Insight Timer app icon
const INSIGHT_TIMER_ICON =
  "M2.5 4.5h19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2.5 9.25h19c-.2 5.4-2.9 9.4-6.5 11v.75a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-.75c-3.6-1.6-6.3-5.6-6.5-11z";

export const SOCIALS = [
  {
    label: "Spotify",
    href: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`,
    icon: siSpotify.path,
  },
  {
    label: "YouTube",
    href: YOUTUBE_URL,
    icon: siYoutube.path,
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: siInstagram.path,
  },
  {
    label: "Insight Timer",
    href: INSIGHT_TIMER_URL,
    icon: INSIGHT_TIMER_ICON,
  },
];

// links start with "/" so they work from every page: on the home page they
// just scroll, from another page they go home and land on the section
export const NAV = [
  { label: "Events", href: "/#events" },
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
];

export const FOOTER_LINKS = [
  { label: "Events", href: "/#events" },
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book", href: "/#contact" },
];
