'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg aria-hidden="true" className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-lg font-bold text-ink-950 mb-2">Message Sent</h3>
        <p className="text-paper-600 font-body">
          Thanks for reaching out. I&apos;ll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-heading text-sm font-medium text-ink-950 mb-1.5">
            Name <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-paper-200 bg-white text-ink-950 font-body text-sm transition-shadow"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-heading text-sm font-medium text-ink-950 mb-1.5">
            Email <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg border border-paper-200 bg-white text-ink-950 font-body text-sm transition-shadow"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block font-heading text-sm font-medium text-ink-950 mb-1.5">
          Subject <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          aria-required="true"
          className="w-full px-4 py-3 rounded-lg border border-paper-200 bg-white text-ink-950 font-body text-sm transition-shadow"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-heading text-sm font-medium text-ink-950 mb-1.5">
          Message <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-paper-200 bg-white text-ink-950 font-body text-sm transition-shadow resize-y"
          placeholder="Tell me about your project..."
        />
      </div>
      <div>
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
        <div aria-live="assertive" role="alert">
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-500 font-body">
              Something went wrong. Please try again or book a call instead.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
