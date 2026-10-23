'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { CALENDLY_URL } from '@/lib/constants'
import { trackCalendlyClick } from '@/lib/analytics'

const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => <CalendarPlaceholder />,
  }
)

function CalendarPlaceholder() {
  return (
    <div className="min-h-[660px] bg-paper-100 rounded-xl animate-pulse flex items-center justify-center">
      <p className="text-paper-600 font-heading text-sm">Loading calendar...</p>
    </div>
  )
}

interface CalendlyEmbedProps {
  url?: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  // Calendly pulls ~2.6MB of assets. Mounting it eagerly starves hydration
  // on mobile (12s LCP on /call before this change). Defer to the idle gap
  // after window load, or the first user interaction — whichever first.
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    let armed = false
    let idleId: number | undefined = undefined
    let timeoutId: number | undefined = undefined
    let safetyId: number | undefined = undefined
    const interactionEvents: (keyof WindowEventMap)[] = [
      'pointerdown',
      'keydown',
      'scroll',
    ]

    const mount = () => {
      if (armed) return
      armed = true
      cleanup()
      setShouldMount(true)
    }

    const onLoad = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(mount, { timeout: 2000 })
      } else {
        timeoutId = (window as Window).setTimeout(mount, 1500)
      }
    }

    function cleanup() {
      interactionEvents.forEach((e) => window.removeEventListener(e, mount))
      window.removeEventListener('load', onLoad)
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
      if (safetyId !== undefined) window.clearTimeout(safetyId)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }
    interactionEvents.forEach((e) =>
      window.addEventListener(e, mount, { once: true, passive: true })
    )
    // Belt-and-braces: if the load event never fires (hung subresource) and
    // the user never interacts, the calendar must still appear — this page's
    // entire purpose is the calendar.
    safetyId = window.setTimeout(mount, 4000)
    return cleanup
  }, [])

  useEffect(() => {
    // Calendly's embed posts every lifecycle message twice (verified
    // 2026-10-23: two identical `calendly.event_type_viewed` posts from
    // https://calendly.com per widget load), which doubled every
    // calendly_click count in GA4. Each event is reported once per mount;
    // a booking can only be scheduled once per widget anyway.
    const reported = new Set<string>()
    function handleCalendlyEvent(e: MessageEvent) {
      // Only Calendly's iframe may drive conversion events — any page can
      // postMessage to an open tab, which would pollute GA booking data.
      if (!e.origin.endsWith('.calendly.com') && e.origin !== 'https://calendly.com') {
        return
      }
      const name = e.data?.event
      if (
        name !== 'calendly.event_scheduled' &&
        name !== 'calendly.date_and_time_selected' &&
        name !== 'calendly.event_type_viewed'
      ) {
        return
      }
      if (reported.has(name)) return
      reported.add(name)
      trackCalendlyClick(name.replace('calendly.', ''))
    }
    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  return (
    <div className="min-h-[660px]">
      {shouldMount ? (
        <InlineWidget
          url={url || CALENDLY_URL}
          styles={{ height: '660px' }}
          pageSettings={{ hideGdprBanner: true }}
        />
      ) : (
        <CalendarPlaceholder />
      )}
    </div>
  )
}
