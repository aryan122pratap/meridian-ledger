import Link from "next/link";
import { services } from "@/content/services";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Figure } from "@/components/ui/Figure";

type ServiceGridProps = {
  limit?: number;
};

export function ServiceGrid({ limit }: ServiceGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <LedgerSection label="What we do">
      <div className="divide-y divide-rule border-t border-b border-rule">
        {items.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 hover:bg-ink/5"
          >
            <span className="flex items-baseline gap-4">
              <span className="text-14 tabular-nums text-slate">{service.code}</span>
              <span className="text-18 text-ink">{service.name}</span>
            </span>
            <span className="text-16 text-slate">
              From{" "}
              <Figure emphasis prefix="$">
                {service.included[0].startingPrice.toLocaleString()}
              </Figure>
            </span>
          </Link>
        ))}
      </div>
      {limit ? (
        <div className="mt-6">
          <Link href="/services" className="text-16 text-ink underline-offset-4 hover:underline">
            View all services
          </Link>
        </div>
      ) : null}
    </LedgerSection>
  );
}
