# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js 16 (App Router) site for Old School, an anti-ageism nonprofit, deployed on Netlify at oldschool.info. All content (resources, quotes, team, events, categories, collections) lives in Airtable — this app is a read-only front end over that data plus a resource-submission form and search.

## Commands

- `npm run dev` — start dev server (runs against `.env.development`)
- `npm run build` — runs `prebuild` (downloads Airtable images/PDFs) → `next build` → `postbuild` (pushes to Algolia)
- `npm run lint` — `eslint .` (flat config in `eslint.config.mjs`, built on `eslint-config-next/core-web-vitals`)
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
- A handful of interactive/browser-only pieces are loaded with `next/dynamic` and `{ ssr: false }`: `FrontCarousel` (`src/app/page.tsx`, via `src/components/FrontCarousel/dynamic.tsx`), `Search` (`src/components/Menu/index.tsx`), `Event` (`src/app/events/page.tsx`, via `src/components/Event/dynamic.tsx`). Since Next 16, `next/dynamic(..., { ssr: false })` must be called from a Client Component, not inline in a Server Component page — hence the small `dynamic.tsx` wrapper files. `CardHolder` used to need this treatment too, for the reason below, but no longer does.
- Page transitions go through `next-view-transitions` — import `Link` from `next-view-transitions`, not `next/link`, anywhere transitions matter.
- Styling is CSS Modules throughout (`*.module.css` colocated with components).
- `useOutsideAlerter` (`src/hooks/useOutsideAlerter.tsx`) is a shared hook for closing menus/panels on an outside click — used by `Menu` and `Search`. Define click-outside logic there rather than re-inlining it in a component (a hook defined inside a component body trips the `react-hooks/refs` lint rule).

### TypeScript

- `isolatedModules: true` is set in `tsconfig.json`. Always use `import type { X }` (or the inline `import Y, { type X }` form) for anything imported purely as a type, especially from `@/types/index` — plain `import` of a type-only symbol can leave stale references in webpack's module graph and produce `Cannot read properties of undefined (reading 'call')` errors that require clearing `.next` to fix.
- Path alias `@/*` maps to `./src/*`.
- Central type definitions live in `src/types/index.tsx` (`ResourceItem`, `EventRecord`, `PersonRecord`, `AirtableRecord`, `FlatAirtableResource`, `QuoteRecord`, `CategoryType`, `AlgoliaHit`, `LanguageGroup`, `CategoryPageData`, `CollectionPageData`).
- `tsconfig.json` excludes `**/*.test.ts`/`**/*.test.tsx`. `next build` runs its own `tsc` type-check using this config, and Netlify's dependency install skips devDependencies (`@types/jest` included) — without the exclusion, that build-time check fails on `describe`/`it` being unresolved globals in test files, even though the exact same build passes fine locally where devDependencies are installed. Jest itself doesn't use this file's `include`/`exclude` to discover tests, so this doesn't affect `npm test`.

### Known constraints

