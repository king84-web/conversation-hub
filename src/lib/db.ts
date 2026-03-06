// lib/db.ts - Database configuration for Neon PostgreSQL
// In-memory database for development/testing
// For production, integrate with actual Neon PostgreSQL

interface UserData {
  id: string
  name: string
  secretKey: string
  createdAt: string
  createdBy?: string
}

interface MessageData {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  type: 'inquiry' | 'feedback' | 'feedback-form'
  status: 'unread' | 'read'
}

// determine whether to use a real database (prefer Neon serverless when available)
let pgPool: any = null
const connectionString = process.env.DATABASE_URL || ''
if (connectionString) {
  try {
    // try neon serverless first (recommended for serverless hosts)
    const neon = require('@neondatabase/serverless')
    if (neon && typeof neon.createPool === 'function') {
      pgPool = neon.createPool(connectionString)
      console.log('Using @neondatabase/serverless pool')
    } else {
      const { Pool } = require('pg')
      pgPool = new Pool({ connectionString })
      console.log('Using pg Pool')
    }
  } catch (e) {
    try {
      const { Pool } = require('pg')
      pgPool = new Pool({ connectionString })
      console.log('Using pg Pool (fallback)')
    } catch (err) {
      console.warn('PostgreSQL driver not available, using in-memory storage')
      pgPool = null
    }
  }
} else {
  console.log('No DATABASE_URL found; running with in-memory storage')
}

// In-memory storage (resets on server restart)
const memoryDB = {
  users: [] as UserData[],
  messages: [] as MessageData[],
  cards: [] as {
    id: string
    name: string
    description: string
    categories: string[]
    createdAt: string
  }[],
  promos: [] as {
    id: string
    title: string
    content: string
    image?: string
    createdAt: string
  }[],
  settings: {} as {
    primaryColor?: string
    sponsor?: string
    heroImage?: string
  },
  adminPassword: 'stephine123' // Change this to a secure password - should be in env var
}

