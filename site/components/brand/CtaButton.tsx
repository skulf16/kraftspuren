import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function CtaButton({ href, children, variant = "primary", className }: CtaButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-bold uppercase tracking-[0.12em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : variant === "light"
        ? "bg-white text-primary-dark hover:bg-white/90"
        : "border-2 border-primary text-primary hover:bg-primary hover:text-white";
  return (
    <Link href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </Link>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href="tel:+4915565931877"
      className={`text-2xl font-bold text-accent transition-colors hover:text-accent-dark ${className ?? ""}`}
    >
      015565 931877
    </a>
  );
}
