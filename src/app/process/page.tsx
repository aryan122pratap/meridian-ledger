import type { Metadata } from "next";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Process",
  description: "How working with Meridian Ledger actually works, from the first call to ongoing service.",
};

export default function ProcessPage() {
  return (
    <>
      <ImageBanner
        image="/images/services/entity-formation.jpg"
        eyebrow="Process"
        heading="How working with us works."
        body={
          <p>
            Most engagements move through the same four stages, whether you&apos;re starting with
            a single tax return or a full bookkeeping and advisory relationship.
          </p>
        }
      />
      <ProcessSteps heading="The stages" layout="cards" />
      <CTA heading="Ready to start the first call?" action={{ label: "Book a consultation", href: "/contact" }} />
    </>
  );
}
