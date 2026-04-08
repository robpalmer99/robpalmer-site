declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Google Analytics 4 event tracking utilities.
 *
 * Events marked as key events in GA4:
 * - calendly_click  (Calendly widget interaction / booking scheduled)
 * - contact_form_submit (contact form successfully sent)
 * - cta_click (CTA button clicks — "Book a Call" etc.)
 */

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...(args as Parameters<typeof window.gtag>))
  }
}

export function trackEvent({ action, category, label, value }: GtagEvent) {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

export function trackCalendlyClick(eventType: string) {
  trackEvent({
    action: 'calendly_click',
    category: 'engagement',
    label: eventType,
  })
}

export function trackContactFormSubmit() {
  trackEvent({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_page',
  })
}

export function trackCTAClick(label: string) {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label,
  })
}
