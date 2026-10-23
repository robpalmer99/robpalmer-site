import type { Metadata } from 'next'
import { AdLander, type LanderContent } from '@/components/landers/AdLander'

// ChatGPT ads lander for the "Copywriting 1" ad group: regular business owners
// (service firms, local businesses, small online stores) whose ads, pages,
// letters and emails don't convert. Unlisted, noindex, not in the sitemap.
// Copy lives in this file (approved by Rob before deploy).

export const metadata: Metadata = {
  title: { absolute: 'Copy That Turns Strangers Into Customers | Rob Palmer' },
  description:
    'Website copy, ads, sales letters and emails that turn strangers into customers, for new businesses and stalled marketing alike. 40 years, $523M tracked.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://robpalmer.com/lp/copy' },
}

const content: LanderContent = {
  logoSubtitle: 'DIRECT-RESPONSE COPYWRITER',
  eyebrow: "For business owners launching, or stuck with marketing that doesn't sell",
  headline: 'Get More Leads, More Customers, and More Sales From Your Marketing',
  subhead:
    "Whether you're launching with nothing yet or paying for marketing that isn't working, the words decide who buys. Get them right, and every ad, page, letter and email you put out brings in more customers.",
  ctaLabel: 'Get My Free Copy Review',
  metrics: [
    { value: '8%', label: "of cold visitors buying from one client's sales page" },
    { value: '340%', label: "return on ad spend from one client's Facebook campaign" },
    { value: '300%', label: 'return on ad spend for a long-running client funnel' },
    { value: '$523M', label: "in sales from one client's 9-year mail campaign" },
  ],
  sections: [
    {
      heading: 'Sound Familiar?',
      bullets: [
        "You're about to launch, staring at a blank page with no website copy or ads, and you're not sure what to say first.",
        "You've spent months building the business, and the marketing still feels like a guess.",
        "You're spending on ads every month, and the phone isn't ringing any faster.",
        'People visit your website and leave without calling, booking or buying.',
        'You had ChatGPT write it, and now it sounds like everyone else.',
      ],
      closing:
        "Whether you're starting out or stuck, the words are what turn interest into customers.",
    },
    {
      heading: 'What Changes When Your Copy Starts Selling',
      bullets: [
        'You launch with marketing that sells from day one, instead of learning by burning cash.',
        'More of the people who see your ads and pages call, book or buy.',
        'Your cost per customer drops, so every marketing dollar brings back more.',
        'Leads arrive already convinced, so sales calls are shorter and close more often.',
        "Follow-up emails win back the people who weren't ready the first time.",
        'You stop guessing what to say and get back to running your business.',
      ],
    },
    {
      heading: 'How the Words Get Written',
      paragraphs: [
        'It starts with your customers: what they want, what worries them, and the exact words they use for both. Then your website, ads, letters and emails get written to speak to that, prove you can deliver, and give people a clear reason to act now.',
        "Launching? You get marketing words that work together from the first day. Already running marketing? The new copy works on the traffic you have, without a bigger ad budget or a new website.",
      ],
    },
  ],
  proofHeading: 'What It Looked Like for Other Business Owners',
  proofParagraphs: [
    "An Italian business owner ran the new ads and wrote back that the leads were \u201cperfect: happy to answer the phone and very cooperative.\u201d Another client's sales page now turns 8% of cold visitors into buyers. And a direct-mail campaign I wrote for Safelite's parent company ran for nine years and brought in $523 million in tracked sales.",
    'In every case the business was already good. The copy is what turned it into customers.',
  ],
  testimonialIds: ['38', '13', '11', '5', '1', '14'],
  steps: [
    {
      title: 'Book a free call',
      body: "Pick a 30-minute slot below. Tell me what you're launching, or send the page, ad, letter or email that isn't bringing in enough customers.",
    },
    {
      title: 'Get a clear plan',
      body: "You'll leave knowing what to say first if you're launching, or where you're losing customers if you're not. That advice is yours to keep, whether or not we work together.",
    },
    {
      title: 'Get a fixed price',
      body: "If you want me to write it, you'll have a fixed-price quote within 48 hours. Revisions included, no hourly billing.",
    },
  ],
  capacityNote:
    "I write every project myself, so I only take on a few at a time. If you see an open slot below, it's yours.",
  bookHeading: 'Book Your Free Copy Review',
  bookBody: "Thirty minutes, free, no obligation. You'll leave knowing what to write or fix first.",
  calendlyCampaign: 'lp-copy',
}

export default function CopyLanderPage() {
  return <AdLander content={content} />
}
