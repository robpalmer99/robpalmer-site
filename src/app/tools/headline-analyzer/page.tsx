import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { HeadlineAnalyzer } from '@/components/tools/HeadlineAnalyzer'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Headline Analyzer Tool — Score Your Headlines for Clicks & Conversions',
  description:
    'Analyze your headlines instantly. Get a score based on word balance, emotional triggers, power words, reading ease, and SEO length — built by a copywriter with $523M+ in results.',
  alternates: {
    canonical: `${SITE_URL}/tools/headline-analyzer`,
  },
  openGraph: {
    title: 'Free Headline Analyzer Tool — Score Your Headlines for Clicks & Conversions',
    description:
      'Analyze your headlines instantly. Get a score based on word balance, emotional triggers, power words, reading ease, and SEO length.',
    url: `${SITE_URL}/tools/headline-analyzer`,
    type: 'website',
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Headline Analyzer Tool',
    description:
      'Score your headlines for emotional impact, power words, reading ease, and SEO length. Free tool from a $523M+ direct-response copywriter.',
  },
}

const faqData = [
  {
    question: 'How does this headline analyzer work?',
    answer:
      'The analyzer evaluates your headline across multiple dimensions: word count, character length (for SEO display), emotional trigger words, power words, word balance, headline type classification, reading ease, and sentiment. Each factor is weighted based on decades of direct-response copywriting research and advertising performance data.',
  },
  {
    question: 'What is a good headline score?',
    answer:
      'A score of 65+ is strong, and 80+ is excellent. However, no tool can fully evaluate headline quality — context, audience, and offer matter enormously. Use the score as a starting point, not a final judgment. The best headline is always the one that gets tested against real traffic.',
  },
  {
    question: 'What are emotional trigger words in headlines?',
    answer:
      'Emotional trigger words are words that evoke a psychological response in the reader — fear, desire, curiosity, urgency, or excitement. Examples include "proven", "devastating", "secret", "effortless", and "breakthrough". Headlines with emotional triggers consistently outperform neutral headlines in click-through rate tests.',
  },
  {
    question: 'What are power words in copywriting?',
    answer:
      'Power words are persuasive words that trigger a specific response: urgency (now, limited, deadline), exclusivity (secret, insider, hidden), authority (proven, certified, research), value (free, bonus, save), and results (transform, breakthrough, skyrocket). Strategic use of power words strengthens headlines without resorting to hype.',
  },
  {
    question: 'How long should a headline be?',
    answer:
      'Research consistently shows that 6-12 word headlines perform best for engagement. For SEO, keep titles under 65 characters to avoid truncation in Google search results. For social media, slightly shorter headlines (6-10 words) tend to get more shares. The ideal length depends on context — test different lengths for your specific audience.',
  },
  {
    question: 'Do numbered headlines really perform better?',
    answer:
      'Yes. Multiple studies show that numbered headlines receive 36% more clicks than non-numbered headlines on average. Odd numbers slightly outperform even numbers. The number sets an expectation and signals that the content is organized and scannable — which matches how most people consume content online.',
  },
  {
    question: 'Is this tool free to use?',
    answer:
      'Yes, completely free with no limits. Analyze as many headlines as you want. No sign-up, no email required, no usage caps. The tool runs entirely in your browser — your headlines are never sent to a server or stored anywhere.',
  },
  {
    question: 'Can a headline analyzer replace A/B testing?',
    answer:
      'No. A headline analyzer helps you write stronger headlines before testing, but real performance data from A/B tests is the only way to know what actually works with your specific audience. Use this tool to generate better starting hypotheses, then test them with real traffic. The analyzer catches obvious weaknesses — only traffic reveals what converts.',
  },
  {
    question: 'What headline types convert best?',
    answer:
      'How-to headlines and numbered list headlines consistently outperform other formats in both search and social. Question headlines perform well for curiosity-driven content. Command headlines (e.g., "Stop doing X") work for problem-aware audiences. The best format depends on your audience awareness level — a concept Eugene Schwartz mapped out in Breakthrough Advertising.',
  },
  {
    question: 'How is this different from other headline analyzers?',
    answer:
      'Most headline analyzers use generic scoring based on basic word counts. This tool is built by a direct-response copywriter with 40+ years of experience and $523M+ in tracked results. The scoring weights emotional triggers, power words, and word balance the way working copywriters evaluate headlines — not just readability metrics. It is also instant, free, and private — no server processing, no data collection.',
  },
]

