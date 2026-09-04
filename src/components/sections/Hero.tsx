import { Button } from "@/components/ui/Button";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <LedgerSection label={siteConfig.tagline} className="pt-ledger-3">
      <h1 className="font-display text-52 font-medium text-ink">
        Your books, closed on time. No surprises in April.
      </h1>
      <p className="mt-6 max-w-[60ch] text-18 text-slate">
        Meridian Ledger handles bookkeeping, tax preparation, and planning for small business
        owners and high-income individuals, with the kind of attention that catches a missed
        deduction before the return is filed, not after.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={siteConfig.booking.href} variant="primary">
          {siteConfig.booking.label}
        </Button>
        <Button href="/pricing" variant="secondary">
          See pricing
        </Button>
      </div>
    </LedgerSection>
  );
}
