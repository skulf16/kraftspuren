"use client";

import { useEffect, useState } from "react";
import type { AmpelStatus } from "@/lib/ampel";

const OPTIONEN: {
  status: AmpelStatus;
  label: string;
  beschreibung: string;
  farbe: string;
  aktivRing: string;
}[] = [
  {
    status: "gruen",
    label: "Grün",
    beschreibung: "Start sofort möglich",
    farbe: "bg-emerald-500",
    aktivRing: "ring-emerald-500",
  },
  {
    status: "gelb",
    label: "Gelb",
    beschreibung: "Start in bis zu 4 Wochen",
    farbe: "bg-amber-400",
    aktivRing: "ring-amber-400",
  },
  {
    status: "rot",
    label: "Rot",
    beschreibung: "Start in über 4 Wochen",
    farbe: "bg-red-500",
    aktivRing: "ring-red-500",
  },
];

export default function AdminPanel({
  initialEingeloggt,
}: {
  initialEingeloggt: boolean;
}) {
  const [eingeloggt, setEingeloggt] = useState(initialEingeloggt);
  const [passwort, setPasswort] = useState("");
  const [status, setStatus] = useState<AmpelStatus | null>(null);
  const [meldung, setMeldung] = useState<string | null>(null);
  const [laedt, setLaedt] = useState(false);

  useEffect(() => {
    fetch("/api/ampel", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.status) setStatus(data.status as AmpelStatus);
      })
      .catch(() => {});
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setMeldung(null);
    setLaedt(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwort }),
      });
      if (res.ok) {
        setEingeloggt(true);
        setPasswort("");
      } else {
        const data = await res.json().catch(() => null);
        setMeldung(data?.error ?? "Anmeldung fehlgeschlagen");
      }
    } catch {
      setMeldung("Keine Verbindung zum Server");
    } finally {
      setLaedt(false);
    }
  }

  async function setzeStatus(neu: AmpelStatus) {
    setMeldung(null);
    setLaedt(true);
    const vorher = status;
    setStatus(neu);
    try {
      const res = await fetch("/api/ampel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: neu }),
      });
      if (res.status === 401) {
        setStatus(vorher);
        setEingeloggt(false);
        setMeldung("Sitzung abgelaufen - bitte neu anmelden.");
      } else if (!res.ok) {
        setStatus(vorher);
        setMeldung("Speichern fehlgeschlagen, bitte erneut versuchen.");
      } else {
        setMeldung("Gespeichert.");
      }
    } catch {
      setStatus(vorher);
      setMeldung("Keine Verbindung zum Server");
    } finally {
      setLaedt(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" }).catch(() => {});
    setEingeloggt(false);
  }

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-4 py-12">
      <p className="eyebrow mb-2">Admin</p>
      <h1 className="text-2xl font-light tracking-tight text-primary">
        Terminampel
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        Wann kann ein Patient, der heute anfragt, mit einer Behandlungsserie
        starten (6 Termine, zweimal pro Woche)?
      </p>

      {!eingeloggt ? (
        <form onSubmit={login} className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">
              Passwort
            </span>
            <input
              type="password"
              value={passwort}
              onChange={(e) => setPasswort(e.target.value)}
              autoComplete="current-password"
              required
              className="h-12 w-full rounded-xl border border-surface bg-white px-4 text-base text-ink outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            disabled={laedt}
            className="h-12 w-full rounded-full bg-primary text-sm font-bold uppercase tracking-[0.12em] text-white transition-opacity disabled:opacity-50"
          >
            Anmelden
          </button>
          {meldung && <p className="text-sm text-red-600">{meldung}</p>}
        </form>
      ) : (
        <div className="mt-8 space-y-3">
          {OPTIONEN.map((o) => {
            const aktiv = status === o.status;
            return (
              <button
                key={o.status}
                type="button"
                disabled={laedt}
                onClick={() => setzeStatus(o.status)}
                className={`flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left transition-shadow disabled:opacity-60 ${
                  aktiv ? `ring-2 ${o.aktivRing}` : "ring-1 ring-surface"
                }`}
              >
                <span
                  className={`h-6 w-6 shrink-0 rounded-full ${o.farbe}`}
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-semibold text-ink">
                    {o.label}
                    {aktiv && (
                      <span className="ml-2 text-xs font-medium text-ink-muted">
                        aktiv
                      </span>
                    )}
                  </span>
                  <span className="block text-sm text-ink-muted">
                    {o.beschreibung}
                  </span>
                </span>
              </button>
            );
          })}
          {meldung && <p className="text-sm text-ink-muted">{meldung}</p>}
          <button
            type="button"
            onClick={logout}
            className="mt-4 text-sm text-ink-muted underline"
          >
            Abmelden
          </button>
        </div>
      )}
    </main>
  );
}
