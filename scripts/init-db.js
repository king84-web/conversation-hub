(async function(){
  const conn = process.env.DATABASE_URL || ''
  if (!conn) {
    console.error('DATABASE_URL not set in environment')
    process.exit(1)
  }

  let pool = null
  try {
    const neon = require('@neondatabase/serverless')
    if (neon && typeof neon.createPool === 'function') {
      pool = neon.createPool(conn)
      console.log('Using @neondatabase/serverless')
    }
  } catch(e) {
    // ignore
  }

  if (!pool) {
    const { Pool } = require('pg')
    pool = new Pool({ connectionString: conn })
    console.log('Using pg Pool')
  }

  const sql = `
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
  `

  try {
    await pool.query(sql)
    console.log('Tables created/ensured')
    process.exit(0)
  } catch (e) {
    console.error('Failed to init DB:', e)
    process.exit(2)
  }
})()
