import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/blocks/ContactForm'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — General Inquiries',
  description:
    'Contact Rob Palmer for general inquiries — or book a free strategy call to discuss your direct-response copywriting project.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Get in Touch"
        subheadline="General inquiries, partnerships, press — anything that isn't a project brief. If you want to talk about your funnel, the fastest route is a strategy call."
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Booking route — one click to the calendar */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-2xl mx-auto rounded-xl border border-gold-200 bg-gold-50 p-8 sm:p-10 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3">
                Here to talk about your copy?
              </h2>
              <p className="text-ink-700 font-body mb-6">
                Book your free strategy call &mdash; 30 minutes, zero
                obligation. You&apos;ll walk away with a clear picture of
                what&apos;s working, what&apos;s not, and what to do next.
              </p>
              <Button href="/call" size="lg">
                Book a Strategy Call
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Form — the page's primary action */}
      <Section className="bg-paper-100" divider>
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3 text-center">
                Send a Message
              </h2>
              <p className="text-ink-700 font-body text-center mb-10">
                Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Business Verification */}
      <Section divider>
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <Image
                src="/images/headshots/rob-palmer-clean.png"
                alt="Robert Palmer"
                width={120}
                height={120}
                sizes="120px"
                className="w-30 h-30 rounded-full object-cover ring-2 ring-gold-400/20 mx-auto mb-6"
              />
              <h2 className="font-heading text-2xl font-bold text-ink-950 mb-4">
                Business Verification
              </h2>
              <dl className="space-y-2 text-ink-700 font-body text-lg">
                <div>
                  <dt className="font-semibold text-ink-950 inline">Name: </dt>
                  <dd className="inline">Robert Palmer</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-950 inline">Email: </dt>
                  <dd className="inline">{CONTACT_EMAIL}</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
