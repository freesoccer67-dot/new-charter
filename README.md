# Charterportaal — Authentication & Foundation (Phase 1)

Vercel-ready preview for the Charterportaal authentication and dashboard foundation.

This repository currently shows the Phase 1 look: login screen, role-based access concept, dashboard shell, protected-module placeholders and blue/white high-end styling.

## Stack

- Next.js 15
- React 19
- TypeScript
- Supabase-ready environment placeholders
- Vercel deployment

## Run locally

```bash
npm install
npm run dev
```

## Environment variables for the real auth version

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

## Roles shown in Phase 1

- Super Admin
- Office
- Planner
- Finance
- Charter

## Next step

Import this GitHub repository in Vercel. After that, set the Supabase environment variables and replace the preview page with the full guarded auth flow from the source project when you are ready.
