import type { ReactNode } from "react";
import { PARALLAX_IMAGE, useParallax } from "../../hooks/useParallax";

// fine film grain laid over plain sections so the brown doesn't read as flat
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// full-width band, optionally with its own darkened photo behind it.
// without a photo, `glow` places a soft warm light (a CSS background) instead.
export default function Section({
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
  const imageRef = useParallax<HTMLImageElement>();

  return (
    <section
      id={id}
      className={`relative scroll-mt-16 overflow-hidden ${className}`}
    >
      {image && (
        <>
          <img
            ref={imageRef}
            src={image}
            alt=""
            loading="lazy"
            className={PARALLAX_IMAGE}
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
