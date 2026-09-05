import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Table } from "@/components/ui/Table";
import { Accordion } from "@/components/ui/Accordion";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTA } from "@/components/ui/CTA";
import { Figure } from "@/components/ui/Figure";
import { Button } from "@/components/ui/Button";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { JsonLd } from "@/components/JsonLd";
import { getFaqSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";

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

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const startingItem = service.included[0];

  return (
    <>
      <JsonLd data={getFaqSchema(service.faqs)} />

      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-x-16">
        <div className="flex flex-col">
          <LedgerSection
            noContainer
            label={<span className="tabular-nums">{service.code}</span>}
            className="pt-ledger-3"
          >
            <p className="text-14 text-slate">Service</p>
            <h1 className="mt-2 font-display text-38 font-medium text-ink">{service.name}</h1>
            <DuotoneImage
              src={service.image}
              alt=""
              sizes="100vw"
              className="mt-6 aspect-[16/9] lg:hidden"
            />
            <div className="mt-6 flex flex-col gap-4">{paragraphs(service.whatItIs)}</div>
          </LedgerSection>

          <LedgerSection noContainer label="Who it's for">
            <p className="max-w-[65ch] text-18 text-slate">{service.whoItsFor}</p>
          </LedgerSection>

          <LedgerSection noContainer label="What's included">
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

          <LedgerSection noContainer label="What it costs to skip this">
            <div className="flex flex-col gap-4">{paragraphs(service.costOfSkipping)}</div>
          </LedgerSection>

          <LedgerSection noContainer label="FAQ">
            <Accordion items={service.faqs} />
          </LedgerSection>

          <LedgerSection noContainer label="Notice" className="border-b-0">
            <Disclaimer />
          </LedgerSection>
        </div>

        <aside className="hidden lg:sticky lg:top-28 lg:flex lg:flex-col lg:gap-6 lg:py-ledger-3">
          <DuotoneImage src={service.image} alt="" sizes="320px" className="aspect-[4/3]" />

          <div className="border border-rule bg-paper-raised p-6">
            <p className="text-14 text-slate">Starting at</p>
            <p className="mt-1 font-display text-28 text-ink">
              <Figure emphasis prefix="$">
                {startingItem.startingPrice.toLocaleString()}
              </Figure>
            </p>
            <p className="mt-1 text-14 text-slate">{startingItem.item}</p>
            <Button href={siteConfig.booking.href} variant="primary" className="mt-4 w-full justify-center">
              {siteConfig.booking.label}
            </Button>
          </div>

          <div className="border border-rule p-6">
            <p className="text-14 font-medium text-ink">Related services</p>
            <ul className="mt-3 flex flex-col gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="text-16 text-ink underline-offset-4 hover:underline"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CTA
        heading="Ready to talk through what this looks like for you?"
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
