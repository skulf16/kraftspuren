import type { Metadata } from "next";
import PageHero from "@/components/brand/PageHero";
import KassenBadge from "@/components/brand/KassenBadge";
import { PhoneLink } from "@/components/brand/CtaButton";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Termin für Physiotherapie in Potsdam anfragen: Telefon, Adresse und Öffnungszeiten der kraftspuren Physiotherapie.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt & Termin"
        title="So erreichen Sie uns."
        text="Am schnellsten geht es telefonisch. Halten Sie Ihre Verordnung bereit, falls Sie eine haben - dann können wir direkt den passenden Termin finden."
        image="/praxis/empfang-tresen.jpg"
      >
        <a
          href="tel:+4915565931877"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
        >
          015565 931877 anrufen
        </a>
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl bg-white p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-primary">Telefon</h2>
              <PhoneLink className="mt-2 inline-block !text-xl" />
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Wenn wir gerade behandeln, sprechen Sie gern auf den
                Anrufbeantworter - wir rufen zurück.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-primary">Adresse</h2>
              <address className="mt-2 not-italic leading-relaxed">
                kraftspuren Physiotherapie UG
                <br />
                Ahornstraße 18
                <br />
                14482 Potsdam
              </address>
              <p className="mt-2 text-sm text-ink-muted">[ANFAHRT/PARKEN]</p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-primary">Öffnungszeiten</h2>
              <p className="mt-2">[ÖFFNUNGSZEITEN]</p>
              <p className="mt-2 text-sm text-ink-muted">Termine nach Vereinbarung.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 md:px-8">
          <KassenBadge />
          <a
            href="https://share.google/4oBxYC4GiVkNZoVnJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-primary"
          >
            <span className="text-xl font-semibold text-primary">5,0</span>
            <span className="text-[#fbbc04]" aria-hidden="true">★★★★★</span>
            auf Google · 24 Rezensionen
          </a>
        </div>
      </section>
    </>
  );
}
