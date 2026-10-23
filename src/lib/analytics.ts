declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    oaiq?: (...args: unknown[]) => void
  }
}

/**
 * Conversion tracking utilities.
 *
 * Every helper reports to GA4 (gtag) and, when the OpenAI Ads pixel is
 * configured (NEXT_PUBLIC_OPENAI_PIXEL_ID), mirrors the conversion to
 * OpenAI so ChatGPT ad clicks can be attributed to bookings and enquiries.
 *
 * Events marked as key events in GA4:
 * - calendly_click  (Calendly widget interaction / booking scheduled)
 * - contact_form_submit (contact form successfully sent)
 * - cta_click (CTA button clicks — "Book a Call" etc.)
 *
 * OpenAI standard events used:
 * - appointment_scheduled (Calendly booking confirmed)
 * - lead_created (contact form sent)
 */

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

type OpenAIEvent = 'appointment_scheduled' | 'lead_created'

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...(args as Parameters<typeof window.gtag>))
  }
}

/**
 * Report a conversion to the OpenAI Ads pixel. No-op when the pixel is not
 * installed (the layout only loads it when NEXT_PUBLIC_OPENAI_PIXEL_ID is set).
 * Both events are customer actions in OpenAI's taxonomy.
 */
export function trackOpenAIConversion(event: OpenAIEvent) {
  if (typeof window !== 'undefined' && typeof window.oaiq === 'function') {
    window.oaiq('measure', event, { type: 'customer_action' })
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
  if (eventType === 'event_scheduled') {
    trackOpenAIConversion('appointment_scheduled')
  }
}

export function trackContactFormSubmit() {
  trackEvent({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_page',
  })
  trackOpenAIConversion('lead_created')
}

export function trackCTAClick(label: string) {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label,
  })
}
