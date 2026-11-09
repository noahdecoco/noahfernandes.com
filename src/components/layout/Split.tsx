import type { ReactNode } from "react";

// title on the left (it stays in view while you scroll), content on the right.
// on phones the two simply stack.
export default function Split({
  aside,
  children,
}: {
  aside: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16 items-start">
      <div className="md:sticky md:top-28">{aside}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
