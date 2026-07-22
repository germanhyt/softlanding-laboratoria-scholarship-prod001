# Laboratoria Scholarship Fund

Pixel-faithful rebuild of [laboratoria-scholarship-spark.lovable.app](https://laboratoria-scholarship-spark.lovable.app/) using **Astro + React islands + Tailwind CSS v4**.

## Stack

- Astro 7 (static HTML by default)
- React island for the FAQ accordion (`client:load`)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Work Sans (Google Fonts)
- Scraped brand assets in `public/images/`

## Design tokens

| Token | Value |
| --- | --- |
| Ink | `#0E1D25` |
| Yellow | `#FFE521` |
| Magenta | `#EE77F2` |
| Surface / Gray | `#F4F4F4` / `#F9F9F9` |
| Font | Work Sans 400/500/600/700 |

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

```
src/
  components/   # Astro sections + FaqAccordion.tsx island
  data/faq.ts   # FAQ copy + donate URL
  layouts/
  pages/
  styles/global.css
public/images/  # hero, community, gabriela, celebration
```

## Notes

- Donate CTAs point to Every.org (same URL as the reference site).
- Interactive FAQ is the only React hydration island; everything else is static Astro.