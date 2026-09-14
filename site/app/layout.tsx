import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kraftspuren.com"),
  title: {
    default: "Physiotherapie Potsdam | kraftspuren Physiotherapie",
    template: "%s | kraftspuren Physiotherapie Potsdam",
  },
  description:
    "Physiotherapie in Potsdam: Krankengymnastik, Manuelle Therapie, KG-Gerät, KG-ZNS und Lymphdrainage. Für gesetzlich Versicherte, Privatpatienten und Selbstzahler.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "kraftspuren Physiotherapie",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
