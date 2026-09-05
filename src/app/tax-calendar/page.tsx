import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { DeadlineTracker } from "@/components/tools/DeadlineTracker";
import { Disclaimer } from "@/components/ui/Disclaimer";

export const metadata: Metadata = {
  title: "2026 Tax Calendar",
  description: "2026 federal and Texas filing deadlines for individuals and businesses, with days-remaining tracking.",
};

export default function TaxCalendarPage() {
  return (
    <>
      <ImageBanner
        image="/images/hero/hero.jpg"
        eyebrow="2026 filing calendar"
        heading="Every 2026 deadline, in one place."
        body={
          <p>
            Federal filing and payment deadlines for individuals and businesses, plus the Texas
            Franchise Tax deadline, sorted chronologically.
          </p>
        }
      />
      <LedgerSection label="Deadlines">
        <DeadlineTracker />
        <div className="mt-ledger-2">
          <Disclaimer>
            Dates are accurate for 2026 calendar-year filers as of publication. Confirm your
            specific deadlines with the IRS or with us, since fiscal-year filers and some states run
            on different schedules.
          </Disclaimer>
        </div>
      </LedgerSection>
    </>
  );
}
