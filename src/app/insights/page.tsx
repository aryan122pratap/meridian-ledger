import type { Metadata } from "next";
import Link from "next/link";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practitioner writing on tax planning, IRS notices, and bookkeeping, with worked numbers, not generic advice.",
};

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <LedgerSection label="Insights" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Written by the people who do the work.</h1>
      <div className="mt-8 flex flex-col">
        {articles.map((article, index) => (
          <div key={article.slug}>
            <Reveal delay={Math.min(index, 4) * 60}>
              <Link
                href={`/insights/${article.slug}`}
                className="flex flex-col gap-6 py-6 hover:bg-ink/5 sm:flex-row sm:items-start"
              >
                <DuotoneImage
                  src={article.image}
                  alt=""
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="aspect-[4/3] w-full shrink-0 sm:w-[220px]"
                />
                <div className="min-w-0">
                  <p className="text-14 tabular-nums text-slate">{formatDate(article.publishedAt)}</p>
                  <h2 className="rule-hover mt-2 inline-block font-display text-22 font-medium text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-2 max-w-[65ch] text-16 text-slate">{article.dek}</p>
                </div>
              </Link>
            </Reveal>
            {index < articles.length - 1 ? <Rule /> : null}
          </div>
        ))}
      </div>
    </LedgerSection>
  );
}
