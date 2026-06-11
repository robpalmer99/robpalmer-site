import type { Metadata } from 'next'
import { Fraunces, Lora } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
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
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630, alt: 'Rob Palmer - Direct-Response Copywriter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
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
    'Direct-response copywriter with 40+ years of experience and $523M+ in tracked client results, including campaigns for Apple, IBM, Microsoft, and Belron/Safelite. Specializes in VSLs, TSLs, email sequences, and sales funnels. Pioneer of blogging (1993) and AI-assisted copywriting.',
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
  award: [
    '$523M+ tracked revenue across direct-response campaigns',
    '9-year continuously-tested direct-mail control for Belron/Safelite',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Rob Palmer Copywriting',
    url: SITE_URL,
  },
  email: 'rob@robpalmer.com',
  image: `${SITE_URL}/images/headshots/rob-palmer-clean.png`,
  sameAs: [
    'https://www.linkedin.com/in/robpalmer3/',
    'https://github.com/robpalmer99',
    'https://x.com/RobPalmer99',
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rob Palmer Copywriting',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-rob-palmer.png`,
  founder: {
    '@type': 'Person',
    name: 'Rob Palmer',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'rob@robpalmer.com',
    contactType: 'sales',
  },
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
    <html lang="en" className={`${fraunces.variable} ${lora.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ND4QM9PG6P"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-ND4QM9PG6P');`}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-400 focus:text-ink-950 focus:font-heading focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
