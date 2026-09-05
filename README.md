# Meridian Ledger CPA

Marketing site for Meridian Ledger CPA, a fictional CPA firm in Austin, TX. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

**Live:** [meridian-ledger-one.vercel.app](https://meridian-ledger-one.vercel.app/)

## Stack

- Next.js (App Router, Turbopack, static generation)
- TypeScript
- Tailwind CSS v4
- Web3Forms for the contact form
- Playwright for screenshot-based visual review

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run screenshot` — starts the dev server, visits every route in the sitemap, and saves PNGs at 1440px and 390px to `.screenshots/` (gitignored)

## Project structure

- `src/config/site.ts` — brand, navigation, and contact config
- `src/content/` — typed content data (services, industries, articles, team, FAQs, deadlines)
- `src/components/` — shared UI, layout, section, and tool components
- `src/app/` — routes, one per page in the sitemap, plus `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx`
- `public/images/` — site imagery sourced from the Pexels API, with `manifest.json` mapping each image to its slug, photographer, and source URL for attribution
- `scripts/fetch-images.mjs` — fetches and saves images from Pexels for a hardcoded list of queries (reads `PEXELS_API_KEY` from `.env.local`)
- `scripts/screenshot.mjs` — the visual review tool described above

## Environment variables

Create a `.env.local` (never committed) with:

```
PEXELS_API_KEY=your_key_here
```

Only needed if re-running `scripts/fetch-images.mjs`. The Web3Forms access key used by the contact form is a public, client-side key and lives in `src/config/site.ts`.

## Deployment

Deployed on Vercel, auto-deploying from `main`.
