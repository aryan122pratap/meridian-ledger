import { Button } from "./Button";

type CTAProps = {
  heading: string;
  action: { label: string; href: string };
  className?: string;
};

export function CTA({ heading, action, className }: CTAProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-6 bg-ink px-6 py-ledger-2 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="font-display text-28 font-medium">{heading}</p>
      <Button href={action.href} variant="primary">
        {action.label}
      </Button>
    </div>
  );
}
