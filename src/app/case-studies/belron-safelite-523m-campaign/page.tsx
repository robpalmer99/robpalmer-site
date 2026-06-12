import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'
import { caseStudies } from '../_data/case-studies'

const cs = caseStudies[0]

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The $523M Secret Weapon Campaign: Belron/Safelite Case Study',
  description: 'How Rob Palmer created a direct-response campaign for Belron/Safelite that generated $523 million in sales over 9 years.',
  image: `${SITE_URL}${cs.heroImage}`,
  datePublished: '2024-01-15',
  dateModified: '2024-01-15',
  author: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Rob Palmer Copywriting',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo-rob-palmer.png`,
    },
  },
  mainEntityOfPage: `${SITE_URL}/case-studies/belron-safelite-523m-campaign`,
}

export const metadata: Metadata = {
  title: 'The $523M Secret Weapon Campaign | Belron/Safelite Case Study',
  description:
    'How Rob Palmer created a direct-response campaign for Belron/Safelite that generated $523 million in sales over 9 years — after 5 previous copywriters had failed.',
  alternates: {
    canonical: `${SITE_URL}/case-studies/belron-safelite-523m-campaign`,
  },
  openGraph: {
    title: 'The $523M Secret Weapon Campaign | Case Study',
    description:
      'How a single direct-response campaign generated $523 million in sales, ran for 9 years, and saved hundreds of lives.',
    type: 'article',
    images: [{ url: `${SITE_URL}${cs.heroImage}`, width: 1200, height: 800 }],
  },
}

export default function BelronCaseStudyPage() {
  return (
    <>
      <JsonLd data={caseStudyJsonLd} />
      <Hero
        variant="page"
        headline="The $523M Secret Weapon"
        subheadline='The bulk of my career <strong>$523M+ tracked-revenue figure</strong> comes from this one 9-year Belron/Safelite campaign. Here is exactly what was written, why it worked, and how it beat five award-winning copywriters who failed before me.'
      />
      <Breadcrumbs
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Belron/Safelite $523M Campaign' },
        ]}
      />

      <Section>
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Hero Image */}
            <FadeIn duration={800}>
              <div className="mb-10 -mx-4 sm:mx-0">
                <Image
                  src={cs.heroImage}
                  alt={cs.heroAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            </FadeIn>

            {/* Key Metrics Bar */}
            <FadeIn delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 rounded-xl bg-ink-950 noise-overlay">
                {cs.metrics.map((metric) => (
                  <div key={metric.label} className="relative z-10 text-center">
                    <CountUp
                      value={metric.value}
                      className="font-heading text-3xl sm:text-4xl font-bold text-gold-400 tracking-tight"
                    />
                    <div className="mt-2 text-xs font-heading uppercase tracking-wider text-paper-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Content */}
            <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                The Challenge
              </h2>
              <p>
                Belron International is the world&apos;s largest vehicle glass repair and
                replacement company, operating in over 35 countries through local subsidiaries.
                In the United States, they are known as Safelite AutoGlass. Internationally,
                brands include Autoglass in the UK and Carglass across Europe.
              </p>
              <p>
                Belron faced a critical business problem: they could not effectively communicate
                their value proposition to insurance companies. Insurance companies prioritise
                cost over quality when selecting auto glass contractors. However, substandard
                windshield replacement poses serious safety risks &mdash; poor adhesives or
                installation shortcuts can cause glass failure during rollover accidents,
                potentially collapsing roofs and killing occupants.
              </p>
              <p>
                Five previous copywriters &mdash; experienced, award-winning professionals
                &mdash; had attempted the brief. Each had been hired and subsequently fired.
                The approaches they tried were logical: emphasise convenience, price
                competitiveness, speed of service, and quality guarantees. All reasonable
                angles. All insufficient. The company was ready to try a fundamentally
                different approach.
              </p>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                The Approach
              </h2>
              <p>
                I took a completely different direction from my predecessors.
                Instead of leading with features and convenience, I dug into the emotional
                core of the decision: safety. Through deep audience research, I discovered
                that the most powerful motivator was not the inconvenience of a cracked
                windshield &mdash; it was the devastating consequences if a windshield
                failed during an accident.
              </p>
              <p>
                The resulting campaign used a powerful metaphor: two skydivers preparing
                for a jump. The first chooses a premium parachute, professionally
                maintained &mdash; he jumps safely and lands securely. The second selects
                a bargain parachute stored unused &mdash; the chute fails, and he
                plummets toward the ground. The headline drove the point home:
                &ldquo;Are You Killing Your Customers?&rdquo;
              </p>
              <p>
                The video was mailed directly to insurance executives with an accompanying
                letter, generating immediate impact and word-of-mouth distribution. Every
                element &mdash; from the opening hook to the call to action &mdash; was
                engineered for conversion using classic direct-response storytelling combined
                with urgency triggers and social proof.
              </p>

              {/* Client Testimonial */}
              <blockquote className="my-10 rounded-xl bg-gold-50 px-6 py-5 sm:px-8 sm:py-6">
                <p className="text-xl font-body italic text-ink-950 leading-relaxed">
                  &ldquo;You are our secret weapon. Keep your diary clear, please!&rdquo;
                </p>
                <footer className="mt-3 text-sm font-heading font-semibold text-paper-600">
                  &mdash; Gary Lubner, CEO, Belron International
                </footer>
              </blockquote>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                The Results
              </h2>
              <p>
                The campaign exceeded every performance target and ran for nine
                consecutive years &mdash; an extraordinary lifespan in direct-response
                marketing, where most campaigns fatigue within months. Over its lifetime,
                the campaign generated $523 million in tracked sales for Belron and its
                subsidiaries worldwide.
              </p>
              <p>
                Beyond the revenue, the campaign contributed to saving hundreds of
                lives by motivating drivers to replace compromised windshields before
                accidents occurred. Major insurance companies worldwide now recommend
                only high-quality auto glass replacement &mdash; a shift directly
                influenced by this campaign.
              </p>
              <p>
                The campaign only ended after nine years when new management changed
                the marketing direction &mdash; not because it had stopped performing.
              </p>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Emotion beats logic.</strong> Research-driven copy that taps
                  into genuine emotional motivators outperforms clever creative every time.
                  Five copywriters failed by leading with logic; the winning campaign led
                  with fear and safety.
                </li>
                <li>
                  <strong>Great campaigns compound.</strong> A well-crafted direct-response
                  campaign can run for years without fatigue if the core message resonates
                  with a permanent human truth. Safety never goes out of style.
                </li>
                <li>
                  <strong>The right copywriter changes everything.</strong> The same brief,
                  the same product, the same market &mdash; yet completely different results.
                  Strategy, not just writing ability, is what separates campaigns that fail
                  from those that generate half a billion dollars.
                </li>
              </ul>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-paper-200">
              <h3 className="font-heading text-lg font-bold text-ink-950 mb-4">
                Related
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog/523m-copywriting-campaign"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Read the full $523M blog post →
                </Link>
                <span className="text-paper-300">|</span>
                <Link
                  href="/services/vsl-copywriter"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  VSL Copywriting Services →
                </Link>
                <span className="text-paper-300">|</span>
                <Link
                  href="/services/sales-funnel-copywriter"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Sales Funnel Copywriting →
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      <CTABanner
        headline="Want results like these for your brand?"
        subtext="Let's discuss your project on a free strategy call."
      />
    </>
  )
}
