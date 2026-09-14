import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/brand/PageHero";
import { CtaButton } from "@/components/brand/CtaButton";

export const metadata: Metadata = {
  title: "Praxis & Team",
  description:
    "Die kraftspuren Physiotherapie in Potsdam: großer Sportraum, jede Kassenzulassung und ein Team, das auf Augenhöhe behandelt.",
  alternates: { canonical: "/praxis-team" },
};

const GALERIE = [
  {
    src: "/praxis/empfang.jpg",
    alt: "Empfang und Wartebereich der kraftspuren Physiotherapie mit großen Fenstern und Sitzecke",
    caption: "Empfang und Wartebereich",
  },
  {
    src: "/praxis/sofa-ecke.jpg",
    alt: "Gemütliche Sitzecke mit zwei Sofas und Couchtisch in der kraftspuren Physiotherapie",
    caption: "Sitzecke",
  },
  {
    src: "/praxis/behandlungsraum-arbeitsplatz.jpg",
    alt: "Behandlungsraum mit Therapieliege, Schreibtisch und Anatomie-Postern",
    caption: "Behandlungsraum",
  },
  {
    src: "/praxis/befundraum.jpg",
    alt: "Befundraum mit Schreibtisch, Stühlen und Anatomie-Postern an der Wand",
    caption: "Befundraum",
  },
  {
    src: "/praxis/sportraum-2.jpg",
    alt: "Sportraum mit Trainingsgeräten, Hanteln und Fahrradergometer",
    caption: "Sportraum",
  },
  {
    src: "/praxis/ruhebereich.jpg",
    alt: "Ruhiger Wartebereich mit Sesseln, Pflanzen und Naturbildern an der Wand",
    caption: "Ruhebereich",
  },
  {
    src: "/praxis/warteecke.jpg",
    alt: "Warteecke mit Sessel und Kunst an der Wand",
    caption: "Warteecke",
  },
  {
    src: "/praxis/wartebereich.jpg",
    alt: "Wartebereich mit Sessel, Stühlen und Pflanzen in der kraftspuren Physiotherapie",
    caption: "Wartebereich",
  },
  {
    src: "/praxis/flur.jpg",
    alt: "Heller Praxisflur mit Behandlungsräumen der kraftspuren Physiotherapie",
    caption: "Praxisflur",
  },
];

export default function PraxisTeam() {
  return (
    <>
      <PageHero
        eyebrow="kraftspuren Physiotherapie"
        title="Praxis & Team"
        text="Kurze Wege, klare Ansprache, Therapie auf Augenhöhe: So arbeiten wir bei kraftspuren. Unsere Praxis in Potsdam hat jede physiotherapeutische Zulassung - und mit dem großen Sportraum genug Platz für aktives Training."
        image="/praxis/sofa-ecke.jpg"
      />
      {/* [TEAM-INFOS EINHOLEN: Namen, Qualifikationen, Fortbildungen, Fotos] */}

      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="eyebrow mb-3">Einblicke</p>
          <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
            So sieht es bei uns aus.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Helle Räume, viel Tageslicht und kurze Wege: Ein erster Eindruck von
            Empfang, Wartebereich und Behandlungsräumen.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALERIE.map((bild) => (
              <figure
                key={bild.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={bild.src}
                  alt={bild.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="sr-only">{bild.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark p-8 md:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
            <div className="relative max-w-xl text-white">
              <p className="eyebrow mb-3 !text-white/80">Unser Team</p>
              <h2 className="text-2xl font-light tracking-tight md:text-3xl">
                Das Team stellt sich bald vor.
              </h2>
              <p className="mt-3 text-white/85">
                Fotos und Vorstellungen unseres Teams folgen in Kürze. Bis dahin
                lernen Sie uns am besten persönlich kennen.
              </p>
              <CtaButton href="/kontakt" className="mt-6">
                Termin anfragen
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
