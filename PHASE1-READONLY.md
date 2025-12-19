# Phase 1: Read-Only SQLite Deployment

## ⚠️ IMPORTANT WARNINGS

This is a **Phase 1 deployment** with a **pre-populated read-only database**.

### What Works:
- ✅ Public website (home page)
- ✅ Viewing all content (menu, images, events, etc.)
- ✅ Navigation and UI features
- ✅ All animations and effects

### What DOESN'T Work:
- ❌ Admin panel login (will work but...)
- ❌ **ANY changes you make in admin will NOT persist**
- ❌ Uploading new images
- ❌ Editing content
- ❌ Adding/deleting anything

### Why?

**Netlify Functions are serverless and stateless:**
- Database file is deployed as **read-only**
- Any writes appear to work but are **lost immediately**
- Each request runs in a **new temporary container**
- Changes don't persist between requests

## How Phase 1 Deployment Works

```
┌─────────────────────────────────────┐
│ Your Local Machine                  │
│ ├── dev.db (with all your content) │ ← This gets committed
│ └── Fully populated database        │
└─────────────────────────────────────┘
            ↓ Git Push
┌─────────────────────────────────────┐
│ GitHub Repository                   │
│ ├── All source code                 │
│ └── dev.db (read-only snapshot)     │ ← Deployed as-is
└─────────────────────────────────────┘
            ↓ Netlify Deploy
┌─────────────────────────────────────┐
│ Netlify (Serverless)                │
│ ├── Next.js functions               │
│ └── dev.db (READ ONLY)              │ ← Can only read
└─────────────────────────────────────┘
```

## Deployment Steps for Phase 1

### 1. Verify Your Database is Populated

Make sure your local database has all the content you want:

```bash
# Check if database has content
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM MenuItem;"
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM SiteImage;"
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM Event;"
```

If empty, populate it via your admin panel locally first!

### 2. Commit the Database

```bash
# Add database to git
git add prisma/dev.db

# Commit
git commit -m "feat: Add pre-populated database for Phase 1 deployment"

# Push to GitHub
git push origin master
```

### 3. Deploy to Netlify

**Option A: Via Netlify UI**

1. Go to https://app.netlify.com
2. "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Environment variables:
   ```
   DATABASE_URL=file:./prisma/dev.db
   NODE_ENV=production
   NEXT_PUBLIC_API_BASE=https://YOUR_SITE.netlify.app
   ```
6. Deploy!

**Option B: Via Netlify CLI**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### 4. Test Your Deployment

Visit your site and verify:
- ✅ Home page loads
- ✅ Menu items display
- ✅ Images show correctly
- ✅ Events are visible
- ✅ Navigation works

**DO NOT TEST ADMIN PANEL** - writes will fail silently!

## Admin Panel Behavior

If you try to use the admin panel:

1. **Login works** ✅ (client-side only)
2. **You can see all content** ✅
3. **Editing appears to work** ⚠️
4. **Save button returns success** ⚠️
5. **But refresh the page...** ❌
6. **Changes are GONE** ❌

### Why This Happens:

```
User edits content → API receives request → Tries to write to dev.db
                                              ↓
                                    Writes to temporary file system
                                              ↓
                                    Request completes successfully ✅
                                              ↓
                                    Container destroyed
                                              ↓
                                    ALL CHANGES LOST ❌
```

## When to Use Phase 1 Deployment

✅ **Good for:**
- Demo websites
- Portfolio showcase
- Static content display
- Testing frontend functionality
- Showing clients the design

❌ **NOT good for:**
- Production websites
- Sites that need updates
- User-generated content
- Any CMS functionality
- Sites with admin access

## Phase 2: Upgrade to PostgreSQL

When you're ready for a fully functional site:

1. **Get PostgreSQL database** (Neon, Supabase, Railway)
2. **Update schema** to use PostgreSQL
3. **Migrate data** from SQLite to PostgreSQL
4. **Redeploy** with new DATABASE_URL
5. **Admin panel works!** ✅

See `DEPLOYMENT.md` for full Phase 2 migration guide.

## Current Limitations

| Feature | Status | Notes |
|---------|--------|-------|
| View Website | ✅ Works | Fully functional |
| View Content | ✅ Works | All data visible |
| Login to Admin | ⚠️ Works | But changes won't persist |
| Edit Content | ❌ Fails | Appears to work, then reverts |
| Upload Images | ❌ Fails | Files are lost |
| Delete Content | ❌ Fails | Appears deleted, then comes back |
| Add New Items | ❌ Fails | Won't persist |

## Troubleshooting Phase 1

### "Database not found" error

The database file didn't get deployed:
1. Check `.gitignore` - dev.db should NOT be ignored
2. Verify `git status` shows dev.db as tracked
3. Push again: `git push origin master`

### "Permission denied" writing to database

This is EXPECTED behavior:
- Netlify file system is read-only
- Writes fail silently or with errors
- This is why you need PostgreSQL for Phase 2

### Content is outdated

Your deployed database is a snapshot:
1. Update content locally via admin panel
2. Commit the updated dev.db file
3. Push to GitHub
4. Netlify auto-deploys the new snapshot

## Important Notes

- **Database is a snapshot** from when you last committed it
- **Admin panel is view-only** in production
- **This is temporary** - migrate to PostgreSQL ASAP
- **Not suitable for production** long-term
- **Phase 2 migration is recommended** within 1-2 weeks

## Next Steps

After Phase 1 deployment:

1. ✅ Test the public website thoroughly
2. ✅ Verify all content displays correctly
3. ✅ Show to stakeholders/clients
4. ⚠️ Plan Phase 2 migration to PostgreSQL
5. ⚠️ Don't give admin access to anyone

---

**Deployment Type:** Read-Only Static Database
**Suitable For:** Demo/Preview
**Production Ready:** No (Phase 2 required)
**Admin Panel:** View-only (non-functional)
