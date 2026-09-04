import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
import { Figure } from "@/components/ui/Figure";

const testimonials = [
  {
    quote:
      "Meridian caught a depreciation schedule our old accountant never started on a rental we'd owned for two years.",
    name: "J. Alvarez",
    detail: "Alvarez Construction LLC",
    result: 9000,
  },
  {
    quote: "The quarterly check-ins mean I'm not guessing what I owe every April anymore.",
    name: "R. Kim",
    detail: "Owner, a multi-location restaurant group",
    result: 9100,
  },
  {
    quote: "They set our S-corp salary at a number we could actually defend, not just a low guess.",
    name: "T. Beaumont",
    detail: "Founder, a design consultancy",
    result: 8400,
  },
] as const;

export function Testimonials() {
  return (
    <LedgerSection label="Client statements">
      <div className="flex flex-col gap-8">
        {testimonials.map((t, index) => (
          <div key={t.name}>
            <p className="max-w-[65ch] font-display text-22 font-medium text-ink">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-3 text-16 text-slate">
              {t.name}, {t.detail} &mdash; saved{" "}
              <Figure emphasis prefix="$">
                {t.result.toLocaleString()}
              </Figure>
            </p>
            {index < testimonials.length - 1 ? <Rule className="mt-8" /> : null}
          </div>
        ))}
      </div>
    </LedgerSection>
  );
}
