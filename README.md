# Maruti Khapare — portfolio

A Next.js App Router portfolio built with React, with an OLRAA case study and a server-side Google Calendar booking endpoint.

## Develop

Use Node.js 20.9 or newer and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm start
```

## Source structure

- `app/page.js`: homepage composition and metadata.
- `app/components/home/`: homepage sections, React navigation and project filters, chatbot, booking form and FAQ.
- `app/home.css`: homepage styles scoped to the homepage body.
- `app/work/olraa/`: case-study page and scoped styles.
- `app/api/book-call/route.js`: server-only booking endpoint.
- `app/layout.js`: shared document, fonts and default metadata.
- `app/robots.js` and `app/sitemap.js`: generated search-engine routes.
- `public/`: campaign images, social preview and analytics script. Social preview images are served through Next.js metadata routes, with the existing OLRAA PNG retained.
- `tests/routes.test.mjs`: production-route regression checks.

The homepage renders native JSX. There is no legacy HTML file, runtime HTML parsing, duplicate booking handler or source-export script.

## Deployment

The existing Vercel Git integration deploys pushes to `main`. `vercel.json` selects Next.js, installs from the pnpm lockfile and builds `.next` output. The root directory is the repository root. Keep `pnpm-lock.yaml` committed.

Legacy `/index.html` and `/olraa` URLs redirect to `/` and `/work/olraa` respectively.

Run regression checks against a running production server:

```sh
TEST_ORIGIN=http://localhost:3005 pnpm test
```

PowerShell:

```powershell
$env:TEST_ORIGIN='http://localhost:3005'
pnpm test
```

The checks do not create calendar bookings. Test navigation, project filters, chatbot responses and booking-form validation in the browser after UI changes.

## Booking environment

Copy `.env.example` to `.env.local` for local configuration, or set the variables in Vercel. Never commit real credentials.

Enable Google Calendar API, configure OAuth consent and obtain an offline refresh token with Calendar event and free/busy permissions. The endpoint returns an unavailable message until credentials are configured, and reports success only after Google confirms event creation.

Optional owner email alerts use `RESEND_API_KEY` and `BOOKING_FROM_EMAIL` (a verified sender). Google Calendar sends the guest invitation.

Slots last 30 minutes, Monday–Friday, starting 09:00–17:30 IST, within 60 days and at least one hour ahead. The endpoint checks busy times before creating an event. Concurrent slot locking and abuse controls are not implemented.

## Case-study evidence and assets

Historical figures are approximate, self-reported recollections, not independently audited exports. OLRAA reports approximately 1.2 million impressions, 20,000 search clicks and 120,000 indexed pages. No reporting period, CTR, SEO-attributed revenue or intermediate performance observations are inferred.

Published brand creatives illustrate seasonal messaging; they do not prove individual authorship or performance. External framework references are linked on the case-study page. General technical considerations and post-purchase suggestions are distinguished from confirmed engagement work.

Site-wide GA4, Clarity and Mixpanel integrations are loaded once in the root layout through `next/script`. Chatbot question text is not included in the manual Mixpanel question event.
