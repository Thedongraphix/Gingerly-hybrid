# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gingerly is a modern rental payment platform built with Next.js 15, designed to streamline rent collection for landlords and make payments effortless for tenants. The application features separate dashboard experiences for landlords and tenants with payment tracking, property management, and communication tools.

## Development Commands

### Running the Application
```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Package Management
This project uses **pnpm** as the package manager. Always use `pnpm install` or `pnpm add` rather than npm or yarn.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **React**: Version 19.2.0
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Forms**: React Hook Form with Zod validation
- **Type Safety**: TypeScript with strict mode enabled

### Key Configuration Notes

#### Next.js Config
The project has build error bypasses enabled in `next.config.mjs`:
- `eslint.ignoreDuringBuilds: true`
- `typescript.ignoreBuildErrors: true`
- `images.unoptimized: true`

When fixing build errors, these flags may need to be addressed or removed.

#### pnpm Overrides
The project enforces React 19 through pnpm overrides in `package.json`. This is intentional to ensure all dependencies use React 19, even if they specify older peer dependencies.

### Directory Structure

```
app/
├── dashboard/
│   ├── landlord/          # Landlord-specific pages (properties, tenants, payments, etc.)
│   ├── tenant/            # Tenant-specific pages (home, payments, maintenance, etc.)
│   └── layout.tsx         # Dashboard wrapper with sidebar navigation
├── login/
├── signup/
├── page.tsx               # Landing page
├── layout.tsx             # Root layout with theme provider
└── globals.css            # Custom design system CSS variables

components/
├── dashboard/             # Dashboard-specific components (sidebar, mobile-nav, stats, charts)
├── ui/                    # Shadcn/ui components (auto-generated, avoid manual edits)
└── [feature-components]   # App-level components (main-nav, theme-toggle, etc.)

lib/
└── utils.ts               # cn() utility for className merging

