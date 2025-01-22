import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
  title: "Omtun Labs",
  description: "OMTUN Labs profesyonel geliştiricilerinin çalışma alanı",
  applicationName: "Omtun Labs",
  referrer: "origin-when-cross-origin",
  keywords: ["yazılım", "blockchain", "yapay zeka", "bulut bilişim", "web geliştirme", "mobil uygulama"],
  authors: [{ name: "Omtun Labs Team" }],
  creator: "Omtun Labs Team",
  publisher: "Omtun Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omtunlabs.com"),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/tr",
      "en-US": "/en",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/OmTun.png" },
      { url: "/OmTun.png", sizes: "16x16", type: "image/png" },
      { url: "/OmTun.png", sizes: "32x32", type: "image/png" },
      { url: "/OmTun.png", sizes: "192x192", type: "image/png" },
      { url: "/OmTun.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/OmTun.png",
    apple: [
      { url: "/OmTun.png" },
      { url: "/OmTun.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/OmTun.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: 'website',
    url: 'https://omtunlabs.com',
    title: 'Omtun Labs',
    description: 'OMTUN Labs profesyonel geliştiricilerinin çalışma alanı',
    images: [
      {
        url: '/OmTun.png',
        width: 800,
        height: 600,
        alt: 'Omtun Labs Logo',
      },
    ],
    siteName: 'Omtun Labs',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@OmtunLabs',
    creator: '@OmtunLabs',
    title: 'Omtun Labs',
    description: 'OMTUN Labs profesyonel geliştiricilerinin çalışma alanı',
    images: ['/OmTun.png'],
  },
  verification: {
    google: "ipS7tCbEpnva0A9U1LoyQ2-PgodCeZb2bKj446jmTs8",
    yandex: "yandex-verification-code", 
    yahoo: "yahoo-site-verification-code",
    other: {
      me: ["tunabostancibasi@gmail.com", "omerbagcibasi@gmail.com"],
    },
  },
  category: 'Technology',
  classification: 'Business',
  appleWebApp: {
    capable: true,
    title: "Omtun Labs",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta
          name="keywords"
          content="Omtun Labs, yazılım, blockchain, yapay zeka, bulut bilişim, yazılım geliştirme, web geliştirme, mobil uygulama, teknoloji, dijital dönüşüm, web tasarım, uygulama geliştirme"
        />
        <meta name="theme-color" content="#7C3AED" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#7C3AED" media="(prefers-color-scheme: dark)" />
        <meta name="author" content="Omtun Labs Team" />
        <meta name="copyright" content="Omtun Labs" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Omtun Labs" />
        <meta name="application-name" content="Omtun Labs" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-navbutton-color" content="#7C3AED" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omtun Labs" />
        <meta
          property="og:description"
          content="OMTUN Labs profesyonel geliştiricilerinin çalışma alanı"
        />
        <meta property="og:image" content="https://omtunlabs.com/OmTun.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Omtun Labs Logo" />
        <meta property="og:url" content="https://omtunlabs.com" />
        <meta property="og:site_name" content="Omtun Labs" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="article:publisher" content="https://omtunlabs.com" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OmtunLabs" />
        <meta name="twitter:creator" content="@OmtunLabs" />
        <meta name="twitter:title" content="Omtun Labs" />
        <meta
          name="twitter:description"
          content="OMTUN Labs profesyonel geliştiricilerinin çalışma alanı"
        />
        <meta name="twitter:image" content="https://omtunlabs.com/OmTun.png" />
        <meta name="twitter:image:alt" content="Omtun Labs Logo" />
        <meta name="twitter:domain" content="omtunlabs.com" />
        
        <link rel="canonical" href="https://omtunlabs.com" />
        <link rel="alternate" hrefLang="tr-TR" href="https://omtunlabs.com/tr" />
        <link rel="alternate" hrefLang="en-US" href="https://omtunlabs.com/en" />
        <link rel="icon" href="/OmTun.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/OmTun.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/OmTun.png" />
        <link rel="apple-touch-icon" href="/OmTun.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/OmTun.png" />
        <link rel="mask-icon" href="/OmTun.png" color="#7C3AED" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
        <link rel="me" href="mailto:tunabostancibasi@gmail.com" />
        <link rel="me" href="mailto:omerbagcibasi@gmail.com" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=BURAYA_GOOGLE_ANALYTICS_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'BURAYA_GOOGLE_ANALYTICS_ID');
            `,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OMTUN Labs",
              "url": "https://omtunlabs.com",
              "logo": "https://omtunlabs.com/omtun-nobg.png",
              "description": "Modern teknolojiler ve yenilikçi çözümlerle işletmenizi geleceğe taşıyoruz.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İzmir",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@omtunlabs.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://github.com/OmTun-Labs",
                "https://linkedin.com/company/omtun-labs"
              ]
            })
          }}
        />
        <meta 
          name="google-site-verification" 
          content="ipS7tCbEpnva0A9U1LoyQ2-PgodCeZb2bKj446jmTs8" 
        />
      </head>
      <body >
        {children}
        <Analytics />
      </body>
    </html>
  );
}