// lib/notifications.ts
// Placeholder utilities for sending emails and WhatsApp messages.
// Using Resend for email: https://resend.com/
// Using Twilio for WhatsApp messages.

const resendApiKey = process.env.RESEND_API_KEY || ''
const twilioSid = process.env.TWILIO_SID || ''
const twilioToken = process.env.TWILIO_TOKEN || ''
const twilioWhatsAppFrom = process.env.TWILIO_WHATSAPP_FROM || '' // e.g. 'whatsapp:+1234567890'

export async function sendEmail(to: string, subject: string, html: string) {
  if (!resendApiKey) {
    console.log('Email not sent (no API key):', to, subject)
    return
  }

  try {
    // Dynamic import to avoid bundling in browser
    const ResendModule = await import('resend')
    const Resend = ResendModule.default
    const resend = new Resend(resendApiKey)
    await resend.emails.send({
      from: 'no-reply@conversationhub.com',
      to,
      subject,
      html
    })
  } catch (err) {
    console.error('Email send error', err)
  }
}

export async function sendWhatsApp(toNumber: string, message: string) {
  if (!twilioSid || !twilioToken || !twilioWhatsAppFrom) {
    console.log('WhatsApp not sent (missing config):', toNumber, message)
    return
  }

  try {
    // Dynamic import to avoid bundling in browser
    const TwilioModule = await import('twilio')
    const twilio = TwilioModule.default
    const client = twilio(twilioSid, twilioToken)
    await client.messages.create({
      from: twilioWhatsAppFrom,
      to: toNumber,
      body: message
    })
  } catch (err) {
    console.error('WhatsApp send error', err)
  }
}