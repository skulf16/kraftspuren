import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import FaqAccordion from "@/components/brand/FaqAccordion";
import KassenBadge from "@/components/brand/KassenBadge";
import AmpelStatus from "@/components/AmpelStatus";
import { LANDING_PAGES, ABLAUF_LP } from "@/lib/lp-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDING_PAGES.map((lp) => ({ slug: lp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lp = LANDING_PAGES.find((l) => l.slug === slug);
  if (!lp) return {};
  return {
    title: { absolute: lp.metaTitle },
    description: lp.metaDescription,
    // noindex: SEA-Seiten kannibalisieren sonst die organischen /leistungen/-Seiten
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const lp = LANDING_PAGES.find((l) => l.slug === slug);
  if (!lp) notFound();

  return (
    <>
      {/* Sektion 1 - Hero: Message Match + Erst-CTA */}
      <section className="relative mx-auto w-[96%] overflow-hidden rounded-[20px] bg-primary-dark">
        <div className="relative min-h-[440px]">
          <Image
            src={lp.heroImg}
            alt=""
            fill
            priority
            sizes="96vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/65 to-primary/25" />
          <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-14 md:px-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                {lp.h1}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {lp.subline}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Gesetzlich versichert", "Privat versichert", "Selbstzahler"].map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
              {/* Statuszeile "Heute geöffnet bis ..." folgt, sobald [ÖFFNUNGSZEITEN] vorliegen */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="tel:+4915565931877"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
                >
                  Jetzt anrufen: 015565 931877
                </a>
                <a
                  href="#termin"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/70 px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-primary-dark"
                >
                  Termin anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2 - Vertrauensleiste: nur belegbare Fakten */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
          <li>
            <AmpelStatus variant="zeile" />
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>
              <span className="font-semibold text-primary">5,0</span>
              <span className="text-[#fbbc04]" aria-hidden="true"> ★★★★★ </span>
              auf Google (24 Rezensionen)
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Ahornstraße 18, 14482 Potsdam
          </li>
        </ul>
      </section>

      {/* Sektion 3 - Ablauf */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="eyebrow mb-3">Ihr Weg zu uns</p>
          <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
            So läuft Ihre Behandlung ab.
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABLAUF_LP.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl bg-white p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-lg font-light text-primary">
                  {i + 1}
                </span>
                <h3 className="font-semibold leading-snug text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sektion 4 - Leistungsblock */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Die Behandlung</p>
            <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
              {lp.leistungTitle}
            </h2>
            {lp.leistungAbsaetze.map((absatz) => (
              <p key={absatz.slice(0, 40)} className="mt-4 leading-relaxed text-ink">
                {absatz}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 5 - Kostenblock */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="eyebrow mb-3">GKV · PKV · Selbstzahler</p>
          <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
            Wer übernimmt die Kosten?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary">GKV</p>
              <h3 className="mt-1 font-semibold text-primary">Gesetzlich versichert</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Mit ärztlicher Verordnung übernimmt Ihre Krankenkasse die Behandlung.
                Ab 18 Jahren fällt die gesetzliche Zuzahlung an: 10 Prozent der Kosten
                plus 10 Euro je Rezept (§ 32 SGB V).
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary">PKV</p>
              <h3 className="mt-1 font-semibold text-primary">Privat versichert</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Sie erhalten von uns eine Rechnung und reichen sie bei Ihrer
                Versicherung oder Beihilfe ein. Was erstattet wird, regelt Ihr Tarif.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary">Selbst</p>
              <h3 className="mt-1 font-semibold text-primary">Selbstzahler</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Auch ohne Rezept können Sie viele Behandlungen direkt bei uns buchen.
                Die Preise nennen wir Ihnen transparent vorab am Telefon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 6 - USP Sportraum (nur wo passend) */}
      {lp.sportraum && (
        <section className="py-8 md:py-12">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-8">
            <div>
              <p className="eyebrow mb-3">Aktiv statt passiv</p>
              <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
                Platz zum Trainieren: unser großer Sportraum.
              </h2>
              <p className="mt-4 leading-relaxed text-ink">
                Viele Praxen behandeln nur am Tisch. Bei uns geht es danach weiter:
                Im großen Sportraum trainieren Sie an modernen Geräten - begleitet
                von Ihrem Therapeuten, bis die Übungen sitzen und Sie sich sicher
                fühlen.
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/praxis/sportraum-2.jpg"
                alt="Großer Sportraum der kraftspuren Physiotherapie mit modernen Trainingsgeräten"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Sektion 7 - Praxis (E-E-A-T); Team-Vorstellung folgt [TEAM-INFOS EINHOLEN] */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-8 rounded-2xl bg-white p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/praxis/empfang.jpg"
                alt="Empfang und Wartebereich der kraftspuren Physiotherapie in Potsdam"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">Die Praxis</p>
              <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
                Wer hier behandelt.
              </h2>
              <p className="mt-4 leading-relaxed text-ink">
                Die kraftspuren Physiotherapie in Potsdam-Babelsberg hat jede
                physiotherapeutische Zulassung - von Krankengymnastik über Manuelle
                Therapie bis zur Lymphdrainage. Helle Behandlungsräume, ein großer
                Sportraum und kurze Wege gehören dazu. Die Vorstellung unseres Teams
                folgt in Kürze; am schnellsten lernen Sie uns persönlich kennen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 8 - FAQ (Einwandbehandlung); kein FAQPage-Schema nötig (noindex) */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="eyebrow mb-3">Häufige Fragen</p>
          <h2 className="text-2xl font-light tracking-tight text-primary md:text-3xl">
            Was Patienten uns vor dem ersten Termin fragen.
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={lp.faq} />
          </div>
        </div>
      </section>

      {/* Sektion 9 - Abschluss-CTA + NAP */}
      <section id="termin" className="scroll-mt-24 py-8 pb-16 md:py-12 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
            <div className="relative grid gap-10 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
              <div className="text-white">
                <p className="eyebrow mb-3 !text-white/80">Termin anfragen</p>
                <h2 className="text-2xl font-light tracking-tight md:text-3xl">
                  Rezept in der Hand? Dann los.
                </h2>
                <p className="mt-3 max-w-md text-white/85">
                  Ein Rezept, das abläuft, bevor Sie anrufen, ist verschenkt - die
                  Frist läuft ab Ausstellungsdatum. Rufen Sie an; wenn wir gerade
                  behandeln, sprechen Sie auf den Anrufbeantworter und wir rufen
                  zurück.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href="tel:+4915565931877"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
                  >
                    Jetzt anrufen: 015565 931877
                  </a>
                </div>
                <KassenBadge className="mt-8 [&_li]:bg-white/15 [&_li]:text-white [&_p]:text-white/70" />
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-white">So finden Sie uns</h3>
                <address className="mt-3 not-italic leading-relaxed">
                  kraftspuren Physiotherapie UG
                  <br />
                  Ahornstraße 18
                  <br />
                  14482 Potsdam (Babelsberg)
                </address>
                <p className="mt-3">
                  Telefon:{" "}
                  <a href="tel:+4915565931877" className="font-semibold text-white underline-offset-4 hover:underline">
                    015565 931877
                  </a>
                </p>
                {/* [ÖFFNUNGSZEITEN + ANFAHRT/PARKEN/ÖPNV + EINZUGSGEBIET-STADTTEILE EINHOLEN] */}
                <p className="mt-3 text-white/70">
                  Öffnungszeiten und Anfahrt nennen wir Ihnen gern am Telefon -
                  Termine nach Vereinbarung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
