import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-light tracking-tight text-primary">Impressum</h1>
      <p className="mt-6">
        kraftspuren Physiotherapie UG (haftungsbeschränkt)
        <br />
        Ahornstraße 18, 14482 Potsdam
        <br />
        Telefon: 015565 931877
        <br />
        E-Mail: [E-MAIL]
      </p>
      <p className="mt-4 text-ink-muted">
        [IMPRESSUM VERVOLLSTÄNDIGEN: Geschäftsführung, Handelsregister, Berufsbezeichnung,
        zuständige Aufsichtsbehörde, Umsatzsteuer-ID]
      </p>
    </section>
  );
}
