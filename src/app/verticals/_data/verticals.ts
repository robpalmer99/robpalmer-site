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
}

export const verticals: Vertical[] = [
  {
    title: 'Health & Supplement Copywriter',
    slug: 'health-supplement-copywriter',
    shortDescription:
      'Compliance-aware direct-response copy for supplements, nutraceuticals, and health products. VSLs, TSLs, and funnels that convert while staying within regulatory guidelines.',
    metaTitle: 'Health & Supplement Copywriter | Compliant DR Copy That Converts',
    metaDescription:
      'Hire a health supplement copywriter with $523M+ in tracked results. Compliance-aware VSLs, sales pages, and funnels for supplement and nutraceutical brands.',
    headline: 'Health & Supplement Copywriter',
    subheadline:
      'High-converting copy for supplements and health products — without crossing compliance lines.',
    heroImage: '/images/industries/health-supplements.jpg',
    heroImageAlt: 'Health supplements and natural products',
    definition: {
      term: 'health & supplement copywriting',
      text: 'Health and supplement copywriting is direct-response copy written specifically for nutritional supplements, nutraceuticals, and health products. It requires balancing aggressive conversion tactics with FTC and FDA compliance — writing claims that are persuasive enough to sell but careful enough to pass regulatory review and advertising platform policies.',
    },
    sections: [
      {
        heading: 'The Health Supplement Copy Challenge',
        content:
          'Health and supplement copywriting is a high-wire act. You need copy aggressive enough to convert cold traffic, yet compliant enough to stay on the right side of the FTC, FDA, and advertising platforms. Most copywriters either write copy that is too tame to convert or too aggressive to survive review. I write copy that does both — converts at scale while staying within regulatory guidelines. That balance is what separates profitable supplement brands from the ones that burn through ad spend with nothing to show for it.',
      },
      {
        heading: 'Deep Experience Across Health Verticals',
        content:
          'Each category has its own compliance boundaries, buyer psychology, and proven angles. I understand the specific language patterns that resonate with health-conscious buyers and the funnel architectures that maximize average order value in this space. My health supplement VSLs and sales pages have generated millions in revenue for both ClickBank vendors and independent DTC brands.',
        bullets: [
          'Weight loss supplements',
          'Anti-aging and longevity',
          'Nootropics and brain health',
          'Joint health and mobility',
          'Digestive health and gut supplements',
          'Energy boosters and performance',
          'Sleep aids and stress relief',
        ],
      },
      {
        heading: 'Compliance-Aware Copy That Still Converts',
        content:
          'The biggest challenge in supplement copywriting is not writing compliant copy — it is writing copy that is both compliant and persuasive. Anyone can write safe, bland copy that passes review. The skill is in crafting structure/function claims, lifestyle benefits, and social proof narratives that create genuine desire while staying within regulatory guidelines. I use hedging language strategically, cite studies where available, and build persuasion cases around outcomes that prospects can relate to — all without crossing the line into disease claims or unsubstantiated promises.',
      },
      {
        heading: 'AI-Enhanced Supplement Research',
        content:
          'I use AI tools to analyze thousands of competitor ads, identify the specific claims and angles generating the most engagement, and map the regulatory landscape before writing a single word. This means your copy is informed by data, not guesswork. I can identify which hooks are working in your niche right now, which claims are getting flagged by platforms, and which funnel structures are producing the highest EPCs — all before the research phase ends. The result: copy that launches faster and converts harder because it is built on real competitive intelligence.',
      },
      {
        heading: 'The Full Health Supplement Funnel',
        content:
          'I do not just write a sales page and call it done. I build complete supplement funnels — from the front-end VSL or TSL through order bumps, OTO upsells, downsells, and post-purchase email sequences. Each step is engineered to maximize average order value while keeping refund rates manageable. The most profitable supplement brands understand that the real money is in the back-end, and that is where my direct-response expertise delivers the highest ROI.',
      },
    ],
    deliverables: [
      { title: 'VSL & TSL Scripts', description: 'Long-form video and text sales letters optimized for cold traffic conversion.' },
      { title: 'Sales Page Copy', description: 'Persuasive long-form sales pages built on proven supplement angles.' },
      { title: 'Upsell & Downsell Sequences', description: 'Post-purchase copy that maximizes AOV without eroding trust.' },
      { title: 'Email Sequences', description: 'Launch, nurture, and promotional sequences that drive repeat purchases.' },
      { title: 'Ad Copy', description: 'Scroll-stopping Facebook, YouTube, and native ad copy with compliant hooks.' },
      { title: 'Affiliate Tools', description: 'Swipe copy, email templates, and promotional materials for affiliate partners.' },
    ],
    testimonialIds: ['4', '5', '17', '6'],
    portfolioItems: [
      { title: 'Weight-Loss VSL', category: 'VSL' },
      { title: 'Dynamic Brain', category: 'VSL' },
      { title: 'Puradrop', category: 'VSL' },
      { title: 'Supernus', category: 'VSL' },
      { title: 'BodyHacker', category: 'VSL' },
      { title: 'Coffee Slimmer Pro', category: 'VSL' },
    ],
    faqs: [
      {
        question: 'Do you understand FTC and FDA compliance for supplement copy?',
        answer:
          'Yes. While I am not a lawyer and always recommend legal review before publishing, I have extensive experience writing supplement copy that satisfies both performance and compliance requirements. I understand structure/function claims, the boundaries of health claims, and how to write persuasive copy that works within regulatory guidelines.',
      },
      {
        question: 'What types of health products have you written for?',
        answer:
          'I have written for weight loss supplements, nootropics, joint health, anti-aging, digestive health, energy boosters, sleep aids, and more. Each category has its own compliance considerations and buyer psychology, and I tailor the approach accordingly.',
      },
      {
        question: 'Can you write VSLs for ClickBank health offers?',
        answer:
          'Absolutely. I have written multiple VSLs for ClickBank health offers and understand the platform\'s specific compliance requirements, buyer demographics, and funnel best practices that drive ClickBank success.',
      },
      {
        question: 'How do you handle supplement compliance in copy?',
        answer:
          'I focus on structure/function claims, lifestyle benefits, and social proof rather than disease claims. I use hedging language appropriately, cite studies where available, and build the persuasion case around outcomes the prospect can relate to. Every piece should be reviewed by a compliance team before publishing.',
      },
      {
        question: 'How long does it take to write a supplement VSL?',
        answer:
          'A typical supplement VSL project takes 2-4 weeks from briefing to final draft. This includes competitive research, angle development, scripting, and one round of revisions. The AI-enhanced research process means I can compress the research phase without sacrificing depth.',
      },
      {
        question: 'Do you write complete supplement funnels or just the front-end?',
        answer:
          'I write complete funnels — front-end VSL or TSL, order bump, OTO1 upsell, OTO2 upsell, downsell, thank-you page, and post-purchase email sequences. The back-end is where the real margin lives in supplements, and I optimize every step to maximize AOV.',
      },
      {
        question: 'What conversion rates can I expect?',
        answer:
          'Conversion rates vary by offer, traffic source, and price point. However, my health supplement funnels consistently outperform industry averages. One client reported 8% conversion on cold traffic from a funnel I wrote. I focus on writing copy that moves specific metrics — not just vanity numbers.',
      },
    ],
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
          'Financial copywriting demands a unique combination of persuasion skill and regulatory awareness. Having written for Fortune 500 financial brands including Morgan Stanley and Citibank, I understand how to craft compelling financial offers that respect compliance boundaries. Whether you are selling a trading newsletter, an investment course, a financial advisory service, or an insurance product, the copy needs to be aggressive enough to convert while careful enough to stay within SEC, FINRA, and FTC regulations.',
      },
      {
        heading: 'Fortune 500 Financial Foundations',
        content:
          'My financial copywriting experience spans the full spectrum — from institutional marketing for major Wall Street banks to direct-response campaigns for independent financial publishers. Writing for Morgan Stanley taught me how to communicate with sophisticated, high-net-worth audiences. Writing for Citibank taught me how to drive response at scale within tight compliance frameworks. This range gives me a unique perspective: I can write with the credibility and authority of a Wall Street brand while employing the conversion techniques that drive direct-response results.',
      },
      {
        heading: 'Understanding the Financial Buyer',
        content:
          'Financial prospects are the most skeptical audience in direct response. They have heard every claim, seen every chart pattern, and been burned by enough bad advice to develop strong defenses against marketing. My copy cuts through that skepticism by leading with credibility, demonstrating genuine expertise, and making offers that feel like opportunities rather than pitches. The key is building trust first — then presenting the offer as the logical next step for someone who has already decided to take action.',
      },
      {
        heading: 'Long-Form Financial Promotions',
        content:
          'Long-form financial promotions — the kind published by Agora, Stansberry, and similar publishers — are one of my specialties. These 5,000 to 10,000+ word pieces require deep research, sophisticated narrative construction, and an ability to maintain reader engagement across a lengthy persuasion sequence. I bring the same research-driven, AI-enhanced process to financial promotions that I use across all my work, resulting in promotions that are both deeply researched and strategically compelling.',
      },
      {
        heading: 'AI-Enhanced Financial Research',
        content:
          'Financial copywriting requires more research than almost any other niche. I use AI tools to analyze market trends, track competitor positioning, identify the specific fears and desires driving financial buyers right now, and monitor the regulatory landscape before writing a single word. This compressed research process means your promotion launches faster — without sacrificing the depth of insight that makes financial copy convert.',
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
          'E-commerce and DTC brands live and die by their copy. Your product page headline, your abandoned cart email, your post-purchase upsell sequence — each one is either making you money or leaving it on the table. I write end-to-end e-commerce copy that maximizes conversion at every touchpoint, from the first ad impression to the fifth repeat purchase. The difference between a 2% conversion rate and a 4% conversion rate is not clever wordplay — it is strategic persuasion engineering.',
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
          'The most profitable DTC brands do not just acquire customers — they keep them. I write post-purchase sequences, subscription upsells, loyalty program copy, and re-engagement campaigns designed to maximize customer lifetime value. This is where the real margin lives in e-commerce. Most brands focus all their budget on acquisition and ignore the back-end — which is like filling a bucket with a hole in it. My direct-response expertise plugs those holes and turns one-time buyers into repeat customers.',
      },
      {
        heading: 'The Full E-Commerce Revenue Stack',
        content:
          'I write every piece of copy in the e-commerce revenue stack: ad creative that drives qualified traffic, landing pages that capture leads, product pages that convert browsers, email sequences that recover abandoned carts and drive repeat purchases, and upsell/cross-sell sequences that grow AOV. Each piece is connected to the next in a cohesive system — not a collection of disconnected tactics.',
      },
      {
        heading: 'AI-Powered Competitive Intelligence',
        content:
          'I use AI tools to analyze your competitors\' funnels, identify the ad angles getting the most engagement in your niche, and map the customer journey from first click to fifth purchase. This data-driven approach means your copy is not based on guesswork or generic best practices — it is built on real intelligence about what is actually working in your specific market right now.',
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
      text: 'ClickBank copywriting is direct-response copy built specifically for the ClickBank affiliate marketplace. It requires understanding ClickBank\'s unique ecosystem — affiliate incentives, EPC (earnings per click) economics, gravity scoring, and compliance review processes — to create funnels that convert buyers AND attract top affiliates to promote your offer.',
    },
    sections: [
      {
        heading: 'ClickBank Funnels That Win',
        content:
          'ClickBank is a unique marketplace with its own ecosystem of affiliates, buyers, and success patterns. Writing copy that succeeds on ClickBank requires understanding what motivates affiliates to promote your offer, what converts ClickBank\'s buyer demographics, and how to structure funnels that maximize earnings per click (EPC) while maintaining sustainable refund rates. I have built ClickBank funnels that generate consistent, scalable revenue — the kind that attract top affiliates and keep them promoting month after month.',
      },
      {
        heading: 'Engineered for Affiliate Appeal',
        content:
          'The best ClickBank offer in the world will fail if affiliates do not promote it. Affiliates look at one thing above all else: EPC (earnings per click). They want proof that your funnel converts their traffic into commissions. I write copy that converts AND gives affiliates the metrics they need to see — high EPCs, competitive gravity scores, and strong AOVs. I also create affiliate tools pages, swipe copy, and promotional materials that make it easy for affiliates to drive traffic to your offer.',
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
          'ClickBank has its own compliance review process that can trip up even experienced copywriters. I stay current with ClickBank\'s content guidelines and approval processes, writing copy designed to pass review while still being aggressive enough to convert. This includes understanding their stance on income claims, health claims, testimonial usage, and refund policy presentation. Getting your offer approved the first time saves weeks of back-and-forth revisions.',
      },
      {
        heading: 'Data-Driven Angle Selection',
        content:
          'Before writing a word, I use AI tools to analyze what is currently working on ClickBank — which hooks are driving the highest gravity scores, which angles are resonating with buyers, and which funnel structures are producing the best EPCs. This competitive intelligence means your funnel is built on what is proven to work right now, not on guesswork or last year\'s tactics.',
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
          'Most SaaS copy is bland, feature-focused, and interchangeable. "Streamline your workflow. Boost productivity. Sign up free." Sound familiar? That is because most SaaS companies hire brand copywriters when what they actually need is a direct-response copywriter. I bring urgency, specificity, emotional triggers, and clear value propositions to SaaS marketing — the same principles that have generated $523M+ in tracked results across other industries. The result: landing pages that convert, trial sequences that activate, and upgrade campaigns that grow MRR.',
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
          'The biggest mistake in SaaS copy is leading with features. Your prospects do not care about your API or your dashboard — they care about the problems those features solve and the outcomes they enable. I translate technical capabilities into compelling benefits that resonate with decision-makers, using AI-powered competitive analysis to understand exactly what your market values most. The copy speaks the language of business outcomes, not technical specifications.',
      },
      {
        heading: 'Reducing Churn Through Copy',
        content:
          'Most SaaS companies treat churn as a product problem. Often, it is a copy problem. Users churn because they never fully activated, because they forgot why they signed up, or because they do not understand the value they are getting. I write onboarding sequences that drive activation, engagement emails that demonstrate ongoing value, and re-engagement campaigns that save at-risk accounts. Reducing churn by even 1-2% can have a massive impact on annual recurring revenue.',
      },
      {
        heading: 'I Speak Your Metrics',
        content:
          'I understand MRR, ARR, churn rate, LTV, CAC, activation rate, and how copy impacts each one. This means I can write copy aligned with your specific growth objectives — whether that is improving trial-to-paid conversion, increasing expansion revenue, or reducing time-to-value during onboarding. Every piece of copy I write has a measurable business objective behind it.',
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
          'Unlike physical products, info products have no tangible form factor to sell. There is no packaging to hold, no ingredients list to scan, no weight to feel. The only thing standing between your prospect and their credit card is your copy. That is why info product copy demands the highest level of direct-response skill — it has to create desire for something the prospect cannot see, touch, or taste before buying. The copy IS the product experience until they purchase.',
      },
      {
        heading: 'Launch Sequences That Generate Momentum',
        content:
          'Whether you are doing a live launch, an evergreen webinar, or a challenge funnel, the copy sequence is everything. I write launch sequences that build anticipation, establish authority, create urgency, and drive sales within a compressed window. Each email, each page, each touchpoint is carefully orchestrated to move the prospect closer to the buy button. My launch copy has generated millions in revenue for course creators, coaches, and digital product companies.',
      },
      {
        heading: 'Evergreen Systems That Scale',
        content:
          'Live launches are powerful but exhausting. The real money in info products is in evergreen sales systems that generate revenue 24/7 without constant launches. I build evergreen webinar funnels, automated email sequences, and sales pages designed to convert consistently over time — so you can scale without burning out. The best info product businesses run on systems, not sprints.',
      },
      {
        heading: 'High-Ticket Coaching and Program Copy',
        content:
          'High-ticket coaching programs and masterminds require a fundamentally different copywriting approach. The prospect is making a significant financial commitment, which means the copy needs to pre-qualify, build deep trust, demonstrate transformational value, and justify the investment — all before the sales call. The goal is to deliver prospects who are pre-sold before they ever speak to your sales team.',
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
          'A well-crafted webinar script is essentially a structured VSL with interaction points. I understand the timing, pacing, and persuasion architecture that makes webinars convert — from the hook that prevents early drop-off, through the teaching section that builds authority, to the transition and offer that drives action. Whether you are running live or evergreen, the script is the engine that powers the entire funnel.',
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
  },
]

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}

export function getAllVerticalSlugs(): string[] {
  return verticals.map((v) => v.slug)
}
