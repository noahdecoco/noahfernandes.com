import { siInstagram, siSpotify, siYoutube } from "simple-icons";

// details shared by every page: contact, business numbers, links and menus
export const EMAIL = "hello@noahfernandes.com";
export const KVK = "80492827";
export const BTW_ID = "NL003447542B70";
export const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";
export const YOUTUBE_URL = "https://www.youtube.com/@sounds-like-noah";
export const HIPSY_URL = "https://hipsy.nl/safeandsoundjourneys";
export const JOURNEYS_PATH = "/journeys/";

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
    href: "https://www.instagram.com/sounds.like.noah/",
    icon: siInstagram.path,
  },
];

// links start with "/" so they work from every page: on the home page they
// just scroll, from another page they go home and land on the section
export const NAV = [
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
];

export const FOOTER_LINKS = [
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book", href: "/#contact" },
];
