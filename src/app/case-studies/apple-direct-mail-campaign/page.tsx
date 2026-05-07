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

const cs = caseStudies[1]

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apple UK Direct Mail Campaign | Case Study',
  description: 'How Rob Palmer created a direct mail campaign for Apple Computer UK that was so successful it overwhelmed demand and had to be shut down.',
  image: `${SITE_URL}${cs.heroImage}`,
  datePublished: '2024-01-10',
  author: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },
  publisher: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/case-studies/apple-direct-mail-campaign`,
}

export const metadata: Metadata = {
  title: 'Apple UK Direct Mail Campaign | Case Study',
  description:
    'How Rob Palmer created a direct mail campaign for Apple Computer UK that was so successful it overwhelmed demand and caused a dealer revolt — proving the power of A/B tested direct-response copy.',
  alternates: {
    canonical: `${SITE_URL}/case-studies/apple-direct-mail-campaign`,
  },
  openGraph: {
    title: 'The Apple UK Direct Mail Campaign | Case Study',
    description:
      'A direct mail campaign for Apple UK that was so successful it had to be shut down.',
    type: 'article',
    images: [{ url: `${SITE_URL}${cs.heroImage}`, width: 1200, height: 800 }],
  },
}

export default function AppleCaseStudyPage() {
  return (
    <>
      <JsonLd data={caseStudyJsonLd} />
      <Hero
        variant="page"
        headline="The Apple UK Direct Mail Campaign"
        subheadline='Apple UK hired me as their sole copywriter to bypass the dealer network and sell direct. <strong>Three offers tested before launch &mdash; one tepid, one marginal, one off the charts.</strong> The winning offer ran so hard it cannibalised dealer revenue and was eventually shut down by Apple&apos;s own dealer-network pressure. Here is exactly what was tested, why the winner worked, and what this campaign proves about A/B testing in direct response.'
      />
      <Breadcrumbs
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Apple UK Campaign' },
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
                In the 1980s, Apple Computer UK&apos;s Managing Director wanted to
                bypass the traditional dealer network and sell directly to consumers.
                It was a bold move &mdash; at the time, computers were sold almost
                exclusively through physical retail channels. Apple needed a direct
                mail campaign that would convince business decision-makers, educators,
                and consumers to buy directly.
              </p>
              <p>
                I was brought in as the sole copywriter. Originally expected
                to supervise junior writers, I ultimately wrote the entire project
                myself &mdash; from the Managing Director&apos;s welcome letter
                to the customer support materials and three separate market-targeted
                packages for business, education, and consumer segments.
              </p>

              {/* What this campaign proves — positioning anchor (no client testimonial in data) */}
              <div className="my-10 p-6 rounded-xl bg-gold-50 border border-gold-200">
                <h3 className="font-heading text-lg font-bold text-ink-950 mb-3">
                  What this campaign proves
                </h3>
                <p className="text-base text-ink-700 font-body leading-relaxed">
                  Apple UK is the campaign in my portfolio that proves three
                  things at once: direct response works for global tech brands,
                  not just niche offers; A/B testing is non-negotiable (the
                  launch-ready offer would have lost money); and DR copy can
                  succeed so completely it overwhelms its own delivery
                  infrastructure. The Belron/Safelite case study proves the
                  same lessons at $523M scale. Apple UK proves them earlier,
                  in a Fortune 500 context.
                </p>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                The Approach
              </h2>
              <p>
                I insisted on rigorous A/B testing before the main launch.
                Three different offers were tested through initial mailings sent to
                carefully segmented groups just before Christmas, with the main
                campaign launch planned for January.
              </p>
              <p>
                The results of the three-way test were stark:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Offer #1:</strong> Got a tepid response &mdash; too low
                  for the offer to be profitable.
                </li>
                <li>
                  <strong>Offer #2:</strong> Performed better, with a small profit
                  possible.
                </li>
                <li>
                  <strong>Offer #3:</strong> The response rate, in my own words,
                  was &ldquo;just off the charts.&rdquo;
                </li>
              </ul>
              <p>
                The winning offer featured a case study approach, telling the story
                of a fictional graphic designer using Apple products to transform
                his business. At a time when most prospects were still uncertain
                about computers&apos; practical value, this narrative approach
                resonated powerfully &mdash; showing rather than telling what an
                Apple could do.
              </p>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                The Results
              </h2>
              <p>
                Orders arrived &ldquo;thick and fast&rdquo; from the test mailings
                alone. When the winning offer was rolled out in the main campaign,
                demand was so overwhelming that inventory management became critical.
                Products had to be air-freighted into Europe to meet the volume.
              </p>
              <p>
                The campaign expanded to three targeted packages across business,
                education, and consumer markets &mdash; and every segment performed.
              </p>

              {/* "Too Successful" callout */}
              <div className="my-10 p-6 rounded-xl bg-gold-50 border border-gold-200">
                <h3 className="font-heading text-lg font-bold text-ink-950 mb-3">
                  The Campaign That Was &ldquo;Too Successful&rdquo;
                </h3>
                <p className="text-base text-ink-700 font-body leading-relaxed">
                  The direct sales generated such massive demand that Apple dealers
                  faced empty stores as their market was cannibalised. Despite
                  Apple&apos;s assurances that direct customers would visit dealers
                  for accessories, the opposite occurred. Dealer profitability
                  collapsed, sparking heated meetings that nearly became physical
                  confrontations, legal threats, and ultimately the campaign&apos;s
                  cancellation. The campaign was not stopped because it failed
                  &mdash; it was stopped because it worked too well.
                </p>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>A/B testing is the price of entry.</strong> Without it,
                  the launch-ready offer would have produced lukewarm sales and
                  Apple would have written the campaign off as a failure. The
                  tested offer enabled everything that followed. Forty years
                  later, this is still the cheapest insurance in direct response.
                </li>
                <li>
                  <strong>Story beats spec at every awareness level.</strong> In
                  a market where prospects did not yet understand the product,
                  narrative outperformed feature-led copy by orders of magnitude.
                  The same pattern holds in 2026 &mdash; whether you are selling
                  computers, supplements, or SaaS, the story angle still beats
                  the spec sheet.
                </li>
                <li>
                  <strong>Sometimes DR works too well.</strong> A rare problem in
                  marketing, but a useful proof point. Research-driven, properly
                  tested direct-response copy can succeed at a scale that breaks
                  the rest of the business. Belron proves the same pattern at
                  $523M. Apple UK proves it earlier, against the steepest
                  expectations of any Fortune 500 brief.
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
                  href="/case-studies/belron-safelite-523m-campaign"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  The $523M Belron Campaign →
                </Link>
                <span className="text-paper-300">|</span>
                <Link
                  href="/blog/triple-brain-marketing"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Triple Brain Marketing →
                </Link>
                <span className="text-paper-300">|</span>
                <Link
                  href="/services/sales-letter-copywriter"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Sales Letter Copywriting →
                </Link>
                <span className="text-paper-300">|</span>
                <Link
                  href="/blog/direct-mail-copywriting"
                  className="text-sm font-heading font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Direct Mail Copywriting Guide →
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      <CTABanner
        headline="Want a campaign this effective for your brand?"
        subtext="Let's discuss how research-driven direct-response copy can move your numbers."
      />
    </>
  )
}
