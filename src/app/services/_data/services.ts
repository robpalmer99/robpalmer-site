import type { FAQItem } from '@/components/blocks/FAQAccordion'

export interface Service {
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

export const services: Service[] = [
  {
    title: 'VSL Copywriter',
    slug: 'vsl-copywriter',
    shortDescription:
      'Video sales letters that hold cold traffic through the close. Recent client funnel: 8% on cold. Past VSLs at $30M, $40M, and $27M.',
    metaTitle: 'VSL Copywriter | Video Sales Letter Expert',
    metaDescription:
      'Senior VSL copywriter for cold-traffic offers. Recent client funnel converting at 8% on cold; past VSLs at $30M, $40M, and $27M. Fixed-price engagements, two-week kickoffs.',
    headline: 'VSL Copywriter — Cold Traffic Converting at 8%',
    subheadline:
      '"The funnel you wrote is doing great. Sales page converting at 8% on cold traffic." That\'s a recent client report. Three earlier VSLs of mine did $30M, $40M, and $27M on single offers. If your VSL bleeds attention before the close, this is the kind of work I do.',
    heroImage: '/images/services/vsl-copywriter.jpg',
    heroImageAlt: 'Video production and storytelling for VSL copywriting',
    heroStats: {
      primary: { value: '8%', label: 'Cold-Traffic Conversion (Recent Client VSL)' },
      secondary: [
        { value: '$30M', label: 'Mobile Profits VSL (#1 ClickBank)' },
        { value: '$40M', label: 'Gluco 6 Supplement VSL' },
        { value: '$27M', label: 'Stock Investing VSL' },
      ],
    },
    credentialBar: {
      heading: 'Trusted by',
      items: [
        'ClickBank Platinum Vendors',
        'Copy Accelerator (as Copy Chief)',
        'DTC Brands',
        'Supplement Marketers',
        'Financial Publishers',
      ],
    },
    sections: [
      {
        heading: 'Why Most VSLs Bleed Ad Spend Long Before the Close',
        content:
          'You launch a VSL. You send traffic. Then you watch the heatmap: most viewers gone before the 90-second mark, the rest drifting off somewhere in the middle, almost nobody reaching the order button. Meanwhile, the spend keeps draining. $500/day, $2,000/day, $5,000/day in spend \u2014 lit on fire because the script can\'t hold the viewer to minute 3.\n\n' +
          'Here\'s the structural reason that keeps happening. A VSL isn\'t a blog post read over slides. It\'s a 15-to-45-minute persuasion sequence that has to hold a cold, skeptical stranger through every minute and walk them to a credit card. That demands strategic pacing, pattern interrupts, emotional escalation, and knowing exactly when to pivot from story to offer.\n\n' +
          'Most VSL copywriters carry one or two of those instincts. The ones whose VSLs keep scaling after the novelty wears off have all four \u2014 plus the AI leverage to generate and test hook variations at speed, plus a working swipe library that already knows what\'s converting in your vertical right now.',
      },
      {
        heading: 'What 8% on Cold Traffic Actually Looks Like',
        content:
          'Recent client report, verbatim: <em>"The funnel you wrote is doing great. Sales page converting at 8% on cold traffic."</em> That\'s Conor Reynolds, an online marketer running paid traffic to a VSL-plus-sales-page funnel I wrote for him.\n\n' +
          '8% on cold isn\'t a lucky split test. It\'s the predictable outcome of doing the strategic work upfront \u2014 finding the audience\'s actual buying language (not the language they think they use), building a unique mechanism that reframes what the offer is solving, and mapping the sequence to where the prospect sits on Schwartz\'s awareness scale.\n\n' +
          'When a VSL is architected that way, ROAS follows. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I wrote for him. Stefan Georgi \u2014 the copywriter behind over $1B in tracked sales \u2014 hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Justin Goff publicly credited me with stepping up and knocking it out of the park. These are operators with their own money on the line.',
      },
      {
        heading: 'The VSLs Behind $30M, $40M, and $27M Offers',
        content:
          'Mobile Profits \u2014 the biz-op VSL I wrote that became the <strong>#1 offer on ClickBank</strong> \u2014 generated over <strong>$30 million</strong> and converted up to 4% on cold traffic. The Gluco 6 blood-sugar VSL did <strong>$40 million</strong>. A stock-investing VSL I architected did <strong>$27 million</strong>.\n\n' +
          'Those numbers don\'t come from a clever turn of phrase. They come from reading a market, finding the angle nobody else has spotted, and building a script that earns every minute of attention it asks for. After 40+ years writing direct response \u2014 internalising the lineage from Schwartz, Halbert, and Hopkins through Georgi\'s RMBC method and Kell\'s VSL flow patterns \u2014 the structural problems in a script are visible to me the way a bad engine is audible to a mechanic. The diagnostic alone is worth more than another draft.',
      },
      {
        heading: 'Already Have a VSL? I Work as a Control Beater',
        content:
          'If you have a VSL running and the numbers aren\'t where you need them, the answer usually isn\'t "write another version." It\'s to diagnose what\'s killing the retention curve, then engineer the rewrite to fix that specifically.\n\n' +
          'Most operators arrive here after trying the wrong fixes \u2014 a junior writer who delivered a draft that read well and sold worse, an AI tool that produced something polished and generic, an agency that staffed it to whoever was free. None of those approaches is wrong because the people are bad. They\'re wrong because the structure was missing one of the three brains a VSL needs to convert in 2026.\n\n' +
          'Send me your current script and the back-end numbers. I\'ll tell you on the strategy call exactly where it\'s losing the prospect \u2014 and whether I think I can beat it.',
      },
      {
        heading: 'How I Architect a VSL That Holds Attention Through the Close',
        content:
          'Every VSL I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Research: I mine forums, reviews, competitor scripts, and customer-support transcripts to find the exact words your prospects use to describe the pain. The hook comes out of this layer, not out of a brainstorm. My AI workflow runs through 50+ competitor VSLs in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Architecture: I build the unique mechanism, lock the awareness-stage entry point, and map the sequence that carries viewers from hook to close without losing momentum at minute 6, minute 12, or the price reveal.',
          'Phase 3 \u2014 Writing: every sentence stress-tested against one question \u2014 would this keep a cold, skeptical viewer watching? If not, it gets cut or rewritten. Three to four hook variations and two close variations are written from the start, not bolted on later.',
          'Phase 4 \u2014 Production handoff: full slide-by-slide notation, timing cues, on-screen text callouts. Your editor doesn\'t have to interpret anything. The script ships ready to record.',
        ],
      },
      {
        heading: 'VSLs Across Health, Finance, Biz-Op, and DTC',
        content:
          'A VSL for a joint supplement is built differently than a VSL for a stock newsletter or a DTC launch. The compliance constraints differ, the buyer psychology differs, the regulators reading along differ. I\'ve shipped winning VSLs across every major DR vertical.',
        bullets: [
          '$40M generated \u2014 Gluco 6 blood-sugar supplement VSL',
          '$30M generated \u2014 Mobile Profits biz-op VSL (#1 on ClickBank)',
          '$27M generated \u2014 stock-investing newsletter VSL (compliance-aware long-form)',
          'E-commerce and DTC product launches',
          'ClickBank vendors and affiliates',
          'Info products, coaching, and high-ticket offers',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits',
        category: 'Biz-Op VSL',
        metric: '$30M Generated',
        detail: 'Up to 4% conversion rate. #1 ClickBank offer.',
      },
      {
        name: 'Gluco 6',
        category: 'Supplement VSL',
        metric: '$40M Generated',
        detail: 'Blood sugar supplement. Cold traffic.',
      },
      {
        name: 'Stock Investing VSL',
        category: 'Financial VSL',
        metric: '$27M Generated',
        detail: 'Stock investing vertical.',
      },
    ],
    deliverables: [
      {
        title: 'Full VSL Script',
        description:
          'Complete video sales letter script (typically 3,000\u20138,000 words) with slide-by-slide notation, timing cues, and production notes.',
      },
      {
        title: 'Hook Variations',
        description:
          'Multiple opening hook options for split testing, each engineered to stop the scroll and earn the first 30 seconds of attention.',
      },
      {
        title: 'Close Variations',
        description:
          'Alternative closing sequences to test different urgency angles, guarantee framing, and price anchoring strategies.',
      },
      {
        title: 'Audience Research Brief',
        description:
          'Detailed research document mapping your target audience\'s fears, desires, beliefs, and language patterns.',
      },
      {
        title: 'Competitive Analysis',
        description:
          'Breakdown of top-performing competitor VSLs in your niche, with strategic insights on differentiation opportunities.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round based on your feedback, plus consultation on production optimization.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered to maximize your front-end conversion rate \u2014 not just fill a Google Doc.',
    testimonialIds: ['5', '4', '2', '3', '6'],
    portfolioItems: [
      { title: 'Supplement VSL \u2014 Cold Traffic', category: 'VSL' },
      { title: 'Financial Newsletter VSL', category: 'VSL' },
      { title: 'DTC Product Launch VSL', category: 'VSL' },
    ],
    midCta: {
      headline: 'Ready to ship a VSL that converts cold traffic?',
      subtext:
        'Book a free strategy call. I\'ll tell you honestly whether I can beat what you\'re running now \u2014 and what it would cost to find out.',
    },
    faqs: [
      {
        question: 'What is a VSL and why do I need a specialist VSL copywriter?',
        answer:
          'A VSL (Video Sales Letter) is a long-form video presentation \u2014 typically 15 to 45 minutes \u2014 designed to sell directly to cold traffic. It runs a structured direct-response sequence: hook, story, mechanism, proof stack, offer, close. You need a specialist because the format demands pacing, retention mechanics, and persuasion architecture that general copywriters don\'t carry in their heads. A brand writer gives you a script that sounds nice. A VSL specialist gives you one that earns the next 30 seconds of attention, every 30 seconds, until the order button.',
      },
      {
        question: 'Are you taking new VSL clients?',
        answer:
          'I take a selective number of new VSL engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write VSLs?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, hook formulas, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does a VSL cost?',
        answer:
          'VSL engagements are fixed-price. The number depends on length, offer complexity, and research scope \u2014 most VSL projects start at $10K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a VSL converting at 2% instead of 0.5% on the same traffic doesn\'t pay for itself \u2014 it changes the economics of the offer.',
      },
      {
        question: 'How long does it take to write a VSL?',
        answer:
          'A typical VSL takes 2\u20134 weeks from kickoff to final draft. That includes audience research, competitive teardown, mechanism development, strategic architecture, scripting, and one comprehensive revision round. Rush timelines are possible, but I never shortcut the research phase \u2014 that\'s where the conversion rate lives. Skipping research to save a few days is how a VSL ends up bleeding ad spend for months.',
      },
      {
        question: 'How long should a VSL be?',
        answer:
          'Length is dictated by price point and traffic temperature. Short-form VSLs (5\u201315 minutes) work for lower-priced impulse buys and lead generation. Long-form VSLs (20\u201345 minutes) are usually required for higher-ticket offers where the prospect needs more proof and more story before pulling out a card. I\'ll recommend the right length once I\'ve seen the offer \u2014 then write every second to earn its place.',
      },
      {
        question: 'What industries do you write VSLs for?',
        answer:
          'Health and supplement (including the $40M Gluco 6 VSL), financial publishers ($27M stock-investing VSL), business opportunity offers ($30M Mobile Profits \u2014 #1 on ClickBank), e-commerce and DTC, ClickBank vendors, info products, and coaching. Each vertical has its own compliance posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is research and strategic diagnostic, then architecture, then the script, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['sales-page-copywriter', 'sales-funnel-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'clickbank-copywriter'],
  },
  {
    title: 'Sales Page Copywriter',
    slug: 'sales-page-copywriter',
    shortDescription:
      'Long-form sales pages and TSLs anchored on a 9-year, $523M Belron campaign. Recent cold-traffic numbers: 8%, 340% ROAS, 5.7% opt-in-to-sale.',
    metaTitle: 'Sales Page Copywriter | High-Converting Sales Copy',
    metaDescription:
      'Senior sales page copywriter behind a 9-year, $523M Belron direct-response campaign. Recent cold-traffic numbers: 8%, 340% ROAS, 5.7% opt-in-to-sale. Fixed-price engagements.',
    headline: 'Sales Page Copywriter Behind a $523M / 9-Year Campaign',
    subheadline:
      'Five award-winning copywriters failed at the Belron sales-letter campaign before me. I took the assignment in 1996 and ran it for 9 years \u2014 $523 million in tracked sales. They were writing copy. I was architecting a sales page that kept selling for nine years.',
    heroImage: '/images/services/sales-page-copywriter.jpg',
    heroImageAlt: 'Writing and crafting persuasive sales page copy',
    heroStats: {
      primary: { value: '$523M', label: '9-Year Belron Sales Page Campaign' },
      secondary: [
        { value: '8%', label: 'Recent Client Cold-Traffic CVR' },
        { value: '340%', label: 'ROAS on Facebook (Abundant)' },
        { value: '5.7%', label: 'Opt-in-to-Sale (Monetari TSL)' },
      ],
    },
    credentialBar: {
      heading: 'Trusted by',
      items: [
        'Belron International (9-year campaign)',
        'ClickBank Platinum Vendors',
        'Copy Accelerator (as Copy Chief)',
        'Financial Publishers',
        'Info Product Creators',
        'DTC and SaaS Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Most Sales Pages Read Well and Sell Poorly',
        content:
          'You\'re sending traffic to a sales page. The clicks are coming in. But conversion sits at 0.5% \u2014 maybe 1% on a good day. You\'ve tested headlines, swapped hero images, run twelve button variants. The needle won\'t move. Meanwhile, ad spend keeps draining \u2014 $500/day, $2,000/day, $5,000/day, lit on fire because the page can\'t carry a stranger from "who is this?" to "take my money" in a single visit.\n\n' +
          'Here\'s the structural reason that keeps happening. A sales page isn\'t a brochure with a buy button. It\'s a long-form persuasion sequence \u2014 a text sales letter \u2014 that has to take a cold, skeptical stranger through a complete argument: the right hook for their awareness level, pain agitation that makes the cost of inaction feel real, a unique mechanism that reframes the solution, proof that eliminates doubt, and a close that handles every objection standing between them and their card.\n\n' +
          'Miss any one of those stages and the conversion collapses. Most sales-page copywriters get the words right and the architecture wrong. That\'s why their pages read well and sell poorly.',
      },
      {
        heading: 'The Sales Page That Ran for 9 Years and Did $523 Million',
        content:
          'In 1996, Belron \u2014 the world\'s largest auto-glass replacement business \u2014 handed me their direct-response sales-letter campaign. Five award-winning copywriters had already failed at it. I took the assignment, architected the system, and ran it for 9 years. The campaign generated <strong>$523 million</strong> in tracked sales.\n\n' +
          'The CEO, Gary Lubner, put it on record: <em>"You are our secret weapon. Keep your diary clear, please!"</em>\n\n' +
          'The campaign didn\'t compound for nine years because of a clever turn of phrase. It compounded because the structure was right \u2014 the lead matched the buyer\'s awareness stage, every objection was answered before it could form, every paragraph earned its place in a chain that pulled toward the order rather than away from it. That\'s the difference between a sales page that scales for a decade and one that sits on the page bleeding ad spend.\n\n' +
          'If you have a sales page running and the numbers aren\'t where you need them, I work as a control-beater. Send me your current page and the back-end numbers, and I\'ll tell you on the strategy call exactly where I think it\'s leaking \u2014 and whether I can write something that beats it.',
      },
      {
        heading: '8%, 340%, 5.7% \u2014 Recent Cold-Traffic Numbers',
        content:
          'Belron is the long campaign. Recent work converts cold traffic just as hard.\n\n' +
          'A funnel I wrote for Conor Reynolds is currently doing <strong>8% on cold traffic</strong> at the sales page. An info-product TSL I wrote for Abundant clocked <strong>340% ROAS on Facebook cold traffic</strong>. A compliance-aware financial-services TSL I wrote for Monetari Fund delivered <strong>5.7% opt-in-to-sale</strong>. A hybrid biz-op page I architected runs at <strong>4.8% front-end conversion</strong>.\n\n' +
          'These numbers come from applying the same battle-tested frameworks every time \u2014 PASTOR, the Perry Belcher 21-step sequence, the Brain Audit objection model \u2014 to deep customer research. Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs because that pattern recognition is what scales offers. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I wrote for him. Justin Goff publicly credited me with stepping up and knocking it out of the park.\n\n' +
          'These are operators with their own money on the line.',
      },
      {
        heading: 'How I Architect a Sales Page That Keeps Converting',
        content:
          'Every sales page and TSL I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Deep audience research: I mine forums, reviews, competitor pages, and customer-support transcripts to find the exact words your prospects use to describe the pain. The hook and headline come out of this layer, not out of a brainstorm. My AI workflow processes dozens of competitor pages in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Objection mapping: I identify every objection that could kill the sale and build the persuasion sequence to address each one at exactly the right moment. This is where most sales pages fail \u2014 they answer objections too early, too late, or not at all.',
          'Phase 3 \u2014 Architecture and writing: I build the full sales-page structure \u2014 headline, lead, story, mechanism, proof stack, offer build, close, and guarantee. Every sentence stress-tested against one question: does this move the reader closer to buying?',
          'Phase 4 \u2014 Wireframe and revision: headline variations for split testing, tightened transitions, and a wireframe showing your design team exactly where every element goes. One comprehensive revision round is included.',
        ],
      },
      {
        heading: 'Sales Pages Across Health, Finance, Info Product, and DTC',
        content:
          'A sales page for a $47 supplement is built differently than a TSL for a $2,000 coaching program or a $997 SaaS annual plan. The compliance constraints differ, the buyer psychology differs, the regulators reading along differ. I\'ve shipped converting sales pages across every major DR vertical.',
        bullets: [
          '$523M / 9 years \u2014 Belron direct-response sales-letter campaign',
          '340% ROAS on Facebook \u2014 Abundant info-product sales page',
          '5.7% opt-in-to-sale \u2014 Monetari Fund financial-services TSL (compliance-aware)',
          '4.8% front-end conversion \u2014 hybrid biz-op sales page',
          '$40M+ funnel revenue \u2014 supporting health and supplement sales pages',
          'E-commerce and DTC, ClickBank vendors, info products, SaaS annual-plan pages',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Belron / Safelite International',
        category: 'Direct-Response Sales Letter Campaign',
        metric: '$523M / 9 Years',
        detail: 'Five award-winning copywriters had failed before me. I architected and ran the campaign for nine years.',
      },
      {
        name: 'Abundant',
        category: 'Info Product Sales Page',
        metric: '340% ROAS',
        detail: 'Facebook cold traffic. Storytelling-driven long-form TSL.',
      },
      {
        name: 'Monetari Fund',
        category: 'Financial TSL',
        metric: '5.7% Opt-in to Sale',
        detail: 'Compliance-aware financial-services sales page.',
      },
      {
        name: 'Biz-Op Hybrid',
        category: 'Sales Page + VSL',
        metric: '4.8% Front-End Conversion',
        detail: 'Full-funnel copy including upsell sequence.',
      },
    ],
    deliverables: [
      {
        title: 'Full Sales Page Copy',
        description:
          'Complete long-form sales page or TSL (typically 3,000\u201310,000 words) with headlines, subheads, body copy, bullet points, testimonial placement, and CTAs.',
      },
      {
        title: 'Headline Variations',
        description:
          'Multiple headline and subhead options for split testing, each targeting different emotional angles and audience segments.',
      },
      {
        title: 'Audience Research Brief',
        description:
          'Detailed research document covering target audience pain points, desires, objections, and language patterns.',
      },
      {
        title: 'Wireframe & Copy Map',
        description:
          'Strategic layout guide showing section flow, social proof placement, and CTA positioning for your design team.',
      },
      {
        title: 'Objection Handling Matrix',
        description:
          'Complete list of buyer objections identified during research, with the copy sections that address each one.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round based on your feedback, plus recommendations for A/B testing priorities.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered to maximize your conversion rate \u2014 not just fill a Google Doc.',
    testimonialIds: ['1', '5', '4', '2', '3', '6'],
    portfolioItems: [
      { title: 'Long-Form Supplement Sales Page', category: 'Sales Page' },
      { title: 'Info Product Launch Page', category: 'Sales Page' },
      { title: 'SaaS Annual Plan Sales Page', category: 'Sales Page' },
    ],
    midCta: {
      headline: 'Ready for a sales page that beats your current control?',
      subtext:
        'Book a free strategy call. Send me what\'s running now and the back-end numbers \u2014 I\'ll tell you honestly whether I can beat it.',
    },
    faqs: [
      {
        question: 'What makes a great sales page copywriter?',
        answer:
          'Pattern recognition. A great sales-page copywriter doesn\'t guess what works \u2014 they know, because they\'ve seen the back-end data from hundreds of split tests across decades of campaigns. They understand that every element on the page serves a strategic purpose, and they have the discipline to cut anything that doesn\'t move the reader closer to the order. That\'s what 40+ years writing direct response gives you. The Belron campaign survived nine years and did $523M because of that pattern recognition \u2014 not because of a clever headline.',
      },
      {
        question: 'Are you taking new sales-page clients?',
        answer:
          'I take a selective number of new sales-page engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'What\'s the difference between a sales page and a landing page?',
        answer:
          'A sales page (or TSL \u2014 text sales letter) is a long-form persuasion sequence that has to take a reader from awareness to purchase in a single visit. A landing page is short and single-action \u2014 usually an email opt-in or webinar registration. Both need direct-response craft, but sales pages demand deeper persuasion architecture, complete objection handling, and a fully-built offer with guarantee and close.',
      },
      {
        question: 'How do you use AI to write sales pages?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, headline formulas, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does a sales page cost?',
        answer:
          'Sales-page engagements are fixed-price. The number depends on offer complexity, length, and research scope \u2014 most sales-page projects start at $10K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a sales page converting at 4% instead of 1% on the same traffic doesn\'t pay for itself \u2014 it changes the economics of the funnel.',
      },
      {
        question: 'How long should a sales page be?',
        answer:
          'It depends on offer price, traffic temperature, and audience sophistication. Cold traffic and higher-ticket offers need more proof, more objection handling, more story \u2014 so longer pages. I\'ve shipped converting sales pages from 2,000 words to over 10,000. The right length is whatever it takes to address every objection and build enough desire to close. Not a word more, not a word less.',
      },
      {
        question: 'What industries do you write sales pages for?',
        answer:
          'Direct mail and direct-response (the $523M Belron campaign), health and supplement (sales pages supporting $40M+ in funnel revenue), financial publishers (5.7% opt-in-to-sale on Monetari Fund), info products (340% ROAS on Abundant), e-commerce and DTC, ClickBank vendors, SaaS annual-plan pages, and coaching. Each vertical has its own compliance posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is research and strategic diagnostic, then objection mapping and architecture, then the page draft, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'Sales Letter Copywriter',
    slug: 'sales-letter-copywriter',
    shortDescription:
      'Long-form sales letters and TSLs in the Halbert/Carlton/Makepeace tradition. Anchored on a 9-year Belron direct-mail control that did $523M across 35+ countries.',
    metaTitle: 'Sales Letter Copywriter | Direct Mail + Digital TSL',
    metaDescription:
      'Senior sales letter copywriter behind a 9-year Belron direct-mail control that did $523M across 35+ countries. Long-form sales letters and TSLs in the Halbert/Carlton/Makepeace tradition. Fixed-price engagements.',
    headline: 'Sales Letter Copywriter Behind the Belron Direct-Mail Control: 9 Years, $523M, 35+ Countries',
    subheadline:
      'Five award-winning copywriters had already failed at the Belron direct-mail sales letter when I took it over in 1996. I architected the full package \u2014 letter, lift note, envelope teaser, order form \u2014 and ran it as a control for 9 years across 35+ countries. $523 million in tracked sales, mailed not e-mailed. The same Halbert/Carlton/Makepeace fundamentals carry into every digital TSL I write today \u2014 340% ROAS on Facebook cold traffic for Abundant, 300% for Ben Palmer\'s ClickBank offer.',
    heroImage: '/images/services/sales-letter-copywriter.jpg',
    heroImageAlt: 'Direct mail letter and envelope for sales letter copywriting',
    heroStats: {
      primary: { value: '9 Years', label: 'Belron Direct-Mail Sales-Letter Control' },
      secondary: [
        { value: '$523M', label: '35+ Countries Mailed' },
        { value: '340%', label: 'Recent TSL ROAS (Abundant, Facebook)' },
        { value: '300%', label: 'Ben Palmer ClickBank ROAS' },
      ],
    },
    credentialBar: {
      heading: 'Sales letters written for',
      items: [
        'Belron International (9-year direct-mail control)',
        'Apple Computer UK',
        'IBM',
        'Citibank',
        'National Geographic',
        'ClickBank Platinum Vendors',
      ],
    },
    sections: [
      {
        heading: 'Why Most Sales Letters Get Thrown Away \u2014 Physical or Digital',
        content:
          'A sales letter has about three seconds to earn the next thirty. Whether it lands in a physical mailbox or loads on a screen, the reader is making a snap judgment: <strong>is this worth my time, or is it going in the trash?</strong>\n\n' +
          'Most sales letters lose that battle in the first paragraph because the writer doesn\'t understand what a sales letter actually is. It\'s not a brochure. It\'s not a product description. It\'s a personal, one-to-one persuasion sequence \u2014 written as if from one human being to another \u2014 that has to earn every single sentence.\n\n' +
          'The format tolerates no filler. No corporate jargon. No "we at Company X are proud to announce." Every word either pulls the reader forward or loses them forever. On a digital TSL bleeding 0.5% conversion against $5K/day in ad spend, every weak paragraph in the lead is roughly $250\u2013$500 in wasted spend before the reader even reaches the offer. <strong>That earned-sentence discipline is what direct mail teaches and what web-only copywriters never learn.</strong>',
      },
      {
        heading: 'The 9-Year Belron Direct-Mail Control That Did $523 Million',
        content:
          'In 1996, Belron \u2014 the world\'s largest auto-glass-replacement business \u2014 handed me their direct-response sales letter. Five award-winning copywriters had already failed at it. I was the sixth. I took the assignment, architected the full package \u2014 the letter itself, the lift note, the envelope teaser, the order form \u2014 and ran it as a control for 9 years across 35+ countries. The campaign generated <strong>$523 million</strong> in tracked direct-mail sales.\n\n' +
          'The CEO, Gary Lubner, put it on record: <em>"You are our secret weapon. Keep your diary clear, please!"</em>\n\n' +
          'That control survived 9 years not because of one clever line but because the structure was right at every level \u2014 the envelope earned the open, the lift note bought the letter the dollar bill of attention it needed, the letter itself ran the full Halbert/Carlton/Makepeace persuasion sequence, and the order form closed without friction. That\'s the discipline 9-year controls demand. It\'s the same discipline that carries into every digital TSL I write today.\n\n' +
          'If you have a sales letter or TSL running and the response numbers aren\'t where you need them, I work as a control-beater. Send me your current letter and the back-end numbers \u2014 open rate, response rate, sale rate, AOV \u2014 and I\'ll tell you on the strategy call exactly where the response is leaking and whether I can write something that beats it.',
      },
      {
        heading: '340%, 300%, 5.7%, 8% \u2014 Recent TSLs and Digital Sales Letters',
        content:
          'Belron is the long direct-mail campaign. Recent digital sales letters prove the same discipline scales online.\n\n' +
          '<strong>340% ROAS</strong> on Abundant \u2014 a long-form TSL I wrote that converted Facebook cold traffic at scale. <strong>300% ROAS</strong> on a campaign I wrote for Ben Palmer, a ClickBank Platinum vendor. <strong>5.7% opt-in-to-sale</strong> on Monetari Fund \u2014 a compliance-aware financial-services TSL. <strong>8% on cold traffic</strong> at the sales-letter step of a recent Conor Reynolds funnel.\n\n' +
          'These numbers come from applying the same fundamentals every time \u2014 Halbert\'s grease-slide construction, Carlton\'s first-paragraph hook discipline, Makepeace\'s seven characteristics, the PASTOR sequence \u2014 to deep customer research. Stefan Georgi (the copywriter behind over $1 billion in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs because that pattern recognition is what scales offers across his portfolio. Justin Goff publicly credited me with stepping up and knocking it out of the park.\n\n' +
          'These are operators with their own money on the line.',
      },
      {
        heading: 'How I Architect a Sales Letter That Earns Every Sentence',
        content:
          'Every sales letter and TSL I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Deep audience research: I mine forums, reviews, competitor letters, and customer-support transcripts to find the exact words your prospects use to describe the pain. The hook and the lead come out of this layer, not out of a brainstorm. My AI workflow processes dozens of competitor sales letters and customer-research transcripts in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Voice and angle: a sales letter lives or dies on voice. I determine the right persona, narrative angle, and emotional throughline to build trust with your specific audience \u2014 and the right format (classic letter, magalog, lift-note package, or digital TSL) for the medium and offer.',
          'Phase 3 \u2014 Architecture and writing: I build the full persuasion sequence \u2014 envelope teaser or subject line, lead, story, mechanism, proof stack, offer build, guarantee, close, and order-form copy. Every sentence stress-tested against one question: does this earn the next sentence?',
          'Phase 4 \u2014 Variations and testing roadmap: opening variations for split testing, envelope or subject-line teasers, headline alternatives, and an order-form pass. One comprehensive revision round is included.',
        ],
      },
      {
        heading: 'Sales Letters Across Direct Mail, TSL, Health, Finance, Info and DTC',
        content:
          'The sales-letter format adapts to virtually any medium and market \u2014 physical direct mail, digital TSL, magalog, lift-note package, advertorial. The fundamentals stay the same. The execution has to match the medium and the buyer.',
        bullets: [
          '$523M / 9 years across 35+ countries \u2014 Belron direct-mail sales-letter package',
          '340% ROAS on Facebook \u2014 Abundant info-product TSL',
          '5.7% opt-in-to-sale \u2014 Monetari Fund financial-services TSL (compliance-aware)',
          '8% cold-traffic CVR \u2014 Conor Reynolds sales-letter funnel step',
          'Apple Computer UK direct-mail package \u2014 response so strong it overwhelmed dealer demand',
          'Health and supplement, ClickBank vendors, info products, financial newsletter promotions, magalog-style sales letters, letter-format email series',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Belron / Safelite International',
        category: 'Direct-Mail Sales-Letter Campaign',
        metric: '$523M / 9 Years',
        detail: 'Five award-winning copywriters had already failed. I architected the full package \u2014 letter, lift note, envelope teaser, order form \u2014 and ran it as a control across 35+ countries for nine years.',
      },
      {
        name: 'Apple Computer UK',
        category: 'Direct Mail Package',
        metric: 'A/B Test Winner',
        detail: 'Response so strong it overwhelmed dealer demand.',
      },
      {
        name: 'Abundant',
        category: 'Info Product TSL',
        metric: '340% ROAS',
        detail: 'Facebook cold traffic. Story-driven long-form digital sales letter.',
      },
      {
        name: 'Monetari Fund',
        category: 'Financial TSL',
        metric: '5.7% Opt-in to Sale',
        detail: 'Compliance-aware financial-services digital sales letter.',
      },
    ],
    deliverables: [
      {
        title: 'Full Sales Letter Copy',
        description:
          'Complete sales letter or TSL (typically 2,000\u20138,000 words) with personal voice, storytelling arc, proof elements, and compelling close.',
      },
      {
        title: 'Opening Variations',
        description:
          'Multiple lead and opening options for split testing \u2014 story leads, problem-agitation leads, and curiosity leads.',
      },
      {
        title: 'Order Form Copy',
        description:
          'Persuasive order form or checkout page copy that reinforces the offer and reduces cart abandonment.',
      },
      {
        title: 'Envelope/Subject Line Teaser Copy',
        description:
          'For direct mail: envelope teaser copy. For digital TSLs: email subject lines and pre-header text to drive opens.',
      },
      {
        title: 'Audience Research Brief',
        description:
          'Comprehensive research document mapping prospect psychology, competitive landscape, and persuasion opportunities.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round with strategic notes on testing and optimization priorities.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable shaped by 40+ years of sales-letter craft \u2014 from Fortune 500 direct mail to digital TSLs that converted on Facebook cold traffic.',
    testimonialIds: ['1', '5', '4', '2', '3', '6', '18'],
    portfolioItems: [
      { title: 'Health Supplement TSL', category: 'Sales Letter' },
      { title: 'Financial Newsletter Promo', category: 'Sales Letter' },
      { title: 'Info Product Launch Letter', category: 'Sales Letter' },
    ],
    midCta: {
      headline: 'Ready for a sales letter that earns every sentence \u2014 and beats your current control?',
      subtext:
        'Send me your current letter or TSL and the response numbers \u2014 I\'ll tell you on the call where it\'s leaking and whether I can beat it.',
    },
    faqs: [
      {
        question: 'What does a sales letter copywriter do?',
        answer:
          'I write long-form, personal, one-to-one persuasion copy \u2014 sales letters and TSLs (text sales letters) \u2014 in the tradition of Gary Halbert, John Carlton, and Clayton Makepeace. The form started in classic direct mail and migrated online as the TSL: a long-form text page that reads like a letter from one person directly to the prospect, using voice, story, mechanism, proof, and a hard close. The fundamentals are identical across the two media. The execution differs. (A sales page, by contrast, can use any layout \u2014 design-led, multi-column, graphic-heavy. The highest-converting sales pages borrow heavily from sales-letter discipline.)',
      },
      {
        question: 'Are you taking new sales-letter clients?',
        answer:
          'I take a selective number of new sales-letter engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write sales letters?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, headline formulas, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer (190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, 512 pieces of my own copy). I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does a sales letter cost?',
        answer:
          'Sales-letter engagements are fixed-price. Most sales-letter and TSL projects start at $10K \u2014 pricing depends on length, complexity, format (direct mail vs. digital TSL), and research scope. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a sales letter that converts at 4% instead of 1% on the same traffic doesn\'t pay for itself \u2014 it changes the economics of the offer.',
      },
      {
        question: 'How long does it take to write a sales letter?',
        answer:
          'A sales letter or TSL typically takes 4\u20136 weeks from briefing to final deliverables. That includes deep audience research, voice and angle work, full persuasion-sequence writing, order-form and envelope copy (or subject-line and pre-header for digital), and one comprehensive revision round. The timeline depends on length and offer complexity. I never rush research \u2014 that\'s where sales-letter response is won or lost.',
      },
      {
        question: 'Direct mail vs. digital TSL \u2014 which one do I need?',
        answer:
          'It depends on price point, audience intent, and where your buyer\'s attention lives. Higher-priced offers (think $500+ AOV, financial newsletters, premium info products) and high-intent buyer lists often justify direct mail \u2014 physical mail still cuts through where digital ad costs are crushing margins. Lower-priced offers, cold-traffic acquisition, ClickBank, and most consumer offers run as digital TSLs. The fundamentals \u2014 voice, story, mechanism, proof, close \u2014 are identical across both. I write both, and I\'ll tell you on the strategy call which format your offer warrants.',
      },
      {
        question: 'What industries do you write sales letters for?',
        answer:
          '$523M / 9 years across 35+ countries on the Belron direct-mail campaign. 340% ROAS on the Abundant info-product TSL. 5.7% opt-in-to-sale on the Monetari Fund financial TSL. 8% cold-traffic CVR at the sales-letter step of the Conor Reynolds funnel. Plus health and supplement (TSLs supporting $40M+ in funnel revenue), info products, financial newsletter promotions, ClickBank vendors, e-commerce and DTC. Each vertical has its own compliance posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with full scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is research and voice work, then architecture, then the letter draft, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['sales-page-copywriter', 'email-copywriter'],
    relatedVerticals: ['financial-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'Email Copywriter',
    slug: 'email-copywriter',
    shortDescription:
      'Email sequences that compound into revenue. Recent: 300% ROAS on a ClickBank funnel (Ben Palmer); 22% trial-to-paid lift on a SaaS onboarding sequence (Chatterkick).',
    metaTitle: 'Email Copywriter | Revenue-Driving Email Sequences',
    metaDescription:
      'Senior email copywriter for direct-response operators. Recent: 300% ROAS on a ClickBank email-driven funnel; 22% trial-to-paid lift on a SaaS onboarding sequence. Fixed-price engagements.',
    headline: 'Email Copywriter Behind 300% ROAS and a 22% Trial-to-Paid Lift',
    subheadline:
      '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend." That\'s Ben Palmer, a ClickBank Platinum vendor, on an email-driven funnel I wrote for him. A SaaS onboarding sequence I wrote for Chatterkick lifted trial-to-paid by 22%. If your list is hitting send and getting silence, this is the kind of work I do.',
    heroImage: '/images/services/email-copywriter.jpg',
    heroImageAlt: 'Email marketing and inbox management for email copywriting',
    heroStats: {
      primary: { value: '300%', label: 'ROAS on a ClickBank Email Funnel (Ben Palmer)' },
      secondary: [
        { value: '22%', label: 'Trial-to-Paid Lift (Chatterkick SaaS)' },
        { value: '$30M+', label: 'Funnel Revenue Supported by Email Sequences' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Email sequences written for',
      items: [
        'Ben Palmer / ClickBank Platinum Vendors',
        'Chatterkick (SaaS Platform)',
        'Copy Accelerator (as Copy Chief)',
        'Supplement Marketers',
        'Info Product Creators',
        'DTC and Financial Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Most Email Sequences Get Marked as Read and Forgotten',
        content:
          'You have a list. You\'re hitting send. But the open rates are sliding, the click-throughs are flat, and revenue-per-subscriber makes you wince. A 50,000-name list that should be doing $30K, $50K, $100K a month is throwing off a fraction of that \u2014 every dormant day is money quietly evaporating off the back end.\n\n' +
          'Here\'s the structural reason that keeps happening. Most businesses still treat email like a megaphone \u2014 blast the list, hope for clicks, repeat. That isn\'t email marketing. That\'s noise. Your subscribers learned to ignore it years ago \u2014 and every dormant blast trains them harder.\n\n' +
          'A real email sequence is a multi-step persuasion system where every message has a specific strategic job. The subject line earns the open. The first line earns the scroll. The body builds the case. The CTA earns the click only after the persuasion work is done. Miss any one of those and the email dies in the inbox \u2014 and the next email is harder to open, because the prospect has now learned your name doesn\'t pay them attention back.',
      },
      {
        heading: '300% ROAS, 22% Trial-to-Paid \u2014 Recent Email Wins',
        content:
          'Ben Palmer, a ClickBank Platinum vendor, put it on record: <em>"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."</em> That\'s on the email-driven funnel I wrote for him.\n\n' +
          'Chatterkick \u2014 a SaaS platform \u2014 needed an onboarding sequence that would actually convert free trials into paying customers. The behavior-triggered sequence I wrote for them lifted trial-to-paid by <strong>22%</strong>. Their CEO\'s reaction: <em>"Rob, you are awesome. I love it. And Holy Moly, you are super quick!"</em>\n\n' +
          'Neither result came from a clever subject line. Both came from the same playbook: behavior-triggered messages that meet each subscriber where they are in your funnel, address the specific objection holding them at that point, and move them toward the next step at exactly the right moment. Email that works isn\'t one good email \u2014 it\'s a sequence of small, mapped pushes that compound into revenue.\n\n' +
          'If you have an email sequence running and the numbers aren\'t where you need them, I work as a control-beater. Send me your current sequence and the back-end metrics \u2014 I\'ll tell you on the strategy call exactly where it\'s losing the click, and whether I can write something that beats it.',
      },
      {
        heading: 'The Email Copywriter Top DR Operators Hire',
        content:
          'Email is the channel where one bad message kills the sequence and one great message can pay for the entire funnel. That\'s why operators with their own money on the line don\'t hand it to juniors.\n\n' +
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Justin Goff publicly credited me with stepping up and knocking it out of the park. Email sequences I\'ve written have powered <strong>$30M+ VSL funnels</strong>, multi-week launches that did millions in revenue, and the daily broadcast streams that feed those launches in the first place.\n\n' +
          'Email is still the highest-ROI channel for DR operators \u2014 but only when the copy is engineered to convert, not just to fill the schedule.',
      },
      {
        heading: 'How I Build an Email Sequence That Compounds Into Revenue',
        content:
          'Every email sequence I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audit, deliverability, research: I look at your existing email metrics, audit sender reputation and deliverability posture so the work doesn\'t ship into spam folders, mine your customer reviews, and study competitor sequences in your vertical to find the exact language your buyers use about the problem. The angle and the voice come out of this layer, not out of brainstorming. My AI workflow processes 50+ competitor sequences and thousands of reviews in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Sequence architecture: I map every email\'s job before writing a word. Where each message sits in the buyer\'s journey, what objection it handles, what micro-commitment it asks for, how it sets up the next message. Most sequences die because emails 2 and 6 are both trying to do the same job; the architecture phase prevents that.',
          'Phase 3 \u2014 Subject lines, body, and CTA: every email written tight \u2014 subject line that earns the open, first line that earns the scroll, body that builds the case, CTA that lands only after the persuasion is done. Two-to-three subject line variations per email built in for split testing from the start.',
          'Phase 4 \u2014 Sequence map and handoff: full strategy diagram with timing, segmentation triggers, and conversion goals so your ESP-side team can ship without guessing. One comprehensive revision round across the full sequence is included.',
        ],
      },
      {
        heading: 'Launches, Nurture, Abandon Cart, Daily Broadcast',
        content:
          'Every sequence type does a different job. A launch is a controlled escalation toward a deadline. A nurture is a slow build of trust over weeks. An abandon cart is three to five emails that recover revenue already half-paid for. A daily broadcast is a relationship channel that drives consistent revenue and feeds your launches. I\'ve written all of them across health, finance, supplement, ClickBank, info product, SaaS, and DTC.',
        bullets: [
          '300% ROAS \u2014 ClickBank email-driven funnel (Ben Palmer)',
          '22% trial-to-paid lift \u2014 Chatterkick SaaS onboarding sequence',
          '$30M+ funnel revenue \u2014 supplement, biz-op, and financial VSL email streams',
          'Multi-week launch sequences \u2014 info products and coaching, generating millions per launch',
          'Daily broadcasts \u2014 Ben Settle / Seinfeld method, adapted to your brand voice',
          'Abandon cart, re-engagement, post-purchase upsell \u2014 the automated layer that runs while you sleep',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Ben Palmer / ClickBank Platinum Vendor',
        category: 'Email-Driven Funnel',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."',
      },
      {
        name: 'Chatterkick',
        category: 'SaaS Onboarding Sequence',
        metric: '22% Trial-to-Paid Lift',
        detail: 'Behavior-triggered onboarding sequence converting free trials into paying customers.',
      },
      {
        name: 'Info Product / Supplement Launches',
        category: 'Multi-Week Launch Sequences',
        metric: 'Millions in Revenue',
        detail: 'Pre-launch, launch, and post-launch email sequences supporting full digital and supplement product launches.',
      },
    ],
    deliverables: [
      {
        title: 'Complete Email Sequence',
        description:
          'Full sequence of emails (typically 5\u201315 emails) with subject lines, preview text, body copy, and CTAs for each.',
      },
      {
        title: 'Subject Line Variations',
        description:
          'Multiple subject line options per email for A/B testing, plus pre-header text optimized for mobile preview.',
      },
      {
        title: 'Sequence Strategy Map',
        description:
          'Visual flow diagram showing the email sequence logic, timing, segmentation triggers, and conversion goals.',
      },
      {
        title: 'Broadcast Email Templates',
        description:
          'Reusable email templates and frameworks your team can adapt for ongoing daily or weekly broadcasts.',
      },
      {
        title: 'Audience Segmentation Guide',
        description:
          'Recommendations for list segmentation based on behavior, engagement, and purchase history to improve targeting.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round across the full sequence, plus recommendations for ongoing optimization.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered to turn your email list into a revenue asset \u2014 not just a subscriber count.',
    testimonialIds: ['4', '22', '2', '3', '6'],
    portfolioItems: [
      { title: 'Product Launch Email Sequence', category: 'Email' },
      { title: 'Abandon Cart Recovery Emails', category: 'Email' },
      { title: 'Daily Broadcast Series', category: 'Email' },
    ],
    midCta: {
      headline: 'Ready to make your list earn what it should?',
      subtext:
        'Book a free strategy call. Send me your current sequence and the back-end metrics \u2014 I\'ll tell you honestly where the revenue is hiding and whether I can write something that pulls it out.',
    },
    faqs: [
      {
        question: 'What types of email sequences do you write?',
        answer:
          'Launch sequences (pre-launch, launch, post-launch), welcome and nurture sequences, abandon cart and cart-recovery flows, re-engagement campaigns, daily and weekly broadcasts, automated sales sequences, post-purchase upsell streams, and SaaS onboarding (the Chatterkick sequence I wrote delivered a 22% trial-to-paid lift). Each type does a different strategic job \u2014 architecture, voice, and persuasion intensity change accordingly.',
      },
      {
        question: 'Are you taking new email clients?',
        answer:
          'I take a selective number of new email engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write email sequences?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, hook formulas, subject-line patterns, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. I make every strategic and structural call. The AI carries the volume.',
      },
      {
        question: 'What does email copywriting cost?',
        answer:
          'Email engagements are fixed-price. Full sequences typically start at $10K; shorter tactical sequences (5-email abandon cart, 3-email re-engagement) are priced lower. The exact number depends on sequence length, strategic complexity, and research scope. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a sequence that lifts revenue-per-subscriber by 30% on an existing list is pure margin \u2014 it costs nothing in additional ad spend.',
      },
      {
        question: 'How long does it take to write an email sequence?',
        answer:
          'A full launch sequence (7\u201315 emails) typically takes 2\u20134 weeks from kickoff to final draft. A behavior-triggered onboarding sequence runs 3\u20134 weeks because the segmentation logic is more complex. A short tactical sequence (5-email abandon cart, re-engagement) is 1\u20132 weeks. The research and strategy phase always comes first \u2014 that\'s where the conversion lift lives.',
      },
      {
        question: 'Can you write daily broadcast emails?',
        answer:
          'Yes. Daily broadcasts are one of the most powerful relationship-building strategies in DR \u2014 the Ben Settle model, the Seinfeld method, soap opera sequences. I know the lineage and adapt the approach to your brand voice. I can write a bank of daily emails, build templates and frameworks your team can run with, or both.',
      },
      {
        question: 'What industries do you write email sequences for?',
        answer:
          'Health and supplement (sequences supporting $30M+ in VSL funnel revenue), ClickBank (Ben Palmer\'s 300% ROAS funnel), SaaS (Chatterkick\'s 22% trial-to-paid lift), info products and coaching (multi-week launches generating millions per launch), financial publishers, e-commerce and DTC. Each vertical has its own deliverability posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is research and audit, then sequence architecture, then the email drafts, then one comprehensive revision round across the full sequence. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['sales-funnel-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Ad Copywriter',
    slug: 'ad-copywriter',
    shortDescription:
      'Ad copy from Apple UK direct mail to 300% ROAS Facebook ads on ClickBank. Hooks, platform-tuned suites, compliance-aware copy for health and finance.',
    metaTitle: 'Ad Copywriter | Facebook, Google & YouTube Ad Copy',
    metaDescription:
      'Senior ad copywriter for direct-response operators. From the Apple UK direct-mail piece that overwhelmed fulfillment to 300% ROAS Facebook ads for ClickBank. Fixed-price suites.',
    headline: 'Ad Copywriter \u2014 From Apple UK Direct Mail to 300% ROAS for ClickBank Operators',
    subheadline:
      'In the early \'90s, I wrote the Apple UK direct-mail piece that overwhelmed their fulfillment capacity \u2014 they had to scale the campaign back to keep up with demand. The same instincts now drive the Facebook, Google, YouTube, and native ad copy I write for ClickBank operators today: 300% ROAS, $30M+ VSL funnels, eight-figure offers. If your ad spend is feeding Meta\'s revenue instead of yours, this is the kind of work I do.',
    heroImage: '/images/services/ad-copywriter.jpg',
    heroImageAlt: 'Social media advertising and marketing for ad copywriting',
    heroStats: {
      primary: { value: '300%', label: 'ROAS on Facebook (Supplement Cold Traffic)' },
      secondary: [
        { value: '$30M+', label: 'Mobile Profits VSL #1 ClickBank (Fed by My Ads)' },
        { value: '5', label: 'Fortune 500 Clients (Apple / IBM / Microsoft / Citibank / Morgan Stanley)' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Ad copy written for',
      items: [
        'Apple UK / Fortune 500 (IBM, Microsoft, Citibank, Morgan Stanley)',
        'ClickBank Platinum Vendors',
        'Copy Accelerator (as Copy Chief)',
        'Supplement Marketers',
        'Financial Publishers',
        'DTC and Info Product Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Most Ad Copy Burns Money in Public',
        content:
          'You\'re spending $500, $5,000, maybe $50,000 a day on paid traffic. At a 1% click-to-purchase, 99% of that spend pays Meta for impressions that never convert. Your ad copy is the most expensive writing in your business, measured per word. Scale it 10x and everything wrong about it scales 10x too.\n\n' +
          'Most ad copy fails because the writer treats it like creative writing in a small format. It isn\'t. It\'s the strategic intersection of audience psychology, platform algorithms, compliance posture, and direct-response persuasion \u2014 compressed into a hook that has under two seconds to earn attention before the thumb keeps scrolling.\n\n' +
          'The hook has to stop the scroll. The body has to build enough desire to earn the click. The whole ad has to pre-qualify traffic so you\'re not paying for clicks that never convert downstream. Get any of those wrong and your ad spend is subsidizing Meta\'s revenue, not yours.',
      },
      {
        heading: 'From Apple UK Direct Mail to 300% ROAS on ClickBank',
        content:
          'In the early \'90s, Apple UK handed me a direct-mail piece. The campaign overwhelmed their fulfillment capacity \u2014 they had to scale it back to keep up with demand. The kind of result that doesn\'t show up as a number on a marketing report. It shows up as a supply-side problem.\n\n' +
          'The same instincts now drive the Facebook, Google, YouTube, and native ad copy I write for direct-response operators today.\n\n' +
          'The ads I wrote for the Mobile Profits VSL \u2014 the offer that became <strong>#1 on ClickBank</strong> and did over <strong>$30 million</strong> \u2014 had one specific job: stop a stranger mid-scroll, create enough curiosity to earn the click, and deliver that click to a VSL ready to hold the viewer for 30+ minutes. The supplement ads I wrote drove <strong>300% ROAS</strong> on Facebook cold traffic. The compliant ads I\'ve written for financial publishers passed platform review while out-converting "safe" copy by multiples.\n\n' +
          'If you have ad campaigns running and the numbers aren\'t where you need them, I work as a control-beater. Send me your top-performing ads and the back-end data \u2014 I\'ll tell you on the strategy call where the conversion is leaking, and whether I can write something that beats your control.',
      },
      {
        heading: 'The Ad Copywriter Top Operators and Media Buyers Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Justin Goff publicly credited me with stepping up and knocking it out of the park. Marc David Lindsay, a direct-response media buyer testing my work head-to-head against existing controls, reported back: <em>"One of your ads has just taken the lead. High-converting campaign!"</em>\n\n' +
          'Media buyers test more ads in a quarter than most people see in a year. When one tells you "your ad has taken the lead," that\'s the back-end data talking \u2014 not a polite review.',
      },
      {
        heading: 'How I Architect Ads That Beat Existing Controls',
        content:
          'Every ad campaign I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audience and angle research: I mine reviews, forums, competitor ad libraries (Meta Ad Library, VidTao), and customer-support transcripts to find the exact language your prospects use about the pain. The hook and the angle come out of this layer, not a brainstorming session. My AI workflow processes 50+ competitor ads in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Hook and ad architecture: I build 5\u201310 hooks per campaign \u2014 each on a different angle, emotional trigger, or awareness-stage entry point. The hooks aren\'t variations of one idea; they\'re different bets. The system maps which hook leads which body, and which body lands which CTA.',
          'Phase 3 \u2014 Platform-specific tuning + compliance: every ad written to the mechanics of the platform it runs on \u2014 Facebook feed dynamics, Google Search intent matching, YouTube pre-roll\'s 5-second window, native\'s editorial-blend posture. For health, supplement, and financial verticals, every piece of copy is calibrated to satisfy platform reviewers and FTC guidelines while preserving conversion power.',
          'Phase 4 \u2014 Testing roadmap: a prioritized testing plan showing which variables to test first, what to expect, and how to iterate \u2014 so you find winners faster and kill losers earlier.',
        ],
      },
      {
        heading: 'Ads Across Facebook, Google, YouTube, Native, and Every DR Vertical',
        content:
          'A Facebook ad for a cold-traffic supplement is built differently than a Google Search ad for a financial newsletter, a YouTube pre-roll for a coaching offer, or a Taboola native for an advertorial. The compliance posture differs, the algorithm differs, the buyer\'s mindset at the click moment differs. I\'ve shipped winning ads across all of them.',
        bullets: [
          '300% ROAS \u2014 Facebook supplement ads (cold traffic, compliance-aware)',
          '$30M+ funnel revenue \u2014 ad copy feeding the Mobile Profits VSL (#1 ClickBank)',
          'Apple UK direct mail \u2014 the demand-overwhelm piece, plus campaigns for IBM, Microsoft, Citibank, and Morgan Stanley',
          'Compliant Facebook + native ads for health, supplement, and financial publishers',
          'YouTube pre-roll scripts that hold attention through the 5-second skip window',
          'Google Search precision-intent ad copy and ClickBank affiliate ad creatives',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Apple UK Direct-Mail Piece',
        category: 'Direct-Response Direct Mail',
        metric: 'Demand Overwhelm',
        detail: 'The campaign overwhelmed Apple UK\'s fulfillment capacity. They had to scale it back to keep up with demand.',
      },
      {
        name: 'Mobile Profits Ad Suite',
        category: 'Multi-Platform Cold Traffic',
        metric: '$30M+ Funnel Revenue',
        detail: 'Ad copy feeding the #1 ClickBank biz-op VSL. Hooks engineered for cold-traffic-to-VSL conversion.',
      },
      {
        name: 'Supplement Cold-Traffic Ads',
        category: 'Facebook (Compliance-Approved)',
        metric: '300% ROAS',
        detail: 'Compliance-aware Facebook ad copy for cold-traffic supplement funnel.',
      },
      {
        name: 'Financial Publisher Compliant Native',
        category: 'Native + Facebook (Regulated Vertical)',
        metric: 'Multi-Platform Winner',
        detail: 'Compliant ads for regulated financial vertical \u2014 passed platform review and out-converted "safe" copy.',
      },
    ],
    deliverables: [
      {
        title: 'Ad Copy Suites',
        description:
          'Sets of 5\u201310 ad variations per campaign, with multiple hooks, angles, and CTAs designed for systematic split testing.',
      },
      {
        title: 'Platform-Specific Formatting',
        description:
          'Ad copy formatted to each platform\'s specs \u2014 character limits, headline/description structure, and creative direction notes.',
      },
      {
        title: 'Hook Library',
        description:
          'Collection of proven opening hooks and angles that can be mixed and matched across campaigns and platforms.',
      },
      {
        title: 'Audience Angle Matrix',
        description:
          'Strategic document mapping different audience segments to the emotional angles and proof elements most likely to convert them.',
      },
      {
        title: 'Compliance Review Notes',
        description:
          'Platform compliance considerations for each ad, with flagged language and compliant alternatives for regulated industries.',
      },
      {
        title: 'Testing Roadmap',
        description:
          'Prioritized testing plan showing which ad elements to test first, in what order, and how to iterate based on results.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered to find winning ads faster \u2014 not just fill your creative library.',
    testimonialIds: ['15', '4', '2', '3', '6'],
    portfolioItems: [
      { title: 'Facebook Ad Suite \u2014 Health Niche', category: 'Ads' },
      { title: 'YouTube Pre-Roll Ads', category: 'Ads' },
      { title: 'Native Ad Campaign', category: 'Ads' },
    ],
    midCta: {
      headline: 'Ready for ads that beat your existing control?',
      subtext:
        'Book a free strategy call. Send me your top-performing ads and the back-end data \u2014 I\'ll tell you honestly where the conversion is leaking and whether I can write something that beats your control.',
    },
    faqs: [
      {
        question: 'What platforms do you write ads for?',
        answer:
          'Facebook and Meta, Google Search, YouTube pre-roll, TikTok, and native (Taboola, Outbrain). Each platform has its own algorithm dynamics, compliance posture, and buyer mindset at the click moment. I tailor the copy mechanics to each \u2014 an ad that crushes on Facebook will often die on native, and the YouTube pre-roll that earns the 5-second skip is a fundamentally different write than a Google Search ad.',
      },
      {
        question: 'Are you taking new ad copy clients?',
        answer:
          'I take a selective number of new ad-copy engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write ad copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, hook formulas, ad-platform patterns, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. I make every strategic and structural call. The AI carries the volume \u2014 mining competitor ad libraries, generating variation suites, and drafting against four decades of campaigns that have already converted.',
      },
      {
        question: 'What does ad copywriting cost?',
        answer:
          'Ad-copy engagements are fixed-price. Most full ad-copy projects start at $10K \u2014 a multi-platform suite with research, hook library, finished ads, platform-specific tuning, and a testing roadmap. Smaller single-platform suites are priced lower. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: at serious daily budgets, an ad that converts at 1.5% instead of 1% on the same traffic pays for the writer in the first week.',
      },
      {
        question: 'How long does it take to write an ad campaign?',
        answer:
          'A multi-platform ad campaign suite (research + hook library + 8\u201315 finished ads + testing roadmap) typically takes 2\u20133 weeks. A single-platform suite is 1\u20132 weeks. The audience and angle phase always comes first \u2014 that\'s where the click-through rate lives. Rush timelines are possible, but I never shortcut the research.',
      },
      {
        question: 'How do you handle ad compliance for health and finance?',
        answer:
          'This is one of my specialities. I\'ve written compliant ad copy for supplement offers, financial publishers, and ClickBank vendors for years \u2014 including ads that drove 300% ROAS while passing platform review. I know which specific language patterns to swap, which claims to back with mechanism, and where platform reviewers actually look. I provide compliance notes with each ad flagging anything your legal team should review.',
      },
      {
        question: 'What industries do you write ad copy for?',
        answer:
          'Direct mail and direct response (Apple UK demand-overwhelm, plus IBM, Microsoft, Citibank, Morgan Stanley, plus the Belron $523M campaign), supplement (300% ROAS Facebook), ClickBank (Mobile Profits VSL \u2014 #1 offer, $30M+), financial publishers (compliant native), info products and coaching, e-commerce and DTC. Each vertical has its own compliance posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is audience and angle research, then hook library and architecture, then the finished ads with platform-specific tuning, then a testing roadmap. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['facebook-ads-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Landing Page Copywriter',
    slug: 'landing-page-copywriter',
    shortDescription:
      'Short-form bridge pages that earn the click to your VSL, TSL, webinar, or order form. Recent lifts: 22% Chatterkick trial-to-paid, 8% Conor cold-traffic, 5.7% Monetari opt-in-to-sale.',
    metaTitle: 'Landing Page Copywriter | Bridge Pages + Lead Capture',
    metaDescription:
      'Senior landing page copywriter behind cold-traffic bridge pages with documented lifts: 22% trial-to-paid (Chatterkick), 8% Conor Reynolds bridge, 4.8% biz-op front end, 5.7% Monetari opt-in-to-sale. Fixed-price engagements.',
    headline: 'Landing Page Copywriter Behind 22% Trial-to-Paid, 8% Cold-Traffic, and 5.7% Opt-In-to-Sale Bridges',
    subheadline:
      'Your landing page has 30 seconds and one job: earn the click to the next step of your funnel \u2014 your VSL, your TSL, your webinar, your checkout, or your inbox. The bridge pages I\'ve architected lifted Chatterkick\'s trial-to-paid by 22%, fed Conor Reynolds\'s funnel converting cold traffic at 8%, drove a biz-op hybrid running 4.8% front-end, and pulled 5.7% opt-in-to-sale on Monetari Fund\'s compliance-aware financial bridge. If your cold-traffic ad spend is landing on a page that doesn\'t earn the click, you\'re not buying traffic \u2014 you\'re renting attention and giving it back.',
    heroImage: '/images/services/landing-page-copywriter.jpg',
    heroImageAlt: 'Web design and landing page on laptop for landing page copywriting',
    heroStats: {
      primary: { value: '22%', label: 'Chatterkick Onboarding LP (Trial-to-Paid Lift)' },
      secondary: [
        { value: '8%', label: 'Conor Reynolds Bridge \u2192 Sales Page' },
        { value: '5.7%', label: 'Monetari Fund Bridge \u2192 TSL' },
        { value: '4.8%', label: 'Biz-Op Hybrid Front-End Bridge' },
      ],
    },
    credentialBar: {
      heading: 'Bridge pages and landing pages architected for',
      items: [
        'Lead Generation Funnels',
        'Webinar Registration',
        'ClickBank Vendors',
        'SaaS Trial-to-Paid',
        'DTC Brands',
        'Info Product Launches',
      ],
    },
    sections: [
      {
        heading: 'Why Most Landing Pages Bounce Cold Traffic at $4 a Click',
        content:
          'You\'re paying $2, $4, $8 per click for cold traffic. That click hits your landing page. They scan the headline. They look at the form (or the button). And they leave.\n\n' +
          '<strong>Industry-average landing page conversion is 2\u20135%. Which means 95\u201398% of every dollar you spend on cold traffic is gone the moment they land.</strong> On a $5K/day ad budget at $4/click, that\'s 1,250 clicks landing every day \u2014 and 1,200 of them bouncing before they take the action you paid them to take. That\'s $4,800 of ad spend per day evaporating between the click and the next step of your funnel \u2014 <strong>$1.75M a year, gone</strong>. That\'s not a "low-conversion landing page." That\'s the largest line item on your P&L and nobody on your team is reading the page.\n\n' +
          'A landing page has exactly one job: <strong>earn the next click.</strong> Not the sale. Not the close. Just the click \u2014 to your VSL, your TSL, your webinar, your checkout, your inbox. Every element on the page either advances that single conversion or steals attention from it. Most landing pages fail because the writer optimized for "looking like a brand" instead of for the only metric that matters: did they click the button.',
      },
      {
        heading: 'The Bridge Pages Inside Funnels Doing 8% Cold-Traffic, 22% Trial-to-Paid, and 5.7% Opt-In-to-Sale',
        content:
          'A lead-gen specialist sent me a note about a squeeze page I\'d written: <em>"Woah, this script is awesome! The squeeze page copy is crushing the old one."</em>\n\n' +
          'That\'s not a headline number, but it\'s the actual job of a landing page \u2014 beat the previous page, every time. Recent bridge-page wins inside the funnels I\'ve architected:\n\n' +
          '<strong>22% trial-to-paid lift</strong> on Chatterkick\'s onboarding landing page \u2014 the page that turned free-trial sign-ups into paying customers at almost a quarter higher rate than the page it replaced. <strong>8% cold-traffic conversion</strong> at the funnel I wrote for Conor Reynolds, where the bridge sequence carried prospects from cold ad to sales-page conversion. <strong>4.8% front-end conversion</strong> on a biz-op hybrid landing page that fed a VSL with the upsell stack carrying the AOV. <strong>5.7% opt-in-to-sale</strong> on Monetari Fund\'s compliance-aware financial bridge page that fed a regulator-friendly TSL.\n\n' +
          'The throughline: every one of those pages did its job because it was architected as a bridge \u2014 the headline matched the promise the ad made, the body answered the one objection standing between the click and the next step, and the CTA made saying yes feel like the easiest thing the visitor could do.\n\n' +
          'If you have a landing page running and the conversion isn\'t where you need it, I work as a control-beater. Send me your current page, the actual ad creative driving traffic to it, and the back-end numbers \u2014 click-through rate from the ad, conversion rate on the page, the next-step take-rate \u2014 and I\'ll tell you on the call exactly where the leak is (it\'s almost always message-match between ad and page, the above-the-fold hierarchy, or form friction) and whether I can write a page that beats it.',
      },
      {
        heading: 'Message Match, Above-the-Fold Discipline, the One-Click Rule',
        content:
          'Bridge-page copywriting runs on a tight set of disciplines that most copywriters never internalize because they were trained on long-form sales pages. Three matter most.\n\n' +
          '<strong>Message match.</strong> The headline on your landing page must echo the promise the ad made \u2014 verbatim if possible. If the prospect clicked an ad about "how to lose 17 pounds without giving up bread" and lands on a page about "boosting metabolism," that\'s a different promise. The disconnect costs you 30\u201360% of conversion before the visitor reads a single sentence below the headline. The visitor\'s brain registers it instantly, even if they couldn\'t articulate what changed. I write every bridge page against the actual ad creative driving traffic to it.\n\n' +
          '<strong>Above-the-fold discipline.</strong> The visitor decides in under 3 seconds whether to scroll or bounce. The headline, subhead, and CTA above the fold do 80% of the conversion work. Most landing pages waste that real estate on hero images and brand statements. I waste none of it.\n\n' +
          '<strong>The one-click rule.</strong> A bridge page asks the visitor to do exactly one thing \u2014 click, opt-in, register, or sign up. Every other element on the page either advances that single click or distracts from it. I cut everything else.\n\n' +
          'Stefan Georgi (the copywriter behind over $1 billion in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs because that pattern recognition is what scales bridge pages alongside long-form. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I wrote.\n\n' +
          'These are operators with their own money on the line.',
      },
      {
        heading: 'How I Architect a Bridge Page That Earns the Next Click',
        content:
          'Every bridge page I write moves through the same four phases. None are optional. The discipline is what separates a landing page that bounces 95% of cold traffic from one that converts at 8% on the same ad spend.',
        bullets: [
          'Phase 1 \u2014 Traffic-source analysis and message-match audit: I study the actual ads, emails, or content driving traffic to your page \u2014 hooks, angles, promises, the visual feel. The bridge page has to fulfill that promise instantly. My AI workflow scans dozens of competitor ads, ad-library entries, and bridge pages in the time a manual pass takes to read three, surfacing the exact promise pattern that earns the click.',
          'Phase 2 \u2014 Single-action architecture: I strip the page down to one goal, one offer, one CTA. Above-the-fold gets the headline, subhead, hero element, and CTA. Below-the-fold gets the proof stack and the objection-handling. Every element either advances the conversion or gets cut.',
          'Phase 3 \u2014 Above-the-fold copy + variations: I deliver multiple headline, subhead, and CTA combinations engineered for split testing. The above-the-fold zone does 80% of the conversion work; getting it wrong is what most copywriters do.',
          'Phase 4 \u2014 Friction elimination: form-field optimization, microcopy, trust signals, social-proof placement, mobile-first formatting, button-text variations \u2014 every reason to hesitate identified and removed.',
        ],
      },
      {
        heading: 'Bridge Pages Across Lead-Gen, Webinar, Trial-to-Paid, Cold-Traffic Funnels, and Opt-In',
        content:
          'Different bridge-page jobs run on different conversion structures. A SaaS trial-to-paid onboarding page runs nothing like a webinar registration page or a cold-traffic squeeze. The frameworks adapt; the discipline stays the same. I\'ve shipped converting bridge pages across every major DR job.',
        bullets: [
          '22% trial-to-paid lift \u2014 Chatterkick SaaS onboarding landing page',
          '8% cold-traffic conversion \u2014 Conor Reynolds bridge \u2192 sales-page funnel',
          '5.7% opt-in-to-sale \u2014 Monetari Fund compliance-aware financial bridge',
          '4.8% front-end conversion \u2014 biz-op hybrid landing page feeding a VSL with AOV-driving upsell stack',
          'Lead-gen squeeze pages \u2014 "Woah, this script is awesome! The squeeze page copy is crushing the old one" (lead-gen specialist, on a recent rewrite)',
          'Webinar registration pages, free-trial signup pages, opt-in pages for email-list building and lead magnets, advertorial-style bridge pages',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Chatterkick Onboarding LP',
        category: 'SaaS Trial-to-Paid Bridge',
        metric: '22% Trial-to-Paid Lift',
        detail: 'Onboarding landing page that turned free-trial sign-ups into paying customers at almost a quarter higher rate than the page it replaced.',
      },
      {
        name: 'Conor Reynolds Funnel Bridge',
        category: 'Cold-Traffic Bridge \u2192 Sales Page',
        metric: '8% Cold-Traffic Conversion',
        detail: 'Bridge sequence carrying prospects from cold ad to sales-page conversion.',
      },
      {
        name: 'Monetari Fund',
        category: 'Financial Bridge \u2192 TSL',
        metric: '5.7% Opt-In to Sale',
        detail: 'Compliance-aware bridge page feeding a regulator-friendly financial-services TSL.',
      },
      {
        name: 'Biz-Op Hybrid LP',
        category: 'Front-End Bridge \u2192 VSL',
        metric: '4.8% Front-End Conversion',
        detail: 'Hybrid landing page feeding a VSL with the upsell stack carrying the AOV.',
      },
    ],
    deliverables: [
      {
        title: 'Full Landing Page Copy',
        description:
          'Complete landing page copy optimized for your specific conversion goal \u2014 lead capture, registration, trial signup, or direct sale.',
      },
      {
        title: 'Headline & CTA Variations',
        description:
          'Multiple headline, subhead, and CTA button text options for A/B testing to find the highest-converting combination.',
      },
      {
        title: 'Above-the-Fold Wireframe',
        description:
          'Strategic layout recommendation for the critical above-the-fold section, including hierarchy of elements for maximum impact.',
      },
      {
        title: 'Social Proof Strategy',
        description:
          'Recommendations for testimonial selection, placement, and formatting to maximize credibility and conversion lift.',
      },
      {
        title: 'Form Optimization Notes',
        description:
          'Guidance on form field selection, microcopy, button text, and trust signals to minimize form abandonment.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round plus testing prioritization guide for ongoing optimization.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every page engineered for one job: earn the next click on cold-traffic ad spend that costs you $2, $4, or $8 to land in the first place.',
    testimonialIds: ['16', '5', '4', '2', '3', '6'],
    portfolioItems: [
      { title: 'Lead Gen Landing Page \u2014 SaaS', category: 'Landing Page' },
      { title: 'Webinar Registration Page', category: 'Landing Page' },
      { title: 'Free Trial Signup Page', category: 'Landing Page' },
    ],
    midCta: {
      headline: 'Ready for a bridge page that earns the click instead of bouncing your cold traffic?',
      subtext:
        'Send me your current landing page, the ad driving traffic to it, and the conversion numbers \u2014 CTR from the ad, conversion on the page, next-step take-rate. I\'ll tell you on the call where it\'s leaking and whether I can write a page that beats it.',
    },
    faqs: [
      {
        question: 'What does a landing page copywriter do?',
        answer:
          'I write the short-form bridge pages that earn the click to the next step of your funnel \u2014 your VSL, your TSL, your webinar, your checkout, your inbox. A landing page has exactly one job (earn the click), and it has 30 seconds to do it. Bridge-page copywriting is structurally distinct from sales-page copywriting: tighter, message-matched to the traffic source, ruthlessly focused on a single conversion action. The landing pages I architect have lifted Chatterkick trial-to-paid by 22%, fed Conor Reynolds\'s funnel converting cold traffic at 8%, and pulled 5.7% opt-in-to-sale on Monetari Fund\'s financial bridge.',
      },
      {
        question: 'Are you taking new landing-page clients?',
        answer:
          'I take a selective number of new landing-page engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write landing pages?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, headline formulas, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer (190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, 512 pieces of my own copy). I make every strategic and structural call. The AI carries the volume \u2014 which is exactly what testing 5\u20138 above-the-fold variations across multiple traffic sources needs.',
      },
      {
        question: 'How much does landing page copywriting cost?',
        answer:
          'Landing-page engagements are fixed-price. Most landing-page projects start at $5K \u2014 lower than long-form sales pages because the asset is shorter, but the diagnostic and traffic-source analysis time is similar. Bundled bridge sequences (multiple landing pages for one funnel) start at $10K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a landing page that converts at 5% instead of 2% on the same traffic doesn\'t pay for itself \u2014 it transforms what your ad spend can buy.',
      },
      {
        question: 'How long does it take to write a landing page?',
        answer:
          'A standalone landing page typically takes 2\u20133 weeks from briefing to final deliverables. Bundled bridge sequences (multiple LPs for the same funnel) take 3\u20134 weeks. That includes traffic-source analysis, message-match audit, single-action architecture, above-the-fold variations, and one comprehensive revision round. The timeline depends on the number of pages and the complexity of your traffic sources.',
      },
      {
        question: 'Landing page vs. sales page \u2014 which one do I need?',
        answer:
          'A landing page is short-form, single-action, and built to earn one click \u2014 to your VSL, TSL, webinar, checkout, or inbox. A sales page is long-form, multi-section, and built to take a cold visitor through the entire buying decision in one visit. The fundamentals overlap (research, message match, persuasion architecture); the discipline differs (LP = ruthless cut everything but the click; sales page = exhaustively answer every objection). I write both, and on the strategy call I\'ll tell you which your offer warrants.',
      },
      {
        question: 'What industries do you write landing pages for?',
        answer:
          '22% trial-to-paid lift on Chatterkick\'s SaaS onboarding LP. 8% cold-traffic conversion on Conor Reynolds\'s bridge sequence. 5.7% opt-in-to-sale on Monetari Fund\'s compliance-aware financial bridge. 4.8% front-end conversion on a biz-op hybrid landing page. Plus health and supplement, e-commerce and DTC product launches, info products and webinar registration, ClickBank vendors, and B2B lead-gen funnels. Each vertical has its own conversion math and traffic-source idiosyncrasies. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with full scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is traffic-source analysis and message-match audit, then single-action architecture, then page writing with above-the-fold variations, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['ad-copywriter', 'sales-page-copywriter'],
    relatedVerticals: ['saas-copywriter', 'ecommerce-dtc-copywriter'],
  },
  {
    title: 'Sales Funnel Copywriter',
    slug: 'sales-funnel-copywriter',
    shortDescription:
      'End-to-end funnels architected as one persuasion system. Behind the $523M / 9-year Belron campaign and $30M, $40M, $27M individual funnels.',
    metaTitle: 'Sales Funnel Copywriter | End-to-End Funnel Architecture',
    metaDescription:
      'Senior sales funnel copywriter behind the $523M / 9-year Belron end-to-end campaign and $30M, $40M, $27M recent funnels. Full-system architecture, not bolted-together pages. Fixed-price engagements.',
    headline: 'Sales Funnel Copywriter Behind a $523M / 9-Year End-to-End Campaign',
    subheadline:
      'The Belron campaign I architected and ran for 9 years did $523 million as a complete direct-response funnel \u2014 ad to letter to follow-up to renewal. Recent end-to-end funnels I\'ve shipped have done $30M (Mobile Profits, #1 ClickBank), $40M (Gluco 6 supplement), and $27M (financial publisher). If your front end converts but the back end bleeds \u2014 that\'s a system problem, not a page problem.',
    heroImage: '/images/services/sales-funnel-copywriter.jpg',
    heroImageAlt: 'Marketing funnel and conversion strategy for sales funnel copywriting',
    heroStats: {
      primary: { value: '$30M+', label: 'Single Funnel Revenue (Mobile Profits, #1 ClickBank)' },
      secondary: [
        { value: '$523M', label: '9-Year Belron End-to-End Campaign' },
        { value: '$40M+', label: 'Gluco 6 Supplement Funnel' },
        { value: '4.8%', label: 'Biz-Op Hybrid Front-End CVR' },
      ],
    },
    credentialBar: {
      heading: 'Complete funnels architected for',
      items: [
        'Belron International (9-year campaign)',
        'ClickBank #1 Offers',
        'Copy Accelerator (as Copy Chief)',
        'Supplement Marketers',
        'Financial Publishers',
        'Info Product Launches',
      ],
    },
    sections: [
      {
        heading: 'Why Most Funnels Bleed Revenue Between Pages',
        content:
          'Here\'s how most funnels actually get assembled. One copywriter writes the ads. A different freelancer writes the landing page. Someone else gets the sales page. The upsells are bolted on by whoever was free that week. The post-purchase emails are a separate scope, usually rushed at the end. None of these writers ever spoke to each other.\n\n' +
          '<strong>The result is a funnel full of disconnects that bleed revenue at every transition.</strong> The ad promises one thing, the landing page says something slightly different, the sales page shifts tone again, and the upsells feel like random add-ons. Each disconnect is a 5\u201315% conversion drop. Multiply that across 5\u20138 pages and you\'re leaving 30\u201350% of your potential revenue on the table \u2014 on the same ad spend, on the same traffic, every day. On $10K/day in spend, that\'s $3,000\u2013$5,000 quietly bleeding out before lunch.\n\n' +
          'A funnel is a single persuasion system, not a stack of pages. The ad pre-qualifies. The landing page warms. The sales page closes. The order bump expands. The upsell extends. The downsell rescues. The email follow-up recovers the rest. Each step has to compound the emotional momentum of the previous one \u2014 and that requires <strong>one strategic mind writing every page</strong>, not a committee of freelancers writing past each other.',
      },
      {
        heading: 'The $523M Funnel That Ran 9 Years Was an End-to-End System',
        content:
          'In 1996, Belron \u2014 the world\'s largest auto-glass-replacement business \u2014 handed me their direct-response campaign. Five award-winning copywriters had already failed at it. I took the assignment, architected the entire system end-to-end, and ran it for 9 years. The campaign generated <strong>$523 million</strong> in tracked sales.\n\n' +
          'That number didn\'t come from one brilliant sales letter. It came from a complete direct-response funnel \u2014 the lead-generation piece, the long-form sales letter, the order pack, the follow-up sequence, the renewal cycle, the cross-sell. Every piece architected together. Every piece tested against back-end numbers. Every piece refined for nine consecutive years.\n\n' +
          'The CEO, Gary Lubner, put it on record: <em>"You are our secret weapon. Keep your diary clear, please!"</em>\n\n' +
          'That campaign compounded for nearly a decade because the structure was right end-to-end \u2014 not because of a clever turn of phrase on any one page. That same systems mindset is what every funnel I\'ve shipped since has been built on.\n\n' +
          'If you have a funnel running and the back-end numbers aren\'t where you need them, I work as a control-beater on the whole system. Send me every page in your current funnel and the back-end numbers \u2014 front-end CVR, AOV, post-purchase take rates, email open and click rates \u2014 and I\'ll tell you on the strategy call exactly where the revenue is leaking and whether I can architect a system that beats it.',
      },
      {
        heading: '$30M, $40M, $27M, 4.8% \u2014 Recent End-to-End Funnels',
        content:
          'Belron is the long campaign. Recent funnels prove the same systems approach scales in 2026.\n\n' +
          '<strong>$30 million</strong> on Mobile Profits \u2014 the #1 ClickBank funnel I wrote, ad to VSL to upsell stack to email follow-up, every page architected together. <strong>$40 million</strong> on Gluco 6 \u2014 an end-to-end supplement funnel with subscription upsells driving the back end. <strong>$27 million</strong> on a financial-publisher funnel \u2014 regulatory-aware long-form persuasion across every step. <strong>4.8% front-end conversion</strong> on a hybrid biz-op funnel \u2014 with the upsell sequence carrying the AOV math.\n\n' +
          'A recent funnel I wrote for Conor Reynolds is doing <strong>8% on cold traffic</strong> at the sales-page step. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I wrote for him. Stefan Georgi (the copywriter behind over $1 billion in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs because that systems pattern recognition is what scales offers across his portfolio. Justin Goff publicly credited me with stepping up and knocking it out of the park.\n\n' +
          'These are operators with their own money on the line \u2014 and the throughline is the same: full-system architecture, not bolted-together pages.',
      },
      {
        heading: 'How I Architect a Funnel That Compounds Page-to-Page',
        content:
          'Every funnel I architect moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Funnel diagnostic and customer journey mapping: I map every step in your current funnel (or the funnel you need) against your customer\'s awareness stage, decision criteria, and post-purchase psychology. My AI workflow processes dozens of competitor funnels and customer-research transcripts in the time a manual pass takes to read three \u2014 surfacing the exact language and objections that drive your buyer.',
          'Phase 2 \u2014 Persuasion arc and architecture: I plan the emotional narrative that unfolds across all 5\u20138 pages. Where the lead opens, where the mechanism lands, where each objection gets answered, where the offer crystalizes, where the upsells extend the buying decision. Every transition engineered so the prospect never feels a disconnect.',
          'Phase 3 \u2014 Full-funnel writing: I write every page myself \u2014 ads, landing pages, sales page or VSL, order form, order bumps, upsells, downsells, thank-you pages, and the post-purchase email sequence. Same strategic mind across every step, so the language compounds rather than collides.',
          'Phase 4 \u2014 AOV engineering and split-test variations: I deliver upsell and downsell sequences engineered to lift AOV by 30\u2013100% without inflating refunds, plus split-test variations for every high-leverage page and a testing roadmap that tells you what to test first and why.',
        ],
      },
      {
        heading: 'End-to-End Funnels Across Health, Finance, ClickBank, Info, DTC and SaaS',
        content:
          'Different industries need different funnel structures. A supplement funnel with subscription upsells runs nothing like a high-ticket coaching funnel with an application step or a SaaS trial-to-paid sequence. The compliance constraints differ, the AOV math differs, the regulators reading along differ. I\'ve architected complete funnels across every major DR vertical.',
        bullets: [
          '$523M / 9 years \u2014 Belron end-to-end direct-response funnel',
          '$40M+ \u2014 Gluco 6 supplement funnel with subscription upsell sequence',
          '$30M+ \u2014 Mobile Profits ClickBank #1 funnel (ad to VSL to upsell stack to email)',
          '$27M+ \u2014 financial-publisher funnel with regulatory-aware persuasion',
          '4.8% front-end CVR \u2014 biz-op hybrid funnel with AOV-driving upsell sequence',
          'E-commerce and DTC product launches, info-product webinar funnels, SaaS trial-to-paid sequences, and high-ticket coaching application funnels',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Belron / Safelite International',
        category: 'End-to-End Direct-Response Funnel',
        metric: '$523M / 9 Years',
        detail: 'Lead-gen, sales letter, order pack, follow-up, renewal \u2014 architected and run as one system for nine consecutive years.',
      },
      {
        name: 'Mobile Profits',
        category: 'Complete ClickBank Funnel',
        metric: '$30M Generated',
        detail: 'Up to 4% conversion. #1 ClickBank offer. End-to-end funnel: ad, VSL, upsell stack, email follow-up.',
      },
      {
        name: 'Gluco 6',
        category: 'Complete Supplement Funnel',
        metric: '$40M Generated',
        detail: 'Full funnel: VSL, subscription upsells, post-purchase email sequence.',
      },
      {
        name: 'Biz-Op Hybrid',
        category: 'Sales Page + VSL + Upsell System',
        metric: '4.8% Front-End',
        detail: 'Full-funnel copy including AOV-driving upsell sequence.',
      },
    ],
    deliverables: [
      {
        title: 'Complete Funnel Copy',
        description:
          'All copy for every step \u2014 ads, landing pages, sales pages, order forms, upsells, downsells, and thank-you pages.',
      },
      {
        title: 'Funnel Architecture Map',
        description:
          'Strategic funnel blueprint showing page flow, conversion goals, upsell logic, and email integration points.',
      },
      {
        title: 'Email Follow-Up Sequence',
        description:
          'Post-purchase and abandoned cart email sequences designed to maximize lifetime value and recover lost sales.',
      },
      {
        title: 'Order Bump Copy',
        description:
          'Optimized order bump copy positioned on the checkout page to increase AOV with minimal friction.',
      },
      {
        title: 'Split Test Variations',
        description:
          'Alternative versions of key funnel elements \u2014 headlines, offers, CTAs \u2014 designed for systematic A/B testing.',
      },
      {
        title: 'Funnel Optimization Guide',
        description:
          'Testing priorities, key metrics, and optimization roadmap for ongoing improvement after launch.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every page engineered to compound the next, not compete with it \u2014 across the entire funnel.',
    testimonialIds: ['1', '5', '4', '2', '3', '6', '18'],
    portfolioItems: [
      { title: 'Complete Health Supplement Funnel', category: 'Funnel' },
      { title: 'Info Product Launch Funnel', category: 'Funnel' },
      { title: 'E-Commerce DTC Funnel', category: 'Funnel' },
    ],
    midCta: {
      headline: 'Ready for a funnel where every page compounds the next?',
      subtext:
        'Send me your current funnel and the back-end numbers \u2014 I\'ll tell you on the call exactly where the revenue is leaking and whether I can architect a system that beats it.',
    },
    faqs: [
      {
        question: 'What does a sales funnel copywriter do?',
        answer:
          'I write all the copy that moves a prospect through the buying journey \u2014 from the initial ad to the landing page, sales page or VSL, order form, order bumps, upsells, downsells, and post-purchase email follow-up. The key difference from hiring a separate freelancer for each page: I architect the whole funnel as one persuasion system. Every transition is engineered, every page builds on the emotional momentum of the previous one, and the same strategic mind makes every word-level call. That\'s how a funnel goes from leaking 30\u201350% to compounding.',
      },
      {
        question: 'Are you taking new sales-funnel clients?',
        answer:
          'I take a selective number of new sales-funnel engagements each quarter so the work stays at the level the proof requires \u2014 full-funnel projects are the largest engagements I run. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write sales funnels?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, persuasion sequences, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer (190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, 512 pieces of my own copy). I make every strategic and structural call. The AI carries the volume \u2014 which is exactly what a 5\u20138-page funnel needs.',
      },
      {
        question: 'How much does sales funnel copywriting cost?',
        answer:
          'Sales-funnel engagements are fixed-price. Most full-funnel projects start at $25K \u2014 funnels are 5\u20138 pages of senior DR work plus the email follow-up sequence, so they\'re the largest single engagements I run. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a funnel that lifts front-end CVR by 1% AND lifts AOV by 30% on the same traffic doesn\'t pay for itself \u2014 it changes your unit economics.',
      },
      {
        question: 'How long does it take to write a complete funnel?',
        answer:
          'A complete funnel typically takes 4\u20136 weeks from briefing to final deliverables. That includes deep audience research, funnel-architecture planning, writing every page, the email follow-up sequence, and one comprehensive revision round. The timeline depends on the number of pages and offer complexity. I never rush the research or architecture phases \u2014 that\'s where funnel revenue is won or lost.',
      },
      {
        question: 'What is the most important page in a sales funnel?',
        answer:
          'The sales page or VSL typically has the biggest single-page impact on front-end conversion. But I\'ve shipped funnels where optimizing the upsell sequence had a bigger total-revenue impact than improving the sales page itself \u2014 because the upsells lifted AOV by 50\u2013100% on the same traffic. That\'s why a sales-funnel copywriter has to treat every page as a revenue lever and write the whole system, not just the front end.',
      },
      {
        question: 'What industries do you write sales funnels for?',
        answer:
          '$523M / 9 years on the Belron end-to-end campaign. $40M Gluco 6 supplement funnel. $30M Mobile Profits ClickBank funnel. $27M financial-publisher funnel. Plus health and supplement, e-commerce and DTC product launches, info-product and webinar funnels, SaaS trial-to-paid sequences, and high-ticket coaching application funnels. Each vertical has its own compliance posture, AOV math, and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with full scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is funnel diagnostic and audience research, then persuasion-arc architecture, then page-by-page writing, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'email-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'Upsell & Downsell Copywriter',
    slug: 'upsell-downsell-copywriter',
    shortDescription:
      'Post-purchase upsell, downsell, and order-bump copy engineered to lift AOV by 30\u2013100% on traffic you\'ve already paid for. Sequences inside $30M+ and $40M+ ClickBank funnels.',
    metaTitle: 'Upsell & Downsell Copywriter | Post-Purchase AOV Engineering',
    metaDescription:
      'Senior upsell and downsell copywriter behind the back-end sequences inside $30M+ Mobile Profits and $40M+ Gluco 6 ClickBank funnels. Order-bump and upsell copy engineered to lift AOV by 30\u2013100% on existing traffic. Fixed-price engagements.',
    headline: 'Upsell & Downsell Copywriter Behind $30M+ and $40M+ ClickBank Funnel Back-Ends',
    subheadline:
      'The most profitable copy in your funnel sits behind the buy button. I architect the upsell, downsell, and order-bump sequences that lift AOV by 30\u2013100% on traffic you\'ve already paid for \u2014 the back-end stacks inside funnels like $30M Mobile Profits (#1 on ClickBank) and the $40M Gluco 6 supplement subscription funnel. If your front end converts but your AOV is sitting where it shouldn\'t be, your back-end sequence is the leak.',
    heroImage: '/images/services/upsell-downsell-copywriter.jpg',
    heroImageAlt: 'E-commerce checkout and purchase optimization for upsell copywriting',
    heroStats: {
      primary: { value: '30\u2013100%', label: 'AOV Lift on Recent Upsell Stacks' },
      secondary: [
        { value: '$30M+', label: 'Mobile Profits #1 ClickBank Upsell Stack' },
        { value: '$40M+', label: 'Gluco 6 Subscription Upsell Funnel' },
        { value: '20\u201340%', label: 'Order-Bump Take-Rate Range' },
      ],
    },
    credentialBar: {
      heading: 'Upsell sequences architected for',
      items: [
        'ClickBank #1 Offers',
        'Supplement Subscription Funnels',
        'Copy Accelerator (as Copy Chief)',
        'Info Product Launches',
        'DTC Brands',
        'Financial Publishers',
      ],
    },
    sections: [
      {
        heading: 'Why Most Upsell Sequences Leave 30\u2013100% on the Table',
        content:
          'Your front end converts. Traffic comes in, the offer closes, the order completes. Then \u2014 in the most profitable 90-second window in your entire funnel \u2014 the customer hits a generic upsell page that has nothing to do with what they just bought, an order bump nobody clicks, and a downsell that reads like a guilt trip.\n\n' +
          '<strong>That 90-second post-purchase window is where the difference between a profitable funnel and an eight-figure funnel lives.</strong> A buyer with their wallet open, their card on file, and their brain primed to say yes again \u2014 walked through a sequence written by someone who treated upsells as an afterthought.\n\n' +
          'Do the math on a $47 front-end with a 30% upsell take-rate at $97. That\'s $29 in incremental AOV per buyer. On 1,000 daily buyers, that\'s $29,000/day in revenue you\'re collecting on $0 in extra ad spend. Take it to a 50% take-rate and a $147 upsell, and you\'re at $73.50 incremental AOV per buyer \u2014 $73,500/day on the same 1,000 buyers, $26.8M/year on $0 in extra ad spend. <strong>That\'s not "optimization." That\'s the back-end carrying the entire funnel\'s profitability \u2014 and it\'s why the difference between a $5M and a $30M ClickBank funnel is almost always the back-end stack, not the front-end VSL.</strong>',
      },
      {
        heading: 'The Back-End Sequences Inside $30M+ and $40M+ ClickBank Funnels',
        content:
          'The upsell and downsell sequences I architected for <strong>Mobile Profits</strong> (the #1 ClickBank offer in its window) and the <strong>Gluco 6 supplement funnel</strong> weren\'t bolted on at the end of the project. They were engineered into the persuasion architecture from day one \u2014 every page referencing the front-end purchase, every offer feeling like a logical extension, every transition tight enough that the buying momentum carried through.\n\n' +
          'Mobile Profits did <strong>$30 million</strong>. Gluco 6 did <strong>$40 million</strong>. In both cases, the back-end was where the funnel went from "profitable" to "category-defining."\n\n' +
          'The same systems thinking carries into the anonymized ClickBank order-bump work I\'ve done for vendors who don\'t put their numbers in case studies. Order-bump take-rates in the 30\u201340%+ range. Subscription upsell sequences that quietly funded entire 7-figure businesses. The proof is in the back-end revenue \u2014 most of which the front-end copywriter never sees.\n\n' +
          'If you have a back-end stack running and your AOV is sitting flat, I work as a control-beater on the post-purchase sequence. Send me your current upsell, downsell, and order-bump copy plus your take-rates step-by-step \u2014 I\'ll tell you on the call exactly where the leak is (it\'s almost always Upsell 1\'s lead, the order-bump\'s positioning, or the downsell\'s pricing) and whether I can rewrite a stack that beats it.',
      },
      {
        heading: 'Goff OLOF, Sultanic Softeners, Belcher Value Cascade \u2014 Why the Frameworks Matter',
        content:
          'Upsell copywriting is its own discipline. The buyer who just hit "submit" isn\'t the same buyer your front-end VSL was selling to 90 seconds ago \u2014 their commitment-and-consistency is firing, their endowment effect is kicking in, and their buying momentum is decaying every second. Front-end copywriters who try to write upsells without studying these post-purchase psychology forces consistently underperform.\n\n' +
          'The frameworks I deploy on every back-end build come from operators who lived the data: Justin Goff\'s One-Last-Offer-Funnel structure for downsell recovery; Alen Sultanic\'s softener language patterns for keeping refund rates flat while AOV climbs; Perry Belcher\'s value-cascade architecture for stacking upsell take-rates without buyer fatigue. These aren\'t templates pulled off a swipe site \u2014 they\'re the load-bearing structures behind the back-end sequences inside $30M+ and $40M+ ClickBank funnels.\n\n' +
          'Stefan Georgi (the copywriter behind over $1 billion in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs because that pattern recognition is what separates an upsell that lifts AOV from an upsell that lifts refund rates. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I wrote \u2014 with the back-end carrying the math.\n\n' +
          'These are operators with their own money on the line.',
      },
      {
        heading: 'How I Architect an Upsell Sequence That Lifts AOV Without Lifting Refunds',
        content:
          'Every upsell stack I write moves through the same four phases. None are optional. The discipline is what separates an upsell that earns an extra $29/buyer from an upsell that earns an extra $129/buyer.',
        bullets: [
          'Phase 1 \u2014 Back-end diagnostic and buyer-psychology mapping: I audit your current take-rates by step, refund rates by SKU, and the language of post-purchase complaints \u2014 the dataset most front-end copywriters never see. My AI workflow reads hundreds of post-purchase support tickets, refund-request emails, and review threads in the time a manual pass takes to read three \u2014 surfacing the exact friction points killing your back-end.',
          'Phase 2 \u2014 Sequence architecture: I design the optimal stack for your offer \u2014 how many upsells, where to position the order bump, where the downsell catches the price-sensitive buyer, how the subscription option (if any) folds in. Every step\'s job spelled out before a word gets written.',
          'Phase 3 \u2014 Page-by-page writing: I write every upsell, downsell, order bump, and thank-you page myself \u2014 deploying the Goff OLOF structure where it fits, Sultanic softeners where the AOV-vs-refund tension is real, and the Belcher value cascade where the stack needs to compound. Every page tested against one question: does this feel like the natural next yes?',
          'Phase 4 \u2014 Take-rate optimization roadmap: split-test variations for each upsell, A/B copy for the order bump, and a step-by-step roadmap that tells you what to test first, why, and what to expect.',
        ],
      },
      {
        heading: 'Upsell & Downsell Sequences Across ClickBank, Health, Info, DTC and SaaS',
        content:
          'Different verticals run on different upsell economics. A supplement subscription stack runs nothing like an info-product premium-tier upsell or a SaaS annual-plan upgrade. The frameworks adapt; the architecture changes. I\'ve shipped converting back-end stacks across every major DR vertical.',
        bullets: [
          '$30M+ \u2014 Mobile Profits #1 ClickBank funnel back-end (upsell + downsell + order-bump stack)',
          '$40M+ \u2014 Gluco 6 supplement funnel with subscription upsells driving the back end',
          '300% ROAS \u2014 Ben Palmer ClickBank campaign with the back-end carrying profitability',
          'Anonymized ClickBank order-bump wins \u2014 take-rates in the 30\u201340%+ range across multiple vendors',
          'Info-product premium-tier upsells, coaching-program downsell ladders, e-commerce bundle and warranty stacks, SaaS annual-plan upgrades and trial-to-paid sequences',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits',
        category: 'Complete ClickBank Back-End Stack',
        metric: '$30M Total Funnel',
        detail: '#1 ClickBank offer. Upsell, downsell, and order-bump sequence engineered into the persuasion architecture from day one.',
      },
      {
        name: 'Gluco 6',
        category: 'Supplement Subscription Upsell Funnel',
        metric: '$40M Total Funnel',
        detail: 'Subscription and bundle upsells driving the back end on a cold-traffic supplement funnel.',
      },
      {
        name: 'Anonymized ClickBank Order-Bump Stack',
        category: 'Order-Bump Take-Rate Lift',
        metric: '30\u201340%+ Take Rates',
        detail: 'Post-purchase order-bump and upsell sequences for ClickBank vendors who don\'t surface specific numbers in case studies.',
      },
      {
        name: 'Ben Palmer ClickBank Campaign',
        category: 'Back-End-Driven ROAS',
        metric: '300% ROAS',
        detail: 'Front-end and back-end working as one persuasion system.',
      },
    ],
    deliverables: [
      {
        title: 'Upsell Page Copy',
        description:
          'Complete copy for 1\u20133 upsell pages with video script or text format, urgency elements, and one-click CTA.',
      },
      {
        title: 'Downsell Page Copy',
        description:
          'Alternative offers for customers who decline the upsell, positioned to recover revenue with a lower price or different angle.',
      },
      {
        title: 'Order Bump Copy',
        description:
          'Compelling order bump copy for the checkout page \u2014 typically 20\u201340% take-rates with the right positioning.',
      },
      {
        title: 'Upsell Sequence Strategy',
        description:
          'Strategic document outlining optimal upsell flow, offer sequencing, pricing, and expected take-rates for your market.',
      },
      {
        title: 'Thank-You Page Copy',
        description:
          'Post-purchase page that reinforces the buying decision, reduces refund anxiety, and seeds future engagement.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round across the full sequence, plus optimization recommendations.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every page engineered to extract the maximum AOV from traffic you\'ve already paid for \u2014 without lifting your refund rate.',
    testimonialIds: ['4', '2', '3', '6', '18', '5'],
    portfolioItems: [
      { title: 'Supplement Funnel Upsell Sequence', category: 'Upsell' },
      { title: 'Info Product Upsell Chain', category: 'Upsell' },
      { title: 'E-Commerce Order Bump + Upsell', category: 'Upsell' },
    ],
    midCta: {
      headline: 'Ready for an upsell stack that lifts AOV without lifting refunds?',
      subtext:
        'Send me your current back-end stack and your take-rates step-by-step \u2014 I\'ll tell you on the call where the AOV is leaking and whether I can rewrite a sequence that beats it.',
    },
    faqs: [
      {
        question: 'What does an upsell and downsell copywriter do?',
        answer:
          'I write the post-purchase copy that sits behind the buy button \u2014 the upsells, downsells, order bumps, and thank-you pages that determine your funnel\'s actual profitability. This is its own discipline, distinct from front-end sales copy. The buyer\'s psychology in the 90 seconds after they hit "submit" is fundamentally different from the cold-traffic close, and it runs on different frameworks: Justin Goff\'s One-Last-Offer structure, Alen Sultanic\'s softener patterns, Perry Belcher\'s value cascade. Specialist back-end copy is what takes a funnel from "profitable" to "category-defining."',
      },
      {
        question: 'Are you taking new upsell-and-downsell clients?',
        answer:
          'I take a selective number of new back-end engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write upsell sequences?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, post-purchase persuasion patterns, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer (190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, 512 pieces of my own copy). I make every strategic and structural call. The AI carries the volume \u2014 which is exactly what an upsell stack across 5\u20136 post-purchase pages needs.',
      },
      {
        question: 'How much does upsell and downsell copywriting cost?',
        answer:
          'Upsell-and-downsell engagements are fixed-price. Most full-stack projects (1\u20133 upsells, 1\u20132 downsells, order bump, thank-you page) start at $10K \u2014 the math depends on the number of pages and offer complexity. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: upsell copy lifts revenue from traffic you\'ve already paid for. There\'s no additional ad spend, no additional acquisition cost. It\'s the highest-margin copywriting investment you can make \u2014 and the ROI is usually measurable inside a week.',
      },
      {
        question: 'How long does it take to write an upsell sequence?',
        answer:
          'A full upsell stack typically takes 2\u20134 weeks from briefing to final deliverables. That includes back-end diagnostic, sequence architecture, page-by-page writing, and one comprehensive revision round. The timeline depends on the number of pages and the complexity of your offer. I never rush the diagnostic phase \u2014 reading your current take-rates by step is what tells me where the leak is.',
      },
      {
        question: 'How many upsells and downsells should my funnel have?',
        answer:
          'Most funnels perform best with 1\u20133 upsells, 1\u20132 downsells, and 1 order bump. Too few and you\'re leaving 30\u2013100% of your potential AOV on the table. Too many and you risk refund spikes and buyer fatigue. The optimal number depends on your price points, traffic source, and offer complexity. I\'ll recommend the structure during the strategy call based on what I\'ve seen work in your specific vertical.',
      },
      {
        question: 'What industries do you write upsell sequences for?',
        answer:
          '$30M+ Mobile Profits ClickBank back-end. $40M Gluco 6 supplement subscription funnel. 300% ROAS on Ben Palmer\'s ClickBank campaign with the back-end carrying the math. Plus health and supplement (subscription stacks), info products and coaching (premium-tier ladders), e-commerce and DTC (bundle + warranty stacks), SaaS (annual-plan upgrades, trial-to-paid sequences). Each vertical has its own AOV math, refund-rate sensitivities, and post-purchase psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with full scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is back-end diagnostic and buyer-psychology mapping, then sequence architecture, then page-by-page writing, then one comprehensive revision round. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['sales-funnel-copywriter', 'email-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'AI Copywriting Consultant',
    slug: 'ai-copywriting-consultant',
    shortDescription:
      'Custom Claude Code copywriting skills and a 1,239-file Obsidian vault, installed in your copy team\'s workflow. Stefan Georgi\'s Copy Accelerator hired me as Copy Chief to run this.',
    metaTitle: 'AI Copywriting Consultant | Custom Claude Code Skills + Vault',
    metaDescription:
      'Senior AI copywriting consultant. Install custom Claude Code copywriting skills and a 1,239-file Obsidian vault in your copy team. Stefan Georgi\'s CA Labs hired me as Copy Chief. Open-sourced skills as proof.',
    headline: 'AI Copywriting Consultant \u2014 Custom Claude Code Skills + a 1,239-File Vault for Your Copy Team',
    subheadline:
      'Stefan Georgi \u2014 the copywriter behind over $1B in tracked sales \u2014 hired me as Copy Chief inside Copy Accelerator\'s CA Labs. I install the Claude Code copywriting skills my own team runs (open-sourced on GitHub as proof) plus the 1,239-file Obsidian copywriting brain that powers them. If your copy team is shipping AI drafts faster but converting at the same rate as last year, this is the kind of work I do.',
    heroImage: '/images/services/ai-copywriting-consultant.jpg',
    heroImageAlt: 'Artificial intelligence and technology for AI copywriting consulting',
    heroStats: {
      primary: { value: '190', label: 'DR Copywriting Frameworks (Indexed in My Working Vault)' },
      secondary: [
        { value: 'CA Labs', label: 'Stefan Georgi Hired Me as Copy Chief' },
        { value: 'GitHub', label: 'Open-Sourced Claude Code Copywriting Skills' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'AI copywriting consulting for',
      items: [
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
        'ClickBank Platinum Vendors',
        'Supplement Marketers',
        'Financial Publishers',
        'DTC and SaaS Brands',
        'Marketing Agencies and In-House Copy Teams',
      ],
    },
    sections: [
      {
        heading: 'Why AI Copy Ships Faster but Converts at the Same Rate as Last Year',
        content:
          'You\'ve installed <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a> or <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a> in your copy workflow. Your team ships drafts in half the time. But CTR on ads is flat. CVR on sales pages is flat. Click-through on emails is flat. Same numbers as last year, just produced faster.\n\n' +
          'Here\'s the structural reason. AI without direct-response architecture is fast mediocrity. Your team is using LLMs to generate what they would have brainstormed manually \u2014 same patterns, same headlines, same emotional triggers, produced 5x faster. The AI isn\'t pulling from $1B of converting copy. It\'s pulling from training-data averages \u2014 blog posts, LinkedIn updates, B2B SaaS landing pages, and the same Mailchimp templates everyone else trains on. Generic copy at scale.\n\n' +
          'What separates teams that scale output AND conversion: a working layer between the prompt and the LLM. A library of frameworks, formulas, evaluation criteria, and copy archives the AI is required to apply on every draft. Generic prompts produce generic copy. Skill-augmented prompts produce copy that converts.',
      },
      {
        heading: 'The Custom Claude Code Skills + 1,239-File Vault Stefan Georgi\'s CA Labs Hired Me to Run',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. The AI copywriting workflow I install is built on three substantive layers:\n\n' +
          '<strong>Layer 1:</strong> My custom Claude Code copywriting skills. Proprietary skill files that encode 40 years of frameworks, headline formulas, hook patterns, fascination structures, and evaluation criteria. Open-sourced on GitHub as verifiable proof. Your team can read the public skills, run them in their own Claude environment, and judge the quality before hiring me to install the proprietary set.\n\n' +
          '<strong>Layer 2:</strong> A 1,239-file Obsidian copywriting brain. 190 frameworks (Schwartz, Halbert, Hopkins, Carlton, Makepeace, Georgi, Kell), 193 swipe pieces, 125 book/course notes, 76 templates, and 512 pieces of my own tested copy. Indexed and instantly retrievable while your team writes \u2014 the reference layer the skills draw from.\n\n' +
          '<strong>Layer 3:</strong> A draft-review workflow your copy chief or senior writer runs. Built-in evaluation gates that catch the specific failures generic AI copy exhibits: clich\u00e9s, vague claims, missing mechanism, weak proof, weak close.\n\n' +
          '<strong>When your team runs this, every draft passes through 40 years of converting copy as a quality filter</strong> \u2014 not training-data averages.\n\n' +
          'If your team is shipping AI drafts but the conversion numbers haven\'t moved, send me your current copy workflow before the strategy call: prompts, skill files (if any), draft-review process. I\'ll audit it on the call and tell you exactly where the conversion lift is hiding \u2014 and whether installing the skills + vault will change your numbers.',
      },
      {
        heading: 'The Copywriters and Operators Who Hire Me to Run AI in Their Workflow',
        content:
          'Stefan Georgi (CA Labs / $1B in tracked sales) hired me as Copy Chief. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on a funnel I wrote for him \u2014 copy produced through this exact workflow.\n\n' +
          'Belron\'s CEO went further. On the long-form direct-mail campaign that ran nine years and did $523M, he put it on record: <em>"You are our secret weapon. Keep your diary clear, please!"</em>\n\n' +
          'The proof of the workflow is the conversion data of the copy it produces.',
      },
      {
        heading: 'How I Install the Skills + Vault in Your Copy Team\'s Workflow',
        content:
          'Every copywriting consultancy engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a deck of slides.',
        bullets: [
          'Phase 1 \u2014 Audit: I review your current copy workflow end-to-end. What prompts your team uses, which AI tools, how drafts get reviewed, where conversion is leaking. The audit identifies the highest-impact systems to install first.',
          'Phase 2 \u2014 Skill installation: I ship the custom Claude Code copywriting skill files into your team\'s environment. Frameworks, headline formulas, hook patterns, fascination structures, and evaluation criteria \u2014 encoded as skill files Claude executes on every project.',
          'Phase 3 \u2014 Vault structuring + reference layer: I structure the Obsidian-equivalent reference layer your team can call into their workflow. Frameworks, swipes, templates, and copy archives indexed for instant retrieval during drafting.',
          'Phase 4 \u2014 Draft-review workflow + team training: I install the draft-review process your copy chief or senior writer runs to catch the specific failures generic AI copy exhibits, then train your team on the strategic thinking that drives conversions through the workflow.',
        ],
      },
      {
        heading: 'Skills + Vault Installations Across Every DR Copy Type',
        content:
          'Every copy type has different mechanics. A VSL needs different frameworks than an email sequence, a Facebook ad, a sales page, or an upsell. The skills I install are calibrated to your specific copy types and verticals \u2014 each calling into the indexed library of proven DR frameworks. The names below will mean something to your senior writer; what matters to you is that the skills enforce them automatically on every draft.',
        bullets: [
          'VSL frameworks \u2014 Schwartz Awareness Levels, Halbert hooks, Georgi RMBC, Kell flow patterns, PIG method',
          'Sales page frameworks \u2014 PASTOR, Brain Audit, Perry Belcher 21-step, Makepeace 7 Characteristics',
          'Email frameworks \u2014 Soap Opera, Seinfeld method, Justin Goff 13 hooks, Ben Settle 7 types',
          'Ad frameworks \u2014 Caples 35 formulas, Makepeace fascinations, Four U\'s headlines, Halbert hooks',
          'Upsell frameworks \u2014 Goff OLOF, Sultanic softeners, Belcher value cascade',
          'Vertical calibration \u2014 ClickBank, supplement, financial, DTC, SaaS, info-product, coaching',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Copy Accelerator / CA Labs',
        category: 'Copy Chief Engagement',
        metric: 'Hired by Stefan Georgi',
        detail: '"We hired Rob as our Copy Chief for CA Labs!" \u2014 Stefan Georgi, the copywriter behind over $1B in tracked sales.',
      },
      {
        name: 'Open-Sourced Claude Code Skills',
        category: 'Verifiable AI Substance',
        metric: 'Skills on GitHub',
        detail: 'Custom copywriting skill files published openly. Prospective clients can read them before hiring me to install the full set.',
      },
      {
        name: 'Ben Palmer / ClickBank Email Funnel',
        category: 'Copy Through the Workflow',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend." Email-driven funnel produced through this exact AI copy workflow.',
      },
      {
        name: 'Mobile Profits Full-Funnel Copy',
        category: 'Workflow Applied End-to-End',
        metric: '$30M / #1 ClickBank',
        detail: 'Up to 4% conversion on cold traffic. Full-funnel copy produced through the methodology.',
      },
    ],
    deliverables: [
      {
        title: 'Copy Process Audit',
        description:
          'Comprehensive review of your current copywriting workflow, identifying where AI adds value and where it is degrading output.',
      },
      {
        title: 'Custom AI Workflow Design',
        description:
          'Tailored AI-assisted workflow covering research, ideation, drafting, editing, and quality control \u2014 built for your specific copy types.',
      },
      {
        title: 'Prompt Engineering Framework',
        description:
          'Library of tested prompts built on proven DR frameworks, customized for your products, markets, and copy types.',
      },
      {
        title: 'Team Training Sessions',
        description:
          'Hands-on workshops teaching your team to use AI with the strategic thinking that drives conversions \u2014 not generic AI training.',
      },
      {
        title: 'Quality Control Playbook',
        description:
          'Checklists and review processes for catching the subtle ways AI degrades persuasion, specificity, and brand voice.',
      },
      {
        title: 'Ongoing Optimization',
        description:
          'Follow-up consultation to review results, refine workflows, and adapt to new AI capabilities as they emerge.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is designed to give your team AI speed with direct-response quality \u2014 a system they can run independently.',
    testimonialIds: ['2', '3', '4', '1', '6'],
    portfolioItems: [
      { title: 'AI Workflow Design \u2014 Marketing Team', category: 'Consulting' },
      { title: 'Prompt Framework \u2014 Health Niche', category: 'Consulting' },
    ],
    midCta: {
      headline: 'Ready for AI copy that actually beats your existing controls?',
      subtext:
        'Book a free strategy call. Send me your current copy workflow \u2014 prompts, skill files, draft-review process \u2014 and I\'ll tell you on the call where the conversion is leaking, where AI is producing fast mediocrity, and whether installing the skills + vault will change your numbers.',
    },
    faqs: [
      {
        question: 'What does an AI copywriting consultant actually do?',
        answer:
          'I install custom Claude Code copywriting skills + a structured copywriting reference vault + a draft-review workflow into your copy team\'s environment. The skills encode 40 years of frameworks, headline formulas, hook patterns, fascination structures, and evaluation criteria into files Claude executes on every project. The vault is the reference layer the skills draw from. The draft-review workflow catches the specific failures generic AI copy exhibits. Your team ends up with a system they run independently after the engagement \u2014 not a dependency on me.',
      },
      {
        question: 'How is AI copywriting consulting different from AI marketing consulting?',
        answer:
          'AI copywriting consulting is the focused service: skill files, vault structure, and draft-review workflows for written-asset production specifically. AI marketing consulting is broader \u2014 it covers the full marketing operation, including research, audience intelligence, campaign optimisation, and offer development, in addition to copy production. If you need AI installed in a copy team specifically, this is the service. If you need AI installed across the entire marketing stack, the AI marketing consultant page is the broader option.',
      },
      {
        question: 'Are you taking new AI copywriting clients?',
        answer:
          'I take a selective number of new AI copywriting engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'What does an AI copywriting engagement cost?',
        answer:
          'AI copywriting engagements are fixed-price. Most engagements start at $10K \u2014 a focused single-copy-type installation (e.g., VSL skills + vault subset + draft-review workflow). Full multi-copy-type installations run higher. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a copy team producing better-converting copy 3x faster isn\'t an expense \u2014 it\'s the highest-leverage investment in your marketing operation.',
      },
      {
        question: 'How long does an AI copywriting engagement take?',
        answer:
          'Depends on scope. A focused single-copy-type installation (audit + skills for one copy type + vault subset + draft-review workflow + team training) is 3\u20135 weeks. A full multi-copy-type installation across VSLs, sales pages, emails, and ads runs 6\u201310 weeks depending on team size. The audit phase always comes first \u2014 that\'s where we identify which copy types to install for the highest conversion impact.',
      },
      {
        question: 'How is this different from just using ChatGPT?',
        answer:
          'ChatGPT (or Claude, or Gemini) is a general-purpose tool. Without DR-specific skill files structuring its output, it produces copy that reads smoothly but converts at training-data averages. My installation gives your team proprietary skill files calibrated to four decades of converting copy, plus a 1,239-file reference vault the skills draw from, plus a draft-review workflow that catches AI-specific failures. The output is copy that moves back-end metrics, not just fills pages.',
      },
      {
        question: 'What AI tools do you work with?',
        answer:
          'Claude Code (primary \u2014 because it executes structured skill files natively), ChatGPT, Gemini, and specialised copywriting platforms. The skills and workflow I install are tool-agnostic at the strategy level and adapt as capabilities evolve. I\'ve been integrating AI into my own copywriting practice daily since 2023, ship custom skill files for every major copy type, and stay current with every release.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is the audit \u2014 I review your current copy workflow, prompts, AI tools, and draft-review process. Then skill installation, vault structuring, draft-review workflow, and team training. You\'ll see the system installed step by step \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['ai-marketing-consultant', 'vsl-copywriter'],
    relatedVerticals: ['saas-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'AI Marketing Consultant',
    slug: 'ai-marketing-consultant',
    shortDescription:
      'Triple Brain Marketing as a productized consultancy. The methodology Stefan Georgi\'s Copy Accelerator hired me as Copy Chief to run \u2014 installed in your marketing operation.',
    metaTitle: 'AI Marketing Consultant | Triple Brain Marketing Methodology',
    metaDescription:
      'Senior AI marketing consultant. Install the Triple Brain Marketing methodology Stefan Georgi\'s CA Labs hired me as Copy Chief to run. 40+ years of DR craft + Claude Code custom skills + 1,239-file Obsidian copywriting brain.',
    headline: 'AI Marketing Consultant \u2014 Install the Triple Brain Methodology Stefan Georgi\'s CA Labs Hired',
    subheadline:
      'Stefan Georgi \u2014 the copywriter behind over $1B in tracked sales \u2014 hired me as Copy Chief inside Copy Accelerator\'s CA Labs. The methodology I install is Triple Brain Marketing: 40 years of direct-response craft, Claude Code with my custom-built copywriting skills, and a 1,239-file Obsidian copywriting brain \u2014 fused into one workflow your team can run. If your AI marketing is producing more output but not more revenue, this is the kind of work I do.',
    heroImage: '/images/services/ai-marketing-consultant.jpg',
    heroImageAlt: 'AI-powered marketing strategy and campaign optimization',
    heroStats: {
      primary: { value: '1,239', label: 'File Obsidian Copywriting Brain (Brain 3 of the Methodology)' },
      secondary: [
        { value: 'CA Labs', label: 'Stefan Georgi Hired Me as Copy Chief' },
        { value: '$523M+', label: 'Tracked DR Results Behind the Methodology' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'AI marketing consulting for',
      items: [
        'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)',
        'ClickBank Platinum Vendors',
        'Supplement Marketers',
        'Financial Publishers',
        'DTC and SaaS Brands',
        'Marketing Agencies and In-House Teams',
      ],
    },
    sections: [
      {
        heading: 'Why Most AI Marketing Produces More Output and Less Revenue',
        content:
          'You\'re paying for <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>, <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a>, Gemini, Jasper, and half a dozen specialized platforms. Your team is shipping more copy, more ads, more content than ever. But conversion rates are flat. CPA is creeping up. Revenue per email is the same it was 12 months ago. Your CFO is asking where the AI ROI is. You don\'t have a satisfying answer.\n\n' +
          'Here\'s the structural reason that keeps happening. AI tools aren\'t the bottleneck \u2014 every brand has the same tools you do. The bottleneck is the strategic direction those tools are pointed at. AI without direct-response architecture is just a faster way to produce mediocre marketing. More output, less revenue per impression, and the dawning realization that your competitors are running the same prompts you are.\n\n' +
          'What separates brands actually scaling with AI from brands generating noise: a marketing operator who knows what a $30M funnel looks like from the inside, has internalised 190+ proven DR frameworks, and can tell you which AI capabilities create real leverage versus which create the illusion of progress. Most of the operators who could do that don\'t consult \u2014 they\'re running their own offers and wouldn\'t return your call.',
      },
      {
        heading: 'The Triple Brain Methodology Stefan Georgi\'s CA Labs Hired Me to Run',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as <strong>Copy Chief inside Copy Accelerator\'s CA Labs</strong>. The methodology I install is <strong>Triple Brain Marketing</strong> \u2014 three brains fused into one workflow your team can run.\n\n' +
          '<strong>Brain 1:</strong> 40 years of direct-response craft. Grounded in $523M+ of tracked client results across Apple UK direct mail, IBM, Microsoft, Citibank, Morgan Stanley, the Belron $523M / 9-year campaign, and ClickBank-Platinum offers like Mobile Profits ($30M, #1 on ClickBank).\n\n' +
          '<strong>Brain 2:</strong> Claude Code augmented by my custom-built copywriting skills. Not generic ChatGPT prompting \u2014 proprietary skill files that encode 40 years of frameworks, formulas, and evaluation criteria into a working AI workflow. Open-sourced selectively as verifiable proof of substance.\n\n' +
          '<strong>Brain 3:</strong> A 1,239-file Obsidian copywriting brain. 190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, and 512 pieces of my own tested copy \u2014 indexed and instantly retrievable while your team writes.\n\n' +
          '<strong>When your team runs this, they\'re not running generic prompts.</strong> They\'re running proprietary skills calibrated to four decades of campaigns that have already converted, with the vault as the reference layer.\n\n' +
          'If your team is generating AI content at scale but not seeing conversion lift, send me your current setup before the strategy call: tools, prompts, workflows, output review process. I\'ll audit it on the call and tell you exactly where the leverage is hiding \u2014 and whether installing the methodology will change your numbers.',
      },
      {
        heading: 'The Marketing Operators Who Hire Me to Run AI in Their Stack',
        content:
          'Stefan Georgi (CA Labs / $1B in tracked sales) hired me as Copy Chief. Justin Goff publicly credited me with stepping up and knocking it out of the park. Ben Palmer, a ClickBank Platinum vendor, clocked <strong>300% ROAS</strong> on the email-driven funnel I wrote for him. The Belron CEO put it on record: <em>"You are our secret weapon. Keep your diary clear, please!"</em>\n\n' +
          'These are operators who run marketing at the highest level. With their own money on the line.',
      },
      {
        heading: 'How I Install the Methodology in Your Marketing Operation',
        content:
          'Every consultancy engagement moves through the same four phases. None are optional. This is the actual work \u2014 not a deck of slides.',
        bullets: [
          'Phase 1 \u2014 Audit and diagnostic: I review your current AI usage end-to-end. What tools, what prompts, what workflows, what output review process. I map where AI is creating real leverage in your marketing and where it\'s producing noise. The audit identifies the highest-conversion-impact systems to install first.',
          'Phase 2 \u2014 System design: I build the AI workflows specific to your channels and verticals \u2014 research, copy production, audience intelligence, campaign optimisation. Each workflow is calibrated to your offer, your buyer psychology, and your compliance posture.',
          'Phase 3 \u2014 Skill installation + team training: I ship the custom Claude Code skill files into your team\'s environment and structure the Obsidian vault layer for ongoing reference. Then I train your team on how to drive the workflow \u2014 not just the prompts, but the strategic thinking that produces conversions.',
          'Phase 4 \u2014 Ongoing optimisation: I review results at the 30-, 60-, and 90-day marks, refine prompts and skills based on the back-end data, and adapt the system as new AI capabilities ship. The methodology is meant to keep compounding, not sit static.',
        ],
      },
      {
        heading: 'Methodology Installations Across DTC, Health, Finance, ClickBank, and Agency',
        content:
          'Marketing operations have different shapes. A DTC brand with a 5-person team needs a different installation than a 15-person agency or a financial publisher with regulated output. The methodology adapts.',
        bullets: [
          'DTC and e-commerce brands \u2014 research + copy production + ad iteration workflows',
          'Health and supplement marketers \u2014 compliance-aware workflows for regulated verticals',
          'Financial publishers \u2014 compliant long-form research and TSL drafting',
          'ClickBank vendors \u2014 full-funnel AI workflows from VSL through email upsell (e.g. Ben Palmer\'s 300% ROAS funnel)',
          'Info products and coaching businesses \u2014 launch sequences plus the daily broadcast streams that feed them',
          'Marketing agencies \u2014 team training plus system templates the agency can run for multiple clients',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Copy Accelerator / CA Labs',
        category: 'Copy Chief Engagement',
        metric: 'Hired by Stefan Georgi',
        detail: '"We hired Rob as our Copy Chief for CA Labs!" \u2014 Stefan Georgi, the copywriter behind over $1B in tracked sales.',
      },
      {
        name: 'Triple Brain Methodology',
        category: 'Open-Sourced as Proof of Substance',
        metric: 'Skills on GitHub',
        detail: 'Custom Claude Code copywriting skills published openly so prospective clients can verify the AI-substance side of the methodology.',
      },
      {
        name: 'Belron / Safelite International',
        category: '9-Year, 35-Country Campaign',
        metric: '$523M in Tracked Sales',
        detail: 'The DR fundamentals the methodology now systematises and accelerates with AI.',
      },
      {
        name: 'Mobile Profits',
        category: 'Methodology Applied End-to-End',
        metric: '$30M / #1 on ClickBank',
        detail: 'Up to 4% conversion on cold traffic. Example of the Triple Brain methodology applied across the full funnel.',
      },
    ],
    deliverables: [
      {
        title: 'Marketing Strategy Audit',
        description:
          'Comprehensive review of your current marketing operation \u2014 copy, funnels, ads, emails \u2014 identifying where AI creates genuine leverage and where it is wasting resources.',
      },
      {
        title: 'AI Marketing Playbook',
        description:
          'Custom AI strategy document covering channel-specific workflows, tool recommendations, and implementation priorities for your brand.',
      },
      {
        title: 'Copy Production System',
        description:
          'AI-assisted workflows for every copy type in your marketing stack \u2014 ads, landing pages, sales pages, emails, and upsells \u2014 built on proven DR frameworks.',
      },
      {
        title: 'Research & Intelligence System',
        description:
          'AI-powered market research workflows for competitor analysis, audience intelligence, and opportunity identification.',
      },
      {
        title: 'Team Training & Enablement',
        description:
          'Hands-on training teaching your team to use AI tools with the strategic thinking that drives conversions \u2014 not just content volume.',
      },
      {
        title: 'Ongoing Optimization',
        description:
          'Follow-up consultation to review results, refine systems, and adapt to new AI capabilities and market shifts.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is designed to make AI a genuine competitive advantage for your marketing \u2014 not just a faster way to produce more.',
    testimonialIds: ['2', '3', '4', '1', '6'],
    portfolioItems: [
      { title: 'AI Marketing Strategy \u2014 DTC Brand', category: 'Consulting' },
      { title: 'AI Funnel Optimization \u2014 Supplement', category: 'Consulting' },
    ],
    midCta: {
      headline: 'Ready for AI marketing that produces revenue, not just more output?',
      subtext:
        'Book a free strategy call. Send me your current AI marketing setup \u2014 tools, prompts, workflows \u2014 and I\'ll tell you on the call where the leverage is real, where it\'s noise, and whether installing the Triple Brain methodology can change your numbers.',
    },
    faqs: [
      {
        question: 'What does an AI marketing consultant actually do?',
        answer:
          'I install the Triple Brain Marketing methodology in your marketing operation \u2014 the same workflow Stefan Georgi\'s Copy Accelerator hired me as Copy Chief to run. That covers AI workflows for market research, audience intelligence, copy production, campaign optimisation, and offer development. Every system is grounded in the direct-response fundamentals behind $523M+ in tracked client results, not in generic prompt-engineering tutorials.',
      },
      {
        question: 'How is AI marketing consulting different from AI copywriting consulting?',
        answer:
          'AI copywriting consulting is the focused service: prompts, skill files, drafting, and quality-control workflows for written assets specifically. AI marketing consulting is broader \u2014 it covers the full marketing operation, including research, audience intelligence, campaign optimisation, and offer development, in addition to copy production. If you need AI installed across your entire marketing stack, this is the service. If you only need copy workflows installed for a writing team, the AI copywriting consultant page is the more focused option.',
      },
      {
        question: 'Are you taking new AI marketing clients?',
        answer:
          'I take a selective number of new AI marketing engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'What does an AI marketing engagement cost?',
        answer:
          'AI marketing engagements are fixed-price. Most engagements start at $10K (focused single-channel audit and playbook). Full multi-channel installations run higher \u2014 audit + system design + skill installation + team training + first round of optimisation. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: a marketing operation paying for AI tools without strategic direction is paying for noise. The same operation with the methodology installed is paying for compounding leverage.',
      },
      {
        question: 'How long does an AI marketing engagement take?',
        answer:
          'Depends on scope. A focused audit plus playbook is 2\u20133 weeks. A full system design + skill installation + team training is typically 6\u201310 weeks depending on team size and channel breadth. The audit phase always comes first \u2014 that\'s where we identify which systems to install for the highest conversion impact.',
      },
      {
        question: 'What AI tools do you work with?',
        answer:
          'Claude Code (primary), ChatGPT, Gemini, and specialised marketing AI platforms. But the tool matters far less than the strategy around it. The systems I install are tool-agnostic and adapt as capabilities evolve. I\'ve been integrating AI into my own marketing practice daily since 2023 and stay current with every major release. I selectively open-source my Claude Code copywriting skills on GitHub as proof of substance.',
      },
      {
        question: 'What industries do you work with?',
        answer:
          'DTC and e-commerce brands, ClickBank vendors (Ben Palmer\'s 300% ROAS funnel), supplement marketers (compliance-aware AI workflows for regulated verticals), financial publishers, SaaS companies, info-product businesses (Abundant 340% ROAS), and marketing agencies. The methodology adapts to each vertical\'s compliance posture and buyer psychology.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is the audit \u2014 I review your current AI usage, prompts, workflows, and output review process. Then system design, skill installation, team training, and the first round of ongoing optimisation. You\'ll see the methodology installed step by step \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['ai-copywriting-consultant', 'sales-funnel-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Facebook Ads Copywriter',
    slug: 'facebook-ads-copywriter',
    shortDescription:
      'Facebook + Instagram ad copy at 300% ROAS on cold traffic, calibrated to clear Meta review. A decade of compliance-aware FB suites for supplement, financial, and ClickBank operators.',
    metaTitle: 'Facebook Ads Copywriter | Meta & Instagram Ad Copy',
    metaDescription:
      'Senior Facebook ads copywriter for direct-response operators. 300% ROAS on FB cold traffic (Ben Palmer), $30M+ Mobile Profits funnel fed by FB ads. Compliance-aware Meta + Instagram suites.',
    headline: 'Facebook Ads Copywriter \u2014 300% ROAS on Cold Traffic Without Triggering Meta Review',
    subheadline:
      '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend." That\'s Ben Palmer, a ClickBank Platinum vendor, on the Facebook ad copy I wrote for his cold-traffic offer. I\'ve shipped Facebook + Instagram ad suites for over a decade \u2014 every angle calibrated to clear Meta review without flattening the conversion. If your FB ads are getting paused in the queue, flagged for review, or scaling without ROAS, this is the kind of work I do.',
    heroImage: '/images/services/facebook-ads-copywriter.jpg',
    heroImageAlt: 'Social media apps including Facebook and Instagram for ad copywriting',
    heroStats: {
      primary: { value: '300%', label: 'ROAS on FB Cold Traffic (Ben Palmer)' },
      secondary: [
        { value: '$30M+', label: 'Mobile Profits VSL Funnel (Fed by FB Ads)' },
        { value: '340%', label: 'ROAS on Abundant Info-Product FB+IG' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Facebook & Meta ads written for',
      items: [
        'Ben Palmer / ClickBank Platinum Vendors (300% ROAS)',
        'Mobile Profits VSL #1 ClickBank ($30M Funnel)',
        'Copy Accelerator (as Copy Chief)',
        'Supplement Marketers (Compliance-Aware)',
        'Financial Publishers',
        'DTC and Info Product Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Most Facebook Ads Die in the Approval Queue or Break Even',
        content:
          'You\'re spending $500, $5,000, maybe $50,000 a day on Facebook. The math is unforgiving: at a 1% click-to-purchase, 99% of that spend pays Meta for impressions that never convert. Worse \u2014 if you\'re running supplement, health, or financial offers, half your best-performing creative gets paused in the approval queue every other week. Your media buyer is asking for "more creative" to keep CPMs down. So you sign off on another batch and pray Meta doesn\'t pause the next one.\n\n' +
          'Here\'s the structural reason that keeps happening. Facebook ads aren\'t creative writing in a small format. They\'re the strategic intersection of audience psychology, the Meta algorithm, and a compliance regime that auto-rejects half your best angles before a human reviewer ever sees them. The hook has to stop the scroll in under two seconds. The copy has to clear Meta\'s automated review. The whole ad has to pre-qualify the click so you\'re not paying for traffic that bounces off your landing page.\n\n' +
          'Get any of those wrong and your ad spend is subsidizing Meta\'s revenue, not yours.',
      },
      {
        heading: '300% ROAS on Cold Traffic Without Triggering Meta Review',
        content:
          'Ben Palmer, a ClickBank Platinum vendor, put it on record: <em>"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."</em> That\'s on the Facebook ad copy I wrote for his cold-traffic offer.\n\n' +
          'The Facebook ads I wrote for Mobile Profits \u2014 <strong>#1 on ClickBank</strong>, over <strong>$30 million</strong> \u2014 fed cold traffic to a 30+ minute video and held them through the buy. The Facebook + Instagram ads I wrote for Abundant clocked <strong>340% ROAS</strong>. And I\'ve been writing compliance-aware FB ad copy for supplement, health, and financial publishers for over a decade \u2014 every angle calibrated to clear Meta\'s review without flattening the conversion.\n\n' +
          'If you have Facebook ads running and the numbers aren\'t where you need them \u2014 or if half your best creative is getting paused in the queue \u2014 I work as a control-beater. Send me your last five ads, the back-end CTR/CPA/ROAS, and the ones Meta paused. I\'ll tell you on the strategy call where the conversion is leaking and where the compliance trip-wire is firing \u2014 and whether I can write something that beats it.',
      },
      {
        heading: 'The Facebook Ads Copywriter Top Operators and Media Buyers Hire',
        content:
          'Stefan Georgi (the copywriter behind over $1B in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs. Justin Goff publicly credited me with stepping up and knocking it out of the park. Marc David Lindsay, a direct-response media buyer testing my work head-to-head against existing controls, reported back: <em>"One of your ads has just taken the lead. High-converting campaign!"</em>\n\n' +
          'A Meta media buyer running cold-traffic budgets ships and kills more ads in a week than most copywriters see in a year. When one of them reports "your ad has just taken the lead," that\'s the back-end Meta data talking \u2014 not a polite review.',
      },
      {
        heading: 'How I Architect a Facebook Ad Suite That Beats Existing Controls',
        content:
          'Every Facebook ad campaign I write moves through the same four phases. None are optional. This is the actual work \u2014 not a "process" page filling space.',
        bullets: [
          'Phase 1 \u2014 Audience and angle research: I mine the Meta Ad Library, Facebook page reviews, customer-support transcripts, and competitor creatives to find the exact language your prospects use about the pain. The hook and the angle come out of this layer, not a brainstorming session. My AI workflow processes 50+ competitor Facebook ads in the time a manual pass takes to read three.',
          'Phase 2 \u2014 Hook library: I build 5\u201310 hooks per campaign \u2014 each on a different angle, emotional trigger, or awareness-stage entry point. The hooks aren\'t variations of one idea; they\'re different bets you can run head-to-head and find a winner faster.',
          'Phase 3 \u2014 Placement system + Meta compliance: Facebook is one ad system with multiple placements (Feed, Reels, Stories, IG Feed, IG Reels) \u2014 and the primary text + headline + description work as one persuasion system. Each ad is calibrated to its placement AND to <a href="https://www.facebook.com/policies/ads/" target="_blank" rel="noopener noreferrer">Meta\'s restricted-language rules</a> for your vertical. Compliance notes flag anything your legal team should review.',
          'Phase 4 \u2014 Testing roadmap: a prioritized testing plan showing which variables to test first, what to expect, and how to iterate \u2014 so you find winners faster, kill losers earlier, and recover faster from approval-queue surprises.',
        ],
      },
      {
        heading: 'Facebook Ad Copy Across Every Placement and Every DR Vertical',
        content:
          'A Facebook Feed ad reads differently than an Instagram Reels script, a Stories ad, or a carousel. The compliance posture differs by vertical, the placement mechanics differ by surface. I\'ve shipped winning Facebook ad copy across every Meta placement and every major DR vertical.',
        bullets: [
          '300% ROAS \u2014 Ben Palmer\'s ClickBank cold-traffic Facebook funnel',
          '340% ROAS \u2014 Abundant info-product Facebook + Instagram cold traffic',
          '$30M+ funnel revenue \u2014 Mobile Profits VSL fed by Facebook ad copy (#1 ClickBank)',
          'Compliance-aware Facebook + Instagram for supplement, health, and financial publishers',
          'Reels and Stories scripts that hold attention through the 3-second swipe window',
          'Meta carousel and UGC-style ad scripts for DTC and info-product verticals',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Ben Palmer / ClickBank Platinum Vendor',
        category: 'Facebook Cold-Traffic Funnel',
        metric: '300% ROAS',
        detail: '"Rob is a killer copywriter. We\'re getting a 300% Return on Ad Spend."',
      },
      {
        name: 'Mobile Profits Facebook Ad Suite',
        category: 'Multi-Placement Cold Traffic',
        metric: '$30M+ Funnel Revenue',
        detail: 'Facebook ad copy feeding the #1 ClickBank biz-op VSL. Hooks engineered for cold-traffic-to-VSL conversion.',
      },
      {
        name: 'Abundant Info-Product FB + IG',
        category: 'Facebook + Instagram Cold Traffic',
        metric: '340% ROAS',
        detail: 'Cold-traffic Facebook and Instagram ads feeding info-product sales page.',
      },
      {
        name: 'Compliance-Aware Supplement Suite',
        category: 'Facebook + Instagram (Regulated Vertical)',
        metric: 'Decade of Approved Cold Traffic',
        detail: 'Ten-plus years of Facebook and Instagram ad copy for supplement and health offers, calibrated to clear Meta review while still converting.',
      },
    ],
    deliverables: [
      {
        title: 'Facebook Ad Copy Suites',
        description:
          'Sets of 5\u201310 ad variations per campaign with multiple hooks, angles, and CTAs designed for systematic split testing across Facebook and Instagram.',
      },
      {
        title: 'Placement-Specific Copy',
        description:
          'Ad copy optimized for each Meta placement \u2014 Facebook Feed, Instagram Feed, Stories, Reels, and Audience Network.',
      },
      {
        title: 'Hook Library',
        description:
          'Collection of proven Facebook ad hooks and opening angles that can be mixed and matched across campaigns.',
      },
      {
        title: 'Video Ad Scripts',
        description:
          'Scripts for Facebook and Instagram video ads, Reels, and UGC-style creative \u2014 with hook options for the critical first 3 seconds.',
      },
      {
        title: 'Compliance Review Notes',
        description:
          'Meta policy compliance considerations for each ad, with flagged language and compliant alternatives for regulated industries.',
      },
      {
        title: 'Testing Roadmap',
        description:
          'Prioritized testing plan showing which Facebook ad elements to test first, in what order, and how to iterate based on results.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable is engineered to find winning Facebook and Instagram ads faster \u2014 not just fill your Ads Manager.',
    testimonialIds: ['4', '15', '2', '3', '6'],
    portfolioItems: [
      { title: 'Facebook Ad Suite \u2014 Health Niche', category: 'Ads' },
      { title: 'Instagram Ad Campaign \u2014 DTC', category: 'Ads' },
      { title: 'Meta Ad Suite \u2014 Info Product', category: 'Ads' },
    ],
    midCta: {
      headline: 'Ready for Facebook ads that beat your control AND clear Meta review?',
      subtext:
        'Book a free strategy call. I\'ll review your last five ads (and the ones Meta paused) against the CTR/CPA/ROAS data, then tell you honestly where the conversion is leaking and whether I can write something that beats your control.',
    },
    faqs: [
      {
        question: 'What\'s the difference between a Facebook ads copywriter and a general ad copywriter?',
        answer:
          'A Facebook ads copywriter specializes in the mechanics of Meta\'s ad system \u2014 the interplay between primary text, headline, and description as one persuasion system; how copy performs differently across Facebook Feed, Instagram Feed, Stories, and Reels; and Meta\'s review and restricted-language rules that auto-reject half your best angles before a human reviewer ever sees them. A general ad copywriter writes across Facebook, Google, YouTube, and native. I do both \u2014 but this service is specifically focused on the Meta ad system.',
      },
      {
        question: 'Are you taking new Facebook ads clients?',
        answer:
          'I take a selective number of new Facebook ad engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI to write Facebook ad copy?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, hook formulas, FB-specific patterns, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer. The AI mines the Meta Ad Library at scale and generates variation suites against four decades of campaigns that have already converted. I make every strategic and structural call.',
      },
      {
        question: 'What does Facebook ads copywriting cost?',
        answer:
          'Facebook ads engagements are fixed-price. Most full FB ad suites start at $10K \u2014 research, hook library, 8\u201315 finished ads with placement-specific tuning, compliance notes, and a testing roadmap. Smaller single-campaign suites are priced lower. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: at $5K/day in Facebook spend, an ad converting at 1.5% instead of 1% on the same traffic pays for the writer in the first week.',
      },
      {
        question: 'How long does it take to write a Facebook ad campaign?',
        answer:
          'A multi-placement Facebook ad suite (research + hook library + 8\u201315 finished ads with placement-specific tuning + compliance review + testing roadmap) typically takes 2\u20133 weeks. A single-placement suite is 1\u20132 weeks. The audience and angle research always comes first \u2014 that\'s where the click-through rate lives.',
      },
      {
        question: 'How do you handle Facebook ad compliance for health and finance?',
        answer:
          'This is one of my specialities. I\'ve written compliance-aware Facebook and Instagram ad copy for supplement offers, financial publishers, and ClickBank vendors for over a decade \u2014 including ads that drove 300% ROAS while clearing Meta\'s review. I know which language patterns to swap, which claims to back with mechanism, and where Meta\'s automated review actually trips. I provide compliance notes with each ad flagging anything your legal team should review.',
      },
      {
        question: 'What industries do you write Facebook ads for?',
        answer:
          'Health and supplement (compliance-aware FB ad copy for over a decade), ClickBank (Ben Palmer\'s 300% ROAS funnel; Mobile Profits VSL #1 offer at $30M+), info products and coaching (Abundant 340% ROAS), financial publishers (regulated FB+IG copy), e-commerce and DTC (Reels + carousel + UGC scripts), SaaS. Each vertical has its own Meta-policy posture and buyer psychology. The frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is audience and angle research (including Meta Ad Library mining), then hook library and architecture, then the finished ads with placement-specific tuning and compliance review, then a testing roadmap. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['ad-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'Conversion Rate Optimization',
    slug: 'conversion-rate-optimization',
    shortDescription:
      'Copy-driven CRO from the operator who ran the 9-year, $523M Belron direct-response control. I audit your funnel and ship test-ready rewrites that beat your current control \u2014 not button-color tweaks.',
    metaTitle: 'Conversion Rate Optimization | Beat Your Current Control with Copy',
    metaDescription:
      'Senior conversion rate optimization from the operator behind the 9-year, $523M Belron direct-response control. Copy audits and test-ready rewrites that beat your current control \u2014 not button-color tweaks. Fixed-price engagements.',
    headline: 'Conversion Rate Optimization Behind the Longest Continuously-Tested $523M Direct-Response Control',
    subheadline:
      'The Belron campaign I architected and ran for 9 years did $523 million as a continuously-tested direct-response control \u2014 every headline, every lead, every close, refined against back-end response numbers for nearly a decade. That\'s CRO at the only level that matters: you ship copy that beats your current control. I audit your funnel, diagnose where the copy is leaking conversion, and write the test-ready rewrites that beat your current control. If your conversion rate is stuck and you\'ve already changed the button colors, the copy is the leak.',
    heroImage: '/images/services/conversion-rate-optimization.jpg',
    heroImageAlt: 'Analytics dashboard showing conversion rates and optimization metrics',
    heroStats: {
      primary: { value: '30\u201350%', label: 'Typical Headline-Test Lift on Audited Pages' },
      secondary: [
        { value: '$523M', label: '9-Year Belron Direct-Response Control' },
        { value: '8%', label: 'Conor Reynolds Cold-Traffic CVR (Audited Funnel)' },
        { value: '300%', label: 'Ben Palmer ClickBank ROAS (Optimized Campaign)' },
      ],
    },
    credentialBar: {
      heading: 'Copy-driven CRO and control-beater work for',
      items: [
        'Belron International (9-year control)',
        'ClickBank #1 Offers',
        'Copy Accelerator (as Copy Chief)',
        'VSLs, Sales Pages, Funnels',
        'Facebook/Meta Ad Sets',
        'DTC and SaaS Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Button-Color CRO Doesn\'t Move the Needle',
        content:
          'You\'re paying for traffic. Your conversion rate is stuck. You\'ve tried changing the button color. You\'ve moved the CTA above the fold. You\'ve added a countdown timer. You\'ve A/B-tested hero images. Maybe your CRO agency tested 47 variations of microcopy over six months and reported a "statistically inconclusive" 0.3% improvement \u2014 burning $40K in fees on tests that didn\'t move the metric anyone in your business actually cares about.\n\n' +
          '<strong>None of it moved the needle because none of it touched the thing that actually drives conversion: the copy.</strong>\n\n' +
          'The headline determines whether anyone reads the page. The lead determines whether they keep reading after the headline. The mechanism determines whether they believe your offer is different. The proof determines whether they believe it works for them. The close determines whether they hit the button. And the objection-handling determines whether their last hesitation gets answered before they bounce.\n\n' +
          'Button color and hero images are cosmetic. The copy is structural. <strong>Industry data is consistent: headline changes alone routinely lift conversion 30\u201350% on the same traffic, with no design change required.</strong> Most CRO programs miss this because the people running them weren\'t trained as direct-response copywriters.',
      },
      {
        heading: 'What 9 Years of Continuously-Tested Belron Control Actually Means',
        content:
          'In 1996, Belron \u2014 the world\'s largest auto-glass-replacement business \u2014 handed me their direct-response campaign. Five award-winning copywriters had already failed at it. I was the sixth. I architected the full package and ran it as a control for 9 consecutive years across 35+ countries. The campaign generated <strong>$523 million</strong> in tracked sales.\n\n' +
          '<strong>That\'s not a campaign. That\'s the longest continuously-tested CRO program in modern direct response.</strong> Nine years of headlines tested against the previous control. Nine years of leads measured against back-end response. Nine years of closes refined against the actual renewal-cycle numbers. The pattern-recognition dataset most copywriters don\'t accumulate across an entire career \u2014 accumulated across one campaign in one market over a decade.\n\n' +
          'That pattern recognition is what carries into every CRO engagement I take today. When I audit your funnel, I\'m not guessing what might work \u2014 I\'m running it against the patterns that earned $523M, plus the recent ones that delivered <strong>8% cold-traffic CVR for Conor Reynolds</strong>, <strong>300% ROAS for Ben Palmer\'s ClickBank campaign</strong>, <strong>340% ROAS on the Abundant TSL</strong>, and <strong>22% trial-to-paid lift on Chatterkick\'s onboarding LP</strong>.\n\n' +
          'If you have a funnel running and the conversion isn\'t where you need it, send me the page (or the full funnel), the actual ad creative driving traffic to it, and the back-end numbers \u2014 I\'ll tell you on the strategy call exactly where the copy is leaking conversion (it\'s almost always the headline, the close, or the proof section\'s specificity) and whether I can ship test-ready rewrites that beat your current control.',
      },
      {
        heading: 'Why Stefan Georgi Hired Me as Copy Chief at CA Labs (Spoiler: It Was Pure CRO)',
        content:
          'Stefan Georgi (the copywriter behind over $1 billion in tracked sales) hired me as Copy Chief inside Copy Accelerator\'s CA Labs. The role description was "Copy Chief." The actual job was pure CRO: review existing copy across the portfolio, identify what was underperforming and why, write the specific rewrites that lifted the conversion metrics.\n\n' +
          'That\'s the discipline. You can\'t audit a VSL by feel. You can\'t optimize a sales page by hunch. You can\'t beat a control by "making the copy stronger." You diagnose against frameworks: Schwartz awareness levels (is the headline matched to the buyer\'s stage?), the PASTOR sequence (is each section earning the next?), the Brain Audit objection model (which of the seven uncertainties is killing conversion?), the Alen Sultanic 3-step sales-page diagnostic, Makepeace\'s seven characteristics, the Four U\'s headline scoring, the Belcher 21-step.\n\n' +
          'Justin Goff publicly credited me with stepping up and knocking it out of the park. Caleb O\'Dowd celebrated getting the bump in conversions. Ben Palmer (a ClickBank Platinum vendor) clocked <strong>300% ROAS</strong> on a campaign I optimized. Sam P. (a lead-gen specialist) sent me a note that the squeeze-page rewrite was "crushing the old one" \u2014 which is the only sentence that matters in CRO.\n\n' +
          'These are operators with their own money on the line.',
      },
      {
        heading: 'How I Audit, Diagnose, and Ship Test-Ready Rewrites That Beat Your Current Control',
        content:
          'Every CRO engagement I take moves through the same four phases. None are optional. The discipline is what separates a CRO program that lifts conversion 30\u201350% on a headline change from one that runs 47 inconclusive button-color tests.',
        bullets: [
          'Phase 1 \u2014 Full-funnel audit and analytics ingestion: I audit every page in your funnel against the persuasion frameworks above (Schwartz, PASTOR, Brain Audit, Belcher, Sultanic, Makepeace) and pull your conversion data, drop-off points, and traffic sources. My AI workflow processes hundreds of competitor pages, customer-research transcripts, and ad-library entries in the time a manual pass takes to read three \u2014 surfacing the exact copy patterns that are scaling in your category.',
          'Phase 2 \u2014 Copy-leak diagnosis and prioritization: I deliver a written audit naming the specific copy elements losing conversion, scored against the framework, ranked by expected lift. The headline, the lead, the mechanism, the proof, the objection handling, the close \u2014 each diagnosed with the specific reason it\'s leaking and the specific change that would lift it. You don\'t test everything; you test the highest-leverage changes first, and you walk into every test with a real hypothesis instead of a hunch.',
          'Phase 3 \u2014 Test-ready rewrites: I don\'t just tell you what\'s wrong. I write the specific copy alternatives you ship as split tests \u2014 multiple headlines, lead variations, close rewrites, proof restructures, CTA copy. Every variation engineered with a specific hypothesis so you learn something whether the test wins or loses.',
          'Phase 4 \u2014 Testing roadmap and read-the-results discipline: clear plan for what to test, in what order, with the statistical rigor required to make a real read. No "inconclusive 0.3% lift" calls dressed up as optimization.',
        ],
      },
      {
        heading: 'CRO Across VSLs, Sales Pages, Landing Pages, Ads, Emails, and Upsell Stacks',
        content:
          'Conversion rate optimization isn\'t a single-page exercise. Every step in your funnel is a conversion point \u2014 and a potential copy leak. I optimize copy across all of them, with the framework that fits each asset type.',
        bullets: [
          'VSL CRO \u2014 hook testing, retention-curve analysis, close-sequence rewrites (Belron 9-year control + 8% Conor Reynolds cold-traffic CVR)',
          'Sales-page and TSL CRO \u2014 headline testing, proof-section restructuring, objection handling, close refinement (340% Abundant ROAS + 5.7% Monetari opt-in-to-sale)',
          'Landing-page CRO \u2014 above-the-fold copy, message-match audit, form-friction reduction (22% Chatterkick trial-to-paid lift)',
          'Ad-copy CRO \u2014 hook testing, angle rotation, compliance-aware variation (300% Ben Palmer ClickBank ROAS + decade of Meta-review fluency)',
          'Email-sequence CRO \u2014 subject-line testing, open-rate optimization, sequence architecture (300% Ben Palmer ROAS + 22% Chatterkick trial-to-paid)',
          'Upsell and AOV CRO \u2014 post-purchase copy rewrites, take-rate optimization, downsell sequence testing ($30M+/$40M+ ClickBank back-end stacks + 30\u2013100% AOV lift range)',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Belron / Safelite International',
        category: '9-Year Continuously-Tested Control',
        metric: '$523M / 35+ Countries',
        detail: 'Direct-response control I architected and ran for 9 years \u2014 every headline, lead, close, and objection refined against back-end response numbers.',
      },
      {
        name: 'Conor Reynolds Funnel',
        category: 'Cold-Traffic Funnel CRO',
        metric: '8% Cold-Traffic CVR',
        detail: 'Funnel optimization across the bridge sequence, sales page, and back-end.',
      },
      {
        name: 'Ben Palmer ClickBank Campaign',
        category: 'Ad + Sales Copy CRO',
        metric: '300% ROAS',
        detail: 'Hook, lead, mechanism, and close optimization on a ClickBank Platinum vendor\'s campaign.',
      },
      {
        name: 'Chatterkick Onboarding LP',
        category: 'SaaS Trial-to-Paid CRO',
        metric: '22% Trial-to-Paid Lift',
        detail: 'Above-the-fold copy and onboarding-flow optimization that lifted trial-to-paid by almost a quarter.',
      },
    ],
    deliverables: [
      {
        title: 'Copy Audit Report',
        description:
          'Comprehensive analysis of your existing copy against proven persuasion frameworks, with specific diagnostics on where conversions are being lost.',
      },
      {
        title: 'Prioritized Optimization Plan',
        description:
          'Ranked list of copy changes by expected conversion impact, so you test the highest-leverage improvements first.',
      },
      {
        title: 'Test-Ready Rewrites',
        description:
          'Specific copy alternatives for headlines, hooks, closes, proof sections, and CTAs \u2014 ready to split test immediately.',
      },
      {
        title: 'Headline & Hook Variations',
        description:
          'Multiple headline and hook options for A/B testing, each targeting a different emotional angle or awareness level.',
      },
      {
        title: 'Funnel Leak Analysis',
        description:
          'Page-by-page breakdown of where prospects are dropping off in your funnel, with copy-specific fixes for each leak point.',
      },
      {
        title: 'Testing Roadmap',
        description:
          'Clear testing plan with specific hypotheses, priority order, and guidance on interpreting results for iterative improvement.',
      },
    ],
    deliverablesHeading: 'What You Get When You Hire Me',
    deliverablesSubtext:
      'Every deliverable engineered to ship test-ready copy that beats your current control on the metrics \u2014 not button-color tests dressed up as optimization.',
    testimonialIds: ['1', '18', '16', '4', '2', '3', '6'],
    portfolioItems: [
      { title: 'Funnel CRO \u2014 Health Supplement', category: 'CRO' },
      { title: 'Landing Page Optimization \u2014 DTC', category: 'CRO' },
      { title: 'VSL Hook Testing \u2014 Biz-Op', category: 'CRO' },
    ],
    midCta: {
      headline: 'Ready to ship copy that beats your current control \u2014 not button-color tests?',
      subtext:
        'Send me your funnel (single page or full sequence), the ad creative driving traffic to it, and your back-end numbers. I\'ll tell you on the call exactly where the copy is leaking conversion and whether I can ship test-ready rewrites that beat your current control.',
    },
    faqs: [
      {
        question: 'What does conversion rate optimization actually do?',
        answer:
          'Real CRO is the discipline of identifying which copy elements on your page or funnel are losing conversion and writing the specific rewrites that beat your current control on the metrics. The #1 driver of conversion rate is the copy \u2014 the headline, the lead, the mechanism, the proof stack, the objection handling, and the close. Button colors, hero images, and microcopy tweaks are cosmetic; the copy is structural. Industry data is consistent: headline changes alone routinely lift conversion 30\u201350% on the same traffic. That\'s where the lift lives, and that\'s what I optimize.',
      },
      {
        question: 'Are you taking new CRO clients?',
        answer:
          'I take a selective number of new CRO and control-beater engagements each quarter so the work stays at the level the proof requires. Most kickoffs happen within two weeks of the strategy call. If the project is a fit, I\'ll send a fixed-price proposal within 48 hours. If it isn\'t, I\'ll tell you on the call and point you toward someone in my network who\'s better suited.',
      },
      {
        question: 'How do you use AI in CRO?',
        answer:
          'I don\'t use generic ChatGPT prompting. I use Claude Code augmented by my own custom-built copywriting skills \u2014 proprietary skill files that encode 40 years of frameworks, headline formulas, and evaluation criteria into a working AI workflow, with my 1,239-file Obsidian copywriting brain as the reference layer (190 frameworks, 193 swipe pieces, 125 book/course notes, 76 templates, 512 pieces of my own copy). The AI accelerates auditing competitor pages at scale, mining customer language from thousands of reviews, and surfacing copy patterns that scale in your category. I make every strategic and structural call \u2014 which headline to test, why the close is failing, what objection the proof stack needs to address.',
      },
      {
        question: 'How much does CRO cost?',
        answer:
          'CRO engagements are fixed-price. Single-page audit + test-ready rewrites typically start at $5K. Full-funnel CRO (5\u20138 pages, multiple test rounds, prioritized roadmap) starts at $15K. You\'ll have a clear quote within 48 hours of the strategy call. No hourly billing, no scope creep, no surprises. Here\'s the framing that matters: improving your conversion rate by even 0.5% on serious traffic pays for the engagement in the first week. CRO is the only investment that makes every other marketing investment work harder.',
      },
      {
        question: 'How long does a CRO engagement take?',
        answer:
          'A single-page audit and test-ready rewrite typically takes 2\u20134 weeks. Full-funnel CRO takes 4\u20136 weeks for the audit, diagnosis, and first round of test-ready rewrites \u2014 plus an optional ongoing optimization cadence after the initial round. I never rush the audit phase \u2014 reading your back-end numbers and matching them to the copy patterns is what tells me where the leak is.',
      },
      {
        question: 'What do you mean by "beat the control"?',
        answer:
          'In direct response, the "control" is whatever copy is currently running and beating the alternatives in your testing. To beat the control, the new copy has to deliver a measurable lift on the conversion metric you care about \u2014 sale rate, opt-in rate, click-through, AOV, or whatever the page\'s job is. That\'s the only standard that matters. The 9-year Belron campaign I architected ran as a continuously-tested direct-response control across 35+ countries \u2014 every variation tested against the back-end numbers, the strongest version always retained. That\'s what I bring to your funnel.',
      },
      {
        question: 'What industries do you do CRO for?',
        answer:
          '$523M / 9 years on the Belron direct-response control. 8% cold-traffic CVR optimization on Conor Reynolds\'s funnel. 300% ROAS optimization on Ben Palmer\'s ClickBank campaign. 340% ROAS on Abundant\'s info-product TSL. 5.7% opt-in-to-sale on Monetari Fund\'s compliance-aware financial bridge. 22% trial-to-paid lift on Chatterkick\'s SaaS onboarding LP. Plus health and supplement, e-commerce and DTC, info products, ClickBank vendors, financial publishers, and B2B lead-gen funnels. Each vertical has its own conversion math; the persuasion frameworks adapt accordingly.',
      },
      {
        question: 'What happens after the strategy call?',
        answer:
          'Within 48 hours of the call, you\'ll have a fixed-price proposal with full scope, deliverables, and timeline. If you say yes, kickoff is inside two weeks. The first phase is full-funnel audit and analytics ingestion, then copy-leak diagnosis and prioritization, then test-ready rewrites, then the testing roadmap. You\'ll see the work as it\'s built \u2014 not as a single drop at the end.',
      },
    ],
    relatedServices: ['sales-funnel-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'clickbank-copywriter'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
