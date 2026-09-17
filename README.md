# your-talent.de

A recruitment-agency website for placing international skilled workers with
companies in Germany: public vacancy listings with an application form
(including CV upload and GDPR consent), a login-protected admin panel to
post vacancies and review applications, a contact form, and a cookie
consent banner gating optional analytics. Available in German, English,
and Uzbek.

Built with [Next.js](https://nextjs.org) (App Router) and
[Supabase](https://supabase.com) (Postgres, Storage, Auth).

## Features

- Public pages: home, vacancies list/detail, "For Companies", "For
  Candidates", contact, Impressum, Datenschutz — all localized (`de`,
  `en`, `uz`) with automatic locale detection from the browser.
- Application form with CV upload (PDF/DOC/DOCX), stored in a private
  Supabase Storage bucket.
- Contact form, stored in the database and readable only by admins.
- Admin panel (unlocalized, `/admin`) to create/publish/unpublish/delete
  vacancies and review applications and contact messages, protected by
  Supabase Auth.
- Row-level security throughout: the public can read published vacancies
  and submit applications/messages; only an authenticated admin can read
  or manage the rest.
- Cookie consent banner; optional Google Analytics only loads after a
  visitor accepts.

## Getting started

1. Create a [Supabase](https://supabase.com) project (the EU regions are
   a sensible default if you're targeting German users, for GDPR reasons).
2. Run the SQL files in `supabase/migrations/` (in order) via the
   Supabase SQL editor, or the Supabase CLI.
3. Copy `.env.example` to `.env.local` and fill in your Supabase project
   URL and publishable/anon key (Project Settings → API).
4. Create an admin account: Supabase Dashboard → Authentication → Users
   → Add user. This is the account you'll use to log in at `/admin/login`.
5. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

### Optional: analytics

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` to your Google
Analytics 4 measurement ID to enable analytics. It only loads after a
visitor accepts cookies in the consent banner; leave it unset to disable
analytics entirely.

## Before going live

- Replace the bracketed placeholders in the Impressum and Datenschutz
  pages (`src/i18n/dictionaries/*.ts`) with real business details —
  German law requires an accurate legal notice on commercial websites.
- Review the Uzbek translations with a native speaker, particularly the
  legal pages.
- Swap the placeholder hero image and service copy for your own content.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Supabase](https://supabase.com) (Postgres, Storage, Auth)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## License

MIT — see [LICENSE](./LICENSE).
