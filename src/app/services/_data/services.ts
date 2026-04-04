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
      'High-converting video sales letters that turn cold traffic into customers. AI-enhanced research, battle-tested persuasion frameworks.',
    metaTitle: 'VSL Copywriter | Video Sales Letter Expert',
    metaDescription:
      'Hire a veteran VSL copywriter with $523M+ in tracked results. Rob Palmer writes high-converting video sales letters for ClickBank, DTC, and info product brands.',
    headline: 'The VSL Copywriter Behind $523M+ in Results',
    subheadline:
      'I write video sales letters that have generated $30M, $40M, and $27M for single offers. If your VSL needs to convert cold traffic into buyers, let\u2019s talk.',
    heroImage: '/images/services/vsl-copywriter.jpg',
    heroImageAlt: 'Video production and storytelling for VSL copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '40+', label: 'Years Direct Response' },
        { value: '#1', label: 'ClickBank Offers Written' },
        { value: '4%', label: 'Peak VSL Conversion Rate' },
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
        heading: 'Why Most VSLs Fail \u2014 And Burn Through Your Ad Budget',
        content:
          'You launch a VSL. You send traffic. And then you watch the heatmap: <strong>68% of viewers gone before the 90-second mark.</strong> The ones who stay drift off somewhere in the middle. Almost nobody reaches the close. Meanwhile, the ad spend keeps draining. This is what happens when a VSL is written by someone who knows how to write \u2014 but does not know how to <em>sell on video</em>. A VSL is not a blog post read over slides. It is a 15-to-45-minute persuasion sequence that must hold a cold, skeptical stranger\'s attention and compel them to pull out their credit card. That requires a completely different skill set: strategic pacing, pattern interrupts, emotional escalation, and knowing exactly when to transition from story to offer. Most VSL copywriters get one or two of those right. The ones who get all of them right are the ones behind the offers that scale.',
      },
      {
        heading: 'What Separates a $30M VSL From One That Dies in Testing',
        content:
          'When I wrote the VSL for <strong>Mobile Profits</strong>, it became the <strong>#1 offer on ClickBank</strong> and generated over <strong>$30 million</strong> \u2014 converting cold traffic at up to 4%. That did not happen because of a clever hook or a fancy script format. It happened because of what came <em>before</em> the writing: deep research into the audience\'s emotional landscape, a unique mechanism that felt new and intuitive, and a persuasion architecture mapped to exactly where those prospects sat on the awareness scale. That is the difference between a VSL that scales and one that bleeds money in testing. After 40+ years writing direct response and studying the frameworks behind the biggest winners \u2014 Schwartz\'s awareness levels, Georgi\'s RMBC method, Kell\'s VSL flow patterns \u2014 I can see the structural problems in a VSL the way a mechanic hears a bad engine. The pattern recognition alone is worth more than a clever turn of phrase.',
      },
      {
        heading: 'The VSL Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are not people who hand out compliments casually. They hired me and endorsed me because they have seen my work perform. When the best copywriters in the industry need someone to write or review VSLs, they call me. That is the level of VSL copywriting you get access to when we work together.',
      },
      {
        heading: 'How I Write a VSL That Converts Cold Traffic',
        content:
          'Every VSL I write follows a process refined over four decades of direct-response copywriting. But unlike generic process descriptions you have seen on every other copywriter\'s site, each phase here is tied to a specific conversion outcome \u2014 not just an activity.',
        bullets: [
          'Phase 1: Deep audience research \u2014 I mine forums, reviews, competitor funnels, and customer feedback to find the exact language your prospects use to describe their pain. This is where the hook comes from, not from brainstorming sessions.',
          'Phase 2: Mechanism and architecture \u2014 I build the unique mechanism that makes your offer feel genuinely different, then map the persuasion sequence that carries viewers from hook to close without losing momentum.',
          'Phase 3: Writing \u2014 every sentence is stress-tested against one question: would this keep a cold, skeptical prospect watching? If not, it gets cut or rewritten.',
          'Phase 4: Revision and optimization \u2014 I test hook variations, tighten the close, and ensure the script is production-ready with slide notation and timing cues.',
        ],
      },
      {
        heading: 'AI-Powered Research. Human-Crafted Persuasion.',
        content:
          'While your competitors\' copywriters are doing manual research, my AI-enhanced process analyzes <strong>50+ competitor VSLs</strong>, mines thousands of customer reviews, and tests hook variations \u2014 all before I write a single word. You get the strategic depth of a week-long research sprint compressed into 48 hours. But here is the thing AI cannot do: it cannot feel what your prospect feels. It cannot build the emotional escalation that makes someone lean forward at minute 12 instead of clicking away. It cannot architect a close that overcomes the final objection your prospect did not even know they had. That comes from 40+ years of direct-response experience and a pattern library built across hundreds of VSL projects. AI gives me speed and data. Experience gives me judgment. You get both.',
      },
      {
        heading: 'VSL Copywriting for Health, Finance, DTC, and Beyond',
        content:
          'A VSL for a joint supplement requires a completely different approach than a VSL for a stock trading newsletter or a DTC product launch. Each industry has unique compliance requirements, buyer psychology, and proven persuasion angles. I have written winning VSLs across all of them.',
        bullets: [
          'Health and supplement brands \u2014 including a $40M blood sugar VSL (Gluco 6)',
          'Financial publishers \u2014 including a $27M stock investing VSL',
          'Business opportunity offers \u2014 including the $30M Mobile Profits VSL (#1 on ClickBank)',
          'E-commerce and DTC companies',
          'ClickBank vendors and affiliates',
          'Info product and coaching businesses',
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
    testimonialIds: ['4', '5', '2', '6'],
    portfolioItems: [
      { title: 'Supplement VSL \u2014 Cold Traffic', category: 'VSL' },
      { title: 'Financial Newsletter VSL', category: 'VSL' },
      { title: 'DTC Product Launch VSL', category: 'VSL' },
    ],
    midCta: {
      headline: 'Ready to write a VSL that actually converts?',
      subtext:
        'Book a free strategy call. I\u2019ll tell you honestly whether I can beat what you\u2019re running now.',
    },
    faqs: [
      {
        question: 'What is a VSL and why do I need a specialist VSL copywriter?',
        answer:
          'A VSL (Video Sales Letter) is a long-form video presentation \u2014 typically 15 to 45 minutes \u2014 designed to sell a product or service directly to cold traffic. It follows a structured direct-response format: hook, story, mechanism, proof, offer, close. You need a specialist VSL copywriter because the format demands skills in pacing, retention mechanics, and persuasion architecture that general copywriters simply do not have. A blog writer or brand copywriter will give you a script that sounds nice. A VSL specialist will give you a script that converts.',
      },
      {
        question: 'How long does it take to write a VSL?',
        answer:
          'A typical VSL project takes 2\u20134 weeks from briefing to final draft. That includes deep audience research, competitive analysis, mechanism development, strategic architecture, scripting, and one comprehensive revision round. Rush projects can be accommodated, but I never shortcut the research phase \u2014 that is where the conversion rate lives. Skipping research to save a few days is how you end up with a VSL that wastes months of ad spend.',
      },
      {
        question: 'What industries do you write VSLs for?',
        answer:
          'I have written winning VSLs for health supplements (including the $40M Gluco 6 VSL), financial publishers ($27M stock investing VSL), business opportunity offers ($30M Mobile Profits \u2014 #1 on ClickBank), e-commerce and DTC brands, ClickBank vendors, and info product businesses. Each niche has different compliance requirements and buyer psychology, and I bring proven frameworks to all of them.',
      },
      {
        question: 'How long should a VSL be?',
        answer:
          'It depends on your offer price and traffic temperature. Short-form VSLs (5\u201315 minutes) work for lower-priced impulse purchases and lead generation. Long-form VSLs (20\u201345 minutes) are typically needed for higher-ticket offers where the prospect needs more proof and persuasion. I recommend the right length based on your specific offer, audience, and funnel \u2014 then write every second to earn its place.',
      },
      {
        question: 'Do you use AI to write VSL scripts?',
        answer:
          'I use AI to research faster and deeper \u2014 analyzing competitor scripts at scale, mining thousands of customer reviews, and testing hook angles before writing. But every VSL is strategically planned and written by me. AI gives me the data advantage. Four decades of direct-response experience give me the judgment to know what to do with it. That combination is why my VSLs outperform.',
      },
      {
        question: 'What is your VSL copywriting pricing?',
        answer:
          'VSL copywriting is project-based, and pricing depends on length, offer complexity, and research scope. We discuss specifics on a strategy call. But here is how I think about it: a VSL that converts at 2% instead of 0.5% on the same traffic does not just pay for itself \u2014 it changes the economics of your entire business. The question is not what a VSL costs. It is what a bad VSL costs you every day it is running.',
      },
    ],
    relatedServices: ['sales-page-copywriter', 'sales-funnel-copywriter'],
    relatedVerticals: ['health-supplement-copywriter', 'clickbank-copywriter'],
  },
  {
    title: 'Sales Page Copywriter',
    slug: 'sales-page-copywriter',
    shortDescription:
      'Long-form sales pages and TSLs that convert browsers into buyers. Proven frameworks, rigorous testing, real results.',
    metaTitle: 'Sales Page Copywriter | High-Converting Sales Copy',
    metaDescription:
      'Expert sales page copywriter with $523M+ in tracked results. Long-form sales pages and TSLs that convert for ClickBank, DTC, and info product brands.',
    headline: 'The Sales Page Copywriter Behind $523M+ in Results',
    subheadline:
      'I write long-form sales pages and text sales letters that convert cold traffic into buyers \u2014 with results like 8% conversion rates, 340% ROAS, and offers that scale to eight figures.',
    heroImage: '/images/services/sales-page-copywriter.jpg',
    heroImageAlt: 'Writing and crafting persuasive sales page copy',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '8%', label: 'Cold Traffic Conversion' },
        { value: '340%', label: 'ROAS on Facebook' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Trusted by',
      items: [
        'ClickBank Platinum Vendors',
        'Copy Accelerator (as Copy Chief)',
        'DTC Brands',
        'Info Product Creators',
        'Financial Publishers',
      ],
    },
    sections: [
      {
        heading: 'Why Most Sales Pages Bleed Money Instead of Making It',
        content:
          'You are sending traffic to a sales page. The clicks are coming in. But the conversion rate is sitting at 0.5% \u2014 maybe 1% on a good day. You have tried tweaking the headline, swapping the hero image, testing different button colors. Nothing moves the needle. Here is why: <strong>the problem is not cosmetic. It is structural.</strong> A sales page is not a brochure with a buy button. It is a long-form persuasion sequence \u2014 a text sales letter (TSL) \u2014 that must take a cold, skeptical stranger and walk them from "who is this?" to "take my money" in a single visit. That requires strategic architecture: the right hook for your audience\'s awareness level, pain agitation that makes them feel the cost of inaction, a mechanism that makes your solution feel genuinely different, proof that eliminates doubt, and a close that handles every objection standing between them and their credit card. Miss any one of those stages and conversions collapse. Most sales page copywriters get the words right but the architecture wrong. That is why their pages read well and sell poorly.',
      },
      {
        heading: 'What an 8% Cold Traffic Conversion Rate Looks Like',
        content:
          'When a client told me their funnel was "doing great" at 8% on cold traffic, that was not luck. It was the result of a sales page built on the same direct-response architecture I have refined over 40+ years \u2014 deep audience research that found the exact emotional triggers driving purchase decisions, a unique mechanism that made the offer feel new, and a persuasion sequence mapped to Schwartz\'s awareness levels. The same approach drove <strong>340% ROAS on Facebook</strong> for an info product sales page (Abundant), <strong>5.7% opt-in-to-sale</strong> for a financial services TSL (Monetari Fund), and <strong>4.8% front-end conversion</strong> on a hybrid sales page for a business opportunity offer. These are not flukes. They are the predictable outcome of applying battle-tested frameworks \u2014 PASTOR, the Perry Belcher 21-step sequence, the Brain Audit objection model \u2014 to deep customer research. That is what separates a sales page that scales from one that sits there burning ad spend.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who have seen thousands of sales pages. They hired me and endorsed me because my work performs. When the best in the industry need a sales page copywriter they can trust with their own offers, they call me. That is the level of sales page copywriting you get access to when we work together.',
      },
      {
        heading: 'How I Write a Sales Page That Converts Cold Traffic',
        content:
          'Every sales page and TSL I write follows a process refined over four decades of direct-response copywriting. Each phase is tied to a specific conversion outcome \u2014 not just an activity.',
        bullets: [
          'Phase 1: Deep audience research \u2014 I mine forums, reviews, competitor pages, and customer feedback to find the exact language your prospects use to describe their pain. The hook and headline come from here, not from a brainstorming session.',
          'Phase 2: Objection mapping \u2014 I identify every objection that could kill the sale and build the persuasion sequence to address each one at exactly the right moment. This is where most sales pages fail \u2014 they answer objections too early, too late, or not at all.',
          'Phase 3: Architecture and writing \u2014 I build the full sales page structure: headline, lead, story, mechanism, proof stack, offer build, close, and guarantee. Every sentence stress-tested against one question: does this move the reader closer to buying?',
          'Phase 4: Revision and optimization \u2014 headline variations for split testing, tightened transitions, and a wireframe showing your design team exactly where every element goes.',
        ],
      },
      {
        heading: 'AI-Powered Research. Human-Crafted Persuasion.',
        content:
          'While your competitors\' copywriters are doing manual research, my AI-enhanced process analyzes <strong>dozens of competitor sales pages</strong>, mines thousands of customer reviews, and tests headline angles \u2014 all before I write a single word. You get the strategic depth of a week-long research sprint compressed into 48 hours. But here is what AI cannot do: it cannot feel what your prospect feels. It cannot build the emotional escalation that makes someone scroll past the price and click the buy button instead of closing the tab. It cannot architect a guarantee and close sequence that overcomes the final objection your prospect did not even know they had. That comes from 40+ years of direct-response experience. AI gives me speed and data. Experience gives me judgment. You get both.',
      },
      {
        heading: 'Sales Page Copywriting for Health, Finance, DTC, and Beyond',
        content:
          'A sales page for a $47 supplement uses completely different techniques than a TSL for a $2,000 coaching program or a $997 SaaS annual plan. Each industry has unique compliance requirements, buyer psychology, and proven persuasion patterns. I have written converting sales pages across all of them.',
        bullets: [
          'Health and supplement brands \u2014 including sales pages supporting $40M+ in VSL funnel revenue',
          'Financial publishers \u2014 compliant long-form TSLs for investment and newsletter offers',
          'Info products and coaching \u2014 including a sales page that hit 340% ROAS on Facebook (Abundant)',
          'E-commerce and DTC companies',
          'ClickBank vendors and affiliates',
          'Business opportunity offers \u2014 including a hybrid page converting at 4.8% on the front end',
        ],
      },
    ],
    caseStudies: [
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
        detail: 'Compliant financial services sales page.',
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
    testimonialIds: ['5', '4', '2', '6'],
    portfolioItems: [
      { title: 'Long-Form Supplement Sales Page', category: 'Sales Page' },
      { title: 'Info Product Launch Page', category: 'Sales Page' },
      { title: 'SaaS Annual Plan Sales Page', category: 'Sales Page' },
    ],
    midCta: {
      headline: 'Ready for a sales page that actually converts?',
      subtext:
        'Book a free strategy call. I\u2019ll tell you honestly whether I can beat what you\u2019re running now.',
    },
    faqs: [
      {
        question: 'What makes a great sales page copywriter?',
        answer:
          'Pattern recognition from hundreds of tested sales pages and TSLs across different markets. A great sales page copywriter does not guess what works \u2014 they know, because they have seen the data from decades of split tests. They understand that every element on the page serves a strategic purpose, and they have the discipline to cut anything that does not advance the sale. That is what 40+ years of direct-response experience gives you.',
      },
      {
        question: 'What makes a sales page different from a landing page?',
        answer:
          'A sales page (also called a TSL or text sales letter) is a long-form persuasion sequence designed to take a reader from awareness to purchase in a single visit. A landing page is typically shorter and designed for a single action like an email opt-in or webinar registration. Both require direct-response skills, but sales pages demand deeper persuasion architecture, more comprehensive objection handling, and a complete offer build with guarantee and close.',
      },
      {
        question: 'How long should a sales page be?',
        answer:
          'It depends on your offer price, traffic temperature, and complexity. Cold traffic and higher prices require longer pages \u2014 you need more proof and more objection handling. I have written converting sales pages from 2,000 words to over 10,000 words. The right length is however long it takes to address every objection and build enough desire to close the sale. Not a word more, not a word less.',
      },
      {
        question: 'How much does sales page copywriting cost?',
        answer:
          'Sales page copywriting is project-based, and pricing depends on offer complexity, research scope, and length. We discuss specifics on a strategy call. But here is how I think about it: a sales page converting at 4% instead of 1% on the same traffic does not just pay for itself \u2014 it changes the economics of your entire funnel. The question is not what a sales page costs. It is what a bad sales page costs you every day it is running.',
      },
      {
        question: 'Do you write sales pages for specific industries?',
        answer:
          'I write sales pages and TSLs for health and supplements, financial services, e-commerce and DTC, ClickBank offers, info products, coaching programs, and SaaS. Each industry has specific compliance requirements and buyer psychology. My cross-industry experience means I bring proven frameworks to your niche \u2014 including results like 340% ROAS on an info product sales page and 5.7% opt-in-to-sale on a financial TSL.',
      },
      {
        question: 'How long does it take to write a sales page?',
        answer:
          'A typical sales page project takes 2\u20134 weeks from briefing to final draft. That includes deep audience research, competitive analysis, objection mapping, strategic architecture, writing, and one comprehensive revision round. I never shortcut the research phase \u2014 that is where the conversion rate lives.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'Sales Letter Copywriter',
    slug: 'sales-letter-copywriter',
    shortDescription:
      'Classic direct mail and digital sales letters built on proven DR fundamentals. From Fortune 500 to ClickBank.',
    metaTitle: 'Sales Letter Copywriter | Direct Mail & Digital Sales Letters',
    metaDescription:
      'Hire a sales letter copywriter with Fortune 500 direct mail roots and $523M+ in tracked results. Expert in both print and digital sales letters that convert.',
    headline: 'The Sales Letter Copywriter Behind $523M+ in Results',
    subheadline:
      'I learned sales letter craft writing direct mail for Apple, IBM, and Citibank. Then I took those fundamentals digital and generated $523M+ in tracked results. If you need a sales letter that converts, you are in the right place.',
    heroImage: '/images/services/sales-letter-copywriter.jpg',
    heroImageAlt: 'Direct mail letter and envelope for sales letter copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '40+', label: 'Years Writing Sales Letters' },
        { value: '35+', label: 'Countries Reached' },
        { value: '9 Years', label: 'Longest-Running Control' },
      ],
    },
    credentialBar: {
      heading: 'Sales letters written for',
      items: [
        'Apple Computer',
        'Belron / Safelite',
        'IBM',
        'Citibank',
        'National Geographic',
        'ClickBank Vendors',
      ],
    },
    sections: [
      {
        heading: 'Why Most Sales Letters Get Thrown Away \u2014 Physically and Digitally',
        content:
          'A sales letter has about three seconds to earn the next thirty. Whether it lands in a physical mailbox or loads on a screen, the reader is making a snap judgment: <strong>is this worth my time, or is it going in the trash?</strong> Most sales letters lose that battle because the copywriter does not understand what a sales letter actually is. It is not a brochure. It is not a product description. It is a personal, one-to-one persuasion sequence \u2014 written as if from one human being to another \u2014 that must earn every single sentence. The format tolerates no filler. No corporate jargon. No "we at Company X are proud to announce." Every word either pulls the reader forward or loses them forever. That discipline is what separates a sales letter copywriter who has written direct mail from one who has only written for screens.',
      },
      {
        heading: 'From a $523M Direct Mail Campaign to Digital Sales Letters',
        content:
          'The campaign that defined my career was a direct-response sales letter for <strong>Belron / Safelite</strong>. It ran for <strong>9 years across 35+ countries</strong>, generated <strong>$523 million in tracked sales</strong> \u2014 and it succeeded after five previous copywriters had failed. The CEO called me his "secret weapon." That was not a digital funnel or a VSL. It was a sales letter, built on the same fundamentals that Gary Halbert, John Carlton, and Clayton Makepeace used to generate fortunes from a single piece of paper and a stamp. Those fundamentals \u2014 a hook that stops the reader cold, a story that makes the problem feel urgent, a mechanism that makes the solution feel inevitable, and a close that removes every reason not to act \u2014 are exactly what I bring to every digital sales letter and TSL I write today.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who have read more sales letters than anyone alive. They hired me and endorsed me because they have seen my work perform. When the best sales letter copywriters in the industry need someone they trust, they call me.',
      },
      {
        heading: 'TSL Copywriting: The Digital Sales Letter',
        content:
          'The TSL (Text Sales Letter) is the digital evolution of the classic direct mail sales letter. Instead of arriving in the mailbox, it appears on a web page \u2014 but the persuasion principles are identical. TSLs are particularly powerful in health, finance, and info product markets where prospects respond to personal, story-driven selling. I bring the same disciplined approach to TSL copywriting that built the fortunes of the original direct mail industry: <strong>deep research into your prospect\'s emotional landscape</strong>, a unique mechanism that makes your offer feel different, a narrative arc that keeps them reading, and a close that converts. The result: TSLs that have driven <strong>340% ROAS on Facebook</strong> for info products, <strong>300% ROAS</strong> for supplement offers, and consistent front-end conversions across ClickBank and DTC funnels.',
      },
      {
        heading: 'How I Write a Sales Letter That Converts',
        content:
          'Every sales letter I write follows a process forged in Fortune 500 direct mail and refined over four decades. Each phase is tied to a specific conversion outcome.',
        bullets: [
          'Phase 1: Deep audience research \u2014 I find the exact language your prospects use to describe their problem, their failed attempts, and what they wish existed. The hook comes from here.',
          'Phase 2: Voice and angle \u2014 a sales letter lives or dies on voice. I determine the right persona, tone, and narrative angle to build trust with your specific audience.',
          'Phase 3: Architecture and writing \u2014 the full persuasion sequence: lead, story, mechanism, proof stack, offer build, guarantee, and close. Every sentence stress-tested.',
          'Phase 4: Revision and testing \u2014 opening variations for split testing, envelope/subject line teasers, and order form copy to maximize conversion at every touchpoint.',
        ],
      },
      {
        heading: 'Sales Letter Copywriting Across Formats and Industries',
        content:
          'The sales letter format adapts to virtually any medium and market. Whether it is a physical direct mail package or a digital TSL, the fundamentals are the same \u2014 but the execution must match the context.',
        bullets: [
          'Classic direct mail packages \u2014 including the $523M Belron/Safelite campaign',
          'Digital TSLs for ClickBank, affiliate, and DTC offers',
          'Financial newsletter promotions \u2014 compliant long-form sales letters for investment offers',
          'Health and supplement sales letters \u2014 story-driven copy for cold traffic',
          'Magalog-style sales letters',
          'Letter-format email series and launch sequences',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Belron / Safelite',
        category: 'Direct Mail Campaign',
        metric: '$523M in Sales',
        detail: '9-year control. 35+ countries. 5 copywriters failed before Rob.',
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
        detail: 'Facebook cold traffic. Story-driven long-form sales letter.',
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
      'Every deliverable reflects 40+ years of sales letter craft \u2014 from Fortune 500 direct mail to digital TSLs.',
    testimonialIds: ['1', '4', '2', '18'],
    portfolioItems: [
      { title: 'Health Supplement TSL', category: 'Sales Letter' },
      { title: 'Financial Newsletter Promo', category: 'Sales Letter' },
      { title: 'Info Product Launch Letter', category: 'Sales Letter' },
    ],
    midCta: {
      headline: 'Need a sales letter that actually converts?',
      subtext:
        'Book a free strategy call. Whether you need a direct mail package or a digital TSL, I\u2019ll tell you honestly what I can do for your offer.',
    },
    faqs: [
      {
        question: 'What is a sales letter vs. a sales page?',
        answer:
          'A sales letter uses a personal, letter-style format \u2014 written as if from one person directly to another. It relies on voice, storytelling, and personal connection to build trust and drive action. A sales page can use any layout including design-heavy formats with multiple columns and graphics. In practice, the best sales pages borrow heavily from sales letter principles. The format you need depends on your market, offer, and how your audience prefers to be sold to.',
      },
      {
        question: 'What is a TSL (Text Sales Letter)?',
        answer:
          'A TSL is the digital evolution of the classic direct mail sales letter. It is a long-form text-based page that reads like a personal letter from the seller to the prospect, using storytelling, social proof, and direct-response persuasion to drive conversions. TSLs are particularly effective in health, finance, and info product markets. I have written TSLs that delivered 340% ROAS on Facebook cold traffic.',
      },
      {
        question: 'Do you still write physical direct mail sales letters?',
        answer:
          'Yes. My career started in Fortune 500 direct mail \u2014 Apple, IBM, Citibank, National Geographic \u2014 and I still write direct mail packages when the strategy calls for it. The Belron/Safelite campaign that generated $523M ran as direct response across 35+ countries. Direct mail has experienced a resurgence as digital ad costs increase and physical mailboxes become less cluttered.',
      },
      {
        question: 'How long should a sales letter be?',
        answer:
          'As long as it takes to make the complete persuasion case \u2014 and not a word longer. For simple offers to warm audiences, that might be 1,500 words. For complex offers to cold traffic, 6,000 to 8,000 words or more. I learned length discipline writing direct mail where every extra sentence increased the postage bill. That same discipline applies to every digital sales letter I write.',
      },
      {
        question: 'What industries work best for sales letters and TSLs?',
        answer:
          'Sales letters and TSLs perform exceptionally well in health and supplements, financial services, info products, and any market where the buyer responds to personal, story-driven selling. They also work for higher-priced offers where trust and personal connection are critical. My $523M Belron campaign proves the format scales to enterprise too.',
      },
      {
        question: 'How much does a sales letter cost?',
        answer:
          'Sales letter copywriting is project-based, and pricing depends on length, complexity, format (direct mail vs. digital TSL), and research scope. We discuss specifics on a strategy call. The right question is not what a sales letter costs \u2014 it is what happens when the sales letter you are running now is underperforming by even 1%. On serious traffic, that gap compounds every day.',
      },
    ],
    relatedServices: ['sales-page-copywriter', 'email-copywriter'],
    relatedVerticals: ['financial-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'Email Copywriter',
    slug: 'email-copywriter',
    shortDescription:
      'Revenue-driving email sequences — launches, nurture, abandon cart, and daily broadcasts that build relationships and drive sales.',
    metaTitle: 'Email Copywriter | Revenue-Driving Email Sequences',
    metaDescription:
      'Expert email copywriter for direct-response brands. Launch sequences, nurture series, abandon cart emails, and daily broadcasts that drive revenue. $523M+ in tracked results.',
    headline: 'The Email Copywriter Behind $523M+ in Results',
    subheadline:
      'I write email sequences that turn subscribers into buyers \u2014 launch sequences, nurture series, abandon cart flows, and daily broadcasts engineered by a 40-year direct-response veteran.',
    heroImage: '/images/services/email-copywriter.jpg',
    heroImageAlt: 'Email marketing and inbox management for email copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '22%', label: 'Trial-to-Paid Lift' },
        { value: '40+', label: 'Years Direct Response' },
        { value: '300%', label: 'ROAS on Email-Driven Funnels' },
      ],
    },
    credentialBar: {
      heading: 'Email sequences written for',
      items: [
        'ClickBank Platinum Vendors',
        'SaaS Platforms',
        'DTC Brands',
        'Info Product Launches',
        'Supplement Marketers',
      ],
    },
    sections: [
      {
        heading: 'Why Most Email Sequences Lose Money Instead of Making It',
        content:
          'You have a list. You are sending emails. But the open rates are sliding, the click-throughs are flat, and your revenue-per-subscriber number makes you wince. <strong>The problem is not your list. It is what you are sending them.</strong> Most businesses treat email like a megaphone \u2014 blast the list, hope for clicks, repeat. That is not email marketing. That is noise. And your subscribers know the difference. A real email sequence is a <em>multi-step persuasion system</em> where every message has a specific strategic job: the subject line earns the open, the first sentence earns the scroll, and every paragraph earns the next. Miss any of those and the email dies in the inbox. Applied across a full sequence \u2014 launch, nurture, abandon cart, or daily broadcast \u2014 that discipline is what turns a dormant list into a revenue engine.',
      },
      {
        heading: 'What a 22% Trial-to-Paid Lift Looks Like',
        content:
          'When <strong>Chatterkick</strong> (a SaaS platform) needed an onboarding email sequence that actually converted free trials into paying customers, the result was a <strong>22% trial-to-paid lift</strong>. That did not happen because of a clever subject line. It happened because the sequence was architectured as a persuasion system \u2014 behavior-triggered messages that met each user where they were in the product, addressed the specific objection holding them back at that moment, and moved them toward the upgrade at exactly the right time. The same strategic approach has driven email sequences supporting <strong>$30M+ VSL funnels</strong>, <strong>300% ROAS</strong> on email-driven supplement offers, and launch sequences that have generated millions across health, finance, and info product markets. Email is still the highest-ROI marketing channel available. But only when the copy is engineered to convert \u2014 not just to fill inboxes.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who understand that email sequences are the backbone of every profitable funnel. They hired me because my copy performs across every channel \u2014 including the emails that drive traffic to the offers.',
      },
      {
        heading: 'Launch Sequences That Maximize Revenue Windows',
        content:
          'A product launch lives or dies on its email sequence. The pre-launch emails must build anticipation without giving away the close. The launch emails must create urgency and overcome every objection in real time. The post-launch emails must capture fence-sitters before the window shuts. Every email in the sequence has a specific strategic job \u2014 and if one email underperforms, the whole launch suffers.',
        bullets: [
          'Pre-launch: seed the problem, tease the mechanism, build desire over 3\u20135 emails before the cart opens',
          'Launch: urgency, proof stacking, objection handling, and multiple angle emails that hit different segments of your list',
          'Post-launch: fence-sitter emails, deadline reminders, and the final "door closing" sequence that captures 20\u201340% of total launch revenue',
          'Post-purchase: onboarding, upsell sequences, and referral triggers that maximize customer lifetime value',
        ],
      },
      {
        heading: 'Nurture, Abandon Cart, and Automated Sequences',
        content:
          'Beyond launches, email copywriting powers your business on autopilot. Each sequence type requires different strategic thinking, voice, and cadence. I engineer every automated sequence to generate revenue 24 hours a day without additional ad spend.',
        bullets: [
          'Welcome sequences that turn new subscribers into engaged buyers within the first 7 days',
          'Nurture sequences that build trust and authority over weeks \u2014 so when you make an offer, the list is primed',
          'Abandon cart emails that recover 10\u201315% of revenue left on the table',
          'Re-engagement campaigns that revive cold subscribers before you have to purge them',
          'Daily broadcast emails that build audience relationships and drive consistent daily revenue',
        ],
      },
      {
        heading: 'AI-Powered Research. Human-Crafted Emails.',
        content:
          'My AI-enhanced process analyzes your existing email metrics, mines competitor sequences, and tests subject line angles \u2014 all before I write the first email. You get deeper audience insight and faster iteration. But here is what AI cannot do: it cannot write an email that feels like it was written by a real person to a real person. It cannot build the kind of voice and personality that makes someone look forward to your emails instead of ignoring them. That comes from 40+ years of writing direct-response copy that people actually read. AI gives me speed and data. Experience gives me voice. You get both.',
      },
    ],
    caseStudies: [
      {
        name: 'Chatterkick',
        category: 'SaaS Email Sequence',
        metric: '22% Trial-to-Paid Lift',
        detail: 'Behavior-triggered onboarding sequence for SaaS platform.',
      },
      {
        name: 'Supplement Launch',
        category: 'Launch Email Sequence',
        metric: '300% ROAS',
        detail: 'Full launch sequence supporting VSL funnel. Cold traffic.',
      },
      {
        name: 'Info Product Launch',
        category: 'Launch Sequence',
        metric: 'Millions in Revenue',
        detail: 'Multi-week email sequence for digital product launch.',
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
    testimonialIds: ['22', '4', '2', '6'],
    portfolioItems: [
      { title: 'Product Launch Email Sequence', category: 'Email' },
      { title: 'Abandon Cart Recovery Emails', category: 'Email' },
      { title: 'Daily Broadcast Series', category: 'Email' },
    ],
    midCta: {
      headline: 'Ready for email sequences that actually drive revenue?',
      subtext:
        'Book a free strategy call. I\u2019ll audit your current email performance and tell you exactly where the revenue is hiding.',
    },
    faqs: [
      {
        question: 'What types of email sequences do you write?',
        answer:
          'Launch sequences, welcome and nurture sequences, abandon cart flows, re-engagement campaigns, daily and weekly broadcasts, automated sales sequences, onboarding sequences (like the Chatterkick sequence that delivered a 22% trial-to-paid lift), and post-purchase follow-up series. Each type requires a different strategic approach, and I tailor tone, frequency, and persuasion intensity to match your audience and goals.',
      },
      {
        question: 'How many emails are in a typical sequence?',
        answer:
          'It depends on the sequence type and goal. Launch sequences typically run 7\u201315 emails. Welcome and nurture sequences are 5\u201310. Abandon cart sequences are 3\u20135. Onboarding sequences vary based on product complexity. I recommend the optimal number based on your specific funnel and revenue goals \u2014 every email must earn its place in the sequence.',
      },
      {
        question: 'Do you write email copy for specific platforms?',
        answer:
          'I write email copy that works across all major platforms \u2014 Klaviyo, ActiveCampaign, ConvertKit, Mailchimp, Drip, Ontraport, and others. The persuasion principles are universal. I can also provide platform-specific formatting and automation logic notes if your team needs them.',
      },
      {
        question: 'How do you measure email copywriting success?',
        answer:
          'The metrics that matter are open rates, click-through rates, conversion rates, and revenue per email. But the metric I care about most is revenue per subscriber \u2014 because that is what tells you whether your email program is actually working as a business asset. I write with all of these in mind and provide testing recommendations to continuously improve performance.',
      },
      {
        question: 'Can you write daily broadcast emails?',
        answer:
          'Yes. Daily broadcasts are one of the most powerful strategies for building audience relationships and driving consistent revenue. The Ben Settle model, the Seinfeld method, soap opera sequences \u2014 I know them all and can adapt the approach to fit your brand voice. I can write a bank of daily emails, create templates and frameworks for your team, or both.',
      },
      {
        question: 'How much does email copywriting cost?',
        answer:
          'Email copywriting is priced per sequence, with the cost depending on the number of emails, strategic complexity, and research required. But here is how I think about it: an email sequence that converts 2% more of your existing list costs you nothing in additional ad spend. It is pure margin. The question is not what the emails cost \u2014 it is how much revenue your current emails are leaving on the table every day.',
      },
    ],
    relatedServices: ['sales-funnel-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Ad Copywriter',
    slug: 'ad-copywriter',
    shortDescription:
      'High-converting ad copy for Facebook, Google, YouTube, and native. Scroll-stopping hooks, compliant angles, tested frameworks.',
    metaTitle: 'Ad Copywriter | Facebook, Google & YouTube Ad Copy',
    metaDescription:
      'Expert ad copywriter for direct-response brands. High-converting Facebook, Google, YouTube, and native ad copy with scroll-stopping hooks and proven frameworks.',
    headline: 'The Ad Copywriter Behind $523M+ in Results',
    subheadline:
      'I write the ads that feed the funnels \u2014 Facebook, Google, YouTube, and native ad copy that has driven 300% ROAS, 4% VSL conversion rates, and eight-figure offers across health, finance, and DTC.',
    heroImage: '/images/services/ad-copywriter.jpg',
    heroImageAlt: 'Social media advertising and marketing for ad copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '300%', label: 'ROAS on Paid Traffic' },
        { value: '40+', label: 'Years Direct Response' },
        { value: '4%', label: 'Peak Cold Traffic Conversion' },
      ],
    },
    credentialBar: {
      heading: 'Ad copy written for',
      items: [
        'Facebook & Meta',
        'Google Search',
        'YouTube Pre-Roll',
        'Native (Taboola/Outbrain)',
        'ClickBank Vendors',
        'DTC Brands',
      ],
    },
    sections: [
      {
        heading: 'Why Most Ads Waste Money Instead of Making It',
        content:
          'You are spending $500, $5,000, maybe $50,000 a day on ads. And for every dollar you put in, you need more than a dollar back \u2014 fast. <strong>Your ad copy is the most expensive writing in your business, measured per word.</strong> Every word either makes money or burns it. Most ad copy fails because the copywriter treats it like creative writing in a small format. It is not. It is the strategic intersection of audience psychology, platform algorithms, compliance rules, and direct-response persuasion \u2014 all compressed into a hook that has less than two seconds to earn attention. The hook must stop the scroll. The body must build enough desire to earn the click. And the entire ad must pre-qualify the traffic so you are not paying for clicks that will never convert downstream. Get any of those wrong and your ad spend is subsidizing Meta\'s revenue, not yours.',
      },
      {
        heading: 'The Ads Behind 300% ROAS and Eight-Figure Funnels',
        content:
          'The ads I write are not standalone pieces of creative. They are the <em>front door</em> to funnels that have generated tens of millions. The ads that drove cold traffic to the <strong>Mobile Profits VSL ($30M, #1 on ClickBank)</strong> had to do one specific job: stop a stranger mid-scroll, create enough curiosity to earn the click, and deliver that click to a VSL where they would watch for 30+ minutes. That requires a completely different approach than brand advertising or boosted posts. My ad copy for supplement offers has driven <strong>300% ROAS</strong> on Facebook. For financial publishers, I have written compliant ads that survived platform review while still out-converting generic "safe" copy by multiples. The pattern across all of them: <strong>deep audience research that finds the angle competitors missed</strong>, hooks built on emotional triggers rather than clever wordplay, and systematic testing that finds winners faster.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. Marc Lindsay, a direct-response media buyer, told me "one of your ads has just taken the lead" on a competitive campaign. These are people who test hundreds of ads and know exactly what converts. They work with me because my ad copy performs.',
      },
      {
        heading: 'Platform-Specific Ad Copywriting',
        content:
          'Every platform has its own algorithm, audience behavior, and compliance rules. An ad that crushes on Facebook will die on YouTube. A Google Search ad that wins clicks needs completely different copy mechanics than a native ad on Taboola. I write for all of them \u2014 and I know the difference.',
        bullets: [
          'Facebook and Meta ads \u2014 hooks engineered for a fast-scrolling feed where you have under 2 seconds to earn attention. Primary text, headlines, and descriptions optimized as a system.',
          'Google Search ads \u2014 precision intent-matching that competes for click-through rate against every other ad bidding on the same keyword.',
          'YouTube pre-roll ads \u2014 scripts that earn the first 5 seconds before the skip button appears, then hold attention long enough to drive the click.',
          'Native ads (Taboola, Outbrain) \u2014 copy that blends with editorial content while still qualifying the click and driving downstream conversion.',
        ],
      },
      {
        heading: 'Compliance-Aware Ad Copy That Still Converts',
        content:
          'If you are running ads in health, supplements, or finance, you know the nightmare: <strong>write compliant copy and conversions tank. Write converting copy and your ad account gets flagged.</strong> Most ad copywriters pick one side. I have spent decades finding the angles that do both \u2014 proven language patterns that satisfy <a href="https://www.ftc.gov/business-guidance/advertising-and-marketing" target="_blank" rel="noopener noreferrer">FTC guidelines</a> and platform reviewers while still driving strong click-through and ROAS. This is not about being timid. It is about being strategic. Compliant copy that nobody clicks is just as useless as aggressive copy that gets your account banned.',
      },
      {
        heading: 'Systematic Testing, Not Guesswork',
        content:
          'I do not write a single ad and hope it works. I deliver <strong>testing suites</strong> \u2014 sets of 5\u201310 variations per campaign with different hooks, angles, emotional triggers, and CTAs, each designed to test a specific hypothesis. This systematic approach means you find winning ads faster, kill losers earlier, and scale campaigns more efficiently. After 40+ years of direct response, I know which variables move the needle and in what order to test them.',
      },
    ],
    caseStudies: [
      {
        name: 'Supplement Ad Campaign',
        category: 'Facebook Ads',
        metric: '300% ROAS',
        detail: 'Cold traffic to VSL funnel. Compliance-approved.',
      },
      {
        name: 'Mobile Profits Ads',
        category: 'Multi-Platform',
        metric: '$30M Funnel Revenue',
        detail: 'Ad copy feeding the #1 ClickBank offer.',
      },
      {
        name: 'Financial Publisher Ads',
        category: 'Native + Facebook',
        metric: 'Multi-Platform Winner',
        detail: 'Compliant ads for regulated financial vertical.',
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
    testimonialIds: ['15', '4', '2', '6'],
    portfolioItems: [
      { title: 'Facebook Ad Suite \u2014 Health Niche', category: 'Ads' },
      { title: 'YouTube Pre-Roll Ads', category: 'Ads' },
      { title: 'Native Ad Campaign', category: 'Ads' },
    ],
    midCta: {
      headline: 'Ready for ads that actually convert?',
      subtext:
        'Book a free strategy call. I\u2019ll look at what you\u2019re running now and tell you where the ROAS is hiding.',
    },
    faqs: [
      {
        question: 'What platforms do you write ads for?',
        answer:
          'Facebook and Meta, Google Search, YouTube pre-roll, TikTok, and native platforms like Taboola and Outbrain. Each platform has different algorithm dynamics, compliance requirements, and audience behavior. I tailor the copy mechanics to each one \u2014 because an ad that crushes on Facebook will often die on native, and vice versa.',
      },
      {
        question: 'How many ad variations do you write per campaign?',
        answer:
          'I typically deliver 5\u201310 variations per campaign, designed as a testing suite with different hooks, angles, and CTAs. This gives you enough variation to run meaningful split tests and find winning combinations faster than testing one ad at a time. Each variation has a clear hypothesis behind it \u2014 not random creative.',
      },
      {
        question: 'Do you write video ad scripts?',
        answer:
          'Yes. I write scripts for YouTube pre-roll, Facebook and Instagram video ads, TikTok ads, and UGC-style video scripts. Video ads require different pacing and hook mechanics than static copy \u2014 you have to earn the first 5 seconds before the skip button appears. That is a fundamentally different skill than writing text ads.',
      },
      {
        question: 'How do you handle ad compliance for health and finance?',
        answer:
          'This is one of my specialities. I have written compliant ad copy for supplement offers, financial publishers, and ClickBank vendors for years \u2014 including ads that drove 300% ROAS while passing platform review. The key is knowing the specific language patterns that satisfy reviewers while preserving persuasive power. I also provide compliance notes flagging any language your legal team should review.',
      },
      {
        question: 'Can you write ad copy that matches my existing funnel?',
        answer:
          'This is the ideal approach. Ad copy should be strategically aligned with your landing page, VSL, or sales page to create a seamless experience from click to conversion. I review your existing funnel assets to ensure the ads pre-qualify traffic and set up the downstream conversion \u2014 not just drive clicks.',
      },
      {
        question: 'How much does ad copywriting cost?',
        answer:
          'Ad copywriting is priced per suite (a set of variations for a specific campaign) or on a retainer for ongoing needs. But here is how I think about it: if your current ads are converting at 1% and new copy gets you to 1.5%, that is a 50% improvement on the same ad spend. At serious daily budgets, that difference pays for the copywriter in the first week.',
      },
    ],
    relatedServices: ['landing-page-copywriter', 'sales-funnel-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Landing Page Copywriter',
    slug: 'landing-page-copywriter',
    shortDescription:
      'High-converting landing pages for lead gen, webinar registration, and direct sales. Every word optimized for action.',
    metaTitle: 'Landing Page Copywriter | High-Converting Landing Pages',
    metaDescription:
      'Expert landing page copywriter with $523M+ in tracked results. High-converting landing pages for lead generation, webinar registration, and direct sales.',
    headline: 'The Landing Page Copywriter Behind $523M+ in Results',
    subheadline:
      'Your landing page is where ad spend becomes revenue or gets wasted. I write landing pages that convert \u2014 with results like 8% on cold traffic, 4.8% front-end conversion, and squeeze pages that crush previous controls.',
    heroImage: '/images/services/landing-page-copywriter.jpg',
    heroImageAlt: 'Web design and landing page on laptop for landing page copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '8%', label: 'Cold Traffic Conversion' },
        { value: '4.8%', label: 'Front-End Conversion' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Landing pages written for',
      items: [
        'Lead Generation Funnels',
        'Webinar Registration',
        'ClickBank Vendors',
        'DTC Brands',
        'SaaS Free Trials',
        'Info Product Launches',
      ],
    },
    sections: [
      {
        heading: 'Why Most Landing Pages Leak Money',
        content:
          'You are paying for every click that hits your landing page. Every single one. And right now, most of those clicks are bouncing \u2014 <strong>landing, scanning the headline, and leaving without taking action.</strong> The standard landing page conversion rate across industries is 2\u20135%. That means 95\u201398% of the traffic you paid for is walking away. Most of the time it is not because the offer is bad. It is because the landing page copy does not do its job. A landing page has exactly one job: convert the visitor into a lead or a buyer. That requires every element \u2014 headline, subhead, body copy, social proof, form fields, and CTA button \u2014 working together as a single conversion system with zero wasted space. One weak headline, one moment of friction, one unanswered objection \u2014 and the click you paid for is gone.',
      },
      {
        heading: 'What a Landing Page That "Crushes the Old One" Looks Like',
        content:
          'When a lead-gen specialist told me my squeeze page copy was <strong>"crushing the old one,"</strong> that was not a lucky rewrite. It was the result of the same process I use on every landing page: <strong>deep research into what the prospect actually needs to hear</strong> to take the next step, then building the page around those triggers with zero filler. The same approach drove an <strong>8% conversion rate on cold traffic</strong> for a DTC funnel, <strong>4.8% front-end conversion</strong> on a biz-op landing page, and a <strong>22% trial-to-paid lift</strong> on a SaaS onboarding page. The pattern is always the same: the headline matches the promise that earned the click, the copy addresses the one objection standing between the visitor and the action, and the CTA makes saying yes feel like the easiest decision they will make all day.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who test landing pages obsessively and know exactly what converts. They work with me because my copy performs \u2014 on landing pages, squeeze pages, and every other page that sits between ad spend and revenue.',
      },
      {
        heading: 'Message Match: The Conversion Killer Nobody Talks About',
        content:
          'Here is why your landing page might be underperforming even with good copy: <strong>the message does not match the traffic source.</strong> Your prospect clicked an ad about a specific problem. They land on a page about something slightly different. The disconnect is subtle \u2014 maybe just a different angle or tone \u2014 but the conversion rate drops off a cliff. I write landing pages that maintain perfect message continuity from traffic source to conversion. That means the headline echoes the promise that earned the click, the language matches what the prospect expects to see, and the entire page feels like the natural next step \u2014 not a new conversation. This is one of the highest-leverage optimizations in landing page copywriting, and most copywriters ignore it completely.',
      },
      {
        heading: 'How I Write a Landing Page That Converts',
        content:
          'Every landing page I write follows a process refined over four decades. Each phase is tied to a specific conversion outcome.',
        bullets: [
          'Phase 1: Traffic source analysis \u2014 I study the ads, emails, or content driving traffic to understand exactly what promise earned the click. The landing page must fulfill that promise instantly.',
          'Phase 2: Single-action architecture \u2014 I strip the page down to one goal, one offer, and one CTA. Every element either advances that conversion or gets cut.',
          'Phase 3: Above-the-fold optimization \u2014 the headline, subhead, and CTA must make the value proposition clear in under 3 seconds. I deliver multiple variations for split testing.',
          'Phase 4: Friction elimination \u2014 form field optimization, microcopy, trust signals, and social proof placement, all designed to remove every reason to hesitate.',
        ],
      },
      {
        heading: 'Landing Pages for Every Conversion Goal',
        content:
          'Different landing page types require different persuasion strategies. A lead-gen squeeze page needs enough desire to overcome form friction while pre-qualifying the lead. A webinar registration page must sell the event, not the product. A free trial page must reduce perceived risk to near zero. I have written high-converting landing pages across all of them.',
        bullets: [
          'Lead generation squeeze pages \u2014 including pages that crushed previous controls',
          'Webinar and event registration pages',
          'Free trial and SaaS signup pages \u2014 including a sequence that drove 22% trial-to-paid lift',
          'Direct-sale landing pages for ClickBank, DTC, and info product offers',
          'Bridge pages between ads and long-form sales funnels',
          'Opt-in pages for email list building and lead magnets',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'DTC Funnel Landing Page',
        category: 'Lead Gen',
        metric: '8% Cold Traffic Conversion',
        detail: 'Landing page feeding a direct-sale funnel.',
      },
      {
        name: 'Biz-Op Landing Page',
        category: 'Direct Sale',
        metric: '4.8% Front-End Conversion',
        detail: 'Hybrid landing page with embedded VSL.',
      },
      {
        name: 'Chatterkick Onboarding',
        category: 'SaaS Trial',
        metric: '22% Trial-to-Paid Lift',
        detail: 'Landing page and onboarding flow for SaaS platform.',
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
      'Every deliverable is engineered to maximize conversion rate \u2014 not just fill a page.',
    testimonialIds: ['16', '4', '2', '6'],
    portfolioItems: [
      { title: 'Lead Gen Landing Page \u2014 SaaS', category: 'Landing Page' },
      { title: 'Webinar Registration Page', category: 'Landing Page' },
      { title: 'Free Trial Signup Page', category: 'Landing Page' },
    ],
    midCta: {
      headline: 'Ready for a landing page that actually converts?',
      subtext:
        'Book a free strategy call. I\u2019ll tell you exactly where your current page is leaking conversions \u2014 and how to fix it.',
    },
    faqs: [
      {
        question: 'What is the difference between a landing page and a sales page?',
        answer:
          'A landing page is typically shorter and focused on a single conversion action \u2014 lead capture, webinar registration, or free trial signup. A sales page is longer and designed to take someone through the entire buying decision in one visit. Both require direct-response skills, but landing pages demand tighter copy, faster value communication, and ruthless elimination of friction. I write both.',
      },
      {
        question: 'What makes a landing page convert well?',
        answer:
          'Message match with the traffic source, a headline that communicates the value proposition in under 3 seconds, focused copy that addresses a single offer, strong social proof, and a CTA with minimal friction. But the biggest factor most people miss is what I call the "promise chain" \u2014 the landing page must instantly fulfill the promise that earned the click. Break that chain and conversions collapse.',
      },
      {
        question: 'Do you design landing pages or just write the copy?',
        answer:
          'I focus on the copy, which is the primary driver of landing page conversion rates. But I deliver above-the-fold wireframes, layout recommendations, and design notes so your designer or developer builds the page in a way that supports the copy strategy. Copy and design must work together \u2014 my deliverables ensure they do.',
      },
      {
        question: 'How important is the headline on a landing page?',
        answer:
          'The headline determines whether a visitor stays or bounces in the first 2\u20133 seconds. On paid traffic, every bounce is money lost. That is why I deliver multiple headline variations for testing \u2014 even a small headline improvement can dramatically increase your conversion rate and cut your effective cost per lead or sale.',
      },
      {
        question: 'Can you write landing pages for paid traffic campaigns?',
        answer:
          'This is one of my specialities. Landing pages for paid traffic must convert efficiently because every non-converting visitor costs you money. I study your ad angles and audience targeting to ensure the landing page copy creates a seamless experience from click to conversion \u2014 not a disconnect that wastes ad spend.',
      },
      {
        question: 'How much does landing page copywriting cost?',
        answer:
          'Landing page copywriting is project-based, and pricing depends on complexity, research scope, and deliverables. But here is how I think about it: if your landing page converts at 3% instead of 2%, that is a 50% improvement on the same traffic. At serious daily ad budgets, that difference pays for the copywriter in the first week and keeps paying every day after.',
      },
    ],
    relatedServices: ['ad-copywriter', 'sales-page-copywriter'],
    relatedVerticals: ['saas-copywriter', 'ecommerce-dtc-copywriter'],
  },
  {
    title: 'Sales Funnel Copywriter',
    slug: 'sales-funnel-copywriter',
    shortDescription:
      'End-to-end funnel copy — from ad to landing page to sales page to upsell. Every step optimized for maximum AOV.',
    metaTitle: 'Sales Funnel Copywriter | End-to-End Funnel Copy',
    metaDescription:
      'Expert sales funnel copywriter with $523M+ in tracked results. End-to-end funnel copy from ad to upsell, optimized for maximum AOV and customer lifetime value.',
    headline: 'The Sales Funnel Copywriter Behind $523M+ in Results',
    subheadline:
      'I write every page in your funnel \u2014 ads, landing pages, VSLs, sales pages, upsells, downsells, and email sequences \u2014 as a single persuasion system. The result: funnels that have generated $30M, $40M, and $27M for individual offers.',
    heroImage: '/images/services/sales-funnel-copywriter.jpg',
    heroImageAlt: 'Marketing funnel and conversion strategy for sales funnel copywriting',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '$30M+', label: 'Single Funnel Revenue' },
        { value: '4%', label: 'Peak Funnel Conversion' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Complete funnels written for',
      items: [
        'ClickBank #1 Offers',
        'Copy Accelerator (as Copy Chief)',
        'DTC Brands',
        'Supplement Marketers',
        'Financial Publishers',
        'Info Product Launches',
      ],
    },
    sections: [
      {
        heading: 'Why Most Funnels Leak Revenue at Every Step',
        content:
          'Here is how most funnels get built: one copywriter writes the ads. Another writes the landing page. A third writes the sales page. Nobody writes the upsells with any strategic thought at all. And the email follow-up? That is whoever had time. <strong>The result is a funnel full of disconnects that leak revenue at every transition.</strong> The ad promises one thing, the landing page says something slightly different, the sales page shifts tone again, and the upsells feel like they were bolted on as an afterthought. Each disconnect is a conversion drop. Multiply that across 5\u20138 pages and you are leaving 30\u201350% of your potential revenue on the table. A sales funnel is a system. The copy at every step must work together as a single persuasion narrative. That requires one strategic mind writing every page \u2014 not a committee of freelancers who have never spoken to each other.',
      },
      {
        heading: 'What a $30M Funnel Looks Like From the Inside',
        content:
          'The <strong>Mobile Profits</strong> funnel did not generate <strong>$30 million</strong> because any single page was brilliant. It generated $30 million because every page in the funnel was engineered as part of one system. The ads pre-qualified traffic with the right hook. The VSL converted cold prospects at up to <strong>4%</strong>. The upsell sequence increased AOV without eroding trust. And the email follow-up captured the prospects who were not ready to buy on the first visit. That is what end-to-end sales funnel copywriting looks like: <strong>every page building on the emotional momentum of the previous one</strong>, every transition seamless, every upsell feeling like the natural next step. The same systems approach drove a <strong>$40M supplement funnel</strong> (Gluco 6), a <strong>$27M financial funnel</strong>, and a biz-op funnel converting at <strong>4.8% on the front end</strong>.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who build funnels for a living and know exactly what separates a funnel that scales from one that stalls. They work with me because I think in systems \u2014 not just pages.',
      },
      {
        heading: 'How I Architect a Funnel That Maximizes Every Click',
        content:
          'Before I write a single word, I map the complete customer journey from first touch to final purchase. Every decision in the funnel architecture is tied to a specific revenue outcome.',
        bullets: [
          'Funnel strategy \u2014 I determine the optimal structure for your offer: how many upsells, where to place order bumps, whether you need a VSL or TSL on the front end, and how the email sequence integrates.',
          'Persuasion arc \u2014 I plan the emotional narrative that unfolds across all pages. Each step builds on the momentum of the previous one so the prospect never feels a disconnect.',
          'AOV engineering \u2014 I design upsells and downsells that feel like natural extensions of the original purchase, not random product pitches. This approach typically increases AOV by 30\u2013100% without increasing refund rates.',
          'Conversion optimization \u2014 I deliver split test variations for every high-leverage page, with a testing roadmap that tells you what to test first and why.',
        ],
      },
      {
        heading: 'The AOV Multiplier Most Funnels Miss',
        content:
          'The front-end sale gets all the attention. But <strong>the real money in any funnel is behind the buy button</strong> \u2014 the upsells, downsells, and order bumps that turn a $47 customer into a $150 customer. Most businesses treat post-purchase pages as an afterthought. I treat them as the most profitable copy in the entire funnel. The psychology is specific: the buyer has already committed, their wallet is open, and their brain is primed to say yes again \u2014 <em>if</em> the next offer feels like a logical extension of what they just bought. I engineer every post-purchase step to leverage that psychology, referencing the product they just bought, reinforcing their decision, and presenting the upgrade as the obvious next move.',
      },
      {
        heading: 'Sales Funnel Copywriting for Every Vertical',
        content:
          'Different industries need different funnel structures. A supplement funnel with subscription upsells runs completely differently from a high-ticket coaching funnel with an application step. I have built complete funnels across all of them.',
        bullets: [
          'ClickBank vendors \u2014 affiliate-optimized funnels with high EPC, including the $30M Mobile Profits funnel (#1 on ClickBank)',
          'Health and supplement brands \u2014 compliance-aware copy with subscription-focused upsells, including the $40M Gluco 6 funnel',
          'Financial publishers \u2014 long-form persuasion funnels with regulatory guardrails',
          'E-commerce and DTC brands \u2014 product launch funnels with AOV maximization',
          'Info product businesses \u2014 high-ticket funnels with webinar and application paths',
          'SaaS companies \u2014 trial-to-paid funnels with onboarding sequences',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits',
        category: 'Complete Biz-Op Funnel',
        metric: '$30M Generated',
        detail: 'Up to 4% conversion. #1 ClickBank offer. Full funnel copy.',
      },
      {
        name: 'Gluco 6',
        category: 'Supplement Funnel',
        metric: '$40M Generated',
        detail: 'Complete funnel: VSL, upsells, email sequence.',
      },
      {
        name: 'Biz-Op Hybrid Funnel',
        category: 'Sales Page + VSL',
        metric: '4.8% Front-End',
        detail: 'Full-funnel copy including upsell sequence.',
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
      'Every deliverable is engineered to maximize revenue across the entire funnel \u2014 not just one page.',
    testimonialIds: ['5', '4', '2', '18'],
    portfolioItems: [
      { title: 'Complete Health Supplement Funnel', category: 'Funnel' },
      { title: 'Info Product Launch Funnel', category: 'Funnel' },
      { title: 'E-Commerce DTC Funnel', category: 'Funnel' },
    ],
    midCta: {
      headline: 'Ready for a funnel that maximizes every click?',
      subtext:
        'Book a free strategy call. I\u2019ll audit your current funnel and show you exactly where the revenue is leaking.',
    },
    faqs: [
      {
        question: 'What does a sales funnel copywriter do?',
        answer:
          'I write all the copy that moves a prospect through the buying journey \u2014 from the initial ad to the landing page, sales page or VSL, order form, upsells, downsells, and email follow-up sequences. The key difference from hiring separate copywriters for each page: I design the entire funnel as one persuasion system, so every transition is seamless and every page builds on the momentum of the previous one.',
      },
      {
        question: 'How many pages are in a typical sales funnel?',
        answer:
          'A typical direct-response funnel includes 5\u20138 pages: landing or opt-in page, sales page or VSL, order form, 1\u20133 upsell pages, a downsell page, and a thank-you page. More complex funnels add webinar registration, replay pages, or application pages. I recommend the optimal structure based on your offer, price point, and traffic source.',
      },
      {
        question: 'How long does it take to write a complete funnel?',
        answer:
          'A complete funnel typically takes 4\u20136 weeks from briefing to final deliverables. That includes deep research, funnel architecture planning, writing every page, email sequences, and one revision round. The timeline depends on the number of pages and offer complexity. I never rush the research or architecture phases \u2014 that is where funnel revenue is won or lost.',
      },
      {
        question: 'Can you write funnel copy for ClickFunnels or other platforms?',
        answer:
          'Yes. I write funnel copy that works across ClickFunnels, Kartra, Kajabi, Shopify, and custom-built funnels. The copy is platform-agnostic \u2014 the Mobile Profits funnel that generated $30M would convert regardless of what software rendered it. Great funnel copy is about persuasion architecture, not platform features.',
      },
      {
        question: 'What is the most important page in a sales funnel?',
        answer:
          'The sales page or VSL typically has the biggest impact on front-end conversion. But I have seen funnels where optimizing the upsell sequence had a bigger impact on total revenue than improving the sales page \u2014 because the upsells increased AOV by 50\u2013100%. That is why a funnel copywriter needs to treat every page as a revenue lever, not just the front end.',
      },
      {
        question: 'How much does sales funnel copywriting cost?',
        answer:
          'Funnel copywriting is priced as a complete project, depending on the number of pages, offer complexity, and whether email sequences are included. It is the highest-ROI copywriting investment you can make \u2014 because it touches every revenue lever in your business simultaneously. A funnel that increases front-end conversion by 1% and AOV by 30% on the same traffic changes your entire unit economics.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'email-copywriter', 'upsell-downsell-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'Upsell & Downsell Copywriter',
    slug: 'upsell-downsell-copywriter',
    shortDescription:
      'Post-purchase upsell and downsell copy that maximizes AOV without eroding trust. Turn one sale into three.',
    metaTitle: 'Upsell & Downsell Copywriter | Maximize AOV',
    metaDescription:
      'Expert upsell and downsell copywriter with $523M+ in tracked results. Post-purchase copy that maximizes average order value without eroding customer trust.',
    headline: 'Upsell & Downsell Copywriter',
    subheadline:
      'Post-purchase copy that turns one sale into three.',
    heroImage: '/images/services/upsell-downsell-copywriter.jpg',
    heroImageAlt: 'E-commerce checkout and purchase optimization for upsell copywriting',
    definition: {
      term: 'upsell & downsell copy',
      text: 'Upsell and downsell copy are post-purchase persuasion pages that appear immediately after a customer buys. An upsell offers a complementary or premium product at a higher price; a downsell offers a scaled-back alternative if the upsell is declined. Together, they maximize average order value (AOV) from existing buyers — the most profitable traffic you will ever have.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Upsell & Downsell Copywriter?',
        content:
          'The moment after a customer says yes is the most profitable moment in your entire funnel — and it is the moment most businesses handle the worst. Generic upsell pages with weak copy and disconnected offers leave enormous revenue on the table. A specialist upsell and downsell copywriter understands the unique psychology of the post-purchase moment: the buyer has already committed, their wallet is open, and their brain is wired to say yes again if the next offer feels like a natural, logical extension of what they just bought. That psychology requires a specific approach to copy, offer positioning, and urgency that differs fundamentally from front-end sales copywriting.',
      },
      {
        heading: 'The Easiest Revenue You Will Ever Generate',
        content:
          'The right upsell copy can double or triple your average order value without requiring a single additional ad dollar. Think about what that means for your business: you are paying the same acquisition cost but extracting two to three times more revenue from each customer. I write upsell and downsell sequences that feel like a natural extension of the original offer — not a cash grab. The key is making each upsell genuinely enhance the value of the product the customer just purchased, so saying yes feels like the smart thing to do rather than a pressure tactic.',
      },
      {
        heading: 'The Psychology of Post-Purchase Upselling',
        content:
          'Effective upsell copywriting leverages several psychological principles that are unique to the post-purchase moment. A skilled upsell copywriter harnesses all of these forces to present the upsell as the obvious, logical, and desirable next step — not an interruption in the buying process.',
        bullets: [
          'Commitment and consistency — the buyer has already said yes and wants to remain consistent with that decision',
          'The endowment effect — they already feel ownership of the initial product and want to protect their investment',
          'Momentum — the buying energy is at its peak and declining with every second',
        ],
      },
      {
        heading: 'Upsell and Downsell Sequence Architecture',
        content:
          'The best upsell sequences are not just a series of unrelated offers — they are a strategic escalation designed to maximize revenue while maintaining customer satisfaction. The first upsell is typically the most closely related to the initial purchase, commanding the highest take rate. If declined, the downsell offers a lower-priced alternative or a different angle on the same value. Subsequent upsells may offer complementary products, subscriptions, or premium upgrades. I architect each sequence to maximize total AOV while keeping refund rates low and customer satisfaction high.',
      },
      {
        heading: 'Upsell Copywriting Across Industries',
        content:
          'I have written upsell and downsell sequences for health supplement funnels, financial info products, e-commerce and DTC brands, ClickBank offers, SaaS platforms, and coaching programs. Each industry has different optimal upsell strategies. Supplement funnels often benefit from subscription upsells and multi-bottle bundles. Info products benefit from coaching or community upgrades. SaaS platforms benefit from annual plan upsells and feature tier upgrades. My cross-industry experience means I can recommend and execute the upsell strategy that maximizes revenue in your specific market.',
      },
    ],
    deliverables: [
      {
        title: 'Upsell Page Copy',
        description:
          'Complete copy for 1-3 upsell pages with video script or text sales letter format, urgency elements, and one-click CTA.',
      },
      {
        title: 'Downsell Page Copy',
        description:
          'Alternative offers for customers who decline the upsell, positioned to recover revenue with a lower price or different angle.',
      },
      {
        title: 'Order Bump Copy',
        description:
          'Compelling order bump copy for the checkout page that adds value and increases AOV with minimal friction.',
      },
      {
        title: 'Upsell Sequence Strategy',
        description:
          'Strategic document outlining the optimal upsell flow, offer sequencing, pricing, and expected take rates.',
      },
      {
        title: 'Thank-You Page Copy',
        description:
          'Post-purchase thank-you page that reinforces the buying decision, reduces refund anxiety, and sets up future engagement.',
      },
      {
        title: 'Revision Round',
        description:
          'One comprehensive revision round across the full upsell/downsell sequence, plus optimization recommendations.',
      },
    ],
    testimonialIds: ['4', '5', '18', '14'],
    portfolioItems: [
      { title: 'Supplement Funnel Upsell Sequence', category: 'Upsell' },
      { title: 'Info Product Upsell Chain', category: 'Upsell' },
      { title: 'E-Commerce Order Bump + Upsell', category: 'Upsell' },
    ],
    faqs: [
      {
        question: 'How much can upsells increase AOV?',
        answer:
          'Well-crafted upsell sequences typically increase average order value by 30 to 100 percent. In some niches, I have seen upsell sequences triple the initial purchase value. The key is making each upsell feel like a logical and desirable next step rather than a hard sell, and pricing the upsells relative to the initial purchase in a way that feels proportional.',
      },
      {
        question: 'What is the difference between an upsell and a downsell?',
        answer:
          'An upsell is a higher-value offer presented after the initial purchase — such as a premium version, bundle, or complementary product. A downsell is a lower-priced alternative offered when the customer declines the upsell. Downsells recover revenue from customers who wanted more value but were not ready for the upsell price point.',
      },
      {
        question: 'What is an order bump?',
        answer:
          'An order bump is a small add-on offer presented directly on the checkout page, typically with a checkbox. Because the customer is already in the process of entering payment information, order bumps have very high take rates (often 20-40 percent) and can significantly increase AOV with minimal friction. I write order bump copy that positions the add-on as an irresistible complement to the main purchase.',
      },
      {
        question: 'How many upsells should a funnel have?',
        answer:
          'Most funnels perform best with 1-3 upsell offers plus 1-2 downsells. Too few and you leave money on the table. Too many and you risk annoying customers and increasing refund rates. The optimal number depends on your market, offer complexity, and price points. I recommend the sequence structure based on your specific business goals.',
      },
      {
        question: 'Do upsells increase refund rates?',
        answer:
          'Poorly executed upsells can increase refund rates, but well-crafted upsell sequences typically have no negative impact on refunds. The key is ensuring each upsell genuinely enhances the value of the original purchase and is presented in a way that feels helpful rather than pushy. My approach prioritizes long-term customer satisfaction alongside short-term revenue maximization.',
      },
      {
        question: 'How much does upsell copywriting cost?',
        answer:
          'Upsell and downsell copywriting is typically priced per sequence, with the cost depending on the number of upsell and downsell pages, whether order bumps and thank-you pages are included, and the complexity of the offers. Given that upsell copy directly increases revenue from existing traffic, it tends to deliver the fastest ROI of any copywriting investment.',
      },
    ],
    relatedServices: ['sales-funnel-copywriter', 'email-copywriter'],
    relatedVerticals: ['clickbank-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'AI Copywriting Consultant',
    slug: 'ai-copywriting-consultant',
    shortDescription:
      'Strategic AI copywriting consulting for teams and businesses. Workflow design, prompt engineering, and quality control — so your team gets AI speed without losing human craft.',
    metaTitle: 'AI Copywriting Consultant | AI-Powered Copy Strategy',
    metaDescription:
      'Hire an AI copywriting consultant with 30+ years of direct-response experience. Rob Palmer helps teams integrate AI into their copywriting workflow without sacrificing quality or conversions.',
    headline: 'AI Copywriting Consultant',
    subheadline:
      'Get AI speed without losing human craft. Strategic consulting for teams who want to use AI right.',
    heroImage: '/images/services/ai-copywriting-consultant.jpg',
    heroImageAlt: 'Artificial intelligence and technology for AI copywriting consulting',
    definition: {
      term: 'AI copywriting consulting',
      text: 'AI copywriting consulting is a strategic service that helps businesses integrate artificial intelligence tools into their copywriting and marketing workflows. It combines human direct-response expertise with AI capabilities — research, variation generation, competitive analysis, and workflow automation — to produce better copy faster without sacrificing persuasion quality.',
    },
    sections: [
      {
        heading: 'Why Hire an AI Copywriting Consultant?',
        content:
          'Everyone has access to <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>, and a growing army of AI writing tools. Almost no one is using them to produce copy that actually converts. Most teams are generating mediocre first drafts, publishing them with minimal editing, and wondering why their conversion rates are dropping. The problem is not the technology — it is the strategy. AI is a force multiplier, but if you multiply zero direct-response skill by ten, you still get zero. An AI copywriting consultant bridges that gap: bringing the direct-response expertise that tells the AI what to write, and the quality control processes that ensure the output actually drives conversions.',
      },
      {
        heading: 'Most Teams Are Using AI Wrong',
        content:
          'The most common mistake I see is teams using AI as a replacement for copywriting skill rather than an amplifier of it. They prompt ChatGPT with vague instructions, accept the first output, make surface-level edits, and publish. The result is copy that reads smoothly but lacks the persuasion architecture, emotional resonance, and strategic specificity that drives conversions. AI-generated copy tends to be generic, wordy, and structurally predictable — all traits that kill conversion rates. An AI copywriting consultant teaches your team to use AI as a research tool, an ideation accelerator, and a first-draft generator — while keeping the strategic thinking and persuasion craft firmly in human hands.',
      },
      {
        heading: 'How I Help Your Team',
        content:
          'I work with your copywriting team to build AI-assisted workflows that actually improve output quality — not just quantity. The result: your team produces better copy, faster, with measurable improvements in conversion metrics.',
        bullets: [
          'Auditing your current copy process to identify where AI can add genuine value',
          'Designing AI-enhanced workflows tailored to your specific needs and platforms',
          'Developing custom prompt frameworks that produce on-brand, conversion-focused copy',
          'Training your team on execution with hands-on practice sessions',
          'Establishing quality control systems that catch the subtle ways AI degrades persuasion',
        ],
      },
      {
        heading: 'The Competitive Advantage of AI Copywriting',
        content:
          'The teams that figure out AI-assisted copywriting first will have an insurmountable competitive advantage. They will research markets in hours instead of weeks. They will test ten headline variations where competitors test two. They will analyze competitor funnels at scale and identify winning angles before anyone else. They will produce more copy, test more variations, and optimize faster than teams relying on either pure human effort or unguided AI output. I have spent 30+ years mastering direct-response copywriting and the last several years integrating AI into that craft. As an AI copywriting consultant, I can compress your team\'s learning curve from years to weeks — and give you a process that keeps improving as AI tools evolve.',
      },
      {
        heading: 'AI Copywriting for Direct-Response Brands',
        content:
          'My AI copywriting consulting is specifically designed for direct-response brands and teams — not content marketers or brand copywriters. The frameworks I build are optimized for the specific demands of conversion-focused copy: VSLs, sales pages, email sequences, ad copy, and funnel assets. This means the prompt engineering, quality control processes, and workflow design are all calibrated to produce copy that drives measurable actions — clicks, opt-ins, purchases, and revenue — not just impressions and engagement metrics.',
      },
    ],
    deliverables: [
      {
        title: 'Copy Process Audit',
        description:
          'Comprehensive review of your current copywriting workflow, identifying bottlenecks and opportunities for AI integration.',
      },
      {
        title: 'Custom AI Workflow Design',
        description:
          'Tailored AI-assisted workflow for your team, covering research, ideation, drafting, editing, and quality control phases.',
      },
      {
        title: 'Prompt Engineering Framework',
        description:
          'Library of tested prompts and prompt templates customized for your products, markets, and copy types.',
      },
      {
        title: 'Team Training Sessions',
        description:
          'Hands-on training workshops teaching your team to use AI tools effectively while maintaining conversion-focused quality.',
      },
      {
        title: 'Quality Control Playbook',
        description:
          'Checklist and review processes for catching the common ways AI degrades persuasion, clarity, and brand voice.',
      },
      {
        title: 'Ongoing Optimization',
        description:
          'Follow-up consultation to review results, refine workflows, and adapt to new AI tools and capabilities.',
      },
    ],
    testimonialIds: ['2', '7', '19', '22'],
    portfolioItems: [
      { title: 'AI Workflow Design — Marketing Team', category: 'Consulting' },
      { title: 'Prompt Framework — Health Niche', category: 'Consulting' },
    ],
    faqs: [
      {
        question: 'What does an AI copywriting consultation involve?',
        answer:
          'A typical engagement starts with an audit of your current copywriting process and output quality. Then I design a customized AI-assisted workflow, develop prompt frameworks for your specific use cases, train your team on execution, and establish quality control checkpoints. The goal is a repeatable system your team can run independently after the engagement concludes.',
      },
      {
        question: 'Is AI copywriting consulting for teams or individuals?',
        answer:
          'Both. I work with marketing teams at established companies who want to integrate AI into their existing workflow, and with individual entrepreneurs who want to leverage AI to produce better copy without hiring a full-time copywriter. The approach is customized to your specific situation, team size, and goals.',
      },
      {
        question: 'Do you train our team on AI copywriting tools?',
        answer:
          'Yes. Training is a core part of every AI copywriting consulting engagement. I teach your team how to use AI tools effectively for research, ideation, drafting, and editing — while maintaining the direct-response principles that actually drive conversions. This is not a generic AI workshop. It is hands-on training built around your specific products, markets, and copy needs.',
      },
      {
        question: 'How is AI copywriting consulting different from just using ChatGPT?',
        answer:
          'ChatGPT is a general-purpose tool. Without direct-response expertise guiding it, it produces generic copy that reads well but does not convert. My consulting gives your team the strategic frameworks, prompt engineering techniques, and quality control processes to get conversion-focused output from AI tools — the kind of copy that actually moves metrics, not just fills pages.',
      },
      {
        question: 'What AI tools do you work with?',
        answer:
          'I work with all major AI writing tools including ChatGPT, Claude, Gemini, and specialized copywriting AI platforms. The frameworks and processes I build are tool-agnostic — they work regardless of which AI tool you prefer, and they adapt as new tools emerge and existing ones improve.',
      },
      {
        question: 'How much does AI copywriting consulting cost?',
        answer:
          'AI copywriting consulting is priced on a project basis, with the scope depending on team size, complexity of your copy needs, and depth of training required. Options range from a focused workflow audit to a comprehensive multi-week engagement with ongoing optimization support. Pricing is discussed during our initial strategy call.',
      },
    ],
    relatedServices: ['vsl-copywriter', 'email-copywriter'],
    relatedVerticals: ['saas-copywriter', 'info-product-copywriter'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
