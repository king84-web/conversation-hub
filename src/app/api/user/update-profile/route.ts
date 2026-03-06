import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken, updateUser } from '@/lib/db'

interface UpdateProfileRequest {
  name?: string
  password?: string
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.substring(7) // Remove 'Bearer '
    const user = await verifyUserToken(token)
    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body: UpdateProfileRequest = await request.json()

    // Validate input
    if (!body.name && !body.password) {
      return NextResponse.json({ error: 'At least one field (name or password) must be provided' }, { status: 400 })
    }

    if (body.name && body.name.trim().length === 0) {
      return NextResponse.json({ error: 'Name cannot be empty' }, { status: 400 })
    }

    if (body.password && body.password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    // Update user
    const updatedUser = await updateUser(user.id, body.name, body.password)
    if (!updatedUser) {
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: updatedUser.id,
        name: updatedUser.name
      }
    })
  } catch (error) {
    console.error('Update profile error:', error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}