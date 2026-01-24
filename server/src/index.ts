import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Conversation Hub API is running' })
})

// Orders API
app.post('/api/orders', (req, res) => {
  try {
    const { customerName, email, phone, address, productId, amount } = req.body

    // TODO: Save to database
    console.log('New order:', { customerName, email, phone, address, productId, amount })

    res.json({
      success: true,
      orderId: `ORD-${Date.now()}`,
      message: 'Order created successfully',
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' })
  }
})

app.get('/api/orders/:id', (req, res) => {
  try {
    const { id } = req.params
    // TODO: Fetch from database
    res.json({ orderId: id, status: 'pending' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' })
  }
})

// Subscribers API
app.post('/api/subscribers', (req, res) => {
  try {
    const { email, name } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    // TODO: Save to database
    console.log('New subscriber:', { email, name })

    res.json({
      success: true,
      message: 'Subscriber added successfully',
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add subscriber' })
  }
})

// Team Applications API
app.post('/api/applications', (req, res) => {
  try {
    const { name, email, phone, role, message } = req.body

    // TODO: Save to database
    console.log('New application:', { name, email, phone, role, message })

    res.json({
      success: true,
      applicationId: `APP-${Date.now()}`,
      message: 'Application submitted successfully',
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' })
  }
})

// Contact Messages API
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message, type } = req.body

    // TODO: Save to database
    console.log('New contact message:', { name, email, message, type })

    res.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' })
  }
})

// Flutterwave Webhook
app.post('/api/webhooks/flutterwave', (req, res) => {
  try {
    const { data } = req.body

    // TODO: Verify webhook signature

    if (data.status === 'successful') {
      console.log('Payment received:', data)
      // TODO: Update order status
    }

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Webhook processing failed' })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Conversation Hub API running on port ${PORT}`)
})

export default app
