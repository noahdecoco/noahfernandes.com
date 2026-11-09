// a small hand-drawn sound wave, used as a quiet mark under headings.
// the bars swell and fade like a single phrase of music.
const BARS = [3, 6, 4, 10, 7, 14, 9, 18, 12, 8, 15, 6, 10, 4, 7, 3, 5, 2];

export default function Wave({ className = "" }: { className?: string }) {
  const gap = 5;
  const width = BARS.length * gap;
  return (
    <svg
      viewBox={`0 0 ${width} 22`}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      {BARS.map((h, i) => {
        const x = i * gap + gap / 2;
        // a slight wobble so it reads as drawn, not generated
        const tilt = (i % 3) - 1;
        return (
          <line key={i} x1={x} y1={11 - h / 2} x2={x + tilt * 0.4} y2={11 + h / 2} />
        );
      })}
    </svg>
  );
}
