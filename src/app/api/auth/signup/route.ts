import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Self-registration is disabled. Please contact Stephine via WhatsApp to request access.',
      whatsappNumber: '+250798697053',
      instructions: 'Contact Stephine with your name to be added to Conversation Hub. She will provide you with a secret key.'
    },
    { status: 403 }
  )
}
