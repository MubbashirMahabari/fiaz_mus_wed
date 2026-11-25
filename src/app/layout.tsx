import type { ReactNode } from "react";
import { WEDDING_DATA } from "@/lib/constants";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faizanmuskan.netlify.app"),

  title: WEDDING_DATA.seo.title,
  description: WEDDING_DATA.seo.description,
  keywords: WEDDING_DATA.seo.keywords,
  authors: [{ name: "Faizan & Muskan" }],

  openGraph: {
    title: WEDDING_DATA.seo.title,
    description: WEDDING_DATA.seo.description,
    url: "https://faizanmuskan.netlify.app",
    siteName: "Faizan & Muskan Wedding",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-wedding.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Faizan & Muskan Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: WEDDING_DATA.seo.title,
    description: WEDDING_DATA.seo.description,
    images: ["/images/og-wedding.png"],
  },

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
