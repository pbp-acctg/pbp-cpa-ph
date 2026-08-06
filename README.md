# PBP CPA Accounting and Tax Services — Website

A static, single-page website for a Philippine accounting & tax services firm. Plain HTML/CSS/JS — no build step, no framework, so it runs anywhere and is easy to host for free on GitHub Pages.

**Services covered:** Bookkeeping, Accounting, Tax Compliance, Payroll, Financial Statements, BIR Registration, Tax Consultation.

## Files

```
index.html   — page content and structure
style.css    — all styling (design tokens at the top of the file)
script.js    — mobile nav, service accordion, scroll animations, form demo
```

## 1. Before you publish — replace the placeholders

Everything here is placeholder content. Search `index.html` for and update:

- Firm name (PBP CPA Accounting and Tax Services") and initials in the logo mark
- Email, phone, and office address in the **Contact** section
- Stats in the **trust strip** and **About** section (years, client count, etc.)
- Service descriptions, if your scope differs from what's listed
- `<title>` and `<meta name="description">` tags in `<head>` for SEO

## 2. Put it on GitHub

If you don't already have a repository:

```bash
cd cpa-site
git init
git add .
git commit -m "Initial site"
```

Create a new empty repository on GitHub (no README/license, since you already have files), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

## 3. Turn on GitHub Pages (free hosting)

1. On GitHub, open your repository → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` and folder to `/ (root)` → **Save**
4. Wait 1–2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

To use your own domain (e.g. `cabrerareyescpa.ph`) instead, add a `CNAME` file in the repo root containing just your domain name, and point your domain's DNS to GitHub Pages per [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 4. Make the contact form actually send email

Right now the form only shows a message on submit — it doesn't send anything, since a static site has no server. Easiest fixes, no backend required:

- **[Formspree](https://formspree.io)** (free tier available): create a form endpoint, then change the `<form>` tag in `index.html` to:
  ```html
  <form class="contact-form" id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
  and remove the `e.preventDefault()` line in `script.js`.
- Alternatively use **Netlify Forms** (if you host on Netlify instead of GitHub Pages) or a service like **EmailJS**.

## 5. Local preview

No build tools needed — just open `index.html` in a browser. For a local server (recommended, avoids some browser file-access quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Design notes

- Palette: deep ledger green, warm paper, muted gold, and a peso-blue accent — evokes an accounting ledger rather than a generic tech-startup look.
- The Services section is styled as a "chart of accounts," with each service given an account-code number (100–700), consistent with how accounting firms actually number their ledgers.
- Fully responsive down to small mobile screens, with a collapsible nav menu and stacked layouts.
- Respects `prefers-reduced-motion` for users who've disabled animation system-wide.
