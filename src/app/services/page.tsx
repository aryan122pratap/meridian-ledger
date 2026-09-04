import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Bookkeeping, tax preparation, payroll, and advisory services for small businesses and individuals.",
};

export default function ServicesPage() {
  return (
    <>
      <LedgerSection label="Services" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">Everything runs off the same set of books.</h1>
        <p className="mt-4 max-w-[65ch] text-18 text-slate">
          Ten services, built to work together: bookkeeping that feeds tax planning, tax planning
          that sets your payroll salary, and a business return that never fights the books
          it&apos;s built from.
        </p>
      </LedgerSection>
      <ServiceGrid />
      <CTA heading="Not sure which service you need?" action={{ label: "Book a consultation", href: "/contact" }} />
    </>
  );
}
