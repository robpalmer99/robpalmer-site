import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CopywritingRatesCalculator } from '@/components/tools/CopywritingRatesCalculator'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Copywriting Rates Calculator — How Much Should You Charge in 2026?',
  description:
    'Calculate what to charge for copywriting projects. Get rate estimates by experience level, project type, niche, and pricing model — built by a copywriter with $523M+ in results.',
  alternates: {
    canonical: `${SITE_URL}/tools/copywriting-rates-calculator`,
  },
  openGraph: {
    title: 'Copywriting Rates Calculator — How Much Should You Charge in 2026?',
    description:
      'Calculate what to charge for copywriting projects based on experience, project type, niche, and pricing model.',
    url: `${SITE_URL}/tools/copywriting-rates-calculator`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Copywriting Rates Calculator',
    description:
      'Find out what to charge for sales pages, VSLs, emails, landing pages, and more. Free tool from a $523M+ copywriter.',
  },
}

const faqData = [
  {
    question: 'How much should a beginner copywriter charge?',
    answer:
      'Beginner copywriters (0-2 years experience) typically charge $25-75 per hour or $500-2,500 per project for standard deliverables like landing pages and email sequences. The key is to build a portfolio of results-driven samples quickly. Discounted rates are fine early on — but always track and document results so you can justify rate increases as you gain experience.',
  },
  {
    question: 'How much do freelance copywriters make per year?',
    answer:
      'Freelance copywriter income varies enormously by experience and specialization. Beginners typically earn $30,000-50,000, intermediates $60,000-120,000, advanced copywriters $120,000-250,000, and expert direct-response copywriters $250,000-500,000+. Top performers who negotiate royalty deals can exceed $1 million annually. Niche specialization and tracked results are the two biggest factors in earning potential.',
  },
  {
    question: 'Should copywriters charge hourly or per project?',
    answer:
      'Most experienced copywriters recommend per-project pricing because it rewards expertise and speed rather than hours worked. Hourly pricing penalizes efficiency — as you get faster, you earn less per project. Per-project pricing also gives clients cost predictability, which makes closing deals easier. The main exception is consulting work, where hourly billing is standard.',
  },
  {
    question: 'What is the average copywriter hourly rate?',
    answer:
      'Average copywriter hourly rates in 2026 range from $50-125 for intermediate writers, $150-400 for advanced specialists, and $300-800+ for expert direct-response copywriters. Rates vary significantly by niche — financial and health copywriters command 30-40% premiums due to compliance complexity and specialized knowledge requirements.',
  },
  {
    question: 'How much should I charge for a sales page?',
    answer:
      'Sales page rates range from $750-5,000 for beginners/intermediates, $2,500-16,000 for advanced copywriters, and $5,000-25,000+ for expert direct-response specialists. The wide range reflects differences in page length, complexity, research requirements, and the copywriter\'s track record of results. A VSL sales page with proven conversion data commands significantly more than a first draft.',
  },
  {
    question: 'How much does a VSL script cost?',
    answer:
      'VSL (Video Sales Letter) script pricing ranges from $1,000-5,000 for intermediate writers to $8,000-37,500+ for expert direct-response copywriters. VSLs command premium rates because they require not just persuasive writing but also pacing, visual direction, and narrative arc skills. Many top VSL copywriters also negotiate royalty deals (1-5% of net revenue) on top of flat fees.',
  },
  {
    question: 'Do copywriting rates vary by industry?',
    answer:
      'Yes, significantly. Financial services copywriters charge 30-40% more than general-market writers due to SEC/FINRA compliance requirements. Health and supplement copywriters charge 25-35% more due to FTC/FDA regulations. SaaS copywriters charge 20-30% more because of technical complexity and high customer lifetime values. These premiums reflect specialized knowledge that most copywriters lack.',
  },
  {
    question: 'How do I raise my copywriting rates?',
    answer:
      'The fastest way to raise rates is to specialize and document results. Track every conversion rate, revenue figure, and ROI metric your copy generates. Then raise rates 15-25% for new clients while grandfathering existing ones. Client testimonials with specific numbers ("Rob\'s copy increased our conversion rate by 340%") justify premium pricing far more effectively than years of experience alone.',
  },
  {
    question: 'What is a copywriting retainer?',
    answer:
      'A copywriting retainer is a monthly agreement where a client pays a fixed fee for ongoing work. Typical retainers range from $2,500-8,000/month for intermediate writers to $10,000-40,000+/month for experts. Retainers provide predictable income for the copywriter and priority access for the client. The key is to define specific deliverables (e.g., "8 emails + 2 landing pages per month") rather than offering unlimited time.',
  },
  {
    question: 'Is this rate calculator accurate?',
    answer:
      'This calculator provides market-based estimates informed by industry surveys, freelancer communities, and 40+ years of direct-response copywriting experience. Actual rates vary based on factors the calculator cannot measure — your specific results portfolio, client relationships, market positioning, and negotiation skills. Use these estimates as a starting point, not a ceiling. If your copy consistently generates strong ROI, you should charge at the high end or above.',
  },
]

