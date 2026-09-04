import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { CTA } from "@/components/ui/CTA";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.seoDescription,
    openGraph: {
      title: article.title,
      description: article.seoDescription,
      type: "article",
      publishedTime: article.publishedAt,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function paragraphs(text: string) {
  return text.split("\n\n").map((p, i) => (
    <p key={i} className="max-w-[70ch] text-18 text-slate">
      {p}
    </p>
  ));
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <LedgerSection
        label={<span className="tabular-nums">{formatDate(article.publishedAt)}</span>}
        className="pt-ledger-3"
      >
        <h1 className="font-display text-38 font-medium text-ink">{article.title}</h1>
        <p className="mt-4 max-w-[65ch] font-display text-22 text-ink">{article.dek}</p>
        <div className="mt-8 flex flex-col gap-4">{paragraphs(article.body)}</div>
      </LedgerSection>
      <CTA
        heading="Want this handled instead of researched?"
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
