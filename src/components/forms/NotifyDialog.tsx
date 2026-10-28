import { useEffect, useRef } from "react";
import NewsletterForm from "./NewsletterForm";

// newsletter signup in a pop-up, opened from an event that has no link yet.
// uses the native <dialog>, so Esc, focus and the dimmed backdrop come for free.
export default function NotifyDialog({
  eventTitle,
  onClose,
}: {
  eventTitle: string | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (eventTitle && !dialog.open) dialog.showModal();
    if (!eventTitle && dialog.open) dialog.close();
  }, [eventTitle]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // clicking the dimmed area outside the box closes it
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-bone/15 bg-bark text-bone p-0 shadow-2xl backdrop:bg-bark/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-8 sm:p-10 text-center">
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full text-bone/60 hover:text-ochre text-2xl leading-none cursor-pointer"
        >
          ×
        </button>
        <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em]">
          Tickets coming soon
        </p>
        <p className="font-display italic text-bone text-2xl sm:text-3xl mt-3 leading-tight">
          Hear first about {eventTitle}
        </p>
        <p className="font-body text-bone/65 text-sm sm:text-base mt-3">
          Join the newsletter and I'll let you know as soon as it opens.
        </p>
        <div className="mt-8">
          {/* key resets the form (and its thank-you state) for each event */}
          <NewsletterForm key={eventTitle ?? ""} />
        </div>
      </div>
    </dialog>
  );
}
