import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magikid.online"),
  title: "Magikid — Studio de production de contes pour enfants, en marque blanche",
  description:
    "Magikid produit pour vous des contes animés pour enfants — illustrés, narrés, montés et publiés automatiquement, à votre marque et dans vos langues. Un studio de production jeunesse pour ONG, éditeurs et edtech.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/magikid_1024x1024.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/magikid_1024x1024.png",
  },
  openGraph: {
    type: "website",
    title: "Magikid — Studio de production jeunesse en marque blanche",
    description:
      "Des contes pour enfants finis et publiés chaque jour, à votre marque et dans vos langues. Pour ONG, éditeurs jeunesse et edtech.",
    images: ["/magikid_1024x1024.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
