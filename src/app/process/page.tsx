import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Process",
  description: "How working with Meridian Ledger actually works, from the first call to ongoing service.",
};

export default function ProcessPage() {
  return (
    <>
      <LedgerSection label="Process" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">How working with us works.</h1>
        <p className="mt-4 max-w-[65ch] text-18 text-slate">
          Most engagements move through the same four stages, whether you&apos;re starting with a
          single tax return or a full bookkeeping and advisory relationship.
        </p>
      </LedgerSection>
      <ProcessSteps heading="The stages" />
      <CTA heading="Ready to start the first call?" action={{ label: "Book a consultation", href: "/contact" }} />
    </>
  );
}
