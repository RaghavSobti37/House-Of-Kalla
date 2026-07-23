# House of Kalaa — Kalpeet Lunawat Interiors

> A luxury interior architecture and furniture studio website for House of Kalaa. Built to match high-fidelity desktop mockups with a refined navy, gold, and cream palette.

---

## 🔗 Project Links

- **GitHub Repository:** [https://github.com/RaghavSobti37/House-Of-Kalla](https://github.com/RaghavSobti37/House-Of-Kalla)
- **Live Deployment URL:** [https://house-of-kalla.vercel.app](https://house-of-kalla.vercel.app)

---

## 🛠️ Technology Stack

Describe the key core technologies and tools utilized in this project:

- **Framework:** TanStack Start (React 19 + Vite 8 + file-based routing)
- **Styling:** Tailwind CSS v4 with oklch brand colors (Navy, Gold, Cream)
- **UI Library:** shadcn/ui components
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **Hosting & CI/CD:** Vercel (clean URLs routing enabled)
- **Branding & SVGs:** Custom SVG logos and high-res vector assets

---

## 📂 Project Directory Structure

```text
.
├── .github/
│   └── workflows/
│       └── validate.yml
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md
├── LOGOS/
├── MASTER MOCKUPS/
├── README.md
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── public/
│   └── favicon.ico
└── src/
    ├── assets/
    │   ├── *.jpg
    ├── components/
    │   ├── site-footer.tsx
    │   ├── site-nav.tsx
    │   └── ui/
    │       └── *.tsx
    ├── hooks/
    │   └── use-mobile.tsx
    ├── lib/
    │   ├── utils.ts
    │   └── error-capture.ts
    ├── routeTree.gen.ts
    ├── router.tsx
    ├── routes/
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

---

## 🚀 Key Features

- **Luxury Aesthetics:** Highly-tailored color palette of Navy (`oklch(0.26 0.14 275)`), Gold (`oklch(0.62 0.11 75)`), and Cream (`oklch(0.99 0.005 90)`) providing a premium high-end feel.
- **File-Based Routing:** Modern React file-based routing via `@tanstack/react-router` and `@tanstack/react-start`.
- **Responsive Navigation & Shell:** Dynamic transparent header transition on scroll (`site-nav.tsx`) and robust responsive footer (`site-footer.tsx`).
- **Interactive Components:** Product catalog with interactive tabs, project gallery filter categories, INQUIRE form validation, and interactive shadcn/ui elements.

---

## 💻 Local Setup & Development

Follow these steps to set up the repository locally for development:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/RaghavSobti37/House-Of-Kalla.git
    cd House-Of-Kalla
    ```

2.  **Install Dependencies:**
    This project uses Bun package manager. If you don't have Bun, you can install it or use npm/yarn:

    ```bash
    bun install
    ```

3.  **Run the Development Server:**

    ```bash
    bun dev
    ```

    The local dev server runs at `http://localhost:8080`.

4.  **Lint & Format:**
    ```bash
    bun run lint
    bun run format
    ```

---

## 📦 Deployment to Vercel

The project is configured for static/serverless hosting on Vercel:

1.  Ensure you have the Vercel CLI installed:
    ```bash
    npm install -g vercel
    ```
2.  Deploy to production using the linked settings:
    ```bash
    vercel --prod
    ```

---

## 👥 Authors & Handoff

- **Chief Designer & Curator:** House of Kalaa / Kalpeet Lunawat Interiors
- **Lead Developers:** Gemini/Antigravity Agentic Team
- **Legacy Parent Company:** Kalpeet Lunawat Interiors