// Helper function to generate a random secret key
function generateSecretKey(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export async function initializeDatabase() {
  if (!pgPool) {
    console.log('initializeDatabase: no pgPool configured; skipping table creation')
    // Seed cards to in-memory DB if no database
    seedCardsToMemory()
    return
  }
  try {
    // create tables if they do not exist
    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        secret_key TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        created_by TEXT
      );
      CREATE TABLE IF NOT EXISTS cards (
        id TEXT PRIMARY KEY,
        name TEXT,
        description TEXT,
        categories TEXT[],
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS promos (
        id TEXT PRIMARY KEY,
        title TEXT,
        content TEXT,
        image TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY,
        primary_color TEXT,
        sponsor TEXT,
        hero_image TEXT
      );
      CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT,
        subject TEXT,
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        type TEXT,
        status TEXT
      );
    `)
    console.log('Database tables ensured')
    // Seed initial cards if empty
    seedCardsToDatabase()
  } catch (e) {
    console.warn('Failed to initialize DB tables (falling back to in-memory):', e)
    seedCardsToMemory()
  }
}

function seedCardsToMemory() {
  const defaultCards = [
    {
      id: 'relationships-connection',
      name: 'Relationships & Connection',
      description: 'Explore deep conversations about friendships, family, and human connections',
      categories: ['Friendship & Community', 'Connection in the Modern World', 'Family & Support Systems', 'Love & Understanding']
    },
    {
      id: 'purpose-dreams',
      name: 'Purpose & Dreams',
      description: 'Discover and discuss your life purpose, goals, and aspirations',
      categories: ['Discovering Purpose', 'Pursuing Dreams', 'Living Intentionally']
    },
    {
      id: 'reflection-gratitude',
      name: 'Reflection & Gratitude',
      description: 'Practice self-reflection and cultivate gratitude in your life',
      categories: ['Self-Reflection', 'Gratitude in Everyday Life', 'Personal Growth']
    },
    {
      id: 'faith-values',
      name: 'Faith & Values',
      description: 'Explore your faith, values, and what truly matters to you',
      categories: ['Faith Journey', 'Values & Principles', 'Spiritual Growth']
    },
    {
      id: 'society-culture',
      name: 'Society & Culture',
      description: 'Discuss community, social issues, and cultural perspectives',
      categories: ['Community & Belonging', 'Social Awareness', 'Making a Difference']
    },
    {
      id: 'general-questions',
      name: 'General Questions',
      description: 'Get to know yourself better through thoughtful questions',
      categories: ['Getting to Know You', 'Life Experiences', 'Personal Stories']
    }
  ]
  
  if (memoryDB.cards.length === 0) {
    memoryDB.cards = defaultCards.map(card => ({
      ...card,
      createdAt: new Date().toISOString()
    }))
    console.log('Seeded default cards to in-memory database')
  }
}

async function seedCardsToDatabase() {
  if (!pgPool) return
  
  try {
    const defaultCards = [
      {
        id: 'relationships-connection',
        name: 'Relationships & Connection',
        description: 'Explore deep conversations about friendships, family, and human connections',
        categories: ['Friendship & Community', 'Connection in the Modern World', 'Family & Support Systems', 'Love & Understanding']
      },
      {
        id: 'purpose-dreams',
        name: 'Purpose & Dreams',
        description: 'Discover and discuss your life purpose, goals, and aspirations',
        categories: ['Discovering Purpose', 'Pursuing Dreams', 'Living Intentionally']
      },
      {
        id: 'reflection-gratitude',
        name: 'Reflection & Gratitude',
        description: 'Practice self-reflection and cultivate gratitude in your life',
        categories: ['Self-Reflection', 'Gratitude in Everyday Life', 'Personal Growth']
      },
      {
        id: 'faith-values',
        name: 'Faith & Values',
        description: 'Explore your faith, values, and what truly matters to you',
        categories: ['Faith Journey', 'Values & Principles', 'Spiritual Growth']
      },
      {
        id: 'society-culture',
        name: 'Society & Culture',
        description: 'Discuss community, social issues, and cultural perspectives',
        categories: ['Community & Belonging', 'Social Awareness', 'Making a Difference']
      },
      {
        id: 'general-questions',
        name: 'General Questions',
        description: 'Get to know yourself better through thoughtful questions',
        categories: ['Getting to Know You', 'Life Experiences', 'Personal Stories']
      }
    ]
    
    // Use INSERT ... ON CONFLICT to gracefully handle existing cards
    for (const card of defaultCards) {
      await pgPool.query(
        `INSERT INTO cards(id, name, description, categories, created_at) 
         VALUES($1,$2,$3,$4,NOW())
         ON CONFLICT (id) DO NOTHING`,
        [card.id, card.name, card.description, card.categories]
      )
    }
    console.log('Cards seeding completed (existing cards skipped)')
  } catch (e) {
    console.error('Failed to seed cards:', e)
  }
}

export async function addUser(name: string, createdBy?: string): Promise<UserData> {
  const secretKey = generateSecretKey()
  const newUser: UserData = {
    id: Date.now().toString(),
    name,
    secretKey,
    createdAt: new Date().toISOString(),
    createdBy
  }
  
  if (pgPool) {
    try {
      const res = await pgPool.query(
        `INSERT INTO users(id, name, secret_key, created_at, created_by) 
         VALUES($1,$2,$3,NOW(),$4) RETURNING id, name, secret_key as "secretKey", created_at as "createdAt", created_by as "createdBy"`,
        [newUser.id, name, secretKey, createdBy || null]
      )
      return res.rows[0]
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  
  memoryDB.users.push(newUser)
  return newUser
}

export async function findUserByName(name: string): Promise<UserData | undefined> {
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT id, name, secret_key as "secretKey", created_at as "createdAt", created_by as "createdBy" FROM users WHERE LOWER(name)=LOWER($1)', [name])
      return res.rows[0]
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  return memoryDB.users.find(u => u.name.toLowerCase() === name.toLowerCase())
}

export async function findUserById(id: string): Promise<UserData | undefined> {
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT id, name, secret_key as "secretKey", created_at as "createdAt", created_by as "createdBy" FROM users WHERE id=$1', [id])
      return res.rows[0]
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  return memoryDB.users.find(u => u.id === id)
}

export async function getAllUsers(): Promise<UserData[]> {
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT id, name, secret_key as "secretKey", created_at as "createdAt", created_by as "createdBy" FROM users ORDER BY created_at DESC')
      return res.rows
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  return memoryDB.users
}

export async function deleteUser(id: string): Promise<boolean> {
  if (pgPool) {
    try {
      await pgPool.query('DELETE FROM users WHERE id=$1', [id])
      return true
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  memoryDB.users = memoryDB.users.filter(u => u.id !== id)
  return true
}

export async function resetUserSecretKey(id: string): Promise<UserData | undefined> {
  const secretKey = generateSecretKey()
  
  if (pgPool) {
    try {
      const res = await pgPool.query(
        'UPDATE users SET secret_key=$1 WHERE id=$2 RETURNING id, name, secret_key as "secretKey", created_at as "createdAt", created_by as "createdBy"',
        [secretKey, id]
      )
      return res.rows[0]
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  
  const user = memoryDB.users.find(u => u.id === id)
  if (user) {
    user.secretKey = secretKey
  }
  return user
}

export async function validateAdminPassword(password: string): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD || memoryDB.adminPassword
  return password === adminPassword
}

export async function addCard(data: { name: string; description: string; categories: string[] }) {
  if (pgPool) {
    try {
      const res = await pgPool.query(
        `INSERT INTO cards(id, name, description, categories, created_at) VALUES($1,$2,$3,$4,NOW()) RETURNING *`,
        [Date.now().toString(), data.name, data.description, data.categories]
      )
      return res.rows[0]
    } catch (e) {
      console.error('DB error adding card, using in-memory:', e)
    }
  }
  const card = {
    id: Date.now().toString(),
    name: data.name,
    description: data.description,
    categories: data.categories,
    createdAt: new Date().toISOString()
  }
  memoryDB.cards.push(card)
  return card
}

export async function getCards() {
  // Ensure cards are seeded to memory if empty
  if (memoryDB.cards.length === 0) {
    seedCardsToMemory()
  }
  
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT * FROM cards ORDER BY created_at DESC')
      if (res.rows && res.rows.length > 0) {
        return res.rows
      }
    } catch (e) {
      console.error('DB error getting cards, using in-memory:', e)
    }
  }
  return memoryDB.cards
}

export async function addPromo(data: { title: string; content: string; image?: string }) {
  if (pgPool) {
    try {
      const res = await pgPool.query(
        `INSERT INTO promos(id, title, content, image, created_at) VALUES($1,$2,$3,$4,NOW()) RETURNING *`,
        [Date.now().toString(), data.title, data.content, data.image || null]
      )
      return res.rows[0]
    } catch (e) {
      console.error('DB error adding promo, using in-memory:', e)
    }
  }
  const promo = {
    id: Date.now().toString(),
    title: data.title,
    content: data.content,
    image: data.image,
    createdAt: new Date().toISOString()
  }
  memoryDB.promos.unshift(promo)
  return promo
}

export async function getPromos() {
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT * FROM promos ORDER BY created_at DESC')
      return res.rows
    } catch (e) {
      console.error('DB error getting promos, using in-memory:', e)
    }
  }
  return memoryDB.promos
}

export async function deletePromo(id: string) {
  if (pgPool) {
    try {
      await pgPool.query('DELETE FROM promos WHERE id=$1', [id])
      return true
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  memoryDB.promos = memoryDB.promos.filter(p => p.id !== id)
  return true
}

export async function updateSettings(data: { primaryColor?: string; sponsor?: string; heroImage?: string }) {
  if (pgPool) {
    try {
      // upsert settings row (assumes single row with id=1)
      await pgPool.query(
        `INSERT INTO settings(id, primary_color, sponsor, hero_image)
         VALUES(1,$1,$2,$3)
         ON CONFLICT (id) DO UPDATE SET primary_color=$1,sponsor=$2,hero_image=$3`,
        [data.primaryColor || null, data.sponsor || null, data.heroImage || null]
      )
      const res = await pgPool.query('SELECT * FROM settings WHERE id=1')
      return res.rows[0]
    } catch (e) {
      console.error('DB error updating settings, using in-memory:', e)
    }
  }
  memoryDB.settings = { ...memoryDB.settings, ...data }
  return memoryDB.settings
}

export async function getSettings() {
  if (pgPool) {
    try {
      const res = await pgPool.query('SELECT * FROM settings WHERE id=1')
      return res.rows[0] || {}
    } catch (e) {
      console.error('DB error getting settings, using in-memory:', e)
    }
  }
  return memoryDB.settings
}

export async function deleteCard(id: string) {
  if (pgPool) {
    try {
      await pgPool.query('DELETE FROM cards WHERE id=$1', [id])
      return true
    } catch (e) {
      console.error('DB error, using in-memory:', e)
    }
  }
  memoryDB.cards = memoryDB.cards.filter(c => c.id !== id)
  return true
}

export async function addMessage(data: Omit<MessageData, 'id' | 'createdAt' | 'status'>) {
  const newMessage: MessageData = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'unread'
  }
  memoryDB.messages.push(newMessage)
  return newMessage
}

export async function getMessages() {
  return memoryDB.messages
}

export async function updateMessageStatus(id: string, status: 'read') {
  const msg = memoryDB.messages.find(m => m.id === id)
  if (msg) {
    msg.status = status
  }
  return msg
}

export async function getDashboardStats() {
  return {
    totalUsers: memoryDB.users.length,
    totalMessages: memoryDB.messages.length,
    unreadMessages: memoryDB.messages.filter(m => m.status === 'unread').length
  }
}
