'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { CALENDLY_URL } from '@/lib/constants'
import { trackCalendlyClick } from '@/lib/analytics'

const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[660px] bg-paper-100 rounded-xl animate-pulse flex items-center justify-center">
        <p className="text-paper-400 font-heading text-sm">Loading calendar...</p>
      </div>
    ),
  }
)

interface CalendlyEmbedProps {
  url?: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
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
      <InlineWidget
        url={url || CALENDLY_URL}
        styles={{ height: '660px' }}
      />
    </div>
  )
}
