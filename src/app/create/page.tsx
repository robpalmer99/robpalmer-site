import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { testimonials } from '@/content/testimonials'

// Outreach landing page for the DTC teardown system — unlisted, noindex,
// standalone chrome. Same fixed-overlay pattern as /connect: covers the
// root layout's Header/Footer and owns its own scroll context.
// Copy source of truth: docs/copy/2026-09-28-create-page-copy.md — do not
// edit copy here without updating the doc. Single CTA in the final section
// only (Rob, 2026-09-28). Retainer-spot count in the scarcity section needs
// manual updating when the roster changes.

export const metadata: Metadata = {
  title: { absolute: 'Creative Strategy for DTC Brands | Rob Palmer' },
  description:
    "Meta's Andromeda algorithm demands constant fresh creative. I feed it: 40 years of direct response plus a one-of-a-kind AI production system, for a small number of DTC brands.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://robpalmer.com/create' },
}

const PROOF_IDS = ['4', '38', '5', '15', '2', '6'] as const
const proof = PROOF_IDS.map((id) => testimonials.find((t) => t.id === id)!).filter(Boolean)

// Evaluated once at build time so it's deterministic across SSR and
// client hydration (same convention as layout/Footer).
const COPYRIGHT_YEAR = new Date().getFullYear()

