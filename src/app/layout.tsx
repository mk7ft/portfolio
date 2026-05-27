import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Kamil - GTM & Growth",
  description:
    "Muhammad Kamil runs growth and product at venture-backed startups. GTM at DoubleSpeed.ai. Founder of JRVS, SPRK, and Aster. Based in Tampa, FL.",
  keywords: [
    "Muhammad Kamil",
    "MK7",
    "GTM",
    "growth",
    "startup",
    "DoubleSpeed",
    "JRVS",
    "SPRK",
    "Aster",
    "Tampa",
    "product",
    "operator",
  ],
  authors: [{ name: "Muhammad Kamil", url: "https://mk7ft.com" }],
  creator: "Muhammad Kamil",
  metadataBase: new URL("https://mk7ft.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Kamil - GTM & Growth",
    description:
      "GTM at DoubleSpeed.ai. Founder of JRVS, SPRK, and Aster. I run growth and product at venture-backed startups.",
    url: "https://mk7ft.com",
    siteName: "Muhammad Kamil",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 853,
        alt: "Muhammad Kamil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kamil - GTM & Growth",
    description:
      "GTM at DoubleSpeed.ai. Founder of JRVS, SPRK, and Aster. I run growth and product at venture-backed startups.",
    creator: "@mk7ft",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="68048e4c-e2a5-4ba2-a0fc-0aa615793434"
        />
        {children}
        <VisualEditsMessenger />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
