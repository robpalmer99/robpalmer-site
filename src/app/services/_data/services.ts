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
    headline: 'VSL Copywriter',
    subheadline:
      'High-converting video sales letters that turn cold traffic into paying customers.',
    heroImage: '/images/services/vsl-copywriter.jpg',
    heroImageAlt: 'Video production and storytelling for VSL copywriting',
    definition: {
      term: 'a VSL (Video Sales Letter)',
      text: 'A video sales letter is a long-form video presentation — typically 15 to 45 minutes — that uses a structured persuasion sequence to sell a product or service. Unlike traditional video ads, a VSL replaces or supplements a written sales page, guiding the viewer through a complete sales argument from hook to close.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist VSL Copywriter?',
        content:
          'A video sales letter is not just a script read over slides — it is a carefully engineered persuasion sequence that must hold a cold prospect\'s attention for 15 to 45 minutes and compel them to buy. That requires a fundamentally different skill set than writing blog posts, brand copy, or even traditional sales pages. A specialist VSL copywriter understands pacing, pattern interrupts, emotional escalation, and the precise moment to transition from story to offer. Most copywriters write VSLs that sound great on paper but die in the first 30 seconds when tested against cold traffic. The difference between a mediocre VSL and a high-converting one is not clever wordplay — it is strategic architecture built on direct-response fundamentals.',
      },
      {
        heading: 'Why Your VSL Is Not Converting',
        content:
          'Most VSLs fail for one of three reasons: weak hooks that do not stop the scroll, middles that lose momentum through unfocused storytelling, or closes that fail to overcome the final objection standing between your prospect and their credit card. The root cause is almost always the same — the VSL copywriter did not do sufficient audience research before writing a single word. You cannot write a VSL that converts cold traffic unless you understand exactly what your prospect fears, desires, and believes about their problem. My VSL copywriting process starts with deep research into your target audience using both traditional methods and AI-powered analysis, and that research informs every word of the final script.',
      },
      {
        heading: 'The Rob Palmer VSL Copywriting Process',
        content:
          'Every VSL I write follows a battle-tested process refined over three decades of direct-response copywriting. The result is a VSL script engineered for conversion, not just completion.',
        bullets: [
          'Phase 1: Deep audience research — mining forums, reviews, competitor funnels, and customer feedback to map your prospect\'s emotional landscape',
          'Phase 2: Strategic architecture — building the persuasion framework that carries the prospect from hook to close',
          'Phase 3: Writing — every sentence crafted to maintain momentum and build desire',
          'Phase 4: Revision — stress-testing every section against the question: would this keep a cold, skeptical prospect watching?',
        ],
      },
      {
        heading: 'VSL Copywriting Across Industries',
        content:
          'Each industry has unique compliance requirements, buyer psychology, and proven persuasion angles. A VSL for a joint health supplement requires a completely different approach than a VSL for a stock trading newsletter or a SaaS onboarding tool. My cross-industry experience means I bring proven frameworks to your niche without the trial-and-error learning curve that costs you time and ad spend.',
        bullets: [
          'Health and supplement brands',
          'Financial publishers',
          'E-commerce and DTC companies',
          'ClickBank vendors',
          'SaaS platforms',
          'Info product businesses',
        ],
      },
      {
        heading: 'AI-Enhanced VSL Research and Development',
        content:
          'I use AI as a force multiplier for VSL copywriting — not a replacement for craft. AI helps me analyze competitor VSL scripts at scale, identify winning hooks and angles across markets, research audience pain points from thousands of data points, and test headline variations before a single dollar of ad spend is committed. But the strategic thinking, emotional intelligence, and persuasion architecture that transforms research into a converting VSL — that comes from three decades of direct-response experience. The combination of AI speed and human craft gives my clients a competitive edge that neither pure AI nor traditional copywriting alone can match.',
      },
    ],
    deliverables: [
      {
        title: 'Full VSL Script',
        description:
          'Complete video sales letter script (typically 3,000-8,000 words) with slide-by-slide notation, timing cues, and production notes.',
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
    testimonialIds: ['21', '25', '12', '4'],
    portfolioItems: [
      { title: 'Supplement VSL — Cold Traffic', category: 'VSL' },
      { title: 'Financial Newsletter VSL', category: 'VSL' },
      { title: 'DTC Product Launch VSL', category: 'VSL' },
    ],
    faqs: [
      {
        question: 'What is a VSL and why do I need a specialist VSL copywriter?',
        answer:
          'A VSL (Video Sales Letter) is a persuasive video presentation designed to sell a product or service directly to cold traffic. Unlike brand videos or explainer content, a VSL follows a structured direct-response format that guides viewers through a complete sales argument — from problem identification through desire-building to close. You need a specialist VSL copywriter because the format requires specific skills in pacing, retention mechanics, and persuasion architecture that general copywriters rarely possess.',
      },
      {
        question: 'How long does it take to write a VSL?',
        answer:
          'A typical VSL copywriting project takes 2-4 weeks from briefing to final draft. This includes deep audience research, competitive analysis, strategic architecture planning, scripting, and one comprehensive revision round. Rush projects can be accommodated based on availability, but the research phase should never be shortcut — it is what separates VSLs that convert from VSLs that waste ad spend.',
      },
      {
        question: 'What industries do you write VSLs for?',
        answer:
          'I write VSLs for health and supplements, financial services, e-commerce and DTC brands, ClickBank offers, SaaS companies, and info product businesses. My cross-industry experience means I bring proven VSL frameworks to your niche while understanding the specific compliance requirements and buyer psychology that drive conversions in your market.',
      },
      {
        question: 'How long should a VSL be?',
        answer:
          'VSL length depends on the complexity and price of your offer. Short-form VSLs (5-15 minutes) work well for lower-priced impulse purchases and lead generation. Long-form VSLs (20-45 minutes) are typically required for higher-priced offers where the prospect needs more persuasion and proof before committing. I recommend the length based on your specific offer and funnel strategy.',
      },
      {
        question: 'Do you use AI to write VSL scripts?',
        answer:
          'I use AI as a research and ideation tool to accelerate the VSL copywriting process — analyzing competitor scripts, mining audience data, and testing hook variations. But every VSL is strategically planned and written by me. AI helps me work faster and test more angles, but the persuasion architecture and emotional resonance that drives conversions comes from 30+ years of direct-response experience.',
      },
      {
        question: 'What is your VSL copywriting pricing?',
        answer:
          'VSL copywriting pricing is project-based and depends on the length of the VSL, complexity of the offer, amount of research required, and whether additional deliverables like hook variations or audience research briefs are included. Pricing is discussed during our initial strategy call. The investment typically delivers multiples of ROI through increased front-end conversions.',
      },
    ],
  },
  {
    title: 'Sales Page Copywriter',
    slug: 'sales-page-copywriter',
    shortDescription:
      'Long-form sales pages that convert browsers into buyers. Proven frameworks, rigorous testing, real results.',
    metaTitle: 'Sales Page Copywriter | High-Converting Sales Copy',
    metaDescription:
      'Expert sales page copywriter with $523M+ in tracked results. Long-form sales pages and landing pages that convert for ClickBank, DTC, and info product brands.',
    headline: 'Sales Page Copywriter',
    subheadline:
      'Long-form sales pages engineered to convert browsers into buyers.',
    heroImage: '/images/services/sales-page-copywriter.jpg',
    heroImageAlt: 'Writing and crafting persuasive sales page copy',
    definition: {
      term: 'a sales page',
      text: 'A sales page is a long-form web page dedicated to a single objective: persuading the reader to buy a product or service. Unlike typical website pages, a sales page follows a structured persuasion sequence — headline, problem, agitation, solution, proof, offer, and close — designed to convert visitors into customers without any other navigation distractions.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Sales Page Copywriter?',
        content:
          'A sales page is the hardest-working piece of copy in your business. It has to take a stranger — often a cold, skeptical stranger who arrived from a paid ad — and persuade them to hand over their money in a single visit. That is a fundamentally different job than writing emails, blog posts, or brand copy. A specialist sales page copywriter understands the persuasion architecture required: the strategic sequencing of headlines, subheads, body copy, social proof, and calls to action that moves a reader through awareness, interest, desire, and action. Without that architecture, you are just publishing words on a page and hoping for the best.',
      },
      {
        heading: 'Sales Pages That Actually Sell',
        content:
          'A great sales page is not just well-written — it is strategically engineered. Every headline, subhead, bullet point, and call to action serves a specific purpose in the persuasion architecture. I build sales pages that move the reader from "who is this?" to "take my money" through a carefully orchestrated sequence. Miss any of these stages and conversions collapse.',
        bullets: [
          'The opening must hook the reader and identify their pain',
          'The middle must build desire through stories, proof, and benefits',
          'The close must make the offer irresistible while overcoming every objection',
        ],
      },
      {
        heading: 'My Sales Page Copywriting Process',
        content:
          'My sales page copywriting process starts with understanding your customer better than they understand themselves. Through AI-powered research and three decades of direct-response intuition, I identify the exact emotional triggers that drive purchase decisions in your market. Then I build a sales page that hits every one of those triggers in the right sequence. I map the customer journey from first touch to purchase, identify every objection that could kill the sale, and systematically address each one through copy, social proof, and offer structure. The result is a sales page that does not just look professional — it converts.',
      },
      {
        heading: 'Long-Form vs. Short-Form Sales Pages',
        content:
          'One of the most common questions I get as a sales page copywriter is whether to go long or short. The answer depends on your offer, your audience, and your traffic temperature. Cold traffic almost always requires long-form sales pages because you need to build trust, establish credibility, and overcome more objections. Warm traffic from your email list can sometimes convert with shorter pages because the relationship already exists. I analyze your specific funnel dynamics and recommend the optimal length — then write every word to justify its place on the page.',
      },
      {
        heading: 'Sales Page Copywriting for Every Niche',
        content:
          'I have written high-converting sales pages for health supplements, financial newsletters, e-commerce products, ClickBank offers, SaaS platforms, coaching programs, and info products. Each niche has unique buyer psychology, compliance requirements, and proven persuasion patterns. A sales page for a $47 supplement uses different techniques than a sales page for a $2,000 coaching program or a $997 SaaS annual plan. My cross-industry experience as a sales page copywriter means I bring battle-tested frameworks to your market while adapting the approach to fit your specific audience and price point.',
      },
    ],
    deliverables: [
      {
        title: 'Full Sales Page Copy',
        description:
          'Complete long-form sales page (typically 3,000-10,000 words) with headlines, subheads, body copy, bullet points, testimonial placement, and CTAs.',
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
    testimonialIds: ['5', '14', '10', '33'],
    portfolioItems: [
      { title: 'Long-Form Supplement Sales Page', category: 'Sales Page' },
      { title: 'Info Product Launch Page', category: 'Sales Page' },
      { title: 'SaaS Annual Plan Sales Page', category: 'Sales Page' },
    ],
    faqs: [
      {
        question: 'What makes a great sales page copywriter?',
        answer:
          'A great sales page copywriter combines deep audience research skills, mastery of persuasion architecture, and the ability to write compelling prose that keeps readers scrolling. They understand that every element on the page — from the headline to the guarantee to the CTA button text — serves a strategic purpose. Experience matters enormously because you need pattern recognition from hundreds of tested sales pages to know what works in different markets.',
      },
      {
        question: 'What makes a sales page different from a landing page?',
        answer:
          'A sales page is a long-form persuasive document designed to take a reader from awareness to purchase in a single visit. A landing page is typically shorter and designed for a single action like email opt-in or webinar registration. Both require direct-response copywriting skills, but sales pages demand deeper persuasion architecture and more comprehensive objection handling.',
      },
      {
        question: 'How long should a sales page be?',
        answer:
          'Sales page length depends on your offer price, audience temperature, and complexity. As a general rule, higher prices require longer pages, cold traffic requires longer pages, and complex offers require longer pages. I have written converting sales pages from 2,000 words to over 10,000 words. The right length is however long it takes to address every objection and build enough desire to close the sale.',
      },
      {
        question: 'How much does sales page copywriting cost?',
        answer:
          'Sales page copywriting pricing depends on the complexity of the offer, the amount of research required, and the length of the final piece. I work on a project basis with pricing discussed during our initial strategy call. The investment typically pays for itself many times over through increased conversions — a well-written sales page can generate revenue for years.',
      },
      {
        question: 'Do you write sales pages for specific industries?',
        answer:
          'I write sales pages for health and supplements, financial services, e-commerce and DTC, ClickBank offers, SaaS, and info products. Each industry has specific compliance requirements and buyer psychology that I factor into the sales page strategy and copy.',
      },
      {
        question: 'How long does it take to write a sales page?',
        answer:
          'A typical sales page project takes 2-4 weeks from briefing to final draft. This includes audience research, competitive analysis, strategic planning, writing, and one revision round. Complex offers or highly regulated industries may require additional time for research and compliance review.',
      },
    ],
  },
  {
    title: 'Sales Letter Copywriter',
    slug: 'sales-letter-copywriter',
    shortDescription:
      'Classic direct mail and digital sales letters built on proven DR fundamentals. From Fortune 500 to ClickBank.',
    metaTitle: 'Sales Letter Copywriter | Direct Mail & Digital Sales Letters',
    metaDescription:
      'Hire a sales letter copywriter with Fortune 500 direct mail roots and $523M+ in tracked results. Expert in both print and digital sales letters that convert.',
    headline: 'Sales Letter Copywriter',
    subheadline:
      'Classic direct-response sales letters refined for the digital age.',
    heroImage: '/images/services/sales-letter-copywriter.jpg',
    heroImageAlt: 'Direct mail letter and envelope for sales letter copywriting',
    definition: {
      term: 'a sales letter',
      text: 'A sales letter is a written persuasion piece — delivered digitally or via direct mail — that follows a structured argument to sell a product, service, or idea. Also called a TSL (text sales letter) in digital marketing, it uses the same proven direct-response framework as a VSL but in written form, relying on compelling copy rather than video to drive the sale.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Sales Letter Copywriter?',
        content:
          'The sales letter is the foundation of direct-response copywriting. Whether it arrives in a physical mailbox or appears on a screen, the format is the same: a personal, persuasive communication from one person to another, designed to produce a specific action. Writing effective sales letters requires mastery of voice, pacing, storytelling, and the subtle art of making the reader feel like the letter was written specifically for them. A specialist sales letter copywriter understands these principles because the format tolerates no shortcuts — every word either earns the next word or loses the reader.',
      },
      {
        heading: 'The Lost Art of the Sales Letter',
        content:
          'Before VSLs and webinars, there was the sales letter — and the principles that made great sales letters work are the same principles that drive conversions today. I cut my teeth writing direct mail for Apple, IBM, and Citibank in the early 1990s, learning sales letter craft from the direct mail masters who could generate millions from a single piece of paper, a stamp, and a compelling argument. Those fundamentals — clear offers, strong guarantees, compelling proof, and irresistible calls to action — inform every piece of copy I write today, regardless of medium.',
      },
      {
        heading: 'TSL Copywriting: The Digital Sales Letter',
        content:
          'The TSL (Text Sales Letter) is the digital evolution of the classic sales letter. Instead of arriving in the mail, it appears on a web page — but the persuasion principles are identical. TSLs are particularly powerful in health, finance, and info product markets where prospects respond to personal, story-driven selling. As a sales letter copywriter, I bring the same disciplined approach to TSL copywriting that built the fortunes of the original direct mail industry: deep research, compelling narratives, irresistible offers, and systematic testing of every element.',
      },
      {
        heading: 'Direct Mail Roots, Digital Results',
        content:
          'My career started in Fortune 500 direct mail, writing sales letters for brands like Apple Computer, Citibank, IBM, and National Geographic. That training gave me something most digital copywriters never develop: the discipline of writing copy where every word costs money to print and mail. When every extra sentence increases your postage bill, you learn to make every word count. I bring that same discipline to digital sales letters and TSLs — no filler, no fluff, just persuasion-dense copy that drives action.',
      },
      {
        heading: 'Sales Letter Copywriting Across Formats',
        content:
          'My sales letter copywriting adapts the fundamental principles to your specific format and audience. I understand how to modulate voice, length, and persuasion intensity based on the relationship between sender and reader, the complexity of the offer, and the competitive landscape of your market. Every sales letter I write is engineered to convert — not just communicate.',
        bullets: [
          'Classic direct mail packages',
          'Digital TSLs for ClickBank and affiliate offers',
          'Magalog-style sales letters',
          'Letter-format email series',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Full Sales Letter Copy',
        description:
          'Complete sales letter or TSL (typically 2,000-8,000 words) with personal voice, storytelling arc, proof elements, and compelling close.',
      },
      {
        title: 'Opening Variations',
        description:
          'Multiple lead and opening options for split testing — story leads, problem-agitation leads, and curiosity leads.',
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
    testimonialIds: ['1', '26', '27', '18'],
    portfolioItems: [
      { title: 'Health Supplement TSL', category: 'Sales Letter' },
      { title: 'Financial Newsletter Promo', category: 'Sales Letter' },
      { title: 'Info Product Launch Letter', category: 'Sales Letter' },
    ],
    faqs: [
      {
        question: 'What is a sales letter vs. a sales page?',
        answer:
          'A sales letter uses a personal, letter-style format — written as if from one person to another. A sales page can use any format including design-heavy layouts with multiple columns and graphics. Sales letters rely more heavily on voice, storytelling, and personal connection. The best format depends on your market, offer, and audience expectations.',
      },
      {
        question: 'What is a TSL (Text Sales Letter)?',
        answer:
          'A TSL is a long-form text-based sales page that reads like a personal letter from the seller to the prospect. TSLs use storytelling, social proof, and direct-response persuasion techniques to drive conversions. They are particularly effective in health, finance, and info product markets where a personal, story-driven approach resonates with buyers.',
      },
      {
        question: 'Do you still write physical direct mail sales letters?',
        answer:
          'Yes. While most of my current work is digital, I started my career writing direct mail for Fortune 500 brands and I still write direct mail packages when the medium fits the strategy. Direct mail has experienced a resurgence as digital ad costs have increased and physical mailboxes have become less cluttered.',
      },
      {
        question: 'How long should a sales letter be?',
        answer:
          'As long as necessary to make the complete persuasion case and not a word longer. For simple offers to warm audiences, that might be 1,500 words. For complex offers to cold traffic, that could be 6,000 to 8,000 words or more. I recommend the optimal length based on your specific offer, audience, and funnel position.',
      },
      {
        question: 'What industries work best for sales letters and TSLs?',
        answer:
          'Sales letters and TSLs perform exceptionally well in health and supplements, financial services, info products, and any market where the buyer responds to personal, story-driven selling. They also work well for higher-priced offers where trust and personal connection are critical to the purchase decision.',
      },
      {
        question: 'How much does a sales letter cost?',
        answer:
          'Sales letter copywriting is priced on a project basis depending on the length, complexity, and research requirements. Pricing is discussed during our initial strategy call. Whether you need a digital TSL or a full direct mail package, the investment is structured to deliver measurable return through increased conversions.',
      },
    ],
  },
  {
    title: 'Email Copywriter',
    slug: 'email-copywriter',
    shortDescription:
      'Revenue-driving email sequences — launches, nurture, abandon cart, and daily broadcasts that build relationships and drive sales.',
    metaTitle: 'Email Copywriter | Revenue-Driving Email Sequences',
    metaDescription:
      'Expert email copywriter for direct-response brands. Launch sequences, nurture series, abandon cart emails, and daily broadcasts that drive revenue. $523M+ in tracked results.',
    headline: 'Email Copywriter',
    subheadline:
      'Email sequences that build relationships and drive revenue on autopilot.',
    heroImage: '/images/services/email-copywriter.jpg',
    heroImageAlt: 'Email marketing and inbox management for email copywriting',
    definition: {
      term: 'email copywriting',
      text: 'Email copywriting is the craft of writing persuasive emails — sequences, broadcasts, and automations — that drive a specific action: a click, a purchase, a sign-up, or a reply. In direct-response marketing, email sequences are engineered as multi-step persuasion systems, not one-off blasts, with each message building on the last to move the reader toward conversion.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Email Copywriter?',
        content:
          'Email is the highest-ROI marketing channel available — but only when the copy is good enough to earn opens, hold attention, and drive clicks. Most businesses treat email as an afterthought, sending bland newsletters and promotional blasts that their subscribers ignore or unsubscribe from. A specialist email copywriter understands that every email is a micro-persuasion event: the subject line must earn the open, the opening line must earn the scroll, and every paragraph must earn the next. That discipline — applied across an entire sequence — is what turns a dormant email list into a revenue engine.',
      },
      {
        heading: 'Email Sequences That Get Read and Get Results',
        content:
          'Most email copy is forgettable. It gets deleted, ignored, or triggers an unsubscribe. My email sequences are designed to be the one email your subscriber actually looks forward to opening. Through strategic storytelling, pattern interrupts, and irresistible subject lines, I write emails that build genuine relationships while driving revenue. The key is understanding that email is a conversation, not a broadcast. Every email should feel like it was written by a real person to a real person — because it was. That personal, direct-response approach is what separates emails that convert from emails that get marked as spam.',
      },
      {
        heading: 'Launch Sequences That Maximize Revenue Windows',
        content:
          'A product launch lives or dies on its email sequence. The pre-launch emails build anticipation and desire. The launch emails create urgency and overcome objections. The post-launch emails capture fence-sitters and extend the buying window. As an email copywriter specializing in direct-response launches, I engineer every email in the sequence to serve a specific strategic purpose — building toward the moment when your subscriber is most likely to buy. My launch sequences have generated millions in revenue across health, finance, e-commerce, and info product launches.',
      },
      {
        heading: 'Nurture, Abandon Cart, and Automated Sequences',
        content:
          'Beyond launches, email copywriting powers your business on autopilot. Each type of email sequence requires different strategic thinking, voice, and cadence. I tailor every sequence to match your brand voice, audience expectations, and revenue goals — creating automated email assets that generate revenue 24 hours a day without additional ad spend.',
        bullets: [
          'Welcome sequences that turn new subscribers into engaged fans',
          'Nurture sequences that build trust over weeks and months',
          'Abandon cart emails that recover revenue left on the table',
          'Re-engagement campaigns that revive cold subscribers',
        ],
      },
      {
        heading: 'AI-Enhanced Email Copywriting',
        content:
          'I use AI to accelerate every phase of email copywriting — from subject line generation and audience research to sequence planning and performance analysis. AI helps me test more subject line variations, identify winning emotional angles faster, and analyze what is working across your email metrics at scale. But the strategic thinking behind the sequence architecture, the emotional resonance of the storytelling, and the persuasion techniques that drive clicks — that is the product of three decades of direct-response email experience that no AI can replicate.',
      },
    ],
    deliverables: [
      {
        title: 'Complete Email Sequence',
        description:
          'Full sequence of emails (typically 5-15 emails) with subject lines, preview text, body copy, and CTAs for each.',
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
    testimonialIds: ['22', '19', '28', '30'],
    portfolioItems: [
      { title: 'Product Launch Email Sequence', category: 'Email' },
      { title: 'Abandon Cart Recovery Emails', category: 'Email' },
      { title: 'Daily Broadcast Series', category: 'Email' },
    ],
    faqs: [
      {
        question: 'What types of email sequences do you write?',
        answer:
          'I write launch sequences, welcome and nurture sequences, abandon cart sequences, re-engagement campaigns, daily and weekly broadcast emails, automated sales sequences, and post-purchase follow-up series. Each type requires a different strategic approach, and I tailor the tone, frequency, and persuasion intensity to match your audience and goals.',
      },
      {
        question: 'How many emails are in a typical sequence?',
        answer:
          'It depends on the sequence type and goal. Launch sequences typically run 7-15 emails. Welcome and nurture sequences can be 5-10 emails. Abandon cart sequences are usually 3-5 emails. I recommend the optimal number based on your specific funnel, audience, and revenue goals.',
      },
      {
        question: 'Do you write email copy for specific platforms?',
        answer:
          'I write email copy that works across all major platforms — Klaviyo, ActiveCampaign, ConvertKit, Mailchimp, Drip, Ontraport, and others. The copy principles are universal. I can also provide platform-specific formatting notes if your team needs them.',
      },
      {
        question: 'How do you measure email copywriting success?',
        answer:
          'The metrics that matter for email copywriting are open rates, click-through rates, conversion rates, and revenue per email. I write with these metrics in mind and can provide recommendations for A/B testing subject lines, CTAs, and sequence timing to continuously improve performance.',
      },
      {
        question: 'Can you write daily broadcast emails?',
        answer:
          'Yes. Daily broadcasts are one of the most powerful email strategies for building audience relationships and driving consistent revenue. I can write a bank of daily emails, create templates and frameworks for your team, or provide a combination of both to keep your email program running consistently.',
      },
      {
        question: 'How much does email copywriting cost?',
        answer:
          'Email copywriting is priced per sequence, with the cost depending on the number of emails, complexity of the strategy, and amount of research required. Individual broadcast emails are also available on a per-email basis. Pricing is discussed during our initial strategy call.',
      },
    ],
  },
  {
    title: 'Ad Copywriter',
    slug: 'ad-copywriter',
    shortDescription:
      'High-converting ad copy for Facebook, Google, YouTube, and native. Scroll-stopping hooks, compliant angles, tested frameworks.',
    metaTitle: 'Ad Copywriter | Facebook, Google & YouTube Ad Copy',
    metaDescription:
      'Expert ad copywriter for direct-response brands. High-converting Facebook, Google, YouTube, and native ad copy with scroll-stopping hooks and proven frameworks.',
    headline: 'Ad Copywriter',
    subheadline:
      'Scroll-stopping ad copy that turns paid traffic into profit.',
    heroImage: '/images/services/ad-copywriter.jpg',
    heroImageAlt: 'Social media advertising and marketing for ad copywriting',
    definition: {
      term: 'ad copywriting',
      text: 'Ad copywriting is the art of writing short-form persuasive text for paid advertising platforms — Facebook, Google, YouTube, TikTok, and native networks. The goal is to stop the scroll, qualify the prospect, and compel a click in as few words as possible, bridging the gap between cold traffic and your sales funnel.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Ad Copywriter?',
        content:
          'Paid advertising is the most expensive form of copywriting per word — because every word either makes money or wastes it. A specialist ad copywriter understands that ad copy is not just creative writing in a small format. It is the strategic intersection of audience psychology, platform algorithms, compliance requirements, and direct-response persuasion compressed into the smallest possible space. The hook must stop the scroll in under two seconds. The body must build enough desire to earn the click. And the entire ad must work within the platform\'s content policies while still being compelling enough to outperform every other ad competing for your prospect\'s attention.',
      },
      {
        heading: 'Ads That Stop the Scroll',
        content:
          'In a world where your prospect scrolls past thousands of ads per day, your ad copy has milliseconds to earn attention. I write ad copy that stops the scroll through unexpected angles, emotional hooks, and curiosity gaps that make clicking irresistible. But stopping the scroll is only half the job — the ad also needs to pre-qualify the click so you are not paying for traffic that will never convert. My ad copywriting approach balances attention-grabbing hooks with prospect qualification to deliver clicks that actually convert downstream in your funnel.',
      },
      {
        heading: 'Platform-Specific Ad Copywriting',
        content:
          'Every advertising platform has its own rules, best practices, and audience behavior patterns. As an ad copywriter who has written across all major platforms, I tailor the copy strategy, format, and voice to match each platform\'s unique dynamics.',
        bullets: [
          'Facebook and Meta ads — hooks that work in a fast-scrolling feed with short attention spans',
          'Google Search ads — precision intent-matching that competes for click-through rate',
          'YouTube ads — earning the first five seconds before the skip button appears',
          'Native ads — blending with editorial content while still driving action',
        ],
      },
      {
        heading: 'Compliance-Aware Ad Copy',
        content:
          'One of the biggest challenges in ad copywriting is staying compliant with platform policies — especially in regulated industries like health supplements and financial services. An ad that gets rejected or flagged does not just waste time, it can put your entire ad account at risk. I write ad copy that pushes the boundaries of what is allowed without crossing them, using proven language patterns and angles that satisfy platform reviewers while still driving strong click-through and conversion rates. This compliance-aware approach protects your accounts while maximizing your advertising ROI.',
      },
      {
        heading: 'Testing Frameworks for Ad Copy',
        content:
          'The best ad copywriters are not just writers — they are systematic testers. I approach ad copywriting with a testing framework that identifies the key variables to test: hooks, angles, CTAs, proof elements, and emotional triggers. Rather than writing a single ad and hoping it works, I deliver sets of variations designed to be tested against each other, with clear hypotheses about what each variation is designed to learn. This systematic approach to ad copy testing means you find winning ads faster and scale your campaigns more efficiently.',
      },
    ],
    deliverables: [
      {
        title: 'Ad Copy Suites',
        description:
          'Sets of 5-10 ad variations per campaign, with multiple hooks, angles, and CTAs designed for systematic split testing.',
      },
      {
        title: 'Platform-Specific Formatting',
        description:
          'Ad copy formatted to each platform\'s specifications — character limits, headline/description structure, and creative notes.',
      },
      {
        title: 'Hook Library',
        description:
          'Collection of proven opening hooks and angles that can be mixed and matched across campaigns and platforms.',
      },
      {
        title: 'Audience Angle Matrix',
        description:
          'Strategic document mapping different audience segments to the specific emotional angles and proof elements most likely to convert them.',
      },
      {
        title: 'Compliance Review Notes',
        description:
          'Platform compliance considerations for each ad, especially for regulated industries like health and finance.',
      },
      {
        title: 'Testing Roadmap',
        description:
          'Prioritized testing plan showing which ad elements to test first and how to iterate based on results.',
      },
    ],
    testimonialIds: ['15', '16', '4', '5'],
    portfolioItems: [
      { title: 'Facebook Ad Suite — Health Niche', category: 'Ads' },
      { title: 'YouTube Pre-Roll Ads', category: 'Ads' },
      { title: 'Native Ad Campaign', category: 'Ads' },
    ],
    faqs: [
      {
        question: 'What platforms do you write ads for?',
        answer:
          'I write ad copy for Facebook and Meta, Google Search, YouTube, TikTok, and native advertising platforms like Taboola and Outbrain. Each platform has different best practices, compliance requirements, and audience behavior patterns, and I tailor the copy accordingly.',
      },
      {
        question: 'How many ad variations do you write per campaign?',
        answer:
          'I typically deliver 5-10 ad variations per campaign, designed as a testing suite with different hooks, angles, and CTAs. This gives you enough variation to run meaningful split tests and find winning combinations faster than testing a single ad at a time.',
      },
      {
        question: 'Do you write video ad scripts?',
        answer:
          'Yes. I write scripts for video ads including YouTube pre-roll, Facebook and Instagram video ads, TikTok ads, and UGC-style video scripts. Video ad scripts require different pacing and hook mechanics than static ads, and I adapt the approach accordingly.',
      },
      {
        question: 'How do you handle ad compliance for health and finance?',
        answer:
          'I have extensive experience writing ad copy for regulated industries. I use proven language patterns and angles that satisfy platform reviewers while maintaining strong persuasion. This includes careful wording of claims, strategic use of disclaimers, and angles that focus on benefits rather than specific medical or financial outcomes.',
      },
      {
        question: 'Can you write ad copy that matches my existing funnel?',
        answer:
          'Absolutely. In fact, this is the ideal approach. Ad copy should be strategically aligned with your landing page, sales page, and follow-up sequence to create a seamless experience from click to conversion. I review your existing funnel assets to ensure the ad copy pre-qualifies traffic and sets up the downstream conversion.',
      },
      {
        question: 'How much does ad copywriting cost?',
        answer:
          'Ad copywriting is typically priced per ad suite (a set of variations for a specific campaign) or on a retainer basis for ongoing ad copy needs. Pricing depends on the number of platforms, variations required, and complexity. Details are discussed during our initial strategy call.',
      },
    ],
  },
  {
    title: 'Landing Page Copywriter',
    slug: 'landing-page-copywriter',
    shortDescription:
      'High-converting landing pages for lead gen, webinar registration, and direct sales. Every word optimized for action.',
    metaTitle: 'Landing Page Copywriter | High-Converting Landing Pages',
    metaDescription:
      'Expert landing page copywriter with $523M+ in tracked results. High-converting landing pages for lead generation, webinar registration, and direct sales.',
    headline: 'Landing Page Copywriter',
    subheadline:
      'Landing pages engineered for maximum conversion rate.',
    heroImage: '/images/services/landing-page-copywriter.jpg',
    heroImageAlt: 'Web design and landing page on laptop for landing page copywriting',
    definition: {
      term: 'a landing page',
      text: 'A landing page is a standalone web page built for a single conversion goal — capturing a lead, driving a sale, or prompting a specific action. Unlike regular website pages, landing pages strip away navigation and distractions, focusing entirely on persuading the visitor to take one clearly defined next step.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Landing Page Copywriter?',
        content:
          'A landing page has exactly one job: convert visitors into leads or customers. That single-minded focus makes landing page copywriting one of the most challenging specialties in direct response. Every element on the page — headline, subhead, body copy, social proof, form fields, and CTA button — must work together as a conversion machine with zero wasted space. A specialist landing page copywriter understands that the copy is not about what you want to say — it is about what your prospect needs to hear to take the action you want them to take. That prospect-first approach, built on research and testing, is what separates high-converting landing pages from the ones that leak visitors.',
      },
      {
        heading: 'Landing Pages That Convert',
        content:
          'A great landing page is a conversion machine. Every element — headline, sub-headline, body copy, social proof, and CTA — works together to move your visitor toward a single action. I build landing pages that eliminate friction, address objections, and make saying yes the easiest decision your prospect makes all day. Whether your goal is lead capture, webinar registration, free trial signup, or direct purchase, the principles are the same: match the message to the traffic source, make the offer irresistibly clear, and remove every possible reason to say no.',
      },
      {
        heading: 'Landing Page Copywriting for Lead Generation',
        content:
          'Lead generation landing pages require a specific balance of persuasion and restraint. You need to create enough desire for the lead magnet to overcome the friction of entering personal information — but you also need to pre-qualify the lead so your sales team is not wasting time on unqualified prospects. My landing page copywriting for lead gen focuses on communicating the specific, tangible value of your offer while setting clear expectations about what happens next. The result is higher conversion rates AND higher lead quality.',
      },
      {
        heading: 'Message Match and Traffic Alignment',
        content:
          'One of the most overlooked aspects of landing page copywriting is message match — ensuring that the landing page copy aligns precisely with the ad, email, or content that drove the visitor there. When a prospect clicks an ad about a specific problem and lands on a page about something different, conversion rates collapse. I write landing pages that maintain perfect message continuity from traffic source to conversion, matching the language, tone, and promise that earned the click in the first place.',
      },
      {
        heading: 'Testing and Optimization',
        content:
          'The best landing page copywriters know that the first version is never the final version. I approach landing page copywriting with a testing mindset, delivering copy that includes built-in optimization opportunities: headline alternatives, CTA variations, and different proof element arrangements. I also provide strategic guidance on what to test first based on the expected impact on conversion rates, so your optimization efforts generate maximum ROI from minimum testing volume.',
      },
    ],
    deliverables: [
      {
        title: 'Full Landing Page Copy',
        description:
          'Complete landing page copy optimized for your specific conversion goal — lead capture, registration, trial signup, or direct sale.',
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
    testimonialIds: ['16', '24', '29', '22'],
    portfolioItems: [
      { title: 'Lead Gen Landing Page — SaaS', category: 'Landing Page' },
      { title: 'Webinar Registration Page', category: 'Landing Page' },
      { title: 'Free Trial Signup Page', category: 'Landing Page' },
    ],
    faqs: [
      {
        question: 'What is the difference between a landing page and a sales page?',
        answer:
          'A landing page is typically shorter and focused on a single conversion action like lead capture, webinar registration, or free trial signup. A sales page is longer and designed to take someone through the entire buying decision in one visit. Both require direct-response copywriting skills, but the strategy, length, and persuasion intensity differ significantly.',
      },
      {
        question: 'What makes a landing page convert well?',
        answer:
          'High-converting landing pages share several characteristics: a clear, benefit-driven headline that matches the traffic source, focused copy that addresses a single offer, strong social proof, minimal navigation distractions, and a prominent CTA with low-friction form design. The specific formula depends on your offer, audience, and traffic temperature.',
      },
      {
        question: 'Do you design landing pages or just write the copy?',
        answer:
          'I focus on the copy, which is the primary driver of landing page conversion rates. However, I provide wireframe guidance, layout recommendations, and design notes so your designer or developer can build the page in a way that supports the copy strategy. Copy and design should work together, and I make sure my deliverables facilitate that.',
      },
      {
        question: 'How important is the headline on a landing page?',
        answer:
          'The headline is the single most important element on any landing page. It determines whether a visitor stays or bounces in the first 2-3 seconds. That is why I deliver multiple headline variations for testing — even a small improvement in headline performance can dramatically increase overall conversion rates.',
      },
      {
        question: 'Can you write landing pages for paid traffic campaigns?',
        answer:
          'Yes, and this is one of my specialties. Landing pages for paid traffic require precise message match with the ads driving the traffic, and they need to convert efficiently because every non-converting visitor costs you money. I work closely with your media buying team to ensure the landing page copy aligns with your ad angles and audience targeting.',
      },
      {
        question: 'How much does landing page copywriting cost?',
        answer:
          'Landing page copywriting is priced on a project basis, depending on the complexity of the offer, the amount of research required, and the deliverables included. Pricing is discussed during our initial strategy call. Given that even small conversion improvements on a landing page can generate significant ROI, the investment typically pays for itself quickly.',
      },
    ],
  },
  {
    title: 'Sales Funnel Copywriter',
    slug: 'sales-funnel-copywriter',
    shortDescription:
      'End-to-end funnel copy — from ad to landing page to sales page to upsell. Every step optimized for maximum AOV.',
    metaTitle: 'Sales Funnel Copywriter | End-to-End Funnel Copy',
    metaDescription:
      'Expert sales funnel copywriter with $523M+ in tracked results. End-to-end funnel copy from ad to upsell, optimized for maximum AOV and customer lifetime value.',
    headline: 'Sales Funnel Copywriter',
    subheadline:
      'End-to-end funnel copy optimized for maximum AOV and lifetime value.',
    heroImage: '/images/services/sales-funnel-copywriter.jpg',
    heroImageAlt: 'Marketing funnel and conversion strategy for sales funnel copywriting',
    definition: {
      term: 'a sales funnel',
      text: 'A sales funnel is a multi-step marketing system that guides prospects from first awareness through to purchase and beyond. Each step — ad, landing page, sales page, order bump, upsell, downsell, and follow-up sequence — is engineered to maximize both conversion rate and average order value across the entire customer journey.',
    },
    sections: [
      {
        heading: 'Why Hire a Specialist Sales Funnel Copywriter?',
        content:
          'A sales funnel is a system — and the copy at every step of that system must work together as a cohesive whole. Most businesses build their funnels piecemeal: one copywriter writes the ads, another writes the landing page, a third writes the sales page, and nobody writes the upsells with any strategic thought at all. The result is a funnel full of disconnects that leak revenue at every transition. A specialist sales funnel copywriter thinks in systems. Every piece of copy — from the first ad impression to the final downsell — is part of a unified persuasion architecture designed to maximize both conversion rate and average order value.',
      },
      {
        heading: 'Funnels That Maximize Every Click',
        content:
          'A funnel is only as strong as its weakest step. I write complete funnel copy — ads, landing pages, sales pages, order bumps, upsells, and downsells — ensuring every transition is seamless and every step maximizes revenue. My sales funnel copywriting has generated $523M+ in tracked results for clients across health, finance, e-commerce, and info product verticals. The key is treating the funnel as a single persuasion narrative that unfolds across multiple pages, with each step building on the emotional momentum created by the previous one.',
      },
      {
        heading: 'Funnel Architecture and Copy Strategy',
        content:
          'Before I write a single word of funnel copy, I map the complete customer journey from first touch to final purchase. This includes identifying the optimal funnel structure for your offer, planning the persuasion arc across all pages, determining where to place upsells and order bumps for maximum take rates, and engineering the email follow-up sequences that capture revenue from prospects who do not buy immediately. This strategic planning phase is what separates professional sales funnel copywriting from simply writing individual pages and hoping they work together.',
      },
      {
        heading: 'Maximizing Average Order Value',
        content:
          'The real money in any funnel is not the front-end sale — it is the upsells, downsells, and order bumps that increase average order value. As a sales funnel copywriter, I engineer every post-purchase step to feel like a natural extension of the original buying decision. The upsell copy references the product they just bought, reinforces their smart decision, and presents the upgrade as the logical next step. This approach typically increases AOV by 30 to 100 percent without eroding customer trust or increasing refund rates.',
      },
      {
        heading: 'Sales Funnel Copywriting Across Industries',
        content:
          'Each industry has different optimal funnel structures, price points, and upsell strategies. My cross-industry experience as a sales funnel copywriter means I can recommend and execute the funnel architecture that maximizes revenue in your specific market.',
        bullets: [
          'ClickBank vendors — affiliate-optimized funnels with high EPC',
          'Health and supplement brands — compliance-aware copy with subscription-focused upsells',
          'Financial publishers — long-form persuasion with regulatory guardrails',
          'SaaS companies — feature-focused sales pages and annual plan upgrades',
          'E-commerce and DTC brands — product launch funnels with AOV maximization',
          'Info product businesses — high-ticket funnels with webinar and application paths',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Complete Funnel Copy',
        description:
          'All copy for every step of your funnel — ads, landing pages, sales pages, order forms, upsells, downsells, and thank-you pages.',
      },
      {
        title: 'Funnel Architecture Map',
        description:
          'Strategic funnel blueprint showing page flow, conversion goals, upsell logic, and email integration points.',
      },
      {
        title: 'Email Follow-Up Sequence',
        description:
          'Post-purchase and abandoned cart email sequences designed to maximize customer lifetime value and recover lost sales.',
      },
      {
        title: 'Order Bump Copy',
        description:
          'Optimized order bump copy positioned on the checkout page to increase AOV with minimal friction.',
      },
      {
        title: 'Split Test Variations',
        description:
          'Alternative versions of key funnel elements — headlines, offers, CTAs — designed for systematic A/B testing.',
      },
      {
        title: 'Funnel Optimization Guide',
        description:
          'Strategic document outlining testing priorities, key metrics to track, and optimization roadmap for ongoing improvement.',
      },
    ],
    testimonialIds: ['5', '4', '18', '12'],
    portfolioItems: [
      { title: 'Complete Health Supplement Funnel', category: 'Funnel' },
      { title: 'Info Product Launch Funnel', category: 'Funnel' },
      { title: 'E-Commerce DTC Funnel', category: 'Funnel' },
    ],
    faqs: [
      {
        question: 'What does a sales funnel copywriter do?',
        answer:
          'A sales funnel copywriter writes all the copy that moves a prospect through the buying journey — from the initial ad or email to the landing page, sales page, order form, upsells, downsells, and follow-up sequences. The goal is to maximize conversion at every step and increase average order value while maintaining a cohesive persuasion narrative throughout.',
      },
      {
        question: 'How many pages are in a typical sales funnel?',
        answer:
          'A typical direct-response funnel includes 5-8 pages: a landing or opt-in page, a sales page, an order form, 1-3 upsell pages, a downsell page, and a thank-you page. More complex funnels may include additional elements like webinar registration pages, replay pages, or application pages. I recommend the optimal structure based on your offer and market.',
      },
      {
        question: 'How long does it take to write a complete funnel?',
        answer:
          'A complete funnel copywriting project typically takes 4-6 weeks from briefing to final deliverables. This includes research, strategic architecture planning, writing all funnel pages, email sequences, and one revision round. The timeline depends on the number of pages and complexity of the offer.',
      },
      {
        question: 'Can you write funnel copy for ClickFunnels or other platforms?',
        answer:
          'Yes. I write funnel copy that works across all major funnel-building platforms including ClickFunnels, Kartra, Kajabi, Shopify, and custom-built funnels. The copy is platform-agnostic — great funnel copy converts regardless of what software renders it.',
      },
      {
        question: 'What is the most important page in a sales funnel?',
        answer:
          'Every page matters, but the sales page typically has the biggest impact on overall funnel performance because it is where the primary buying decision happens. That said, I have seen funnels where optimizing the upsell sequence had a bigger impact on revenue than improving the sales page, because the upsells dramatically increased AOV. A specialist sales funnel copywriter treats every page as a revenue lever.',
      },
      {
        question: 'How much does sales funnel copywriting cost?',
        answer:
          'Sales funnel copywriting is priced as a complete project, with the cost depending on the number of pages, complexity of the offer, and whether email sequences are included. Because funnel copy touches every revenue lever in your business, it tends to be the highest-ROI copywriting investment. Pricing is discussed during our initial strategy call.',
      },
    ],
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
          'Everyone has access to ChatGPT, Claude, and a growing army of AI writing tools. Almost no one is using them to produce copy that actually converts. Most teams are generating mediocre first drafts, publishing them with minimal editing, and wondering why their conversion rates are dropping. The problem is not the technology — it is the strategy. AI is a force multiplier, but if you multiply zero direct-response skill by ten, you still get zero. An AI copywriting consultant bridges that gap: bringing the direct-response expertise that tells the AI what to write, and the quality control processes that ensure the output actually drives conversions.',
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
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
