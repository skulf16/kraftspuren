"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question} className="overflow-hidden rounded-2xl bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-primary">{item.question}</span>
              <span
                aria-hidden="true"
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
