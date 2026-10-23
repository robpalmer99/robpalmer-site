import type { Metadata } from 'next'
import { AdLander, type LanderContent } from '@/components/landers/AdLander'

// ChatGPT ads lander for the "Creative Strategy 1" ad group: informed DTC
// brand owners and growth/performance marketers on Meta. Uses their language
// (Andromeda, fatigue, CPA, ROAS, angles, concepts). Unlisted, noindex, not in
// the sitemap. Copy lives in this file (approved by Rob before deploy).

export const metadata: Metadata = {
  title: { absolute: 'Creative Strategy That Beats Fatigue | Rob Palmer' },
  description:
    'Angles, hooks, scripts and finished ads from one senior creative strategist, fast enough to keep a Meta account fed. 300% and 340% ROAS campaigns.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://robpalmer.com/lp/ads' },
}

const content: LanderContent = {
  logoSubtitle: 'CREATIVE STRATEGIST',
  eyebrow: 'Creative strategy for DTC brands on Meta',
  headline: "Winners Fatigue in Weeks Now. Here's How to Keep Replacing Them With Better Ones.",
  subhead:
    "I'm Rob Palmer, a creative strategist with 40 years in direct response. I find the angles, write the hooks and scripts, and produce the ads myself, fast enough to keep your account fed with concepts that lift CTR and conversion rate.",
  ctaLabel: 'Book a Free 30-Minute Creative Call',
  metrics: [
    { value: '300%', label: 'ROAS on an email-driven health funnel' },
    { value: '340%', label: 'ROAS on Facebook cold traffic' },
    { value: '8%', label: 'cold-traffic conversion on a VSL funnel' },
    { value: '$523M', label: 'tracked over 9 years of new creative vs. the control' },
  ],
  sections: [
    {
      heading: 'Andromeda Changed What Scales',
      paragraphs: [
        "Since the Andromeda update, Meta matches ads to people by reading the creative itself. The algorithm does the targeting now. What it can't do is supply new ideas, and an account that feeds it more distinct concepts reaches more buyers.",
        'So a winner that used to run for a quarter fatigues in two or three weeks. CPA climbs, the scaling budget gets pulled, and no bid or audience change fixes it. The constraint has moved upstream, to how many strong angles you can get into the account and how fast.',
      ],
    },
    {
      heading: 'Why the Usual Fixes Stall',
      bullets: [
        'A strategist who writes briefs and hands them off. The editor cutting the ad never saw the customer research the angle came from.',
        'A copywriter who delivers one polished asset a month when the account needs a dozen tests.',
        'AI tools that produce the same hooks every other brand in your category is already running.',
      ],
      closing:
        "The brands that scale have one person who finds the angle and builds the ad at the pace the account demands. That's the job I do.",
    },
    {
      heading: 'What You Get Every Cycle',
      bullets: [
        'An angle map built from your reviews, support tickets, Reddit threads and competitor ads, ranked by awareness level',
        'New concepts on a steady cadence: hooks, UGC and talking-head scripts, statics with their copy, and AI-produced video',
        "Landers and advertorials that continue each ad's promise, so the click converts",
        'A read-out after every test: what won, why, and which angle to push next',
      ],
    },
  ],
  proofHeading: 'Creative That Has Already Paid for Itself',
  proofParagraphs: [
    'Ben Palmer, a ClickBank Platinum vendor, gets 300% ROAS on the health funnel I wrote for him. A story-driven page I wrote for Abundant took Facebook cold traffic to 340% ROAS. I have also written for funnels including the $40M Gluco 6 supplement.',
    'The testing habit goes back to Belron, where I spent nine years putting new creative up against the control. That campaign tracked $523 million in sales. Every number here came from paid traffic, where creative either pays for itself or gets turned off.',
  ],
  testimonialIds: ['4', '38', '15', '5', '18', '6'],
  steps: [
    {
      title: 'Book a free call',
      body: 'Pick a 30-minute slot below. Bring your current winners and their numbers, or ad account access if you prefer.',
    },
    {
      title: 'See the angles you are missing',
      body: "I'll show you the angles and hooks your account isn't testing yet. They're yours to keep, whether or not we work together.",
    },
    {
      title: 'Get a fixed quote',
      body: 'Retainer or project, scoped to your testing volume, with a fixed-price quote within 48 hours and no hourly billing.',
    },
  ],
  capacityNote:
    'I work every account personally, so the roster stays small. If the calendar below has a slot, it is open to you.',
  bookHeading: 'Book Your Free Creative Call',
  bookBody: 'Thirty minutes, no deck, no obligation. Pick a time that suits you.',
  calendlyCampaign: 'lp-ads',
}

export default function AdsLanderPage() {
  return <AdLander content={content} />
}
