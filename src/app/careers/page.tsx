import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { CTA } from "@/components/ui/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "What it's like to work at Meridian Ledger, and how to reach us about future openings.",
};

export default function CareersPage() {
  return (
    <>
      <LedgerSection label="Careers" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">Small firm, real ownership of the work.</h1>
        <div className="mt-6 flex flex-col gap-6 text-18 text-slate">
          <p className="max-w-[65ch]">
            We&apos;re a small firm, which means whoever handles a client&apos;s books or return
            owns it end to end rather than passing pieces down an assembly line. Tax season is
            still tax season, but the rest of the year runs on a steadier, more reasonable pace
            than a lot of firms this size manage, because we&apos;ve built the practice around
            monthly, ongoing work instead of a single seasonal crunch.
          </p>
          <p className="max-w-[65ch]">
            We typically hire for tax preparation, bookkeeping, and payroll roles, and
            occasionally for advisory work as that side of the practice grows. Most people who
            join have a few years of public accounting or in-house experience already, though
            that&apos;s a general pattern, not a strict rule.
          </p>
          <p className="max-w-[65ch]">
            We don&apos;t have open positions posted right now, but we&apos;re always glad to hear
            from people who think they&apos;d be a fit. Send a resume and a note about what kind
            of work you want to be doing to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-4">
              {siteConfig.contact.email}
            </a>
            , and we&apos;ll reach out if something opens up that fits.
          </p>
        </div>
      </LedgerSection>
      <CTA heading="Have questions before reaching out?" action={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
