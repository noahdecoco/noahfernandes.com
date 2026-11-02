import { useEffect, useRef } from "react";

// slow-scrolling background photo: the image drifts a little against the page,
// measured from its parent section. give the image extra height (see
// PARALLAX_IMAGE) so the drift never shows an edge.
// visitors who ask their device for less motion get a still image.
export function useParallax<T extends HTMLElement>(strength = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return; // off screen, nothing to move
      // 0 when the section is centred on screen, drifting either way from there
      const offset = (r.top + r.height / 2 - vh / 2) * -strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}

// size and position for a parallax photo: 15% spare above and below
export const PARALLAX_IMAGE =
  "absolute inset-x-0 -top-[15%] w-full h-[130%] object-cover will-change-transform";
