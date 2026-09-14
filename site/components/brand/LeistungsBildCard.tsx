import Image from "next/image";
import Link from "next/link";

type LeistungsBildCardProps = {
  title: string;
  klartext: string;
  href: string;
  img: string;
};

/**
 * Leistungs-Karte mit Foto-Hintergrund und Verlaufs-Overlay (densante-Stil).
 */
export default function LeistungsBildCard({ title, klartext, href, img }: LeistungsBildCardProps) {
  return (
    <div className="group relative flex min-h-[230px] overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_22px_48px_-16px_rgba(37,73,92,0.4)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={img}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-primary-dark/20" />
      </div>
      <Link href={href} className="absolute inset-0 z-10" aria-label={`${title}: mehr erfahren`} />
      <div className="pointer-events-none relative z-20 flex max-w-[70%] flex-col p-7">
        <h3 className="text-base font-bold uppercase tracking-[0.08em] text-white md:text-lg">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{klartext}</p>
        <div className="mt-auto pt-6">
          <span className="inline-flex h-9 items-center justify-center rounded-full bg-white/15 px-5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors group-hover:bg-accent">
            Mehr erfahren
          </span>
        </div>
      </div>
    </div>
  );
}
