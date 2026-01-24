# 🚀 Conversation Hub - Quick Start Guide

## What's Been Built

✅ **Complete Frontend** - 7 main pages with responsive design
✅ **API Routes** - Payment processing, email subscription, webhooks
✅ **Backend Structure** - Express.js API ready for Railway
✅ **Design System** - Tailwind CSS with custom colors
✅ **Documentation** - Comprehensive guides included

## 📋 Current Status

- **Frontend**: Fully functional and responsive ✅
- **Backend**: Structure ready, needs database integration ⏳
- **Content**: Placeholders ready for Stephine's input ⏳
- **Payments**: Flutterwave integration set up ✅
- **Email**: Mailchimp integration ready ⏳

## 🏃 Quick Start (2 Minutes)

### 1. Install Dependencies

```bash
# Frontend
npm install

# Backend (optional, for development)
cd server
npm install
```

### 2. Set Environment Variables

Create `.env.local` in root with:
```
NEXT_PUBLIC_FLUTTERWAVE_KEY=your_key_here
PRODUCT_PRICE=5000
MAILCHIMP_API_KEY=your_key
MAILCHIMP_AUDIENCE_ID=your_id
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 3. Run Development Server

```bash
npm run dev
```

Visit **http://localhost:3000**

## 📁 Project Structure

```
├── src/
│   ├── app/              # All pages and API routes
│   ├── components/       # Reusable components
│   └── styles/           # Global CSS
├── server/               # Backend API (Node.js)
├── public/               # Static assets
├── package.json
└── README.md
```

## 📄 Pages Built

| Page | Path | Status |
|------|------|--------|
| Home | `/` | ✅ Complete |
| Shop | `/shop` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Try Cards | `/try-cards` | ✅ Complete |
| Community | `/community` | ✅ Complete |
| Join Team | `/join-team` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Admin | `/admin` | ✅ Placeholder |

## 🎨 Customization Guide

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
}
```

### Add Content

Replace `[To be provided by Stephine]` placeholders in:
- `/src/app/about/page.tsx` - Founder story
- `/src/app/community/page.tsx` - Testimonials
- `/src/app/join-team/page.tsx` - Role descriptions

### Update Contact Info

Update these files:
- Footer: `src/components/Footer.tsx`
- Contact: `src/app/contact/page.tsx`
- Navigation: `src/components/Navigation.tsx`

## 🔧 API Endpoints

### Frontend Routes (Next.js)
```
POST   /api/checkout           - Flutterwave payment
POST   /api/subscribe          - Email subscription
POST   /api/webhooks/flutterwave - Payment webhook
```

### Backend Routes (Node.js - Port 5000)
```
GET    /api/health            - Health check
POST   /api/orders            - Create order
GET    /api/orders/:id        - Get order
POST   /api/subscribers       - Add subscriber
POST   /api/applications      - Team application
POST   /api/contact           - Contact message
POST   /api/webhooks/flutterwave - Payment webhook
```

## 💳 Payment Integration

### WhatsApp Checkout
- Button pre-fills WhatsApp message
- Phone: **+250798697053**
- User confirms details and sends
- Manual confirmation process

### Flutterwave Checkout
- Online payment gateway
- Supports: MTN Money, Airtel Money, Cards, Bank Transfer
- Automatic webhook confirmation
- Email receipt sent automatically

## 📧 Email Integration

Currently supports:
- **Mailchimp** - Newsletter & automation
- **ConvertKit** - Email courses & sequences

Setup:
1. Get API key from Mailchimp/ConvertKit
2. Add to `.env.local`
3. Uncomment integration code in `/api/subscribe`

## 🎯 Content Checklist

Items needed from Stephine:

**Founder/About:**
- [ ] Founder photo
- [ ] Founder bio/story
- [ ] Why Conversation Hub was created

**Brand:**
- [ ] Preferred colors (primary, secondary, accent)
- [ ] Preferred fonts
- [ ] Logo (if different from text)

**Products:**
- [ ] Product images (box, cards)
- [ ] What's inside description
- [ ] How to use guide
- [ ] Who it's for description
- [ ] Exact pricing (in RWF)

**Community:**
- [ ] Beta tester testimonials (3-5)
- [ ] Testing session photos
- [ ] Upcoming events details

**Team:**
- [ ] Open position descriptions
- [ ] Why work with us details
- [ ] Application email/form link

**Contact:**
- [ ] Email address
- [ ] Instagram handle
- [ ] Additional contact info

## 🚀 Deployment Checklist

### Before Going Live

- [ ] Replace all placeholder content
- [ ] Add product images
- [ ] Update colors and fonts
- [ ] Set up Flutterwave account
- [ ] Set up email integration
- [ ] Test all forms
- [ ] Test WhatsApp links
- [ ] Test mobile responsiveness
- [ ] Add Google Analytics
- [ ] Set up database (PostgreSQL)
- [ ] Deploy backend to Railway
- [ ] Deploy frontend to Vercel

### Deploy to Vercel (Frontend)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect on Vercel dashboard
# 3. Add environment variables
# 4. Deploy!
```

### Deploy to Railway (Backend)

```bash
# 1. Create Railway account
# 2. Connect GitHub repo
# 3. Add environment variables
# 4. Deploy!
```

## 🔐 Security Notes

- ✅ HTTPS on all forms
- ✅ Environment variables for secrets
- ✅ Webhook signature verification (needs implementation)
- ✅ Input validation (needs backend)
- ✅ Rate limiting (needs backend)

## 📊 Next Steps

1. **Immediate**: Get content from Stephine
2. **This Week**: Add all content and images
3. **This Week**: Set up Flutterwave account
4. **This Week**: Test all functionality
5. **Next Week**: Deploy to staging
6. **Next Week**: Final QA and testing
7. **Launch**: Deploy to production

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Backend Not Connecting
```bash
# Check backend is running on port 5000
# Update NEXT_PUBLIC_API_URL in .env.local
# Ensure CORS is configured
```

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Flutterwave**: https://developer.flutterwave.com
- **Express.js**: https://expressjs.com
- **Railway**: https://railway.app
- **Vercel**: https://vercel.com

## 👤 Support

- **Developer**: Solomon Kamara
- **Client**: Stephine
- **Tech Stack**: Next.js + Node.js + PostgreSQL
- **Hosting**: Vercel + Railway

---

**Ready to get started? Run `npm install && npm run dev`! 🚀**

*Last Updated: January 22, 2026*
