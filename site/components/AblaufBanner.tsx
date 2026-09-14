import Image from "next/image";

type Step = { title: string; text: string };

/**
 * Ablauf-Sektion als dunkler Foto-Banner (Stil wie PageHero):
 * trennt die hellen Sektionen davor und danach optisch.
 */
export default function AblaufBanner({
  steps,
  title = "So läuft Ihre Behandlung ab.",
}: {
  steps: Step[];
  title?: string;
}) {
  return (
    <section className="py-8 md:py-12">
      <div className="relative mx-auto w-[96%] overflow-hidden rounded-[20px] bg-primary-dark">
        <Image
          src="/praxis/flur.jpg"
          alt=""
          fill
          sizes="96vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
          <p className="eyebrow mb-3 !text-white/80">Ihr Weg zu uns</p>
          <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          <ol
            className={`mt-8 grid gap-5 sm:grid-cols-2 ${
              steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg font-light text-white">
                  {i + 1}
                </span>
                <h3 className="font-semibold leading-snug text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
