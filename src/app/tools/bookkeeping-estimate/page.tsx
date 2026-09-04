import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { BookkeepingEstimator } from "@/components/tools/BookkeepingEstimator";

export const metadata: Metadata = {
  title: "Bookkeeping Cost Estimate",
  description: "Estimate a monthly bookkeeping cost range based on your transaction volume, accounts, and payroll.",
};

export default function BookkeepingEstimatePage() {
  return (
    <LedgerSection label="Bookkeeping estimate" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">What would monthly bookkeeping cost you?</h1>
      <p className="mt-4 max-w-[65ch] text-18 text-slate">
        Adjust the inputs below for a rough monthly range. We&apos;ll give you an exact number
        after a quick look at your actual books.
      </p>
      <div className="mt-ledger-2 max-w-2xl">
        <BookkeepingEstimator />
      </div>
    </LedgerSection>
  );
}
