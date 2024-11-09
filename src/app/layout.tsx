import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Omtun Labs",
  description: "OMTUN Labs profesyonel geliştiricilerinin çalışma alanı",
  icons: {
    icon: "/OmTun.png",
  },
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
    title: 'Omtun Labs',
    description: 'OMTUN Labs profesyonel geliştiricilerinin çalışma alanı',
    images: ['/OmTun.png'],
    creator: '@OmtunLabs',
  },
  alternates: {
    canonical: 'https://omtunlabs.com',
  },
  authors: [{ name: 'Omtun Labs Team' }],
  category: 'Technology',
  keywords: ['yazılım', 'blockchain', 'yapay zeka', 'bulut bilişim', 'web geliştirme', 'mobil uygulama'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Omtun Labs, yazılım, blockchain, yapay zeka, bulut bilişim, yazılım geliştirme, web geliştirme, mobil uygulama"
        />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="author" content="Omtun Labs Team" />
        <meta name="copyright" content="Omtun Labs" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
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
        
        <link rel="canonical" href="https://omtunlabs.com" />
        <link rel="icon" href="/OmTun.png" />
        <link rel="apple-touch-icon" href="/OmTun.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
