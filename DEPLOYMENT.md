# Netlify Deployment Guide

## Prerequisites

⚠️ **CRITICAL**: Before deploying, you MUST address these security issues:

1. **SQLite Database Won't Work** - Netlify is serverless, you need a cloud database
2. **Hardcoded Credentials** - Remove `admin`/`admin123` from code
3. **No API Authentication** - All endpoints are publicly accessible
4. **Weak JWT Secret** - Generate a secure random secret

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure these files are committed:
- ✅ `netlify.toml` (Netlify configuration)
- ✅ `.env.example` (Environment variables template)
- ✅ `.gitignore` (Excludes sensitive files)

**DO NOT commit:**
- ❌ `.env.local` (contains secrets)
- ❌ `node_modules/`
- ❌ `.next/`
- ❌ `prisma/dev.db`

### 2. Set Up Cloud Database (REQUIRED)

**Option A: Neon (Recommended - Free PostgreSQL)**

1. Go to https://neon.tech
2. Sign up and create a new project
3. Copy the connection string (looks like: `postgresql://user:pass@host/db`)
4. Update your `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

**Option B: Supabase (Free PostgreSQL)**

1. Go to https://supabase.com
2. Create a project
3. Go to Settings → Database → Connection String
4. Copy the connection string

**Option C: PlanetScale (Free MySQL)**

1. Go to https://planetscale.com
2. Create a database
3. Get connection string

### 3. Update Database Schema

After getting your cloud database URL:

```bash
# Update DATABASE_URL in .env.local with your cloud database URL
# Then run:
npx prisma db push
npx prisma generate
```

### 4. Deploy to Netlify

**Method 1: Using Netlify UI (Easiest)**

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)

5. **Add Environment Variables** (Site settings → Environment variables):
   ```
   DATABASE_URL=your_cloud_database_url_here
   JWT_SECRET=generate_with_command_below
   NEXT_PUBLIC_API_BASE=https://your-site.netlify.app
   NODE_ENV=production
   ```

6. Click "Deploy site"

**Method 2: Using Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 5. Generate Secure JWT Secret

Run this command to generate a secure secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and use it as `JWT_SECRET` in Netlify environment variables.

### 6. Configure Environment Variables in Netlify

Go to: **Site settings → Environment variables → Add a variable**

Add these variables:

| Variable | Value | Example |
|----------|-------|---------|
| `DATABASE_URL` | Your cloud database URL | `postgresql://user:pass@host/db` |
| `JWT_SECRET` | Generated random string | `a1b2c3d4...` (64 characters) |
| `NEXT_PUBLIC_API_BASE` | Your Netlify URL | `https://ashram.netlify.app` |
| `NODE_ENV` | production | `production` |

### 7. Install Netlify Next.js Plugin

The plugin is already configured in `netlify.toml`. Netlify will auto-install it.

### 8. Test Your Deployment

After deployment:

1. Visit your site URL
2. Test the home page loads
3. **DO NOT test admin login yet** - it's insecure!

## Post-Deployment: Critical Security Fixes

⚠️ **Your site is NOT production-ready yet!** You MUST fix these:

### Fix 1: Implement Proper Authentication

Currently, authentication is broken:
- Hardcoded credentials in client code
- No server-side validation
- localStorage easily bypassed

**You need to:**
1. Create API route for login with bcrypt password hashing
2. Use HTTP-only cookies for session management
3. Add authentication middleware to all admin API routes
4. Remove hardcoded credentials from `app/login/page.tsx`

### Fix 2: Secure API Endpoints

All your API routes have NO authentication:
- Anyone can delete content
- Anyone can upload files
- Anyone can modify settings

**You need to:**
1. Add authentication middleware
2. Validate JWT tokens on each request
3. Check user permissions

### Fix 3: Database Migration

Run database migrations on your cloud database:

```bash
# After setting DATABASE_URL to cloud database
npx prisma migrate deploy
```

## Troubleshooting

### Build Fails

- Check Netlify build logs
- Ensure all dependencies are in `package.json`
- Verify Node version is 20

### Database Connection Error

- Check `DATABASE_URL` is correct
- Ensure database allows connections from Netlify IPs
- Test connection locally first

### Images Not Loading

- Check images are in `public/images/`
- Verify file paths use relative URLs
- Ensure `.gitignore` doesn't exclude `public/`

### API Routes Return 500

- Check Netlify Functions logs
- Verify environment variables are set
- Test Prisma client generation

## Production Checklist

Before going live:

- [ ] Cloud database configured and migrated
- [ ] All environment variables set in Netlify
- [ ] JWT_SECRET is strong random string
- [ ] Authentication properly implemented
- [ ] API routes protected with middleware
- [ ] Hardcoded credentials removed
- [ ] Test all features work on deployed site
- [ ] Set up custom domain (optional)
- [ ] Configure DNS (if using custom domain)
- [ ] Test on mobile devices
- [ ] Check Lighthouse score

## Current Limitations

⚠️ **Critical Issues to Fix:**

1. **No Authentication** - Anyone can access admin panel
2. **SQLite Database** - Will fail on Netlify (must use cloud DB)
3. **Insecure Login** - Credentials in client code
4. **No API Protection** - All endpoints publicly accessible
5. **File Uploads** - May not work on serverless (need cloud storage)

## Recommended Next Steps

1. **Migrate to PostgreSQL** (Neon or Supabase)
2. **Implement proper authentication** (JWT with server validation)
3. **Add API middleware** (protect all admin routes)
4. **Use cloud storage for uploads** (Cloudinary or S3)
5. **Add rate limiting** (prevent abuse)

## Need Help?

Common issues and solutions: https://docs.netlify.com/configure-builds/troubleshooting-tips/

---

**Created**: December 2024
**Last Updated**: December 2024
