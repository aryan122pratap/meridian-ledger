import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { BookkeepingEstimator } from "@/components/tools/BookkeepingEstimator";

export const metadata: Metadata = {
  title: "Bookkeeping Cost Estimate",
  description: "Estimate a monthly bookkeeping cost range based on your transaction volume, accounts, and payroll.",
};

export default function BookkeepingEstimatePage() {
  return (
    <>
      <ImageBanner
        image="/images/services/bookkeeping.jpg"
        eyebrow="Bookkeeping estimate"
        heading="What would monthly bookkeeping cost you?"
        body={
          <p>
            Adjust the inputs below for a rough monthly range. We&apos;ll give you an exact number
            after a quick look at your actual books.
          </p>
        }
      />
      <LedgerSection label="Bookkeeping estimate">
        <div className="max-w-2xl">
          <BookkeepingEstimator />
        </div>
      </LedgerSection>
    </>
  );
}
