import { useCallback, useState } from "react";
import { JOURNEYS_PATH, NAV } from "../../config";
import { useActiveSection } from "../../hooks/useActiveSection";
import { external } from "../../lib/links";
import MobileMenu from "./MobileMenu";

// the one button on the right of the bar; shortLabel is shown on phones,
// where the bar has little room
export type HeaderCta = { label: string; shortLabel?: string; href: string };

export default function SiteHeader({
  page,
  cta,
}: {
  page: "home" | "journeys";
  cta: HeaderCta;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  // the same menu on every page, so nothing jumps in or out
  const sectionIds = NAV
    .filter((n) => n.href.startsWith("/#"))
    .map((n) => n.href.slice(2));
  const activeSection = useActiveSection(sectionIds, page === "home");
  const isActive = (href: string) =>
    href === JOURNEYS_PATH
      ? page === "journeys"
      : page === "home" && href === `/#${activeSection}`;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-bark/70 backdrop-blur-md border-b border-bone/10">
        <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display italic text-lg text-bone whitespace-nowrap">
            Noah Fernandes
          </a>
          <div className="flex items-center gap-6">
            {NAV.map((n) => (
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
              {cta.shortLabel ? (
                <>
                  <span className="sm:hidden">{cta.shortLabel}</span>
                  <span className="hidden sm:inline">{cta.label}</span>
                </>
              ) : (
                cta.label
              )}
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

      {open && (
        <MobileMenu
          links={[...NAV, { label: "FAQ", href: "/#faq" }]}
          isActive={isActive}
          onClose={close}
        />
      )}
    </>
  );
}
