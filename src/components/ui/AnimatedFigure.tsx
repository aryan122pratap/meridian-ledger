"use client";

import { useEffect, useRef, useState } from "react";
import { Figure } from "@/components/ui/Figure";

type AnimatedFigureProps = {
  value: number;
  emphasis?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function AnimatedFigure({ value, emphasis, prefix, suffix, className }: AnimatedFigureProps) {
  const [display, setDisplay] = useState(value);
  const previous = useRef(value);

  useEffect(() => {
    const from = previous.current;
    const to = value;
    previous.current = value;

    if (from === to) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(to);
      return;
    }

    const duration = 350;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(from + (to - from) * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <Figure emphasis={emphasis} prefix={prefix} suffix={suffix} className={className}>
      {display.toLocaleString()}
    </Figure>
  );
}
