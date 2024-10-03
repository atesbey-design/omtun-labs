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
    icon: "/omtun-nobg.png",
  },
  openGraph: {
    type: 'website',
    url: 'https://omtunlabs.com',
    title: 'Omtun Labs',
    description: 'OMTUN Labs profesyonel geliştiricilerinin çalışma alanı',
    images: [
      {
        url: '/omtun-nobg.png',
        width: 800,
        height: 600,
        alt: 'Omtun Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@OmtunLabs',
    title: 'Omtun Labs',
    description: 'OMTUN Labs profesyonel geliştiricilerinin çalışma alanı',
    images: ['/omtun-nobg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Omtun Labs, yazılım, blockchain, yapay zeka, bulut bilişim, yazılım geliştirme"
        />
        <meta name="theme-color" content="#7C3AED" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omtun Labs" />
        <meta
          property="og:description"
          content="OMTUN Labs profesyonel geliştiricilerinin çalışma alanı"
        />
        <meta property="og:image" content="/omtun-nobg.png" />
        <meta property="og:url" content="https://omtunlabs.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omtun Labs" />
        <meta
          name="twitter:description"
          content="OMTUN Labs profesyonel geliştiricilerinin çalışma alanı"
        />
        <meta name="twitter:image" content="/omtun-nobg.png" />
        <link rel="icon" href="/omtun-nobg.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
