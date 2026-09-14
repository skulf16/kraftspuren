import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/brand/HeroSlider";
import FaqAccordion, { type FaqItem } from "@/components/brand/FaqAccordion";
import GoogleReviews from "@/components/brand/GoogleReviews";
import { PhoneLink } from "@/components/brand/CtaButton";

export const metadata: Metadata = {
  title: "Physiotherapie Potsdam | kraftspuren Physiotherapie",
  description:
    "Physiotherapie in Potsdam mit jeder Kassenzulassung: KG, Manuelle Therapie, KG-Gerät, KG-ZNS, Lymphdrainage. GKV, PKV und Selbstzahler willkommen.",
  alternates: { canonical: "/" },
};

const LEISTUNGEN = [
  {
    title: "Krankengymnastik",
    klartext: "Gezielte Übungen und Mobilisation, die Beweglichkeit und Kraft aufbauen.",
    href: "/leistungen/krankengymnastik",
    img: "/praxis/sportraum-2.jpg",
  },
  {
    title: "Manuelle Therapie",
    klartext: "Behandlung von Gelenken und Muskeln mit gezielten Handgriffen.",
    href: "/leistungen/manuelle-therapie",
    img: "/praxis/behandlungsraum.jpg",
  },
  {
    title: "KG-Gerät",
    klartext: "Krankengymnastik am Gerät: Training im Sportraum, therapeutisch begleitet.",
    href: "/leistungen/kg-geraet",
    img: "/praxis/sportraum.jpg",
  },
  {
    title: "KG-ZNS",
    klartext: "Neurologische Krankengymnastik, z. B. nach Schlaganfall oder bei Parkinson.",
    href: "/leistungen/kg-zns",
    img: "/praxis/behandlungsraum-arbeitsplatz.jpg",
  },
  {
    title: "Manuelle Lymphdrainage",
    klartext: "Sanfte Grifftechnik, die gestaute Flüssigkeit im Gewebe in Bewegung bringt.",
    href: "/leistungen/lymphdrainage",
    img: "/praxis/ruhebereich.jpg",
  },
  {
    title: "Wärme- & Elektrotherapie",
    klartext: "Ergänzende Anwendungen, die Muskeln lockern und die Behandlung unterstützen.",
    href: "/leistungen/waerme-elektrotherapie",
    img: "/praxis/befundraum.jpg",
  },
];

