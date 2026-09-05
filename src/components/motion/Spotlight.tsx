"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps a dark section with a soft brass glow that follows the cursor,
 * tracked locally against this element's own bounds (not a global listener),
 * so the gradient coordinates are always correct regardless of scroll position.
 */
export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    function onMove(e: MouseEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        el!.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el!.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
        frame = 0;
      });
    }

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={["relative isolate", className].filter(Boolean).join(" ")}>
      <div aria-hidden="true" className="spotlight-glow" />
      {children}
    </div>
  );
}
