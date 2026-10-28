import type { ReactNode } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import SiteFooter from "./SiteFooter";
import SiteHeader, { type HeaderCta } from "./SiteHeader";

// the frame every page shares: background, header and footer.
// a page only passes its own sections, plus the header button that fits it.
export default function PageLayout({
  page,
  cta,
  children,
}: {
  page: "home" | "journeys";
  cta: HeaderCta;
  children: ReactNode;
}) {
  const events = useEvents();
  // jump to /#section once the events have loaded and moved things into place
  useScrollToHash(events);

  return (
    <div className="min-h-screen bg-bark text-bone">
      <SiteHeader page={page} cta={cta} />
      {children}
      <SiteFooter />
    </div>
  );
}
