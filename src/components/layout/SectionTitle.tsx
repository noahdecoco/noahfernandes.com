import type { ReactNode } from "react";

export default function SectionTitle({
  children,
  kicker,
}: {
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {kicker && (
        <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em] mb-4">
          {kicker}
        </p>
      )}
      <h2 className="font-body font-light text-bone uppercase text-2xl sm:text-4xl tracking-[0.35em] sm:tracking-[0.45em] pl-[0.35em] sm:pl-[0.45em]">
        {children}
      </h2>
      <div className="mx-auto mt-6 h-px w-12 bg-ochre/60" />
    </div>
  );
}
