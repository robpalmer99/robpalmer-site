export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://robpalmer.com'
export const SITE_TITLE = 'Rob Palmer | Creative Strategist & Direct-Response Copywriter'
export const SITE_DESCRIPTION =
  'Creative strategist and direct-response copywriter with $523M+ in tracked results. Angles, hooks, scripts, statics and landers for DTC brands scaling on Meta, plus VSLs, sales pages and funnels.'

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/rob-palmer-call/30min'
export const CONTACT_EMAIL = 'rob@robpalmer.com'

type NavLink = { readonly label: string; readonly href: string }
type NavDropdown = { readonly label: string; readonly children: readonly NavLink[] }
export type NavItem = NavLink | NavDropdown

export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Creative Strategy', href: '/services/creative-strategist' },
  { label: 'Services', href: '/services' },
  {
    label: 'Experience',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Verticals', href: '/verticals' },
    ],
  },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export const FORTUNE_500_CLIENTS = [
  'Apple',
  'IBM',
  'Microsoft',
  'Citibank',
  'Morgan Stanley',
] as const

import { testimonials } from '@/content/testimonials'
export const TESTIMONIAL_COUNT = `${testimonials.length}+`

export const STATS = [
  { value: '$523M+', label: 'In Tracked Revenue' },
  { value: '5', label: 'Fortune 500 Clients' },
  { value: TESTIMONIAL_COUNT, label: 'Client Testimonials' },
  { value: '100s', label: 'Of Successful Projects' },
]
