(async function(){
  const db = require('../src/lib/db')
  const newUser = await db.addUser('testuser', 'script')
  console.log('created', newUser)
  const users = await db.getAllUsers()
  console.log('all users', users)
  process.exit(0)
})().catch(e=>{console.error(e);process.exit(1)})
