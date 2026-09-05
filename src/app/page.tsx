import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ApproachBand } from "@/components/sections/ApproachBand";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CTA } from "@/components/ui/CTA";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  description:
    "Meridian Ledger is a CPA firm in Austin, TX offering bookkeeping, tax preparation, and planning for small business owners and high-income individuals.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid limit={6} tone="grid" />
      <ProcessSteps heading="How we work" layout="cards" />
      <ApproachBand />
      <IndustryGrid limit={6} variant="cards" tone="raised" />
      <Testimonials />
      <InsightsPreview />
      <LedgerSection label="FAQ" tone="grid">
        <Accordion items={faqs.slice(0, 5)} />
        <div className="mt-6">
          <Link href="/faq" className="text-16 text-ink underline-offset-4 hover:underline">
            View all FAQs
          </Link>
        </div>
      </LedgerSection>
      <CTA
        heading="Talk to someone who reads the whole return."
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
