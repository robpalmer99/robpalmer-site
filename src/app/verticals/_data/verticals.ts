import type { FAQItem } from '@/components/blocks/FAQAccordion'

export interface Vertical {
  title: string
  slug: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  headline: string
  subheadline: string
  heroImage: string
  heroImageAlt: string
  definition?: {
    term: string
    text: string
  }
  sections: {
    heading: string
    content: string
    bullets?: string[]
  }[]
  deliverables: {
    title: string
    description: string
  }[]
  testimonialIds: string[]
  portfolioItems: {
    title: string
    category: string
  }[]
  faqs: FAQItem[]
  relatedServices?: string[]
  relatedVerticals?: string[]
  heroStats?: {
    primary: { value: string; label: string }
    secondary?: { value: string; label: string }[]
  }
  credentialBar?: {
    heading?: string
    items: string[]
  }
  caseStudies?: {
    name: string
    category: string
    metric: string
    detail?: string
  }[]
  deliverablesHeading?: string
  deliverablesSubtext?: string
  midCta?: {
    headline: string
    subtext: string
  }
  heroCta?: {
    label: string
    href: string
  }
}

export const verticals: Vertical[] = [
  {
    title: 'Health Supplement Copywriter',
    slug: 'health-supplement-copywriter',
    shortDescription:
      'Health supplement copy anchored on the $40M Gluco 6 funnel. FDA-fluent VSLs, sales pages, and back-end stacks that convert cold traffic and clear platform review on the first pass.',
    metaTitle: 'Health Supplement Copywriter | $40M Gluco 6 + FDA Fluent',
    metaDescription:
      'Senior health supplement copywriter behind the $40M Gluco 6 supplement funnel. FDA structure/function-fluent VSLs, sales pages, and upsell stacks for supplement brands. Fixed-price engagements, two-week kickoffs.',
    headline: 'Health Supplement Copywriter Behind the $40M Gluco 6 Funnel',
    subheadline:
      '"Rob is probably the most methodical copywriter I\'ve seen. This impresses me." That\'s Mark Shay on a piece of supplement copy I shipped him. The Gluco 6 supplement funnel I worked on did <strong>$40 million</strong> end-to-end. If your supplement offer converts in testing but the platform reviewer kills it before it scales — or it scales and your AOV stalls $50 below where it needs to be — this is the kind of work I do.',
    heroImage: '/images/industries/health-supplements.jpg',
    heroImageAlt: 'Health supplements and natural products',
    heroStats: {
      primary: { value: '$40M', label: 'Gluco 6 Supplement Funnel (End-to-End)' },
      secondary: [
        { value: '30–100%', label: 'AOV Lift on Supplement Upsell Stacks' },
        { value: '300%', label: 'ROAS on a ClickBank Health Funnel (Ben Palmer)' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Supplement copy written for',
      items: [
        'Gluco 6 Supplement Funnel ($40M End-to-End)',
        'Ben Palmer / ClickBank Platinum Vendors',
        'Konscious Keto (Ryan Kowalski)',
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
        'Mark Shay / Supplement Marketers',
        'FDA / FTC Structure-Function Fluent',
      ],
    },
    definition: {
      term: 'health supplement copywriting',
      text: 'Health supplement copywriting is direct-response copy written specifically for nutritional supplements, nutraceuticals, and health products. It demands balancing aggressive cold-traffic conversion against <a href="https://www.fda.gov/food/dietary-supplements" target="_blank" rel="noopener noreferrer">FDA</a> structure/function-claim limits, <a href="https://www.ftc.gov/business-guidance/advertising-and-marketing/health-claims" target="_blank" rel="noopener noreferrer">FTC</a> substantiation rules, and ad-platform policy reviewers — writing copy persuasive enough to scale but careful enough to clear review on Meta, Google, YouTube, and ClickBank.',
    },
    sections: [
      {
        heading: 'Why Most Supplement Funnels Die Twice',
        content:
          'You\'re a supplement marketer. You have an offer, an ingredient stack, an angle. Your team writes the VSL. Then one of two things happens.\n\n' +
          'Door one: the copy is aggressive enough to convert in private testing — then it doesn\'t survive review. Meta flags the hook. ClickBank kicks back the sales page. The FDA disclaimer language is wrong, the testimonials need stronger hedging, and the angle that beat your current control just got rejected. Two weeks of rewrites. Three. Now your launch window is gone.\n\n' +
          'Door two: the copy clears review by going so safe it doesn\'t convert. CPM is fine. Click-through is fine. But cold-traffic CVR is 0.6% on a funnel that needs 1.5% to break even, and your AOV is sitting at $97 when it should be $147 because the back-end upsell stack was bolted on after the front-end shipped.\n\n' +
          'Either way, every dormant day costs you. At $5K/day in ad spend on a funnel that\'s 0.5 points off where it needs to be, that\'s $25K/week burning while the revenue compounds for the brand that figured the math out two months earlier.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most supplement copywriters can write aggressively OR compliantly — not both at once. The skill the back-end actually rewards is writing copy where every claim lives inside structure/function-claim territory, every testimonial is hedged at the writing layer (not bolted on by legal at the end), and every step of the funnel — VSL, sales page, order bump, OTO1, OTO2, downsell, post-purchase email — is engineered to lift AOV from day one.',
      },
      {
        heading: '$40M Gluco 6, $30M+ Mobile Profits Health-Adjacent — Recent Supplement Wins',
        content:
          'The <strong>Gluco 6 supplement funnel</strong> I worked on did <strong>$40 million</strong> end-to-end. Blood-sugar mechanism, cold-traffic VSL, subscription-priced front end, multi-step back-end stack with the upsell sequence I architected. The compliance posture was tight from the first draft \u2014 not retrofitted.\n\n' +
          'The <strong>Mobile Profits VSL</strong> I wrote \u2014 the offer that became <strong>#1 on ClickBank</strong> and did over <strong>$30 million</strong> \u2014 ran in a biz-op-adjacent vertical with comparable platform-review pressure. Up to 4% conversion on cold traffic. The ad copy feeding it cleared Meta\'s automated review every time.\n\n' +
          'For Ben Palmer, a ClickBank Platinum vendor, the email-driven funnel I wrote drove <strong>300% Return on Ad Spend</strong>. He put it on record: <em>"Rob is a killer copywriter."</em>\n\n' +
          'And Mark Shay \u2014 a supplement marketer who has seen more copy than most \u2014 put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em> Methodical is the operative word. In supplements, compliance isn\'t a feature you add at the end; it\'s a discipline embedded in every line of copy from the first sentence.\n\n' +
          'If you have a supplement funnel running and the numbers aren\'t where they need to be, I work as a control-beater. Send me your current VSL or sales page, your ad accounts, and your back-end metrics. I\'ll tell you on the strategy call exactly where compliance is leaking conversion, where AOV is leaking margin, and whether I can write something that beats your control. Compliance review on the call comes free.',
      },
      {
        heading: 'The Supplement Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'Ryan Kowalski at Konscious Keto looked at my copy and said: <em>"That\'s solid copy. I have a feeling this is going to be a winner. Great job!"</em>\n\n' +
          'These are operators with their own money on the line. In supplements, that money exits the business inside 60 days if compliance fails or AOV stalls. DR operators at this level keep handing me supplement work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect a Supplement Funnel That Beats Your Current Control',
        content:
          'Every supplement engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Compliance + audience research: I audit your current funnel against FDA structure/function-claim limits, FTC substantiation requirements, and the specific platform-review postures of Meta, Google, YouTube, and ClickBank. Then I mine reviews, forums, and competitor sequences for the exact language your supplement buyers use about the pain. The compliant angle and the persuasive angle come out of the same layer \u2014 not separate ones. My AI workflow processes 50+ competitor VSLs and thousands of reviews while a manual pass reads three.',
          'Phase 2 \u2014 Funnel architecture + AOV math: Before writing a word, I map every step \u2014 VSL hook, lead magnet, sales page, order bump, OTO1, OTO2, downsell, thank-you page, post-purchase email \u2014 against the AOV target. Most supplement funnels die because the front-end was written for conversion and the back-end was bolted on afterward. The architecture phase prevents that.',
          'Phase 3 \u2014 Compliant-by-design drafting: every claim lives inside structure/function-claim territory. Every testimonial carries hedged framing built into the writing, not retrofitted by legal at the end. Every CTA earns the click only after the persuasion is done. I draft VSL, sales page, ad copy, and back-end stack as a connected system \u2014 not as separate pieces handed to different writers.',
          'Phase 4 \u2014 Platform-review map + revisions: a compliance-review map flagging anything your legal team should review, including alternative phrasings for any line a reviewer might challenge. One revision round across the full funnel is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for Supplement Brands',
        content:
          'Supplement businesses don\'t buy copy by category \u2014 they buy connected funnel systems. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for supplement and nutraceutical brands. Click through to any of them for the asset-specific page.',
        bullets: [
          '<a href="/services/vsl-copywriter">VSL Copywriter</a> \u2014 the front-end VSL is where the supplement funnel converts (or doesn\'t). Gluco 6 anchors the supplement VSL track.',
          '<a href="/services/sales-funnel-copywriter">Sales Funnel Copywriter</a> \u2014 end-to-end supplement funnel architecture. The $40M Gluco 6 funnel is the canonical example.',
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 supplement launch sequences, post-purchase upsell streams, subscription-retention emails (300% Ben Palmer ROAS proof).',
          '<a href="/services/upsell-downsell-copywriter">Upsell & Downsell Copywriter</a> \u2014 supplement back-end stacks. 30\u2013100% AOV lifts on existing traffic. Subscription-priced front ends compound this.',
          '<a href="/services/sales-page-copywriter">Sales Page Copywriter</a> \u2014 long-form supplement sales pages with structure/function-claim discipline built in.',
          '<a href="/services/facebook-ads-copywriter">Facebook Ads Copywriter</a> \u2014 compliance-aware Meta + Instagram ad suites for supplement cold traffic. Decade of FB-review-cleared work.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Gluco 6 Supplement Funnel',
        category: 'End-to-End Supplement Funnel',
        metric: '$40M',
        detail: 'Blood-sugar supplement, cold-traffic VSL, subscription front end, multi-step back-end stack. Compliance posture tight from the first draft.',
      },
      {
        name: 'Mobile Profits Health-Adjacent VSL',
        category: 'ClickBank #1 (Compliance-Adjacent Vertical)',
        metric: '$30M+',
        detail: 'Up to 4% conversion on cold traffic. Ad copy feeding the VSL cleared Meta\'s automated review every time.',
      },
      {
        name: 'Ben Palmer / ClickBank Health Funnel',
        category: 'Email-Driven Supplement Funnel',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."',
      },
      {
        name: 'Konscious Keto / Ryan Kowalski',
        category: 'Supplement Copy Approval',
        metric: '"Going to be a winner"',
        detail: '"That\'s solid copy. I have a feeling this is going to be a winner. Great job!"',
      },
    ],
    deliverables: [
      { title: 'Supplement VSL Scripts', description: 'Long-form video sales letters with structure/function-claim discipline built into every line. Cold-traffic-engineered hooks.' },
      { title: 'Long-Form Sales Pages', description: 'Compliance-aware supplement sales pages \u2014 leads, body, proof stack, close \u2014 written as one connected persuasion system.' },
      { title: 'Back-End Upsell Stack', description: 'Order bump + OTO1 + OTO2 + downsell + thank-you page sequence engineered to lift AOV by 30\u2013100% on existing traffic.' },
      { title: 'Email Sequences', description: 'Launch, nurture, post-purchase upsell, and subscription-retention sequences for the supplement back-end.' },
      { title: 'Compliance-Aware Ad Copy', description: 'Cold-traffic Meta, YouTube, and native ad copy designed to clear platform review while still earning the click.' },
      { title: 'Affiliate Tools Package', description: 'Swipe copy, email templates, and promotional materials calibrated to recruit and retain affiliates on supplement offers.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the supplement marketer who needs aggressive conversion AND clean platform compliance \u2014 not one or the other.',
    testimonialIds: ['6', '17', '4', '2', '3'],
    portfolioItems: [
      { title: 'Weight-Loss VSL', category: 'VSL' },
      { title: 'Dynamic Brain', category: 'VSL' },
      { title: 'Puradrop', category: 'VSL' },
      { title: 'Supernus', category: 'VSL' },
      { title: 'BodyHacker', category: 'VSL' },
      { title: 'Coffee Slimmer Pro', category: 'VSL' },
    ],
    heroCta: { label: 'Audit my supplement funnel', href: '/contact' },
    midCta: {
      headline: 'Ready for a supplement funnel that beats your current control?',
      subtext:
        'Book a free strategy call. Send me your current VSL or sales page and the back-end metrics \u2014 I\'ll tell you honestly where compliance is leaking conversion, where AOV is leaking margin, and whether I can write something that beats your control. Compliance review on the call comes free.',
    },
    faqs: [
      {
        question: 'What does a health supplement copywriter actually do?',
        answer:
          'A senior supplement copywriter writes the connected funnel system that converts cold traffic into a subscription-priced supplement buyer \u2014 VSL or TSL on the front end, sales page, order bump, OTO1, OTO2, downsell, thank-you page, post-purchase email sequence \u2014 every line written inside FDA structure/function-claim territory by design, not retrofitted by legal at the end. The Gluco 6 supplement funnel I worked on did $40M end-to-end. The Mobile Profits ClickBank VSL did $30M. Same disciplined approach in both.',
      },
      {
        question: 'Are you taking new supplement clients?',
        answer:
          'I take a selective number of new supplement engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write supplement copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, supplement-vertical hook patterns, structure/function-claim hedging language, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor supplement VSLs and thousands of reviews while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does supplement copywriting cost?',
        answer:
          'Supplement engagements are fixed-price. A full supplement VSL or sales page starts at $10K. A full supplement funnel (VSL + sales page + back-end stack + email sequence) typically starts at $25K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a supplement funnel that lifts cold-traffic CVR from 0.6% to 1.5% pays for the writer in the first week of scaled spend. A back-end stack that lifts AOV by 30% on existing traffic is pure margin.',
      },
      {
        question: 'How long does it take to write a supplement VSL or full funnel?',
        answer:
          'A supplement VSL alone takes 3\u20134 weeks from kickoff to final draft \u2014 longer than a generic VSL because compliance research is a phase, not a sentence. A full supplement funnel (VSL + sales page + back-end stack + email sequence) runs 6\u20139 weeks. The compliance-and-audience-research phase always comes first. That\'s where the conversion-and-platform-clearance lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'How do you handle FDA and FTC compliance in supplement copy?',
        answer:
          'I\'m not a lawyer and I always recommend legal review before publishing. But I\'ve been writing inside FDA structure/function-claim limits and FTC substantiation requirements long enough that the discipline is in the writing layer, not the review layer. Every claim lives inside structure/function-claim territory. Testimonials carry hedged framing built into the writing. Disease claims, unsubstantiated promises, and platform-trigger phrasings are absent because they were never drafted in. I provide a compliance-review map flagging anything your legal team should review, with alternative phrasings for any line a reviewer might challenge.',
      },
      {
        question: 'What asset types do you write for supplement brands?',
        answer:
          'Front-end: cold-traffic VSLs (Gluco 6 anchors the track), TSLs, long-form sales pages, advertorial bridges. Ad copy: compliance-aware Meta, YouTube, and native suites. Back-end: order bump, OTO1, OTO2, downsell, thank-you page, post-purchase email sequence, subscription-retention emails. Affiliate: swipe copy, email templates, promotional materials. Every asset is written to function as part of the connected funnel system \u2014 not as a standalone deliverable.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is compliance and audience research, then funnel architecture and AOV math, then the compliant-by-design drafting, then a compliance-review map and one revision round across the full funnel. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-funnel-copywriter', 'email-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'ecommerce-dtc-copywriter'],
  },
  {
    title: 'Financial Copywriter',
    slug: 'financial-copywriter',
    shortDescription:
      'Financial copy anchored on the 5.7% Monetari Fund opt-in-to-sale + Morgan Stanley and Citibank Fortune 500 lineage. VSLs, long-form promotions, and email sequences that convert the most skeptical audience in DR while clearing SEC, FINRA, and FTC review.',
    metaTitle: 'Financial Copywriter | 5.7% Monetari + Morgan Stanley + Citibank',
    metaDescription:
      'Senior financial copywriter behind the 5.7% opt-in-to-sale Monetari Fund bridge + Fortune 500 lineage at Morgan Stanley and Citibank. SEC/FINRA-posture-aware VSLs, long-form promotions, and email sequences. Fixed-price engagements, two-week kickoffs.',
    headline: 'Financial Copywriter Behind 5.7% Monetari + Morgan Stanley + Citibank',
    subheadline:
      '"Rob is amazing. He got right to the crux of my copy problem." That\'s Andrew Stotz, CEO of Stotz Financial Research, on copy I shipped him. The Monetari Fund financial bridge I wrote delivered <strong>5.7% opt-in-to-sale</strong> on a regulated financial offer. Earlier in my career Morgan Stanley and Citibank handed me direct-response work. If your trading newsletter, fund LP, or financial advisory bleeds CTR because copy can\'t be aggressive enough \u2014 or it scales and lands in front of an SEC reviewer who doesn\'t love it \u2014 this is the kind of work I do.',
    heroImage: '/images/industries/financial-services.jpg',
    heroImageAlt: 'Financial markets and trading data',
    heroStats: {
      primary: { value: '5.7%', label: 'Monetari Fund Opt-in-to-Sale (Compliance-Aware Financial Bridge)' },
      secondary: [
        { value: '$27M', label: 'Stock-Investing VSL (Financial Publisher Long-Form)' },
        { value: 'Fortune 500', label: 'Morgan Stanley + Citibank DR Lineage' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Financial copy written for',
      items: [
        'Monetari Fund (5.7% Opt-in-to-Sale)',
        'Morgan Stanley / Fortune 500',
        'Citibank / Fortune 500',
        'Stotz Financial Research (Andrew Stotz)',
        'Red Oak Capital (Francis Fanzilli)',
        'Overages Blueprint (Bob Diamond)',
      ],
    },
    definition: {
      term: 'financial copywriting',
      text: 'Financial copywriting is direct-response copy for financial publishers, fund operators, trading platforms, advisory services, and insurance products. It demands writing to the most skeptical audience in DR \u2014 prospects who have been burned by every financial promise \u2014 while every claim sits inside the disclosure standards your asset class actually has to meet. <a href="https://www.sec.gov" target="_blank" rel="noopener noreferrer">SEC</a>, <a href="https://www.finra.org" target="_blank" rel="noopener noreferrer">FINRA</a>, and <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer">FTC</a> aren\'t suggestions; they\'re the gauntlet your copy clears before the prospect ever reads it.',
    },
    sections: [
      {
        heading: 'Why Most Financial Copy Either Reads Like a 10-K or Triggers a Reviewer',
        content:
          'You\'re a financial publisher, fund operator, or trading-platform marketer. Your prospects are the most skeptical audience in direct response \u2014 they\'ve heard every claim, seen every chart pattern, and been burned by enough bad advice to develop strong defenses against marketing. And your copy has to clear three more gauntlets before it ever reaches them.\n\n' +
          'SEC. FINRA. FTC. Plus your in-house compliance officer. Plus the platform reviewer at Meta or Google.\n\n' +
          'Most financial copywriters can write to ONE of these constraints \u2014 the audience or the regulators. Not both. So one of two things happens.\n\n' +
          'Door one: the copy is aggressive enough to convert \u2014 then a compliance officer rewrites half of it. Hedging language gets piled on. Performance claims get hedged into oblivion. The angle that beat your existing control just got softened into nothing. Six weeks of revisions. Now your launch window is gone, your CPM ticked up while the offer sat dormant, and the publisher you compete with shipped first.\n\n' +
          'Door two: the copy clears compliance by going so safe it reads like a 10-K. CTR is half what your previous control did. Opt-in-to-sale falls below 1.5% on a list that should clear 4\u20135%. The renewal sequence converts at 3% when the publisher\'s category benchmark is 11%. You spent $80K on a long-form promotion that breaks even at best.\n\n' +
          'Either way, every dormant week costs the publisher. A financial offer at $1,000 average ticket on a 10K\u201350K subscriber list leaves $200K\u2013$1M on the table per failed promotion. The compliance-and-conversion gap isn\'t a copy issue you can workshop. It\'s a discipline most copywriters never built because they never had to write inside SEC and FINRA constraints with a Fortune 500 reviewer holding the red pen.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most financial copywriters can write aggressively OR compliantly \u2014 not both at once. The skill the financial back-end actually rewards: writing copy that converts the most skeptical audience in DR. Every claim lives inside SEC, FINRA, and FTC territory by design \u2014 not bolted on by legal at the end.',
      },
      {
        heading: '5.7% Monetari, $27M Stock-Investing VSL, Fortune 500 Lineage \u2014 Recent Financial Wins',
        content:
          'For <strong>Monetari Fund</strong> \u2014 a regulated financial offer with full disclosure obligations \u2014 the financial bridge page I wrote delivered <strong>5.7% opt-in-to-sale</strong>. Compliance-aware copy on a regulated offer. The numbers landed inside what the offer\'s economics needed and the compliance review let through.\n\n' +
          'Earlier in my career, <strong>Morgan Stanley</strong> and <strong>Citibank</strong> handed me direct-response work. Wall Street institutional marketing trained me on the discipline of writing inside tight compliance frameworks while still driving measurable response. The tactics adapt; the discipline doesn\'t.\n\n' +
          'A long-form stock-investing VSL I architected for a financial publisher did <strong>$27 million</strong>. Long-form financial promotion \u2014 the Agora and Stansberry tradition \u2014 is the asset type where compliance discipline and persuasion craft compound the hardest.\n\n' +
          'Andrew Stotz, CEO of Stotz Financial Research, put it on record: <em>"Rob is amazing. He got right to the crux of my copy problem."</em> Stotz runs research and copy in regulated financial verticals. The "crux" diagnosis is what financial-vertical copywriting actually requires \u2014 not surface fixes.\n\n' +
          'Francis Fanzilli at Red Oak Capital reviewed a VSL script I shipped: <em>"The VSL script looks great overall and I like it. I think we\'re good."</em> Red Oak is a regulated investment partner \u2014 "I think we\'re good" from a partner-level reviewer at a regulated fund clears the bar that compliance officers never want to be the bottleneck on.\n\n' +
          'If you have a financial offer running and the conversion isn\'t where the publisher economics need it to be, I work as a control-beater. Send me your current promotion, the back-end metrics (CTR, opt-in-to-sale, renewal rate), and your compliance-review notes. I\'ll tell you on the strategy call exactly where the conversion is leaking, where compliance is over-hedging, and whether I can write something that beats your control. SEC/FINRA-posture review on the call comes free.',
      },
      {
        heading: 'The Financial Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'Bob Diamond at Overages Blueprint \u2014 a financial-overages education business \u2014 reviewed my work and came back with: <em>"I really like the copy. Looks very good."</em>\n\n' +
          'Mark Shay, who has seen more compliance-sensitive copy than most, put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em>\n\n' +
          'These are operators with their own money on the line \u2014 and in regulated financial verticals, that money also has the SEC, FINRA, and FTC watching. Financial publishers don\'t reward writers who can\'t draft inside compliance frameworks; the regulators clear them out faster than the marketplace does. DR operators at this level keep handing me financial work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect Financial Copy That Beats Your Current Control',
        content:
          'Every financial engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Compliance + audience research: I audit your current promotion against SEC and FINRA performance-claim limits, FTC substantiation requirements, and the disclosure standards your asset class actually has to meet. Then I mine investor forums, financial newsletters, and competitor promotions for the exact language your most-skeptical-buyer-in-DR uses about the pain. The compliant angle and the persuasive angle come out of the same layer \u2014 not separate ones. My AI workflow processes 50+ competitor financial promotions and thousands of investor-forum threads while a manual pass reads three.',
          'Phase 2 \u2014 Trust architecture: financial buyers don\'t buy from confident pitches; they buy from credible authorities. I map every step of the promotion against the trust signals it needs to hit before the offer reveal \u2014 track record, mechanism credibility, regulatory framing, peer endorsement. Every piece is engineered to compound trust before the offer earns the click.',
          'Phase 3 \u2014 SEC/FINRA-aware drafting: every performance claim sits inside SEC and FINRA territory by design. Every testimonial carries hedged framing built into the writing, not retrofitted by legal at the end. Every income illustration is presented inside the disclosure framework regulators actually expect. I draft VSL or long-form promotion, sales page, email sequence, and ad copy as a connected system \u2014 not as separate pieces handed to different writers (and different reviewers).',
          'Phase 4 \u2014 Compliance-review map + revisions: a compliance-review map flagging anything your in-house reviewer or outside counsel should review, including alternative phrasings for any line that might generate friction. One revision round across the full promotion is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for Financial Publishers and Fund Operators',
        content:
          'Financial publishers and fund operators don\'t buy copy by category \u2014 they buy regulated promotion systems. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for financial publishers, fund operators, and trading-platform marketers.',
        bullets: [
          '<a href="/services/vsl-copywriter">VSL Copywriter</a> \u2014 long-form video sales letters for financial publishers. The $27M stock-investing VSL anchors the financial VSL track.',
          '<a href="/services/sales-letter-copywriter">Sales Letter Copywriter</a> \u2014 long-form Agora/Stansberry-tradition financial promotions. The asset where compliance discipline and persuasion craft compound the hardest.',
          '<a href="/services/sales-page-copywriter">Sales Page Copywriter</a> \u2014 long-form sales pages for financial offers. Compliance-aware structure with SEC/FINRA-posture from the first draft.',
          '<a href="/services/landing-page-copywriter">Landing Page Copywriter</a> \u2014 financial bridge pages and lead-magnet pages. Monetari Fund anchors the financial-bridge track at 5.7% opt-in-to-sale.',
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 financial-list launch sequences, renewal sequences, and educational nurture streams. Compliance posture extends across every touchpoint.',
          '<a href="/services/conversion-rate-optimization">Conversion Rate Optimization</a> \u2014 financial-promotion audits + control-beater pitch. Compliance and conversion both go up; nothing burns down.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Monetari Fund',
        category: 'Compliance-Aware Financial Bridge',
        metric: '5.7% Opt-in-to-Sale',
        detail: 'Regulated financial offer. Compliance-aware bridge page that landed inside what the offer\'s economics needed and the compliance review let through.',
      },
      {
        name: 'Stock-Investing VSL',
        category: 'Financial Publisher Long-Form',
        metric: '$27M',
        detail: 'Long-form video sales letter for a financial publisher in the Agora/Stansberry tradition. Compliance discipline + persuasion craft compounded across the full promotion.',
      },
      {
        name: 'Morgan Stanley + Citibank',
        category: 'Fortune 500 Institutional DR',
        metric: 'Wall Street Lineage',
        detail: 'Direct-response work for two Fortune 500 financial institutions. Trained in writing inside tight compliance frameworks while still driving measurable response.',
      },
      {
        name: 'Stotz Financial Research / Andrew Stotz',
        category: 'Senior Copy Diagnosis',
        metric: '"Got right to the crux"',
        detail: '"Rob is amazing. He got right to the crux of my copy problem." \u2014 Andrew Stotz, CEO, Stotz Financial Research.',
      },
    ],
    deliverables: [
      { title: 'Long-Form Financial Promotions', description: 'Agora/Stansberry-tradition long-form promotions \u2014 5,000\u201310,000+ words with compliance posture from the first draft.' },
      { title: 'Financial VSL & TSL Scripts', description: 'Long-form video and text sales letters for financial publishers, fund LPs, and trading-platform marketers. $27M stock-investing VSL anchors the track.' },
      { title: 'Sales Pages + Bridges', description: 'Long-form financial sales pages and bridge pages. Monetari Fund anchors the bridge track at 5.7% opt-in-to-sale.' },
      { title: 'Email Sequences', description: 'Launch, renewal, and educational nurture sequences for financial subscriber lists. Compliance posture across every touchpoint.' },
      { title: 'Compliant Ad Copy', description: 'Cold-traffic Meta, Google, and native ad copy designed to clear platform review on regulated financial offers.' },
      { title: 'Compliance-Review Map', description: 'Reviewer-flag annotations + alternative phrasings for any line that might generate friction with in-house reviewers or outside counsel.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the financial publisher or fund operator who needs aggressive conversion AND clean compliance posture across SEC, FINRA, and FTC \u2014 not one or the other.',
    testimonialIds: ['11', '36', '31', '6', '2', '3'],
    portfolioItems: [
      { title: 'Monetari Fund', category: 'Sales Page' },
    ],
    heroCta: { label: 'Audit my financial promotion', href: '/contact' },
    midCta: {
      headline: 'Ready for a financial promotion that beats your current control?',
      subtext:
        'Book a free strategy call. Send me your current VSL, sales page, or long-form promotion, the back-end metrics (CTR, opt-in-to-sale, renewal rate), and your compliance-review notes \u2014 I\'ll tell you honestly where conversion is leaking, where compliance is over-hedging, and whether I can write something that beats your control. SEC/FINRA-posture review on the call comes free.',
    },
    faqs: [
      {
        question: 'What does a financial copywriter actually do?',
        answer:
          'A senior financial copywriter writes the regulated promotion system that converts the most skeptical audience in DR \u2014 long-form VSL or sales letter on the front end, sales page or bridge, email-list launch and renewal sequences, ad copy \u2014 every line drafted inside SEC, FINRA, and FTC territory by design, not retrofitted by legal at the end. The Monetari Fund financial bridge I wrote delivered 5.7% opt-in-to-sale. The stock-investing VSL did $27M. Same disciplined approach across publishers, fund LPs, advisory services, and trading platforms.',
      },
      {
        question: 'Are you taking new financial clients?',
        answer:
          'I take a selective number of new financial engagements each quarter so the work stays at the level the proof and the compliance posture require. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write financial copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, financial-publisher hook patterns, SEC/FINRA disclosure language, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor financial promotions and thousands of investor-forum threads while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does financial copywriting cost?',
        answer:
          'Financial engagements are fixed-price. A standalone financial VSL or sales page starts at $10K. A full long-form Agora-style promotion starts at $25K. A complete financial promotion system (VSL or sales letter + bridge + email sequences + ad copy + compliance-review map) typically runs higher. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a financial offer at $1,000 average ticket on a 10K\u201350K list leaves $200K\u2013$1M on the table per failed promotion. A control-beater that lifts opt-in-to-sale from 1.5% to 4% pays for the writer in the first launch.',
      },
      {
        question: 'How long does it take to write a financial promotion?',
        answer:
          'A financial VSL or sales page takes 3\u20134 weeks from kickoff to final draft \u2014 longer than a generic VSL because compliance research is a phase, not a sentence. A full long-form Agora-style promotion runs 6\u20139 weeks. A complete financial promotion system (VSL + bridge + email sequences + ad copy + compliance-review map) runs 8\u201312 weeks. The compliance-and-audience-research phase always comes first. That\'s where the conversion-and-regulator-clearance lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'How do you handle SEC, FINRA, and FTC compliance in financial copy?',
        answer:
          'I\'m not a lawyer and I always recommend legal review before publishing. But I\'ve been writing inside SEC and FINRA performance-claim limits, FTC substantiation requirements, and the disclosure standards major asset classes actually have to meet \u2014 plus the in-house compliance posture Fortune 500 financial brands like Morgan Stanley and Citibank operate under \u2014 long enough that the discipline is in the writing layer, not the review layer. Every performance claim lives inside SEC and FINRA territory by design. Every testimonial carries hedged framing built into the writing. Income illustrations sit inside the disclosure framework regulators actually expect. I provide a compliance-review map flagging anything your in-house reviewer or outside counsel should review.',
      },
      {
        question: 'What asset types do you write for financial publishers and fund operators?',
        answer:
          'Front-end: long-form Agora/Stansberry-tradition promotions, financial VSLs ($27M stock-investing VSL anchors the track), TSLs, long-form sales pages, financial bridge and lead-magnet pages (Monetari Fund anchors at 5.7% opt-in-to-sale). Email: launch sequences, renewal sequences, educational nurture streams. Ad copy: SEC/FINRA-posture-aware Meta, Google, and native suites. Plus a compliance-review map that goes with every promotion. Every asset is written to function as part of the connected promotion system \u2014 not as a standalone deliverable.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is compliance and audience research, then trust architecture, then SEC/FINRA-aware drafting, then a compliance-review map and one revision round across the full promotion. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-letter-copywriter', 'sales-page-copywriter', 'email-copywriter'],
    relatedVerticals: ['saas-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'E-Commerce & DTC Copywriter',
    slug: 'ecommerce-dtc-copywriter',
    shortDescription:
      'E-commerce and DTC copy anchored on the $40M Gluco 6 supplement subscription funnel + 300% ROAS Ben Palmer ClickBank-health funnel + 30\u2013100% AOV lifts on anonymized back-end stacks. Product page through post-purchase email written as one connected revenue stack.',
    metaTitle: 'E-Commerce & DTC Copywriter | $40M Subscription + 30\u2013100% AOV',
    metaDescription:
      'Senior e-commerce and DTC copywriter behind the $40M Gluco 6 subscription funnel + 300% ROAS Ben Palmer ClickBank-health funnel + 30\u2013100% AOV lifts on anonymized back-end stacks. Product page, email, ad, upsell stack as one connected revenue system.',
    headline: 'E-Commerce & DTC Copywriter Behind $40M Subscription + 30\u2013100% AOV Lifts',
    subheadline:
      'I write the connected revenue stack for DTC operators \u2014 product page, abandoned cart, post-purchase upsell, subscription retention. The Gluco 6 supplement subscription funnel I worked on did <strong>$40 million</strong> end-to-end with the same DTC subscription dynamics. For Ben Palmer, a ClickBank Platinum vendor running an e-commerce-style health funnel, the email-driven funnel I wrote drove <strong>300% ROAS</strong>. Across multiple anonymized e-commerce back-end stacks, AOV lifts have landed in the <strong>30\u2013100%</strong> range. If your DTC brand has a 2% product-page CVR that should clear 4%, or your post-purchase email sequence is leaving back-end revenue on the table, this is the kind of work I do.',
    heroImage: '/images/industries/ecommerce-dtc.jpg',
    heroImageAlt: 'E-commerce shopping and online retail',
    heroStats: {
      primary: { value: '30\u2013100%', label: 'AOV Lift on E-Commerce Back-End Stacks' },
      secondary: [
        { value: '$40M', label: 'Gluco 6 Subscription DTC Funnel' },
        { value: '300%', label: 'Ben Palmer ClickBank-Health Email Funnel ROAS' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'E-commerce + DTC copy written for',
      items: [
        'Gluco 6 Supplement Subscription Funnel ($40M)',
        'Ben Palmer / ClickBank Platinum Vendor (300% ROAS)',
        'Survival Frog (Byron Walker)',
        'Ecom Authority (Doug Beney)',
        'CJAM Marketing (Behdad Jamshidi)',
        'Subscription DTC + Single-Purchase E-Commerce',
      ],
    },
    definition: {
      term: 'e-commerce + DTC copywriting',
      text: 'E-commerce and DTC (direct-to-consumer) copywriting is direct-response copy for online brands that sell directly to customers. It spans every revenue touchpoint \u2014 product page, ad creative, email sequences, post-purchase upsells, subscription retention, win-back campaigns \u2014 engineered as one connected revenue stack to maximize CVR, AOV, and CLTV. The DTC operators who scale aren\'t the ones with the best single asset; they\'re the ones whose entire stack compounds together.',
    },
    sections: [
      {
        heading: 'Why Most DTC Brands Burn the Front End and Starve the Back End',
        content:
          'You\'re a DTC operator. Maybe you have one product, maybe a category. CAC has been creeping. ROAS has been compressing. iOS 14.5 hit your attribution two years ago and Meta hasn\'t given you the same signal since. You\'re running ads, you\'re shipping product, the bank account looks fine \u2014 but the math is getting tighter every quarter.\n\n' +
          'Here\'s why. Most DTC brands burn 80% of their copy budget on acquisition (ad creative + product page + landing page) and 20% on the back end (email sequences + post-purchase upsell + subscription retention). The front end is where the cost lives, so it gets the attention. The back end is where the margin lives, so it gets ignored.\n\n' +
          'Door one: your front-end CVR is okay (2% on a product page, 1% on a sales page) but post-purchase emails are a welcome series and three "did you forget us?" win-backs. Subscription retention has no copy at all. AOV stalls at $42 when it should clear $80. CLTV sits at $58 when it should be $180. The brand stays profitable on margin, but never breaks out.\n\n' +
          'Door two: the back end is decent but the front end is leaking. Product page CVR sits at 1.4% when category benchmarks clear 3.5%. Abandoned cart recovers at 8% when sequences in the same category clear 18%. The first email after purchase \u2014 the highest-engagement email a DTC brand sends \u2014 is generic instead of an upsell trigger.\n\n' +
          'Either way, every dormant week costs the brand. A DTC brand at $1M ARR running 1.4% product-page CVR loses $1.5M\u2013$2.5M annually to a CVR that should clear 3.5%. AOV stalled $40 below where the back-end stack would lift it leaves another $200K\u2013$500K on the table per year on existing traffic. The brands that scale past $5M aren\'t the ones with the best ad. They\'re the ones whose product page, email sequence, post-purchase upsell, and subscription-retention copy compound together as one revenue stack.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most e-commerce copywriters write product descriptions OR email sequences OR ad copy \u2014 not the connected revenue stack. The skill the DTC back-end actually rewards: writing every touchpoint as part of one persuasion architecture where every step compounds the AOV and CLTV the next step depends on.',
      },
      {
        heading: '$40M Gluco 6 Subscription, 300% Ben Palmer, 30\u2013100% AOV Lifts \u2014 Recent E-Commerce Wins',
        content:
          'The <strong>Gluco 6 supplement subscription funnel</strong> I worked on did <strong>$40 million</strong> end-to-end \u2014 same DTC subscription dynamics most operators face: cold traffic to product page to subscription offer to back-end upsell to retention sequence. The back-end stack I architected ran the AOV math from the first draft.\n\n' +
          'For <strong>Ben Palmer</strong>, a ClickBank Platinum vendor running an e-commerce-style health offer, the email-driven funnel I wrote drove <strong>300% Return on Ad Spend</strong>. He put it on record: <em>"Rob is a killer copywriter."</em>\n\n' +
          'Across multiple anonymized e-commerce back-end stacks \u2014 order bump, OTO1, OTO2, downsell, post-purchase email \u2014 AOV lifts have landed in the <strong>30\u2013100%</strong> range on existing traffic. (Brand names stay private; the math is in the back-end.)\n\n' +
          'Byron Walker at Survival Frog (an outdoor-and-emergency DTC brand) reviewed work I shipped: <em>"Once again, this looks great, Rob. We will circle back soon."</em> Doug Beney at Ecom Authority came back with: <em>"Really good copy. More projects coming your way soon!"</em>\n\n' +
          'If you have a DTC brand running and the revenue stack isn\'t compounding the way it should, I work as a control-beater. Send me your current product page, your post-purchase email sequence, and your back-end metrics (CVR, AOV, CLTV, refund rate). I\'ll tell you on the strategy call exactly where the stack is leaking and whether I can write something that beats your current control.',
      },
      {
        heading: 'The DTC Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'Mark Shay, who has seen more DTC and supplement copy than most, put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em>\n\n' +
          'These are operators with their own money on the line. DTC doesn\'t reward writers who can\'t make the AOV math compound \u2014 the CAC ceiling clears them out inside two quarters. DR operators at this level keep handing me e-commerce work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect a DTC Revenue Stack That Compounds AOV and CLTV',
        content:
          'Every DTC engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audience + revenue-stack research: I mine your customer reviews, support tickets, returns/refund reasons, and competitor brands\' funnels for the exact language your buyers use about the transformation \u2014 plus the AOV and CLTV benchmarks your category clears. The angle and the back-end stack come out of the same layer. My AI workflow processes 50+ competitor DTC funnels and thousands of customer reviews while a manual pass reads three.',
          'Phase 2 \u2014 Connected-stack architecture: I map every touchpoint \u2014 ad copy, product page, abandoned cart, post-purchase email, OTO upsell, subscription retention, win-back \u2014 against the AOV and CLTV math the brand needs. Most DTC stacks die because the post-purchase email is doing nothing while the abandoned-cart sequence does the same job twice. The architecture phase prevents that.',
          'Phase 3 \u2014 Drafting the connected stack: I draft product page, abandoned-cart sequence, post-purchase email sequence, OTO upsell pages, subscription-retention sequence, and ad copy as one connected system. Every step compounds the AOV and CLTV the next step depends on. Two-to-three subject-line and headline variations per piece for split testing.',
          'Phase 4 \u2014 Iteration roadmap + handoff: a sequenced roadmap for which stack elements to test first, how to read the back-end data, and which iterations compound fastest. One revision round across the full stack is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for DTC and E-Commerce Operators',
        content:
          'DTC operators don\'t buy copy by category \u2014 they buy connected revenue stacks. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for DTC brands and e-commerce operators.',
        bullets: [
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 abandoned cart, post-purchase upsell, subscription retention, win-back, and broadcast sequences. The highest-ROI channel for DTC.',
          '<a href="/services/upsell-downsell-copywriter">Upsell & Downsell Copywriter</a> \u2014 post-purchase OTO stacks lifting AOV by 30\u2013100% on existing traffic. The back-end where DTC margin actually lives.',
          '<a href="/services/landing-page-copywriter">Landing Page Copywriter</a> \u2014 product pages built as sales pages in miniature, plus pre-sell pages and lead-magnet bridges feeding email lists.',
          '<a href="/services/ad-copywriter">Ad Copywriter</a> \u2014 cold-traffic ad copy for Meta, Google, TikTok, and native that pre-qualifies buyers so the product page works harder.',
          '<a href="/services/facebook-ads-copywriter">Facebook Ads Copywriter</a> \u2014 Meta-and-Instagram-specific ad suites with platform-policy fluency and Reels/carousel/UGC scripts.',
          '<a href="/services/sales-funnel-copywriter">Sales Funnel Copywriter</a> \u2014 end-to-end DTC revenue-stack architecture with AOV and CLTV math designed in from step one.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Gluco 6 Subscription Funnel',
        category: 'DTC Supplement Subscription',
        metric: '$40M',
        detail: 'End-to-end subscription DTC funnel with cold-traffic VSL, subscription-priced front end, and back-end stack that ran the AOV math from the first draft.',
      },
      {
        name: 'Ben Palmer / ClickBank Platinum Vendor',
        category: 'E-Commerce-Style Health Funnel',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."',
      },
      {
        name: 'Anonymized E-Commerce Back-End Stacks',
        category: 'OTO + Order Bump + Post-Purchase Email',
        metric: '30\u2013100% AOV Lift',
        detail: 'AOV lifts on existing traffic across multiple anonymized brands. Brand names stay private; the math is in the back-end.',
      },
      {
        name: 'Survival Frog / Byron Walker',
        category: 'DTC Outdoor Brand',
        metric: '"This looks great"',
        detail: '"Once again, this looks great, Rob. We will circle back soon."',
      },
    ],
    deliverables: [
      { title: 'Product Page Copy', description: 'Conversion-optimized product pages built as sales pages in miniature \u2014 not just descriptions.' },
      { title: 'Email Stack', description: 'Welcome, abandoned cart, post-purchase upsell, subscription retention, win-back, and broadcast sequences as one connected revenue engine.' },
      { title: 'Back-End OTO Stack', description: 'Order bump + OTO1 + OTO2 + downsell + thank-you page sequence engineered for 30\u2013100% AOV lifts on existing traffic.' },
      { title: 'Ad Copy', description: 'Scroll-stopping cold-traffic creative for Meta, Google, TikTok, and native \u2014 pre-qualified for the product page that follows.' },
      { title: 'Landing + Bridge Pages', description: 'Pre-sell pages, lead-magnet bridges, and direct-sale pages feeding the email list and the product page.' },
      { title: 'Subscription Retention Copy', description: 'Subscribe-and-save copy, retention sequences, and re-engagement campaigns built for recurring revenue.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the DTC operator who needs both front-end CVR AND back-end AOV math \u2014 not one or the other.',
    testimonialIds: ['34', '32', '22', '6', '2', '3'],
    portfolioItems: [],
    heroCta: { label: 'Audit my DTC stack', href: '/contact' },
    midCta: {
      headline: 'Ready for a DTC revenue stack that lifts AOV without lifting ad spend?',
      subtext:
        'Book a free strategy call. Send me your current product page, your post-purchase email sequence, and your back-end metrics (CVR, AOV, CLTV, refund rate) \u2014 I\'ll tell you honestly where the stack is leaking and whether I can write something that beats your current control.',
    },
    faqs: [
      {
        question: 'What does an e-commerce and DTC copywriter actually do?',
        answer:
          'A senior DTC copywriter writes the connected revenue stack for an e-commerce brand \u2014 ad copy, product page, abandoned cart, post-purchase email upsell, OTO stack, subscription retention, win-back \u2014 every touchpoint engineered to compound the AOV and CLTV the next step depends on. The Gluco 6 supplement subscription funnel I worked on did $40M end-to-end with the same DTC subscription dynamics. Across anonymized e-commerce back-end stacks, AOV lifts have landed in the 30\u2013100% range on existing traffic.',
      },
      {
        question: 'Are you taking new DTC clients?',
        answer:
          'I take a selective number of new DTC engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write DTC copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, DTC-vertical hook patterns, AOV-and-CLTV math evaluation criteria, and platform-policy fluency into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor DTC funnels and thousands of customer reviews while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does DTC copywriting cost?',
        answer:
          'DTC engagements are fixed-price. A standalone product page or post-purchase email sequence starts at $5\u201310K. A full DTC revenue stack (product page + email sequences + OTO stack + ad copy + iteration roadmap) typically starts at $25K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a back-end stack that lifts AOV by $40 on existing traffic at $1M ARR is $400K\u2013$1M of pure-margin revenue compounding monthly. The writer pays for himself in the first 60 days.',
      },
      {
        question: 'How long does it take to write a DTC revenue stack?',
        answer:
          'A standalone product page or email sequence takes 2\u20133 weeks. A full DTC revenue stack (product page + email sequences + OTO stack + ad copy + iteration roadmap) runs 6\u20139 weeks. Audience and revenue-stack research always come first \u2014 that\'s where the AOV-and-CLTV-compounding lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'How do you handle product pages, email, and ad copy as one system?',
        answer:
          'Most e-commerce copywriters write product descriptions OR email sequences OR ad copy. I write the connected revenue stack: every touchpoint engineered to compound the AOV and CLTV the next step depends on. Ad copy pre-qualifies the buyer who lands on the product page. Product page closes the buyer who triggers the post-purchase email. Post-purchase email sets up the OTO upsell that lifts AOV. OTO upsell sets up the subscription-retention sequence that lifts CLTV. The architecture is what compounds; isolated assets don\'t.',
      },
      {
        question: 'What asset types do you write for DTC and e-commerce operators?',
        answer:
          'Front-end: product pages, pre-sell pages, lead-magnet bridges, ad copy (Meta, Google, TikTok, native). Back-end: abandoned-cart sequence, post-purchase email, OTO stack (order bump + OTO1 + OTO2 + downsell), subscription-retention sequence, win-back. Plus broadcast email and promotional sequences for the full list. Every asset is written to function as part of the connected revenue stack \u2014 not as a standalone deliverable.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is audience and revenue-stack research, then connected-stack architecture, then drafting, then iteration roadmap and one revision round across the full stack. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['email-copywriter', 'upsell-downsell-copywriter', 'landing-page-copywriter', 'ad-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'saas-copywriter'],
  },
  {
    title: 'ClickBank Copywriter',
    slug: 'clickbank-copywriter',
    shortDescription:
      'ClickBank funnels anchored on Mobile Profits \u2014 the #1 ClickBank offer that did $30M. VSLs, hybrid sales pages, and back-end stacks engineered for both buyer conversion and top-affiliate EPC.',
    metaTitle: 'ClickBank Copywriter | $30M Mobile Profits + 300% ROAS',
    metaDescription:
      'Senior ClickBank copywriter behind Mobile Profits \u2014 the #1 ClickBank biz-op VSL that did $30M+ \u2014 and the email-driven funnel that drove 300% ROAS for Ben Palmer (ClickBank Platinum Vendor). Fixed-price engagements, two-week kickoffs.',
    headline: 'ClickBank Copywriter Behind the $30M Mobile Profits #1 Offer',
    subheadline:
      '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend." That\'s Ben Palmer, a ClickBank Platinum vendor, on an email-driven funnel I wrote for him. The Mobile Profits VSL I wrote became the <strong>#1 offer on ClickBank</strong> and did over <strong>$30 million</strong>. If your ClickBank funnel converts but EPC sits below the $1.20 threshold top affiliates need \u2014 or your gravity climbed and stalled \u2014 this is the kind of work I do.',
    heroImage: '/images/industries/clickbank.jpg',
    heroImageAlt: 'Digital marketing analytics and performance metrics',
    heroStats: {
      primary: { value: '$30M+', label: 'Mobile Profits VSL (#1 ClickBank)' },
      secondary: [
        { value: '300%', label: 'ROAS on a ClickBank Email Funnel (Ben Palmer)' },
        { value: '$40M', label: 'Gluco 6 ClickBank-Adjacent Supplement Funnel' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'ClickBank funnels written for',
      items: [
        'Mobile Profits VSL (#1 ClickBank, $30M)',
        'Ben Palmer / ClickBank Platinum Vendor',
        'Christian Green / ClickBank',
        'Gluco 6 Supplement Funnel ($40M)',
        'Konscious Keto (Ryan Kowalski)',
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
      ],
    },
    definition: {
      term: 'ClickBank copywriting',
      text: 'ClickBank copywriting is direct-response copy built specifically for the <a href="https://www.clickbank.com" target="_blank" rel="noopener noreferrer">ClickBank</a> affiliate marketplace. It demands writing to both sides at once \u2014 the cold-traffic buyer who has to convert, and the top affiliate who reads EPC, gravity, refund rate, and AOV before they\'ll push your offer to the top of their queue. Get only one side right and the offer never makes top-100. Get both right and the marketplace scales it for you.',
    },
    sections: [
      {
        heading: 'Why Most ClickBank Offers Never Make the Affiliate Queue',
        content:
          'You launched a ClickBank offer. Maybe two. Maybe a dozen. Some did okay. None became the offer affiliates fight to promote.\n\n' +
          'Here\'s why. ClickBank is a two-sided marketplace and most copywriters only write to one side of it.\n\n' +
          'Side one is the buyer. Cold traffic, attention deficit, shopping for a transformation. Your sales page has to convert them at a rate that pays back ad spend with margin to spare.\n\n' +
          'Side two is the affiliate. They aren\'t reading your copy \u2014 they\'re reading your stats. Gravity, EPC, refund rate, AOV, take rate on the order bump. They run the numbers. If your EPC clears their threshold, they push your offer to the top of their queue. If it doesn\'t, they ignore you and promote the next one. Most offers never make the queue.\n\n' +
          'The result: you launch with hope. You scale with your own ad spend. You hit a ceiling. The affiliate engine that scales ClickBank winners never cranks for your offer \u2014 because the back-end math doesn\'t work. AOV stalls at $97. Refund rate drifts toward 12%. Net EPC sits at $0.84 when affiliates need $1.20 to back you. At $5K/day in your own spend, every week is $35K burning while the brand that figured the math out two months earlier compounds without you.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most ClickBank copywriters write the front-end VSL and call the funnel done. The skill ClickBank actually rewards: writing copy that converts the buyer AND lifts EPC enough that affiliates do the scaling for you.',
      },
      {
        heading: '$30M Mobile Profits, $40M Gluco 6, 300% Ben Palmer \u2014 Recent ClickBank Wins',
        content:
          'The <strong>Mobile Profits VSL</strong> I wrote became the <strong>#1 offer on ClickBank</strong> and did over <strong>$30 million</strong>. Up to 4% conversion on cold traffic. The hybrid sales-page-and-VSL format I architected for it cleared Meta\'s automated review every time the ads ran.\n\n' +
          'The <strong>Gluco 6 supplement funnel</strong> \u2014 same affiliate-marketplace dynamics, blood-sugar mechanism \u2014 did <strong>$40 million</strong> end-to-end. Compliance posture tight from the first draft.\n\n' +
          'For Ben Palmer, a ClickBank Platinum vendor, the email-driven funnel I wrote drove <strong>300% Return on Ad Spend</strong>. He put it on record: <em>"Rob is a killer copywriter."</em>\n\n' +
          'Christian Green at ClickBank itself looked at my copy and said: <em>"Overall, I really like your writing, and your copy really stands out."</em>\n\n' +
          'Across multiple anonymized ClickBank order-bump and upsell stacks, take rates have landed in the 30\u201340%+ range. (Vendor names stay private; the math is in the back-end.)\n\n' +
          'If you have a ClickBank offer running and EPC isn\'t where affiliates need it to be, I work as a control-beater. Send me your current VSL or sales page, your back-end stats (AOV, refund rate, EPC, gravity), and the affiliate-tools page. I\'ll tell you on the strategy call exactly where the math is leaking and whether I can write something that beats your control. Compliance and ClickBank-review notes on the call come free.',
      },
      {
        heading: 'The ClickBank Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'Caleb O\'Dowd \u2014 a direct-response marketer \u2014 came back with: <em>"Rob, high five!! You da Man! Great to get that bump in conversions!"</em>\n\n' +
          'Mark Shay, who has seen more supplement-and-biz-op copy than most, put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em>\n\n' +
          'These are operators with their own money on the line. ClickBank doesn\'t reward writers who can\'t do the back-end math \u2014 the marketplace clears them out inside two launch windows. DR operators at this level keep handing me ClickBank work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect a ClickBank Funnel Affiliates Fight to Promote',
        content:
          'Every ClickBank engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Marketplace + audience research: I audit ClickBank Top 50 in your category for what\'s currently driving the highest gravity scores and EPCs, mine reviews and forums for the language your buyers actually use, and benchmark your offer\'s back-end math (AOV, refund rate, take rates) against the threshold top affiliates require. My AI workflow processes 50+ competitor VSLs and thousands of reviews while a manual pass reads three.',
          'Phase 2 \u2014 Two-sided funnel architecture: I map the funnel against both the buyer journey AND the affiliate-EPC math at every step. Front-end VSL converts cold traffic; order bump lifts AOV; OTO1, OTO2, downsell stack the back-end so EPC clears the affiliate threshold. The math isn\'t bolted on at the end \u2014 it\'s designed in from step one.',
          'Phase 3 \u2014 ClickBank-review-aware drafting: every claim sits inside ClickBank\'s content guidelines from the first draft \u2014 income-claim posture, health-claim posture, testimonial-hedging, refund-policy framing. I draft VSL, sales page, order bump, OTO1, OTO2, downsell, thank-you, and email sequence as a connected system. Plus the affiliate-tools page, swipe copy, and promotional angles affiliates can run.',
          'Phase 4 \u2014 Launch-and-scale roadmap: a sequenced plan for getting first affiliates on, hitting the gravity inflection point that pulls top-50 affiliates in, and the back-end iterations that keep EPC compounding after launch. One revision round across the full funnel is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for ClickBank Vendors',
        content:
          'ClickBank vendors don\'t buy copy by category \u2014 they buy connected funnel systems. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for ClickBank operators.',
        bullets: [
          '<a href="/services/vsl-copywriter">VSL Copywriter</a> \u2014 the front-end VSL is where the ClickBank funnel converts cold traffic. Mobile Profits anchors the ClickBank VSL track at $30M.',
          '<a href="/services/sales-funnel-copywriter">Sales Funnel Copywriter</a> \u2014 end-to-end ClickBank funnel architecture with EPC math designed in from step one.',
          '<a href="/services/upsell-downsell-copywriter">Upsell & Downsell Copywriter</a> \u2014 ClickBank back-end stacks. 30\u201340%+ take rates on order-bump and upsell anonymized vendor wins.',
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 buyer follow-up sequences (300% Ben Palmer ROAS proof) plus affiliate-recruitment and promotional-launch sequences.',
          '<a href="/services/ad-copywriter">Ad Copywriter</a> \u2014 cold-traffic ad copy feeding ClickBank funnels. Mobile Profits ad suite cleared Meta review every time.',
          '<a href="/services/facebook-ads-copywriter">Facebook Ads Copywriter</a> \u2014 Meta-review-aware ad suites for ClickBank cold traffic. 300% ROAS without triggering policy review.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits VSL',
        category: 'ClickBank #1 Hybrid Sales-Page/VSL',
        metric: '$30M+',
        detail: 'Up to 4% conversion on cold traffic. Hybrid sales-page-and-VSL format cleared Meta\'s automated review every time the ads ran.',
      },
      {
        name: 'Ben Palmer / ClickBank Platinum Vendor',
        category: 'Email-Driven ClickBank Funnel',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."',
      },
      {
        name: 'Gluco 6 Supplement Funnel',
        category: 'ClickBank-Adjacent Supplement',
        metric: '$40M',
        detail: 'Blood-sugar supplement funnel with subscription-priced front end. Same affiliate-marketplace dynamics as ClickBank biz-op.',
      },
      {
        name: 'Anonymized Order-Bump + Upsell Stacks',
        category: 'ClickBank Back-End',
        metric: '30\u201340%+ Take Rates',
        detail: 'Order-bump and upsell take rates on multiple anonymized vendor wins. Vendor names stay private; the math is in the back-end.',
      },
    ],
    deliverables: [
      { title: 'ClickBank VSL Scripts', description: 'Front-end VSLs and hybrid sales-page/VSL formats engineered for ClickBank cold traffic. Mobile Profits-style hooks.' },
      { title: 'Order Bump + OTO Stack', description: 'Order bump + OTO1 + OTO2 + downsell + thank-you page sequence engineered to lift EPC above the affiliate threshold.' },
      { title: 'Affiliate Tools Page', description: 'Swipe copy, email templates, banner copy, and promotional angles affiliates can run \u2014 the assets that earn you placement in their queue.' },
      { title: 'Email Sequences', description: 'Buyer follow-up sequences (300% Ben Palmer ROAS) plus affiliate-recruitment and launch-promotional sequences.' },
      { title: 'ClickBank-Review-Aware Ad Copy', description: 'Cold-traffic Meta, YouTube, and native ad copy designed to pass platform review while feeding the funnel.' },
      { title: 'Launch-and-Scale Roadmap', description: 'Sequenced plan for first-affiliate recruitment, hitting the gravity inflection point, and post-launch back-end iteration.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the ClickBank vendor who needs both buyer conversion AND affiliate-grade EPC \u2014 not one or the other.',
    testimonialIds: ['4', '20', '18', '6', '2', '3'],
    portfolioItems: [
      { title: 'Weight-Loss VSL', category: 'VSL' },
      { title: 'Coffee Slimmer Pro', category: 'VSL' },
      { title: 'Puradrop', category: 'VSL' },
      { title: 'Biz-Op Hybrid Sales Page & VSL', category: 'Hybrid' },
    ],
    heroCta: { label: 'Audit my ClickBank funnel', href: '/contact' },
    midCta: {
      headline: 'Ready for a ClickBank funnel that affiliates fight to promote?',
      subtext:
        'Book a free strategy call. Send me your current VSL or sales page, your back-end stats (AOV, refund rate, EPC, gravity), and the affiliate-tools page \u2014 I\'ll tell you honestly where EPC is leaking, where gravity stalled, and whether I can write something that beats your control. ClickBank-review notes come free.',
    },
    faqs: [
      {
        question: 'What does a ClickBank copywriter actually do?',
        answer:
          'A senior ClickBank copywriter writes the connected funnel system that wins both sides of the marketplace \u2014 the cold-traffic VSL or hybrid sales page that converts the buyer, plus the order bump, OTO1, OTO2, downsell, thank-you page, and email sequence that lift EPC above the threshold top affiliates require before they\'ll promote your offer. Mobile Profits, the #1 ClickBank offer in its window, did $30M end-to-end. Same disciplined approach across health, supplement, and biz-op verticals.',
      },
      {
        question: 'Are you taking new ClickBank clients?',
        answer:
          'I take a selective number of new ClickBank engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write ClickBank copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywiting skills \u2014 proprietary skill files that encode 40 years of frameworks, ClickBank-vertical hook patterns, EPC-math evaluation criteria, and ClickBank-review-aware drafting into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor ClickBank VSLs and thousands of reviews while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does ClickBank copywriting cost?',
        answer:
          'ClickBank engagements are fixed-price. A standalone ClickBank VSL or hybrid sales page starts at $10K. A full ClickBank funnel (VSL + back-end stack + affiliate-tools page + email sequences) typically starts at $25K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a back-end stack that lifts EPC from $0.84 to $1.20 doesn\'t just pay for the writer \u2014 it unlocks the top-50 affiliate engine that scales ClickBank winners.',
      },
      {
        question: 'How long does it take to launch a ClickBank funnel?',
        answer:
          'A standalone ClickBank VSL or hybrid sales page takes 3\u20134 weeks from kickoff to final draft. A full ClickBank funnel (VSL + back-end stack + affiliate-tools page + email sequences) runs 6\u20139 weeks. Marketplace research and EPC-math benchmarking always come first \u2014 that\'s where the affiliate-threshold lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'How do you attract top affiliates to a new ClickBank offer?',
        answer:
          'Top affiliates promote offers where the math works. The single biggest lever is back-end EPC \u2014 the order bump and upsell stack that lift earnings-per-click above the threshold they require. Beyond that: gravity inflection (getting the first 5\u201310 affiliates running so the gravity score becomes self-marketing), an affiliate-tools page that makes promoting effortless (swipe copy, email templates, ad angles, banners), and launch-sequence promotional materials for partner-list activation. I write all of it as part of the engagement, sequenced into a launch-and-scale roadmap.',
      },
      {
        question: 'What asset types do you write for ClickBank vendors?',
        answer:
          'Front-end: VSLs (Mobile Profits anchors the track), TSLs, hybrid sales-page/VSL formats, advertorial bridges. Back-end: order bump, OTO1, OTO2, downsell, thank-you page. Affiliate: tools page, swipe copy, email templates, banner ad copy, promotional angles. Email: buyer follow-up, abandon-cart, post-purchase upsell, re-engagement, plus affiliate-recruitment and launch-promotional sequences. Ad copy: ClickBank-review-aware Meta, YouTube, and native suites. Every asset is written to function as part of the connected funnel system.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is marketplace and EPC-math research, then two-sided funnel architecture, then ClickBank-review-aware drafting, then a launch-and-scale roadmap and one revision round across the full funnel. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-funnel-copywriter', 'upsell-downsell-copywriter', 'ad-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'SaaS Copywriter',
    slug: 'saas-copywriter',
    shortDescription:
      'SaaS copy anchored on the 22% Chatterkick trial-to-paid lift + Stefan Georgi\'s Copy Accelerator (where he hired me as Copy Chief). Onboarding sequences, upgrade campaigns, and churn-reduction copy that compounds MRR \u2014 not just trial sign-ups.',
    metaTitle: 'SaaS Copywriter | 22% Chatterkick Trial-to-Paid + CA Labs',
    metaDescription:
      'Senior SaaS copywriter behind the 22% Chatterkick trial-to-paid onboarding lift + Stefan Georgi hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Direct-response onboarding sequences, upgrade campaigns, churn reduction. Fixed-price engagements.',
    headline: 'SaaS Copywriter Behind the 22% Chatterkick Trial-to-Paid Lift + CA Labs',
    subheadline:
      '"Rob, you are awesome. I love it. And Holy Moly, you are super quick!" That\'s Kristy Plucker, CEO of Chatterkick, on the SaaS onboarding sequence I wrote for her platform. The sequence lifted trial-to-paid conversion by <strong>22%</strong>. And Stefan Georgi \u2014 the copywriter behind over $1B in tracked sales \u2014 hired me as Copy Chief inside Copy Accelerator\'s CA Labs. If your SaaS lands trials but trial-to-paid sits at 8% when category benchmarks clear 18% \u2014 or churn drifts toward 6% monthly while activation flatlines \u2014 this is the kind of work I do.',
    heroImage: '/images/industries/saas.jpg',
    heroImageAlt: 'Software dashboard and data analytics',
    heroStats: {
      primary: { value: '22%', label: 'Chatterkick Trial-to-Paid Lift (SaaS Onboarding)' },
      secondary: [
        { value: 'CA Labs', label: 'Stefan Georgi Hired Me as Copy Chief' },
        { value: '$1B+', label: 'Tracked Sales Behind the Methodology' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'SaaS copy written for',
      items: [
        'Chatterkick (22% Trial-to-Paid Lift)',
        'Connectio (William Vanhout)',
        'LeadHub (Steven Piper)',
        'Zero to One (John Immel)',
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
        'B2B + B2C SaaS',
      ],
    },
    definition: {
      term: 'SaaS copywriting',
      text: 'SaaS copywriting is direct-response copy for software-as-a-service companies, covering every stage of the customer lifecycle \u2014 trial acquisition, activation, upgrade, expansion, retention, win-back. Unlike traditional SaaS marketing that leads with features and brand voice, direct-response SaaS copy is engineered to move specific business metrics: MRR, ARR, trial-to-paid CVR, activation rate, expansion revenue, churn rate, and customer lifetime value.',
    },
    sections: [
      {
        heading: 'Why Most SaaS Copy Drives Trials That Never Convert and Churn That Never Slows',
        content:
          'You\'re a SaaS founder, growth lead, or marketing operator. Your product works. Your category has demand. You\'re running paid acquisition that brings in trial sign-ups every day. But the numbers under the hood tell a different story.\n\n' +
          'Trial-to-paid sits at 8% when SaaS benchmarks in your category clear 18\u201325%. Activation rate flatlines at 30% \u2014 70% of trial users never hit the moment that makes them stay. Monthly churn drifts up by 0.5 points each quarter. Expansion revenue is supposed to be 30%+ of net new MRR; yours is sitting under 10%.\n\n' +
          'Here\'s why. Most SaaS copywriters write to the trial sign-up and stop. The landing page is a brand exercise, the onboarding email is "welcome to [Product]!", the upgrade prompt is a feature comparison table, the churn-prevention email doesn\'t exist. Every touchpoint after sign-up is treated as a product engineering problem when half of it is actually a copy problem.\n\n' +
          'Door one: the landing page converts trials, but the onboarding sequence doesn\'t convert trials to paid. Users sign up, get an automated welcome that lists features, never hit activation, and cancel before the trial ends \u2014 or worse, get billed once and refund. CAC is paid; LTV never materializes.\n\n' +
          'Door two: trial-to-paid is okay, but churn eats the gains. The first month converts at 12%; by month four, half of them are gone. Expansion sequences don\'t exist. Win-back is a single email three months after cancellation. The brand stays alive on net new MRR while the cohort math quietly degrades.\n\n' +
          'Either way, every dormant week costs the brand. A SaaS at $50K MRR with trial-to-paid stuck at 8% (when 18% is the benchmark) leaves $50K\u2013$80K of additional MRR on the table per month \u2014 compounding into $600K\u2013$1M ARR over the year.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most SaaS copywriters treat each touchpoint as a separate asset \u2014 landing page, welcome email, upgrade prompt, churn email \u2014 instead of as one connected lifecycle persuasion system. The skill SaaS MRR actually rewards: writing every touchpoint as part of one architecture where trial activation compounds into paid conversion compounds into expansion compounds into retention.',
      },
      {
        heading: '22% Chatterkick Trial-to-Paid + CA Labs Copy Chief \u2014 Recent SaaS Wins',
        content:
          'Chatterkick \u2014 a SaaS platform \u2014 needed a behavior-triggered onboarding sequence that would actually convert free trials into paying customers. The sequence I wrote for them lifted <strong>trial-to-paid conversion by 22%</strong>. Their CEO\'s reaction: <em>"Rob, you are awesome. I love it. And Holy Moly, you are super quick!"</em>\n\n' +
          'Stefan Georgi \u2014 the copywriter behind over <strong>$1 billion</strong> in tracked sales \u2014 hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. The methodology I install is the same direct-response architecture that drove $523M+ across Apple UK, IBM, Microsoft, Citibank, Morgan Stanley, and the 9-year Belron campaign \u2014 ported into SaaS lifecycle copy.\n\n' +
          'William Vanhout at Connectio (a SaaS marketing tool) reviewed work I shipped: <em>"I have to say that they were positively impressed with your work."</em> Steven Piper at LeadHub (a lead-gen software platform) came back with: <em>"This is exactly what I wanted. Awesome work, Rob."</em>\n\n' +
          'If you have a SaaS running and the trial-to-paid math, the activation rate, or the churn cohort isn\'t where it needs to be, I work as a control-beater. Send me your current onboarding sequence, your activation funnel, and your back-end metrics (trial-to-paid CVR, activation rate, monthly churn, expansion revenue %). I\'ll tell you on the strategy call exactly where the lifecycle is leaking and whether I can write something that beats your current control.',
      },
      {
        heading: 'The SaaS Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (CA Labs / $1B in tracked sales) hired me as Copy Chief. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'John Immel at Zero to One reviewed my work and came back with: <em>"Your quality of writing is off the charts better."</em>\n\n' +
          'Mark Shay, who has seen more lifecycle copy than most, put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em>\n\n' +
          'These are operators with their own money on the line. SaaS doesn\'t reward writers who can\'t make the lifecycle math compound \u2014 the cohort numbers clear them out inside two quarters. DR operators at this level keep handing me SaaS work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect a SaaS Lifecycle Sequence That Compounds MRR',
        content:
          'Every SaaS engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audience + lifecycle research: I mine your trial-cancellation reasons, support tickets, NPS responses, and competitor SaaS sequences for the exact language your trial users use about the moment they didn\'t activate. Plus I benchmark your trial-to-paid CVR, activation rate, monthly churn, and expansion revenue against your category\'s actual numbers (not aspirational ones). My AI workflow processes 50+ competitor SaaS onboarding sequences and thousands of cancellation reasons while a manual pass reads three.',
          'Phase 2 \u2014 Lifecycle architecture: I map every behavior-triggered touchpoint \u2014 trial sign-up, day-1 activation, day-3 first-value, day-7 trial-end approach, day-14 paid-conversion, month-2 first-billing, month-3 expansion-trigger, month-6 churn-risk, post-cancel win-back \u2014 against the lifecycle metric each one moves. Most SaaS lifecycle sequences die because the day-7 email is the same as the day-3 email, and neither one was tied to a behavior. The architecture phase prevents that.',
          'Phase 3 \u2014 Drafting the connected lifecycle: I draft landing page, behavior-triggered onboarding sequence, upgrade campaign, expansion sequence, churn-prevention sequence, and win-back as one connected system. Every touchpoint is engineered to compound the activation or paid-conversion or retention the next touchpoint depends on. Two-to-three subject-line variations per email for split testing.',
          'Phase 4 \u2014 Iteration roadmap + handoff: a sequenced roadmap for which lifecycle elements to test first, how to read cohort data, and which iterations compound MRR fastest. One revision round across the full lifecycle is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for SaaS Founders and Growth Operators',
        content:
          'SaaS operators don\'t buy copy by category \u2014 they buy connected lifecycle systems. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for SaaS founders, growth leads, and marketing operators.',
        bullets: [
          '<a href="/services/landing-page-copywriter">Landing Page Copywriter</a> \u2014 trial sign-up pages, demo-request pages, and lead-magnet bridges. The Chatterkick onboarding LP delivered the 22% trial-to-paid lift.',
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 behavior-triggered onboarding sequences, upgrade campaigns, expansion sequences, churn-prevention, and win-back. The highest-leverage SaaS asset most operators under-invest in.',
          '<a href="/services/sales-funnel-copywriter">Sales Funnel Copywriter</a> \u2014 end-to-end SaaS lifecycle architecture from trial sign-up through expansion and retention.',
          '<a href="/services/ad-copywriter">Ad Copywriter</a> \u2014 cold-traffic ad copy that pre-qualifies trial sign-ups so the onboarding sequence does less filtering work.',
          '<a href="/services/conversion-rate-optimization">Conversion Rate Optimization</a> \u2014 SaaS lifecycle audits + control-beater pitch on landing pages, onboarding sequences, and upgrade campaigns.',
          '<a href="/services/ai-copywriting-consultant">AI Copywriting Consultant</a> \u2014 install the Claude Code copywriting skills + 1,239-file vault into SaaS marketing teams shipping high-volume in-app and lifecycle copy.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Chatterkick',
        category: 'SaaS Behavior-Triggered Onboarding',
        metric: '22% Trial-to-Paid Lift',
        detail: '"Rob, you are awesome. I love it. And Holy Moly, you are super quick!" \u2014 Kristy Plucker, CEO, Chatterkick.',
      },
      {
        name: 'Copy Accelerator / CA Labs',
        category: 'Copy Chief Engagement',
        metric: 'Hired by Stefan Georgi',
        detail: '"We hired Rob as our Copy Chief for CA Labs!" \u2014 Stefan Georgi, the copywriter behind over $1B in tracked sales.',
      },
      {
        name: 'Connectio / William Vanhout',
        category: 'SaaS Marketing Tool Copy',
        metric: '"Positively impressed"',
        detail: '"I have to say that they were positively impressed with your work."',
      },
      {
        name: 'LeadHub / Steven Piper',
        category: 'SaaS Lead-Gen Platform Copy',
        metric: '"Exactly what I wanted"',
        detail: '"This is exactly what I wanted. Awesome work, Rob."',
      },
    ],
    deliverables: [
      { title: 'SaaS Landing Pages', description: 'High-converting trial sign-up pages, demo-request pages, and lead-magnet bridges. Chatterkick LP anchors the track at 22% trial-to-paid lift.' },
      { title: 'Onboarding Sequence', description: 'Behavior-triggered email sequence engineered for activation and trial-to-paid conversion \u2014 not generic "welcome to [Product]" emails.' },
      { title: 'Upgrade + Expansion Campaigns', description: 'Free-to-paid conversion sequences plus expansion-revenue sequences for paid users at the upgrade decision point.' },
      { title: 'Churn-Prevention + Win-Back', description: 'Behavior-triggered re-engagement and churn-risk sequences plus post-cancellation win-back. The cohort math depends on these.' },
      { title: 'SaaS Ad Copy', description: 'Cold-traffic Meta, Google, and LinkedIn ad copy that pre-qualifies trial sign-ups \u2014 not just clickers.' },
      { title: 'Feature Launch + In-App Copy', description: 'Announcement emails, in-app messaging, and feature-launch sequences that drive adoption of the moments that move retention.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the SaaS founder or growth operator who needs the lifecycle math to compound \u2014 not just the trial sign-up to convert.',
    testimonialIds: ['22', '23', '24', '7', '6', '2', '3'],
    portfolioItems: [],
    heroCta: { label: 'Audit my SaaS lifecycle', href: '/contact' },
    midCta: {
      headline: 'Ready for a SaaS lifecycle sequence that compounds MRR \u2014 not just acquires trials?',
      subtext:
        'Book a free strategy call. Send me your current onboarding sequence, your activation funnel, and your back-end metrics (trial-to-paid CVR, activation rate, monthly churn, expansion revenue %) \u2014 I\'ll tell you honestly where the lifecycle is leaking and whether I can write something that beats your current control.',
    },
    faqs: [
      {
        question: 'What does a SaaS copywriter actually do?',
        answer:
          'A senior SaaS copywriter writes the connected lifecycle system that converts trial sign-ups into activated users, activated users into paid customers, paid customers into expansion revenue, and at-risk accounts into retained ones \u2014 landing page, behavior-triggered onboarding sequence, upgrade campaign, expansion sequence, churn-prevention, win-back \u2014 every touchpoint engineered to compound the metric the next step depends on. The Chatterkick onboarding sequence I wrote lifted trial-to-paid conversion by 22%.',
      },
      {
        question: 'Are you taking new SaaS clients?',
        answer:
          'I take a selective number of new SaaS engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write SaaS copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, SaaS lifecycle hook patterns, behavior-triggered sequence pacing, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor SaaS onboarding sequences and thousands of cancellation reasons while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does SaaS copywriting cost?',
        answer:
          'SaaS engagements are fixed-price. A standalone landing page or onboarding sequence starts at $5\u201310K. A full SaaS lifecycle system (landing page + onboarding + upgrade + expansion + churn-prevention + win-back) typically starts at $25K. AI copywriting consultancy installations for SaaS marketing teams shipping high-volume in-app and lifecycle copy run higher. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: at $50K MRR, lifting trial-to-paid from 8% to 18% is $50K\u2013$80K additional MRR per month \u2014 compounding into $600K\u2013$1M ARR over the year.',
      },
      {
        question: 'How long does it take to write a SaaS lifecycle sequence?',
        answer:
          'A standalone landing page or onboarding sequence takes 2\u20133 weeks. A full SaaS lifecycle system (landing page + onboarding + upgrade + expansion + churn-prevention + win-back) runs 6\u20139 weeks. Audience and lifecycle research always come first \u2014 that\'s where the cohort-math-compounding lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'Can you help improve our trial-to-paid conversion rate?',
        answer:
          'Yes. This is one of the highest-impact areas for SaaS growth. The Chatterkick onboarding sequence I wrote lifted trial-to-paid conversion by 22%. I optimize the entire trial experience \u2014 from the initial sign-up page through behavior-triggered onboarding emails, in-app messaging, and the upgrade prompt. Small improvements in trial-to-paid conversion compound dramatically over time as cohorts age into expansion revenue and retention.',
      },
      {
        question: 'Do you write for B2B or B2C SaaS?',
        answer:
          'Both. B2B SaaS copy requires addressing multiple stakeholders and justifying ROI to decision-makers \u2014 plus the lifecycle architecture that runs for months between sign-up and full deployment. B2C SaaS copy requires emotional resonance, faster activation, and tighter trial-to-paid sequences. I adapt the lifecycle architecture to your specific audience, sales motion, and pricing model.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is audience and lifecycle research, then lifecycle architecture, then drafting the connected lifecycle, then iteration roadmap and one revision round across the full sequence. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['landing-page-copywriter', 'email-copywriter', 'sales-funnel-copywriter', 'ai-copywriting-consultant'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'financial-copywriter'],
  },
  {
    title: 'Info Product Copywriter',
    slug: 'info-product-copywriter',
    shortDescription:
      'Info-product copy anchored on the 340% ROAS Abundant TSL + Stefan Georgi\'s Copy Accelerator (where he hired me as Copy Chief). Webinar funnels, launch sequences, and evergreen systems for courses, coaching programs, and high-ticket masterminds.',
    metaTitle: 'Info Product Copywriter | 340% ROAS Abundant + CA Labs',
    metaDescription:
      'Senior info-product copywriter behind the 340% ROAS Abundant TSL on Facebook cold traffic + Stefan Georgi hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Webinar funnels, launch sequences, evergreen systems. Fixed-price engagements.',
    headline: 'Info Product Copywriter Behind the 340% ROAS Abundant TSL + CA Labs',
    subheadline:
      '"Everything is on point and on brief! You knocked it out of the park with those!" That\'s Devon Brown, founder of Just Throw Some Sexy On It, on copy I shipped him. The Abundant TSL I wrote drove <strong>340% ROAS</strong> on Facebook cold traffic. And Stefan Georgi \u2014 the copywriter behind over $1B in tracked sales \u2014 hired me as Copy Chief inside Copy Accelerator\'s CA Labs. If your course launches at $50K when the offer should do $500K, or your evergreen webinar funnel converts at 1% when it should clear 4%, this is the kind of work I do.',
    heroImage: '/images/industries/info-products.jpg',
    heroImageAlt: 'Online learning and digital education',
    heroStats: {
      primary: { value: '340%', label: 'Abundant Info-Product TSL ROAS (Facebook Cold)' },
      secondary: [
        { value: 'CA Labs', label: 'Stefan Georgi Hired Me as Copy Chief' },
        { value: 'Millions', label: 'Per-Launch Revenue on Multi-Week Sequences' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Info-product copy written for',
      items: [
        'Abundant (340% ROAS Info-Product TSL)',
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
        'Just Throw Some Sexy On It (Devon Brown)',
        'Zero to One (John Immel)',
        'Course Creators + Coaching Programs',
        'Live + Evergreen Webinar Funnels',
      ],
    },
    definition: {
      term: 'info-product copywriting',
      text: 'Info-product copywriting is direct-response copy for digital knowledge products \u2014 online courses, coaching programs, membership sites, masterminds, and digital downloads. Because info products have no physical form, the copy IS the product experience until purchase. The skill is creating viscerally specific desire for an intangible transformation, in the format the buyer expects (long-form sales page, webinar, launch sequence) and at the price point your offer requires.',
    },
    sections: [
      {
        heading: 'Why Most Info-Product Launches Stall at $50K When the Offer Should Do $500K',
        content:
          'You\'re a course creator, coach, or info-product founder. You have an offer, an email list, an audience that knows who you are. You launch. The number lands at $50K when you and your team had been forecasting $500K.\n\n' +
          'Here\'s why. Info products have no physical form, no ingredient list, no return policy that reassures the prospect. The copy is the product experience until the credit card hits. Most info-product copywriters can write for one of those constraints \u2014 they can describe the transformation OR they can architect the launch sequence \u2014 but not both.\n\n' +
          'Door one: the copy describes a beautiful transformation, but the launch sequence sags. Email open rates fall 60% across the launch week. Cart-open day converts at 0.4% when it should clear 2%. Cart close hits a wall because the urgency mechanism wasn\'t set up in pre-launch. You did $50K on a launch that the same offer would do $500K with a properly architected sequence.\n\n' +
          'Door two: the launch sequence is sharp, but the sales page can\'t do the heavy lifting. Trust signals are thin. The mechanism feels generic. The price feels expensive instead of inevitable. Your launch traffic clicks through to a page that doesn\'t convert at the rate the funnel math needs.\n\n' +
          'The structural problem isn\'t willpower or word choice. It\'s that most info-product copywriters write the sales page OR the launch sequence \u2014 not the connected system. The skill the info-product back-end actually rewards: writing the sales page, the launch sequence, the webinar script, AND the follow-up emails as one persuasion architecture where every step compounds the trust the next step needs.',
      },
      {
        heading: '340% Abundant, $1B-Operator Stefan Georgi, Multi-Million-Per-Launch Sequences \u2014 Recent Info-Product Wins',
        content:
          'The <strong>Abundant TSL</strong> I wrote drove <strong>340% ROAS</strong> on Facebook cold traffic. Long-form info-product TSL on cold paid traffic is one of the harder asset types in info-product copywriting; 340% ROAS clears the funnel math most operators forecast and miss.\n\n' +
          'Stefan Georgi \u2014 the copywriter behind over <strong>$1 billion</strong> in tracked sales \u2014 hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. Copy Accelerator runs the highest-tier info-product mastermind in DR; the Copy Chief role is the role that reviews the copy operators inside the room are about to ship.\n\n' +
          'Devon Brown at Just Throw Some Sexy On It came back: <em>"Everything is on point and on brief! You knocked it out of the park with those!"</em> Multi-week launch sequences I\'ve shipped have generated millions in revenue per launch for course creators and coaches.\n\n' +
          'If you have a launch coming or an evergreen funnel running and the numbers aren\'t where they need to be, I work as a control-beater. Send me your current sales page or launch sequence, your back-end metrics (cart-open CVR, email open/click rates, refund rate), and the offer brief. I\'ll tell you on the strategy call exactly where the persuasion architecture is leaking and whether I can write something that beats your control.',
      },
      {
        heading: 'The Info-Product Copywriter Top DR Operators Hire',
        content:
          'Stefan Georgi (CA Labs / $1B in tracked sales) hired me as Copy Chief. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor running info-product-adjacent offers, clocked <strong>300% ROAS</strong> on a funnel I wrote.\n\n' +
          'Zane Myers, an entrepreneur shipping info-product offers, came back with: <em>"All I can say is absolutely brilliant, Rob! I can\'t improve on it."</em>\n\n' +
          'Mark Shay, who has seen more launch copy than most, put it on record: <em>"Rob is probably the most methodical copywriter I\'ve seen. This impresses me."</em>\n\n' +
          'These are operators with their own money on the line. Info-product launches don\'t reward writers who can\'t architect the persuasion sequence \u2014 the launch math clears them out inside one bad cycle. DR operators at this level keep handing me info-product work \u2014 and that\'s the proof that matters more than any individual stat.',
      },
      {
        heading: 'How I Architect an Info-Product Launch That Beats Your Current Control',
        content:
          'Every info-product engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audience + offer research: I mine your customer interviews, sales-call recordings, course-completion-rate data, refund reasons, and competitor info-product offers for the exact language your buyer uses about the transformation. The angle and the mechanism come out of this layer, not a brainstorming session. My AI workflow processes 50+ competitor info-product TSLs and thousands of customer reviews while a manual pass reads three.',
          'Phase 2 \u2014 Launch architecture: I map every step of the launch \u2014 pre-launch hooks, launch-day open, cart-open emails, mid-cart objection handling, cart-close urgency, post-cart follow-up \u2014 against the persuasion arc the buyer needs to walk. Most launches die because the cart-close emails are doing work the pre-launch should have done. The architecture phase prevents that.',
          'Phase 3 \u2014 Drafting + persuasion-arc compounding: I draft the long-form sales page, the launch email sequence, the webinar script (live or evergreen), and the follow-up emails as a connected system. Every step compounds the trust the next step needs. Two-to-three subject-line and headline variations per piece for split testing.',
          'Phase 4 \u2014 Evergreen handoff or relaunch roadmap: a sequenced plan for converting the launch into an evergreen funnel (if applicable) plus a relaunch roadmap for the next cycle. One revision round across the full launch system is included.',
        ],
      },
      {
        heading: 'Asset Types I Write for Course Creators, Coaches, and Mastermind Operators',
        content:
          'Info-product businesses don\'t buy copy by category \u2014 they buy connected launch systems. Each asset has different mechanics, but they\'re engineered to work as one. The asset types below are the ones I ship most often for course creators, coaching programs, and mastermind operators.',
        bullets: [
          '<a href="/services/vsl-copywriter">VSL Copywriter</a> \u2014 long-form video sales letters for info-product offers. The asset that converts cold traffic and warmed list traffic at the same level.',
          '<a href="/services/sales-page-copywriter">Sales Page Copywriter</a> \u2014 long-form info-product sales pages. Abundant 340% ROAS anchors the info-product cold-traffic TSL track.',
          '<a href="/services/sales-funnel-copywriter">Sales Funnel Copywriter</a> \u2014 end-to-end info-product launch funnel architecture, including webinar funnel + email sequence + sales page + post-cart follow-up.',
          '<a href="/services/email-copywriter">Email Copywriter</a> \u2014 multi-week launch sequences that have generated millions per launch + evergreen nurture and promotional sequences.',
          '<a href="/services/landing-page-copywriter">Landing Page Copywriter</a> \u2014 application funnels for high-ticket coaching, lead-magnet pages, and webinar registration bridges.',
          '<a href="/services/ad-copywriter">Ad Copywriter</a> \u2014 cold-traffic ad copy feeding info-product TSLs and webinar funnels. Abundant 340% ROAS ran through this exact ad-suite workflow.',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Abundant Info-Product TSL',
        category: 'Cold-Traffic Facebook TSL',
        metric: '340% ROAS',
        detail: 'Long-form info-product TSL converting Facebook cold traffic at 340% Return on Ad Spend.',
      },
      {
        name: 'Copy Accelerator / CA Labs',
        category: 'Copy Chief Engagement',
        metric: 'Hired by Stefan Georgi',
        detail: '"We hired Rob as our Copy Chief for CA Labs!" \u2014 Stefan Georgi, the copywriter behind over $1B in tracked sales.',
      },
      {
        name: 'Multi-Week Info-Product Launches',
        category: 'Launch Sequences',
        metric: 'Millions Per Launch',
        detail: 'Pre-launch through cart-close email sequences for course creators, coaches, and digital-product founders.',
      },
      {
        name: 'JTSSOI / Devon Brown',
        category: 'Info-Product Sales Page',
        metric: '"On point and on brief"',
        detail: '"Everything is on point and on brief! You knocked it out of the park with those!"',
      },
    ],
    deliverables: [
      { title: 'Info-Product VSL/TSL Scripts', description: 'Long-form video and text sales letters for info-product offers. Abundant 340% ROAS anchors the cold-traffic track.' },
      { title: 'Long-Form Sales Pages', description: 'Sales pages for courses, coaching programs, masterminds, and digital products with the persuasion architecture launches require.' },
      { title: 'Launch Email Sequences', description: 'Pre-launch through cart-close sequences engineered as one connected persuasion arc \u2014 not separate emails handed to different writers.' },
      { title: 'Webinar Scripts', description: 'Live and evergreen webinar scripts \u2014 hook, teaching, transition, offer, close \u2014 with the timing and pacing that prevents early drop-off.' },
      { title: 'Application Funnels', description: 'High-ticket coaching application pages and follow-up sequences that pre-qualify before the sales call.' },
      { title: 'Evergreen Funnel Handoff', description: 'Conversion of launch assets into an evergreen funnel that runs without ongoing manual launches.' },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered for the course creator, coach, or mastermind operator who needs the launch math to clear what the offer should actually do \u2014 not what last cycle settled for.',
    testimonialIds: ['2', '3', '9', '8', '21', '6'],
    portfolioItems: [
      { title: 'Abundant', category: 'Sales Page' },
      { title: 'Just Throw Some Sexy On It!', category: 'Sales Page' },
    ],
    heroCta: { label: 'Audit my info-product launch', href: '/contact' },
    midCta: {
      headline: 'Ready for an info-product launch that beats your current control?',
      subtext:
        'Book a free strategy call. Send me your current sales page or launch sequence, your back-end metrics (cart-open CVR, email open/click rates, refund rate), and the offer brief \u2014 I\'ll tell you honestly where the persuasion architecture is leaking and whether I can write something that beats your control.',
    },
    faqs: [
      {
        question: 'What does an info-product copywriter actually do?',
        answer:
          'A senior info-product copywriter writes the connected launch system that converts your warmed list and cold paid traffic into course buyers, coaching applicants, or mastermind members \u2014 long-form sales page, webinar script, multi-week launch email sequence, application funnel, and post-cart follow-up \u2014 all engineered as one persuasion architecture where every step compounds the trust the next step needs. The Abundant TSL I wrote drove 340% ROAS on Facebook cold traffic. Multi-week launch sequences I\'ve shipped have generated millions per launch for course creators and coaches.',
      },
      {
        question: 'Are you taking new info-product clients?',
        answer:
          'I take a selective number of new info-product engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write info-product copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, info-product hook patterns, launch-sequence pacing, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI processes 50+ competitor info-product TSLs and thousands of customer reviews while a manual pass reads three. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does info-product copywriting cost?',
        answer:
          'Info-product engagements are fixed-price. A standalone sales page or VSL/TSL starts at $10K. A full launch system (sales page + multi-week email sequence + webinar script + post-cart follow-up) typically starts at $25K. High-ticket coaching application funnels (application page + nurture + sales-call prep) start at $15K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a launch that does $500K instead of $50K on the same audience pays for the writer 10x in the first cycle.',
      },
      {
        question: 'How long does it take to write an info-product launch?',
        answer:
          'A standalone info-product VSL or sales page takes 3\u20134 weeks from kickoff to final draft. A full launch system (sales page + multi-week email sequence + webinar script + post-cart follow-up) runs 6\u20139 weeks. Audience and offer research always come first \u2014 that\'s where the persuasion-arc compounding lift lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'Can you write for high-ticket coaching and mastermind programs?',
        answer:
          'Yes. High-ticket coaching and masterminds require a different persuasion architecture than low-ticket info products \u2014 the prospect is making a significant financial commitment, which means the copy needs to pre-qualify, build deep trust, demonstrate transformational value, and justify the investment all before the sales call. I write application funnels, long-form sales pages that justify premium pricing, webinar scripts that build authority and drive applications, and email sequences designed for high-ticket conversion.',
      },
      {
        question: 'What asset types do you write for course creators, coaches, and mastermind operators?',
        answer:
          'Front-end: long-form sales pages (Abundant 340% ROAS anchors the track), VSLs, TSLs, webinar funnels (live and evergreen), application funnels for high-ticket. Launch: multi-week email sequences from pre-launch through cart-close. Evergreen: nurture sequences, automated funnels, evergreen webinar systems. Ad copy: cold-traffic Meta, YouTube, and native suites feeding the funnels. Every asset is written to function as part of the connected launch system.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is audience and offer research, then launch architecture, then drafting + persuasion-arc compounding, then evergreen handoff or relaunch roadmap and one revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-page-copywriter', 'sales-funnel-copywriter', 'email-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'health-supplement-copywriter'],
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}

export function getAllVerticalSlugs(): string[] {
  return verticals.map((v) => v.slug)
}
