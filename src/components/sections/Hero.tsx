"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { StatCounter } from "@/components/ui/StatCounter";
import { TrustRow } from "@/components/sections/TrustRow";
import { NextDeadlineBar } from "@/components/sections/NextDeadlineBar";
import { RevealText } from "@/components/motion/RevealText";
import { useParallax } from "@/lib/useParallax";
import { siteConfig } from "@/config/site";

const FOUNDED_YEAR = 2015;

export function Hero() {
  const yearsInPractice = new Date().getFullYear() - FOUNDED_YEAR;
  const imageRef = useRef<HTMLDivElement>(null);
  useParallax(imageRef, 0.08, 1.08);

  return (
    <section className="relative overflow-hidden border-b border-rule bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-ledger-2 pb-ledger-2 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:py-ledger-3">
        <div className="relative">
          <div
            aria-hidden="true"
            className="ambient-glow"
            style={{ top: "-100px", left: "-140px", width: "480px", height: "480px" }}
          />
          <p className="relative font-display text-16 font-medium text-ink">{siteConfig.tagline}</p>
          <h1 className="relative mt-4 font-display text-52 font-medium text-ink">
            <RevealText text="Your books, closed on time. No surprises in April." />
          </h1>
          <p className="relative mt-6 max-w-[60ch] text-18 text-slate">
            Meridian Ledger handles bookkeeping, tax preparation, and planning for small business
            owners and high-income individuals, with the kind of attention that catches a missed
            deduction before the return is filed, not after.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Button href={siteConfig.booking.href} variant="primary">
              {siteConfig.booking.label}
            </Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>

          {/* Illustrative figures for a fictional firm, not audited claims. */}
          <div className="relative mt-10 grid grid-cols-3 gap-6 border-t border-rule pt-6">
            <StatCounter value={yearsInPractice} suffix="+" label="Years in practice" />
            <StatCounter value={3400} suffix="+" label="Returns filed" />
            <StatCounter value={8500} prefix="$" label="Avg. saving found" />
          </div>

          <div className="relative">
            <TrustRow />
          </div>
        </div>

        <div ref={imageRef} className="overflow-hidden">
          <DuotoneImage
            src="/images/hero/hero.jpg"
            alt="Accountant reviewing financial documents at a desk"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            interactive
            className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px]"
          />
        </div>
      </div>
      <NextDeadlineBar />
    </section>
  );
}
