import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/faqs";
import { getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about working with Meridian Ledger.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(faqs)} />
      <ImageBanner
        image="/images/services/irs-representation.jpg"
        eyebrow="FAQ"
        heading="Questions we hear a lot."
      />
      <LedgerSection label="FAQ" tone="grid">
        <div className="max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </LedgerSection>
      <CTA heading="Still have a question?" action={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
