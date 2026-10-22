import { useState, type FormEvent } from "react";

// paste your Kit form ID here: the number in the form's embed code,
// e.g. action="https://app.kit.com/forms/1234567/subscriptions" -> "1234567".
// while it's empty the signup is hidden on the live site (it still shows in dev).
export const KIT_FORM_ID = "10084331";

export const newsletterEnabled = Boolean(KIT_FORM_ID) || import.meta.env.DEV;

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!KIT_FORM_ID) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        },
      );
      // Kit answers 200 even when it rejects a signup; the real result is in the body
      const result = await res.json().catch(() => null);
      if (!res.ok || result?.status !== "success") throw new Error("rejected");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="font-body text-bone/80 text-sm sm:text-base">
        You're in, thank you 🙏🏽 Keep an eye on your inbox.
      </p>
    );
  }

  const field =
    "flex-1 min-w-0 rounded-full border border-bone/25 bg-bark/60 px-5 py-3 font-body text-sm sm:text-base text-bone placeholder:text-bone/40 focus:outline-none focus:border-ochre/70";

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full mx-auto ${compact ? "max-w-md" : "max-w-xl"}`}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        {!compact && (
          <input
            name="fields[first_name]"
            placeholder="First name"
            autoComplete="given-name"
            aria-label="First name"
            className={`${field} sm:max-w-[11rem]`}
          />
        )}
        <input
          name="email_address"
          type="email"
          required
          placeholder="Your email"
          autoComplete="email"
          aria-label="Email"
          className={field}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base px-6 py-3 transition-transform duration-200 hover:scale-[1.03] disabled:opacity-60 cursor-pointer whitespace-nowrap"
        >
          {status === "sending" ? "Joining…" : "Join"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-body text-clay text-sm mt-3">
          {KIT_FORM_ID
            ? "Something went wrong. Please try again in a moment."
            : "Newsletter isn't connected yet: add the Kit form ID."}
        </p>
      )}
    </form>
  );
}
