import type { Metadata } from "next";
import Link from "next/link";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { CTA } from "@/components/ui/CTA";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Careers",
  description: "What it's like to work at Meridian Ledger, and how to reach us about future openings.",
};

export default function CareersPage() {
  return (
    <>
      <ImageBanner
        image="/images/pages/careers.jpg"
        eyebrow="Careers"
        heading="Small firm, real ownership of the work."
      />

      <LedgerSection label="Working here">
        <div className="flex flex-col gap-6 text-18 text-slate">
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

      <LedgerSection label="Who you'd work with" tone="raised">
        <div className="flex flex-wrap gap-6">
          {team.map((member, index) => (
            <Reveal key={member.slug} delay={Math.min(index, 4) * 60}>
              <Link href="/team" className="flex w-24 flex-col items-center gap-2 text-center">
                <DuotoneImage src={member.photo} alt="" sizes="64px" className="size-16 rounded-full" />
                <span className="text-14 text-ink">{member.name.split(",")[0]}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/team" className="text-16 text-ink underline-offset-4 hover:underline">
            Meet the full team
          </Link>
        </div>
      </LedgerSection>

      <CTA heading="Have questions before reaching out?" action={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
