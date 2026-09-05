"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supported =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supported) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;
    let hasMoved = false;

    function place(el: HTMLDivElement | null, x: number, y: number) {
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      place(dotRef.current, targetX, targetY);
      if (!hasMoved) {
        hasMoved = true;
        ringX = targetX;
        ringY = targetY;
        place(ringRef.current, ringX, ringY);
        // The CSS default is opacity:0 (see globals.css) so nothing is ever
        // visible at a guessed position before this — this class is the only
        // thing that reveals it, and only once we have a real coordinate.
        dotRef.current?.classList.add("cursor-dot--visible");
        ringRef.current?.classList.add("cursor-ring--visible");
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const interactive = Boolean(target?.closest("a, button"));
      ringRef.current?.classList.toggle("cursor-ring--active", interactive);
    }

    function tick() {
      if (hasMoved) {
        ringX += (targetX - ringX) * 0.2;
        ringY += (targetY - ringY) * 0.2;
        place(ringRef.current, ringX, ringY);
      }
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
