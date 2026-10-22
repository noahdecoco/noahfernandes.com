import { useState, type FormEvent } from "react";

// paste your Formspree form ID here (the part after formspree.io/f/).
// while it's empty, submitting opens the visitor's email app instead.
const FORMSPREE_ID = "mvkzdzqn";

const EVENT_TYPES = [
  "Ecstatic dance or festival",
  "Sound Journey",
  "Retreat or ceremony",
  "Private session",
  "Something else",
];

const fieldClass =
  "w-full rounded-xl border border-bone/20 bg-bark/60 px-4 py-3 font-body text-sm sm:text-base text-bone placeholder:text-bone/35 focus:outline-none focus:border-ochre/70";
const labelClass =
  "block font-body text-xs uppercase tracking-[0.15em] text-bone/55 mb-2";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      const lines = [...data.entries()]
        .filter(([, v]) => String(v).trim())
        .map(([k, v]) => `${k}: ${v}`);
      const subject = `Booking enquiry: ${data.get("Event type")}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-ochre/40 bg-bark/50 p-6 text-center">
        <p className="font-display italic text-bone text-xl">Thank you 🙏🏽</p>
        <p className="font-body text-bone/70 text-sm mt-2">
          Your message is on its way. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            name="Name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-type" className={labelClass}>
          What is it for?
        </label>
        <select
          id="cf-type"
          name="Event type"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Choose one
          </option>
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-date" className={labelClass}>
            Date (if known)
          </label>
          <input id="cf-date" name="Date" type="date" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-location" className={labelClass}>
            Location
          </label>
          <input
            id="cf-location"
            name="Location"
            placeholder="City or venue"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Tell me about it
        </label>
        <textarea
          id="cf-message"
          name="Message"
          required
          rows={5}
          placeholder="The event, the people, the feeling you want in the room…"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ochre text-bark font-body font-medium text-sm sm:text-base py-3.5 transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p className="font-body text-clay text-sm text-center">
          Something went wrong. Please email me directly at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
