import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CalendlyEmbed } from '@/components/integrations/CalendlyEmbed'
import { ContactForm } from '@/components/blocks/ContactForm'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book a Call | Contact Rob Palmer',
  description:
    'Book a free strategy call with Rob Palmer. Discuss your direct-response copywriting project and how to increase your conversions and revenue.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Let's Talk About Your Next Campaign"
        subheadline="Book a free strategy call. No pressure, no obligation — just a conversation about how to move the needle."
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
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
                Who This Call Is For
              </h3>
              <div className="space-y-4 text-ink-700 font-body">
                <p>
                  This call is for business owners and marketing directors who
                  need direct-response copy that drives measurable results —
                  not content production or generic copywriting.
                </p>
                <p>
                  If you need a VSL, sales page, email sequence, ad copy, or
                  complete funnel written by a veteran copywriter with $523M+ in
                  tracked results, let&apos;s talk.
                </p>
              </div>
            </FadeIn>

            {/* Right: Calendly */}
            <FadeIn delay={200} className="lg:col-span-3">
              <CalendlyEmbed />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="bg-paper-100" divider>
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3 text-center">
                For All Other Inquiries
              </h2>
              <p className="text-ink-700 font-body text-center mb-10">
                Not ready for a call? No problem. Drop me a message and I&apos;ll get back to you within 24 hours.
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
                  <dt className="font-semibold text-ink-950 inline">Phone: </dt>
                  <dd className="inline">+612958415182</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-950 inline">Email: </dt>
                  <dd className="inline">rob@gofreelance.com</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
