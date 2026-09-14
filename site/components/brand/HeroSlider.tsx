"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  src: string;
  alt: string;
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
};

const SLIDES: Slide[] = [
  {
    src: "/praxis/sportraum.jpg",
    alt: "Großer Sportraum der kraftspuren Physiotherapie mit modernen Trainingsgeräten",
    title: "Schritt für Schritt zurück zu Ihrer Kraft",
    text: "Physiotherapie in Potsdam - von Krankengymnastik über Manuelle Therapie bis Lymphdrainage. Und im großen Sportraum trainieren Sie, bis die Übungen sitzen.",
    ctaHref: "/kontakt",
    ctaLabel: "Termin anfragen",
  },
  {
    src: "/praxis/behandlungsraum-arbeitsplatz.jpg",
    alt: "Behandlungsraum mit Therapieliege der kraftspuren Physiotherapie",
    title: "Jede Zulassung. Jede Kasse.",
    text: "Egal was auf Ihrem Rezept steht: Wir sind für alle physiotherapeutischen Heilmittel zugelassen und rechnen mit allen Krankenkassen ab.",
    ctaHref: "/leistungen",
    ctaLabel: "Leistungen ansehen",
  },
  {
    src: "/praxis/empfang.jpg",
    alt: "Heller Empfangs- und Wartebereich der kraftspuren Physiotherapie",
    title: "Ankommen. Durchatmen. Loslegen.",
    text: "Helle Räume, kurze Wege und ein Team, das auf Augenhöhe behandelt - Ihre Physiotherapie in Potsdam.",
    ctaHref: "/praxis-team",
    ctaLabel: "Praxis kennenlernen",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto w-[96%] overflow-hidden rounded-[20px] bg-primary-dark">
      <div className="relative h-[78vh] min-h-[520px]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="96vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/55 to-primary/25" />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
              <div className="max-w-2xl text-white">
                {i === 0 ? (
                  <h1 className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                  {slide.text}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:right-10">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Folie ${i + 1} anzeigen`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
