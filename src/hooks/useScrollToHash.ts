import { useEffect, useRef } from "react";

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