export default function CreatePage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-paper-50">
      {/* Root layout renders Header/Footer; the overlay covers them and
          body-scroll lock removes the phantom scroll behind it. */}
      <style>{`body { overflow: hidden; }`}</style>

      {/* Hero band: minimal chrome + headline, no CTA — the pitch completes first */}
      <section className="bg-ink-950 text-paper-100 noise-overlay">
        <Container>
          <header className="py-6">
            <Link href="/" className="inline-block" aria-label="Rob Palmer home">
              <Logo className="h-9 w-auto" variant="light" />
            </Link>
          </header>
        </Container>
        <Container>
          <div className="py-16 md:py-24">
            <FadeIn immediate>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                For DTC founders scaling paid social
              </p>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-paper-50 md:text-5xl lg:text-6xl">
                Your Winning Ads Die in Weeks Now. The Fix Is 40 Years Old &mdash; Plus an AI
                Meta Never Saw Coming.
              </h1>
              <p className="mt-8 max-w-2xl font-body text-xl leading-relaxed text-paper-300">
                How to keep the Andromeda monster fed: fresh, hypothesis-driven ad concepts
                every single week, at a pace no agency or in-house team can match.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 2. Problem */}
      <section className="bg-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                Andromeda Is Always Hungry
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
                <p>
                  When Meta rebuilt its delivery engine around Andromeda, it quietly changed
                  what advertisers are paid for. Creative is now the targeting. The algorithm
                  hunts for genuinely different concepts to match to different pockets of
                  buyers, and it burns through them at a rate no normal team was built for.
                </p>
                <p>
                  The working numbers: a brand spending $50K a month on paid social needs 15
                  to 25 net-new concepts every month to stay ahead of fatigue. At $500K,
                  it&rsquo;s 40 to 60. Not resizes. Not &ldquo;we changed the hook.&rdquo; New
                  concepts, built on new angles.
                </p>
                <p>
                  Feed it variations of last quarter&rsquo;s winner and delivery narrows, CPA
                  drifts up, and the account that used to print money starts leaking it. The
                  monster isn&rsquo;t punishing you. It&rsquo;s just hungry, and you stopped
                  bringing food.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 3. Agitate */}
      <section className="bg-gradient-to-b from-paper-100 to-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                Everyone Needs the Same Rare Person
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
                <p>
                  The fix has a job title: creative strategist. Someone who owns what gets
                  made next and why, so the volume you ship is volume that teaches you
                  something.
                </p>
                <p>
                  Except almost nobody holding the title can actually do the job. LinkedIn
                  currently lists more than 11,000 open creative strategist roles in the US
                  alone, and the supply side is flooded with the wrong people. One agency
                  owner publicly documented interviewing 100 candidates in a single summer;
                  most had never run a test on real budget. The title is five years old and
                  fashionable, so it attracts people who learned it from LinkedIn posts
                  rather than from a losing test at 2 a.m.
                </p>
                <p>
                  What the job actually demands is a combination that barely exists.
                  Career-long direct response craft, so concepts come from persuasion
                  principles instead of guesswork. The analytical rigor to read an ad account
                  and pull the next hypothesis out of it. And advanced, hands-on AI tooling,
                  so throughput reaches Andromeda numbers without turning to slop.
                </p>
                <p>
                  The people with the craft mostly retired before the tooling arrived. The
                  people with the tooling mostly never wrote a control. That gap is why every
                  brand at scale is hunting the same handful of operators.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4. Solution */}
      <section className="bg-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                I&rsquo;m One of the Few
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
                <p>
                  My name is Rob Palmer. I&rsquo;ve been writing direct response for more
                  than forty years. The campaigns I&rsquo;ve worked on have tracked over $523
                  million in sales: for Apple, IBM, Microsoft, Citibank and Morgan Stanley
                  when the work was direct mail, and for the operators behind some of
                  ClickBank&rsquo;s biggest offers now that it&rsquo;s Meta and YouTube.
                  Stefan Georgi&rsquo;s team hired me as Copy Chief for CA Labs. Justin Goff
                  says I &ldquo;knocked it out of the park.&rdquo; The current workload
                  includes beat-the-control advertorials for scaled supplement brands.
                </p>
                <p>
                  And unlike almost everyone my age in this craft, I spent the last two years
                  building the AI side myself instead of watching it happen.
                </p>
                <p>
                  If a teardown of your funnel brought you here, you&rsquo;ve already watched
                  me work. That document was one turn of my testing loop, run cold, from the
                  outside, in a single evening. Now imagine it running inside your account
                  every week.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 5. Only available here: the three brains */}
      <section className="bg-ink-950 text-paper-100 noise-overlay py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-paper-50 md:text-4xl">
                Only Available Here: The Three Brains
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-paper-300">
                The system I run doesn&rsquo;t exist anywhere else. Three specific
                capabilities have to live in one head for it to work, and they almost never
                do:
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Brain one: the craft.',
                  body: 'Forty years of DR persuasion (Schwartz, Halbert, Hopkins, Caples) internalized across thousands of campaigns. Hooks that stop the scroll come from this, and nowhere else.',
                },
                {
                  name: 'Brain two: the machine.',
                  body: 'My own Claude Code skill files, encoding the frameworks, evaluation criteria and pattern libraries from those campaigns into a working AI production system. That machine is how one operator ships agency volume without agency slop. Some of the skills are public, so you can inspect the substance instead of taking my word for it.',
                },
                {
                  name: 'Brain three: the numbers.',
                  body: 'I read ad-account data the way a trader reads order flow. Every result becomes the next hypothesis, so the account gets smarter with every dollar it spends.',
                },
              ].map((brain, index) => (
                <FadeIn key={brain.name} delay={index * 100}>
                  <div className="h-full rounded-xl border border-ink-700 bg-ink-900/60 p-6">
                    <h3 className="font-heading text-lg font-semibold text-gold-400">
                      {brain.name}
                    </h3>
                    <p className="mt-3 font-body leading-relaxed text-paper-300">
                      {brain.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          <FadeIn>
            <p className="mt-10 max-w-3xl font-body text-lg leading-relaxed text-paper-100">
              Plenty of people have one brain. A few have two. I have never met another
              operator running all three. And all three is exactly the combination
              Andromeda made mandatory.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 5a. What a week looks like */}
      <section className="bg-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                What a Week on the Roster Looks Like
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
                <p>
                  I read your ad account the way I read a funnel: winners, losers, and the
                  belief your buyer is still missing. Each read becomes a hypothesis. Each
                  hypothesis becomes finished creative: net-new ad concepts, pre-sell pages,
                  advertorials, a rebuilt close where the data says the leak is. The monster
                  gets fed every single week, and everything it eats is built on a reason.
                </p>
                <p>
                  Your media buyer keeps the spend and the account. I own what gets tested
                  and why. Every winner breeds the next test. Every loser teaches you
                  something specific about your buyer, so the budget compounds into insight
                  instead of evaporating.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 5b. Proof */}
      <section className="bg-gradient-to-b from-paper-100 to-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
              What My Clients Say
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proof.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 80}>
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Scarcity */}
      <section className="bg-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                There Is Only One of Me
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
                <p>
                  The AI scales the output. It doesn&rsquo;t scale me. And the strategy
                  layer, the part that decides what gets tested and why, is me. Every brand
                  on the roster gets my personal attention on their account every week, which
                  puts a hard ceiling on how many brands there can be.
                </p>
                <p>
                  As I write this, the calendar has room for one more retainer. Possibly two.
                  After that, new inquiries get a referral to people I trust, and a wait.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 7. The call — the page's single CTA */}
      <section className="bg-ink-950 text-paper-100 noise-overlay py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-paper-50 md:text-4xl">
                The Half Hour
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-300">
                <p>
                  One qualifier first: this is for founder-run DTC brands spending real money
                  on ads that perform, into a funnel that leaks. If that&rsquo;s you, book
                  the call.
                </p>
                <p>
                  Thirty minutes, free, no deck. I&rsquo;ll have read your funnel before we
                  talk, and you&rsquo;ll leave with at least one thing worth testing whether
                  or not we ever work together.
                </p>
                <p className="text-paper-100">
                  If the monster is already eating your ROAS, the worst move is waiting until
                  it&rsquo;s finished.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/call" size="lg">
                  Book the Half Hour
                </Button>
              </div>
              <p className="mt-6 font-body text-paper-300">
                Or just reply to the email that brought you here. It comes to me, not an
                assistant.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Slim footer */}
      <footer className="border-t border-ink-700 bg-ink-950 py-8 text-paper-300">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
            <p>&copy; {COPYRIGHT_YEAR} Rob Palmer &middot; rob@robpalmer.com</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-paper-100">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-paper-100">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
