# Maruti portfolio — Vercel deployment

- Upload this folder as a Vercel project. The website is `index.html`; the secure API is `/api/book-call`.
- This is a real Google Calendar integration, **not activated until credentials are configured**. It will never claim a successful booking without receiving confirmation from Google Calendar.
- Google Cloud Console: enable Google Calendar API, configure OAuth consent screen, create OAuth Web App, authorize Calendar access with `https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.freebusy` (or `https://www.googleapis.com/auth/calendar` where necessary), and securely obtain an offline refresh token for the Calendar owner's account.
- Set these Vercel environment variables: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CALENDAR_ID` (usually `primary`), `BOOKING_OWNER_EMAIL` (defaults to `makhapare@gmail.com`). Never put tokens in browser HTML or source control.
- Optional separate owner email alert: `RESEND_API_KEY` and `BOOKING_FROM_EMAIL` (a verified sender address). Google Calendar `sendUpdates=all` sends the client a calendar invitation, and the event appears on the owner's calendar. The optional Resend email gives the owner a separate notification.
- Slots are 30 minutes, weekdays 09:00–18:00 IST, bookable within 60 days. Server checks busy times before creating an event. In high-volume production consider locking slots against simultaneous requests, rate limits, CAPTCHA, and verifying sender email before invite creation.
- Tracking scripts from the original file are preserved verbatim. The original chatbot is included unchanged and the Book a Call interface is appended as a separate enhancement.
