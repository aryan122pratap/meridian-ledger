type RuleProps = {
  orientation?: "horizontal" | "vertical";
  variant?: "hairline" | "total";
  className?: string;
};

export function Rule({ orientation = "horizontal", variant = "hairline", className }: RuleProps) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={["w-px self-stretch bg-rule", className].filter(Boolean).join(" ")}
      />
    );
  }

  if (variant === "total") {
    return (
      <div aria-hidden="true" className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}>
        <div className="h-px bg-rule" />
        <div className="h-0.5 bg-ink" />
      </div>
    );
  }

  return <div aria-hidden="true" className={["h-px bg-rule", className].filter(Boolean).join(" ")} />;
}
