"use client";

import { useEffect, useRef, useState } from "react";

type RevealTextProps = {
  text: string;
  wordDelay?: number;
};

/**
 * Splits text into words, each masked and revealed with a staggered
 * translate + fade. Reuses the same IntersectionObserver-plus-fallback-timer
 * safety pattern as Reveal, so it can never get stuck invisible.
 */
export function RevealText({ text, wordDelay = 40 }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    const fallback = setTimeout(() => setVisible(true), 1800);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <span
            className="inline-block"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * wordDelay}ms, opacity 0.5s ease ${i * wordDelay}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
