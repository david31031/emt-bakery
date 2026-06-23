# EMT Bakery – Deployment Guide
**Module:** WEDE5020 | IIE Rosebank College | Part Three

---

## Step 1: Push to GitHub

```bash
cd emt-bakery
git init
git add .
git commit -m "feat: Parts 1-3 complete – EMT Bakery website"
git remote add origin https://github.com/YOUR-USERNAME/emt-bakery.git
git push -u origin main
```

**Updating an existing repo:**
```bash
git add .
git commit -m "feat: Part 3 – dynamic JS, forms, SEO files"
git push origin main
```

---

## Step 2: Deploy on Netlify (Recommended – Free)

1. Go to https://app.netlify.com → Sign up with GitHub
2. Click **"Add new site" → "Import an existing project"**
3. Select **GitHub** → choose `emt-bakery`
4. Settings: Branch = `main` | Build command = *(leave empty)* | Publish directory = `.`
5. Click **"Deploy site"**
6. Your site goes live at `https://emt-bakery-abc123.netlify.app`

---

## Step 3: Deploy on GitHub Pages (Alternative – Free)

1. Repository → **Settings → Pages**
2. Source: **Deploy from a branch** | Branch: `main` | Folder: `/ (root)`
3. Live at: `https://YOUR-USERNAME.github.io/emt-bakery/`

---

## Step 4: Post-Deployment Checklist

```
☐ Site loads at deployed URL
☐ All images and CSS/JS load correctly
☐ Products page: search, filter, sort work
☐ Enquiry form: validation + response card work
☐ Contact form: email preview + success state work
☐ robots.txt accessible at /robots.txt
☐ sitemap.xml accessible at /sitemap.xml
☐ Submit sitemap to Google Search Console
☐ Claim Google Business Profile for local SEO
```

---

*Generated for WEDE5020 Part Three | IIE Rosebank College | June 2026*
