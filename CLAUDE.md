# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## This is Next.js 16 — breaking changes apply

This project runs Next.js **16.2.6**, which differs from earlier versions in your training data. Before writing code, read the relevant guide in `node_modules/next/dist/docs/`. The docs are organized under `01-app/` (App Router).

Key breaking changes from Next.js 15:

- `dynamic`, `revalidate`, and `fetchCache` route segment configs **are removed** (when `cacheComponents` is enabled). Use `'use cache'` directive and `cacheLife()` instead. See `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md`.
- `export const experimental_ppr = true` is removed entirely.
- All pages are dynamic by default — `dynamic = 'force-dynamic'` is a no-op and should be removed.
- For instant client-side navigations, export `unstable_instant` from the route file and wrap uncached data in `<Suspense>`. `Suspense` alone is **not** enough — read `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md` before working on navigation performance.

## Architecture

Standard Next.js App Router layout:

- `app/layout.tsx` — root layout; loads Geist/Geist Mono fonts, applies CSS variable classes
- `app/page.tsx` — home page (currently the default scaffold)
- `app/globals.css` — Tailwind v4 imports + shadcn/base-nova CSS design tokens (oklch-based color palette, light/dark themes)
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge)

## UI stack

- **shadcn** (`style: base-nova`) — add components with `npx shadcn add <component>`. Config in `components.json`. Components land in `components/ui/`.
- **@base-ui/react** — the underlying headless primitives used by shadcn components in this style variant (not Radix UI).
- **Tailwind CSS v4** — configured via CSS (`app/globals.css`), not a JS config object. `tailwind.config.ts` only specifies `content` paths.
- **tw-animate-css** — animation utilities, imported in `globals.css`.
- Icons: **lucide-react**.
- Path alias `@/` maps to the project root (configured in `tsconfig.json`).
