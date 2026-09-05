"use client";

import { useEffect, useState } from "react";
import { Figure } from "@/components/ui/Figure";

type StatCounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export function StatCounter({ value, label, prefix, suffix }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div>
      <p className="font-display text-38 font-medium text-ink">
        <Figure prefix={prefix} suffix={suffix}>
          {count.toLocaleString()}
        </Figure>
      </p>
      <p className="mt-1 text-14 text-slate">{label}</p>
    </div>
  );
}
