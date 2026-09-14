import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Logo light />
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            Physiotherapie in Potsdam für gesetzlich Versicherte, Privatpatienten und
            Selbstzahler.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Kontakt
          </h2>
          <address className="text-[15px] not-italic leading-relaxed text-white/90">
            kraftspuren Physiotherapie UG
            <br />
            Ahornstraße 18
            <br />
            14482 Potsdam
            <br />
            <a href="tel:+4915565931877" className="mt-2 inline-block font-semibold text-white underline-offset-4 hover:underline">
              015565 931877
            </a>
          </address>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Öffnungszeiten
          </h2>
          <p className="text-[15px] leading-relaxed text-white/90">[ÖFFNUNGSZEITEN]</p>
          <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-white/60">
            Seiten
          </h2>
          <ul className="space-y-1 text-[15px] text-white/90">
            <li><Link href="/leistungen" className="hover:underline">Leistungen</Link></li>
            <li><Link href="/praxis-team" className="hover:underline">Praxis &amp; Team</Link></li>
            <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Unsere Zulassungen
          </h2>
          <p className="text-[15px] leading-relaxed text-white/90">
            Krankengymnastik (KG), Manuelle Therapie (MT), Krankengymnastik am Gerät
            (KG-Gerät), Neurologische Krankengymnastik (KG-ZNS), Manuelle Lymphdrainage
            (MLD), Wärmetherapie und Elektrotherapie. Zugelassen für alle gesetzlichen
            Krankenkassen.
          </p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 md:px-8">
          <p>© {new Date().getFullYear()} kraftspuren Physiotherapie UG (haftungsbeschränkt)</p>
          <p className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
