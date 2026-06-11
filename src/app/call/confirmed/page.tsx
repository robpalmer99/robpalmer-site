import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Call Confirmed',
  description:
    'Your strategy call with Rob Palmer is booked. Here\'s how to prepare.',
  alternates: {
    canonical: `${SITE_URL}/call/confirmed`,
  },
  robots: {
    index: false,
  },
}

export default function CallConfirmedPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="You're All Set"
        subheadline="Your strategy call is confirmed."
      />
      <Breadcrumbs
        items={[
          { label: 'Book a Call', href: '/call' },
          { label: 'Confirmed' },
        ]}
      />

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <Image
              src="/images/headshots/rob-palmer-clean.png"
              alt="Rob Palmer"
              width={160}
              height={160}
              sizes="160px"
              className="w-40 h-40 rounded-xl object-cover ring-2 ring-gold-400/20 mx-auto mb-8"
            />

            <h2 className="font-heading text-2xl font-bold text-ink-950 mb-4">
              Thanks for Booking
            </h2>
            <p className="text-ink-700 font-body text-lg mb-6">
              I&apos;m looking forward to our conversation. Check your inbox for
              a calendar invite with the call details.
            </p>

            <div className="rounded-xl border border-paper-200 bg-paper-50 p-6 mb-8 text-left">
              <h3 className="font-heading text-lg font-bold text-ink-950 mb-2">
                Want to Hit the Ground Running?
              </h3>
              <p className="text-ink-700 font-body">
                If there&apos;s anything that would help me prepare — your
                current funnel, landing pages, ads, or background on what
                you&apos;re working on — send it over ahead of time at{' '}
                <a
                  href="mailto:rob@robpalmer.com"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-500 transition-colors"
                >
                  rob@robpalmer.com
                </a>
                . The more context I have going in, the more useful our 30
                minutes will be.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold-600 font-heading font-semibold hover:text-gold-500 transition-colors"
            >
              &larr; Back to Home
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
