import Link from "next/link";
import Logo from "@/components/brand/Logo";

/**
 * Layout der SEA-Landingpages: reduzierte Navigation nach sea-landingpage-struktur.md.
 * Header nur Logo + Telefon, Footer nur Impressum/Datenschutz, Sticky Call-Bar mobil.
 */
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo />
          <div className="flex items-center gap-3">
            <a
              href="tel:+4915565931877"
              className="hidden text-lg font-bold text-primary transition-colors hover:text-accent md:inline"
            >
              015565 931877
            </a>
            <a
              href="tel:+4915565931877"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-dark"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </header>

      {/* Platz für die mobile Sticky-Bar am Seitenende */}
      <main className="pb-20 md:pb-0">{children}</main>

      <footer className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-white/70 md:px-8">
          <p>© {new Date().getFullYear()} kraftspuren Physiotherapie UG (haftungsbeschränkt)</p>
          <p className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </p>
        </div>
      </footer>

      {/* Sticky Call-Bar mobil (Grundregel 6); Conversion-Tracking folgt nach Consent-Setup [TRACKING KLAEREN] */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px bg-primary-dark md:hidden">
        <a
          href="tel:+4915565931877"
          className="flex h-14 items-center justify-center bg-accent text-sm font-bold uppercase tracking-[0.1em] text-white"
        >
          Jetzt anrufen
        </a>
        <a
          href="#termin"
          className="flex h-14 items-center justify-center bg-primary text-sm font-bold uppercase tracking-[0.1em] text-white"
        >
          Termin anfragen
        </a>
      </div>
    </>
  );
}
