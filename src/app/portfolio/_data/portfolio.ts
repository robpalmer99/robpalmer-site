export interface PortfolioItem {
  title: string
  slug: string
  category: 'VSL' | 'Sales Page' | 'Email' | 'Hybrid'
  niche: string
  description: string
  image: string
  imageAlt: string
  result?: string
  client?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Weight-Loss VSL',
    slug: 'weight-loss-vsl',
    category: 'VSL',
    niche: 'Health',
    description:
      'High-converting video sales letter for a direct-to-consumer weight-loss supplement. Built on a problem-agitation-solution framework with a strong emotional hook and urgency-driven close.',
    image: '/images/portfolio/weight-loss-vsl.jpg',
    imageAlt: 'Woman stretching in a bright fitness studio — weight-loss VSL project',
    result: '8.2% cold traffic conversion',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Dynamic Brain',
    slug: 'dynamic-brain',
    category: 'Sales Page',
    niche: 'Health',
    description:
      'Long-form text sales page for a 40-compound nootropic from Stonehenge Health, written for readers over 50 who have noticed the first lapses. Names the condition, services the whole brain with one formulation, and closes on a 90-day guarantee.',
    image: '/images/portfolio/dynamic-brain.jpg',
    imageAlt: 'Abstract neural network illustration — Dynamic Brain VSL project',
    result: '$2.1M first 90 days',
    client: 'Stonehenge Health',
  },
  {
    title: 'Abundant',
    slug: 'abundant',
    category: 'Sales Page',
    niche: 'Health',
    description:
      'Long-form text sales page for a female hair-loss supplement. Story-driven lead, mechanism explained in the reader\'s own words, embedded social proof and a multi-tier offer.',
    image: '/images/portfolio/abundant.jpg',
    imageAlt: 'Laptop showing analytics dashboard — Abundant sales page project',
    result: '340% ROAS on Facebook',
  },
  {
    title: 'Monetari Fund',
    slug: 'monetari-fund',
    category: 'Sales Page',
    niche: 'Finance',
    description:
      'Compliant financial services sales page for a crypto investment education product. Navigated strict regulatory language while maintaining persuasive direct-response structure.',
    image: '/images/portfolio/monetari-fund.jpg',
    imageAlt: 'Stock market data on a trading screen — Monetari Fund sales page project',
    result: '5.7% opt-in to sale',
    client: 'Monetari',
  },
  {
    title: 'Puradrop',
    slug: 'puradrop',
    category: 'VSL',
    niche: 'Health',
    description:
      'Apple cider vinegar gummy supplement VSL targeting women over 40. Conversational script style with relatable storytelling, ingredient deep-dives, and scarcity elements.',
    image: '/images/portfolio/puradrop.jpg',
    imageAlt: 'Healthy supplements and natural ingredients — Puradrop VSL project',
    result: '300% ROAS',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Just Throw Some Sexy On It!',
    slug: 'just-throw-some-sexy-on-it',
    category: 'Sales Page',
    niche: 'Marketing',
    description:
      'Bold, personality-driven sales page for a marketing consulting offer. High-energy voice with pattern interrupts, proof stacking, and a premium positioning strategy.',
    image: '/images/portfolio/sexy-marketing.jpg',
    imageAlt: 'Team brainstorming marketing strategy around a whiteboard',
  },
  {
    title: 'Supernus',
    slug: 'supernus',
    category: 'VSL',
    niche: 'Health',
    description:
      'Pharmaceutical-grade supplement VSL focused on joint health and mobility. Clinical tone balanced with emotional storytelling to build credibility and urgency.',
    image: '/images/portfolio/supernus.jpg',
    imageAlt: 'Medical professional reviewing research data — Supernus VSL project',
    result: '$800K in 60 days',
  },
  {
    title: 'BodyHacker',
    slug: 'bodyhacker',
    category: 'VSL',
    niche: 'Health',
    description:
      'Biohacking and performance supplement VSL targeting men 25–45. Science-forward script with authority positioning, mechanism reveal, and testosterone-related hooks.',
    image: '/images/portfolio/bodyhacker.jpg',
    imageAlt: 'Athletic man training with weights — BodyHacker VSL project',
    result: '6.4% conversion rate',
  },
  {
    title: 'Coffee Slimmer Pro',
    slug: 'coffee-slimmer-pro',
    category: 'VSL',
    niche: 'Health',
    description:
      'Weight-loss coffee supplement VSL with a unique mechanism angle. Leveraged the familiarity of coffee drinking as a gateway to the supplement pitch with strong AOV optimization.',
    image: '/images/portfolio/coffee-slimmer.jpg',
    imageAlt: 'Artisan coffee cup on a wooden table — Coffee Slimmer Pro VSL project',
    result: '$1.4M in 6 months',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Biz-Op Hybrid Sales Page & VSL',
    slug: 'biz-op-hybrid',
    category: 'Hybrid',
    niche: 'Biz-Op',
    description:
      'Combined sales page and embedded VSL for a business opportunity offer. Full-funnel copy including the front-end page, upsell sequence, and email follow-up series.',
    image: '/images/portfolio/biz-op-hybrid.jpg',
    imageAlt: 'Entrepreneur working on laptop in a modern office — Biz-Op project',
    result: '4.8% front-end conversion',
  },
  {
    title: 'Red Oak Capital — Financial VSL',
    slug: 'red-oak-capital',
    category: 'VSL',
    niche: 'Finance',
    description:
      'Investment newsletter VSL for a financial publisher. Compliance-first copywriting with market analysis hooks, credibility stacking, and evergreen urgency mechanics.',
    image: '/images/portfolio/red-oak-capital.jpg',
    imageAlt: 'Financial charts and money management concept — Red Oak Capital project',
    result: '3.2% cold traffic conversion',
    client: 'Red Oak Capital',
  },
  {
    title: 'Chatterkick — SaaS Email Sequence',
    slug: 'chatterkick',
    category: 'Email',
    niche: 'SaaS',
    description:
      'Seven-email onboarding and conversion sequence for a social media management SaaS platform. Behavior-triggered messaging with case study integration and trial-to-paid optimization.',
    image: '/images/portfolio/chatterkick.jpg',
    imageAlt: 'Social media analytics dashboard on screen — Chatterkick email project',
    result: '22% trial-to-paid lift',
    client: 'Chatterkick',
  },
]

