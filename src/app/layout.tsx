import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Rob Palmer',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Rob Palmer - Direct-Response Copywriter',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rob Palmer',
  jobTitle: 'Direct-Response Copywriter',
  description:
    'Veteran direct-response copywriter specializing in VSLs, TSLs, email sequences, and sales funnels. Pioneer of blogging (1993) and AI-assisted copywriting.',
  url: SITE_URL,
  knowsAbout: [
    'Direct response copywriting',
    'Video sales letters (VSLs)',
    'Text sales letters (TSLs)',
    'Sales funnels',
    'Email marketing sequences',
    'AI-assisted copywriting',
    'ClickBank marketing',
    'Conversion rate optimization',
    'Landing page copywriting',
    'Ad copywriting',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Direct-Response Copywriter',
    occupationLocation: {
      '@type': 'Country',
      name: 'United States',
    },
  },
  email: 'rob@robpalmer.com',
  telephone: '+14158549589',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rob Palmer - Direct-Response Copywriter',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: 'Rob Palmer',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
