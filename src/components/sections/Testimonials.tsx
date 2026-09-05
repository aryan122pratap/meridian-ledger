import { Star } from "lucide-react";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Client statements are illustrative for a fictional firm — names, quotes,
 * ratings, and saving figures are placeholder marketing copy, not real testimonials.
 */
const testimonials = [
  {
    quote:
      "Meridian caught a depreciation schedule our old accountant never started on a rental we'd owned for two years.",
    name: "J. Alvarez",
    detail: "Owner, Alvarez Construction LLC",
    result: 9000,
    rating: 5,
  },
  {
    quote: "The quarterly check-ins mean I'm not guessing what I owe every April anymore.",
    name: "R. Kim",
    detail: "Owner, a multi-location restaurant group",
    result: 9100,
    rating: 5,
  },
  {
    quote: "They set our S-corp salary at a number we could actually defend, not just a low guess.",
    name: "T. Beaumont",
    detail: "Founder, a design consultancy",
    result: 8400,
    rating: 5,
  },
] as const;

export function Testimonials() {
  return (
    <section className="border-b border-rule bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-ledger-2 sm:px-12 md:grid-cols-[200px_1px_1fr] md:gap-8">
        <div className="font-display text-16 font-medium text-paper">Client statements</div>
        <div aria-hidden="true" className="hidden w-px self-stretch bg-paper/15 md:block" />
        <div className="flex min-w-0 flex-col gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 100}>
              <div>
                <div className="flex gap-1 text-brass" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 max-w-[65ch] font-display text-22 font-medium text-paper">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 text-16 text-paper/70">
                  {t.name}, {t.detail} &mdash; saved{" "}
                  <Figure emphasis prefix="$">
                    {t.result.toLocaleString()}
                  </Figure>
                </p>
                {index < testimonials.length - 1 ? <div className="mt-8 h-px bg-paper/15" /> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
