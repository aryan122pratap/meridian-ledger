import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { Table } from "@/components/ui/Table";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CTA } from "@/components/ui/CTA";
import { Figure } from "@/components/ui/Figure";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Bundled monthly packages for bookkeeping, tax, and advisory, plus a la carte service pricing.",
};

type PackageItem = { item: string; detail: string };

type Package = {
  name: string;
  price: number;
  forWhom: string;
  items: PackageItem[];
  recommended?: boolean;
};

const packages: Package[] = [
  {
    name: "Foundation",
    price: 450,
    forWhom: "Sole proprietors and single-member LLCs",
    items: [
      { item: "Monthly bookkeeping (1 account)", detail: "Reconciled and categorized" },
      { item: "Annual individual return", detail: "Federal + 1 state" },
      { item: "Annual business return", detail: "If applicable" },
      { item: "One planning call per year", detail: "Held in Q4" },
    ],
  },
  {
    name: "Growth",
    price: 950,
    forWhom: "S-corps and growing LLCs with employees",
    items: [
      { item: "Monthly bookkeeping (up to 3 accounts)", detail: "Reconciled and categorized" },
      { item: "Quarterly tax projections", detail: "Updated each quarter" },
      { item: "Payroll (up to 5 employees)", detail: "Processed on your cycle" },
      { item: "Business + owner individual return", detail: "Federal + 1 state each" },
    ],
    recommended: true,
  },
  {
    name: "Complete",
    price: 1850,
    forWhom: "Established, multi-owner businesses",
    items: [
      { item: "Monthly bookkeeping (up to 5 accounts)", detail: "Reconciled and categorized" },
      { item: "Quarterly projections + entity review", detail: "Updated each quarter" },
      { item: "Payroll (up to 15 employees)", detail: "Processed on your cycle" },
      { item: "Monthly CFO advisory check-in", detail: "Reporting + forecast" },
      { item: "Business return + all owner K-1 returns", detail: "Federal + 1 state each" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <ImageBanner
        image="/images/services/bookkeeping.jpg"
        eyebrow="Pricing"
        heading="Three packages, priced for what you actually need."
        body={
          <p>
            Every package bundles bookkeeping and tax work so nothing falls between the two.
            Prices below are starting monthly rates, confirmed after a short scoping call.
          </p>
        }
      />

      {packages.map((pkg, index) => (
        <LedgerSection
          key={pkg.name}
          tone={index % 2 === 0 ? "paper" : "raised"}
          label={
            <div>
              <p>{pkg.name}</p>
              <p className="mt-1 text-14 font-normal text-slate">{pkg.forWhom}</p>
            </div>
          }
        >
          <p className="mb-4 font-display text-28 text-ink">
            From{" "}
            <Figure emphasis prefix="$">
              {pkg.price.toLocaleString()}
            </Figure>
            <span className="text-16 text-slate"> / month</span>
          </p>
          <Table
            columns={[
              { key: "item", header: "Included" },
              { key: "detail", header: "" },
            ]}
            rows={pkg.items}
            totalRule={pkg.recommended}
          />
        </LedgerSection>
      ))}

      <LedgerSection label="Notice">
        <Disclaimer />
      </LedgerSection>

      <CTA heading="Not sure which package fits?" action={{ label: "Book a consultation", href: "/contact" }} />
    </>
  );
}
