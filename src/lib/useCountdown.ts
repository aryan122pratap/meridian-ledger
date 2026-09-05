"use client";

import { useEffect, useState } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useCountdown(targetDateStr: string | undefined): Countdown | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Deferred to the client so the build-time server render doesn't bake in a stale time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!targetDateStr || !now) return null;

  const target = new Date(`${targetDateStr}T00:00:00`);
  const diffMs = Math.max(0, target.getTime() - now.getTime());

  return {
    days: Math.floor(diffMs / 86_400_000),
    hours: Math.floor((diffMs % 86_400_000) / 3_600_000),
    minutes: Math.floor((diffMs % 3_600_000) / 60_000),
    seconds: Math.floor((diffMs % 60_000) / 1_000),
  };
}
