import { useEffect } from "react";
import Socials from "../Socials";

type Link = { label: string; href: string };

// full-screen phone menu under the top bar. it's rendered next to the header,
// not inside it, because the header's blur would trap a fixed child.
export default function MobileMenu({
  links,
  isActive,
  onClose,
}: {
  links: Link[];
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  // the menu covers the page: stop it scrolling underneath, close on Esc
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      id="mobile-menu"
      className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-bark flex flex-col items-center justify-center gap-8 px-6"
    >
      {links.map((n) => (
        <a
          key={n.href}
          href={n.href}
          onClick={onClose}
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
  );
}
