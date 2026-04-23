# Soto Gubeng Surabaya

<p align="center">
  <img src="aset/logo.png" alt="Soto Gubeng Surabaya logo" width="180" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white" alt="Next.js badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React badge" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS badge" />
  <img src="https://img.shields.io/badge/WhatsApp-Ordering-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp badge" />
</p>

Modern, mobile-first website for the Soto Gubeng Surabaya brand — built to showcase the menu, highlight testimonials, and make ordering easy through WhatsApp. ✨

## 🔎 Project overview

This repository contains a polished restaurant landing page for **Soto Gubeng Surabaya**. The UI is designed to feel warm, appetizing, and responsive on desktop and mobile.

The current experience includes:
- a sticky brand header
- a hero section with animated headline text
- featured menu cards with product images
- a cart drawer for building an order
- one-click WhatsApp checkout
- about, testimonials, and contact sections

## 📸 Showcase

<p align="center">
  <img src="aset/showcase.png" alt="Soto Gubeng Surabaya homepage showcase" width="32%" />
  <img src="aset/showcase_2.png" alt="Soto Gubeng Surabaya menu showcase" width="32%" />
  <img src="aset/showcase_3.png" alt="Soto Gubeng Surabaya testimonials showcase" width="32%" />
</p>

## ⭐ Main features

- Responsive landing page with a strong food-brand visual identity
- Featured menu cards for Soto Ayam, Soto Daging, Sate Ayam, and Soto Buntut
- Cart drawer with quantity controls, remove, and clear actions
- WhatsApp ordering flow that builds a prefilled message from the cart
- Testimonials section for social proof
- Contact section with address, social links, and map embed
- Reusable UI components and clean project structure

## 🧱 Tech stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS 3
- Lucide React icons
- Next/Image for optimized local assets

## 📁 Detailed repository structure

```txt
soto-gubeng-surabaya/
├── app/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main landing page
├── components/
│   ├── site-header.tsx        # Top navigation and cart button
│   └── ui/                    # Reusable UI primitives
├── lib/
│   ├── site-data.ts           # Brand, menu, testimonials, contact data
│   └── utils.ts               # Shared helpers
├── aset/
│   ├── logo.png               # Brand logo
│   ├── sotogubeng_*.webp      # Menu and showcase images
│   └── contohboilerplate*.png # Extra design references/assets
├── package.json               # Scripts and dependencies
├── README.md                  # Project documentation
├── next.config.mjs            # Next.js config
├── tailwind.config.ts         # Tailwind config
├── postcss.config.mjs         # PostCSS config
└── tsconfig.json              # TypeScript config
```

## 🧑‍💻 Requirements

- Node.js 18+ recommended
- npm
- A modern browser

## ⚙️ Local setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the app in your browser at:

```text
http://localhost:3001
```

## 🌍 How to get the repository

### Recommended: git clone

```bash
git clone https://github.com/OWNER/REPO.git
cd REPO
```

### Download with curl

```bash
curl -L -o repo.zip https://github.com/OWNER/REPO/archive/refs/heads/main.zip
unzip repo.zip
cd REPO-main
```

### Download with wget

```bash
wget -O repo.zip https://github.com/OWNER/REPO/archive/refs/heads/main.zip
unzip repo.zip
cd REPO-main
```

## 🪟 Windows setup

Use PowerShell or Windows Terminal.

1. Clone or download the repository.
2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm run dev
```

4. Open:

```text
http://localhost:3001
```

## 🐧 Linux setup

Works on Ubuntu, Debian, Arch, Fedora, Mint, and other Linux distributions.

1. Clone or download the repository.
2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

4. Visit:

```text
http://localhost:3001
```

## 🔐 Environment variables

No environment variables are required for the current version of the project.

Project data such as the brand name, menu list, testimonials, and contact details are stored in `lib/site-data.ts`.

Important:

- Do not commit local-only secrets or `.env.local`
- If you later add API keys, keep them in `.env.local`
- Use only public-safe values in client-side code

## 📝 Notes

- The app is currently frontend-only and uses local assets in `aset/`
- The default dev port is `3001` as configured in `package.json`
- Build artifacts like `.next/` and `node_modules/` should stay out of version control

