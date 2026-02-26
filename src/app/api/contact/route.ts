import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, website } = await request.json()

    // Honeypot: if 'website' field has a value, it's a bot
    if (website) {
      // Return success to bots so they don't retry
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // For now, log the submission. In production, integrate with:
    // - Resend (recommended for Vercel): https://resend.com
    // - SendGrid, Mailgun, or similar
    // - Or a webhook to Zapier/Make
    console.log('Contact form submission:', { name, email, subject, message })

    // TODO: Send email notification
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@robpalmer.com',
    //   to: 'rob@robpalmer.com',
    //   subject: `[Website] ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
