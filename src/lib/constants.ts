export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://robpalmer.com'
export const SITE_NAME = 'Rob Palmer'
export const SITE_TITLE = 'Rob Palmer | Direct-Response Copywriter'
export const SITE_DESCRIPTION =
  'Veteran direct-response copywriter with $523M+ in tracked results. Specializing in VSLs, TSLs, email sequences, and sales funnels for ClickBank & DTC brands.'

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/rob-palmer-call'
export const CONTACT_EMAIL = 'rob@robpalmer.com'
export const CONTACT_PHONE = '(415) 854-9589'

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const

export const FORTUNE_500_CLIENTS = [
  'Apple',
  'IBM',
  'Microsoft',
  'Citibank',
  'Morgan Stanley',
] as const

export const STATS = [
  { value: '$523M+', label: 'In Tracked Revenue' },
  { value: '30+', label: 'Years of Experience' },
  { value: '36+', label: 'Client Testimonials' },
  { value: '9', label: 'Year Campaign Run' },
] as const
