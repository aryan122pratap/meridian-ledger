import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DeadlineStrip } from "@/components/sections/DeadlineStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  description:
    "Meridian Ledger is a CPA firm in Austin, TX offering bookkeeping, tax preparation, and planning for small business owners and high-income individuals.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <DeadlineStrip />
      <ServiceGrid limit={5} />
      <ProcessSteps />
      <IndustryGrid limit={4} />
      <Testimonials />
      <CTA
        heading="Talk to someone who reads the whole return."
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
