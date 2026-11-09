import type { ReactNode } from "react";
import Wave from "../Wave";

export default function SectionTitle({
  children,
  kicker,
  align = "center",
  spacing = "mb-12 sm:mb-16",
}: {
  children: ReactNode;
  kicker?: string;
  align?: "center" | "left";
  spacing?: string;
}) {
  const left = align === "left";
  return (
    <div className={`${spacing} ${left ? "text-left" : "text-center"}`}>
      {kicker && (
        <p className="font-body text-ochre/80 text-xs uppercase tracking-[0.3em] mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-display italic text-bone text-4xl sm:text-6xl leading-tight">
        {children}
      </h2>
      <Wave
        className={`h-5 mt-5 text-ochre/70 ${left ? "" : "mx-auto"}`}
      />
    </div>
  );
}
