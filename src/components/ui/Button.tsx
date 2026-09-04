import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonElProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkProps | ButtonElProps;

const variantStyles: Record<Variant, string> = {
  primary: "bg-ledger text-paper hover:bg-ledger-hover active:bg-ledger-active",
  secondary: "border border-ink text-ink hover:bg-ink/5",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-16 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const classes = [baseStyles, variantStyles[variant], className].filter(Boolean).join(" ");

  if (props.href) {
    const { href, ...anchorProps } = props as LinkProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type, ...buttonRest } = props as ButtonElProps;
  return (
    <button type={type ?? "button"} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
