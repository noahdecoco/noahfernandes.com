import { useEffect, useRef, useState, type ReactNode } from "react";
import NewsletterForm, { newsletterEnabled } from "./NewsletterForm";
import type { EventItem } from "./events";

// pieces shared by every page: contact details, header, footer and section styling
export const EMAIL = "hello@noahfernandes.com";
export const KVK = "80492827";
export const BTW_ID = "NL003447542B70";
export const SPOTIFY_ARTIST_ID = "5p3IIXsYQPHxCrtggdRAJ6";
export const HIPSY_URL = "https://hipsy.nl/safeandsoundjourneys";
export const JOURNEYS_PATH = "/journeys/";

export const SOCIALS = [
  {
    label: "Spotify",
    href: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`,
  },
  { label: "YouTube", href: "https://www.youtube.com/@sounds-like-noah" },
  { label: "Instagram", href: "https://www.instagram.com/sounds.like.noah/" },
];

// links start with "/" so they work from every page: on the home page they
// just scroll, from another page they go home and land on the section
const NAV = [
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
];

const FOOTER_LINKS = [
  { label: "Watch", href: "/#watch" },
  { label: "Listen", href: "/#listen" },
  { label: "Journeys", href: JOURNEYS_PATH },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book", href: "/#contact" },
];

export const linkClass =
  "font-body text-bone/60 text-sm underline underline-offset-4 decoration-1 hover:text-bone transition-colors duration-200";
export const primaryButton =
  "inline-block rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base px-8 py-3.5 transition-transform duration-200 hover:scale-[1.03]";
export const ghostButton =
  "inline-block rounded-full border border-bone/30 text-bone font-body font-medium text-sm sm:text-base px-8 py-3.5 transition-colors duration-200 hover:border-ochre/70 hover:text-ochre";
export const inlineLink =
  "text-bone underline underline-offset-4 decoration-1 decoration-ochre/60 hover:text-ochre transition-colors";

// opens off-site links in a new tab, keeps links within the site in the same tab
export const external = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export function SectionTitle({
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
export function Section({
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

export function Socials() {
  return (
    <div className="flex items-center justify-center gap-6">
      {SOCIALS.map((s) => (
        <a key={s.label} href={s.href} {...external(s.href)} className={linkClass}>
          {s.label}
        </a>
      ))}
    </div>
  );
}

// arriving from another page at /#about: the browser looks for the section
// before React has drawn it, so jump there ourselves once it exists.
// `trigger` changes when late content (like the events) loads and moves things down.
export function useScrollToHash(trigger: unknown) {
  const userScrolled = useRef(false);

  useEffect(() => {
    const stop = () => (userScrolled.current = true);
    const events = ["wheel", "touchmove", "keydown"] as const;
    for (const e of events) window.addEventListener(e, stop, { passive: true });
    return () => {
      for (const e of events) window.removeEventListener(e, stop);
    };
  }, []);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    // once the visitor scrolls themselves, leave them be
    if (!id || userScrolled.current) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, [trigger]);
}

// which home-page section is on screen, so its nav link can light up
function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!enabled) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        setActive(key.split(",").find((id) => visible.has(id)) ?? null);
      },
      // a thin band across the middle of the screen counts as "here"
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of key.split(",")) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [key, enabled]);

  return active;
}

export function SiteHeader({
  page,
  showEvents = false,
  cta,
}: {
  page: "home" | "journeys";
  showEvents?: boolean;
  cta: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const nav =
    page === "home" && showEvents
      ? [{ label: "Events", href: "/#events" }, ...NAV]
      : NAV;
  const sectionIds = nav
    .filter((n) => n.href.startsWith("/#"))
    .map((n) => n.href.slice(2));
  const activeSection = useActiveSection(sectionIds, page === "home");
  const isActive = (href: string) =>
    href === JOURNEYS_PATH
      ? page === "journeys"
      : page === "home" && href === `/#${activeSection}`;

  // the open menu covers the page: stop it scrolling underneath, close on Esc
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-bark/70 backdrop-blur-md border-b border-bone/10">
        <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display italic text-lg text-bone">
            Noah Fernandes
          </a>
          <div className="flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`hidden md:inline font-body text-xs uppercase tracking-[0.2em] transition-colors hover:text-ochre ${isActive(n.href) ? "text-ochre" : "text-bone/70"}`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={cta.href}
              {...external(cta.href)}
              className="rounded-full border border-ochre/70 text-ochre font-body text-xs uppercase tracking-[0.2em] px-4 py-2 hover:bg-ochre hover:text-bark transition-colors whitespace-nowrap"
            >
              {cta.label}
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden -mr-2 p-2 text-bone cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path
                  d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* phone menu: a sibling of the header, because the header's blur would trap a fixed child */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-bark flex flex-col items-center justify-center gap-8 px-6"
        >
          {[...nav, { label: "FAQ", href: "/#faq" }].map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`font-display italic text-3xl transition-colors hover:text-ochre ${isActive(n.href) ? "text-ochre" : "text-bone"}`}
            >
              {n.label}
            </a>
          ))}
          <div className="mt-6">
            <Socials />
          </div>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 py-12 px-6 text-center">
      {newsletterEnabled && (
        <div className="mb-10">
          <p className="font-body text-bone/60 text-sm mb-4">Stay in the loop</p>
          <NewsletterForm compact />
        </div>
      )}
      <nav
        aria-label="Site"
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
      >
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-body text-bone/70 text-xs uppercase tracking-[0.2em] hover:text-ochre transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <Socials />
      <a href={`mailto:${EMAIL}`} className={`${linkClass} inline-block mt-5`}>
        {EMAIL}
      </a>
      <p className="font-body text-bone/35 text-xs mt-6">
        © {new Date().getFullYear()} Noah Fernandes · KvK {KVK} · btw {BTW_ID}
      </p>
    </footer>
  );
}

export function EventList({
  events,
  onNotify,
}: {
  events: EventItem[];
  onNotify: (title: string) => void;
}) {
  return (
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
                onClick={() => onNotify(e.title)}
                className="shrink-0 rounded-full border border-dashed border-bone/30 text-bone/70 font-body text-xs sm:text-sm px-4 sm:px-5 py-2 hover:border-ochre hover:text-ochre transition-colors cursor-pointer"
              >
                Notify me
              </button>
            )
          )}
        </li>
      ))}
    </ul>
  );
}
