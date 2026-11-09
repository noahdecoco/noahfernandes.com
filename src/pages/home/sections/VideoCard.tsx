import { useState } from "react";
import type { Video } from "../content";

// shows a styled still from the video; the real player only loads on click
export default function VideoCard({
  id,
  title,
  frame = "maxres2",
  featured = false,
}: Video & { featured?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const radius = "";

  if (playing) {
    return (
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        className={`w-full aspect-video ${radius} border-0 shadow-2xl`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className={`group relative block w-full aspect-video overflow-hidden ${radius} border border-bone/10 shadow-2xl cursor-pointer text-left`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/${frame}.jpg`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover sepia-[35%] saturate-[0.8] brightness-[0.7] transition duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/20 to-transparent" />

      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-bone/60 backdrop-blur-sm bg-bark/20 transition duration-300 group-hover:bg-ochre group-hover:border-ochre ${featured ? "w-20 h-20 sm:w-24 sm:h-24" : "w-14 h-14"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`fill-bone ml-1 transition-colors group-hover:fill-bark ${featured ? "w-7 h-7 sm:w-8 sm:h-8" : "w-5 h-5"}`}
          aria-hidden="true"
        >
          <path d="M7 4.5v15l13-7.5z" />
        </svg>
      </span>

      <span
        className={`absolute inset-x-0 bottom-0 ${featured ? "p-6 sm:p-8" : "p-4"}`}
      >
        <span
          className={`block font-display italic text-bone leading-tight ${featured ? "text-2xl sm:text-4xl" : "text-lg"}`}
        >
          {title}
        </span>
      </span>
    </button>
  );
}
