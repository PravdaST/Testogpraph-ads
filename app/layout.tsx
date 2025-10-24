import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TESTOGRAPH Ads - Advertorial Landing Pages',
  description: 'Cold traffic conversion system for TESTOGRAPH product line',
  metadataBase: new URL('https://ads.testograph.eu'),
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://ads.testograph.eu',
    siteName: 'TESTOGRAPH Ads',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={inter.variable}>
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
