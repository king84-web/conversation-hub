import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Flutterwave checkout initialization
    const checkoutData = {
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
      tx_ref: `TXN-${Date.now()}`,
      amount: process.env.PRODUCT_PRICE || '5000',
      currency: 'RWF',
      payment_options: 'card,mobilemoneyghana,ussd',
      customer: {
        email: 'customer@example.com',
        name: 'Customer Name',
        phonenumber: '250798697053',
      },
      meta: {
        consumer_id: 7992,
        consumer_mac: '92a8d9f47d528',
      },
      customizations: {
        title: 'Conversation Hub - Cards',
        description: 'Purchase conversation cards',
        logo: 'https://res.cloudinary.com/example/image.png',
      },
    }

    return NextResponse.json(checkoutData)
  } catch (error) {
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