- **`CardHolder` uses `react-plock`, not `react-responsive-masonry`.** `react-responsive-masonry` (still used directly by `Search`'s results grid — see below) has a real, long-standing SSR/hydration bug: its `ResponsiveMasonry`'s `useWindowWidth` (`node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js`) initializes width via `useState(typeof window !== "undefined" ? window.innerWidth : 0)`. During SSR `window` is undefined → width starts at `0` → the smallest breakpoint (1 column) gets baked into the HTML. During hydration, `window` already exists on the client's very first render — *before* the library's own "has mounted" gating kicks in — so the client immediately computes the real viewport's column count, and `<Masonry>` distributes children into a different column/row arrangement than what the server rendered. This showed up as a resource card's content (e.g. its type badge) not matching between server and client at the same tree position, on every load where the viewport is ≥ 262px wide — not a rare dev-only glitch.
  - Confirmed via GitHub (`cedricdelpoux/react-responsive-masonry`, 456★, 32 open issues) that this is well known and unresolved upstream: issue #127 ("Can't use in Nextjs") has 23 comments and has been open since July 2024; several other SSR/hydration issues (#120, #121, #57, #32, #10) were closed as "fixed" over the years without the underlying problem going away. We're already on `^2.7.2`, the current latest release (checked npm, published April 2026) — there's no newer or older version that avoids it.
  - **Alternatives researched** (evaluated by reading each one's actual source, not just docs) and one tried for real:

    | Library | Weekly downloads | Maintenance | Column-width mechanism | Outcome |
    |---|---|---|---|---|
    | `@masonry-grid/react` | ~900 | Very active, young (created Oct 2025), 98★ | Real CSS Grid `auto-fill`; masonry-packing tweaks applied via direct DOM style mutation, outside React's VDOM | **Tried, reverted.** Structurally immune to the hydration bug in theory, but its `Frame` component wants a fixed aspect-ratio tile (photo-gallery shape). `ResourceCard` is `height: max-content` (image + variable-length title/description) — feeding it the image aspect ratio produced a broken layout in the trial (grid container collapsed to half-width, needed layout CSS surgery to fix) and left a real risk of row overlap for cards whose text pushes them taller than the declared aspect ratio predicts, since the packing math assumes declared height is real height. Not a clean fit for content cards. |
    | `react-plock` | ~5,400 | Active, 598★, shipped a "fix SSR flicker" release (v3.1.0) with a live Next.js demo | `window.matchMedia`, but state starts at a hardcoded `0` and the real read only happens inside `useEffect` | **Adopted.** Same "start neutral, update after mount" pattern this repo already uses in `useWidth.tsx`. Verified clean (zero hydration errors) across homepage, category, collection, and resource-subresource pages, at 4 viewport widths, with `CardHolder` server-rendered directly (no `ssr:false` needed anywhere). Tradeoff: like the old `ssr:false` workaround, the grid still renders nothing in the raw SSR HTML until the client mounts (`if (!columns) return null` — confirmed via `curl`), so this fixes the hydration bug and lets `CardHolder` be used without special-casing, but doesn't make the resource grid crawlable to a no-JS client. |
    | `@egjs/react-grid` | ~4,300 | Active (Naver-backed), 316★ | Multiple layout modes | Not tried — its open SSR issues are all Svelte/Nuxt, none Next.js-specific, so it might be fine, but wasn't source-checked or trialed. |
    | `masonic` | ~75,000 | Active, 1409★, but it's a **virtualization** library | Windowed rendering — off-screen items never enter the DOM | Ruled out — has closed "Hydration failed"/"SSR mode" issues, and more fundamentally a virtualized list never puts the full resource set in crawlable HTML regardless of SSR fixes. Wrong shape of tool for a content-listing grid. |

  - **Current status**: `CardHolder` (`src/components/CardHolder/index.tsx`) renders via `react-plock`'s `Masonry`, configured with `useBalancedLayout: true` and two breakpoint configs (`defaultConfig`, `collectionPageConfig`) carried over from the old `columnsCountBreakPoints` maps. It's used directly (no `ssr:false`, no `dynamic.tsx` wrapper) everywhere — homepage, category pages, collection pages, resource subresources. The `gap` is a flat `20` (px) rather than the responsive `var(--paddingOutside)` CSS variable the old implementation used, since `react-plock`'s `gap` config takes numbers, not CSS strings — a reasonable approximation, not pixel-identical to the old gutter at every breakpoint.
  - **`Search`'s results grid still uses `react-responsive-masonry` directly** (`src/components/Search/index.tsx`) and still has the bug described above — untouched by this migration. It's not affected in practice because `Search` is already excluded from SSR entirely (`next/dynamic(..., { ssr: false })` in `Menu/index.tsx`), so there's no server-rendered HTML for it to mismatch against. Worth migrating to `react-plock` too for consistency, but wasn't in scope here.
- This runs on Next 16 with Turbopack (`turbopack: {}` in `next.config.mjs`; the old webpack config with `canvas`/`encoding` aliases and `experimental.serverMinification` was removed as part of the Next 14→16 migration — neither was still needed). Dynamic route `params`/`searchParams` are Promises (`await params`), not synchronous props. `next lint` was removed in Next 16; lint runs via plain `eslint .` against the flat config in `eslint.config.mjs`, built on `eslint-config-next/core-web-vitals`. React is still pinned to 18.3.1 via `overrides` in `package.json` — Next 16 supports both 18 and 19, and this hasn't been revisited.
- `eslint-plugin-react-hooks` (pulled in by `eslint-config-next`) is now on a major version with much stricter "React Compiler" rules (no direct `setState` calls in an effect body, no impure calls like `Math.random()`/`Date.now()` during render, no reading a ref during render). Where a `setState`-in-effect call is a genuine external-system sync (embla carousel events, `IntersectionObserver`, `window.resize`, avoiding an SSR/hydration mismatch for browser-only values), it's fine to silence the rule inline with a comment explaining why, following the existing examples in `CarouselButtons.tsx`, `CategorySlide/index.tsx`, `JustOneTestimonial.tsx`, and `useWidth.tsx`. Where the value can just be computed during render instead (a `useState` lazy initializer, or no state at all), prefer that over disabling the rule.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
