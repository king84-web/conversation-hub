# 🚀 Conversation Hub - Quick Start Guide

## What's Been Built

✅ **Complete Frontend** - 7 main pages with responsive design
✅ **API Routes** - All backend as Next.js serverless functions
✅ **Database** - PostgreSQL (Neon) ready to connect
✅ **Design System** - Tailwind CSS with custom colors
✅ **Documentation** - Comprehensive guides included

## 📋 Current Status

- **Frontend**: Fully functional and responsive ✅
- **Database**: Neon PostgreSQL ready to connect ✅
- **API Routes**: All implemented as serverless functions ✅
- **Content**: Placeholders ready for Stephine's input ⏳
- **Payments**: WhatsApp + Email contact form ✅
- **Email**: Resend + Mailchimp integration ready ⏳

## 🏃 Quick Start (2 Minutes)

### 1. Install Dependencies

```bash
# Frontend
npm install
```

### 2. Set Environment Variables

Create `.env.local` in root with:
```
NEXT_PUBLIC_FLUTTERWAVE_KEY=your_key_here
PRODUCT_PRICE=5000
MAILCHIMP_API_KEY=your_key
MAILCHIMP_AUDIENCE_ID=your_id
# optional: AI assistant responses (improves quality)
OPENAI_API_KEY=your_openai_api_key
# optional: PostgreSQL database (Neon)
DATABASE_URL=postgresql://...
RESEND_API_KEY=re-...
TWILIO_SID=...
TWILIO_TOKEN=...
```

### 3. Run Development Server

```bash
npm run dev
```

Visit **http://localhost:3000**

## 📁 Project Structure

```
├── src/
│   ├── app/              # All pages and API routes (serverless)
│   ├── components/       # Reusable React components
│   ├── lib/              # Database & utilities
│   └── types/            # TypeScript types
├── public/               # Static assets (images, etc)
├── .env.local            # Environment variables
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
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

All routes run as serverless functions on Vercel (no separate backend):

```
POST   /api/auth/login           - User login with password
POST   /api/auth/signup          - User registration
POST   /api/ai-responder         - AI chat (with OpenAI or fallback)
POST   /api/checkout             - Flutterwave payment initialization
POST   /api/subscribe            - Email subscription (Mailchimp)
GET    /api/admin                - Admin dashboard data
POST   /api/admin                - Admin actions (approve, delete, etc)
POST   /api/webhooks/flutterwave - Payment confirmation webhook
```

**Key Point**: Database queries use Neon's serverless connection pooling = fast, scalable, no server maintenance!

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
- [ ] Set up database (Neon PostgreSQL)
- [ ] Deploy frontend to Vercel
- [ ] Configure API keys (optional, features degrade gracefully)

### Deploy to Vercel (Frontend + Serverless API)

```bash
# 1. Build locally (verify success)
npm run build

# 2. Push to GitHub
git push origin main

# 3. On Vercel dashboard:
#    - Connect GitHub repo
#    - Add .env.local variables
#    - Add DATABASE_URL from Neon
#    - Deploy!
```

### Set Up Database (Neon PostgreSQL)

```bash
# 1. Go to https://neon.tech
# 2. Create free account
# 3. Create PostgreSQL project
# 4. Copy connection string
# 5. Add to Vercel as DATABASE_URL env variable
# Done! Database is live and serverless
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