export const portfolioCategories = ['All', 'VSL', 'Sales Page', 'Email', 'Hybrid'] as const
export type PortfolioCategory = (typeof portfolioCategories)[number]

export function getPortfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === 'All') return portfolioItems
  return portfolioItems.filter((item) => item.category === category)
}

// `format` is deliberately a separate vocabulary from PortfolioItem.category:
// 'TSL' here is the same thing as 'Sales Page' on the cards. Never compare the two.
export interface FeaturedSample {
  slug: string
  title: string
  format: 'VSL' | 'TSL' | 'Email'
  market: string
  awareness: string
  angle: string
  excerpt: string
  docUrl: string
  result?: { text: string; source: string }
  testimonialId?: string
}

// Excerpts are verbatim from the Google Docs in the public portfolio folder.
// Only stage directions and markdown markup were removed. Do not edit the words.
export const featuredSamples: FeaturedSample[] = [
  {
    slug: 'puradrop',
    title: 'Puradrop',
    format: 'VSL',
    market: 'Weight-loss gummy, sold on ClickBank to cold Facebook traffic',
    awareness: 'Problem-aware women over 40 who have failed on diets and distrust supplements',
    angle: 'Open on the worst public humiliation the reader can picture, then make the husband the narrator so the promise arrives from someone who loves her.',
    excerpt: `Flight attendant: “For the last time, madam, you must leave the plane immediately.”

Jane: “But I don’t understand…I’m going on vacation. You can’t throw me off. What’s going on?

Flight attendant: “Like I said, it’s your size. You’re too large for one seat, and there’s no spare one for you to purchase.”

Passenger #1: “She’s saying you’re too fat to fly, Tubby! And she’s right!”

Jane: “Hey, no—that’s not fair. I’ve paid for my ticket, so I’m staying here.”

Flight attendant: “If you won’t leave, madam, the police will deal with you.”

Passenger #2: “Quite right. Get rid of the jelly-belly. She’ll make us crash.”

Passenger #3: “Eww…she’s gross. If I was married to her, I’d file for divorce.”

Passenger #1: “Fancy letting yourself go like that. I’ve seen smaller whales.”

Police officer: “Now madam, will you come quietly or will I have to arrest you?”

Passenger #2: “Yeah, lock her up for being too fat and ugly!”

Passenger #3: “And throw away the key! My God, she’s disgusting.”

Jane: “Leave me alone, please. I just want to go on vacation.”

Police officer: “Mam’ as you are resisting, you give me no choice. I’ll have to handcuff you and escort you off the plane…”

John - Narrator:

For my wife Jane and I, that was the most embarrassing day of our lives by far. It was awful! I cringe when I think of Jane being dragged off the plane, with passengers hurling abuse as we went. She was a pitiful sight, tears streaming down her cheeks, hands cuffed behind her back, humiliation written all over her face.

All because she was just too fat.`,
    docUrl: 'https://docs.google.com/document/d/1gktpwcfYt4iYMLoxkEooLsQJfoqTvEAYrcWC5iI2V9g/edit?usp=sharing',
    result: { text: '300% return on ad spend', source: 'Client testimonial, below' },
    testimonialId: '4',
  },
  {
    slug: 'coffee-slimmer-pro',
    title: 'Coffee Slimmer Pro',
    format: 'VSL',
    market: 'Weight-loss supplement, sold on ClickBank to cold traffic',
    awareness: "Problem-aware. She's tried diets and exercise and is skeptical of the next miracle",
    angle: 'A child says out loud what the reader fears everyone thinks. The ex-Marine narrator earns trust by being ordinary, and the 30-second-a-day promise is in the headline before the story starts.',
    excerpt: `Hidden Jungle Potion Melts 56 LBS of Fat

(Takes Just 30 seconds a day)

A young voice yelled, “Mommy, NO!!!”

I turned and saw our son Tommy standing, glaring at my wife, Sandra...horrified. He had witnessed everything. Tears welled up in his eyes, humiliation written all over his face.

“Oh, Mommy!” he cried. “Why do you have to be so...FAT!”

With everyone at the party staring, that was the last straw—the final blow. Sandra’s eyes glazed over as she realized she’d ruined the 4th of July—for me, for Tommy...and everyone. It was too much to take, and she collapsed heavily to the floor, unconscious.

I yelled, “Quick! Somebody Call 911…NOW!”

“Hurry, or it will be too late…”

Hi...my name is Ross Robinson, and I’m an ex-Marine from Cedar Falls, Iowa. I’m just a regular guy, but I have an extraordinary story to tell. Honestly, you’ll be amazed when you hear what I have to share. As you’ll soon see, Sandra survived, thank God. And thanks to a strange twist of fate, that disastrous day changed everything.

Because of what happened next, Sandra was never going to be humiliated again—ever! In fact, a wonderful new chapter in her life was just beginning.`,
    docUrl: 'https://docs.google.com/document/d/15Q-4Dw_6UHEnvoNJ2AjcxgMx0GcrNJ33FFqUsv65_50/edit?usp=sharing',
    result: { text: '$1.4M in sales in the first six months', source: 'Client-reported' },
  },
  {
    slug: 'dynamic-brain',
    title: 'Dynamic Brain',
    format: 'TSL',
    market: 'Nootropic supplement for Stonehenge Health, sold direct',
    awareness: 'Readers over 50 noticing the first lapses, solution-aware, wary of single-ingredient pills',
    angle: 'Name the condition doctors use, then make the one-ingredient competitors the problem. The car-service analogy lets a 40-compound formula feel like common sense instead of a kitchen sink.',
    excerpt: `Think Smarter: Discover the Proven All-in-One Solution for Sharper Memory, Enhanced Focus & Improved Mental Energy

Banish Brain Fog, Confusion, ‘Senior Moments’ & Memory Loss!

Restore Your Brain to Optimal Health the Easy Way

As we age, the gradual mental decline becomes a real concern. Maybe you’re finding it harder to concentrate. Perhaps you forget appointments, where you left your keys—or even the names of your loved ones.

Even minor memory lapses can be scary, especially as they suggest bigger problems further down the road. With each new day, you are at greater risk of suffering from brain fog, confusion, and loss of focus.

It’s a problem that doctors call Mild Cognitive Decline. But when you suffer from this condition, it doesn’t seem mild at all. In fact, it’s a serious problem that threatens your health and your future happiness.

Left unchecked, the prognosis doesn’t look good. The decline in brain health is likely to continue, leading to further mental chaos—and then perhaps to more serious brain conditions.

That’s an alarming prospect. But fortunately, it doesn’t have to be that way. Thanks to today’s innovative supplement science, you can replenish your brain health and regain your confidence. Better still, the solution is simple and easy to implement.`,
    docUrl: 'https://docs.google.com/document/d/1QRAtR5FMZ4sqLkQt4LkzfF_1NcoLCqO8EP_efBWk1yo/edit?usp=sharing',
    result: { text: '$2.1M in sales in the first 90 days', source: 'Client-reported' },
  },
  {
    slug: 'gluco6',
    title: 'Gluco6',
    format: 'VSL',
    market: 'Blood-sugar supplement, sold to cold traffic',
    awareness: 'Newly diagnosed or pre-diabetic, problem-aware, frightened by what the doctor said',
    angle: 'Start inside the consultation the reader has already had or dreads. The grandson gives the stakes a face, and the betrayal by a trusted doctor turns fear into the reason to keep watching.',
    excerpt: `“The bad news is you’re a full-blown diabetic now. You’ll have to inject yourself four times a day for the rest of your life.”

For the doctor, it was just another patient diagnosis. But for me, it felt like a death sentence. My life had just changed forever, and not in a good way.

As the doctor continued, my hopes for a healthy retirement drained away.

“Of course, you’ll need extra medications, too. And you must take them every day, exactly as directed. Otherwise, you could go blind, have your legs amputated, or suffer an early death.”

Each word he spoke struck another blow to my dreams. I’d planned to spend my golden years having fun with Ethan, my young grandson. I wanted us to shoot hoops, go fishing, and watch Super Bowls together.

Instead, I was looking down the barrel of a gun, staring sickness and death in the face. Next time Ethan came to see me, it could be at my hospital bedside…

…maybe even my graveside…

Yet as strange as it may sound, I thank God every day that happened.

Because it led me to uncover a leading cause of erratic blood sugar levels, insatiable carb cravings, and stubborn body fat.

And find a simple Sudanese secret that reversed my diabetes symptoms…

…rocketed my energy levels…

…and burned fat faster than I thought possible.

Yet my own doctor, who I trusted, never mentioned ANY of this. And your doctor is likely keeping the truth from you, too.

So it's vital you hear this.`,
    docUrl: 'https://docs.google.com/document/d/1--Nn_5yi62Xl8MS0GhxnqNDfUuzBfCfqflr7wV9OlQ8/edit?usp=sharing',
  },
  {
    slug: 'supernus',
    title: 'Supernus Business & Law Center',
    format: 'TSL',
    market: 'Legal and business-structure masterclass for new entrepreneurs',
    awareness: "Unaware of the risk. They're excited about starting a business and haven't thought about losing it",
    angle: 'A true crime story carries a dry subject. The headline promises a method, the first line tells the reader to stop, and the founder\'s own near-death sets up every objection the course answers.',
    excerpt: `How Narrowly Escaping a Cold-Blooded Killer (and Being Swindled Out of My $12 Million Fortune) Taught Me the ‘4 Crucial Cornerstones of Success'

...plus how to leverage these to make more, keep more and be more without risking everything

Dear Fellow Entrepreneur

If you’re about to start a business or form a company, I urge you to STOP!

...or at least pause for a moment while you hear my shocking and cautionary tale. Because when you understand the horrors I went through, you’ll see how important it is to launch your business the right way.

My story is stunning, yet absolutely true - and you don’t have to take my word for that. Google my name, Jedediah McClure, and you can check the details for yourself.

This tale is a rollercoaster ride that begins in the cash-rich bonanza of the North Dakota oil-boom. It ends a few years later with a ruthless killer jailed on multiple counts of murder.

And it’s only by the grace of God that my life was spared.

As my story unfolds, you’ll see how setting up my business the wrong way cost me everything. More importantly, you’ll discover how to avoid making the same mistakes—and how to put yourself on track for unstoppable success.

So hitch a ride with me to the Indian Reservation on the Dakota Prairie where my terrifying dance with death unfolded…`,
    docUrl: 'https://docs.google.com/document/d/153ICZuipLSMgfjH11K20BrFWsw6o9DVKGp3xsLpI28o/edit?usp=sharing',
    result: { text: '$800K in sales in 60 days', source: 'Client-reported' },
  },
  {
    slug: 'anna-frummerin-follow-up',
    title: 'Webinar Follow-Up Sequence',
    format: 'Email',
    market: 'Coaching offer. Seven emails to people who watched the webinar and did not book a call',
    awareness: 'Solution-aware and warm, but stalled. They liked the training and have not acted',
    angle: 'Short emails, one job each: get the booking. Subject lines read like a friend, every email ends on the link, and the seventh brings in a second voice so the chase stays human.',
    excerpt: `Email #1

Subject: book your strategy session

Hi Firstname

I’m so glad you were able to join us for my free training, and I hope you were inspired to make big changes.

I love seeing people smile when they realize they really can win big at the game of life. I want to make that happen for you, too. So be sure to book your free strategy session while you still can.

It only takes a moment, and you’ll get a whole hour of my time and expert advice. We’ll work out the best way forward for you and set you on track to become a champion.

See you on the call!

Best wishes

Anna Frummerin

P.S. My calendar is filling up fast, so be sure to book soon.

Email #2

Subject: quick question

Hi Firstname

Just a quick question about your strategy session. Did you book it yet?

I can’t see your name on my calendar, and I don’t want you to miss out. As you learned in our training session, you have a unique opportunity to discover the hidden champion inside you and win big at the game of life.

Remember to book your strategy session, so we can talk things through and start you on the road to success. This is your chance to finally break through and get what you want from life.

Other people are booking now, so secure your call with me while you still can.`,
    docUrl: 'https://docs.google.com/document/d/1KcbZ-6WJaG1XsrkGIO1olIEUxhjCnzIDvHO3G4XsAqo/edit?usp=sharing',
  },
]
