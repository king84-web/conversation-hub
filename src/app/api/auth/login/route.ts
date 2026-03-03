import { NextRequest, NextResponse } from 'next/server'
import { findUserByName } from '@/lib/db'

interface LoginRequest {
  name: string
  secretKey: string
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.secretKey) {
      return NextResponse.json(
        { error: 'Name and secret key are required' },
        { status: 400 }
      )
    }

    // Find user in DB
    const user = await findUserByName(body.name)
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check secret key
    if (user.secretKey !== body.secretKey) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Generate token
    const token = Buffer.from(`${user.name}:${user.id}:${Date.now()}`).toString('base64')
    const userId = user.id

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        token: token,
        userId: userId,
        userName: user.name
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}
