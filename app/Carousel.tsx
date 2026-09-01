"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CardItem } from "@/content";

/** Gap between cards, in px. Mirrors the `gap-4` on the track. */
const GAP = 16;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M10 3 5 8l5 5" />
      ) : (
        <path d="m6 3 5 5-5 5" />
      )}
    </svg>
  );
}

export default function Carousel({
  items,
  label,
}: {
  items: CardItem[];
  label: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // 1px slack: fractional layout widths never land exactly on the bound.
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const step = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const distance = card
      ? card.getBoundingClientRect().width + GAP
      : el.clientWidth * 0.8;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * distance,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  const buttonClass =
    "flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-600 transition-colors hover:border-accent hover:text-accent disabled:cursor-default disabled:opacity-30 disabled:hover:border-zinc-200 disabled:hover:text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 dark:disabled:hover:border-zinc-800 dark:disabled:hover:text-zinc-400";

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Swipe or scroll sideways for more.
        </p>
        {/* Pointer affordance only. Touch swipes and keyboard both work
            without these, so they stay out of the tab order. */}
        <div className="hidden gap-2 sm:flex" aria-hidden="true">
          <button
            type="button"
            tabIndex={-1}
            onClick={() => step(-1)}
            disabled={atStart}
            className={buttonClass}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            tabIndex={-1}
            onClick={() => step(1)}
            disabled={atEnd}
            className={buttonClass}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={sync}
        tabIndex={0}
        role="region"
        aria-label={label}
        // Bleeds past the text column so cards scroll under the page edge,
        // which is what makes the swipe read as a swipe on a phone.
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {items.map((item) => {
          const inner = (
            <>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {item.meta}
              </p>
              <h3 className="mt-2 font-medium leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.blurb}
              </p>
            </>
          );

          return (
            <li
              key={item.id}
              className="w-64 shrink-0 snap-start sm:w-72"
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col border border-zinc-200 p-4 transition-colors hover:border-accent dark:border-zinc-800"
                >
                  {inner}
                  <span className="mt-4 text-xs text-accent group-hover:underline">
                    Open
                  </span>
                </a>
              ) : (
                <div className="flex h-full flex-col border border-zinc-200 p-4 dark:border-zinc-800">
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
