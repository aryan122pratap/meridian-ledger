import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { CTA } from "@/components/ui/CTA";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.seoDescription,
    openGraph: {
      title: industry.name,
      description: industry.seoDescription,
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.name,
      description: industry.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}

function paragraphs(text: string) {
  return text.split("\n\n").map((p, i) => (
    <p key={i} className="max-w-[65ch] text-18 text-slate">
      {p}
    </p>
  ));
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <LedgerSection label="Industry" className="pt-ledger-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <h1 className="font-display text-38 font-medium text-ink">{industry.name}</h1>
            <p className="mt-4 max-w-[65ch] font-display text-22 text-ink">{industry.summary}</p>
            <div className="mt-6 flex flex-col gap-4">{paragraphs(industry.body)}</div>
          </div>
          <DuotoneImage
            src={industry.image}
            alt=""
            sizes="(max-width: 1024px) 100vw, 340px"
            className="aspect-[4/3] lg:sticky lg:top-28"
          />
        </div>
      </LedgerSection>

      <LedgerSection label="What we watch for" tone="raised">
        <ul className="flex flex-col divide-y divide-rule border-t border-b border-rule">
          {industry.taxIssues.map((issue) => (
            <li key={issue} className="py-4 text-16 text-ink">
              {issue}
            </li>
          ))}
        </ul>
      </LedgerSection>

      <CTA heading="Work in this industry?" action={{ label: "Book a consultation", href: "/contact" }} />
    </>
  );
}
