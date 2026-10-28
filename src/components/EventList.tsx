import type { EventItem } from "../lib/events";
import { newsletterEnabled } from "./forms/NewsletterForm";

export default function EventList({
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
