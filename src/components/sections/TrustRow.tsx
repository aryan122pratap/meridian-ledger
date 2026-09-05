import { ShieldCheck, BadgeCheck, Award } from "lucide-react";

/**
 * Placeholder credential marks. Meridian Ledger is a fictional firm — these are
 * illustrative generic seal icons, not real AICPA, CPA society, or BBB logos.
 */
const marks = [
  { icon: ShieldCheck, label: "Texas-licensed CPAs" },
  { icon: BadgeCheck, label: "IRS Enrolled Agent on staff" },
  { icon: Award, label: "QuickBooks Online ProAdvisor" },
] as const;

export function TrustRow() {
  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-rule pt-6">
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {marks.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-14 text-slate">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-rule text-ink">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            {label}
          </div>
        ))}
      </div>
      <p className="text-14 text-slate">
        Serving real estate, medical &amp; dental, restaurants, construction, e-commerce, and
        nonprofit clients across Texas.
      </p>
    </div>
  );
}
