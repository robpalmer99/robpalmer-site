import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CalendlyEmbed } from '@/components/integrations/CalendlyEmbed'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call',
  description:
    'Book a free 30-minute strategy call with Rob Palmer. Walk away with a clear picture of what\'s working, what\'s not, and what to do next.',
  alternates: {
    canonical: `${SITE_URL}/call`,
  },
  openGraph: {
    title: 'Book a Free Strategy Call with Rob Palmer',
    description:
      'Book a free 30-minute strategy call. Walk away with a clear picture of what\'s working, what\'s not, and what to do next.',
    url: `${SITE_URL}/call`,
  },
}

export default function CallPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Book Your Free Strategy Call"
        subheadline="30 minutes. Zero obligation. Walk away with a clear picture of what's working, what's not, and what to do next."
      />
      <Breadcrumbs items={[{ label: 'Book a Call' }]} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: What we'll cover */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/headshots/rob-palmer-clean.png"
                  alt="Rob Palmer"
                  width={64}
                  height={64}
                  sizes="64px"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-gold-400/20"
                />
                <div>
                  <h2 className="font-heading text-xl font-bold text-ink-950">
                    Rob Palmer
                  </h2>
                  <p className="text-sm text-paper-600 font-heading">
                    Direct-Response Copywriter
                  </p>
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-ink-950 mb-4">
                Here&apos;s What We&apos;ll Cover
              </h3>
              <ul className="space-y-4 text-ink-700 font-body">
                <li>
                  <strong className="text-ink-950">Your current funnel</strong>
                  {' — '}
                  where traffic is leaking and why conversions stall.
                </li>
                <li>
                  <strong className="text-ink-950">Your biggest opportunity</strong>
                  {' — '}
                  the single change most likely to move revenue.
                </li>
                <li>
                  <strong className="text-ink-950">A clear next step</strong>
                  {' — '}
                  whether that&apos;s working together or something you can action yourself.
                </li>
              </ul>
              <p className="mt-6 text-ink-700 font-body">
                No pitch deck. No pressure. Just a straight conversation between
                you and a copywriter with $523M+ in tracked results.
              </p>
              <div className="mt-8 pt-6 border-t border-paper-200">
                <h3 className="font-heading text-lg font-bold text-ink-950 mb-4">
                  Before You Book
                </h3>
                <ul className="space-y-3 text-ink-700 font-body">
                  <li>
                    <strong className="text-ink-950">Capacity.</strong>{' '}
                    I take a small number of new engagements each quarter.
                    It&apos;s how the work stays good.
                  </li>
                  <li>
                    <strong className="text-ink-950">Timeline.</strong>{' '}
                    Most kickoffs happen within two weeks of a strategy call.
                  </li>
                  <li>
                    <strong className="text-ink-950">Fit.</strong>{' '}
                    Engagements typically start at $10K. If yours is below,
                    I&apos;ll refer you to a writer in my network &mdash; no
                    finder&apos;s fee, just an honest match.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Right: Calendly */}
            <FadeIn delay={200} className="lg:col-span-3">
              <CalendlyEmbed />
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
