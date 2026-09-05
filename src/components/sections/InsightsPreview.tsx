import Link from "next/link";
import { articles } from "@/content/articles";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

type InsightsPreviewProps = {
  limit?: number;
};

export function InsightsPreview({ limit = 3 }: InsightsPreviewProps) {
  const items = articles.slice(0, limit);

  return (
    <LedgerSection label="Insights">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {items.map((article, index) => (
          <Reveal key={article.slug} delay={index * 80}>
            <Link href={`/insights/${article.slug}`} className="group block h-full border border-rule">
              <DuotoneImage
                src={article.image}
                alt=""
                sizes="(max-width: 640px) 100vw, 33vw"
                className="aspect-[4/3]"
              />
              <div className="p-6">
                <p className="text-14 tabular-nums text-slate">{formatDate(article.publishedAt)}</p>
                <p className="rule-hover mt-2 inline-block text-18 text-ink">{article.title}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/insights" className="text-16 text-ink underline-offset-4 hover:underline">
          View all insights
        </Link>
      </div>
    </LedgerSection>
  );
}
