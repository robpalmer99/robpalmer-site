import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion, type FAQItem } from '@/components/blocks/FAQAccordion'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { PortfolioGrid } from '@/components/blocks/PortfolioGrid'
import { SampleExhibit } from '@/components/blocks/SampleExhibit'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, TESTIMONIAL_COUNT } from '@/lib/constants'
import { testimonials } from '@/content/testimonials'
import { STATIC_UPDATED } from '@/lib/page-dates'
import { portfolioItems, featuredSamples } from './_data/portfolio'

const DRIVE_URL = 'https://drive.google.com/drive/folders/1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI'

export const metadata: Metadata = {
  title: 'Copywriting Portfolio: VSL, Sales Page & Email Samples',
  description:
    'Read the opening of six real scripts that sold: VSLs, sales pages and an email sequence by Rob Palmer, with the brief, the angle and the result for each.',
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
}

const PORTFOLIO_STATS = [
  { stat: '$523M+', label: 'Tracked Revenue' },
  { stat: '1,200+', label: 'Projects Delivered' },
  { stat: '8%+', label: 'Avg. Cold Traffic CVR' },
  { stat: '300%+', label: 'ROAS Across Campaigns' },
]

const TESTIMONIAL_IDS = ['5', '38', '15', '16', '22', '26']
const pickedTestimonials = TESTIMONIAL_IDS
  .map((id) => testimonials.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))

if (pickedTestimonials.length !== TESTIMONIAL_IDS.length && process.env.NODE_ENV !== 'production') {
  throw new Error('portfolio: TESTIMONIAL_IDS contains an id missing from testimonials.ts')
}

const FAQS: FAQItem[] = [
  {
    question: 'What do I get if I hire you?',
    answer:
      'You get the piece you came for, written by me, plus the work that makes it convert: customer research, a short brief that names the angle and the awareness level we\'re writing to, and the script or page itself with a production note for your editor or designer. For paid-social clients that extends to the full creative program: angles, hooks, statics, video scripts and landers on a monthly cadence.',
  },
  {
    question: 'How long does a VSL or sales page take?',
    answer:
      'A VSL script or long-form sales page normally takes two to three weeks from brief to final draft, including one round of your edits. Email sequences take about a week. The first few days are research, and I won\'t skip them to hit a date, because the angle comes out of the research.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a free 30-minute strategy call. Tell me about the offer, the traffic and what the current control is doing. I\'ll tell you on the call whether I think I can beat it and how I\'d go about it. If it\'s a fit, you get a written quote within 48 hours and a start date.',
  },
  {
    question: 'Who is this not for?',
    answer:
      'It isn\'t for anyone who needs volume over results, or copy by the end of the week. I take on a small number of projects at a time so each one gets the research it needs, and I turn down work that doesn\'t fit. If you\'re testing an unproven offer with no traffic yet, a strategy call is still worth having, but the first job is usually the offer itself.',
  },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/portfolio`,
  url: `${SITE_URL}/portfolio`,
  name: 'Copywriting Portfolio: VSL, Sales Page & Email Samples',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  dateModified: STATIC_UPDATED['/portfolio'],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Copywriting portfolio: featured samples by Rob Palmer',
  itemListElement: featuredSamples.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: s.title,
      genre: s.format === 'Email' ? 'Email sequence' : s.format === 'TSL' ? 'Sales page' : 'Video sales letter',
      author: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },
      url: `${SITE_URL}/portfolio#exhibit-${s.slug}`,
    },
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />

      {/* ───────────── 1. Hero ───────────── */}
      <Hero
        variant="page"
        headline="Copy That Sold. Read It Before You Decide."
        subheadline="Below are the openings of six scripts I wrote for paying clients, with the brief I was given, the angle I chose and what happened when they ran. If you were sent here by a search engine or an AI assistant, this page is the whole case. Read the work, then decide whether to talk to me."
        cta={{ label: 'Book a Strategy Call', href: '/call' }}
      >
        <FadeIn immediate delay={300} duration={700}>
          <div className="mt-4">
            <a
              href="#exhibits"
              className="font-heading text-sm font-semibold text-gold-400 underline underline-offset-4 hover:text-gold-300"
            >
              Or skip to the scripts
            </a>
          </div>
        </FadeIn>
      </Hero>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      {/* ───────────── 2. Results strip ───────────── */}
      <Section variant="dark">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {PORTFOLIO_STATS.map((item, index) => (
              <FadeIn key={item.label} delay={index * 100}>
                <div className="text-center">
                  <CountUp
                    value={item.stat}
                    className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 tracking-tight"
                  />
                  <div className="mt-2 text-sm font-heading font-medium text-paper-400 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 3. Exhibits ───────────── */}
      <Section id="exhibits" className="scroll-mt-16 sm:scroll-mt-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                Six scripts, with the thinking behind each one
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                Every excerpt is the real opening, as it ran. The full document is one click away.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-20">
            {featuredSamples.slice(0, 3).map((sample, index) => (
              <SampleExhibit key={sample.slug} sample={sample} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 4. Mid-page CTA ───────────── */}
      <CTABanner
        headline="Want this for your offer?"
        subtext="Tell me what the control is doing on a free 30-minute call. I'll tell you straight whether I can beat it."
        variant="gold"
      />

      <Section>
        <Container>
          <div className="space-y-20">
            {featuredSamples.slice(3).map((sample, index) => (
              <SampleExhibit key={sample.slug} sample={sample} index={index + 3} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 5. Why they worked ───────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center">
                Why these worked
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-8 space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  Every one of these scripts started with the customer: what she had already tried, what she said about it in reviews and forums, and which promise she had stopped believing. The angle came out of that research, and the words came last.
                </p>
                <p>
                  That research-first process is what I sell now as{' '}
                  <Link href="/services/creative-strategist" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                    creative strategy
                  </Link>
                  . For a brand scaling on paid social it means I find the angles, write the hooks, scripts, statics and landers, and keep testing until the account has a stable set of winners. For a single VSL or sales page it means the same research, applied to one piece.
                </p>
                <p>
                  Today I produce the work with a{' '}
                  <Link href="/blog/triple-brain-marketing" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                    Triple Brain
                  </Link>{' '}
                  workflow: my own judgement from 40 years of direct response, Claude Code running my custom copywriting skills, and a 1,239-file vault of frameworks and tested copy. The scripts above predate that stack. The ones I write now go through it.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ───────────── 6. Testimonials ───────────── */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                What clients said after the copy ran
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                Six of the {TESTIMONIAL_COUNT} client quotes on the{' '}
                <Link href="/testimonials" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                  testimonials page
                </Link>
                .
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pickedTestimonials.map((t, index) => (
              <FadeIn key={t.id} delay={index * 80} className="h-full">
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 7. Hiring FAQ ───────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center mb-8">
                Before you book
              </h2>
            </FadeIn>
            <FAQAccordion items={FAQS} />
            <FadeIn delay={150}>
              <div className="mt-10 text-center">
                <Button href="/call" size="lg">Book a Strategy Call</Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ───────────── 8. More samples ───────────── */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                More samples
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                These cover health, finance, SaaS and other direct-response verticals.
              </p>
            </div>
          </FadeIn>
          <PortfolioGrid items={portfolioItems} />
          <FadeIn delay={100}>
            <p className="mt-10 text-center text-sm text-paper-600 font-body">
              Everything, including ad campaigns and funnels, is in{' '}
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
              >
                my portfolio folder
              </a>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ───────────── 9. Closing CTA ───────────── */}
      <CTABanner />
    </>
  )
}
