import { useEffect, useState } from "react";

// which home-page section is on screen, so its nav link can light up
export function useActiveSection(ids: string[], enabled: boolean) {
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
