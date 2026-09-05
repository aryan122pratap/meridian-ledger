"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { deadlines } from "@/content/deadlines";
import { getNextDeadline, formatDeadlineDate } from "@/lib/deadlines";
import { useCountdown } from "@/lib/useCountdown";

export function NextDeadlineBar() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    // Deferred to the client so the build-time server render doesn't bake in a stale date.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date());
  }, []);

  const next = today ? getNextDeadline(deadlines, today) : undefined;
  const countdown = useCountdown(next?.date);

  if (!next) return null;

  return (
    <div className="border-t border-rule bg-paper-raised">
      <Link
        href="/tax-calendar"
        className="group mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 hover:bg-ink/5 sm:px-12"
      >
        <span className="text-14 text-slate">
          Next deadline:{" "}
          <span className="text-ink group-hover:underline">
            {next.label} &mdash; {formatDeadlineDate(next.date)}
          </span>
        </span>
        {countdown ? (
          <span className="text-14 tabular-nums text-brass">
            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
          </span>
        ) : null}
      </Link>
    </div>
  );
}
