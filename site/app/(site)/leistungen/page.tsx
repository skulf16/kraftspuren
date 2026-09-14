import type { Metadata } from "next";
import PageHero from "@/components/brand/PageHero";
import LeistungsBildCard from "@/components/brand/LeistungsBildCard";
import KassenBadge from "@/components/brand/KassenBadge";
import { CtaButton, PhoneLink } from "@/components/brand/CtaButton";
import { LEISTUNGEN } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle physiotherapeutischen Leistungen in Potsdam: Krankengymnastik, Manuelle Therapie, KG-Gerät, KG-ZNS, Lymphdrainage, Wärme- und Elektrotherapie.",
  alternates: { canonical: "/leistungen" },
};

export default function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Unser Leistungsspektrum"
        title="Physiotherapie-Leistungen in Potsdam"
        text="Wir sind für jedes physiotherapeutische Heilmittel zugelassen. Was auch immer Ihr Arzt verordnet hat - hier finden Sie die passende Behandlung."
        image="/praxis/sportraum.jpg"
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <KassenBadge className="mb-10" />
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {LEISTUNGEN.map((l) => (
              <LeistungsBildCard
                key={l.slug}
                title={l.title}
                klartext={l.klartext}
                href={`/leistungen/${l.slug}`}
                img={l.img}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-2xl bg-white p-8 md:p-10">
            <p className="eyebrow mb-3">Gut zu wissen</p>
            <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
              Nicht sicher, was auf Ihrem Rezept steht?
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              KG, MT, MLD - die Abkürzungen auf der Verordnung sind nicht
              selbsterklärend. Rufen Sie einfach an, wir schauen gemeinsam drauf.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <CtaButton href="/kontakt">Termin anfragen</CtaButton>
              <PhoneLink />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
