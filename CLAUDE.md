# Meridian Ledger — CPA Firm Website

This file is the single source of truth for the project. Read it fully before writing code.

---

## 1. What we are building

A marketing website for a US-based public accounting firm (CPA). Frontend only.
No backend, no database, no auth. The contact form posts to a form service
(Formspree / Web3Forms free tier) — no server code.

The firm is fictional but must read as completely real. Placeholder brand values
live in ONE file (`src/config/site.ts`) so the real firm name, phone, address and
logo can be swapped in one edit.

**Placeholder brand:** Meridian Ledger CPA, Austin TX.

**Audience:** small-business owners (5–100 employees) and high-income individuals
who are tired of a shoebox of receipts and a CPA who doesn't call back.

**The page's job:** make a stranger trust the firm enough to book a consultation.

---

## 2. Stack (fixed — do not substitute)

- Next.js 15, App Router, TypeScript
- Tailwind CSS v4
- Static rendering (`generateStaticParams` for dynamic routes) — no server actions
- `next/font` for fonts, `lucide-react` for icons
- Deploy target: Vercel
- No CMS, no i18n, no state library, no animation library beyond CSS

Everything must build clean with `npm run build`.

---

## 3. Design direction

The subject is bookkeeping and tax — the visual vernacular is the **ledger**:
ruled lines, columns, aligned figures, marginal annotations. Lean into that. It is
specific to this brief and it is what keeps the site from looking like every other
SaaS template.

### Tokens

```
--ink        #0E1F2B   near-black blue, primary text and dark sections
--paper      #F6F5F1   page background, warm neutral (NOT cream/#F4F1EA)
--ledger     #1C5C48   deep ledger green, primary accent + CTAs
--brass      #B58B2A   secondary accent, used ONLY on numbers and figures
--rule       #D6D3CA   hairline rules and table borders
--slate      #5A6672   secondary text
```

### Type

- Display: **Fraunces** (variable serif), weights 500/700, tight tracking on large sizes
- Body/UI: **Inter**, 400/500/600
- All figures, prices, dates and stats use `font-variant-numeric: tabular-nums`
  so columns align like a real ledger. This is the signature detail — apply it everywhere.

Type scale: 14 / 16 / 18 / 22 / 28 / 38 / 52 / 72. Body line length under 72ch.
Serif body text gets extra line-height.

### Layout concept

A visible column grid. Section headings sit in a narrow left column with a
1px vertical rule separating them from the content column, like a ledger's
description/amount split. Content is left-aligned throughout — no centered
paragraph blocks.

```
┌──────────────┬────────────────────────────────────────────┐
│ Tax planning │  Most owners overpay because nobody looked  │
│ Service 04   │  at the return until March.                 │
│              │  ─────────────────────────────────────────  │
│              │  What's included        Turnaround   From   │
│              │  Entity review          2 weeks      $900   │
│              │  Quarterly projections  ongoing      $350   │
└──────────────┴────────────────────────────────────────────┘
```

### Explicitly avoid

These are generated-page tells. Do not use them:

