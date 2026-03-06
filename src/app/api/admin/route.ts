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
  validateAdminPassword,
  initializeDatabase
} from '@/lib/db'

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

    // Require admin authentication for user management actions
    if (['add-user', 'delete-user', 'reset-key'].includes(action || '')) {
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

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Admin POST error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}