export default function CopywritingRatesCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Copywriting Rates Calculator',
          description: metadata.description,
          url: `${SITE_URL}/tools/copywriting-rates-calculator`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          author: {
            '@type': 'Person',
            name: 'Rob Palmer',
            url: SITE_URL,
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools/headline-analyzer' },
          { label: 'Copywriting Rates Calculator' },
        ]}
      />

      {/* Hero */}
      <section className="bg-ink-950 text-white noise-overlay relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,183,49,0.08),transparent_50%)]" />
        <Container className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-20 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Copywriting Rates Calculator
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-body text-paper-300 leading-relaxed">
              Find out what to charge for your next project. Rates based on experience level,
              project type, industry niche, and pricing model — informed by{' '}
              <span className="text-gold-400 font-semibold">40+ years</span> of direct-response copywriting.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Calculator */}
      <Section>
        <Container>
          <FadeIn>
            <CopywritingRatesCalculator />
          </FadeIn>
        </Container>
      </Section>

      {/* Context Section */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 text-center">
              What Determines Copywriting Rates?
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Experience & Track Record',
                desc: 'Copywriters with documented results — specific conversion rates, revenue figures, and client testimonials — command significantly higher rates than those without. The gap between a beginner and expert is typically 3-5x for the same deliverable.',
              },
              {
                title: 'Niche Specialization',
                desc: 'Specialists earn 25-50% more than generalists. Financial, health, and SaaS copywriters charge premiums because their work requires regulatory knowledge, technical understanding, and industry-specific persuasion frameworks.',
              },
              {
                title: 'Project Complexity',
                desc: 'A complete sales funnel with VSL, upsells, and email sequence costs far more than a single landing page — but also delivers far more value. Complex projects require deeper research, more strategic thinking, and longer timelines.',
              },
              {
                title: 'Revenue Impact',
                desc: 'Copy that directly drives revenue (sales pages, VSLs, funnels) commands higher rates than copy that indirectly supports sales (blog posts, social media). The closer your copy is to the transaction, the more it is worth.',
              },
              {
                title: 'Market Demand',
                desc: 'Direct-response copywriters who can demonstrate measurable ROI are in constant demand. The supply of copywriters who can write words is vast. The supply who can write copy that converts is small. Position yourself in the second category.',
              },
              {
                title: 'Pricing Model',
                desc: 'Per-project pricing rewards speed and expertise. Hourly pricing protects against scope creep but penalizes efficiency. Retainers provide stability. Royalty arrangements align incentives. Choose the model that rewards your strengths.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5 transition-all h-full">
                  <h3 className="font-heading text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm font-body text-paper-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* SEO Content */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900">
                How to Set Your Copywriting Rates: Advice From 40+ Years in Direct Response
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mt-8 space-y-6 font-body text-paper-800 leading-relaxed">
                <p>
                  The single biggest mistake new copywriters make is pricing based on time rather than value.
                  A{' '}
                  <Link href="/blog/how-to-write-a-sales-page" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    sales page
                  </Link>{' '}
                  that takes an expert two days to write but generates $500,000 in revenue is worth far more
                  than the hours suggest. Price your copy based on the outcome it produces, not the time it
                  takes to produce.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Track everything</h3>
                <p>
                  From your first paying project, document results. Conversion rates, revenue generated, cost
                  per acquisition improvements, email open rates — every metric your clients share.{' '}
                  <Link href="/blog/copywriter-salary" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    Copywriter earnings
                  </Link>{' '}
                  increase fastest for writers who can point to specific numbers. &ldquo;I wrote a VSL that
                  converted at 4.2% on cold traffic&rdquo; justifies a premium. &ldquo;I wrote a VSL&rdquo; does not.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Specialize early</h3>
                <p>
                  A{' '}
                  <Link href="/verticals/health-supplement-copywriter" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    health supplement copywriter
                  </Link>{' '}
                  who understands FTC compliance commands 30% more than a generalist. A{' '}
                  <Link href="/verticals/financial-copywriter" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    financial copywriter
                  </Link>{' '}
                  who can navigate SEC regulations commands 40% more. Specialization is the fastest path to
                  premium rates because it reduces client risk — they know you understand their specific market.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Raise rates regularly</h3>
                <p>
                  If you have not raised your rates in the last 12 months, you are charging less than last year
                  (inflation alone erodes your income). Most copywriters undercharge because they fear losing
                  clients. In practice, the clients who leave when you raise rates 15-20% are usually the ones
                  who were undervaluing your work. The clients who stay become more profitable.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Consider the full engagement</h3>
                <p>
                  Instead of quoting for a single{' '}
                  <Link href="/blog/landing-page-copywriting" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    landing page
                  </Link>, propose a complete{' '}
                  <Link href="/services/sales-funnel-copywriter" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    sales funnel
                  </Link>{' '}
                  — landing page plus email sequence plus sales page plus upsell. Larger projects mean higher
                  total revenue per client, deeper relationships, and better results because you control the
                  entire conversion path.
                </p>

                <p>
                  For more on building a sustainable copywriting career, see our guides to{' '}
                  <Link href="/blog/copywriting-rates" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    copywriting rates
                  </Link>,{' '}
                  <Link href="/blog/freelance-copywriting-guide" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    freelance copywriting
                  </Link>, and{' '}
                  <Link href="/blog/copywriting-niches" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    the most profitable copywriting niches
                  </Link>.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 text-center">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="mt-10 max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-ink-900">{faq.question}</h3>
                  <p className="mt-2 font-body text-sm text-paper-600 leading-relaxed">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