- Cream background + terracotta accent (#D97757 or near it)
- Tracked-out ALL-CAPS eyebrow labels above every heading
- One word in a headline colored or italicised for emphasis
- Identical rounded cards with the same soft grey shadow for every section
- `01 / 02 / 03` numbered markers unless the content is genuinely a sequence
  (the onboarding steps ARE a sequence — numbers are fine there only)
- `→` appended to link text
- Meta strings joined with middle dots
- Fade-and-slide-up on every section on scroll

### Motion

One orchestrated moment only: the homepage deadline strip counts up on load.
Everything else is hover/focus states and expand/collapse. Respect
`prefers-reduced-motion`.

### Quality floor

Responsive to 360px, visible keyboard focus rings, semantic headings,
alt text on every image, colour contrast AA minimum.

---

## 4. Sitemap (~32 pages)

Pages marked **[data]** are generated from a data file by one template.

```
/                          Home
/about                     About the firm
/team                      Team (6 people)
/careers                   Careers
/contact                   Contact + form + map placeholder

/services                  Services index
/services/[slug]           [data] 10 service pages

/industries                Industries index
/industries/[slug]         [data] 6 industry pages

/pricing                   Packages
/process                   How working with us works
/tax-calendar              2026 filing deadlines (interactive)
/tools/entity-quiz         "Which entity fits you?" quiz
/tools/bookkeeping-estimate  Monthly bookkeeping cost estimator
/faq                       FAQ (accordion)

/insights                  Blog index
/insights/[slug]           [data] 4 articles

/privacy                   Privacy policy
/terms                     Terms
```

### Services (10)

1. Individual tax preparation — `individual-tax-preparation`
2. Business tax returns (1120, 1120-S, 1065) — `business-tax-returns`
3. Tax planning & projections — `tax-planning`
4. Monthly bookkeeping — `bookkeeping`
5. Payroll services — `payroll`
6. Outsourced CFO & advisory — `cfo-advisory`
7. IRS notice & audit representation — `irs-representation`
8. Entity formation & structuring — `entity-formation`
9. Sales tax & multi-state compliance — `sales-tax-compliance`
10. Estate, trust & gift returns — `estate-and-trust`

### Industries (6)

Real estate & short-term rentals, medical & dental practices, restaurants
& hospitality, construction & trades, e-commerce & SaaS, nonprofits.

### Articles (4)

- "The S-corp election isn't free money — here's the actual math"
- "What triggers an IRS notice for a small business (and what doesn't)"
- "Quarterly estimates: how to stop the April surprise"
- "Bookkeeping cleanup: what a year of neglect actually costs"

---

## 5. Content rules

Content is what makes this look like a real firm rather than a template. Thin
copy will sink the whole thing.

- Every service page: 700–1000 words of genuinely specific copy
- Every service page carries the same structure: what it is → who it's for →
  what's included (a real table with deliverables, turnaround, starting price) →
  what it costs you not to do it → 4 FAQs → CTA
- Industry pages: 500–700 words, naming the tax issues actually specific to that
  industry (cost segregation for real estate, tip credit for restaurants,
  percentage-of-completion for construction, nexus for e-commerce)
- Articles: 900–1200 words, written like a practitioner, with a worked example
  containing real numbers
- Write in plain sentences. Active voice. No "leverage", "seamless", "empower",
  "in today's fast-paced".
- Every price is a starting price and says so.

### Compliance note (required)

CPA marketing carries real constraints. On every page that mentions numbers or
outcomes, include the disclaimer component: this is general information, not tax
advice, and does not create a client relationship. Never claim a guaranteed
refund or outcome. Never state a licence number, since the placeholder firm has none.

---

## 6. Interactive pieces

Three, all client-side, all with the ledger aesthetic:

1. **Filing deadline tracker** (`/tax-calendar` + a compact strip on the home page)
   Hardcoded 2026 IRS deadlines, shows days remaining, highlights the next one.

2. **Entity quiz** (`/tools/entity-quiz`)
   6 questions → recommends sole prop / LLC / S-corp / C-corp with reasoning.
   Ends with a disclaimer and a CTA, never a definitive legal conclusion.

3. **Bookkeeping estimator** (`/tools/bookkeeping-estimate`)
   Inputs: monthly transactions, bank accounts, payroll yes/no, months behind.
   Outputs an estimated monthly range. Figures render in brass, tabular-nums.

These are the reason the site looks expensive. Build them properly.

---

## 7. File layout

```
src/
  config/site.ts            brand, nav, contact, socials — the swap file
  content/
    services.ts             10 entries, fully typed
    industries.ts           6 entries
    articles.ts             4 entries
    faqs.ts
    team.ts
    deadlines.ts
  components/
    layout/  Header Footer
    ui/      Rule Figure Table Accordion Disclaimer CTA Button
    sections/ Hero DeadlineStrip ServiceGrid Testimonials ProcessSteps
    tools/   EntityQuiz BookkeepingEstimator DeadlineTracker
  app/       routes as per sitemap
```

Types for all content live in `src/content/types.ts`.

---

## 8. Definition of done

- `npm run build` passes with zero errors
- Every route in the sitemap resolves, no 404s from internal links
- No Lorem ipsum anywhere
- Metadata (title, description, OG) on every page
- `sitemap.xml` and `robots.txt` generated
- LocalBusiness + FAQPage JSON-LD schema
- Deployed to Vercel, pushed to GitHub
