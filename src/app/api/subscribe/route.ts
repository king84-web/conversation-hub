import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // attempt Mailchimp subscription if keys present
    const mailchimpKey = process.env.MAILCHIMP_API_KEY || ''
    const mailchimpList = process.env.MAILCHIMP_AUDIENCE_ID || ''

    if (mailchimpKey && mailchimpList) {
      try {
        const dc = mailchimpKey.split('-').pop() // datacenter code
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpList}/members`
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey ${mailchimpKey}`
          },
          body: JSON.stringify({ email_address: email, status: 'subscribed' })
        })
        if (!res.ok) {
          console.warn('Mailchimp subscribe failed', await res.text())
        }
      } catch (err) {
        console.error('Mailchimp integration error', err)
      }
    } else {
      console.log('subscriber (no mailchimp):', email)
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter',
    })
  } catch (error) {
    console.error('Subscribe error', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
