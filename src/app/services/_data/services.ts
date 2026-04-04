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
    relatedServices: ['facebook-ads-copywriter', 'landing-page-copywriter'],
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
    headline: 'The Upsell & Downsell Copywriter Behind $523M+ in Results',
    subheadline:
      'The most profitable copy in your funnel is behind the buy button. I write upsell and downsell sequences that increase AOV by 30\u2013100% \u2014 without a single additional ad dollar.',
    heroImage: '/images/services/upsell-downsell-copywriter.jpg',
    heroImageAlt: 'E-commerce checkout and purchase optimization for upsell copywriting',
    heroStats: {
      primary: { value: '30\u2013100%', label: 'Typical AOV Increase' },
      secondary: [
        { value: '$0', label: 'Additional Ad Spend Required' },
        { value: '40+', label: 'Years Direct Response' },
        { value: '$523M+', label: 'Tracked Client Results' },
      ],
    },
    credentialBar: {
      heading: 'Upsell sequences written for',
      items: [
        'ClickBank #1 Offers',
        'Supplement Funnels',
        'DTC Brands',
        'Info Product Launches',
        'SaaS Platforms',
        'Financial Publishers',
      ],
    },
    sections: [
      {
        heading: 'You Have a Converting Front End. Now You Are Leaving Money on the Table.',
        content:
          'Your funnel is working. Traffic is converting. But when you look at your average order value, you know there is more there. <strong>The moment after a customer says yes is the most profitable moment in your entire funnel</strong> \u2014 and it is the moment most businesses handle the worst. Generic upsell pages with disconnected offers and weak copy. Downsells that feel like a guilt trip. Order bumps that nobody clicks. Every one of those is revenue you already earned the right to collect \u2014 because the hardest part is already done. The customer has their wallet open. Their brain is primed to say yes again. All you need is copy that makes the next offer feel like the natural, logical, obvious next step. That is a specific skill \u2014 and it is fundamentally different from front-end sales copywriting.',
      },
      {
        heading: 'What 30\u2013100% More Revenue Looks Like on the Same Traffic',
        content:
          'Think about what a 50% AOV increase means for your business. You are paying the <em>exact same acquisition cost</em> but extracting 50% more revenue from each customer. Your front-end breakeven point drops. Your media buyer can bid more aggressively. Your entire funnel economics shift. The upsell sequences I wrote for funnels like <strong>Mobile Profits ($30M, #1 on ClickBank)</strong> and <strong>Gluco 6 ($40M)</strong> were not afterthoughts \u2014 they were engineered as part of the conversion system from day one. Each upsell referenced the product the customer just bought, reinforced their decision, and presented the upgrade as the obvious next move. The result: AOV increases that made the difference between a profitable funnel and an eight-figure funnel.',
      },
      {
        heading: 'The Post-Purchase Psychology Most Copywriters Miss',
        content:
          'Upsell copy is not just "more selling." It leverages psychological forces that only exist in the post-purchase moment \u2014 and they are decaying with every second. A specialist upsell copywriter knows how to harness all of them before the window closes.',
        bullets: [
          'Commitment and consistency \u2014 the buyer just said yes and their brain wants to stay consistent with that decision. The upsell must feel like a continuation, not a new pitch.',
          'The endowment effect \u2014 they already feel ownership of the initial product. The upsell is positioned as protecting and enhancing that investment.',
          'Buying momentum \u2014 the energy is at its peak the moment after the first purchase and declining every second. The copy must be concise, confident, and friction-free.',
          'Trust transfer \u2014 you just delivered on the front-end promise. That trust carries forward, but only if the upsell feels genuine and not like a bait-and-switch.',
        ],
      },
      {
        heading: 'How I Architect an Upsell Sequence That Maximizes AOV',
        content:
          'The best upsell sequences are not random product offers \u2014 they are a strategic escalation designed to extract maximum revenue while keeping refund rates low and customer satisfaction high.',
        bullets: [
          'Upsell 1 \u2014 the most closely related to the initial purchase, commanding the highest take rate. This is where 60\u201370% of your upsell revenue comes from.',
          'Downsell 1 \u2014 if they decline, a lower-priced alternative or different angle on the same value. This recovers revenue from price-sensitive buyers.',
          'Upsell 2 \u2014 a complementary product, subscription, or premium upgrade. Take rates are lower but still profitable because the traffic is free.',
          'Order bump \u2014 a small add-on on the checkout page with 20\u201340% take rates. Low friction, high incremental revenue.',
          'Thank-you page \u2014 reinforces the buying decision, reduces refund anxiety, and seeds future engagement.',
        ],
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff gave me a public shoutout for knocking it out of the park. These are people who understand that the upsell sequence is where funnel profitability is won or lost. They work with me because I treat post-purchase copy with the same strategic rigor as the front end \u2014 not as an afterthought.',
      },
      {
        heading: 'Upsell Copywriting Across Industries',
        content:
          'Every industry has different optimal upsell strategies. The wrong upsell structure for your market will leave money on the table or, worse, increase refund rates. I have written converting upsell sequences across all of them.',
        bullets: [
          'Supplement funnels \u2014 subscription upsells, multi-bottle bundles, and complementary formula offers',
          'ClickBank and affiliate offers \u2014 high-EPC upsell sequences that keep affiliates promoting your offer',
          'Info products and coaching \u2014 premium tier upgrades, community access, and done-for-you add-ons',
          'E-commerce and DTC \u2014 product bundles, warranty upsells, and VIP subscription tiers',
          'SaaS platforms \u2014 annual plan upgrades, feature tier upsells, and onboarding add-ons',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits',
        category: 'Biz-Op Upsell Sequence',
        metric: '$30M Total Funnel',
        detail: 'Upsell sequence engineered as part of #1 ClickBank offer.',
      },
      {
        name: 'Gluco 6',
        category: 'Supplement Upsells',
        metric: '$40M Total Funnel',
        detail: 'Subscription and bundle upsells for cold traffic funnel.',
      },
      {
        name: 'Supplement Funnel',
        category: 'Post-Purchase Sequence',
        metric: '300% ROAS',
        detail: 'Upsell sequence that shifted funnel from breakeven to profitable.',
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
          'Compelling order bump copy for the checkout page \u2014 typically 20\u201340% take rates with the right positioning.',
      },
      {
        title: 'Upsell Sequence Strategy',
        description:
          'Strategic document outlining optimal upsell flow, offer sequencing, pricing, and expected take rates for your market.',
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
      'Every deliverable is engineered to maximize the revenue you extract from traffic you have already paid for.',
    testimonialIds: ['4', '5', '2', '18'],
    portfolioItems: [
      { title: 'Supplement Funnel Upsell Sequence', category: 'Upsell' },
      { title: 'Info Product Upsell Chain', category: 'Upsell' },
      { title: 'E-Commerce Order Bump + Upsell', category: 'Upsell' },
    ],
    midCta: {
      headline: 'Ready to stop leaving money behind the buy button?',
      subtext:
        'Book a free strategy call. I\u2019ll audit your current upsell sequence and tell you exactly how much AOV you\u2019re leaving on the table.',
    },
    faqs: [
      {
        question: 'How much can upsells increase AOV?',
        answer:
          'Well-crafted upsell sequences typically increase average order value by 30\u2013100%. In some niches, I have seen upsell sequences triple the initial purchase value. The key is making each upsell feel like a logical next step \u2014 not a hard sell \u2014 and pricing relative to the initial purchase in a way that feels proportional and fair.',
      },
      {
        question: 'What is the difference between an upsell and a downsell?',
        answer:
          'An upsell is a higher-value offer presented after the initial purchase \u2014 a premium version, bundle, or complementary product. A downsell is a lower-priced alternative offered when the customer declines the upsell. Downsells recover revenue from buyers who wanted more value but were not ready for the upsell price point. Both should feel like natural extensions of the original purchase.',
      },
      {
        question: 'What is an order bump?',
        answer:
          'An order bump is a small add-on offer on the checkout page, typically with a checkbox. Because the customer is already entering payment information, order bumps see 20\u201340% take rates and can significantly increase AOV with almost zero friction. I write order bump copy that positions the add-on as the obvious complement to the main purchase.',
      },
      {
        question: 'How many upsells should a funnel have?',
        answer:
          'Most funnels perform best with 1\u20133 upsells plus 1\u20132 downsells. Too few and you leave money on the table. Too many and you risk refund spikes and customer fatigue. The optimal number depends on your market, price points, and offer complexity. I recommend the structure based on what I have seen work in your specific vertical.',
      },
      {
        question: 'Do upsells increase refund rates?',
        answer:
          'Bad upsells do. Good upsells do not. The difference is whether the upsell genuinely enhances the value of the original purchase or feels like a cash grab. My approach is to make every upsell something the customer is genuinely glad they bought \u2014 because that protects your refund rate, your affiliate relationships, and your long-term customer value.',
      },
      {
        question: 'How much does upsell copywriting cost?',
        answer:
          'Upsell copywriting is priced per sequence, depending on the number of pages and offer complexity. But here is how I think about it: upsell copy increases revenue from traffic you have already paid for. There is no additional ad spend, no additional acquisition cost. It is the highest-margin copywriting investment in your business \u2014 and the ROI is usually measurable within the first week.',
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
      'Hire an AI copywriting consultant with 40+ years of direct-response experience. Rob Palmer helps teams integrate AI into their copywriting workflow without sacrificing quality or conversions.',
    headline: 'The AI Copywriting Consultant With $523M+ in DR Results',
    subheadline:
      'Your team has AI tools. What they don\u2019t have is 40 years of direct-response pattern recognition to tell those tools what to write. I bridge that gap \u2014 so you get AI speed without losing human craft.',
    heroImage: '/images/services/ai-copywriting-consultant.jpg',
    heroImageAlt: 'Artificial intelligence and technology for AI copywriting consulting',
    heroStats: {
      primary: { value: '40+ Years', label: 'Direct-Response Expertise Powering AI Workflows' },
      secondary: [
        { value: '$523M+', label: 'Tracked Client Results' },
        { value: '200+', label: 'Frameworks in Vault' },
        { value: 'Daily', label: 'AI Tool Usage Since 2023' },
      ],
    },
    credentialBar: {
      heading: 'AI copywriting consulting for',
      items: [
        'Copy Accelerator (as Copy Chief)',
        'Direct-Response Teams',
        'ClickBank Vendors',
        'DTC Brands',
        'Marketing Agencies',
        'Solo Entrepreneurs',
      ],
    },
    sections: [
      {
        heading: 'Your Team Has AI. They Still Can\u2019t Write Copy That Converts.',
        content:
          'Everyone has access to <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>, and a growing army of AI writing tools. Almost no one is using them to produce copy that actually converts. Here is what I see: teams prompt AI with vague instructions, accept the first output, make surface-level edits, and publish. <strong>The result is copy that reads smoothly but sells poorly.</strong> Conversion rates drop. The team blames AI. But the problem is not the technology. AI is a force multiplier \u2014 but if you multiply zero direct-response skill by ten, you still get zero. What your team needs is not a better AI tool. It is <strong>someone who knows what great converting copy looks like</strong> designing the workflows, writing the prompts, and building the quality control systems that turn AI from a content generator into a conversion machine.',
      },
      {
        heading: 'Why I Am Uniquely Positioned to Solve This',
        content:
          'Most AI copywriting consultants are either <em>AI experts who do not understand direct response</em> or <em>copywriters who dabble in AI on the side</em>. I am neither. I have spent <strong>40+ years writing direct-response copy that has generated $523M+ in tracked results</strong> \u2014 VSLs, sales pages, email sequences, funnels, and ads across every major vertical. And I have spent the last several years building a <strong>vault of 200+ proven copywriting frameworks</strong> \u2014 Schwartz, Georgi, Kell, Makepeace, Carlton, Halbert \u2014 that I use as the strategic foundation for AI-assisted workflows. When I build an AI copywriting system for your team, the AI is not guessing what good copy looks like. It is guided by the same frameworks behind eight-figure offers. That is the difference between AI-generated content and AI-assisted direct-response copy.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. That role required evaluating, improving, and systematizing copywriting processes across dozens of high-performing copywriters and brands. It is the same skill set that makes AI copywriting consulting work: knowing what good looks like, building systems that produce it consistently, and training teams to maintain quality at scale.',
      },
      {
        heading: 'How I Help Your Team',
        content:
          'I work with your copywriting team to build AI-assisted workflows that actually improve output quality \u2014 not just quantity. Every engagement is customized to your specific copy types, markets, and team capabilities.',
        bullets: [
          'Copy process audit \u2014 I identify where AI can add genuine value and where it is currently degrading your output quality',
          'Custom AI workflow design \u2014 research, ideation, drafting, editing, and quality control phases, all tailored to your specific copy types (VSLs, sales pages, emails, ads)',
          'Prompt engineering frameworks \u2014 not generic prompts, but systems built on proven direct-response frameworks that produce conversion-focused output',
          'Hands-on team training \u2014 practical sessions where your team learns to use AI tools with the strategic thinking that drives conversions',
          'Quality control playbooks \u2014 checklists and review processes that catch the subtle ways AI degrades persuasion, specificity, and emotional resonance',
        ],
      },
      {
        heading: 'The Competitive Advantage Window Is Closing',
        content:
          'The teams that figure out AI-assisted copywriting first will have an insurmountable advantage. They will research markets in hours instead of weeks. They will test ten headline variations where competitors test two. They will analyze competitor funnels at scale and find winning angles before anyone else. <strong>Right now, most teams are wasting this advantage on generic AI output.</strong> I can compress your team\u2019s learning curve from years to weeks \u2014 and give you a process that keeps improving as AI tools evolve. After 40+ years of direct response and several years of deep AI integration, I know exactly where AI adds leverage and where it creates liability. Your team gets the benefit of both.',
      },
      {
        heading: 'AI Copywriting for Direct-Response Brands',
        content:
          'My AI copywriting consulting is specifically designed for direct-response brands and teams \u2014 not content marketers or brand copywriters. The frameworks I build are optimized for copy that drives measurable actions: clicks, opt-ins, purchases, and revenue.',
        bullets: [
          'VSL and sales page workflows \u2014 AI-assisted research, mechanism development, and hook generation guided by proven persuasion frameworks',
          'Email sequence systems \u2014 AI-powered audience segmentation, subject line testing, and sequence architecture',
          'Ad copy production \u2014 systematic hook generation, angle testing, and compliance-aware variation at scale',
          'Funnel optimization \u2014 AI-assisted competitor analysis, conversion diagnostics, and split test planning',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Framework Vault',
        category: 'AI Knowledge Base',
        metric: '200+ Frameworks',
        detail: 'Schwartz, Georgi, Kell, Makepeace, Carlton, Halbert \u2014 systematized for AI workflows.',
      },
      {
        name: 'Copy Accelerator',
        category: 'Copy Chief Role',
        metric: 'Hired by Stefan Georgi',
        detail: 'Systematizing copywriting quality across dozens of brands.',
      },
      {
        name: 'AI-Enhanced Funnels',
        category: 'Client Results',
        metric: '$523M+ Tracked',
        detail: 'AI research powering the same frameworks behind eight-figure results.',
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
    testimonialIds: ['2', '4', '6', '7'],
    portfolioItems: [
      { title: 'AI Workflow Design \u2014 Marketing Team', category: 'Consulting' },
      { title: 'Prompt Framework \u2014 Health Niche', category: 'Consulting' },
    ],
    midCta: {
      headline: 'Ready to make AI actually work for your copy team?',
      subtext:
        'Book a free strategy call. I\u2019ll tell you exactly where AI is helping your output and where it\u2019s quietly making it worse.',
    },
    faqs: [
      {
        question: 'What does an AI copywriting consultation involve?',
        answer:
          'It starts with an audit of your current copywriting process and output quality. Then I design a customized AI-assisted workflow, develop prompt frameworks for your specific use cases, train your team on execution, and establish quality control checkpoints. The goal is a repeatable system your team runs independently after the engagement concludes \u2014 not a dependency on me.',
      },
      {
        question: 'Is AI copywriting consulting for teams or individuals?',
        answer:
          'Both. I work with marketing teams at established companies who want to integrate AI into their workflow, and with individual entrepreneurs who want to leverage AI without hiring a full-time copywriter. The approach is customized to your situation. A solo founder gets a different system than a 10-person copy team.',
      },
      {
        question: 'Do you train our team on AI copywriting tools?',
        answer:
          'Yes \u2014 and this is not a generic AI workshop. I teach your team to use AI tools for research, ideation, drafting, and editing while maintaining the direct-response principles that drive conversions. Training is hands-on, built around your specific products and markets, and includes the prompt frameworks and quality control systems we design together.',
      },
      {
        question: 'How is AI copywriting consulting different from just using ChatGPT?',
        answer:
          'ChatGPT is a general-purpose tool. Without direct-response expertise guiding it, it produces copy that reads well but does not convert. My consulting gives your team the strategic frameworks (built on 200+ proven DR frameworks from my vault), prompt engineering techniques, and quality control processes to get conversion-focused output \u2014 the kind that moves metrics, not just fills pages.',
      },
      {
        question: 'What AI tools do you work with?',
        answer:
          'ChatGPT, Claude, Gemini, and specialized platforms. But the tool matters less than the system around it. The workflows and prompt frameworks I build are tool-agnostic \u2014 they work regardless of which AI you prefer, and they adapt as tools evolve. I have been using AI daily in my own copywriting practice since 2023 and stay current as capabilities advance.',
      },
      {
        question: 'How much does AI copywriting consulting cost?',
        answer:
          'Pricing is project-based, depending on team size, copy complexity, and training depth. Options range from a focused workflow audit to a comprehensive multi-week engagement. But here is how I think about it: a team that produces better-converting copy 3x faster is not an expense \u2014 it is the highest-leverage investment in your marketing operation.',
      },
    ],
    relatedServices: ['ai-marketing-consultant', 'vsl-copywriter'],
    relatedVerticals: ['saas-copywriter', 'info-product-copywriter'],
  },
  {
    title: 'AI Marketing Consultant',
    slug: 'ai-marketing-consultant',
    shortDescription:
      'Strategic AI marketing consulting for brands and teams. Funnel strategy, copy production, audience research, and campaign optimization \u2014 powered by AI, guided by 40+ years of direct-response results.',
    metaTitle: 'AI Marketing Consultant | AI-Powered Marketing Strategy',
    metaDescription:
      'Hire an AI marketing consultant with $523M+ in tracked results. Rob Palmer helps brands use AI to research markets, write converting copy, optimize funnels, and scale campaigns faster.',
    headline: 'The AI Marketing Consultant With $523M+ in Results',
    subheadline:
      'AI tools are everywhere. Results are not. I help brands use AI to research markets, write converting copy, optimize funnels, and scale campaigns \u2014 guided by 40+ years of direct-response expertise that tells AI what actually works.',
    heroImage: '/images/services/ai-marketing-consultant.jpg',
    heroImageAlt: 'AI-powered marketing strategy and campaign optimization',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '40+', label: 'Years Direct Response' },
        { value: '200+', label: 'Marketing Frameworks' },
        { value: 'Daily', label: 'AI Integration Since 2023' },
      ],
    },
    credentialBar: {
      heading: 'AI marketing consulting for',
      items: [
        'DTC Brands',
        'ClickBank Vendors',
        'SaaS Companies',
        'Supplement Marketers',
        'Financial Publishers',
        'Marketing Agencies',
      ],
    },
    sections: [
      {
        heading: 'Every Brand Has AI Tools. Almost None Are Getting Results.',
        content:
          'Your competitors have the same AI tools you do. <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>, Gemini, and a hundred specialized platforms. <strong>The tools are not the bottleneck. The strategy is.</strong> Most brands are using AI to produce more content faster \u2014 more blog posts, more social media, more ad variations \u2014 without any increase in conversions or revenue. They are confusing output with outcomes. AI without direct-response strategy is just a faster way to produce mediocre marketing. What separates brands that are actually scaling with AI from brands that are just generating noise? <strong>The human expertise directing the AI.</strong> Someone who knows what a $30M funnel looks like from the inside, who has studied 200+ proven marketing frameworks, and who understands which AI capabilities create real leverage and which create the illusion of progress.',
      },
      {
        heading: 'What $523M in Results Teaches You About AI Marketing',
        content:
          'I have spent 40+ years in direct-response marketing \u2014 writing the VSLs, sales pages, email sequences, and funnels behind <strong>$523M+ in tracked results</strong>. Offers like <strong>Mobile Profits ($30M, #1 on ClickBank)</strong>, <strong>Gluco 6 ($40M)</strong>, and a <strong>$27M stock investing funnel</strong>. Plus campaigns for Apple, IBM, Citibank, and a 9-year, 35-country campaign for Belron/Safelite. That depth of experience is what makes AI marketing consulting actually work. I am not guessing what good marketing looks like and hoping AI figures it out. I know exactly what converts \u2014 across verticals, across formats, across traffic temperatures \u2014 and I use AI to get there faster. When I build an AI marketing system for your brand, every prompt, workflow, and quality gate is informed by the same frameworks behind eight-figure results.',
      },
      {
        heading: 'The Copy Chief That Top Marketers Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. These are people who run marketing operations at the highest level. They brought me in because I combine strategic depth with the ability to systematize quality at scale \u2014 exactly what AI marketing requires.',
      },
      {
        heading: 'How I Help Your Brand Use AI to Scale',
        content:
          'I work with your marketing team across every channel where AI creates genuine leverage \u2014 not just copy, but the full marketing operation.',
        bullets: [
          'AI-powered market research \u2014 competitor analysis, audience pain mapping, and opportunity identification at a depth and speed that manual research cannot match',
          'Copy production systems \u2014 AI-assisted workflows for VSLs, sales pages, emails, ads, and funnels, guided by proven direct-response frameworks',
          'Campaign optimization \u2014 AI-driven split test planning, conversion diagnostics, and performance analysis across your entire funnel',
          'Audience intelligence \u2014 mining customer reviews, forum posts, and competitor data to find the language, hooks, and angles your market actually responds to',
          'Offer development \u2014 AI-assisted mechanism research, pricing analysis, and competitive positioning',
        ],
      },
      {
        heading: 'AI Marketing Strategy for Every Channel',
        content:
          'AI creates leverage differently depending on the channel. A one-size-fits-all approach wastes the technology. I build channel-specific AI strategies calibrated to where AI adds the most value in each context.',
        bullets: [
          'Paid advertising \u2014 systematic hook generation, angle testing at scale, and compliance-aware ad variation for Facebook, Google, YouTube, and native',
          'Email marketing \u2014 AI-powered segmentation, subject line optimization, sequence architecture, and send-time analysis',
          'Sales funnels \u2014 AI-assisted funnel mapping, conversion bottleneck diagnosis, and upsell sequence optimization',
          'Content marketing \u2014 AI-accelerated research and ideation with human editorial quality control',
          'Landing pages and sales pages \u2014 AI-driven headline testing, message-match analysis, and conversion rate optimization',
        ],
      },
      {
        heading: 'The Competitive Window Is Closing',
        content:
          'Right now, most brands are wasting AI on generic content production. The ones that figure out how to use AI for <em>strategic marketing</em> \u2014 research, optimization, and decision-making, not just writing \u2014 will have an advantage that compounds every month. I can compress your team\u2019s learning curve from years to weeks and give you systems that keep improving as AI capabilities evolve. The question is not whether to use AI in your marketing. It is whether you will figure it out before your competitors do.',
      },
    ],
    caseStudies: [
      {
        name: 'Mobile Profits',
        category: 'AI-Enhanced Funnel',
        metric: '$30M Generated',
        detail: 'AI research powering #1 ClickBank offer. Full funnel.',
      },
      {
        name: 'Gluco 6',
        category: 'Supplement Marketing',
        metric: '$40M Generated',
        detail: 'AI-assisted audience research and funnel optimization.',
      },
      {
        name: 'Belron / Safelite',
        category: 'Enterprise Campaign',
        metric: '$523M in Sales',
        detail: '9-year, 35-country campaign. DR fundamentals that AI now accelerates.',
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
    testimonialIds: ['2', '4', '1', '6'],
    portfolioItems: [
      { title: 'AI Marketing Strategy \u2014 DTC Brand', category: 'Consulting' },
      { title: 'AI Funnel Optimization \u2014 Supplement', category: 'Consulting' },
    ],
    midCta: {
      headline: 'Ready to make AI actually work for your marketing?',
      subtext:
        'Book a free strategy call. I\u2019ll audit your current AI usage and show you where the real leverage is \u2014 and where you\u2019re wasting time.',
    },
    faqs: [
      {
        question: 'What does an AI marketing consultant do?',
        answer:
          'I help brands use AI strategically across their entire marketing operation \u2014 not just for writing copy, but for market research, competitor analysis, campaign optimization, audience intelligence, and funnel strategy. The goal is to make AI a genuine competitive advantage, not just a content production tool. Every system I build is grounded in the direct-response fundamentals behind $523M+ in tracked results.',
      },
      {
        question: 'How is AI marketing consulting different from AI copywriting consulting?',
        answer:
          'AI copywriting consulting focuses specifically on copy production workflows \u2014 prompts, drafting, editing, and quality control for written assets. AI marketing consulting is broader: it covers the full marketing operation including research, strategy, campaign optimization, audience analysis, and offer development, in addition to copy production. If you need help across your entire marketing stack, this is the service.',
      },
      {
        question: 'Is this for big teams or can solo founders benefit?',
        answer:
          'Both. I work with marketing teams at established companies who need AI integrated into their workflows, and with founders who want to leverage AI to compete with larger teams. A solo founder running a DTC brand gets a different system than a 15-person marketing department \u2014 but both get the same depth of strategic thinking.',
      },
      {
        question: 'What AI tools do you work with?',
        answer:
          'ChatGPT, Claude, Gemini, and specialized marketing AI platforms. But the tool matters far less than the strategy around it. The systems I build are tool-agnostic and adapt as capabilities evolve. I have been integrating AI into my own marketing practice daily since 2023 and stay current with every major release.',
      },
      {
        question: 'What industries do you work with?',
        answer:
          'DTC and e-commerce brands, ClickBank vendors, supplement marketers, financial publishers, SaaS companies, info product businesses, and marketing agencies. My cross-industry experience means I bring proven AI marketing frameworks to your vertical \u2014 including the same approaches behind $30M, $40M, and $27M individual offers.',
      },
      {
        question: 'How much does AI marketing consulting cost?',
        answer:
          'Pricing is project-based, depending on scope, team size, and how many channels we cover. Options range from a focused marketing audit to a comprehensive multi-month engagement. But here is how I think about it: a brand that uses AI to research faster, test more, and optimize better is not adding an expense \u2014 it is gaining a compounding advantage over every competitor still doing things manually.',
      },
    ],
    relatedServices: ['ai-copywriting-consultant', 'sales-funnel-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'saas-copywriter'],
  },
  {
    title: 'Facebook Ads Copywriter',
    slug: 'facebook-ads-copywriter',
    shortDescription:
      'High-converting Facebook ad copy, Instagram ad copy, and Meta ad creative that stops the scroll and drives profitable ROAS. From a 40-year DR veteran.',
    metaTitle: 'Facebook Ads Copywriter | Meta & Instagram Ad Copy',
    metaDescription:
      'Hire a Facebook ads copywriter with $523M+ in tracked results. High-converting Facebook, Instagram, and Meta ad copy with scroll-stopping hooks, compliant angles, and proven 300% ROAS.',
    headline: 'The Facebook Ads Copywriter Behind $523M+ in Results',
    subheadline:
      'I write Facebook ads, Instagram ads, and Meta ad copy that has driven 300% ROAS, fed $30M+ funnels, and scaled offers across health, finance, and DTC \u2014 all while staying compliant.',
    heroImage: '/images/services/facebook-ads-copywriter.jpg',
    heroImageAlt: 'Social media apps including Facebook and Instagram for ad copywriting',
    heroStats: {
      primary: { value: '300%', label: 'ROAS on Facebook Ads' },
      secondary: [
        { value: '$30M+', label: 'Single Funnel Fed by FB Ads' },
        { value: '40+', label: 'Years Direct Response' },
        { value: '$523M+', label: 'Tracked Client Results' },
      ],
    },
    credentialBar: {
      heading: 'Facebook & Meta ads written for',
      items: [
        'ClickBank #1 Offers',
        'DTC Brands',
        'Supplement Marketers',
        'Info Product Launches',
        'Financial Publishers',
        'SaaS Companies',
      ],
    },
    sections: [
      {
        heading: 'Your Facebook Ads Are Burning Money. Here Is Why.',
        content:
          'You are spending $500, $5,000, maybe $50,000 a day on Facebook ads. And for every dollar you put in, you need more than a dollar back \u2014 fast. But your CTR is flat, your CPA is climbing, and your media buyer keeps asking for "more creative." <strong>The problem is not your targeting. It is not your budget. It is your ad copy.</strong> Facebook ad copy has less than two seconds to earn attention in a feed where your prospect scrolls past hundreds of posts a day. The hook must stop the scroll. The body must build enough desire to earn the click. And the entire ad must pre-qualify the traffic so you are not paying for clicks that bounce off your landing page. Most Facebook ads copywriters write clever copy that gets likes but not conversions. There is a fundamental difference between copy that is interesting and copy that is persuasive. After 40+ years writing direct response, I know exactly where that line is.',
      },
      {
        heading: 'What 300% ROAS on Facebook Looks Like',
        content:
          'The Facebook ads I wrote for a supplement offer delivered <strong>300% ROAS on cold traffic</strong>. The ads that fed the <strong>Mobile Profits funnel ($30M, #1 on ClickBank)</strong> had to do one specific job: stop a stranger mid-scroll, create enough curiosity to earn the click, and deliver that click to a VSL where they would watch for 30+ minutes. That is a fundamentally different skill than writing brand awareness ads or boosted posts. My Facebook ad copy works because it is built on the same direct-response principles that have driven $523M+ in tracked results \u2014 deep audience research, emotional triggers rooted in real pain and desire, and hooks engineered from the exact language your prospects use to describe their problem. The same approach applies to Instagram ads and every other Meta placement.',
      },
      {
        heading: 'The Copy Chief That Top Marketers Hire',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. Justin Goff, one of the sharpest direct marketers in the business, gave me a public shoutout for stepping up and knocking it out of the park. Marc Lindsay, a direct-response media buyer, told me "one of your ads has just taken the lead" on a competitive campaign. These are people who test hundreds of Facebook ads and know exactly what converts. They work with me because my ad copy performs.',
      },
      {
        heading: 'Facebook Ads, Instagram Ads, and Every Meta Placement',
        content:
          'Facebook and Instagram are different platforms with different user behavior \u2014 but they share the same ad system. I write ad copy optimized for every Meta placement, understanding how copy performs differently across each one.',
        bullets: [
          'Facebook Feed ads \u2014 primary text, headlines, and descriptions optimized as a system. Hooks engineered for the fast-scrolling feed where you have under 2 seconds.',
          'Instagram Feed and Stories ads \u2014 shorter, punchier copy calibrated for a visual-first platform where the image does 70% of the work and the copy must seal the deal.',
          'Facebook and Instagram Reels ads \u2014 script hooks for video creative that earn the first 3 seconds before the swipe.',
          'Audience Network and Messenger placements \u2014 compliant copy that works across Meta\'s extended network.',
        ],
      },
      {
        heading: 'Compliant Facebook Ad Copy That Still Converts',
        content:
          'If you run Facebook ads in health, supplements, or finance, you know the nightmare: <strong>write compliant copy and conversions tank. Write converting copy and your ad account gets flagged or shut down.</strong> I have spent years finding the angles that do both \u2014 proven language patterns that satisfy <a href="https://www.facebook.com/policies/ads/" target="_blank" rel="noopener noreferrer">Meta\u2019s advertising policies</a> and <a href="https://www.ftc.gov/business-guidance/advertising-and-marketing" target="_blank" rel="noopener noreferrer">FTC guidelines</a> while still driving strong ROAS. This is not about being timid. It is about being strategic. Compliant Facebook ad copy that nobody clicks is just as useless as aggressive copy that gets your ad account banned. I find the angles that thread the needle.',
      },
      {
        heading: 'Systematic Testing, Not One-Off Creatives',
        content:
          'I do not write a single Facebook ad and hope it works. I deliver <strong>testing suites</strong> \u2014 sets of 5\u201310 ad variations per campaign with different hooks, emotional angles, and CTAs. Each variation is designed to test a specific hypothesis so you learn something whether it wins or loses.',
        bullets: [
          'Hook testing \u2014 3\u20135 different opening angles targeting different emotional triggers (fear, curiosity, desire, frustration, aspiration)',
          'Angle testing \u2014 the same offer positioned through different lenses (problem-solution, story, social proof, contrarian, direct offer)',
          'Format testing \u2014 variations optimized for static image, video, carousel, and UGC-style creative',
          'Audience-specific copy \u2014 different ad copy for different audience segments, so cold traffic and retargeting get the right message',
        ],
      },
    ],
    caseStudies: [
      {
        name: 'Supplement Campaign',
        category: 'Facebook Ads',
        metric: '300% ROAS',
        detail: 'Cold traffic to VSL funnel. Compliance-approved.',
      },
      {
        name: 'Mobile Profits',
        category: 'Facebook + Multi-Platform',
        metric: '$30M Funnel Revenue',
        detail: 'Facebook ad copy feeding #1 ClickBank offer.',
      },
      {
        name: 'Info Product Launch',
        category: 'Facebook & Instagram Ads',
        metric: '340% ROAS',
        detail: 'Cold traffic Facebook and Instagram ads to sales page.',
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
    testimonialIds: ['15', '4', '2', '6'],
    portfolioItems: [
      { title: 'Facebook Ad Suite \u2014 Health Niche', category: 'Ads' },
      { title: 'Instagram Ad Campaign \u2014 DTC', category: 'Ads' },
      { title: 'Meta Ad Suite \u2014 Info Product', category: 'Ads' },
    ],
    midCta: {
      headline: 'Ready for Facebook ads that actually convert?',
      subtext:
        'Book a free strategy call. I\u2019ll look at what you\u2019re running now and tell you where the ROAS is hiding.',
    },
    faqs: [
      {
        question: 'What is the difference between a Facebook ads copywriter and a general ad copywriter?',
        answer:
          'A Facebook ads copywriter specializes in the specific mechanics of Meta\u2019s ad platform \u2014 the interplay between primary text, headline, and description, how copy performs differently across Facebook Feed, Instagram, Stories, and Reels, and the compliance rules that can get your ad account flagged or shut down. A general ad copywriter may write for Google, YouTube, native, and other platforms. I do both, but this service is specifically focused on Facebook, Instagram, and Meta ad copy.',
      },
      {
        question: 'Do you write Instagram ad copy too?',
        answer:
          'Yes. Facebook and Instagram share the same Meta ad platform, but the user behavior is different. Instagram is more visual-first, Stories and Reels demand shorter and punchier copy, and the audience skews differently. I write ad copy optimized for every Meta placement \u2014 Facebook Feed, Instagram Feed, Stories, Reels, and Audience Network \u2014 because what works on Facebook often needs adjustment for Instagram and vice versa.',
      },
      {
        question: 'How many Facebook ad variations do you write?',
        answer:
          'I typically deliver 5\u201310 ad variations per campaign, designed as a testing suite with different hooks, angles, and CTAs. Each variation tests a specific hypothesis \u2014 not random creative. This gives you enough variation to run meaningful split tests and find winners faster than testing one ad at a time.',
      },
      {
        question: 'How do you handle Facebook ad compliance for health and finance?',
        answer:
          'This is one of my specialities. I have written compliant Facebook and Instagram ad copy for supplement offers, financial publishers, and ClickBank vendors for years \u2014 including ads that drove 300% ROAS while passing Meta\u2019s review. The key is knowing the specific language patterns that satisfy Meta\u2019s ad policies while preserving persuasive power. I also provide compliance notes flagging any language your legal team should review.',
      },
      {
        question: 'Do you write Facebook video ad scripts?',
        answer:
          'Yes. I write scripts for Facebook and Instagram video ads, Reels ads, and UGC-style video creative. Video ads on Meta require different pacing and hook mechanics than static ads \u2014 you have about 3 seconds before the user scrolls or swipes. I write hook options specifically engineered to earn those first seconds.',
      },
      {
        question: 'How much does Facebook ads copywriting cost?',
        answer:
          'Facebook ads copywriting is priced per ad suite (a set of variations for a specific campaign) or on a retainer for ongoing needs. But here is how I think about it: if your current Facebook ads are converting at 1% and new copy gets you to 1.5%, that is a 50% improvement on the same ad spend. At serious daily budgets, that difference pays for the copywriter in the first week.',
      },
    ],
    relatedServices: ['ad-copywriter', 'landing-page-copywriter'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'health-supplement-copywriter'],
  },
  {
    title: 'Conversion Rate Optimization',
    slug: 'conversion-rate-optimization',
    shortDescription:
      'Copy-driven CRO that increases conversions on your existing traffic. Headline testing, funnel diagnostics, and persuasion audits from a 40-year DR veteran with $523M+ in results.',
    metaTitle: 'Conversion Rate Optimization | Copy-Driven CRO Services',
    metaDescription:
      'Conversion rate optimization from a direct-response copywriter with $523M+ in tracked results. Copy audits, headline testing, funnel diagnostics, and persuasion architecture that increases conversions on your existing traffic.',
    headline: 'Conversion Rate Optimization From a $523M+ Copywriter',
    subheadline:
      'Most CRO focuses on button colors and page layouts. I optimize the thing that actually drives conversions: the copy. Headlines, hooks, offers, proof, objection handling, and closes \u2014 tested and refined by a 40-year direct-response veteran.',
    heroImage: '/images/services/conversion-rate-optimization.jpg',
    heroImageAlt: 'Analytics dashboard showing conversion rates and optimization metrics',
    heroStats: {
      primary: { value: '$523M+', label: 'Tracked Client Results' },
      secondary: [
        { value: '8%', label: 'Cold Traffic Conversion' },
        { value: '300%', label: 'ROAS Improvement' },
        { value: '40+', label: 'Years Optimizing Copy' },
      ],
    },
    credentialBar: {
      heading: 'CRO and copy optimization for',
      items: [
        'VSLs & Sales Pages',
        'Landing Pages & Funnels',
        'Facebook & Meta Ads',
        'Email Sequences',
        'ClickBank Vendors',
        'DTC Brands',
      ],
    },
    sections: [
      {
        heading: 'You Are Paying for Traffic That Is Not Converting. The Fix Is Not What You Think.',
        content:
          'Your funnel is getting traffic. But the conversion rate is stuck. You have tried changing the button color, moving the CTA above the fold, adding a countdown timer, swapping the hero image. <strong>Nothing moved the needle.</strong> Here is why: those are cosmetic changes to a structural problem. The #1 driver of conversion rate on any page is the <em>copy</em> \u2014 the headline, the hook, the mechanism, the proof, the objection handling, and the close. A headline that speaks to the wrong awareness level will kill conversions no matter how beautiful the page design is. A close that fails to handle the final objection will lose the sale regardless of what color the button is. Copy-driven CRO is the highest-leverage optimization you can make because it addresses the thing your prospect actually reads, believes, and responds to.',
      },
      {
        heading: 'What Copy-Driven CRO Looks Like in Practice',
        content:
          'When a client came to me with a funnel "doing great" at 8% cold traffic conversion, the copy architecture was already solid \u2014 because it was built on deep audience research and proven persuasion frameworks from the start. But most funnels I audit are not starting from that baseline. They have headlines written from guesswork instead of research, mechanism sections that confuse instead of convince, proof sections with generic testimonials instead of specific results, and closes that create doubt instead of resolving it. <strong>Fixing those structural copy problems is where the conversion rate lives.</strong> I have seen headline changes alone lift conversion rates by 30\u201350%. Rewriting a close sequence has doubled take rates on upsell pages. And restructuring a VSL\u2019s first 90 seconds has cut drop-off rates in half. These are not theoretical improvements \u2014 they are the predictable result of applying 40+ years of pattern recognition to copy that was written without it.',
      },
      {
        heading: 'The Copy Chief That Top Copywriters Hire to Optimize',
        content:
          'Stefan Georgi \u2014 the copywriter behind over $1 billion in tracked sales \u2014 <strong>hired me as Copy Chief for Copy Accelerator</strong>. That role was pure CRO: reviewing existing copy, identifying what was underperforming and why, and providing the specific rewrites that moved the metrics. Justin Goff gave me a public shoutout for knocking it out of the park. Caleb O\u2019Dowd celebrated getting "that bump in conversions." These are people who live and die by conversion rates. They brought me in because I can look at a piece of copy \u2014 a VSL, a sales page, an email sequence, an ad \u2014 and see exactly where it is losing the prospect and exactly how to fix it.',
      },
      {
        heading: 'My CRO Process: Diagnose, Prioritize, Test',
        content:
          'I do not guess at what is broken. I diagnose it systematically using the same frameworks behind $523M+ in tracked results, then prioritize fixes by expected impact on conversion rate.',
        bullets: [
          'Copy audit \u2014 I analyze every element of your page or funnel against proven persuasion frameworks: Schwartz awareness levels, PASTOR, the Perry Belcher 21-step sequence, and the specific frameworks that match your offer type.',
          'Conversion diagnostics \u2014 where are prospects dropping off? Is the headline failing to earn the next line? Is the mechanism confusing? Is the close missing an objection? I identify the specific copy elements that are killing conversions.',
          'Prioritized fix list \u2014 not every fix has the same impact. I rank optimization opportunities by expected lift so you test the highest-leverage changes first.',
          'Test-ready rewrites \u2014 I do not just tell you what is wrong. I write the specific copy alternatives you need to run split tests: headlines, hooks, closes, proof sections, and CTAs.',
          'Testing roadmap \u2014 a clear plan for what to test, in what order, with specific hypotheses for each test so you learn something whether it wins or loses.',
        ],
      },
      {
        heading: 'CRO Across Every Funnel Asset',
        content:
          'Conversion rate optimization is not a single-page exercise. Every step in your funnel is a conversion point \u2014 and a potential leak. I optimize copy across all of them.',
        bullets: [
          'VSL and video optimization \u2014 hook testing, retention analysis, close sequence rewrites. Where are viewers dropping off and what copy changes will keep them watching?',
          'Sales page and TSL optimization \u2014 headline testing, proof section restructuring, objection handling, and CTA refinement.',
          'Landing page optimization \u2014 above-the-fold copy, message match with traffic sources, form friction reduction, and headline split testing.',
          'Ad copy optimization \u2014 hook testing, angle rotation, and compliance-aware variation for Facebook, Instagram, and other platforms.',
          'Email sequence optimization \u2014 subject line testing, open rate improvement, click-through optimization, and sequence architecture refinement.',
          'Upsell and AOV optimization \u2014 post-purchase copy rewrites, offer positioning, and downsell sequence testing.',
        ],
      },
      {
        heading: 'AI-Powered CRO Analysis',
        content:
          'I use AI to accelerate every phase of conversion rate optimization \u2014 analyzing competitor pages at scale, mining customer language from thousands of reviews, testing headline variations before spending a dollar on traffic, and identifying patterns across your analytics that manual review would miss. But the strategic judgment that turns analysis into conversion lifts \u2014 knowing <em>which</em> headline to test, <em>why</em> the close is failing, <em>what</em> objection the proof section needs to address \u2014 comes from 40+ years of direct-response experience. AI gives me speed. Experience gives me accuracy. You get both.',
      },
    ],
    caseStudies: [
      {
        name: 'DTC Funnel CRO',
        category: 'Full Funnel Optimization',
        metric: '8% Cold Traffic Conversion',
        detail: 'Copy-driven optimization across landing page and sales funnel.',
      },
      {
        name: 'Supplement Ad CRO',
        category: 'Ad Copy Optimization',
        metric: '300% ROAS',
        detail: 'Hook testing and angle optimization on Facebook ads.',
      },
      {
        name: 'Biz-Op Funnel CRO',
        category: 'Funnel Optimization',
        metric: '4.8% Front-End Conversion',
        detail: 'Hybrid sales page and VSL copy optimization.',
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
      'Every deliverable is designed to increase conversions on your existing traffic \u2014 the highest-ROI improvement you can make.',
    testimonialIds: ['18', '4', '2', '6'],
    portfolioItems: [
      { title: 'Funnel CRO \u2014 Health Supplement', category: 'CRO' },
      { title: 'Landing Page Optimization \u2014 DTC', category: 'CRO' },
      { title: 'VSL Hook Testing \u2014 Biz-Op', category: 'CRO' },
    ],
    midCta: {
      headline: 'Ready to increase conversions on your existing traffic?',
      subtext:
        'Book a free strategy call. I\u2019ll tell you exactly where your copy is losing prospects \u2014 and what to test first.',
    },
    faqs: [
      {
        question: 'What is conversion rate optimization (CRO)?',
        answer:
          'Conversion rate optimization is the process of increasing the percentage of visitors who take a desired action \u2014 buying a product, opting in, clicking through, or completing a form. My approach to CRO focuses on the #1 driver of conversion rate: the copy. Headlines, hooks, proof, objection handling, and closes have more impact on conversions than any design or UX change.',
      },
      {
        question: 'How is copy-driven CRO different from traditional CRO?',
        answer:
          'Traditional CRO often focuses on UX, page layout, button placement, and design tweaks. Those matter, but they are secondary to the copy. A beautifully designed page with a weak headline will underperform an ugly page with a great headline every time. My CRO focuses on the persuasion architecture \u2014 the strategic sequencing of copy elements that moves a prospect from skepticism to action. That is where the biggest conversion lifts live.',
      },
      {
        question: 'What types of pages can you optimize?',
        answer:
          'VSLs, sales pages, TSLs, landing pages, email sequences, Facebook and Instagram ads, upsell pages, order forms, and complete funnels. Every page that has a conversion goal has copy that can be optimized. I audit the full funnel and prioritize the changes that will have the biggest impact on your revenue.',
      },
      {
        question: 'How do you know what to test first?',
        answer:
          'Pattern recognition from 40+ years of direct response. After auditing thousands of pages and funnels, I know where the highest-leverage copy changes are for each page type. Headlines and hooks are almost always the first test because they determine whether anyone reads the rest. After that, closes and objection handling typically have the next biggest impact. I provide a prioritized testing roadmap so you are not wasting time on low-impact changes.',
      },
      {
        question: 'How much can CRO improve my conversion rate?',
        answer:
          'It depends on where you are starting. Pages with untested copy and structural persuasion problems often see 30\u201350% lifts from headline changes alone. Full copy rewrites on underperforming pages can double or triple conversion rates. Even well-optimized pages typically have 10\u201320% upside from systematic testing. The key insight: a 1% conversion rate improvement on the same traffic is pure profit \u2014 no additional ad spend required.',
      },
      {
        question: 'How much does conversion rate optimization cost?',
        answer:
          'CRO is priced on a project basis, depending on the scope of the audit (single page vs. full funnel), the number of test-ready rewrites needed, and whether ongoing optimization support is included. But here is how I think about it: improving your conversion rate by even half a percent on serious traffic pays for the engagement in the first week. CRO is the only marketing investment that makes every other marketing investment work harder.',
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
