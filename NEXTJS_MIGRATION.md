# Next.js 14 → 16 Migration Plan

Current version: **14.2.35** | Target: **16.x (latest)**

---

## What's straightforward (low risk)

Most of the stack is already compatible or has easy upgrade paths:

- **`react-pdf`** — already declares React 19 support
- **`react-instantsearch` / `react-instantsearch-nextjs`** — supports Next up to 16, React up to 19
- **`react-cookie-consent`**, **`react-mailchimp-subscribe`** — both React 19-compatible
- **`@netlify/plugin-nextjs`** — v5.x already supports Next 15/16
- **`embla-carousel`** — no React peer dep constraints
- **App Router patterns** — `generateStaticParams`, `generateMetadata`, server components, client components, CSS Modules, dynamic imports all carry over unchanged
- **`next.config.mjs`** — the `serverMinification: false` workaround and the canvas/encoding webpack aliases are probably still needed; no renames required
- **`netlify.toml`** — no changes needed

---

## What will definitely break

### 1. Dynamic route `params` — three files

Next.js 15 made `params` (and `searchParams`) a `Promise`. Every dynamic page component needs to be updated:

```typescript
// Before (14)
const Page = ({ params: { slug } }: { params: { slug: string } }) => { … }

// After (15+)
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  …
}
```

Files affected:
- `src/app/category/[slug]/page.tsx`
- `src/app/collection/[slug]/page.tsx`
- `src/app/resource/[slug]/page.tsx`

The `generateMetadata` export in each of those files needs the same treatment. The Next.js codemod handles this automatically (see step 1 below).

### 2. `next-view-transitions` version

Currently on `0.1.1`; latest is `0.3.5`. The package supports Next ≥14 and React 18/19 so it is not being retired — but 0.1 → 0.3 likely has API changes. The `ViewTransitions` wrapper in `src/app/layout.tsx` and the `Link` import across 12+ files will need to be verified after upgrading:

- `src/app/layout.tsx`
- `src/app/officehours/page.tsx`
- `src/app/page.tsx`
- `src/app/intro/page.tsx`
- `src/app/library/TocCards.tsx`
- `src/app/library/page.tsx`
- `src/app/about/page.tsx`
- `src/app/events/page.tsx`
- `src/app/resource/[slug]/page.tsx`
- `src/components/Footer/LinkFooter.tsx`
- `src/components/FrontCarousel/slides.tsx`
- `src/components/FrontCarousel/CategorySlide/index.tsx`
- `src/components/ResourceCard/index.tsx`
- `src/components/Menu/index.tsx`

### 3. Dead Pages Router code in `Search/index.tsx`

`getStaticProps` and the `renderToString` import in `src/components/Search/index.tsx` are Pages Router APIs — they were always no-ops in the App Router, but Next.js 15 may warn or error on them. Should be removed regardless.

---

## What might break (needs testing)

### 4. `react-fukidashi`

Its peer dep declaration is `^16.8.0 || ^17.0.2`, which doesn't include React 18 or 19. Used only in `src/app/intro/DemoComponent.tsx`. May work fine at runtime despite the stale peer dep declaration, or may not. If that page isn't actively used it's a candidate for removal.

### 5. `react-responsive-masonry`

Pinned at `2.3.0` due to an existing bug (see README). No peer dependency declared, so React 19 compatibility is unknown. Used in the search results grid. Test thoroughly; if it breaks, check whether the bug that caused the pin is fixed in a newer version.

### 6. Caching defaults

Next.js 15 flipped `fetch()` from cache-by-default to no-cache-by-default. The Airtable SDK uses its own HTTP client rather than `fetch()`, so Airtable calls are unaffected. But any direct `fetch()` calls added in future code will need explicit `{ cache: 'force-cache' }` to opt back in.

### 7. `experimental.serverMinification: false` in `next.config.mjs`

This workaround was for a Next.js 14 bundler bug. It may no longer be needed in 16, or the option may have moved out of `experimental`. Check after upgrading and remove if the build passes without it.

---

## Recommended order of operations

1. **Run the Next.js codemod first** — in a new branch:
   ```bash
   npx @next/codemod@latest upgrade
   ```
   This handles the `params`/`searchParams` async changes and other mechanical transformations automatically.

2. **Upgrade packages:**
   ```bash
   npm install next@latest react@19 react-dom@19 @types/react@latest @types/react-dom@latest next-view-transitions@latest
   ```

3. **Remove the React `overrides`** in `package.json` — they were forcing React 18; no longer needed with React 19.

4. **Delete the dead `getStaticProps` code** from `src/components/Search/index.tsx` (and the `renderToString` import).

5. **Run `next build`** and fix any remaining type or runtime errors.

6. **Manually test** the pages most likely to be affected:
   - The three dynamic routes (`/resource/*`, `/category/*`, `/collection/*`)
   - Search page
   - Events page
   - `/intro` (fukidashi component)
   - Any page with the carousel

7. **Deploy a preview to Netlify** before promoting to production.

---

The migration is more mechanical than architectural — the App Router patterns already in use are the "right" way for Next 15/16, so there are no design-level changes to fight.
