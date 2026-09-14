"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/praxis-team", label: "Praxis & Team" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+4915565931877"
            aria-label="Anrufen"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
          >
            Termin anfragen
          </Link>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 rounded bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary/10 bg-bg px-4 pb-6 pt-2 md:hidden" aria-label="Hauptnavigation mobil">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-medium text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Termin anfragen
          </Link>
        </nav>
      )}
    </header>
  );
}
