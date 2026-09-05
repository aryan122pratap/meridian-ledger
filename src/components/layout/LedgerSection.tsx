import type { ReactNode } from "react";
import { Rule } from "@/components/ui/Rule";

type LedgerSectionProps = {
  label: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "raised" | "grid";
  /** Skip the outer max-width container, for nesting inside a page-level grid (e.g. a sticky sidebar layout). */
  noContainer?: boolean;
};

const toneClass: Record<NonNullable<LedgerSectionProps["tone"]>, string> = {
  paper: "bg-paper",
  raised: "bg-paper-raised",
  grid: "bg-paper-raised bg-ledger-grid",
};

export function LedgerSection({
  label,
  children,
  className,
  id,
  tone = "paper",
  noContainer = false,
}: LedgerSectionProps) {
  const grid = (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1px_1fr] md:gap-8">
      <div className="font-display text-16 font-medium text-ink">{label}</div>
      <Rule orientation="vertical" className="hidden md:block" />
      <div className="min-w-0">{children}</div>
    </div>
  );

  return (
    <section
      id={id}
      className={["border-b border-rule py-ledger-2", toneClass[tone], className].filter(Boolean).join(" ")}
    >
      {noContainer ? grid : <div className="mx-auto max-w-6xl px-6 sm:px-12">{grid}</div>}
    </section>
  );
}
