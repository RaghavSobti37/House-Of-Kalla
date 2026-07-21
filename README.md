# House of Kalaa — Kalpeet Lunawat Interiors

A luxury interior architecture and furniture studio website for House of Kalaa. Built to match high-fidelity desktop mockups with a refined navy, gold, and cream palette.

## Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7 + file-based routing)
- **Styling:** Tailwind CSS v4 with custom color tokens
- **UI Library:** shadcn/ui components
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **Runtime:** Edge-ready serverless Worker (Cloudflare Workers)

## Complete File Structure

```text
.
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md
├── README.md
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.ico
└── src/
    ├── assets/
    │   ├── hands-craft.jpg
    │   ├── hero-kitchen.jpg
    │   ├── logo-dark.webp.asset.json
    │   ├── product-dining.jpg
    │   ├── product-korta.jpg
    │   ├── product-leather.jpg
    │   ├── product-loungechair.jpg
    │   ├── product-sofa.jpg
    │   ├── products-hero.jpg
    │   ├── project-bar.jpg
    │   ├── project-hotel.jpg
    │   ├── showroom.jpg
    │   ├── team-director.jpg
    │   ├── team-kalpeet.jpg
    │   ├── team-sanjay.jpg
    │   └── workshop.jpg
    ├── components/
    │   ├── site-footer.tsx
    │   ├── site-nav.tsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       └── tooltip.tsx
    ├── hooks/
    │   └── use-mobile.tsx
    ├── lib/
    │   ├── error-capture.ts
    │   ├── error-page.ts
    │   ├── lovable-error-reporting.ts
    │   └── utils.ts
    ├── routeTree.gen.ts
    ├── router.tsx
    ├── routes/
    │   ├── README.md
    │   ├── __root.tsx
    │   ├── about.tsx
    │   ├── contact.tsx
    │   ├── index.tsx
    │   ├── portfolio.tsx
    │   └── products.tsx
    ├── server.ts
    ├── start.ts
    └── styles.css
```

## Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/routes/index.tsx` | Home — kitchen hero, marquee, trusted-by logos, featured projects, testimonials |
| `/about` | `src/routes/about.tsx` | About — workshop heritage, 35 years of mastery, team portraits |
| `/portfolio` | `src/routes/portfolio.tsx` | Portfolio — project grid with category filters, gold precision section |
| `/products` | `src/routes/products.tsx` | Products — furniture catalog, filter tabs, inquiry CTAs |
| `/contact` | `src/routes/contact.tsx` | Contact — inquiry form, showroom details, map embed |

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `oklch(0.26 0.14 275)` | Primary brand dark, footer, buttons |
| Gold | `oklch(0.62 0.11 75)` | Accents, highlights, labels |
| Cream | `oklch(0.99 0.005 90)` | Backgrounds, subtle surfaces |

## Running Locally

```bash
bun install
bun dev
```

The dev server runs on `http://localhost:8080`.

## Key Components

- `src/components/site-nav.tsx` — responsive navigation bar with transparent hero mode
- `src/components/site-footer.tsx` — dark navy footer with studio address, links, and social icons
- `src/routes/__root.tsx` — root layout with fonts, SEO metadata, and global shell
- `src/styles.css` — Tailwind v4 theme tokens, custom marquee animation, and global utilities
