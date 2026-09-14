"use client";

import { useEffect, useState } from "react";
import type { AmpelStatus as Status } from "@/lib/ampel";

const TEXTE: Record<
  Status,
  { headline: string; text: string; kurz: string; dot: string }
> = {
  gruen: {
    headline: "Kurzfristig Termine frei",
    text: "Sie können sofort mit Ihrer Behandlungsserie starten - in der Regel 6 Termine, zweimal pro Woche.",
    kurz: "Kurzfristig Termine frei: Start Ihrer Behandlungsserie sofort möglich",
    dot: "bg-emerald-500",
  },
  gelb: {
    headline: "Start innerhalb von 4 Wochen",
    text: "Sie können innerhalb von 4 Wochen mit Ihrer Behandlungsserie starten - in der Regel 6 Termine, zweimal pro Woche.",
    kurz: "Start Ihrer Behandlungsserie innerhalb von 4 Wochen möglich",
    dot: "bg-amber-400",
  },
  rot: {
    headline: "Aktuell längere Wartezeit",
    text: "Der Start einer Behandlungsserie (in der Regel 6 Termine, zweimal pro Woche) ist derzeit erst in über 4 Wochen möglich. Melden Sie sich gern trotzdem - wir setzen Sie auf die Liste.",
    kurz: "Start Ihrer Behandlungsserie derzeit in über 4 Wochen möglich",
    dot: "bg-red-500",
  },
};

export default function AmpelStatus({
  className,
  variant = "box",
}: {
  className?: string;
  variant?: "box" | "zeile";
}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    let aktiv = true;
    fetch("/api/ampel", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (aktiv && data?.status) setStatus(data.status as Status);
      })
      .catch(() => {});
    return () => {
      aktiv = false;
    };
  }, []);

  if (!status) return null;

  const t = TEXTE[status];

  if (variant === "zeile") {
    return (
      <span
        className={`inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-4 pr-5 text-[15px] font-medium text-primary ${className ?? ""}`}
      >
        <span
          className={`h-3 w-3 shrink-0 rounded-full ${t.dot}`}
          aria-hidden="true"
        />
        {t.kurz}
      </span>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-start gap-3 rounded-2xl bg-surface p-5">
        <span
          className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${t.dot}`}
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-semibold text-primary">
            Aktuelle Terminlage: {t.headline}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{t.text}</p>
        </div>
      </div>
    </div>
  );
}
