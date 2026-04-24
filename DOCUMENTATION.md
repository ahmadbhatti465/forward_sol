# Technical Documentation — Forward Solutions

This document provides a comprehensive reference for the architecture, component design, animation system, and development standards of the Forward Solutions web application.

> For setup instructions and a project overview, see [README.md](./README.md).

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Routing Scheme](#2-routing-scheme)
3. [Rendering Strategy](#3-rendering-strategy)
4. [Component Breakdown](#4-component-breakdown)
5. [Styling Methodology](#5-styling-methodology)
6. [Animation System](#6-animation-system)
7. [3D Rendering Layer](#7-3d-rendering-layer)
8. [Development Guidelines](#8-development-guidelines)

---

## 1. Architecture Overview

The application is built on the **Next.js 16 App Router**. This architecture provides a clear separation between server-rendered and client-rendered work, enabling performance optimisation at the component level rather than the page level.

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                     │
│                                                         │
│   React 19 hydration + Framer Motion + R3F WebGL        │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP / RSC streaming
┌────────────────────────▼────────────────────────────────┐
│                  Next.js 16 Server                      │
│                                                         │
│   App Router  →  Layout  →  Page  →  Section Components │
│                                                         │
│   Server Components (default): layouts, static shells  │
│   Client Components ("use client"): interactive UI     │
└─────────────────────────────────────────────────────────┘
```

The primary goal is to push as much rendering as possible to the server, reducing the client JavaScript bundle size and improving Time to First Byte (TTFB). Client Components are introduced only at the leaves of the component tree where browser APIs or React hooks are strictly required.

---

## 2. Routing Scheme

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Main landing page; imports and stacks all section components from `app/pages/` |
| `/team` | `app/team/page.tsx` | Dedicated team members page |

The root layout (`app/layout.tsx`) wraps all routes with the global `<Navbar>`, `<Footer>`, `<CircleCursor>`, and any global context providers.

---

## 3. Rendering Strategy

### Server Components (Default)

Used for:

- Root layout (`layout.tsx`) — renders Navbar, Footer, and providers
- Static outer shells of section pages where no hooks or browser APIs are needed
- SEO metadata generation via the Next.js `metadata` export

### Client Components (`"use client"`)

Required for all components that use:

- React hooks (`useState`, `useEffect`, `useRef`, `useCallback`)
- Framer Motion (`motion.*`, `useScroll`, `useTransform`, `useInView`)
- React Three Fiber (`Canvas`, `useFrame`, `useThree`)
- Browser APIs (`window`, `document`, `navigator`)

**Key principle:** When adding `"use client"`, push the directive as far down the component tree as possible. Wrapping a large section in a Client Component prevents the server from rendering any of its children as Server Components, unnecessarily increasing the client bundle.

```
// ✅ Preferred — isolate the interactive part
app/pages/
  AboutSection.tsx          ← Server Component (static shell)
  components/
    AboutAnimatedText.tsx   ← "use client" (only the animated element)

// ❌ Avoid — entire section becomes client-rendered
app/pages/
  AboutSection.tsx          ← "use client" at the top unnecessarily
```

---

## 4. Component Breakdown

### 4.1 Landing Page Sections (`app/pages/`)

Each file maps to one full-viewport vertical section of the single-page experience.

| Component | Description |
|---|---|
| `HeroSection.tsx` | Initial viewport. Houses `ThreeBackground` or `ParticlesBg` for immediate visual impact alongside headline typography. |
| `AboutSection.tsx` | Company history and mission. Uses scroll-triggered Framer Motion variants to reveal content as the section enters the viewport. |
| `ServicesPage.tsx` | Grid layout of service offerings with hover micro-animations on each card. |
| `StatisticsPage.tsx` | Displays key metrics using `ThreeChart` or animated number counters. |
| `ClientReviewsSection.tsx` | Embeds `ThreeDReviewCarousel` — a spatial, draggable 3D testimonial experience. |
| `InnovationPage.tsx` | Highlights technological differentiators using complex grid layouts and entrance animations. |

### 4.2 Global UI Components (`components/`)

| Component | Description |
|---|---|
| `Navbar.tsx` | Global navigation bar, rendered in the root layout. |
| `Footer.tsx` | Global footer, rendered in the root layout. |
| `CircleCursor.tsx` | Custom cursor that tracks `mousemove` events and interpolates its position with Framer Motion for a smooth follow effect. Replaces the native browser cursor. |
| `ui/` | Shadcn UI base components (Buttons, Cards, Dialogs, etc.) built on Radix UI primitives and styled with Tailwind CSS. |

### 4.3 3D & Interactive Components

| Component | Description |
|---|---|
| `ThreeBackground.tsx` | A full-bleed `<Canvas>` rendered behind DOM content. Uses `useFrame` to continuously animate a scene (rotating geometry or shader materials). |
| `ThreeDReviewCarousel.tsx` | A 3D scene using `@react-three/drei` helpers (`OrbitControls`, `Text`, `Html`) to render review cards in a spatial layout that users can rotate or drag through. |
| `ThreeChart.tsx` | 3D data visualisation for the Statistics section. |
| `ParticlesBg.tsx` | Uses `tsparticles` to render a lightweight, performant 2D particle system (floating nodes, starlight, etc.) as a section background. |

---

## 5. Styling Methodology

### Tailwind CSS v4

The project uses Tailwind CSS v4's CSS-first configuration model.

- **Utility-First:** All styling is applied directly via class names, keeping component files self-contained and eliminating style drift across separate CSS files.
- **CSS Custom Properties:** `globals.css` defines all design tokens (colours, radii, spacing) as CSS variables, satisfying both Tailwind v4 and Shadcn UI theming requirements. This enables straightforward dark/light mode toggling.
- **`cn()` Utility:** A helper in `lib/utils.ts` combines `clsx` and `tailwind-merge` to safely merge conditional and dynamic class names without Tailwind specificity conflicts.

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Design Token Structure (`globals.css`)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --radius: 0.5rem;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

---

## 6. Animation System

All primary animations are driven by **Framer Motion**.

### Variants Pattern

Pre-defined animation states are declared as variant objects and reused across components for consistent entrance behaviour:

```ts
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Usage
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  ...
</motion.div>
```

Staggered children are controlled via `staggerChildren` in the parent's `transition`:

```ts
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
```

### Scroll Animations

`useScroll` and `useTransform` tie animation progress to the viewport scroll position, enabling parallax effects and progressive reveals:

```ts
const { scrollYProgress } = useScroll({ target: sectionRef });
const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
```

### Layout Animations

The `layout` prop on `motion` components handles smooth DOM transitions when flexbox or grid layouts reflow:

```tsx
<motion.div layout>...</motion.div>
```

---

## 7. 3D Rendering Layer

### Setup

All 3D scenes are rendered inside a React Three Fiber `<Canvas>` component. The canvas is absolutely positioned and rendered as a background layer behind the standard DOM.

```tsx
import { Canvas } from "@react-three/fiber";

export default function ThreeBackground() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <Scene />
    </Canvas>
  );
}
```

### Animation Loop

Scene-level animations run inside `useFrame`, which executes on every render tick (targeting 60fps):

```ts
useFrame((state, delta) => {
  meshRef.current.rotation.y += delta * 0.5;
});
```

### Lazy Loading

Heavy scenes are wrapped in `<Suspense>` to prevent blocking the main UI thread while assets load:

```tsx
<Suspense fallback={<Loader />}>
  <ThreeDReviewCarousel />
</Suspense>
```

---

## 8. Development Guidelines

### Client vs. Server Components

Always default to Server Components. Add `"use client"` only when the component requires:

- React hooks (`useState`, `useEffect`, etc.)
- Browser APIs (`window`, `document`, `navigator`)
- Animation libraries that interact with the DOM (Framer Motion, R3F)

Push `"use client"` as far down the component tree as possible.

### Performance in 3D Scenes

- **Never allocate inside `useFrame`** — do not create new objects, arrays, or materials on every tick. Allocate once in component body or `useMemo`.
- **Use `Suspense` boundaries** around models and heavy textures.
- **Optimise geometries** — reduce polygon counts for background scenes; reserve high detail for hero focal points.
- **Consider `<BakeShadows />`** from `@react-three/drei` for static shadow computation when lighting is fixed.

### TypeScript Standards

- All component props must have explicit TypeScript interfaces. Avoid `any`.
- Use `React.FC<Props>` or explicit return types for all components.
- Prefer `interface` over `type` for component prop shapes; use `type` for unions and intersections.

```ts
// ✅ Correct
interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

// ❌ Avoid
const Card = ({ title, description, onClick }: any) => { ... }
```

### Component Extraction Rule

If a UI pattern (a specific button style, card layout, or icon treatment) appears in more than one location, extract it into a reusable component under `components/ui/` or `components/`.

---

*Documentation maintained by the core development team. Last updated April 2026.*