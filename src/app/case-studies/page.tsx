import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { SITE_URL } from '@/lib/constants'
import { caseStudies } from './_data/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies | Direct-Response Campaigns That Delivered',
  description:
    'Read detailed case studies showing how Rob Palmer has generated $523M+ in tracked results through direct-response copywriting for Fortune 500 brands and beyond.',
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: 'Case Studies | Direct-Response Campaigns That Delivered',
    description:
      'Read detailed case studies showing how Rob Palmer has generated $523M+ in tracked results through direct-response copywriting for Fortune 500 brands and beyond.',
    url: `${SITE_URL}/case-studies`,
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Case Studies"
        subheadline="Real campaigns. Real results. Real revenue."
      />
      <Breadcrumbs items={[{ label: 'Case Studies' }]} />

      {/* Results Summary */}
      <div className="bg-ink-950 py-10 noise-overlay">
        <Container>
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '$523M+', label: 'Total Tracked Revenue' },
              { stat: 'Fortune 500', label: 'Client Calibre', isText: true },
              { stat: '100s', label: 'Of Successful Projects', isText: true },
              { stat: '40+', label: 'Years of Experience' },
            ].map((item, index) => (
              <FadeIn key={item.label} delay={index * 100}>
                <div>
                  {'isText' in item && item.isText ? (
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-gold-400 tracking-tight">{item.stat}</div>
                  ) : (
                    <CountUp
                      value={item.stat}
                      className="font-heading text-3xl sm:text-4xl font-bold text-gold-400 tracking-tight"
                    />
                  )}
                  <div className="mt-2 text-xs font-heading uppercase tracking-wider text-paper-400">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>

      {/* About the $523M+ number — attribution-honesty breakdown per offer brief 18.B */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                About the $523M+ number
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-5 space-y-5 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  Career-aggregate revenue numbers usually hide a lot. Here is the honest breakdown of mine.
                </p>
                <p>
                  The bulk of the $523M+ figure comes from a{' '}
                  <strong className="text-ink-950">single 9-year Belron/Safelite direct-response campaign</strong>{' '}
                  &mdash; the case study below. Five award-winning copywriters tried that brief before me and failed; the campaign I shipped beat them all and ran continuously until management changed direction. The CEO called me his &ldquo;Secret Weapon.&rdquo;
                </p>
                <p>
                  The rest is separate revenue, separately measured, across the verticals I ship in:
                </p>
                <ul role="list" className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">$40M Gluco 6</strong> &mdash; supplement subscription funnel, end-to-end (cold-traffic VSL + back-end stack).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">$30M Mobile Profits</strong> &mdash; biz-op VSL that became #1 on ClickBank.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">5.7% Monetari Fund</strong> &mdash; opt-in-to-sale on a regulated financial offer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">22% Chatterkick</strong> &mdash; SaaS trial-to-paid lift on the onboarding sequence I wrote.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">340% Abundant</strong> &mdash; info-product TSL ROAS on Facebook cold.</span>
                  </li>
                </ul>
                <p>
                  Plus the pre-Belron Fortune 500 work &mdash; Apple UK, IBM, Microsoft, Citibank, Morgan Stanley &mdash; and a few hundred other engagements that don&apos;t have individual case-study pages.
                </p>
                <p>
                  Skepticism about big career-aggregate numbers is fair. That is exactly why I split mine out instead of hiding behind it.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <li key={cs.slug}>
                <FadeIn delay={index * 100} className="h-full">
                  <CaseStudyCard
                    title={cs.title}
                    slug={cs.slug}
                    result={cs.result}
                    client={cs.client}
                    description={cs.description}
                    heroImage={cs.heroImage}
                    heroAlt={cs.heroAlt}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABanner
        headline="Ready to become the next case study?"
        subtext="Let's discuss how direct-response copywriting can lift your conversion rate."
      />
    </>
  )
}
