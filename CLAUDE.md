# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js 14 (App Router) site for Old School, an anti-ageism nonprofit, deployed on Netlify at oldschool.info. All content (resources, quotes, team, events, categories, collections) lives in Airtable — this app is a read-only front end over that data plus a resource-submission form and search.

## Commands

- `npm run dev` — start dev server (runs against `.env.development`)
- `npm run build` — runs `prebuild` (downloads Airtable images/PDFs) → `next build` → `postbuild` (pushes to Algolia)
- `npm run lint` — `next lint` (config: `next/core-web-vitals`)
- `npm test` / `npm run test:watch` — Jest (`TZ=UTC` is forced so date tests are deterministic)
- Run a single test file: `TZ=UTC npx jest src/lib/dates.test.ts`
- `node scripts/prebuild.js` — standalone: fetch Airtable images/PDFs into `public/` and `src/caches/pdfs/cache.json`
- `node scripts/algolia-next.js` — standalone: rebuild the Algolia `nextindex` from Airtable

Both scripts require `.env.development` or `.env.production` (selected via `NODE_ENV`) with `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, and (for Algolia) `NEXT_PUBLIC_ALGOLIA_APP_ID` / `ALGOLIA_SEARCH_ADMIN_KEY`.

## Architecture

### Data flow: Airtable → build-time cache → pages

1. **`scripts/prebuild.js`** runs before every build. It pulls records from three Airtable tables (`oldschool`, `The Team/Collaborators`, and implicitly resources for PDFs), downloads any linked images/PDFs into `public/images/{resources,team}/` and `public/pdfs/`, and writes an ID-list cache file (`cache.json`) next to each so repeat builds skip files that are already downloaded. `src/caches/pdfs/cache.json` is imported directly by resource pages to know which resources have a locally-cached PDF.
2. **`src/utils/airtable.js`** is the actual Airtable client layer — one function per table/query (`getResources`, `getEvents`, `getTeam`, `getCategories`, `getCollections`, `getQuotes`, `possibleSlugs`, etc.). Every page-level data function in `src/lib/` (`getResourceData`, `getCategoryData`, `getCollectionData`, `getEvents`, `getNewestData`, `getTeam`) sits on top of this and reshapes raw Airtable fields into the typed shapes in `src/types/index.tsx`.
3. Slugs are derived, not stored authoritatively: `slugify()` in `src/utils/airtable.js` / `src/utils/misc.tsx` normalizes a record's `Slug` field or falls back to a normalized `Title`. Dynamic routes (`src/app/resource/[slug]`, `category/[slug]`, `collection/[slug]`) look up records by matching this derived slug, not by Airtable record ID.
4. Resources can have **subresources** (nested/linked records) — see `getSubresource` in `src/lib/getResourceData.tsx`. A subresource is only surfaced if it's flagged as a subresource, published, and not marked hidden.
5. **`scripts/algolia-next.js`** (postbuild) re-derives its own flattened view of resources + events + subresources and does a full `replaceAllObjects` on the `nextindex` Algolia index — it does not incrementally update.
6. Image blur placeholders are generated at request/build time via `@plaiceholder/next` (`getPlaiceholder`) reading the already-downloaded file from `public/`, not from the remote Airtable URL.

### Rendering

- Server components do the Airtable/data-layer fetching directly (no client-side data fetching for content).
- A handful of interactive/browser-only pieces are loaded with `next/dynamic` and `{ ssr: false }`: `FrontCarousel` (`src/app/page.tsx`), `Search` (`src/components/Menu/index.tsx`), `Event` (`src/app/events/page.tsx`).
- Page transitions go through `next-view-transitions` — import `Link` from `next-view-transitions`, not `next/link`, anywhere transitions matter (see the file list in `NEXTJS_MIGRATION.md` if touching this).
- Styling is CSS Modules throughout (`*.module.css` colocated with components).
- `src/components/Search/index.tsx` still has vestigial Pages Router code (`getStaticProps`, `renderToString`) that is dead in App Router — don't treat it as a live data path.

### TypeScript

- `isolatedModules: true` is set in `tsconfig.json`. Always use `import type { X }` (or the inline `import Y, { type X }` form) for anything imported purely as a type, especially from `@/types/index` — plain `import` of a type-only symbol can leave stale references in webpack's module graph and produce `Cannot read properties of undefined (reading 'call')` errors that require clearing `.next` to fix.
- Path alias `@/*` maps to `./src/*`.
- Central type definitions live in `src/types/index.tsx` (`ResourceItem`, `EventRecord`, `PersonRecord`, `AirtableRecord`, `FlatAirtableResource`, `QuoteRecord`, `CategoryType`, `AlgoliaHit`, `LanguageGroup`, `CategoryPageData`, `CollectionPageData`).

### Known constraints

- `react-responsive-masonry` is pinned to an older version (used in the search results grid) due to a bug in newer releases — don't bump it without checking.
- `experimental.serverMinification: false` in `next.config.mjs` works around a Next 14 bundler bug; the webpack config also disables `canvas`/`encoding` aliases (needed by `react-pdf`'s dependency chain).
- This is currently pinned to Next 14 / React 18 (`package.json` has `overrides` forcing React 18.3.1). See `NEXTJS_MIGRATION.md` for the full plan and file list if asked to upgrade to Next 15/16 — notably, dynamic route `params`/`searchParams` are still synchronous props here (pre-Next-15 API), not Promises.