hooks/
├── use-mobile.tsx
└── use-toast.ts
```

### Routing Architecture

The app uses Next.js 15 App Router with role-based dashboards:

- **Public Routes**: `/`, `/login`, `/signup`
- **Landlord Dashboard**: `/dashboard/landlord/*` (properties, tenants, payments, analytics, maintenance, calendar, messages, documents, settings)
- **Tenant Dashboard**: `/dashboard/tenant/*` (home, payments, maintenance, calendar, messages, documents, settings)

Role detection is pathname-based (checking for `/landlord` or `/tenant` in the URL). See `components/dashboard/sidebar.tsx:35` for implementation.

### Design System

#### Color Palette
The app uses a custom design system defined in `app/globals.css`:

- **Primary**: Deep Navy Blue (`#0F1C3F` - `hsl(209 71% 15%)`) - used for headers, primary actions
- **Accent**: Sophisticated Teal (`#007B8A` - `hsl(187 100% 27%)`) - used for interactive elements, highlights
- **Background**: Near-white (`hsl(0 0% 98%)`) in light mode
- **Custom Brand Colors**: Exposed as CSS variables (`--navy-50` through `--navy-600`, `--teal-50` through `--teal-600`)

#### Styling Patterns

1. **Glass Morphism**: Use `.glass` or `.glass-card` classes for frosted glass effects
2. **Gradient Text**: Use `.gradient-text` for brand gradient text
3. **Primary Gradient**: Use `.gradient-primary` or `bg-gradient-to-r from-primary to-accent`
4. **Color Classes**: Prefer `bg-navy-500`, `text-teal-500` over Tailwind's default blue/teal
5. **Border Radius**: Default radius is `0.75rem` (12px) for a modern feel
6. **Responsive Design**: Mobile-first with breakpoints at `sm:`, `md:`, `lg:`

#### Typography
- **Font**: Jost (Google Font) with weights 100-900
- **Headings**: Use `text-navy-500` or `text-navy-600` for emphasis
- **Body Text**: Default `text-foreground`, muted text uses `text-muted-foreground`

### Component Patterns

#### Dashboard Components
- **Sidebar**: Collapsible with mobile backdrop, role-specific navigation links
- **Mobile Nav**: Bottom sheet on mobile, integrated with sidebar state
- **Stats Cards**: Use consistent card styling with icons in colored containers
- **Charts**: Built with Recharts, using theme-aware colors from `--chart-*` variables

#### UI Components (`components/ui/`)
These are auto-generated from shadcn/ui. To add new components:
```bash
npx shadcn@latest add [component-name]
```
Do not manually edit these files unless necessary. Re-generate instead.

#### Context Providers
- **ThemeProvider** (`components/theme-provider.tsx`): Wraps app for dark/light mode
- **SidebarProvider** (`components/sidebar-provider.tsx`): Manages sidebar open/close state

### State Management

Currently, the app uses:
- **React Context**: For theme and sidebar state
- **URL State**: For role detection (landlord vs tenant)
- **Component State**: For local UI interactions

No global state management library (Redux, Zustand) is used yet. If adding complex state, consider the existing patterns first.

### Path Aliases

The project uses `@/*` for absolute imports:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

Always use these aliases rather than relative imports for better refactoring.

### Forms and Validation

Use React Hook Form with Zod:
```typescript
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
```

See existing form patterns in signup/login pages.

### Image Handling

Images are set to `unoptimized: true` in Next config. When using `next/image`, be aware that optimization is disabled.

### Loading States

Some dashboard pages include `loading.tsx` files for Suspense boundaries:
- `app/dashboard/landlord/messages/loading.tsx`
- `app/dashboard/landlord/payments/loading.tsx`
- `app/dashboard/landlord/properties/loading.tsx`
- `app/dashboard/landlord/tenants/loading.tsx`

Follow this pattern for new pages with data fetching.

## Common Patterns

### Adding a New Dashboard Page

1. Create page in appropriate role directory: `app/dashboard/[landlord|tenant]/[page-name]/page.tsx`
2. Add navigation link to sidebar: `components/dashboard/sidebar.tsx` (landlordLinks or tenantLinks array)
3. Import required icon from `lucide-react`
4. Follow existing card layout patterns for consistency
5. Add loading.tsx if the page will fetch data

### Creating a Reusable Component

1. Decide if it's a dashboard component or app-level component
2. Place in appropriate directory (`components/dashboard/` or `components/`)
3. Use TypeScript for props interface
4. Use `cn()` utility for conditional className merging
5. Export as named or default export (prefer named for reusability)

### Working with Styles

1. Use Tailwind utility classes first
2. Reference custom CSS variables from `globals.css` when needed
3. For complex animations or effects, add to `@layer components` in globals.css
4. Keep responsive modifiers consistent (`sm:`, `md:`, `lg:`)
5. Use brand colors (`navy-*`, `teal-*`) over generic Tailwind colors

### Adding Icons

Import from `lucide-react`:
```typescript
import { Building2, Users, CreditCard } from "lucide-react"
```

All icons should use consistent sizing (`h-5 w-5` for standard, `h-4 w-4` for small).

## Important Notes

### Build Errors
Build error suppression is currently enabled. When working on TypeScript errors or ESLint issues, fix them properly rather than relying on the suppression flags.

### Theme System
The app supports light/dark mode via `next-themes`. All colors are defined as HSL CSS variables that switch based on theme. When adding new colors, define both light and dark variants in `globals.css`.

### Mobile Responsiveness
The dashboard is fully responsive with a mobile-first approach:
- Sidebar becomes a drawer on mobile
- Stats cards stack vertically
- Tables may scroll horizontally
- Touch-friendly button sizes

Always test responsive behavior when modifying dashboard components.

### Performance Considerations
- Pages use React Server Components by default
- Add `"use client"` directive only when needed (interactivity, hooks, context)
- Lazy load heavy components when appropriate
- Images are unoptimized but should still use `next/image` for lazy loading

## Development Workflow

1. **Start the dev server**: `pnpm dev`
2. **Make changes** following the patterns above
3. **Check for type errors**: TypeScript will show inline in your editor
4. **Test responsiveness**: Use browser dev tools to check mobile/tablet views
5. **Verify theme**: Toggle dark/light mode to ensure colors work correctly
6. **Run linter**: `pnpm lint` before committing (though build ignores errors currently)

## Future Considerations

- Consider removing build error suppression flags once codebase stabilizes
- Evaluate state management solution for complex features (payments, real-time updates)
- Add API layer/backend integration (currently frontend-only with mock data)
- Implement authentication and authorization for role-based access
- Add test suite (unit tests, integration tests, E2E)
