"use client";

import { useEffect, useMemo, useState } from "react";
import { deadlines } from "@/content/deadlines";
import type { Deadline, DeadlineCategory } from "@/content/types";
import { getNextDeadline, formatDeadlineDate } from "@/lib/deadlines";
import { Table, type TableColumn } from "@/components/ui/Table";
import { Figure } from "@/components/ui/Figure";
import { useCountdown } from "@/lib/useCountdown";

const filters: { label: string; value: DeadlineCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Business", value: "business" },
  { label: "Payroll", value: "payroll" },
];

type Row = {
  date: string;
  label: string;
  category: string;
};

export function DeadlineTracker() {
  const [today, setToday] = useState<Date | null>(null);
  const [filter, setFilter] = useState<DeadlineCategory | "all">("all");

  useEffect(() => {
    // Deferred to the client so the build-time server render doesn't bake in a stale date.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date());
  }, []);

  const next = today ? getNextDeadline(deadlines, today) : undefined;
  const countdown = useCountdown(next?.date);

  const filtered = useMemo<Deadline[]>(
    () => (filter === "all" ? deadlines : deadlines.filter((d) => d.category === filter)),
    [filter],
  );

  const grouped = useMemo(() => {
    const map = new Map<number, Deadline[]>();
    for (const d of filtered) {
      const list = map.get(d.quarter) ?? [];
      list.push(d);
      map.set(d.quarter, list);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, [filtered]);

  const columns: TableColumn<Row>[] = [
    { key: "date", header: "Date" },
    { key: "label", header: "Deadline" },
    { key: "category", header: "Applies to" },
  ];

  return (
    <div className="flex flex-col gap-ledger-2">
      {next ? (
        <div className="border border-rule bg-paper-raised p-6">
          <p className="text-14 text-slate">Next deadline</p>
          <p className="mt-2 text-18 text-ink">
            {next.label} &mdash; {formatDeadlineDate(next.date)}
          </p>
          {countdown ? (
            <p className="mt-1 text-16 tabular-nums text-slate">
              <Figure emphasis className="font-display text-22">
                {countdown.days}
              </Figure>{" "}
              days, {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`border px-4 py-2 text-14 ${
              filter === f.value ? "border-ink bg-ink text-paper" : "border-rule text-ink hover:bg-ink/5"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {grouped.map(([quarter, items]) => (
        <div key={quarter}>
          <p className="mb-2 text-14 font-medium text-slate">Q{quarter}</p>
          <Table
            columns={columns}
            rows={items.map((d) => ({
              date: formatDeadlineDate(d.date),
              label: next && d.date === next.date && d.label === next.label ? `${d.label} (next)` : d.label,
              category: d.category[0].toUpperCase() + d.category.slice(1),
            }))}
          />
        </div>
      ))}
    </div>
  );
}
