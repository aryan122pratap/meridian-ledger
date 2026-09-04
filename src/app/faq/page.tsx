import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/ui/CTA";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about working with Meridian Ledger.",
};

export default function FaqPage() {
  return (
    <>
      <LedgerSection label="FAQ" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">Questions we hear a lot.</h1>
        <div className="mt-8 max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </LedgerSection>
      <CTA heading="Still have a question?" action={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
