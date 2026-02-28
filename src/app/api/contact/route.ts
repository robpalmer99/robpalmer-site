import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ---------- Rate limiting (in-memory, per-IP) ----------
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // max requests per window

const ipRequests = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()

  // Evict stale IPs on each call (cheap for a contact form's traffic)
  for (const [key, ts] of ipRequests) {
    if (ts.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) ipRequests.delete(key)
  }

  const timestamps = (ipRequests.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  )
  if (timestamps.length >= RATE_LIMIT_MAX) {
    ipRequests.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  ipRequests.set(ip, timestamps)
  return false
}

// ---------- Validation helpers ----------
const MAX_NAME = 200
const MAX_EMAIL = 254
const MAX_SUBJECT = 300
const MAX_MESSAGE = 5_000

function isNonEmptyString(val: unknown): val is string {
  return typeof val === 'string' && val.trim().length > 0
}

export async function POST(request: Request) {
  // Rate-limit by IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const { name, email, subject, message, website } = body as Record<
      string,
      unknown
    >

    // Honeypot: if 'website' field has a value, it's a bot
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Type + presence checks
    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(subject) ||
      !isNonEmptyString(message)
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Length limits
    if (name.length > MAX_NAME) {
      return NextResponse.json(
        { error: `Name must be ${MAX_NAME} characters or fewer` },
        { status: 400 }
      )
    }
    if (email.length > MAX_EMAIL) {
      return NextResponse.json(
        { error: `Email must be ${MAX_EMAIL} characters or fewer` },
        { status: 400 }
      )
    }
    if (subject.length > MAX_SUBJECT) {
      return NextResponse.json(
        { error: `Subject must be ${MAX_SUBJECT} characters or fewer` },
        { status: 400 }
      )
    }
    if (message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE.toLocaleString()} characters or fewer` },
        { status: 400 }
      )
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedSubject = subject.trim()
    const trimmedMessage = message.trim()

    await resend.emails.send({
      from: 'Rob Palmer Website <contact@robpalmer.com>',
      to: 'rob@gofreelance.com',
      replyTo: trimmedEmail,
      subject: `[Website] ${trimmedSubject}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\n${trimmedMessage}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
