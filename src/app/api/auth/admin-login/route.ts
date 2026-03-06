import { NextRequest, NextResponse } from 'next/server'
import { validateAdminCredentials, initializeDatabase } from '@/lib/db'

interface AdminLoginRequest {
  password: string
}

export async function POST(request: NextRequest) {
  try {
    // Initialize database on first admin access
    await initializeDatabase()

    const body: AdminLoginRequest = await request.json()

    if (!body.password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    // Validate admin credentials (checks env var + dynamic admins)
    const isValid = await validateAdminCredentials(body.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid admin password' },
        { status: 401 }
      )
    }

    // Create admin token
    const adminToken = Buffer.from(`admin:${Date.now()}`).toString('base64')

    return NextResponse.json(
      {
        success: true,
        message: 'Admin login successful',
        adminToken: adminToken
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { error: 'An error occurred during admin login' },
      { status: 500 }
    )
  }
}
