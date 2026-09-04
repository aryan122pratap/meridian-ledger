import type { Metadata } from "next";
import Link from "next/link";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
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
            <Link href={`/insights/${article.slug}`} className="block py-6 hover:bg-ink/5">
              <p className="text-14 tabular-nums text-slate">{formatDate(article.publishedAt)}</p>
              <h2 className="mt-2 font-display text-22 font-medium text-ink">{article.title}</h2>
              <p className="mt-2 max-w-[65ch] text-16 text-slate">{article.dek}</p>
            </Link>
            {index < articles.length - 1 ? <Rule /> : null}
          </div>
        ))}
      </div>
    </LedgerSection>
  );
}
