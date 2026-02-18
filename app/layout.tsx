import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/src/config/brand";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brandConfig.name} - ${brandConfig.tagline}`,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.tagline,
  keywords: ["Oxford Manor College", "Private School", "Nigeria", "Cambridge IGCSE", "A-Levels", "Education"],
  authors: [{ name: brandConfig.name }],
  icons: {
    icon: brandConfig.logo.jpeg,
    apple: brandConfig.logo.jpeg,
    shortcut: brandConfig.logo.jpeg,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://oxfordmanorcollege.edu.ng",
    siteName: brandConfig.name,
    title: brandConfig.name,
    description: brandConfig.tagline,
    images: [
      {
        url: brandConfig.logo.jpeg,
        width: 180,
        height: 54,
        alt: `${brandConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.name,
    description: brandConfig.tagline,
    images: [brandConfig.logo.jpeg],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
