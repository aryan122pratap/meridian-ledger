import type { ReactNode } from "react";
import { Rule } from "@/components/ui/Rule";

type LedgerSectionProps = {
  label: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function LedgerSection({ label, children, className, id }: LedgerSectionProps) {
  return (
    <section id={id} className={["border-b border-rule py-ledger-2", className].filter(Boolean).join(" ")}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:px-12 md:grid-cols-[200px_1px_1fr] md:gap-8">
        <div className="font-display text-16 font-medium text-ink">{label}</div>
        <Rule orientation="vertical" className="hidden md:block" />
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
