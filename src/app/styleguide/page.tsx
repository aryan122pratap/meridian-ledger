import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Rule } from "@/components/ui/Rule";
import { Figure } from "@/components/ui/Figure";
import { Table, type TableColumn } from "@/components/ui/Table";
import { Accordion } from "@/components/ui/Accordion";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Styleguide",
};

const colorTokens = [
  { name: "ink", value: "#0E1F2B", usage: "Primary text, dark sections" },
  { name: "paper", value: "#F6F5F1", usage: "Page background" },
  { name: "paper-raised", value: "#FBFAF7", usage: "Raised panel, table head background" },
  { name: "ledger", value: "#1C5C48", usage: "Primary accent, CTAs" },
  { name: "ledger-hover", value: "#164A3A", usage: "Primary button hover" },
  { name: "ledger-active", value: "#0F3629", usage: "Primary button pressed" },
  { name: "brass", value: "#B58B2A", usage: "Numbers and figures only" },
  { name: "rule", value: "#D6D3CA", usage: "Hairline rules, table borders" },
  { name: "slate", value: "#5A6672", usage: "Secondary text" },
  { name: "correction", value: "#A23B26", usage: "Form errors" },
  { name: "verified", value: "#1C5C48", usage: "Form success, reuses ledger" },
] as const;

const typeScale = [
  { className: "text-14", label: "14 / 1.5", use: "Captions, table headers, disclaimers" },
  { className: "text-16", label: "16 / 1.5", use: "Body copy, navigation" },
  { className: "text-18", label: "18 / 1.55", use: "Base body copy, lead paragraphs" },
  { className: "text-22", label: "22 / 1.4", use: "Sub-headings" },
  { className: "text-28", label: "28 / 1.3", use: "Section headings" },
  { className: "text-38", label: "38 / 1.15", use: "Page headings" },
  { className: "text-52", label: "52 / 1.1", use: "Hero headings" },
  { className: "text-72", label: "72 / 1.05", use: "Display numerals" },
] as const;

const spacingTokens = [
  { className: "h-ledger-1", label: "ledger-1, 28px", note: "inline gaps, form field stacking" },
  { className: "h-ledger-2", label: "ledger-2, 56px", note: "within-section spacing" },
  { className: "h-ledger-3", label: "ledger-3, 84px", note: "between related blocks" },
  { className: "h-ledger-6", label: "ledger-6, 168px", note: "between major sections" },
] as const;

type DeliverableRow = {
  item: string;
  turnaround: string;
  price: string;
};

const deliverableColumns: TableColumn<DeliverableRow>[] = [
  { key: "item", header: "What's included" },
  { key: "turnaround", header: "Turnaround" },
  { key: "price", header: "From", numeric: true },
];

const deliverableRows: DeliverableRow[] = [
  { item: "Entity structure review", turnaround: "2 weeks", price: "$900" },
  { item: "Quarterly projections", turnaround: "Ongoing", price: "$350" },
  { item: "Year-end planning call", turnaround: "1 week", price: "$400" },
];

const faqItems = [
  {
    question: "Do I need this if I already have a bookkeeper?",
    answer:
      "Yes. Bookkeeping keeps your books accurate. Tax planning uses those books to reduce what you owe before the year closes.",
  },
  {
    question: "How is this different from tax preparation?",
    answer:
      "Tax preparation reports what already happened. Planning happens during the year, while there is still time to change the outcome.",
  },
  {
    question: "When should I start?",
    answer: "Ideally in Q1 or Q2. Plans made in December have far fewer moves left to make.",
  },
];

function SectionHeading({ children }: { children: string }) {
  return <h2 className="font-display text-28 font-medium text-ink">{children}</h2>;
}

export default function StyleguidePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-ledger-3 px-6 py-ledger-3 sm:px-12">
      <div>
        <h1 className="font-display text-38 font-medium text-ink">Styleguide</h1>
        <p className="mt-2 max-w-[72ch] text-16 text-slate">
          Every foundation token and shared component in one place. Header and footer are not
          repeated below. They appear as the chrome at the top and bottom of this page.
        </p>
      </div>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Color</SectionHeading>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-2">
              <div className="h-16 w-full border border-rule" style={{ backgroundColor: token.value }} />
              <p className="text-16 font-medium text-ink">{token.name}</p>
              <p className="text-14 text-slate">{token.value}</p>
              <p className="text-14 text-slate">{token.usage}</p>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      <section className="flex flex-col gap-0">
        <SectionHeading>Type scale</SectionHeading>
        {typeScale.map((t) => (
          <div key={t.className} className="flex flex-col gap-1 border-b border-rule py-6 last:border-b-0">
            <p className="text-14 text-slate">
              {t.label} &mdash; {t.use}
            </p>
            <p className={`${t.className} font-display text-ink`}>Meridian Ledger CPA</p>
          </div>
        ))}
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Spacing (ledger-line rhythm)</SectionHeading>
        <div className="flex flex-col gap-4">
          {spacingTokens.map((s) => (
            <div key={s.className} className="flex items-center gap-4">
              <div className={`w-4 bg-ledger ${s.className}`} />
              <p className="text-14 text-slate">
                {s.label} &mdash; {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Rule</SectionHeading>
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-14 text-slate">Hairline</p>
            <Rule />
          </div>
          <div>
            <p className="mb-2 text-14 text-slate">Total, double rule</p>
            <Rule variant="total" />
          </div>
          <div className="flex h-12 items-center gap-4">
            <p className="text-14 text-slate">Vertical</p>
            <Rule orientation="vertical" />
            <p className="text-16 text-ink">Column divider</p>
          </div>
        </div>
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Figure</SectionHeading>
        <div className="flex flex-wrap items-baseline gap-8">
          <Figure className="text-22 text-ink">1,204</Figure>
          <Figure emphasis className="text-38 font-display" prefix="$">
            14,200
          </Figure>
          <Figure emphasis className="text-22 font-display" suffix=" days">
            17
          </Figure>
        </div>
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Button</SectionHeading>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary">
            Book a consultation
          </Button>
          <Button href="/pricing" variant="secondary">
            See pricing
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Table</SectionHeading>
        <Table columns={deliverableColumns} rows={deliverableRows} totalRule />
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Accordion</SectionHeading>
        <Accordion items={faqItems} />
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>Disclaimer</SectionHeading>
        <Disclaimer />
        <Disclaimer>
          Custom disclaimer text can also be passed as children when a page needs a more specific
          note.
        </Disclaimer>
      </section>

      <Rule />

      <section className="flex flex-col gap-6">
        <SectionHeading>CTA</SectionHeading>
        <CTA
          heading="Talk to someone who reads the whole return."
          action={{ label: "Book a consultation", href: "/contact" }}
        />
      </section>
    </div>
  );
}
