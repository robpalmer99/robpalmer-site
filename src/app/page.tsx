import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { TripleBrainVenn } from '@/components/blocks/TripleBrainVenn'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { services } from '@/app/services/_data/services'
import { verticals } from '@/app/verticals/_data/verticals'
import { caseStudies } from '@/app/case-studies/_data/case-studies'
import { testimonials } from '@/content/testimonials'
import { SITE_URL } from '@/lib/constants'

// Homepage testimonial selection — peer-endorsement triangle: Stefan Georgi (Copy Chief hire), Justin Goff (industry recognition), Ben Palmer (300% ROAS measurable proof)
const HOMEPAGE_TESTIMONIAL_IDS = ['2', '3', '4'] as const
const homepageTestimonials = HOMEPAGE_TESTIMONIAL_IDS
  .map((id) => testimonials.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))

export const metadata: Metadata = {
  title: 'Creative Strategist & Direct-Response Copywriter | Rob Palmer',
  description:
    'Creative strategist and direct-response copywriter behind $523M in tracked results. One senior strategist from angle to shipped creative: scripts, statics, video and landers for DTC brands scaling on Meta.',
  alternates: { canonical: SITE_URL },
}

// Tile-sized one-liners for the home Verticals section, in display order.
// Each replaces the longer shortDescription used on /verticals/[slug] pages.
const VERTICAL_TAGLINES: Record<string, string> = {
  'ecommerce-dtc-copywriter': 'Creative strategy for brands scaling on Meta.',
  'health-supplement-copywriter': 'Compliance-aware angles that still convert cold.',
  'clickbank-copywriter': 'Angles and funnels affiliates fight to promote.',
  'financial-copywriter': 'Disclosure-aware hooks with Wall Street credibility.',
  'saas-copywriter': 'Creative tested on MRR, churn and trial-to-paid.',
  'info-product-copywriter': 'Launch and evergreen creative that keeps scaling.',
}
const HOMEPAGE_VERTICAL_ORDER = Object.keys(VERTICAL_TAGLINES)
const homepageVerticals = HOMEPAGE_VERTICAL_ORDER
  .map((slug) => verticals.find((v) => v.slug === slug))
  .filter((v): v is NonNullable<typeof v> => Boolean(v))

// "How it works" section: the engagement shape, and the agency comparison.
const STAGES_HEADLINE = 'Strategy through to shipped creative.'
const STAGES_INTRO = 'Bring me in at whichever stage your team is missing, or hand me all four.'
const STAGES: { title: string; body: string }[] = [
  {
    title: 'Research & angles',
    body: 'I read your reviews, support tickets, Reddit threads and competitors’ ads for the exact words your buyers use, then rank the angles worth testing first.',
  },
  {
    title: 'Briefs, scripts, statics, video',
    body: 'Each angle becomes a brief with its hook, proof and format. Then I write the UGC scripts and static copy, and produce AI video ads ready to upload.',
  },
  {
    title: 'Landers & advertorials',
    body: 'The click goes to a page I wrote from the same angle, so the first line a visitor reads keeps the promise the ad made.',
  },
  {
    title: 'Testing & iteration',
    body: 'We read hook rate, CPA and ROAS together every week. Winners get new variations, losers get switched off, and the results set the next brief.',
  },
]
const AGENCY_COMPARISON: string[] = [
  'An agency puts an account manager between you and the work, and a junior writer behind the strategist who won the pitch. Every handoff loses a little of the idea. With me there’s no handoff at all: the person who decides what to test is the person who writes and builds it.',
  'Volume used to be the reason to hire an agency anyway. My AI production stack covers that now, so you get the weekly output of a small creative team, and every concept still passes through 40 years of judgment before it goes live.',
]

