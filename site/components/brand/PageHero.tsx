import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
};

/**
 * Seiten-Hero der Unterseiten: dunkle Foto-Sektion im Stil des Startseiten-Sliders.
 */
export default function PageHero({ eyebrow, title, text, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative mx-auto w-[96%] overflow-hidden rounded-[20px] bg-primary-dark">
      <div className="relative min-h-[380px] md:min-h-[440px]">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="96vw"
          className="object-cover"
          aria-hidden={imageAlt ? undefined : true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-primary/25" />
        <div className="relative z-10 mx-auto flex min-h-[380px] max-w-7xl items-center px-6 py-14 md:min-h-[440px] md:px-10">
          <div className="max-w-2xl text-white">
            <p className="eyebrow mb-3 !text-white/80">{eyebrow}</p>
            <h1 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>
            {text && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {text}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
