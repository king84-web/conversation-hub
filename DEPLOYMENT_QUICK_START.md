# Conversation Hub - Deployment Quick Start Guide

**Status:** ✅ READY TO DEPLOY  
**Last Updated:** January 22, 2026

---

## 🚀 Quick Start - Deploy in 5 Steps

### Step 1: Set Environment Variables (5 min)

Choose your hosting platform and add these variables:

**For Vercel (Recommended):**
1. Go to your Vercel project dashboard
2. Click Settings → Environment Variables
3. Add these variables:

```
NEXT_PUBLIC_FLUTTERWAVE_KEY = [your-flutterwave-public-key]
NEXT_PUBLIC_API_URL = https://api.conversationhub.com (or your backend URL)
MAILCHIMP_API_KEY = [your-mailchimp-api-key]
MAILCHIMP_AUDIENCE_ID = [your-mailchimp-audience-id]
PRODUCT_PRICE = 5000
```

**For Netlify:**
1. Click Site Settings → Build & Deploy → Environment
2. Add the same variables above

### Step 2: Update Content (1-2 hours)

Replace placeholder text in these files:
- `src/app/about/page.tsx` - Add Stephine's story and founder bio
- `src/app/shop/page.tsx` - Update product pricing
- Add product images (upload to Cloudinary)

### Step 3: Get API Keys (30 min)

**Flutterwave:**
1. Sign up at https://flutterwave.com
2. Go to Dashboard → Settings → API Keys
3. Copy Public Key → Paste into `NEXT_PUBLIC_FLUTTERWAVE_KEY`

**Mailchimp:**
1. Sign up at https://mailchimp.com
2. Go to Account Settings → API Keys
3. Create new API key → Copy and paste
4. Get Audience ID: Lists → Your List → Settings → Audience ID

### Step 4: Deploy

**Option A: Vercel (Auto-Deploy)**
```bash
# Just push to GitHub - Vercel auto-deploys!
git push origin main
```

**Option B: Vercel CLI**
```bash
npm install -g vercel
vercel
# Follow prompts
```

**Option C: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Step 5: Test Everything (30 min)

- [ ] Visit all pages on live site
- [ ] Test mobile responsiveness
- [ ] Test WhatsApp links
- [ ] Test email subscription (with test email)
- [ ] Test payment buttons

---

## 📋 Environment Variables Reference

| Variable | Required? | Where to Get | Example |
|----------|-----------|-------------|---------|
| `NEXT_PUBLIC_FLUTTERWAVE_KEY` | YES | Flutterwave Dashboard | `pk_live_xxxxxxxxxxx` |
| `NEXT_PUBLIC_API_URL` | YES | Your backend URL | `https://api.example.com` |
| `MAILCHIMP_API_KEY` | YES | Mailchimp Account | `xxxxxxxx-us1` |
| `MAILCHIMP_AUDIENCE_ID` | YES | Mailchimp Audience | `a1b2c3d4e5` |
| `PRODUCT_PRICE` | NO (default: 5000) | Your choice | `5000` or `10000` |

---

## 🔑 How to Get Each Key

### Flutterwave API Key

1. Go to https://dashboard.flutterwave.com
2. Sign up or log in
3. Click your name (top right) → Settings
4. Click API Keys (left menu)
5. Copy your **Public Key** (LIVE or TEST)
6. Add to `NEXT_PUBLIC_FLUTTERWAVE_KEY`

### Mailchimp API Key

1. Go to https://mailchimp.com
2. Sign up or log in
3. Click your profile (top right) → Account
4. Click "Extras" → API Keys
5. Click "Create A Key"
6. Copy the key → Add to `MAILCHIMP_API_KEY`

### Mailchimp Audience ID

1. In Mailchimp, click "Lists" (left menu)
2. Click your list name
3. Click "Settings" (dropdown)
4. Click "List name and defaults"
5. Find "List ID" near bottom
6. Copy it → Add to `MAILCHIMP_AUDIENCE_ID`

---

## 🌐 Deployment Platform Comparison

| Platform | Cost | Ease | Build Time | Notes |
|----------|------|------|-----------|-------|
| **Vercel** | Free-$20/mo | ⭐⭐⭐⭐⭐ | 1-2 min | Recommended - Built by Next.js creators |
| **Netlify** | Free-$19/mo | ⭐⭐⭐⭐⭐ | 2-3 min | Great alternative |
| **Railway** | Free-$5+/mo | ⭐⭐⭐⭐ | 3-5 min | Simple & affordable |
| **AWS Amplify** | Free-$10+/mo | ⭐⭐⭐ | 5-10 min | More complex setup |

