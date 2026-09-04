import Link from "next/link";
import { industries } from "@/content/industries";
import { LedgerSection } from "@/components/layout/LedgerSection";

type IndustryGridProps = {
  limit?: number;
};

export function IndustryGrid({ limit }: IndustryGridProps) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <LedgerSection label="Industries we know">
      <div className="divide-y divide-rule border-t border-b border-rule">
        {items.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="block py-4 hover:bg-ink/5">
            <span className="text-18 text-ink">{industry.name}</span>
            <p className="mt-1 max-w-[65ch] text-16 text-slate">{industry.summary}</p>
          </Link>
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