const homepageFaqs = [
  { question: 'What does a creative strategist do, and how is that different from a copywriter?', answer: 'A creative strategist owns the thinking behind your ads: which angles to test, which hooks and formats to use, in what order, and what the results mean for the next round. A copywriter is usually hired to deliver one asset, such as a sales page or a script. I\'ve done both for 40 years, so I can plan the testing program for your Meta account and then write every ad and page in it. That matters more than it used to, because Meta now rewards accounts that keep feeding it concepts that actually differ from each other, and somebody has to come up with them.' },
  { question: 'Do you also write the copy and produce the creative?', answer: 'Yes. I write the UGC and talking-head scripts, the static ads and their copy, the advertorials and the landing pages. For video, I produce AI-made ads through my own studio stack, with voiceover, edit and captions, so you can test a concept before you pay for a human shoot. If you already have editors or creators you trust, I\'ll brief them and write their scripts instead. Plenty of clients use a mix of the two, and the creative still comes from one angle map either way.' },
  { question: 'Freelancer or agency \u2014 which are you?', answer: 'I\'m a freelancer with studio-level output. You deal with one person, directly, from the first call to the last test, and the strategist you speak to is the one writing your scripts and pages. That works because my AI production stack does the heavy lifting on volume, so a single senior strategist can keep a busy Meta account supplied with new creative every week. If your team already has editors or an agency, I\'ll slot in beside them and supply the angles and scripts.' },
  { question: 'What is Triple Brain Marketing?', answer: 'Triple Brain Marketing is the integration of three brains into one engagement: my strategy brain (40+ years of direct-response craft for the world\'s top brands, with $523M+ in tracked results), my production brain (Claude Code augmented by my custom-built copywriting skills, custom-built skill files that encode 40 years of frameworks into a working AI workflow), and my knowledge brain (a 1,239-file Obsidian vault spanning the old direct-response masters through current AI marketing strategies).' },
  { question: 'Are you taking new clients?', answer: 'I take a selective number of new engagements each quarter to maintain quality. Most kickoffs happen within two weeks of the strategy call. If we\'re a fit, I\'ll send you a fixed-price proposal within 48 hours. If we\'re not, I\'ll tell you on the call and refer you to someone in my network.' },
  { question: 'How much does it cost to hire you?', answer: 'I work on a retainer or a project, whichever fits the work. A retainer suits brands scaling on Meta that need new creative every week and a results review every month. A project suits a defined job, such as an angle map with a first round of concepts, a VSL, or a complete funnel. The price depends on how much creative you need, in which formats, and whether I\'m producing it or briefing your team. You\'ll have a fixed-price quote within 48 hours of our strategy call, with no hourly billing. For a general guide to what the market charges, see my blog post on copywriting rates.' },
  { question: 'What industries do you work with?', answer: 'I\'ve written for e-commerce/DTC, health & supplement, financial, SaaS, info-product, and ClickBank markets. My direct-response principles apply across industries, and I adapt the strategy and compliance approach to each vertical.' },
  { question: 'How do you use AI in your process?', answer: 'I don\'t use AI the way most people use AI. I use Claude Code — the most capable AI writing tool available — augmented by my own custom-built copywriting skills. These are custom-built skill files that encode specific direct-response frameworks, headline formulas, and evaluation criteria into a workflow Claude applies on every project. Combined with my 1,239-file Obsidian copywriting brain (190 frameworks, 193 swipes, 512 pieces of my own tested copy), the AI has access to four decades of proven reference material — not generic training data.' },
  { question: 'What results can I expect?', answer: 'Results vary by market, offer, and traffic quality. My track record includes $523M+ in tracked revenue across campaigns, a 9-year campaign for Belron/Safelite, the $40M Gluco 6 supplement subscription funnel, $30M Mobile Profits #1 on ClickBank, 5.7% Monetari Fund opt-in-to-sale, 22% Chatterkick SaaS trial-to-paid lift, 340% Abundant TSL on Facebook cold, 8% conversion on cold traffic (Conor Reynolds VSL), and 300% ROAS on a ClickBank email funnel (Ben Palmer). I focus on measurable outcomes — conversion rates, AOV, and revenue.' },
  { question: 'How do I get started?', answer: 'Book a free strategy call — the calendar is at robpalmer.com/call. We\'ll discuss your project, goals, and timeline. If we\'re a good fit, I\'ll send you a fixed-price proposal within 48 hours. No pressure, no obligation.' },
]

