import { SOCIALS } from "../config";
import { external } from "../lib/links";

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-7">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          {...external(s.href)}
          aria-label={s.label}
          title={s.label}
          className="text-bone/60 hover:text-ochre transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
            <path d={s.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
}
