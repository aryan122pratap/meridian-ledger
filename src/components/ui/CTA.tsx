import { Button } from "./Button";
import { Spotlight } from "@/components/motion/Spotlight";

type CTAProps = {
  heading: string;
  action: { label: string; href: string };
  className?: string;
};

export function CTA({ heading, action, className }: CTAProps) {
  return (
    <div
      style={{ background: "linear-gradient(135deg, var(--color-ink), var(--color-ledger-active))" }}
      className={className}
    >
      <Spotlight className="flex flex-col items-start gap-6 px-6 py-ledger-2 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <p className="font-display text-28 font-medium">{heading}</p>
        <Button href={action.href} variant="primary">
          {action.label}
        </Button>
      </Spotlight>
    </div>
  );
}
