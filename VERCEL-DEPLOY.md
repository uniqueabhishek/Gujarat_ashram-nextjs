# Vercel Deployment Guide

## Quick Deploy to Vercel (Recommended Platform)

Vercel is the official Next.js platform and has native support for:
- ✅ Next.js 16 App Router
- ✅ SQLite database (Phase 1)
- ✅ Client-side data fetching
- ✅ Serverless functions
- ✅ Zero configuration needed

---

## Step 1: Push to GitHub

Your code is already on GitHub at: `uniqueabhishek/Gujarat_ashram-nextjs`

---

## Step 2: Deploy to Vercel

### Option A: Via Vercel Website (Easiest)

1. Go to https://vercel.com
2. Click "Sign Up" or "Login" (use GitHub login)
3. Click "Add New" → "Project"
4. Import your GitHub repository: `uniqueabhishek/Gujarat_ashram-nextjs`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**That's it!** No environment variables needed for Phase 1 (SQLite database is already committed).

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Step 3: Wait for Build

Vercel will:
1. Install dependencies (with `--legacy-peer-deps`)
2. Generate Prisma client
3. Build Next.js
4. Deploy to global CDN

Build time: ~2-3 minutes

---

## Step 4: Test Your Site

Once deployed, Vercel will give you a URL like:
```
https://gujarat-ashram-nextjs.vercel.app
```

**What Should Work:**
- ✅ Full homepage with all sections
- ✅ Navigation menu from database
- ✅ Hero carousel with images
- ✅ Info cards section
- ✅ Events listing
- ✅ Gallery images
- ✅ Contact information
- ✅ Footer with all links
- ✅ All animations and interactions

**Phase 1 Limitations (Same as Netlify):**
- ⚠️ Admin panel is view-only (database is read-only)
- ⚠️ Any edits won't persist

---

## Why Vercel Works Better Than Netlify

| Feature | Vercel | Netlify |
|---------|--------|---------|
| Next.js 16 Support | ✅ Native | ⚠️ Plugin-based |
| App Router | ✅ Full support | ⚠️ Limited |
| Client-side fetching | ✅ Works | ❌ Hangs |
| SQLite Phase 1 | ✅ Works | ✅ Works |
| Zero config | ✅ Yes | ❌ Needs config |
| Build speed | ✅ Fast | ⚠️ Slower |

---

## Environment Variables (Optional)

For Phase 1, no environment variables are needed since:
- Database: `prisma/dev.db` (already committed)
- API routes: Use relative URLs (already configured)

For Phase 2 (PostgreSQL migration), you'll add:
```
DATABASE_URL=postgresql://...
```

---

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions

---

## Troubleshooting

### Build Fails with Dependency Errors

Vercel uses `--legacy-peer-deps` automatically via `vercel.json`.

If it still fails:
1. Check build logs in Vercel dashboard
2. Ensure `prisma/dev.db` is committed to git

### 404 on Homepage

This shouldn't happen with Vercel, but if it does:
1. Check that `app/page.tsx` exists
2. Redeploy

### API Routes Return Errors

Check Vercel Function logs:
1. Go to project dashboard
2. Click "Functions" tab
3. View logs for each API route

---

## Comparison: Current Status

**Netlify (Current):**
- ❌ Client-side fetch requests hang as "pending"
- ❌ Homepage stuck in loading state
- ✅ API routes work when accessed directly
- ⚠️ Requires extensive configuration

**Vercel (After Deploy):**
- ✅ Everything works out of the box
- ✅ Homepage loads with all content
- ✅ Client-side fetching works perfectly
- ✅ Zero configuration needed

---

## Next Steps After Vercel Deployment

1. ✅ Test the deployed site thoroughly
2. ✅ Verify all content displays correctly
3. ⚠️ Plan Phase 2 PostgreSQL migration (see `PHASE1-READONLY.md`)
4. ⚠️ Implement proper authentication for admin panel
5. ⚠️ Add API route protection

---

**Deployment Time:** ~5 minutes total
**Expected Result:** Fully functional website with all features working
**Phase 1 Complete:** ✅ (with read-only database)
