import Link from "next/link";
import { services } from "@/content/services";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Figure } from "@/components/ui/Figure";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";

type ServiceGridProps = {
  limit?: number;
  variant?: "list" | "cards";
  tone?: "paper" | "raised" | "grid";
};

export function ServiceGrid({ limit, variant = "list", tone = "paper" }: ServiceGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  if (variant === "cards") {
    return (
      <LedgerSection label="What we do" tone={tone}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <TiltCard>
                <Link href={`/services/${service.slug}`} className="block h-full border border-rule">
                  <DuotoneImage
                    src={service.image}
                    alt=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/3]"
                    interactive
                  />
                  <div className="p-6">
                    <span className="text-14 tabular-nums text-slate">{service.code}</span>
                    <p className="rule-hover mt-1 inline-block text-18 text-ink">{service.name}</p>
                    <p className="mt-3 text-16 text-slate">
                      From{" "}
                      <Figure emphasis prefix="$">
                        {service.included[0].startingPrice.toLocaleString()}
                      </Figure>
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
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

  return (
    <LedgerSection label="What we do" tone={tone}>
      <div className="divide-y divide-rule border-t border-b border-rule">
        {items.map((service, index) => (
          <Reveal key={service.slug} delay={Math.min(index, 6) * 40}>
            <Link
              href={`/services/${service.slug}`}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 hover:bg-ink/5"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-14 tabular-nums text-slate">{service.code}</span>
                <span className="rule-hover text-18 text-ink">{service.name}</span>
              </span>
              <span className="text-16 text-slate">
                From{" "}
                <Figure emphasis prefix="$">
                  {service.included[0].startingPrice.toLocaleString()}
                </Figure>
              </span>
            </Link>
          </Reveal>
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
