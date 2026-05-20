import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#FAF8F3',
};

export const metadata: Metadata = {
  title: 'Arjun & Priya - Wedding Invitation',
  description:
    'Join us as we celebrate the union of two souls. A luxury modern wedding experience.',
  keywords:
    'wedding, invitation, celebration, love, marriage, premium',
  openGraph: {
    title: 'Arjun & Priya - Wedding Invitation',
    description:
      'Join us for a magical day as we celebrate our love and commitment.',
    type: 'website',
  },
  authors: [{ name: 'Wedding Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FAF8F3" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
