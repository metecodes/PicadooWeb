import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://picadoo.vercel.app"),
  title: "Picadoo — Çocuklar İçin AI Boyama",
  description: "Çocuklar için güvenli, ebeveyn kontrollü ve yaratıcı AI boyama deneyimi.",
  applicationName: "Picadoo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Picadoo",
    images: ["/assets/picadoo_hero_art_1781476538982.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/picadoo_hero_art_1781476538982.png"],
  },
  icons: { icon: "/assets/picadoo-icon.png", apple: "/assets/picadoo-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
