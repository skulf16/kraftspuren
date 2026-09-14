const GOOGLE_REVIEWS_URL = "https://share.google/4oBxYC4GiVkNZoVnJ";

const REVIEWS = [
  {
    name: "Iwona",
    zeit: "vor 3 Monaten",
    text: "Wer eine moderne, saubere und freundliche Physiotherapie-Praxis sucht, ist hier genau richtig. Die Praxis ist neu und geschmackvoll eingerichtet.",
  },
  {
    name: "Jannick Greve",
    zeit: "vor 7 Monaten",
    text: "Sehr schöner Trainingsraum mit modernen Geräten. Generell schöne, geräumige Praxis und ein sehr freundliches, kompetentes Personal.",
  },
  {
    name: "Henry Kiefer",
    zeit: "vor 7 Monaten",
    text: "Liebevoll gestaltete Physiotherapie-Praxis. Freundliches Personal, habe mich gut aufgehoben gefühlt.",
  },
];

function Stars({ className }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className ?? ""}`} aria-label="5 von 5 Sternen">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#fbbc04]" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Google-Rezensionen</p>
            <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
              Das sagen unsere Patienten.
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-ink md:text-base">
              <span className="text-2xl font-light text-primary">5,0</span>
              <Stars />
              <span className="text-ink-muted">auf Google · 24 Rezensionen</span>
            </p>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary px-7 text-sm font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Alle Rezensionen lesen
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl bg-white p-7">
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
                &bdquo;{r.text}&ldquo;
              </blockquote>
              <figcaption className="mt-auto pt-5 text-sm">
                <span className="font-semibold text-primary">{r.name}</span>
                <span className="text-ink-muted"> · {r.zeit} · Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
