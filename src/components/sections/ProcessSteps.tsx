import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    label: "Discovery call",
    duration: "Week 1",
    detail: "We learn what you actually need and whether we're a fit, before anything is scoped or signed.",
  },
  {
    number: "02",
    label: "Books review",
    duration: "Weeks 1–2",
    detail: "We look at your current books or prior returns to see what shape things are actually in.",
  },
  {
    number: "03",
    label: "Proposal & onboarding",
    duration: "Week 2",
    detail: "A written scope and price, then setup: portal access, document collection, account connections.",
  },
  {
    number: "04",
    label: "Ongoing service",
    duration: "Month 1 on",
    detail: "Work runs on its own schedule, monthly books, quarterly projections, or whatever the engagement calls for.",
  },
] as const;

type ProcessStepsProps = {
  heading?: string;
  layout?: "list" | "cards";
};

export function ProcessSteps({ heading = "How it works", layout = "list" }: ProcessStepsProps) {
  if (layout === "cards") {
    return (
      <LedgerSection label={heading}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="h-full border border-rule bg-paper-raised p-6">
                <span className="text-14 tabular-nums text-brass">{step.number}</span>
                <p className="mt-2 text-18 text-ink">{step.label}</p>
                <p className="mt-1 text-14 tabular-nums text-slate">{step.duration}</p>
                <p className="mt-3 text-16 text-slate">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </LedgerSection>
    );
  }

  return (
    <LedgerSection label={heading}>
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
              <span className="text-14 tabular-nums text-brass">{step.number}</span>
              <span className="text-18 text-ink">{step.label}</span>
              <span className="ml-auto text-14 tabular-nums text-slate">{step.duration}</span>
            </div>
            <p className="max-w-[65ch] pb-4 text-16 text-slate">{step.detail}</p>
            {index < steps.length - 1 ? <Rule /> : null}
          </div>
        ))}
      </div>
    </LedgerSection>
  );
}
