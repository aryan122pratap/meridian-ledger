import type { ReactNode } from "react";
import { complianceDisclaimer } from "@/config/site";

type DisclaimerProps = {
  children?: ReactNode;
  className?: string;
};

export function Disclaimer({ children, className }: DisclaimerProps) {
  return (
    <p className={["border-l-2 border-rule pl-4 text-14 text-slate", className].filter(Boolean).join(" ")}>
      {children ?? complianceDisclaimer}
    </p>
  );
}
