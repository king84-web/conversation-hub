# Conversation Hub - Website Setup Guide

## 🎯 Project Overview
Conversation Hub is an e-commerce + community platform for selling conversation cards and building a community around meaningful human connections.

**Website:** https://conversationhub.rw (Coming soon)  
**Founder/Client:** Stephine  
**Developer:** Solomon Kamara  
**Tech Stack:** 
- Frontend: Next.js + Tailwind CSS (Vercel)
- Database: PostgreSQL (Neon)
- Payments: Email contact (WhatsApp integration ready)
- Email: Resend / Mailchimp
- SMS/WhatsApp: Twilio
- AI Chat: OpenAI (GPT-3.5)

## 📁 Project Structure

```
conversation-hub/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── shop/page.tsx            # Shop page
│   │   ├── about/page.tsx           # About page
│   │   ├── try-cards/page.tsx       # Try the Cards (early access)
│   │   ├── community/page.tsx       # Community & Events
│   │   ├── join-team/page.tsx       # Join the Team
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── api/                     # API routes
│   │   │   ├── checkout/route.ts    # Flutterwave checkout
│   │   │   ├── subscribe/route.ts   # Email subscription
│   │   │   └── webhooks/flutterwave/route.ts
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   └── components/
│       ├── Navigation.tsx           # Main navigation
│       └── Footer.tsx               # Footer
├── server/
│   ├── src/
│   │   └── index.ts                 # Backend API
│   ├── package.json
│   └── tsconfig.json
├── public/                          # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                       # Environment variables
└── README.md
```

## 🚀 Getting Started

### Frontend Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables** in `.env.local`:
```
NEXT_PUBLIC_FLUTTERWAVE_KEY=your_flutterwave_public_key
PRODUCT_PRICE=5000
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
# (optional) key used by /api/ai-responder to generate better responses
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. **Run development server:**
```bash
npm run dev
```

Visit http://localhost:3000

### Database Setup (Neon)

1. **Create Neon account:**
   - Go to https://neon.tech
   - Sign up free
   - Create a PostgreSQL project

2. **Get connection string:**
   - Copy your connection string from Neon dashboard
   - Format: `postgresql://user:password@host/database?sslmode=require`

3. **Set environment variable:**
   ```bash
   # Add to .env.local
   DATABASE_URL=postgresql://...
   ```

4. **Database is now connected!**
   - Uses serverless connection pooling
   - Perfect for Vercel deployments

## 📄 Pages Overview

### 1. **Home Page** (`/`)
- Hero section with main CTA buttons
- "What is Conversation Hub?" feature cards
- Featured product section
- Email signup section

### 2. **Shop Page** (`/shop`)
- Product gallery and details
- "Purpose & Dreams Cards" product
- "Coming Soon" for future decks
- Dual checkout options (WhatsApp + Email inquiry)

### 3. **About Page** (`/about`)
- Our Story section
- Mission statement
- Founder bio and photo
- Core values (Presence, Curiosity, Human Connection)

### 4. **Try the Cards** (`/try-cards`)
- Early access program explanation
- Benefits overview
- Email/form signup for beta access

### 5. **Community & Events** (`/community`)
- Upcoming experiences section
- Photo gallery from testing sessions
- Testimonials from beta testers
- "Host a Conversation" inquiry form

### 6. **Join the Team** (`/join-team`)
- Open positions:
  - Content Creator
  - Events Coordinator
  - Partnerships Manager
  - Designer
- Application form

### 7. **Contact Page** (`/contact`)
- Contact information (WhatsApp, Email, Instagram)
- Contact form
- Partnership inquiry form

## 💳 Payment Integration

### WhatsApp Checkout
- Users click "Order via WhatsApp"
- Deep link opens WhatsApp with pre-filled message
- Phone: +250798697053
- Manual order confirmation and payment process

### Flutterwave Online Payment
- Accepts: MTN Mobile Money, Airtel Money, Cards, Bank Transfer
- Webhook integration for payment verification
- Auto-email confirmation on successful payment

## 📧 Email Integration

- Email subscription on homepage
- Integration with Mailchimp OR ConvertKit
- Automated welcome emails
- Campaign management

## 🔐 API Endpoints

### Frontend API Routes
- `POST /api/contact` - Contact form (order inquiries)

### Backend API Routes
- `GET /api/health` - Health check
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `POST /api/subscribers` - Add email subscriber
- `POST /api/applications` - Submit team application
- `POST /api/contact` - Send contact message
- `POST /api/contact` - Handle contact/order inquiry

## 🎨 Design System

**Colors:**
- Primary: `#1a1a1a`
- Secondary: `#f5f5f5`
- Accent: `#d4a574`

**Typography:** System fonts (Segoe UI, Helvetica, etc.)

**Responsive:** Mobile-first, optimized for all devices

## 📊 Admin Dashboard (TODO)

- Order management
- Email subscriber management
- Product management
- Team applications
- Analytics dashboard
- Settings

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Backend (Railway)
```bash
cd server
npm run build
# Connect to Railway and deploy
```

## 📝 Content To Be Provided by Stephine

- [ ] Story/biography
- [ ] Brand colors and fonts
- [ ] Founder photo
- [ ] Testimonials from beta testers
- [ ] Product images (card box, individual cards)
- [ ] "What's inside the box" details
- [ ] "How to use the cards" guide
- [ ] "Who it's for" description
- [ ] Benefits of early access program
- [ ] Company values descriptions
- [ ] Why work with Conversation Hub content
- [ ] Role descriptions for open positions
- [ ] Instagram handle
- [ ] Contact email

## 🔗 Important Links

- **WhatsApp:** +250798697053
- **Flutterwave Docs:** https://developer.flutterwave.com
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com

## 📱 Key Features

✅ Responsive design (mobile-first)
✅ WhatsApp integration
✅ Contact form for orders and inquiries
✅ Email subscription
✅ Admin dashboard structure (ready for implementation)
✅ Community engagement forms
✅ Team application system
✅ Contact & partnership inquiries

## 🎯 Next Steps

1. Update `.env.local` with API keys (optional - features gracefully degrade)
2. Set `DATABASE_URL` to your Neon PostgreSQL connection string
3. Deploy frontend to Vercel
4. Done! Your site is live and upgradeable

## 💡 Notes

- All forms currently log to console - connect to backend/database
- Webhook endpoints are set up but need implementation
- Email integration requires API keys
- Product price is a placeholder - update in environment variables
- Admin dashboard UI is ready - needs backend integration

---

**Last Updated:** January 22, 2026  
**Created by:** Solomon Kamara for Stephine