**Recommendation:** **Vercel** - Optimized for Next.js, fastest deployment, free tier available

---

## 📱 Domain Setup (Optional)

### Add Custom Domain

**In Vercel:**
1. Project Settings → Domains
2. Enter your domain (e.g., conversationhub.com)
3. Follow DNS setup instructions
4. Update your domain registrar's DNS settings

**Recommended Registrars:**
- Namecheap ($10-15/year)
- Google Domains ($12/year)
- GoDaddy ($2-10/year)

---

## 🔒 Security Checklist

Before going live, verify:

- [ ] API keys are in environment variables (not in code)
- [ ] HTTPS is enabled (automatic on Vercel/Netlify)
- [ ] Environment variables are marked as secret
- [ ] No sensitive data in git repository
- [ ] CORS configured properly
- [ ] Rate limiting enabled (recommended)

---

## 📊 Post-Launch Monitoring

### Setup Error Tracking (Free)
```bash
# 1. Sign up at https://sentry.io
# 2. Create new project
# 3. Add to next.config.ts:

withSentryConfig(nextConfig, {
  org: "your-org",
  project: "your-project",
})
```

### Setup Analytics (Free)
```html
<!-- Add Google Analytics to layout.tsx -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Monitor Uptime (Free)
Use https://www.uptimerobot.com to monitor site availability

---

## 🚨 Troubleshooting

### "Module not found" Error
```
Solution: Check tsconfig.json has paths configured correctly
✓ Already fixed in this project!
```

### Environment Variables Not Working
```
Solution: 
1. Verify variables are set in hosting dashboard
2. Restart deployment
3. Check variable names match exactly
```

### Build Failing
```
Solution:
1. Check npm run build locally: npm run build
2. Look at build logs in hosting dashboard
3. Verify all dependencies installed: npm install
```

### Flutterwave Not Working
```
Solution:
1. Check public key is correct (not secret key)
2. Verify API key format matches (pk_live_ or pk_test_)
3. Check CORS settings in backend
4. Test with Flutterwave test mode first
```

---

## 📞 Important Links

### Your Project
- **Repository:** [Your GitHub URL]
- **Live Site:** [Will be your Vercel/Netlify URL]
- **Admin Email:** info@conversationhub.com
- **Support WhatsApp:** +250798697053

### Third-Party Services
- **Flutterwave:** https://flutterwave.com
- **Mailchimp:** https://mailchimp.com
- **Vercel:** https://vercel.com
- **Cloudinary:** https://cloudinary.com

### Documentation
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Deployment:** https://vercel.com/docs

---

## ⏱️ Time Breakdown

| Task | Time | Notes |
|------|------|-------|
| Setup environment variables | 10 min | Fastest step |
| Get API keys | 20 min | Depends on signup speed |
| Update content | 30-60 min | Replace placeholders |
| Deploy to hosting | 5 min | Usually automatic |
| Testing | 30 min | Test all features |
| **Total** | **~2 hours** | Full setup to live |

---

## ✅ Pre-Launch Checklist

Before announcing to users, verify:

- [ ] All environment variables set
- [ ] Site loads on custom domain
- [ ] All pages accessible
- [ ] Mobile responsive on all devices
- [ ] WhatsApp links working
- [ ] Email signup working
- [ ] Payment buttons configured
- [ ] Footer social links working
- [ ] Contact form working
- [ ] No console errors
- [ ] Google Analytics tracking
- [ ] Sentry error tracking setup

---

## 🎉 You're Done!

Once you complete these steps, your site will be live and accessible to the world!

### Share It With:
- Friends and family
- Email list
- Social media
- Business partners
- Potential customers

### Next Improvements (After Launch):
- Add customer testimonials
- Implement admin dashboard
- Setup database for orders
- Create email automation
- Add product fulfillment system

---

**Good luck with your launch! 🚀**

For questions or issues, refer to the full `DEPLOYMENT_CHECKLIST.md` or `TECHNICAL_AUDIT.md` documents.

*Built with ❤️ for Stephine*  
*Conversation Hub - Better conversations start with better questions*
