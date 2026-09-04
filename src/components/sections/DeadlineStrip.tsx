"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { deadlines } from "@/content/deadlines";
import { getNextDeadline, getDaysRemaining, formatDeadlineDate } from "@/lib/deadlines";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Figure } from "@/components/ui/Figure";

export function DeadlineStrip() {
  const [today, setToday] = useState<Date | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Deferred to the client so the build-time server render doesn't bake in a stale date.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date());
  }, []);

  const next = today ? getNextDeadline(deadlines, today) : undefined;
  const daysRemaining = next && today ? getDaysRemaining(next.date, today) : 0;

  useEffect(() => {
    if (!next || !today) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(daysRemaining);
      return;
    }

    const duration = 800;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.round(progress * daysRemaining));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next?.date, today]);

  if (!next) return null;

  return (
    <LedgerSection label="Next deadline">
      <Link
        href="/tax-calendar"
        className="group -mx-2 flex flex-wrap items-baseline justify-between gap-4 px-2 py-1 hover:bg-ink/5"
      >
        <span className="text-18 text-ink underline-offset-4 group-hover:underline">
          {next.label} &mdash; {formatDeadlineDate(next.date)}
        </span>
        <Figure emphasis className="font-display text-28" suffix=" days">
          {count}
        </Figure>
      </Link>
    </LedgerSection>
  );
}
