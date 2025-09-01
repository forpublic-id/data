import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data ForPublic.id | Indonesia's Open Data Infrastructure",
  description:
    "Centralized API gateway and open data platform for Indonesian government datasets. Access unified APIs for health, environment, transparency, statistics, and more.",
  keywords: [
    "open data",
    "api gateway",
    "indonesia",
    "government data",
    "transparency",
    "forpublic",
  ],
  authors: [{ name: "ForPublic.id Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Data ForPublic.id | Indonesia's Open Data Infrastructure",
    description:
      "Centralized API gateway and open data platform for Indonesian government datasets",
    url: "https://data.forpublic.id",
    siteName: "Data ForPublic.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://data.forpublic.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data ForPublic.id - Indonesia's Open Data Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data ForPublic.id | Indonesia's Open Data Infrastructure",
    description:
      "Centralized API gateway and open data platform for Indonesian government datasets",
    images: ["https://data.forpublic.id/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
