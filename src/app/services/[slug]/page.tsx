import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Table } from "@/components/ui/Table";
import { Accordion } from "@/components/ui/Accordion";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTA } from "@/components/ui/CTA";
import { Figure } from "@/components/ui/Figure";
import { JsonLd } from "@/components/JsonLd";
import { getFaqSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.seoDescription,
    openGraph: {
      title: service.name,
      description: service.seoDescription,
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.name,
      description: service.seoDescription,
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

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={getFaqSchema(service.faqs)} />
      <LedgerSection label={<span className="tabular-nums">{service.code}</span>} className="pt-ledger-3">
        <p className="text-14 text-slate">Service</p>
        <h1 className="mt-2 font-display text-38 font-medium text-ink">{service.name}</h1>
        <div className="mt-6 flex flex-col gap-4">{paragraphs(service.whatItIs)}</div>
      </LedgerSection>

      <LedgerSection label="Who it's for">
        <p className="max-w-[65ch] text-18 text-slate">{service.whoItsFor}</p>
      </LedgerSection>

      <LedgerSection label="What's included">
        <Table
          columns={[
            { key: "item", header: "What's included" },
            { key: "turnaround", header: "Turnaround" },
            { key: "price", header: "From", numeric: true },
          ]}
          rows={service.included.map((item) => ({
            item: item.item,
            turnaround: item.turnaround,
            price: <Figure prefix="$">{item.startingPrice.toLocaleString()}</Figure>,
          }))}
          totalRule
        />
      </LedgerSection>

      <LedgerSection label="What it costs to skip this">
        <div className="flex flex-col gap-4">{paragraphs(service.costOfSkipping)}</div>
      </LedgerSection>

      <LedgerSection label="FAQ">
        <Accordion items={service.faqs} />
      </LedgerSection>

      <LedgerSection label="Notice">
        <Disclaimer />
      </LedgerSection>

      <CTA
        heading="Ready to talk through what this looks like for you?"
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
