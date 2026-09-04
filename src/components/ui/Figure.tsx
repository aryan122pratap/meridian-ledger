import type { ReactNode } from "react";

type FigureProps = {
  children: ReactNode;
  emphasis?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function Figure({ children, emphasis = false, prefix, suffix, className }: FigureProps) {
  return (
    <span
      className={["tabular-nums", emphasis ? "text-brass" : "", className].filter(Boolean).join(" ")}
    >
      {prefix}
      {children}
      {suffix}
    </span>
  );
}
