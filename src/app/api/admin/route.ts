import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllUsers,
  addUser,
  deleteUser,
  resetUserSecretKey,
  getMessages, 
  updateMessageStatus,
  getDashboardStats,
  addMessage,
  addCard,
  addPromo,
  updateSettings,
  getCards,
  getPromos,
  getSettings,
  deleteCard,
  deletePromo,
  validateAdminCredentials,
  initializeDatabase,
  getAdmins,
  addAdmin,
  deleteAdmin
} from '@/lib/db'
import { sendEmail } from '@/lib/notifications'

// Middleware to check admin token
function validateAdminToken(request: NextRequest): boolean {
  const token = request.headers.get('x-admin-token')
  if (!token) return false
  
  try {
    // Decode the base64 token to check if it starts with 'admin:'
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    return decoded.startsWith('admin:')
  } catch (e) {
    return false
  }
}

export async function GET(request: NextRequest) {
  try {
    // Initialize database on access
    await initializeDatabase()

    const action = request.nextUrl.searchParams.get('action')

    if (action === 'users') {
      if (!validateAdminToken(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const users = await getAllUsers()
      return NextResponse.json({ data: users })
    }

    if (action === 'admins') {
      if (!validateAdminToken(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const admins = await getAdmins()
      return NextResponse.json({ data: admins })
    }

    if (action === 'messages') {
      if (!validateAdminToken(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const messages = await getMessages()
      return NextResponse.json({ data: messages })
    }

    if (action === 'stats') {
      if (!validateAdminToken(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const stats = await getDashboardStats()
      return NextResponse.json({ data: stats })
    }

    if (action === 'cards') {
      const cards = await getCards()
      return NextResponse.json({ data: cards })
    }

    if (action === 'promos') {
      const promos = await getPromos()
      return NextResponse.json({ data: promos })
    }

    if (action === 'settings') {
      const settings = await getSettings()
      return NextResponse.json({ data: settings })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Admin error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const action = request.nextUrl.searchParams.get('action')

    // Require admin authentication for management actions
    if (['add-user', 'delete-user', 'reset-key', 'add-admin', 'delete-admin'].includes(action || '')) {
      if (!validateAdminToken(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    if (action === 'add-user') {
      const { name } = body
      if (!name) {
        return NextResponse.json({ error: 'User name is required' }, { status: 400 })
      }
      const newUser = await addUser(name, 'admin')
      return NextResponse.json({ success: true, data: newUser })
    }

    if (action === 'add-admin') {
      const { name, password } = body
      if (!name || !password) {
        return NextResponse.json({ error: 'Name and password are required' }, { status: 400 })
      }
      const newAdmin = await addAdmin(name, password)
      return NextResponse.json({ success: true, data: newAdmin })
    }

    if (action === 'delete-admin') {
      const { adminId } = body
      if (!adminId) {
        return NextResponse.json({ error: 'Admin ID is required' }, { status: 400 })
      }
      await deleteAdmin(adminId)
      return NextResponse.json({ success: true })
    }

    if (action === 'delete-user') {
      const { userId } = body
      if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
      }
      await deleteUser(userId)
      return NextResponse.json({ success: true })
    }

    if (action === 'reset-key') {
      const { userId } = body
      if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
      }
      const updatedUser = await resetUserSecretKey(userId)
      return NextResponse.json({ success: true, data: updatedUser })
    }

    if (action === 'add-card') {
      const { name, description, categories } = body
      const card = await addCard({ name, description, categories })
      return NextResponse.json({ success: true, data: card })
    }

    if (action === 'add-promo') {
      const { title, content, image } = body
      const promo = await addPromo({ title, content, image })
      return NextResponse.json({ success: true, data: promo })
    }

    if (action === 'update-settings') {
      const settings = await updateSettings(body)
      return NextResponse.json({ success: true, data: settings })
    }

    if (action === 'delete-card' && body.id) {
      await deleteCard(body.id)
      return NextResponse.json({ success: true })
    }

    if (action === 'delete-promo' && body.id) {
      await deletePromo(body.id)
      return NextResponse.json({ success: true })
    }

    if (action === 'mark-read') {
      const result = await updateMessageStatus(body.id, 'read')
      return NextResponse.json({ success: true, data: result })
    }

    if (action === 'add-message') {
      const { name, email, subject, message, type } = body
      await addMessage({ name, email, subject, message, type })
      return NextResponse.json({ success: true })
    }

    if (action === 'send-email') {
      const { to, subject, html, text } = body
      if (!to || !subject || (!html && !text)) {
        return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
      }
      try {
        await sendEmail(to, subject, html || text || '')
        return NextResponse.json({ success: true })
      } catch (e) {
        console.error('send-email error', e)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Admin POST error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}
