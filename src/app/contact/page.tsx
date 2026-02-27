import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
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
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/headshots/rob-palmer-clean.png"
                  alt="Rob Palmer"
                  width={64}
                  height={64}
                  sizes="64px"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-heading text-xl font-bold text-ink-950">
                    Rob Palmer
                  </h2>
                  <p className="text-sm text-paper-400 font-heading">
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
            </div>

            {/* Right: Calendly */}
            <div className="lg:col-span-3">
              <CalendlyEmbed />
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="bg-paper-100">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3 text-center">
              For All Other Inquiries
            </h2>
            <p className="text-ink-700 font-body text-center mb-10">
              Not ready for a call? No problem. Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
