import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-light tracking-tight text-primary">Datenschutzerklärung</h1>
      <p className="mt-6 text-ink-muted">
        [DATENSCHUTZERKLÄRUNG EINFÜGEN: DSGVO-konforme Erklärung, z. B. über
        Datenschutz-Generator oder Kanzlei erstellen lassen]
      </p>
    </section>
  );
}