const VERSPRECHEN = [
  {
    title: "Behandlung auf Augenhöhe",
    text: "Wir nehmen uns Zeit, hören zu und erklären jeden Schritt - verständlich und respektvoll.",
    icon: (
      <path d="M12 21s-7-4.6-9.5-8.5C.6 9.5 2.6 5.5 6.5 5.5c2 0 3.5 1 4.5 2.5 1-1.5 2.5-2.5 4.5-2.5 3.9 0 5.9 4 4 7-2.5 3.9-9.5 8.5-9.5 8.5z" />
    ),
  },
  {
    title: "Jede Kassenzulassung",
    text: "Von KG bis KG-ZNS: Wir sind für alle physiotherapeutischen Heilmittel zugelassen.",
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
  {
    title: "Aktiv im Sportraum",
    text: "Nach der Behandlung geht es weiter: angeleitetes Training an modernen Geräten.",
    icon: <path d="M12 14 v8 M12 14 l-4 -3 M12 14 l4 -3 M12 6 a2 2 0 1 0 0.01 0" />,
  },
  {
    title: "Übungen für zu Hause",
    text: "Wenige, dafür passende Übungen - damit die Behandlung auch zwischen den Terminen wirkt.",
    icon: <path d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />,
  },
];

const ABLAUF = [
  {
    title: "Termin anfragen",
    text: "Rufen Sie an oder schreiben Sie uns. Ihr Rezept muss innerhalb von 28 Tagen nach Ausstellung begonnen werden - warten Sie also nicht zu lange.",
  },
  {
    title: "Befund & Erstgespräch",
    text: "Beim ersten Termin schauen wir genau hin: Was tut weh, was soll besser werden? Daraus entsteht Ihr Behandlungsplan.",
  },
  {
    title: "Behandlung",
    text: "Je nach Verordnung behandeln wir am Tisch, mit den Händen oder im Sportraum am Gerät. Sie wissen immer, warum wir was machen.",
  },
  {
    title: "Übungen für zu Hause",
    text: "Sie bekommen wenige, dafür passende Übungen mit. Die wirken nur, wenn Sie sie auch machen - das sagen wir ehrlich dazu.",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Brauche ich ein Rezept für die Physiotherapie?",
    answer:
      "Für eine Behandlung über die gesetzliche oder private Krankenversicherung brauchen Sie eine ärztliche Verordnung (Heilmittelverordnung). Ohne Rezept können Sie viele Leistungen auch als Selbstzahler buchen - sprechen Sie uns einfach an.",
  },
  {
    question: "Behandeln Sie gesetzlich Versicherte, Privatpatienten und Selbstzahler?",
    answer:
      "Ja, alle drei. Wir haben jede Kassenzulassung und rechnen direkt mit den gesetzlichen Krankenkassen ab. Privatpatienten erhalten eine Rechnung zur Einreichung bei ihrer Versicherung, Selbstzahler zahlen direkt bei uns.",
  },
  {
    question: "Wie hoch ist die Zuzahlung bei gesetzlicher Versicherung?",
    answer:
      "Gesetzlich Versicherte ab 18 Jahren zahlen 10 Prozent der Behandlungskosten plus 10 Euro je Verordnung (§ 32 SGB V). Wer eine Zuzahlungsbefreiung der Krankenkasse hat, zahlt nichts dazu.",
  },
  {
    question: "Wie schnell muss ich mein Rezept einlösen?",
    answer:
      "Die Behandlung muss in der Regel innerhalb von 28 Tagen nach Ausstellung der Verordnung beginnen, bei dringlichem Behandlungsbedarf innerhalb von 14 Tagen (Heilmittel-Richtlinie). Melden Sie sich deshalb am besten direkt, wenn Sie das Rezept in der Hand haben.",
  },
  {
    question: "Was passiert beim ersten Termin?",
    answer:
      "Der erste Termin startet mit einem Befundgespräch: Wir besprechen Ihre Beschwerden, schauen uns Beweglichkeit und Kraft an und legen gemeinsam fest, worauf die Behandlung hinarbeitet. Danach beginnt meist schon die erste Behandlung.",
  },
  {
    question: "Bieten Sie auch Hausbesuche an?",
    answer:
      "Ja, wenn Ihr Arzt einen Hausbesuch verordnet hat, kommen wir zu Ihnen. Rufen Sie uns an, dann klären wir die Details.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physiotherapy",
      "@id": "https://kraftspuren.com/#praxis",
      name: "kraftspuren Physiotherapie",
      url: "https://kraftspuren.com/",
      description:
        "Physiotherapiepraxis in Potsdam: Krankengymnastik, Manuelle Therapie, KG-Gerät, KG-ZNS, Manuelle Lymphdrainage, Wärme- und Elektrotherapie - für gesetzlich Versicherte, Privatpatienten und Selbstzahler.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ahornstraße 18",
        postalCode: "14482",
        addressLocality: "Potsdam",
        addressCountry: "DE",
      },
      telephone: "+4915565931877",
      areaServed: "Potsdam und Umgebung",
    },
    {
      "@type": "FAQPage",
      "@id": "https://kraftspuren.com/#faq",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

function GlassTileIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary backdrop-blur-sm">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* INFO-KACHELN, überlappen den Hero */}
      <section className="relative z-10 -mt-10 px-4 pb-12 md:-mt-14 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <Link
            href="/kontakt"
            className="group relative flex flex-col items-start overflow-hidden rounded-[20px] border border-white/60 bg-white/70 p-6 shadow-[0_18px_40px_-18px_rgba(31,61,51,0.35)] backdrop-blur-xl transition-transform hover:-translate-y-1"
          >
            <GlassTileIcon>
              <path d="M9 2h6l1 5-3 2c.8 2.2 2.2 3.6 4 4l2-3 5 1v6c0 1.1-.9 2-2 2C11.8 19 5 12.2 5 3c0-.55.45-1 1-1" transform="scale(0.85) translate(2 2)" />
            </GlassTileIcon>
            <h3 className="relative z-10 text-lg font-semibold text-primary">
              Rezept in der Hand?
            </h3>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-ink">
              Ihre Verordnung muss innerhalb von 28 Tagen begonnen werden - melden Sie
              sich am besten direkt.
            </p>
            <div className="relative z-10 mt-auto pt-5">
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-primary-dark">
                Termin anfragen
              </span>
            </div>
          </Link>
          <Link
            href="/kontakt"
            className="group relative flex flex-col items-start overflow-hidden rounded-[20px] border border-white/60 bg-white/70 p-6 shadow-[0_18px_40px_-18px_rgba(31,61,51,0.35)] backdrop-blur-xl transition-transform hover:-translate-y-1"
          >
            <GlassTileIcon>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </GlassTileIcon>
            <h3 className="relative z-10 text-lg font-semibold text-primary">
              Öffnungszeiten
            </h3>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-ink">
              [ÖFFNUNGSZEITEN] - Termine nach Vereinbarung.
            </p>
            <div className="relative z-10 mt-auto pt-5">
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-primary-dark">
                So finden Sie uns
              </span>
            </div>
          </Link>
          <Link
            href="/kontakt"
            className="group relative flex flex-col items-start overflow-hidden rounded-[20px] bg-primary p-6 shadow-[0_18px_40px_-18px_rgba(31,61,51,0.5)] transition-transform hover:-translate-y-1"
          >
            <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M8 3v4M16 3v4M3 10h18" />
              </svg>
            </div>
            <h3 className="relative z-10 text-lg font-semibold text-white">Termin anfragen</h3>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/90">
              Rufen Sie an oder schreiben Sie uns - wir finden zeitnah einen Termin für Sie.
            </p>
            <div className="relative z-10 mt-auto pt-5">
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-accent-dark">
                Kontakt aufnehmen
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* INTRO: Bildcollage + Anspruch + Stats */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-stretch gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12 lg:gap-16">
            <div className="grid h-[420px] grid-cols-[1fr_0.92fr] gap-4 sm:h-[500px] md:h-full md:min-h-[500px] md:gap-5">
              <div className="grid grid-rows-[0.78fr_1fr] gap-4 md:gap-5">
                <div className="relative w-[82%] justify-self-end overflow-hidden rounded-2xl shadow-[0_18px_40px_-14px_rgba(31,61,51,0.25)]">
                  <Image src="/praxis/empfang.jpg" alt="Empfang der kraftspuren Physiotherapie" fill sizes="30vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_40px_-14px_rgba(31,61,51,0.25)]">
                  <Image src="/praxis/sportraum-2.jpg" alt="Sportraum mit Trainingsgeräten" fill sizes="35vw" className="object-cover" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative h-[82%] w-full overflow-hidden rounded-2xl shadow-[0_22px_48px_-14px_rgba(31,61,51,0.3)]">
                  <Image src="/praxis/behandlungsraum.jpg" alt="Behandlungsraum mit Therapieliege" fill sizes="35vw" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-3">kraftspuren Physiotherapie</p>
              <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
                <span className="block">Ihre Kraft.</span>
                <span className="block">Unser Anspruch.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-ink md:text-base">
                Ob nach OP, mit Rezept vom Arzt oder mitten in der Reha: In unserer
                Praxis in Potsdam behandeln wir mit jeder Zulassung, die es in der
                Physiotherapie gibt. Helle Räume, kurze Wege und ein großer Sportraum,
                in dem Sie trainieren, bis die Übungen sitzen. Sie stehen im
                Mittelpunkt unserer Arbeit.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-3 md:mt-10 md:gap-4">
                <div className="rounded-xl bg-white px-3 py-5 text-center md:px-5 md:py-6">
                  <dt className="text-3xl font-light text-primary md:text-4xl">6</dt>
                  <dd className="mt-2 text-balance text-[11px] font-semibold leading-tight text-ink-muted md:text-xs">
                    Leistungsbereiche
                  </dd>
                </div>
                <div className="rounded-xl bg-white px-3 py-5 text-center md:px-5 md:py-6">
                  <dt className="text-3xl font-light text-primary md:text-4xl">Jede</dt>
                  <dd className="mt-2 text-balance text-[11px] font-semibold leading-tight text-ink-muted md:text-xs">
                    Kassenzulassung
                  </dd>
                </div>
                <div className="rounded-xl bg-white px-3 py-5 text-center md:px-5 md:py-6">
                  <dt className="text-3xl font-light text-primary md:text-4xl">1</dt>
                  <dd className="mt-2 text-balance text-[11px] font-semibold leading-tight text-ink-muted md:text-xs">
                    großer Sportraum
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* UNSER ANSPRUCH: dunkle Sektion mit Glas-Karten */}
      <section className="py-6 md:py-10">
        <div className="relative mx-auto w-[96%] overflow-hidden rounded-2xl py-16 md:py-24 lg:py-28">
          <Image
            src="/praxis/flur.jpg"
            alt=""
            fill
            sizes="96vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/92 via-primary-dark/85 to-primary/80" />
          <div className="relative mx-auto mb-12 w-[85%] md:mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3 !text-white/80">Unser Anspruch</p>
              <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl">
                Worauf Sie sich verlassen können.
              </h2>
            </div>
          </div>
          <div className="relative mx-auto grid w-[85%] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VERSPRECHEN.map((v) => (
              <div
                key={v.title}
                className="flex flex-col rounded-2xl border border-white/30 bg-white/15 p-6 backdrop-blur-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {v.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN: Bild-Karten */}
      <section className="py-14 md:py-24" id="leistungen">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Unser Leistungsspektrum</p>
            <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
              Unsere Leistungen
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink md:text-base">
              Egal was auf Ihrem Rezept steht - Sie sind bei uns richtig. Wir sind für
              alle physiotherapeutischen Heilmittel zugelassen und rechnen mit allen
              Krankenkassen ab.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {LEISTUNGEN.map((l) => (
              <div
                key={l.title}
                className="group relative flex min-h-[230px] overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_22px_48px_-16px_rgba(31,61,51,0.4)]"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <Image
                    src={l.img}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-primary-dark/20" />
                </div>
                <Link href={l.href} className="absolute inset-0 z-10" aria-label={`${l.title}: mehr erfahren`} />
                <div className="pointer-events-none relative z-20 flex max-w-[70%] flex-col p-7">
                  <h3 className="text-base font-bold uppercase tracking-[0.08em] text-white md:text-lg">
                    {l.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{l.klartext}</p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex h-9 items-center justify-center rounded-full bg-white/15 px-5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors group-hover:bg-accent">
                      Mehr erfahren
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Ihr Weg zu uns</p>
            <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
              So läuft Ihre erste Behandlung ab.
            </h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABLAUF.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl bg-white p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-lg font-light text-primary">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* KOSTEN */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">GKV · PKV · Selbstzahler</p>
            <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
              Wer übernimmt die Kosten?
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink md:text-base">
              Die Frage, die fast jeder stellt: Was kostet mich das? Die kurze Antwort:
              Es hängt davon ab, wie Sie versichert sind.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary md:text-4xl">GKV</p>
              <h3 className="mt-1 font-semibold text-primary">Gesetzlich versichert</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Mit ärztlicher Verordnung übernimmt Ihre Krankenkasse die Behandlung.
                Ab 18 Jahren fällt die gesetzliche Zuzahlung an: 10 Prozent der Kosten
                plus 10 Euro je Rezept.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary md:text-4xl">PKV</p>
              <h3 className="mt-1 font-semibold text-primary">Privat versichert</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Sie erhalten von uns eine Rechnung und reichen sie bei Ihrer
                Versicherung oder Beihilfe ein. Was erstattet wird, regelt Ihr Tarif.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="text-3xl font-light text-primary md:text-4xl">Selbst</p>
              <h3 className="mt-1 font-semibold text-primary">Selbstzahler</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Auch ohne Rezept können Sie viele Behandlungen direkt bei uns buchen.
                Die Preise nennen wir Ihnen transparent vorab am Telefon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQ */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
              Antworten auf die häufigsten Fragen.
            </h2>
            <p className="mt-4 text-sm text-ink md:text-base">
              Ihre Frage ist nicht dabei? Rufen Sie einfach an - wir klären das kurz
              und unkompliziert: <PhoneLink className="!text-base" />
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* CTA-BENTO */}
      <section className="pb-16 pt-4 md:pb-24">
        <div className="mx-auto w-[96%] max-w-[1360px]">
          <div className="grid gap-5 md:grid-cols-2 md:grid-rows-2 md:gap-6">
            <article className="group relative row-span-2 min-h-[340px] overflow-hidden rounded-2xl bg-primary-dark">
              <Image
                src="/praxis/empfang-tresen.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/15" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <p className="eyebrow mb-2 !text-white/80">Termin anfragen</p>
                <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                  Rezept in der Hand? Dann los.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                  Die 28-Tage-Frist läuft ab Ausstellungsdatum. Melden Sie sich gern
                  noch heute - wir finden zeitnah einen Termin für Sie.
                </p>
                <div className="mt-6">
                  <Link
                    href="/kontakt"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-dark"
                  >
                    Termin anfragen
                  </Link>
                </div>
              </div>
            </article>
            <article className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <p className="eyebrow mb-2 !text-white/80">Leistungen</p>
                <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                  Von KG bis Lymphdrainage.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                  Sechs Leistungsbereiche, jede Zulassung - alles unter einem Dach.
                </p>
                <div className="mt-6">
                  <Link
                    href="/leistungen"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark transition-colors hover:bg-white/90"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </article>
            <article className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-primary-dark">
              <Image
                src="/praxis/sofa-ecke.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/15" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <p className="eyebrow mb-2 !text-white/80">Praxis & Team</p>
                <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">
                  Lernen Sie uns kennen.
                </h2>
                <div className="mt-6">
                  <Link
                    href="/praxis-team"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark transition-colors hover:bg-white/90"
                  >
                    Einblicke ansehen
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </>
  );
}
