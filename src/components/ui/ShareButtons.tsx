'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
  variant?: 'inline' | 'banner'
}

export function ShareButtons({ url, title, variant = 'inline' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (variant === 'banner') {
    return (
      <div className="mt-10 rounded-xl border border-gold-200 bg-gold-50/50 px-6 py-5">
        <p className="font-heading font-bold text-ink-950 text-lg mb-1">
          Found this useful?
        </p>
        <p className="text-sm text-ink-700 font-body mb-4">
          Share it with someone who could use it too.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-ink-950 px-4 py-2.5 text-sm font-heading font-semibold text-white transition-colors hover:bg-ink-800"
          >
            <XIcon />
            Post on X
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2.5 text-sm font-heading font-semibold text-white transition-colors hover:bg-[#004182]"
          >
            <LinkedInIcon />
            Share on LinkedIn
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2.5 text-sm font-heading font-semibold text-white transition-colors hover:bg-[#0C5DC7]"
          >
            <FacebookIcon />
            Share on Facebook
          </a>
          <a
            href={shareLinks.email}
            className="inline-flex items-center gap-2 rounded-lg border border-paper-300 bg-white px-4 py-2.5 text-sm font-heading font-semibold text-ink-800 transition-colors hover:bg-paper-50 hover:border-paper-400"
          >
            <EmailIcon />
            Email
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg border border-paper-300 bg-white px-4 py-2.5 text-sm font-heading font-semibold text-ink-800 transition-colors hover:bg-paper-50 hover:border-paper-400"
          >
            {copied ? <CheckIcon /> : <LinkIcon />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    )
  }

  // Inline variant — compact row for top of post
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-paper-600 font-heading mr-1">Share:</span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-paper-100 text-ink-700 transition-colors hover:bg-ink-950 hover:text-white"
        aria-label="Share on X (Twitter)"
      >
        <XIcon />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-paper-100 text-ink-700 transition-colors hover:bg-[#0A66C2] hover:text-white"
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-paper-100 text-ink-700 transition-colors hover:bg-[#1877F2] hover:text-white"
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </a>
      <a
        href={shareLinks.email}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-paper-100 text-ink-700 transition-colors hover:bg-gold-600 hover:text-white"
        aria-label="Share via email"
      >
        <EmailIcon />
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-paper-100 text-ink-700 transition-colors hover:bg-gold-600 hover:text-white"
        aria-label="Copy link"
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
    </div>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
