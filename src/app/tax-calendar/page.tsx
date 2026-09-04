import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { DeadlineTracker } from "@/components/tools/DeadlineTracker";
import { Disclaimer } from "@/components/ui/Disclaimer";

export const metadata: Metadata = {
  title: "2026 Tax Calendar",
  description: "2026 federal and Texas filing deadlines for individuals and businesses, with days-remaining tracking.",
};

export default function TaxCalendarPage() {
  return (
    <LedgerSection label="2026 filing calendar" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Every 2026 deadline, in one place.</h1>
      <p className="mt-4 max-w-[65ch] text-18 text-slate">
        Federal filing and payment deadlines for individuals and businesses, plus the Texas
        Franchise Tax deadline, sorted chronologically.
      </p>
      <div className="mt-ledger-2">
        <DeadlineTracker />
      </div>
      <div className="mt-ledger-2">
        <Disclaimer>
          Dates are accurate for 2026 calendar-year filers as of publication. Confirm your
          specific deadlines with the IRS or with us, since fiscal-year filers and some states run
          on different schedules.
        </Disclaimer>
      </div>
    </LedgerSection>
  );
}
