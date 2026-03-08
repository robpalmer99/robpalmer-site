export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://robpalmer.com'
export const SITE_NAME = 'Rob Palmer'
export const SITE_TITLE = 'Rob Palmer | Direct-Response Copywriter'
export const SITE_DESCRIPTION =
  'Direct-response copywriter and conversion strategist with $523M+ in tracked results. AI-powered funnels, VSLs, email sequences, and campaigns for ClickBank & DTC brands.'

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/rob-palmer-call'
export const CONTACT_EMAIL = 'rob@robpalmer.com'
export const CONTACT_PHONE = '(415) 854-9589'

type NavLink = { readonly label: string; readonly href: string }
type NavDropdown = { readonly label: string; readonly children: readonly NavLink[] }
export type NavItem = NavLink | NavDropdown

export const NAV_LINKS: readonly NavItem[] = [
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
