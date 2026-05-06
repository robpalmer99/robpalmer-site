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
          'Phase 4 \u2014 Platform-review map + revisions: a compliance-review map flagging anything your legal team should review, including alternative phrasings for any line a reviewer might challenge. One comprehensive revision round across the full funnel is included.',
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
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is compliance and audience research, then funnel architecture and AOV math, then the compliant-by-design drafting, then a compliance-review map and one comprehensive revision round across the full funnel. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-funnel-copywriter', 'email-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'ecommerce-dtc-copywriter'],
  },
  {
    title: 'Financial Copywriter',
    slug: 'financial-copywriter',
    shortDescription:
      'Direct-response copy for financial services, investing, and trading. From Wall Street brands to indie financial publishers — copy that converts while meeting compliance standards.',
    metaTitle: 'Financial Copywriter | DR Copy for Financial Services & Investing',
    metaDescription:
      'Expert financial copywriter with Fortune 500 experience (Morgan Stanley, Citibank). Direct-response copy for financial services, investing, and trading brands.',
    headline: 'Financial Copywriter',
    subheadline:
      'Direct-response copy for financial services, investing, and trading brands.',
    heroImage: '/images/industries/financial-services.jpg',
    heroImageAlt: 'Financial markets and trading data',
    definition: {
      term: 'financial copywriting',
      text: 'Financial copywriting is direct-response copy for financial services, investment products, trading platforms, and financial publishers. It demands deep market literacy, regulatory awareness (SEC, FINRA, FTC), and the ability to build trust with the most skeptical audience in direct response — people who have been burned by financial promises before.',
    },
    sections: [
      {
        heading: 'Financial Copy That Converts and Complies',
        content:
          'Financial copywriting demands a unique combination of persuasion skill and regulatory awareness. Having written for Fortune 500 financial brands including Morgan Stanley and Citibank, I understand how to craft compelling financial offers that respect compliance boundaries.\n\n' +
          'Whether you are selling a trading newsletter, an investment course, a financial advisory service, or an insurance product, the copy needs to be aggressive enough to convert while careful enough to stay within <a href="https://www.sec.gov" target="_blank" rel="noopener noreferrer">SEC</a>, <a href="https://www.finra.org" target="_blank" rel="noopener noreferrer">FINRA</a>, and <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer">FTC</a> regulations.',
      },
      {
        heading: 'Fortune 500 Financial Foundations',
        content:
          'My financial copywriting experience spans the full spectrum — from institutional marketing for major Wall Street banks to direct-response campaigns for independent financial publishers.\n\n' +
          'Writing for Morgan Stanley taught me how to communicate with sophisticated, high-net-worth audiences. Writing for Citibank taught me how to drive response at scale within tight compliance frameworks.\n\n' +
          'This range gives me a unique perspective: I can write with the credibility and authority of a Wall Street brand while employing the conversion techniques that drive direct-response results.',
      },
      {
        heading: 'Understanding the Financial Buyer',
        content:
          'Financial prospects are the most skeptical audience in direct response. They have heard every claim, seen every chart pattern, and been burned by enough bad advice to develop strong defenses against marketing.\n\n' +
          'My copy cuts through that skepticism by leading with credibility, demonstrating genuine expertise, and making offers that feel like opportunities rather than pitches.\n\n' +
          'The key is building trust first — then presenting the offer as the logical next step for someone who has already decided to take action.',
      },
      {
        heading: 'Long-Form Financial Promotions',
        content:
          'Long-form financial promotions — the kind published by Agora, Stansberry, and similar publishers — are one of my specialties. These 5,000 to 10,000+ word pieces require deep research, sophisticated narrative construction, and an ability to maintain reader engagement across a lengthy persuasion sequence.\n\n' +
          'I bring the same research-driven, AI-enhanced process to financial promotions that I use across all my work, resulting in promotions that are both deeply researched and strategically compelling.',
      },
      {
        heading: 'AI-Enhanced Financial Research',
        content:
          'Financial copywriting requires more research than almost any other niche. I use AI tools to analyze market trends, track competitor positioning, identify the specific fears and desires driving financial buyers right now, and monitor the regulatory landscape before writing a single word.\n\n' +
          'This compressed research process means your promotion launches faster — without sacrificing the depth of insight that makes financial copy convert.',
      },
    ],
    deliverables: [
      { title: 'Long-Form Promotions', description: 'Agora-style financial promotions that convert sophisticated buyers.' },
      { title: 'VSL & TSL Scripts', description: 'Video and text sales letters for financial products and newsletters.' },
      { title: 'Email Sequences', description: 'Launch and nurture sequences for financial subscriber lists.' },
      { title: 'Landing Pages', description: 'High-converting pages for newsletter sign-ups and lead generation.' },
      { title: 'Ad Copy', description: 'Compliant ad copy for Facebook, Google, and native platforms.' },
      { title: 'Webinar Scripts', description: 'Presentation scripts for financial education and offer delivery.' },
    ],
    testimonialIds: ['1', '11', '26', '14'],
    portfolioItems: [
      { title: 'Monetari Fund', category: 'Sales Page' },
    ],
    faqs: [
      {
        question: 'What types of financial products have you written for?',
        answer:
          'I have written for investment newsletters, trading education courses, financial advisory services, insurance products, credit services, and institutional financial brands including Morgan Stanley and Citibank. Each vertical requires different compliance awareness and persuasion angles.',
      },
      {
        question: 'Do you understand financial advertising compliance?',
        answer:
          'Yes. While I always recommend legal review, I have extensive experience writing financial copy that meets SEC, FINRA, and FTC guidelines. I understand required disclaimers, the boundaries of performance claims, and how to write persuasively within regulatory constraints.',
      },
      {
        question: 'Can you write long-form financial promotions?',
        answer:
          'Absolutely. Long-form financial promotions — the kind published by Agora, Stansberry, and similar publishers — are one of my specialties. These require deep research, sophisticated narrative construction, and an ability to maintain reader engagement across 5,000-10,000+ words.',
      },
      {
        question: 'How do you handle income and performance claims in financial copy?',
        answer:
          'I use required disclaimers, avoid guaranteed returns, and focus on the educational value and strategic insights of the product rather than specific income promises. I build the case through logic, track record, and social proof rather than unsubstantiated performance claims.',
      },
      {
        question: 'What is your experience with Fortune 500 financial brands?',
        answer:
          'I have written direct-response campaigns for Morgan Stanley and Citibank, among other major financial institutions. These engagements taught me how to write with institutional credibility while still driving measurable response — a combination that few copywriters can deliver.',
      },
      {
        question: 'Do you write for cryptocurrency and trading platforms?',
        answer:
          'Yes, I write for crypto, forex, and trading platforms. These niches have especially strict compliance requirements and skeptical audiences, which makes strong direct-response fundamentals even more critical. I focus on education-led angles that build trust before presenting the offer.',
      },
    ],
    relatedServices: ['sales-letter-copywriter', 'email-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['saas-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'E-Commerce & DTC Copywriter',
    slug: 'ecommerce-dtc-copywriter',
    shortDescription:
      'Conversion-focused copy for DTC brands and e-commerce businesses. Product pages, email sequences, and ad funnels that drive revenue and maximize customer lifetime value.',
    metaTitle: 'E-Commerce & DTC Copywriter | Conversion Copy for Online Brands',
    metaDescription:
      'Expert e-commerce and DTC copywriter. Product pages, email sequences, and ad funnels that drive revenue and maximize customer lifetime value. $523M+ in results.',
    headline: 'E-Commerce & DTC Copywriter',
    subheadline:
      'Conversion copy that turns browsers into buyers and buyers into repeat customers.',
    heroImage: '/images/industries/ecommerce-dtc.jpg',
    heroImageAlt: 'E-commerce shopping and online retail',
    definition: {
      term: 'e-commerce & DTC copywriting',
      text: 'E-commerce and DTC (direct-to-consumer) copywriting is conversion-focused copy for online brands that sell directly to customers. It spans every revenue touchpoint — product pages, ad creative, email sequences, upsells, and retention campaigns — engineered as a connected system to maximize conversion rate, average order value, and customer lifetime value.',
    },
    sections: [
      {
        heading: 'DTC Copy That Drives Revenue',
        content:
          'E-commerce and DTC brands live and die by their copy. Your product page headline, your abandoned cart email, your post-purchase upsell sequence — each one is either making you money or leaving it on the table.\n\n' +
          'I write end-to-end e-commerce copy that maximizes conversion at every touchpoint, from the first ad impression to the fifth repeat purchase.\n\n' +
          'The difference between a 2% conversion rate and a 4% conversion rate is not clever wordplay — it is strategic persuasion engineering.',
      },
      {
        heading: 'Beyond Product Descriptions',
        content:
          'Most e-commerce copywriters write product descriptions. I write persuasion systems. Every piece of copy I write for your brand is engineered to move a specific metric.',
        bullets: [
          'Product pages built as sales pages in miniature — not just descriptions',
          'Email sequences designed as strategic revenue engines — not just "touching base"',
          'Ad creative that pre-qualifies buyers so your funnel works harder',
          'Every touchpoint targeted at conversion rate, average order value, or customer lifetime value',
        ],
      },
      {
        heading: 'Maximizing Customer Lifetime Value',
        content:
          'The most profitable DTC brands do not just acquire customers — they keep them. I write post-purchase sequences, subscription upsells, loyalty program copy, and re-engagement campaigns designed to maximize customer lifetime value.\n\n' +
          'This is where the real margin lives in e-commerce. Most brands focus all their budget on acquisition and ignore the back-end — which is like filling a bucket with a hole in it.\n\n' +
          'My direct-response expertise plugs those holes and turns one-time buyers into repeat customers.',
      },
      {
        heading: 'The Full E-Commerce Revenue Stack',
        content:
          'I write every piece of copy in the e-commerce revenue stack: ad creative that drives qualified traffic, landing pages that capture leads, product pages that convert browsers, email sequences that recover abandoned carts and drive repeat purchases, and upsell/cross-sell sequences that grow AOV. Each piece is connected to the next in a cohesive system — not a collection of disconnected tactics.',
      },
      {
        heading: 'AI-Powered Competitive Intelligence',
        content:
          'I use AI tools to analyze your competitors\' funnels, identify the ad angles getting the most engagement in your niche, and map the customer journey from first click to fifth purchase.\n\n' +
          'This data-driven approach means your copy is not based on guesswork or generic best practices — it is built on real intelligence about what is actually working in your specific market right now.',
      },
    ],
    deliverables: [
      { title: 'Product Page Copy', description: 'Conversion-optimized product pages that sell, not just describe.' },
      { title: 'Email Sequences', description: 'Welcome, abandoned cart, post-purchase, and win-back sequences.' },
      { title: 'Ad Copy', description: 'Scroll-stopping creative for Facebook, Google, TikTok, and native.' },
      { title: 'Landing Pages', description: 'Lead capture and direct-sale pages optimized for your funnel.' },
      { title: 'Upsell & Cross-Sell Copy', description: 'Post-purchase offers that grow AOV without eroding trust.' },
      { title: 'Subscription Copy', description: 'Subscribe-and-save copy that builds recurring revenue.' },
    ],
    testimonialIds: ['5', '34', '32', '22'],
    portfolioItems: [],
    faqs: [
      {
        question: 'What e-commerce platforms do you write for?',
        answer:
          'I write copy that works across all major platforms — Shopify, WooCommerce, BigCommerce, and custom builds. The platform does not change the persuasion principles; it only changes the technical implementation, which your development team handles.',
      },
      {
        question: 'Do you write email sequences for DTC brands?',
        answer:
          'Yes. Email is often the highest-ROI channel for DTC brands. I write welcome sequences, abandoned cart recovery, post-purchase upsells, win-back campaigns, and promotional broadcasts. Each sequence is designed to drive revenue while building the brand relationship.',
      },
      {
        question: 'Can you help with our ad creative?',
        answer:
          'Absolutely. I write ad copy for Facebook/Meta, Google, TikTok, and native platforms. For DTC brands, I focus on scroll-stopping hooks, product-specific angles, and creative frameworks that drive qualified traffic to your funnel.',
      },
      {
        question: 'How do you approach product page optimization?',
        answer:
          'I treat every product page as a mini sales page. That means leading with benefits over features, using social proof strategically, addressing objections before they become barriers, and structuring the page to guide the visitor toward the buy button. The goal is not just to describe the product — it is to make it irresistible.',
      },
      {
        question: 'Do you work with subscription-based DTC brands?',
        answer:
          'Yes. Subscription models have specific copywriting challenges — you need to sell the convenience and value of recurring delivery while overcoming the commitment objection. I write subscribe-and-save offers, retention sequences, and re-engagement campaigns specifically designed for subscription DTC brands.',
      },
      {
        question: 'What metrics should I expect to improve?',
        answer:
          'My DTC copy is designed to move three core metrics: conversion rate (turning more browsers into buyers), average order value (through upsells and cross-sells), and customer lifetime value (through retention and re-engagement sequences). The specific improvements depend on your current baseline, but the goal is always measurable revenue growth.',
      },
    ],
    relatedServices: ['email-copywriter', 'ad-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'saas-copywriter'],
  },
  {
    title: 'ClickBank Copywriter',
    slug: 'clickbank-copywriter',
    shortDescription:
      'Proven ClickBank funnels that generate affiliate-friendly conversions. VSLs, TSLs, and upsell sequences built for the ClickBank marketplace.',
    metaTitle: 'ClickBank Copywriter | High-Converting ClickBank Funnels',
    metaDescription:
      'Hire a ClickBank copywriter with proven results. VSLs, sales pages, and complete funnels engineered for ClickBank marketplace success.',
    headline: 'ClickBank Copywriter',
    subheadline:
      'High-converting ClickBank funnels that attract affiliates and maximize EPC.',
    heroImage: '/images/industries/clickbank.jpg',
    heroImageAlt: 'Digital marketing analytics and performance metrics',
    definition: {
      term: 'ClickBank copywriting',
      text: 'ClickBank copywriting is direct-response copy built specifically for the <a href="https://www.clickbank.com" target="_blank" rel="noopener noreferrer">ClickBank</a> affiliate marketplace. It requires understanding ClickBank\'s unique ecosystem — affiliate incentives, EPC (earnings per click) economics, gravity scoring, and compliance review processes — to create funnels that convert buyers AND attract top affiliates to promote your offer.',
    },
    sections: [
      {
        heading: 'ClickBank Funnels That Win',
        content:
          '<a href="https://www.clickbank.com" target="_blank" rel="noopener noreferrer">ClickBank</a> is a unique marketplace with its own ecosystem of affiliates, buyers, and success patterns.\n\n' +
          'Writing copy that succeeds on ClickBank requires understanding what motivates affiliates to promote your offer, what converts ClickBank\'s buyer demographics, and how to structure funnels that maximize earnings per click (EPC) while maintaining sustainable refund rates.\n\n' +
          'I have built ClickBank funnels that generate consistent, scalable revenue — the kind that attract top affiliates and keep them promoting month after month.',
      },
      {
        heading: 'Engineered for Affiliate Appeal',
        content:
          'The best ClickBank offer in the world will fail if affiliates do not promote it. Affiliates look at one thing above all else: EPC (earnings per click). They want proof that your funnel converts their traffic into commissions.\n\n' +
          'I write copy that converts AND gives affiliates the metrics they need to see — high EPCs, competitive gravity scores, and strong AOVs.\n\n' +
          'I also create affiliate tools pages, swipe copy, and promotional materials that make it easy for affiliates to drive traffic to your offer.',
      },
      {
        heading: 'Complete ClickBank Funnels',
        content:
          'Each step is optimized to maximize average order value while keeping refund rates manageable. The most successful ClickBank offers are not built on a single great sales page — they are built on a complete system where every step lifts the overall economics of the funnel.',
        bullets: [
          'VSL or TSL sales page — the front-end conversion engine',
          'Order bump — an immediate add-on at checkout',
          'OTO1 upsell — the primary post-purchase offer',
          'OTO2 upsell — a complementary or premium upgrade',
          'Downsell — a lower-priced alternative for declined upsells',
          'Thank-you page — confirmation plus next-step engagement',
        ],
      },
      {
        heading: 'ClickBank Compliance Done Right',
        content:
          'ClickBank has its own compliance review process that can trip up even experienced copywriters. I stay current with ClickBank\'s content guidelines and approval processes, writing copy designed to pass review while still being aggressive enough to convert.\n\n' +
          'This includes understanding their stance on income claims, health claims, testimonial usage, and refund policy presentation. Getting your offer approved the first time saves weeks of back-and-forth revisions.',
      },
      {
        heading: 'Data-Driven Angle Selection',
        content:
          'Before writing a word, I use AI tools to analyze what is currently working on ClickBank — which hooks are driving the highest gravity scores, which angles are resonating with buyers, and which funnel structures are producing the best EPCs.\n\n' +
          'This competitive intelligence means your funnel is built on what is proven to work right now, not on guesswork or last year\'s tactics.',
      },
    ],
    deliverables: [
      { title: 'VSL & TSL Scripts', description: 'Front-end sales scripts optimized for ClickBank buyer demographics.' },
      { title: 'Order Bump Copy', description: 'Impulse-purchase offers that add revenue at checkout.' },
      { title: 'Upsell & Downsell Pages', description: 'OTO sequences that maximize AOV post-purchase.' },
      { title: 'Affiliate Tools Page', description: 'Swipe copy, email templates, and banners for affiliate partners.' },
      { title: 'Email Sequences', description: 'Buyer follow-up and promotional sequences for your list.' },
      { title: 'Ad Copy', description: 'Paid traffic creative designed to drive cold traffic to your funnel.' },
    ],
    testimonialIds: ['4', '20', '18', '16'],
    portfolioItems: [
      { title: 'Weight-Loss VSL', category: 'VSL' },
      { title: 'Coffee Slimmer Pro', category: 'VSL' },
      { title: 'Puradrop', category: 'VSL' },
      { title: 'Biz-Op Hybrid Sales Page & VSL', category: 'Hybrid' },
    ],
    faqs: [
      {
        question: 'What ClickBank categories do you specialize in?',
        answer:
          'I have the most experience in health/supplements, self-help, and business opportunity offers on ClickBank. These are the highest-volume categories and the ones where direct-response copy makes the biggest difference in conversion rates.',
      },
      {
        question: 'Do you understand ClickBank compliance?',
        answer:
          'Yes. I stay current with ClickBank\'s content guidelines and approval processes. I write copy designed to pass review while still being aggressive enough to convert. This includes understanding their stance on income claims, health claims, and testimonial usage.',
      },
      {
        question: 'Can you help launch a new ClickBank offer?',
        answer:
          'Absolutely. I can write your complete funnel — from the core VSL/TSL through all upsells and downsells — as well as affiliate tools and promotional materials. I understand the launch dynamics that drive ClickBank success, including affiliate recruitment and promotional sequencing.',
      },
      {
        question: 'What EPC can I expect from your funnels?',
        answer:
          'EPC varies significantly by niche, traffic source, and price point. However, my ClickBank funnels consistently produce competitive EPCs that attract quality affiliates. One client reported 300% Return on Ad Spend from a funnel I wrote. The goal is always to build a funnel where the economics work for both you and your affiliates.',
      },
      {
        question: 'Do you create affiliate promotional materials?',
        answer:
          'Yes. I create complete affiliate tools packages including email swipe copy, banner ad copy, social media templates, and promotional angles. Making it easy for affiliates to promote your offer is critical to ClickBank success — the easier you make it, the more affiliates will run with your offer.',
      },
      {
        question: 'How do you keep refund rates low?',
        answer:
          'Low refund rates start with honest, specific copy that sets accurate expectations. I avoid over-promising and focus on building genuine desire for the actual product being delivered. I also optimize the post-purchase experience — thank-you pages, onboarding emails, and consumption sequences — to ensure buyers feel good about their purchase.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-funnel-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'SaaS Copywriter',
    slug: 'saas-copywriter',
    shortDescription:
      'Direct-response copy for SaaS companies. Landing pages, onboarding sequences, upgrade campaigns, and churn-reduction copy that drives MRR growth.',
    metaTitle: 'SaaS Copywriter | Conversion Copy for Software Companies',
    metaDescription:
      'Expert SaaS copywriter applying direct-response principles to software marketing. Landing pages, trial sequences, and upgrade copy that drives MRR growth.',
    headline: 'SaaS Copywriter',
    subheadline:
      'Direct-response copy that drives trials, conversions, and MRR growth.',
    heroImage: '/images/industries/saas.jpg',
    heroImageAlt: 'Software dashboard and data analytics',
    definition: {
      term: 'SaaS copywriting',
      text: 'SaaS copywriting is persuasive copy for software-as-a-service companies, covering every stage of the customer lifecycle — from trial sign-up through activation, upgrade, and retention. Unlike traditional SaaS marketing that leads with features, direct-response SaaS copy focuses on driving measurable actions tied to business metrics like MRR, churn rate, and customer lifetime value.',
    },
    sections: [
      {
        heading: 'SaaS Copy With a Direct-Response Edge',
        content:
          'Most SaaS copy is bland, feature-focused, and interchangeable. "Streamline your workflow. Boost productivity. Sign up free." Sound familiar?\n\n' +
          'That is because most SaaS companies hire brand copywriters when what they actually need is a direct-response copywriter. I bring urgency, specificity, emotional triggers, and clear value propositions to SaaS marketing — the same principles that have generated $523M+ in tracked results across other industries.\n\n' +
          'The result: landing pages that convert, trial sequences that activate, and upgrade campaigns that grow MRR.',
      },
      {
        heading: 'The Full SaaS Customer Journey',
        content:
          'SaaS revenue is not a single conversion — it is a journey from awareness to trial to paid to upgrade to retention. Each piece is connected to the next in a cohesive persuasion system. Most SaaS companies optimize individual steps in isolation. I optimize the entire journey.',
        bullets: [
          'Ad creative that drives qualified trials',
          'Onboarding sequences that drive activation',
          'Upgrade emails that convert free users to paid',
          'Retention campaigns that reduce churn',
        ],
      },
      {
        heading: 'Translating Features into Revenue',
        content:
          'The biggest mistake in SaaS copy is leading with features. Your prospects do not care about your API or your dashboard — they care about the problems those features solve and the outcomes they enable.\n\n' +
          'I translate technical capabilities into compelling benefits that resonate with decision-makers, using AI-powered competitive analysis to understand exactly what your market values most.\n\n' +
          'The copy speaks the language of business outcomes, not technical specifications.',
      },
      {
        heading: 'Reducing Churn Through Copy',
        content:
          'Most SaaS companies treat churn as a product problem. Often, it is a copy problem.\n\n' +
          'Users churn because they never fully activated, because they forgot why they signed up, or because they do not understand the value they are getting.\n\n' +
          'I write onboarding sequences that drive activation, engagement emails that demonstrate ongoing value, and re-engagement campaigns that save at-risk accounts. Reducing churn by even 1-2% can have a massive impact on annual recurring revenue.',
      },
      {
        heading: 'I Speak Your Metrics',
        content:
          'I understand MRR, ARR, churn rate, LTV, CAC, activation rate, and how copy impacts each one.\n\n' +
          'This means I can write copy aligned with your specific growth objectives — whether that is improving trial-to-paid conversion, increasing expansion revenue, or reducing time-to-value during onboarding.\n\n' +
          'Every piece of copy I write has a measurable business objective behind it.',
      },
    ],
    deliverables: [
      { title: 'Landing Pages', description: 'High-converting pages for free trials, demos, and sign-ups.' },
      { title: 'Onboarding Sequences', description: 'Email sequences that drive activation and time-to-value.' },
      { title: 'Upgrade Campaigns', description: 'Copy that converts free users to paid and paid to premium.' },
      { title: 'Churn-Reduction Copy', description: 'Re-engagement sequences that save at-risk accounts.' },
      { title: 'Ad Copy', description: 'PPC and social ad copy that drives qualified trial sign-ups.' },
      { title: 'Feature Launch Copy', description: 'Announcement emails and in-app messaging for new features.' },
    ],
    testimonialIds: ['23', '24', '7', '22'],
    portfolioItems: [],
    faqs: [
      {
        question: 'Do you understand SaaS metrics?',
        answer:
          'Yes. I understand MRR, ARR, churn rate, LTV, CAC, activation rate, and how copy impacts each metric. This allows me to write copy that is aligned with your specific growth objectives rather than generic "sign up now" messaging.',
      },
      {
        question: 'Can you write for technical products?',
        answer:
          'Absolutely. I have written for complex B2B software products and can quickly grasp technical concepts. The key is translating technical capabilities into business outcomes that decision-makers care about — and that is exactly what direct-response training excels at.',
      },
      {
        question: 'What SaaS copy deliverables do you offer?',
        answer:
          'I write landing pages, free trial sequences, onboarding emails, upgrade campaigns, churn-reduction sequences, feature announcement copy, case study narratives, and ad creative for SaaS companies. Every piece is grounded in direct-response principles.',
      },
      {
        question: 'How is direct-response copywriting different from typical SaaS copy?',
        answer:
          'Traditional SaaS copy focuses on features and brand voice. Direct-response copy focuses on driving a specific, measurable action — sign up, activate, upgrade, or renew. It uses urgency, specificity, social proof, and clear value propositions rather than vague brand messaging. The result is copy that actually moves metrics.',
      },
      {
        question: 'Can you help improve our trial-to-paid conversion rate?',
        answer:
          'Yes. This is one of the highest-impact areas for SaaS growth. I optimize the entire trial experience — from the initial sign-up page through onboarding emails, in-app messaging, and the upgrade prompt. Small improvements in trial-to-paid conversion compound dramatically over time.',
      },
      {
        question: 'Do you write for B2B or B2C SaaS?',
        answer:
          'Both. B2B SaaS copy requires addressing multiple stakeholders and justifying ROI to decision-makers. B2C SaaS copy requires simplicity and emotional resonance. I adapt my approach to match your specific audience and sales motion.',
      },
    ],
    relatedServices: ['landing-page-copywriter', 'email-copywriter', 'ad-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'financial-copywriter'],
  },
  {
    title: 'Info Product Copywriter',
    slug: 'info-product-copywriter',
    shortDescription:
      'High-converting copy for courses, coaching programs, and digital products. Launch sequences, webinar funnels, and evergreen sales systems that scale.',
    metaTitle: 'Info Product Copywriter | Copy for Courses, Coaching & Digital Products',
    metaDescription:
      'Expert info product copywriter. Launch sequences, webinar funnels, and evergreen sales systems for courses, coaching programs, and digital products.',
    headline: 'Info Product Copywriter',
    subheadline:
      'Launch sequences and sales systems that turn expertise into scalable revenue.',
    heroImage: '/images/industries/info-products.jpg',
    heroImageAlt: 'Online learning and digital education',
    definition: {
      term: 'info product copywriting',
      text: 'Info product copywriting is direct-response copy for digital knowledge products — online courses, coaching programs, membership sites, and digital downloads. Because info products have no physical form, the copy must create desire for an intangible transformation, making it one of the most demanding specialties in direct response.',
    },
    sections: [
      {
        heading: 'Info Products Live and Die by Their Copy',
        content:
          'Unlike physical products, info products have no tangible form factor to sell. There is no packaging to hold, no ingredients list to scan, no weight to feel.\n\n' +
          'The only thing standing between your prospect and their credit card is your copy.\n\n' +
          'That is why info product copy demands the highest level of direct-response skill — it has to create desire for something the prospect cannot see, touch, or taste before buying. The copy IS the product experience until they purchase.',
      },
      {
        heading: 'Launch Sequences That Generate Momentum',
        content:
          'Whether you are doing a live launch, an evergreen webinar, or a challenge funnel, the copy sequence is everything.\n\n' +
          'I write launch sequences that build anticipation, establish authority, create urgency, and drive sales within a compressed window. Each email, each page, each touchpoint is carefully orchestrated to move the prospect closer to the buy button.\n\n' +
          'My launch copy has generated millions in revenue for course creators, coaches, and digital product companies.',
      },
      {
        heading: 'Evergreen Systems That Scale',
        content:
          'Live launches are powerful but exhausting. The real money in info products is in evergreen sales systems that generate revenue 24/7 without constant launches.\n\n' +
          'I build evergreen webinar funnels, automated email sequences, and sales pages designed to convert consistently over time — so you can scale without burning out.\n\n' +
          'The best info product businesses run on systems, not sprints.',
      },
      {
        heading: 'High-Ticket Coaching and Program Copy',
        content:
          'High-ticket coaching programs and masterminds require a fundamentally different copywriting approach.\n\n' +
          'The prospect is making a significant financial commitment, which means the copy needs to pre-qualify, build deep trust, demonstrate transformational value, and justify the investment — all before the sales call.\n\n' +
          'The goal is to deliver prospects who are pre-sold before they ever speak to your sales team.',
        bullets: [
          'Application funnels that pre-qualify high-intent prospects',
          'Long-form sales pages that justify premium pricing',
          'Webinar scripts that build authority and drive applications',
          'Email sequences designed for high-ticket conversion',
        ],
      },
      {
        heading: 'Webinar Scripts That Convert',
        content:
          'A well-crafted webinar script is essentially a structured VSL with interaction points.\n\n' +
          'I understand the timing, pacing, and persuasion architecture that makes webinars convert — from the hook that prevents early drop-off, through the teaching section that builds authority, to the transition and offer that drives action.\n\n' +
          'Whether you are running live or evergreen, the script is the engine that powers the entire funnel.',
      },
    ],
    deliverables: [
      { title: 'Sales Pages', description: 'Long-form sales pages for courses, programs, and digital products.' },
      { title: 'Launch Sequences', description: 'Multi-email sequences that build anticipation and drive launch revenue.' },
      { title: 'Webinar Scripts', description: 'Live and evergreen webinar scripts built on proven conversion frameworks.' },
      { title: 'Email Sequences', description: 'Nurture, promotional, and automated sequences for your list.' },
      { title: 'Application Funnels', description: 'High-ticket application pages and follow-up sequences.' },
      { title: 'Ad Copy', description: 'Lead-gen and direct-sale ad creative for paid traffic.' },
    ],
    testimonialIds: ['2', '3', '9', '8'],
    portfolioItems: [
      { title: 'Abundant', category: 'Sales Page' },
      { title: 'Just Throw Some Sexy On It!', category: 'Sales Page' },
    ],
    faqs: [
      {
        question: 'What types of info products do you write for?',
        answer:
          'I write for online courses, coaching programs, membership sites, digital downloads, software tools, and training programs. Each format requires slightly different persuasion approaches, but the core direct-response principles remain the same.',
      },
      {
        question: 'Do you write webinar scripts?',
        answer:
          'Yes. I write both live webinar scripts and evergreen webinar scripts. A well-crafted webinar script is essentially a structured VSL with interaction points. I understand the timing, pacing, and persuasion architecture that makes webinars convert.',
      },
      {
        question: 'Can you write for high-ticket coaching programs?',
        answer:
          'Absolutely. High-ticket coaching requires a different approach than low-ticket info products — the copy needs to pre-qualify prospects, build deep trust, and justify a significant investment. I write application funnels, long-form sales pages, and email sequences designed for high-ticket conversion.',
      },
      {
        question: 'Do you write launch sequences or just sales pages?',
        answer:
          'I write complete launch systems — the entire email sequence from pre-launch through open cart to close, plus the sales page, order form, and any supporting pages. A great sales page means nothing without a great launch sequence to drive qualified traffic to it.',
      },
      {
        question: 'Can you build an evergreen funnel for my course?',
        answer:
          'Yes. Evergreen funnels are one of the most valuable assets an info product business can have. I write the evergreen webinar script, automated email sequence, sales page, and follow-up sequences designed to convert consistently over time without manual launches.',
      },
      {
        question: 'How do you approach copy for a course that does not exist yet?',
        answer:
          'I work with you to define the transformation your course delivers, identify the ideal buyer, and craft the positioning before writing a word of copy. In fact, writing the sales copy first is a proven strategy — it forces clarity on the offer and validates demand before you invest in creating the content.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'sales-funnel-copywriter', 'email-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'health-supplement-copywriter'],
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}

export function getAllVerticalSlugs(): string[] {
  return verticals.map((v) => v.slug)
}
