import Link from "next/link";
import { industries } from "@/content/industries";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";

type IndustryGridProps = {
  limit?: number;
  variant?: "list" | "cards";
  tone?: "paper" | "raised" | "grid";
};

export function IndustryGrid({ limit, variant = "list", tone = "paper" }: IndustryGridProps) {
  const items = limit ? industries.slice(0, limit) : industries;

  if (variant === "cards") {
    return (
      <LedgerSection label="Industries we know" tone={tone}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((industry, index) => (
            <Reveal key={industry.slug} delay={(index % 3) * 80}>
              <Link href={`/industries/${industry.slug}`} className="group block h-full border border-rule">
                <DuotoneImage
                  src={industry.image}
                  alt=""
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[4/3]"
                />
                <div className="p-6">
                  <p className="rule-hover inline-block text-18 text-ink">{industry.name}</p>
                  <p className="mt-2 text-16 text-slate">{industry.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {limit ? (
          <div className="mt-6">
            <Link href="/industries" className="text-16 text-ink underline-offset-4 hover:underline">
              View all industries
            </Link>
          </div>
        ) : null}
      </LedgerSection>
    );
  }

  return (
    <LedgerSection label="Industries we know" tone={tone}>
      <div className="divide-y divide-rule border-t border-b border-rule">
        {items.map((industry, index) => (
          <Reveal key={industry.slug} delay={Math.min(index, 6) * 40}>
            <Link href={`/industries/${industry.slug}`} className="block py-4 hover:bg-ink/5">
              <span className="rule-hover inline-block text-18 text-ink">{industry.name}</span>
              <p className="mt-1 max-w-[65ch] text-16 text-slate">{industry.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
      {limit ? (
        <div className="mt-6">
          <Link href="/industries" className="text-16 text-ink underline-offset-4 hover:underline">
            View all industries
          </Link>
        </div>
      ) : null}
    </LedgerSection>
  );
}
