<div align="center">

<img alt="Next.js" src="https://img.icons8.com/color/80/nextjs.png"/>

# Forward Solutions

**A Next-Generation Digital Agency Web Experience**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=threedotjs)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

[Overview](#-overview) • [Features](#-features) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**Forward Solutions** is a high-performance, immersive digital agency landing page built with the **Next.js 16 App Router** and **React 19**. It pushes the boundaries of modern web interfaces by deeply integrating real-time **3D rendering** via React Three Fiber, physics-based **animations** via Framer Motion, and a polished design system built on Tailwind CSS v4 and Shadcn UI.

The architecture follows a deliberate Server/Client Component split — static layouts and SEO-critical shells are rendered on the server, while interactive 3D sections and animation-heavy components are isolated as Client Components to minimise the JavaScript bundle sent to the browser.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏗️ **Next.js App Router** | Server/Client Component architecture with file-based routing and layouts |
| 🎮 **3D WebGL Rendering** | Interactive backgrounds, data charts, and a draggable 3D review carousel via React Three Fiber |
| 🎬 **Scroll-Linked Animations** | Parallax effects and entrance animations tied to scroll position via Framer Motion |
| 💫 **Particle Backgrounds** | Configurable lightweight particle systems powered by `tsparticles` |
| 🖱️ **Custom Cursor** | Smooth, interpolated circle cursor that tracks mouse movement |
| 🎨 **Design System** | Tailwind CSS v4 utility classes with CSS custom properties and Shadcn UI components |
| 📱 **Fully Responsive** | Layouts tested across mobile, tablet, and ultra-wide viewports |
| 🔍 **SEO Ready** | Server-rendered outer shells with Next.js metadata API support |

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1 | Framework — App Router, SSR, routing |
| [React](https://react.dev/) | 19.2 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing throughout |

### Styling & UI

| Technology | Purpose |
|---|---|
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with CSS custom properties |
| [Shadcn UI](https://ui.shadcn.com/) | Accessible component primitives built on Radix UI |
| [Lucide React](https://lucide.dev/) | Icon library |
| `next/font` | Self-hosted Geist & Geist Mono typefaces |

### Animation & 3D

| Technology | Purpose |
|---|---|
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js / WebGL |
| [@react-three/drei](https://github.com/pmndrs/drei) | Helpers and abstractions for R3F scenes |
| [Three.js](https://threejs.org/) | Underlying WebGL rendering engine |
| [Framer Motion](https://www.framer.com/motion/) | Physics-based animations and scroll interactions |
| [tsparticles](https://particles.js.org/) | Lightweight 2D particle system |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or higher
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/forward-solutions.git
   cd forward-solutions
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000). The page hot-reloads on file changes.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
forward-solutions/
├── app/
│   ├── layout.tsx            # Root layout — Navbar, Footer, global providers
│   ├── page.tsx              # Landing page — assembles all section components
│   ├── pages/                # Individual page sections (Hero, About, Services…)
│   └── team/
│       └── page.tsx          # Dedicated team members page
│
├── components/
│   ├── ui/                   # Shadcn UI base components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CircleCursor.tsx      # Custom animated cursor
│   ├── ThreeBackground.tsx   # WebGL animated background canvas
│   ├── ThreeDReviewCarousel.tsx
│   ├── ThreeChart.tsx
│   └── ParticlesBg.tsx
│
├── lib/
│   └── utils.ts              # cn() helper — clsx + tailwind-merge
│
├── public/                   # Static assets (images, fonts, 3D models)
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── README.md                 # This file
└── DOCUMENTATION.md          # Architecture and component deep-dive
```

---

## 📚 Documentation

For an in-depth breakdown of the rendering strategy, component architecture, animation system, and development guidelines, see [DOCUMENTATION.md](./DOCUMENTATION.md).

Topics covered:

- Server vs. Client Component decision framework
- Component breakdown by section
- Framer Motion variant patterns and scroll animation setup
- Three.js / React Three Fiber performance guidelines
- Tailwind CSS v4 design token structure
- TypeScript conventions

---

## 🤝 Contributing

Contributions are welcome. Please follow the workflow below:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes using conventional commits: `git commit -m "feat: describe your change"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against `main`

Please open an [issue](../../issues) first for significant changes so the approach can be agreed on before implementation begins.

---

## 📄 License

Distributed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with Next.js 16, React Three Fiber, and Framer Motion.</sub>
</div>