import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // TODO: Integrate with Mailchimp or ConvertKit
    // For now, just return success
    console.log('Email subscriber:', email)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter',
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
