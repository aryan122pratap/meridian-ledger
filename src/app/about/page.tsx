import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { CTA } from "@/components/ui/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meridian Ledger is an Austin, TX CPA firm built around monthly discipline: reconciled books, planned taxes, and a return you understand before it's filed.",
};

export default function AboutPage() {
  return (
    <>
      <LedgerSection label="About" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">
          Built on the idea that a return shouldn&apos;t be a surprise.
        </h1>
        <div className="mt-6 flex flex-col gap-6 text-18 text-slate">
          <p className="max-w-[65ch]">
            {siteConfig.name} started in 2015 when Sarah Whitfield left a regional firm tired of
            watching clients find out what they owed in April instead of planning for it in June.
            The firm was built around a simple operating rule: books get closed every month, not
            reconstructed every spring, and a tax return should be something a client understands
            before they sign it, not something handed over to trust blindly.
          </p>
          <p className="max-w-[65ch]">
            We work with small business owners across Austin and remotely across the country, and
            with high-income individuals who&apos;ve outgrown what a seasonal tax preparer can
            offer. Most of our engagements are ongoing: monthly bookkeeping, quarterly planning,
            payroll that runs on schedule, not a single rushed transaction every April.
          </p>
          <p className="max-w-[65ch]">
            The firm is small on purpose. Every business return gets reviewed by a partner before
            it&apos;s filed, and the team that handles your books in October is the same team that
            handles your return in March. We&apos;d rather stay a size where that&apos;s still true
            than grow past it.
          </p>
        </div>
      </LedgerSection>
      <CTA
        heading="Talk to someone who reads the whole return."
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
