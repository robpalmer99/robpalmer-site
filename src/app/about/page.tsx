import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { CareerTimeline } from '@/components/blocks/CareerTimeline'
import { SpecialtyGrid } from '@/components/blocks/SpecialtyGrid'
import { AboutTestimonials } from '@/components/blocks/AboutTestimonials'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About | Creative Strategist & Direct-Response Copywriter',
  description:
    'Rob Palmer is a creative strategist and direct-response copywriter with $523M+ in tracked results. He plans and builds Meta ad creative with Triple Brain.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Forty years of direct response. Now pointed at your creative."
        subheadline="Creative strategist and direct-response copywriter. Behind $523M+ in tracked campaign results."
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* ───────────────────────────── Opening Bio ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Entity block — third-person by design: this is the AI-extraction
                anchor for "who is Rob Palmer" queries (like meta descriptions
                and schema). Everything else on this page stays first-person. */}
            <FadeIn>
              <p className="text-base text-paper-600 font-body leading-relaxed mb-10 max-w-3xl">
                Rob Palmer is a creative strategist and direct-response
                copywriter with 40+ years of experience and $523M+ in tracked
                client results, including campaigns for Apple, IBM, Microsoft,
                and Belron/Safelite. He plans and produces ad creative for DTC
                brands scaling on Meta: the angles and the testing program,
                plus the scripts, statics, AI video and landing pages built
                from them. He also works with health, finance, SaaS,
                e-commerce, and ClickBank clients worldwide, and is taking new
                engagements in 2026.
              </p>
            </FadeIn>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
              <FadeIn direction="left" duration={700}>
                <div className="shrink-0 relative">
                  <div className="absolute -inset-2 rounded-xl bg-gold-400/10 blur-lg" />
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-lg ring-2 ring-gold-400/20">
                    <Image
                      src="/images/headshots/rob-palmer-clean.png"
                      alt="Rob Palmer, creative strategist and direct-response copywriter"
                      fill
                      sizes="(max-width: 640px) 176px, 224px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={150} duration={700}>
                <div className="space-y-4 text-lg text-ink-700 leading-relaxed font-body">
                  <p>
                    I&apos;m a creative strategist and direct-response
                    copywriter. I decide which angles your ads should test,
                    then read your account&apos;s results to plan the next
                    round. And I write and build the creative myself: the
                    scripts, statics, AI video and landers. My campaigns have
                    generated over{' '}
                    <strong className="text-ink-950">
                      $523 million in tracked revenue
                    </strong>{' '}
                    for clients ranging from ClickBank vendors and DTC brands
                    to Fortune 500 corporations like Apple, IBM, Microsoft,
                    Citibank, and Morgan Stanley.
                  </p>
                  <p>
                    The method behind that number is{' '}
                    <strong className="text-ink-950">
                      Triple Brain Marketing
                    </strong>
                    , three integrated brains working as one engagement: my
                    forty years of direct-response craft, Claude Code augmented
                    by my own custom-built copywriting skills, and a 1,239-file
                    Obsidian copywriting brain spanning the old direct-response
                    masters through today&apos;s AI marketing strategies.
                  </p>
                  <p>
                    Other campaigns I&apos;ve shipped under the same approach:{' '}
                    <strong className="text-ink-950">$40M Gluco 6</strong> supplement subscription funnel,{' '}
                    <strong className="text-ink-950">$30M Mobile Profits</strong> (#1 on ClickBank),{' '}
                    <strong className="text-ink-950">5.7% Monetari Fund</strong> opt-in-to-sale,{' '}
                    <strong className="text-ink-950">22% Chatterkick</strong> SaaS trial-to-paid lift, and{' '}
                    <strong className="text-ink-950">340% Abundant</strong> TSL on Facebook cold.
                  </p>
                  <p>
                    Stefan Georgi hired me as{' '}
                    <strong className="text-ink-950">Copy Chief at Copy Accelerator.</strong>{' '}
                    The CEO of Belron International called me his{' '}
                    <strong className="text-ink-950">
                      &ldquo;Secret Weapon.&rdquo;
                    </strong>{' '}
                    And right now, I&apos;m taking on selective new
                    engagements, building creative for clients from{' '}
                    <strong className="text-ink-950">
                      the United States to the United Arab Emirates.
                    </strong>
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Stats Bar ───────────────────────────── */}
      <StatsBar variant="dark" />

      {/* ───────────────────────────── What I Do Today ───────────────────────────── */}
      <Section divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
                What I Do Today
              </h2>
            </FadeIn>
            <div className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
              <FadeIn delay={100}>
                <p>
                  The direct-response landscape moves fast — new platforms, new
                  formats, new buyer behaviors. I stay ahead of it so my clients
                  do not have to. Here is what that looks like in practice:
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  {
                    label: 'Offer Strategy',
                    detail:
                      'I work with clients to architect irresistible offers — pricing, bonuses, guarantees, and upsell flows engineered to maximize revenue per visitor.',
                  },
                  {
                    label: 'Full Funnel Builds',
                    detail:
                      'From the ad to the thank-you page, I build complete conversion funnels — VSLs, sales pages, email sequences, order forms, and upsell/downsell flows that work as a system.',
                  },
                  {
                    label: 'Conversion Rate Optimization',
                    detail:
                      'I do not just write copy and walk away. I analyze performance data, identify bottlenecks, and optimize every stage of your funnel to maximize profit.',
                  },
                  {
                    label: 'Platform-Fluent Campaigns',
                    detail:
                      'I write campaigns optimized for today\'s ad platforms — Meta, YouTube, and TikTok — understanding the compliance rules, format constraints, and audience behaviors unique to each.',
                  },
                ].map((item, index) => (
                  <FadeIn key={item.label} delay={200 + index * 100} className="h-full">
                    <div className="rounded-lg border border-paper-200 bg-white p-5 shadow-sm border-t-2 border-t-gold-400/40 h-full">
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm text-ink-700 font-body leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn>
                <p>
                  Whether you need a single high-converting VSL or a complete
                  funnel strategy from scratch, I bring the same
                  approach:{' '}
                  <strong className="text-ink-950">
                    deep research, proven frameworks, and relentless optimization
                  </strong>{' '}
                  until the numbers hit.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── How Triple Brain Marketing Began ───────────────────────────── */}
      <Section variant="dark">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-paper-50 mb-6">
                How Triple Brain Marketing Began
              </h2>
            </FadeIn>
            <div className="space-y-5 text-lg text-paper-300 leading-relaxed font-body">
              <FadeIn delay={100}>
                <p>
                  I started writing copy in the early 1980s — long before
                  &ldquo;digital marketing&rdquo; was a phrase. I was the
                  world&apos;s first blogger in 1993, before the word
                  &ldquo;blogger&rdquo; existed and before browsers had pictures.
                  I&apos;ve written through every medium shift since: direct mail,
                  early web, banner ads, search, social, native, video — and now AI.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Between 2023 and 2025, I watched what happened when companies
                  fired their copywriting teams and replaced them with ChatGPT.
                  Conversion rates dropped. Brand voice flattened. Cold traffic
                  stopped converting. By 2026, most of those companies were
                  quietly rehiring senior copywriters at higher rates than before.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p>
                  I realized the problem wasn&apos;t AI versus human. It was that
                  nobody had{' '}
                  <strong className="text-paper-50">fused</strong> the three
                  brains needed to produce great direct-response copy in 2026.
                  The senior copywriters with the craft hadn&apos;t built the AI
                  workflow. The AI tools didn&apos;t have the craft. And almost
                  nobody had a working knowledge base spanning four decades of
                  proven material connected to either.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <p>
                  So I built it myself.
                </p>
              </FadeIn>
              <FadeIn delay={500}>
                <p>
                  For most of my career, clients hired me to write one asset: a
                  sales page, a VSL, an email series. Then Meta changed how it
                  finds buyers. Its algorithm now rewards accounts that feed it
                  genuinely different concepts every week, so the bottleneck
                  became the supply of fresh angles. Clients stopped asking me
                  for a single script. They wanted one person to plan the
                  tests, make the creative and read the results. The three
                  brains I&apos;d built turned out to fit that job exactly.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {[
                  {
                    label: 'Brain 1',
                    title: 'Strategy brain',
                    detail:
                      '40+ years of direct-response craft for the world\u2019s top brands (Apple, IBM, Microsoft, Citibank, Morgan Stanley), plus the campaign behind $523M for Belron. Schwartz, Halbert, Hopkins, Caples, Sugarman and Collier, studied for decades. It picks the angle to test, the hook to lead with, and what to change when the numbers come in.',
                  },
                  {
                    label: 'Brain 2',
                    title: 'Production brain',
                    detail:
                      'Anthropic\u2019s Claude Code, running copywriting skill files I built myself. They encode proprietary frameworks, headline formulas, evaluation criteria and compliance rules from real campaigns, so an approved angle becomes finished scripts, statics, video and pages in days. Open-sourced on GitHub as proof.',
                  },
                  {
                    label: 'Brain 3',
                    title: 'Knowledge brain',
                    detail:
                      'A 1,239-file Obsidian vault spanning the old masters through current AI marketing strategies: 190 frameworks, 193 swipe pieces, 125 book and course notes, 76 templates, and 512 pieces of my own tested and measured copy. Every brief gets checked against it before anything ships.',
                  },
                ].map((item, index) => (
                  <FadeIn key={item.label} delay={600 + index * 100} className="h-full">
                    <div className="rounded-lg border border-ink-700 bg-ink-900/50 p-5 border-t-2 border-t-gold-400/30 h-full">
                      <div className="font-heading text-xs font-bold uppercase tracking-wider text-gold-400">
                        {item.label}
                      </div>
                      <h3 className="mt-2 font-heading text-base font-bold text-paper-50 leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-paper-400 font-body leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn>
                <p>
                  Each brain multiplies the others. The strategy brain decides
                  what to say. The production brain builds it. The knowledge
                  brain gives Claude proven material to draw from. The output is{' '}
                  <strong className="text-paper-50">faster than traditional, deeper than AI, and more proven than anything an &ldquo;AI-powered&rdquo; generalist can produce.</strong>
                </p>
              </FadeIn>
              <FadeIn>
                <p>
                  That&apos;s what hiring me means: three brains, fused into
                  one engagement.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── The $523M Story ───────────────────────────── */}
      <Section divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
                Five Award-Winning Copywriters Failed Before Me. The Campaign I Wrote Did $523 Million.
              </h2>
            </FadeIn>
            <div className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
              <FadeIn delay={100}>
                <p>
                  Belron International — known in the US as Safelite AutoGlass —
                  needed a direct-response campaign to drive windshield
                  replacement bookings. Five previous copywriters had already tried and
                  failed. Each was an experienced, award-winning name in the
                  industry. Each led with features and convenience. None of
                  them cracked the code.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Through deep research, I discovered that the most powerful
                  motivator was not convenience — it was{' '}
                  <strong className="text-ink-950">fear.</strong> The fear of a
                  damaged windshield failing during an accident. I rebuilt the
                  campaign around that emotional core — and the result speaks
                  for itself:
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span>
                      <strong className="text-ink-950">
                        $523 million in tracked sales
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span>
                      Campaign ran for{' '}
                      <strong className="text-ink-950">
                        nine consecutive years
                      </strong>{' '}
                      without fatigue
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span>
                      Contributed to{' '}
                      <strong className="text-ink-950">
                        saving hundreds of lives
                      </strong>{' '}
                      through timely replacements
                    </span>
                  </li>
                </ul>
              </FadeIn>
              <FadeIn delay={400}>
                <p>
                  The CEO of Belron told me:{' '}
                  <em>
                    &ldquo;You are our secret weapon.&rdquo;
                  </em>{' '}
                  That same research-first, insight-driven approach is what I
                  bring to every project today — whether it is a ClickBank VSL
                  or a multi-channel DTC funnel.
                </p>
                <p className="mt-5">
                  <Link
                    href="/case-studies/belron-safelite-523m-campaign"
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Read the full case study
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Client Logos ───────────────────────────── */}
      <ClientLogoBar variant="light" />

      {/* ───────────────────────────── Career Timeline ───────────────────────────── */}
      <CareerTimeline />

      {/* ───────────────────────────── Working with Clients Worldwide ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
                Working with Clients Worldwide
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  I work with marketers, founders, and business owners
                  across the globe — from{' '}
                  <strong className="text-ink-950">
                    the United States and the United Kingdom to the United Arab
                    Emirates and Australia.
                  </strong>{' '}
                  Direct response transcends borders because{' '}
                  <strong className="text-ink-950">
                    human psychology is universal.
                  </strong>
                </p>
                <p>
                  For my clients, it means one thing:{' '}
                  <strong className="text-ink-950">
                    senior DR craft delivered on time, every time
                  </strong>{' '}
                  — no matter what time zone you are in. Video calls, shared
                  documents, fast turnarounds. The handoffs are clean, and the
                  numbers travel.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Specialties & Verticals ───────────────────────────── */}
      <SpecialtyGrid />

      {/* ───────────────────────────── Testimonials ───────────────────────────── */}
      <AboutTestimonials />

      {/* ───────────────────────────── My Approach / Working With Me ───────────────────────────── */}
      <Section divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
                What It&apos;s Like Working With Me
              </h2>
            </FadeIn>
            <div className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
              <FadeIn delay={100}>
                <p>
                  I do not do content production, blog posts for SEO, or low-level
                  copywriting tasks. Every project I take on is a{' '}
                  <strong className="text-ink-950">
                    strategic, high-impact engagement
                  </strong>{' '}
                  designed to deliver measurable ROI.
                </p>
                <p className="mt-5">Here is what you can expect:</p>
              </FadeIn>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Deep Research First',
                    text: 'Every project begins with thorough audience research, competitive analysis, and offer assessment. I do not start writing until I understand your market inside and out.',
                  },
                  {
                    title: 'Full-Stack Funnel Thinking',
                    text: 'I do not write copy in isolation. I think about your entire funnel — from the ad platform to the upsell flow — and optimize every touchpoint for maximum revenue.',
                  },
                  {
                    title: 'Fast, Reliable Delivery',
                    text: 'Multiple clients have commented on how fast I work without sacrificing quality. AI-powered research accelerates my process without cutting corners on strategy.',
                  },
                  {
                    title: 'Measurable Results',
                    text: 'I write copy designed to move specific metrics — conversions, AOV, ROAS, revenue. Every engagement is accountable to real numbers, not vanity metrics.',
                  },
                ].map((item, index) => (
                  <FadeIn key={item.title} delay={200 + index * 100}>
                    <div className="flex items-start gap-4 rounded-lg border border-paper-200 bg-white p-5 shadow-sm">
                      <div className="mt-0.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-heading text-base font-bold text-ink-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-700 font-body leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── CTA ───────────────────────────── */}
      <CTABanner
        headline="Ready to put all three brains to work on your creative?"
        subtext="Book a free strategy call. No pressure and no obligation: an honest conversation about whether I'm the right fit for your creative."
      />
    </>
  )
}
