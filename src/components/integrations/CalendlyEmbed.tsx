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
    let idleId: number | undefined
    let timeoutId: number | undefined
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
    function handleCalendlyEvent(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        trackCalendlyClick('event_scheduled')
      } else if (e.data?.event === 'calendly.date_and_time_selected') {
        trackCalendlyClick('date_and_time_selected')
      } else if (e.data?.event === 'calendly.event_type_viewed') {
        trackCalendlyClick('event_type_viewed')
      }
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
