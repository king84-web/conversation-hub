require('dotenv').config();
const { Pool } = require('pg');
(async()=>{
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const now = Date.now().toString();
    await pool.query("INSERT INTO users(id,name,secret_key) VALUES($1,$2,$3)",[now,'persist_test','secret123']);
    const res = await pool.query('SELECT * FROM users WHERE name=$1',['persist_test']);
    console.log('queried rows', res.rows);
  } catch(e) {
    console.error(e);
  } finally {
    await pool.end();
  }
})();
