# System Design — Laboratoria Scholarship Spark

Recovered from https://laboratoria-scholarship-spark.lovable.app/

## Brand colors

| Name | Hex | Usage |
| --- | --- | --- |
| Ink / Primary | `#0E1D25` | Text, dark sections, overlays |
| Yellow / Accent | `#FFE521` | Primary CTA pills, icon circles |
| Magenta | `#EE77F2` | Quotes border, stats, eyebrows, link hover |
| Surface | `#F4F4F4` | Soft backgrounds |
| Gray section | `#F9F9F9` | Gift tiers + Gabriela sections |
| Border | `#E6E6E6` / `black/10` | Cards & FAQ dividers |
| Muted text | `#5B6770` | Supporting copy |

## Typography

- Family: **Work Sans** (400, 500, 600, 700)
- Display = same family (no separate display face)
- Hero H1: `text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]`
- Section H2: `text-3xl md:text-5xl font-bold`
- Body: `text-lg` / `md:text-xl`, `leading-relaxed`
- Eyebrow: `text-xs font-semibold tracking-[0.2em] uppercase text-[#EE77F2]`

## Components

- **CTA button**: `rounded-full bg-[#FFE521] text-[#0E1D25] font-semibold hover:brightness-95`
- **Quote**: `border-l-4 border-[#EE77F2] pl-5 italic`
- **Cards**: `rounded-2xl` with subtle border
- **Hero overlay**: `bg-[#0E1D25]/70`
- **Final CTA overlay**: `bg-[#0E1D25]/80`
- **FAQ**: accordion (React island), one open at a time

## Imagery (scraped)

| File | Role |
| --- | --- |
| `photo-hero.jpg` | Full-bleed hero |
| `photo-community.jpg` | Building section (4:5) |
| `photo-gabriela.jpg` | Story portrait (4:5) |
| `photo-celebration.jpg` | Final CTA background |

## Page flow

1. Hero
2. Problem (dark)
3. Building + stats
4. Gift tiers
5. Impact ways (dark)
6. Cohort updates
7. Meet Gabriela
8. FAQ (React island)
9. Final CTA
10. Footer