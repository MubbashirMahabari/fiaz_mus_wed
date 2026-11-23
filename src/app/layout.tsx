import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WEDDING_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://faizanwed.com"),
  title: WEDDING_DATA.seo.title,
  description: WEDDING_DATA.seo.description,
  keywords: WEDDING_DATA.seo.keywords,
  authors: [{ name: "Faizan & Muskan" }],
  openGraph: {
    title: WEDDING_DATA.seo.title,
    description: WEDDING_DATA.seo.description,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/wedding-og-preview.svg",
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
    images: ["/images/wedding-og-preview.svg"],
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

export const viewport: Viewport = {
  themeColor: "#641C32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FFF8EB] text-[#3B2525] selection:bg-[#641C32] selection:text-[#E7D4A4] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
