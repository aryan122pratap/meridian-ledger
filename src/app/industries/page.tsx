import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific tax and accounting expertise: real estate, medical practices, restaurants, construction, e-commerce, and nonprofits.",
};

export default function IndustriesPage() {
  return (
    <>
      <LedgerSection label="Industries" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">
          The tax issues change by industry. So does our advice.
        </h1>
        <p className="mt-4 max-w-[65ch] text-18 text-slate">
          Six industries where we&apos;ve built enough specific pattern-recognition to spot the
          issue before it becomes a notice.
        </p>
      </LedgerSection>
      <IndustryGrid />
      <CTA heading="Don't see your industry?" action={{ label: "Tell us about your business", href: "/contact" }} />
    </>
  );
}
