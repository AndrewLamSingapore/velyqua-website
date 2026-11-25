import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Serif, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'VELYQUA — Intelligence for Living Water',
    template: '%s · VELYQUA',
  },
  description:
    'Observe subtle change. VELYQUA turns your water tests, observations and care history into one calm, private picture of your aquarium.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'VELYQUA — Intelligence for Living Water',
    description:
      'Observe subtle change. VELYQUA turns water tests, observations and care history into one calm, private picture of your aquarium.',
    images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: 'VELYQUA — Intelligence for living water' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELYQUA — Intelligence for Living Water',
    description: 'Observe subtle change. Intelligence for living water.',
    images: [`${site.url}/og.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-body">
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: `${site.name} · ${site.localised}`,
              alternateName: site.tagline,
              url: site.url,
              description: 'Intelligence for living water. Observe subtle change and support better care decisions.',
            }),
          }}
        />
      </body>
    </html>
  );
}