export default function HeadlineAnalyzerPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Free Headline Analyzer Tool',
          description: metadata.description,
          url: `${SITE_URL}/tools/headline-analyzer`,
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
          { label: 'Headline Analyzer' },
        ]}
      />

      {/* Hero */}
      <section className="bg-ink-950 text-white noise-overlay relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,183,49,0.08),transparent_50%)]" />
        <Container className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-20 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Free Headline Analyzer
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-body text-paper-300 leading-relaxed">
              Score your headlines for emotional impact, power words, word balance,
              reading ease, and SEO length. Built by a direct-response copywriter
              with <span className="text-gold-400 font-semibold">$523M+</span> in tracked results.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Tool */}
      <Section>
        <Container>
          <FadeIn>
            <HeadlineAnalyzer />
          </FadeIn>
        </Container>
      </Section>

      {/* How It Works */}
      <Section variant="alt">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 text-center">
              How the Headline Analyzer Scores Your Headlines
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Word Balance',
                desc: 'Evaluates the ratio of common, uncommon, emotional, and power words. Headlines that are all filler words score lower. Headlines with a mix of emotional triggers and specific language score higher.',
              },
              {
                title: 'Emotional Impact',
                desc: 'Scans for words that trigger psychological responses — fear, desire, curiosity, urgency. Emotional headlines consistently outperform neutral ones in click-through rate tests across every platform.',
              },
              {
                title: 'Power Words',
                desc: 'Detects persuasive words that drive action: urgency words (now, limited), exclusivity words (secret, insider), authority words (proven, research), and value words (free, guaranteed).',
              },
              {
                title: 'Headline Length',
                desc: 'Checks word count (ideal: 6-12 words) and character count (ideal: under 65 for Google search display). Headlines that are too short lack specificity. Headlines that are too long get truncated.',
              },
              {
                title: 'Headline Type',
                desc: 'Classifies your headline format — How-To, List, Question, Command, Guide, Comparison, or Statement. Certain formats consistently outperform others depending on context and audience.',
              },
              {
                title: 'Reading Ease',
                desc: 'Evaluates word complexity and average word length. Headlines that scan quickly in search results and social feeds perform better. Simpler, punchier language wins.',
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

      {/* Tips Section (SEO content) */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto prose-container">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900">
                How to Write Headlines That Convert: Tips From 40+ Years of Direct-Response Copywriting
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mt-8 space-y-6 font-body text-paper-800 leading-relaxed">
                <p>
                  Your headline is the most important piece of copy you will ever write. Advertising legend{' '}
                  <Link href="/blog/david-ogilvy-ai-copywriting" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    David Ogilvy
                  </Link>{' '}
                  estimated that five times as many people read the headline as read the body copy. In digital marketing,
                  the ratio is even more extreme — your headline determines whether someone clicks or scrolls past.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Start with your audience&apos;s awareness level</h3>
                <p>
                  <Link href="/blog/eugene-schwartz-breakthrough-advertising-lessons" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    Eugene Schwartz
                  </Link>{' '}
                  taught that the effectiveness of a headline depends entirely on where your reader falls on the awareness
                  spectrum. A problem-aware audience needs a different headline than a solution-aware audience. No analyzer
                  can evaluate this for you — but it is the single most important factor in headline performance.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Use specific numbers and data</h3>
                <p>
                  Numbered headlines get 36% more clicks than non-numbered headlines on average. But do not just add a
                  random number. Use specific, credible data that signals real value: &ldquo;7 Proven Headline Formulas&rdquo;
                  outperforms &ldquo;Some Headline Formulas.&rdquo; Odd numbers slightly outperform even numbers in most tests.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Balance emotion with specificity</h3>
                <p>
                  The best headlines combine emotional triggers with concrete specifics. &ldquo;How to Double Your
                  Conversion Rate&rdquo; is stronger than &ldquo;How to Improve Your Marketing.&rdquo; The emotional
                  word (&ldquo;double&rdquo;) creates desire while the specific language (&ldquo;conversion rate&rdquo;)
                  qualifies the audience. For more on headline structure, see our guide to{' '}
                  <Link href="/blog/headline-formulas" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    proven headline formulas
                  </Link>.
                </p>

                <h3 className="font-heading text-xl font-bold text-ink-900 pt-4">Test, don&apos;t guess</h3>
                <p>
                  This analyzer gives you a strong starting point, but the only headline score that matters is the one your
                  audience gives you through clicks and conversions.{' '}
                  <Link href="/blog/claude-hopkins-scientific-advertising-lessons" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    Claude Hopkins
                  </Link>{' '}
                  pioneered the concept of tested advertising over a century ago — and it remains the only reliable way to
                  know what works. Write multiple headline variations, test them with real traffic, and let the data decide.
                </p>

                <p>
                  For a deeper dive into the tools professional copywriters use for headline testing and optimization, read our
                  complete guide to{' '}
                  <Link href="/blog/headline-analyzer-tools" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    headline analyzer tools
                  </Link>{' '}
                  and the full{' '}
                  <Link href="/blog/copywriting-tools" className="text-gold-600 hover:text-gold-500 underline underline-offset-2">
                    copywriting tools
                  </Link>{' '}
                  breakdown.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
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
