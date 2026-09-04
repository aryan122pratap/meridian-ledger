import type { Deadline } from "@/content/types";

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getUpcomingDeadlines(deadlines: Deadline[], from: Date): Deadline[] {
  const start = startOfDay(from);
  return [...deadlines]
    .filter((d) => new Date(`${d.date}T00:00:00`) >= start)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getNextDeadline(deadlines: Deadline[], from: Date): Deadline | undefined {
  return getUpcomingDeadlines(deadlines, from)[0];
}

export function getDaysRemaining(dateStr: string, from: Date): number {
  const target = new Date(`${dateStr}T00:00:00`);
  const start = startOfDay(from);
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((target.getTime() - start.getTime()) / msPerDay);
}

export function formatDeadlineDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