// Strategy tier first (where an engagement starts), then the creative I build.
// ai-copywriting-consultant is the narrower sibling of ai-marketing-consultant;
// one consultancy card is enough on the home grid.
const homepageServices = [
  ...services.filter((s) => s.tier === 'strategy' && s.slug !== 'ai-copywriting-consultant'),
  ...services.filter((s) => s.tier === 'production'),
].slice(0, 6)

const homepageFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="home"
        headline="Creative Strategy for Brands Ready to Scale"
        subheadline="I research your customers, find the angles, and write the scripts, statics and landers myself. Every concept draws on 40 years of direct response, an AI production stack and campaigns that have produced $523M in tracked results."
        cta={{ label: 'Book a Strategy Call', href: '/call' }}
        secondaryCta={{ label: 'See Case Studies', href: '/case-studies' }}
        image={{ src: '/images/headshots/rob-palmer-clean.png', alt: 'Rob Palmer, creative strategist' }}
      >
        <FadeIn immediate delay={450} duration={800}>
          <p className="mt-5 text-sm sm:text-base lg:text-[0.95rem] text-paper-300 font-body">
            Selective engagements. Fixed-price, custom-quoted. No hourly billing.
          </p>
        </FadeIn>
      </Hero>

      {/* Client Logos */}
      <ClientLogoBar variant="dark" />

      {/* Stats */}
      <StatsBar variant="dark" />

      {/* Peer endorsement strip — Stefan + Justin + Ben Palmer named above-fold per offer brief 18.A */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="gold">Peer endorsement</Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mt-4">
                Vouched for by the operators who set the bar.
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-10 max-w-4xl mx-auto">
            <li>
              <FadeIn delay={0} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/stefan-georgi.jpeg"
                      alt="Stefan Georgi"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Stefan Georgi</p>
                  <p className="text-sm text-paper-600 font-body">Founder, Copy Accelerator</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;We hired Rob as our Copy Chief.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={100} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/justin-goff.jpeg"
                      alt="Justin Goff"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Justin Goff</p>
                  <p className="text-sm text-paper-600 font-body">Co-founder, Copy Accelerator</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;Stepped up and knocked it out of the park.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={200} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/ben-palmer.png"
                      alt="Ben Palmer"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Ben Palmer</p>
                  <p className="text-sm text-paper-600 font-body">ClickBank Platinum Vendor</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;300% Return on Ad Spend.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Strategy → shipped creative: the engagement shape, and the agency comparison */}
      <Section variant="alt" divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="gold">How it works</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                {STAGES_HEADLINE}
              </h2>
              <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed">{STAGES_INTRO}</p>
            </div>
          </FadeIn>
          <ol role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {STAGES.map((stage, index) => (
              <li key={stage.title}>
                <FadeIn delay={index * 100} distance={20} className="h-full">
                  <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                    <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">Stage {index + 1}</div>
                    <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">{stage.title}</h3>
                    <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">{stage.body}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
          <FadeIn delay={450}>
            <div className="mt-12 max-w-3xl mx-auto text-lg text-ink-700 font-body leading-relaxed space-y-4">
              {AGENCY_COMPARISON.map((para) => <p key={para}>{para}</p>)}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Triple Brain Marketing — the mechanism: why the creative wins */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="gold">Triple Brain Marketing</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                Three brains.{' '}
                <span className="text-gold-500">One engagement.</span>
              </h2>
              <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed">
                Why does the creative win? Every concept I ship goes through three brains: one decides what to say, one builds it, and one checks it against everything that has worked before.
              </p>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <li>
              <FadeIn delay={0} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 1
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    Strategy brain
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    40+ years of direct response for Apple, IBM, Microsoft, Citibank and Morgan Stanley, plus the Belron campaign that tracked $523M. That experience decides which angle to test, which hook leads, and what your account&apos;s numbers mean.
                  </p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={100} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 2
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    Production brain
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    Claude Code, running copywriting skills I built to encode the frameworks, formulas and review criteria from real campaigns. It takes an approved angle from script to video to page in days. <a href="https://github.com/robpalmer99/claude-code-copywriting-skills" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline-offset-4 hover:underline">Open-sourced on GitHub</a> (CC-BY-4.0); <Link href="/blog/claude-code-copywriting-skills" className="text-gold-600 underline-offset-4 hover:underline">read the blog post</Link> for the full breakdown.
                  </p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={200} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 3
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    Knowledge brain
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    A 1,239-file Obsidian vault covering the old direct-response masters through today&apos;s AI marketing: 190 frameworks, 193 swipes and 512 pieces of my own tested copy, indexed so every brief starts from what has already worked.
                  </p>
                </div>
              </FadeIn>
            </li>
          </ul>
          <TripleBrainVenn />
          <FadeIn delay={500}>
            <p className="mt-14 text-center text-lg text-ink-700 font-body leading-relaxed max-w-3xl mx-auto">
              Each brain multiplies the others &mdash; and the math compounds:{' '}
              <strong className="text-ink-950">$40M Gluco 6</strong> supplement subscription funnel.{' '}
              <strong className="text-ink-950">$30M Mobile Profits</strong> #1 on ClickBank.{' '}
              <strong className="text-ink-950">5.7% Monetari Fund</strong> opt-in-to-sale.{' '}
              <strong className="text-ink-950">22% Chatterkick</strong> SaaS trial-to-paid lift.{' '}
              <strong className="text-ink-950">340% Abundant</strong> TSL on Facebook cold. The same Triple Brain combination behind every campaign listed.
            </p>
            <div className="mt-8 text-center">
              <Button href="/blog/triple-brain-marketing" variant="ghost">
                How Triple Brain Marketing works →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Problem/Solution — asymmetric layout for rhythm break */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:items-start lg:gap-16">
            <FadeIn className="lg:flex-shrink-0 lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-sm">
                Most strategists brief.{' '}
                <span className="text-gold-500">I build.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150} className="mt-8 lg:mt-0">
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  Meta&apos;s Andromeda update made creative the lever. The
                  system now picks who sees an ad by reading the ad itself, so
                  the accounts that scale are the ones feeding it a steady
                  supply of genuinely different concepts. Winners fatigue
                  faster, too. An ad that stayed profitable for three months
                  can burn out in days, and your CPA climbs as soon as it does.
                </p>
                <p>
                  Most brands answer that with one of two hires, and both leave
                  a gap. A strategist who writes briefs and hands them off
                  leaves the editor guessing at research he never saw. A
                  copywriter who delivers one polished asset at a time
                  can&apos;t keep up with an account that needs a dozen new
                  tests a month.
                </p>
                <p>
                  I do both halves. 40 years of direct response taught me
                  how to find the message that makes a stranger buy, and my
                  production stack lets me build that message as statics,
                  video and landers as fast as your account uses them up.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/about" variant="ghost">
                  Read my full story →
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Capacity / Fit / Timeline — answers Marcus's "is he taking clients?" before he shops services */}
      <Section divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <Badge variant="gold">Working together</Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                  Before you book.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <ul role="list" className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Capacity.</strong> I take a small number of new engagements each quarter. It&apos;s how the work stays good.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Timeline.</strong> Most kickoffs happen within two weeks of a strategy call.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Fit.</strong> Retainer or project, whichever fits the work. Fixed-price quote within 48 hours of the call &mdash; and if I&apos;m not the right person, I&apos;ll say so and point you to someone who is.</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="mt-10 text-lg text-ink-700 font-body leading-relaxed text-center italic">
                I&apos;d rather refer a project than ship creative that won&apos;t beat your control.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section variant="alt" id="services" divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Strategy First. Then the Creative That Delivers It.
              </h2>
              <p className="mt-4 text-lg text-ink-700 font-body max-w-2xl mx-auto">
                Most engagements start with strategy, then move into the ads,
                VSLs and pages I write to prove the angle works.
              </p>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service, index) => (
              <li key={service.slug}>
                <FadeIn delay={index * 100} distance={20} className="h-full">
                  <ServiceCard
                    title={service.title}
                    slug={service.slug}
                    description={service.shortDescription}
                    image={service.heroImage}
                    imageAlt={service.heroImageAlt}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
          <FadeIn delay={600}>
            <div className="mt-8 text-center">
              <Button href="/services" variant="ghost">
                View all services →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Industries / Verticals */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Markets I Know
              </h2>
              <p className="mt-4 text-lg text-ink-700 font-body max-w-2xl mx-auto">
                I&apos;ve written for these markets for years, so I already
                know their buyers, their compliance rules and the angles
                they&apos;ve worn out.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {homepageVerticals.map((vertical, index) => (
              <FadeIn key={vertical.slug} delay={index * 80} className="h-full">
                <Link
                  href={`/verticals/${vertical.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-paper-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                >
                  <h3 className="font-heading text-base sm:text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors leading-tight">
                    {vertical.title.replace(' Copywriter', '')}
                  </h3>
                  <p className="mt-2 text-base lg:text-[1rem] text-ink-700 leading-snug font-body">
                    {VERTICAL_TAGLINES[vertical.slug]}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={500}>
            <div className="mt-8 text-center">
              <Button href="/verticals" variant="ghost">
                View all verticals →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Case Studies */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Results That Speak for Themselves
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <li key={cs.slug}>
                <FadeIn delay={index * 150} distance={20} className="h-full">
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

      {/* CTA Banner */}
      <CTABanner
        headline="Ready for creative that scales instead of fatigues?"
        subtext="On a strategy call we'll look at your current ads together, and I'll tell you which angle I'd test next and why."
        variant="gold"
      />

      {/* Testimonials */}
      <Section variant="alt" divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                What Clients Say
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageTestimonials.map((testimonial, index) => (
              <li key={testimonial.id}>
                <FadeIn delay={index * 120} distance={20} className="h-full">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant={index === 1 ? 'featured' : 'default'}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
          <FadeIn delay={400}>
            <div className="mt-8 text-center">
              <Button href="/testimonials" variant="ghost">
                Read all testimonials →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* AI Advantage — Production brain deep dive: why AI-only creative fatigued on Meta */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:gap-16 lg:items-start">
            <FadeIn className="lg:flex-shrink-0">
              <div className="mb-8 lg:mb-0 lg:sticky lg:top-28">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-xs">
                  Why the AI-only{' '}
                  <span className="text-gold-500">experiment failed.</span>
                </h2>
                <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed lg:max-w-xs">
                  Meta rewards different ads, and AI on its own keeps making the same one.
                </p>
                {/* Decorative gold accent bar */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-200 rounded-full" />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  Over the last two years, brands flooded Meta with creative made by AI alone, and the result was thousands of near-identical ads with the same hooks, the same glossy faces and the same phrasing. Meta stopped rewarding them.
                </p>
                <p>
                  AI on its own writes fluent, generic copy that doesn&apos;t
                  offend anyone and doesn&apos;t convince anyone either. It
                  can&apos;t read what a prospect isn&apos;t saying out loud,
                  and it doesn&apos;t know which hook to use at which awareness
                  level. Those decisions come from craft.
                </p>
                <p>
                  My approach is different. I was the world&apos;s first blogger in 1993, writing copy before the internet had pictures. I built my own AI workflow because nothing off-the-shelf was good enough, and here&apos;s what it actually does on every brief:
                </p>
                <ul role="list" className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">Skill files encode 190+ proven DR frameworks.</strong> Claude routes through a headline-formula matrix, lead-type evaluator, and awareness-stage routing on every draft. Not generic instruction-following; not single-prompt thinking. The frameworks come from 40 years of campaigns I&apos;ve shipped.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">Compliance posture from line 1.</strong> FDA structure/function-claim discipline, FTC substantiation, SEC/FINRA disclosure standards baked into the writing layer through skill files. Not retrofitted by legal at the end. The discipline behind why $40M Gluco 6 cleared review every time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">1,239-file Obsidian retrieval.</strong> Claude pulls from my personal swipe library (193 swipes), 512 pieces of my own tested copy, and 125 book/course notes. Not generic LLM training data — my actual proven reference material, indexed and instantly retrievable.</span>
                  </li>
                </ul>
                <p>
                  The output is something neither a human alone nor an AI alone can produce. Same brief into both &mdash; here is what the difference looks like:
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Output proof — same brief, vanilla AI vs Triple Brain (offer brief 18.D-c) */}
          <FadeIn delay={300}>
            <div className="mt-14 max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <div className="font-heading text-xs font-bold uppercase tracking-wider text-gold-600 mb-2">
                  Output proof
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  Same brief. Different output.
                </h3>
              </div>

              <div className="rounded-xl border border-paper-200 bg-paper-50 p-6 sm:p-8">
                <div className="mb-6">
                  <div className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600 mb-2">
                    The brief
                  </div>
                  <p className="text-sm text-ink-700 italic font-body leading-relaxed">
                    Write a headline for the sales page of a glucose-support supplement. Audience: adults 50+ concerned about glucose levels. Solution-aware &mdash; they have tried 1&ndash;2 supplements already. Compliance: FDA structure/function claims only.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Generic AI side */}
                  <div className="rounded-lg border border-paper-300 bg-white p-5">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-paper-600">
                        Generic AI
                      </span>
                      <span className="text-xs text-paper-500 font-body">
                        vanilla ChatGPT / Claude
                      </span>
                    </div>
                    <p className="font-heading text-base sm:text-lg font-bold text-ink-700 leading-snug">
                      &ldquo;Discover the Natural Way to Support Healthy Blood Sugar &mdash; Doctors Are Stunned by This Breakthrough Glucose Formula&rdquo;
                    </p>
                    <ul role="list" className="mt-4 space-y-2 text-sm text-ink-700 font-body">
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>Three AI-pattern tells in one line (&ldquo;Discover&rdquo;, &ldquo;Doctors are stunned&rdquo;, &ldquo;Breakthrough&rdquo;)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>Awareness mismatch &mdash; written for Stage 2 problem-aware; audience is Stage 3 solution-aware</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>&ldquo;Doctors are stunned&rdquo; verges on implied disease-treatment claim &mdash; compliance reviewer flags it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>No mechanism, no specificity, no timeframe</span>
                      </li>
                    </ul>
                  </div>

                  {/* Triple Brain side */}
                  <div className="rounded-lg border-2 border-gold-300 bg-white p-5">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-gold-600">
                        Triple Brain
                      </span>
                      <span className="text-xs text-paper-500 font-body">
                        Claude Code + custom skills + vault
                      </span>
                    </div>
                    <p className="font-heading text-base sm:text-lg font-bold text-ink-950 leading-snug">
                      &ldquo;The 12-Second Berry Ritual That Helps Adults 50+ Maintain Healthy Glucose Levels &mdash; Even After &lsquo;Already Tried That&rsquo;&rdquo;
                    </p>
                    <ul role="list" className="mt-4 space-y-2 text-sm text-ink-700 font-body">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Sultanic mechanism formula</strong> &mdash; ritual + timeframe + specific ingredient</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Schwartz Stage 3 awareness</strong> &mdash; &ldquo;Even After &lsquo;Already Tried That&rsquo;&rdquo; acknowledges the audience has shopped the category</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">FDA structure/function compliance</strong> &mdash; allowed language, no disease claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Vault retrieval</strong> &mdash; ritual-hook pattern from $40M Gluco 6 + supplement-vertical swipe library</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                  Frequently Asked Questions
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <FAQAccordion items={homepageFaqs} />
            </FadeIn>
          </div>
        </Container>
      </Section>
      <JsonLd data={homepageFaqJsonLd} />

      {/* Final CTA */}
      <CTABanner
        headline="One strategist, from angle to shipped creative."
        subtext="Book a free strategy call. No pressure and no obligation: an honest conversation about whether I'm the right fit for your creative."
        variant="default"
      />
    </>
  )
}
