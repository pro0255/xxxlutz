import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Jak XXXLutz řeší reklamace — Příběh jedné pohovky",
  description:
    "Koupil jsem pohovku v XXXLutz. Přišla bez polštářů. Reklamace trvá přes 100 dní. Toto je dokumentace mé zkušenosti.",
  openGraph: {
    title: "Jak XXXLutz řeší reklamace",
    description:
      "Příběh reklamace pohovky, která trvá přes 100 dní. Chybějící polštáře a nekonečné čekání.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${geist.variable} antialiased dark`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
