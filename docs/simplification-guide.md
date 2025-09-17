# Simplification Guide: From Full-Stack to Static Website

## Overview

This guide provides step-by-step instructions to simplify the Replit-generated full-stack portfolio to a static website while preserving all the design features, accessibility, and multi-language support.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Current Replit project running

## Phase 1: Remove Backend Dependencies ✅ COMPLETED

### Step 1.1: Remove Server Dependencies ✅

```bash
npm uninstall express express-session passport passport-local
npm uninstall @neondatabase/serverless drizzle-orm drizzle-kit
npm uninstall connect-pg-simple memorystore
npm uninstall @tanstack/react-query
npm uninstall @types/express @types/express-session @types/passport @types/passport-local
npm uninstall @types/connect-pg-simple
```

### Step 1.2: Remove Backend Files

```bash
# Remove server directory
rm -rf server/

# Remove shared directory (database schemas)
rm -rf shared/

# Remove drizzle config
rm drizzle.config.ts
```

### Step 1.3: Update package.json

Remove backend-related scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "tsc"
  }
}
```

## Phase 2: Simplify State Management ✅ COMPLETED

### Step 2.1: Remove TanStack Query ✅

```bash
npm uninstall @tanstack/react-query
```

### Step 2.2: Update App.tsx

Remove QueryClient and related imports:

```tsx
// Remove these imports
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

// Remove QueryClientProvider wrapper
function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}
```

### Step 2.3: Remove Query Client

```bash
rm client/src/lib/queryClient.ts
```

## Phase 3: Remove Routing

### Step 3.1: Remove Wouter

```bash
npm uninstall wouter
```

### Step 3.2: Simplify App.tsx

Remove routing and make it a single page:

```tsx
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtGallery from "@/components/ArtGallery";
import BlogSection from "@/components/BlogSection";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("en");

  // Theme and language logic...

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          language={language}
          onLanguageToggle={handleLanguageToggle}
        />

        <main>
          <Hero {...heroProps} />
          <ArtGallery language={language} />
          <BlogSection language={language} />
          <Resume language={language} />
          <Contact language={language} />
        </main>

        <footer className="py-8 px-6 border-t bg-muted/30">
          {/* Footer content */}
        </footer>
      </div>
    </TooltipProvider>
  );
}

export default App;
```

## Phase 4: Reduce UI Components

### Step 4.1: Identify Essential Components

Keep only these components:

- `button.tsx`
- `card.tsx`
- `dialog.tsx`
- `input.tsx`
- `label.tsx`
- `sheet.tsx`
- `toast.tsx`
- `toaster.tsx`
- `tooltip.tsx`

### Step 4.2: Remove Unused Components

```bash
# Remove unused UI components
rm client/src/components/ui/accordion.tsx
rm client/src/components/ui/alert-dialog.tsx
rm client/src/components/ui/alert.tsx
rm client/src/components/ui/aspect-ratio.tsx
rm client/src/components/ui/avatar.tsx
rm client/src/components/ui/badge.tsx
rm client/src/components/ui/breadcrumb.tsx
rm client/src/components/ui/calendar.tsx
rm client/src/components/ui/carousel.tsx
rm client/src/components/ui/chart.tsx
rm client/src/components/ui/checkbox.tsx
rm client/src/components/ui/collapsible.tsx
rm client/src/components/ui/command.tsx
rm client/src/components/ui/context-menu.tsx
rm client/src/components/ui/drawer.tsx
rm client/src/components/ui/dropdown-menu.tsx
rm client/src/components/ui/form.tsx
rm client/src/components/ui/hover-card.tsx
rm client/src/components/ui/input-otp.tsx
rm client/src/components/ui/menubar.tsx
rm client/src/components/ui/navigation-menu.tsx
rm client/src/components/ui/pagination.tsx
rm client/src/components/ui/popover.tsx
rm client/src/components/ui/progress.tsx
rm client/src/components/ui/radio-group.tsx
rm client/src/components/ui/resizable.tsx
rm client/src/components/ui/scroll-area.tsx
rm client/src/components/ui/select.tsx
rm client/src/components/ui/separator.tsx
rm client/src/components/ui/sidebar.tsx
rm client/src/components/ui/skeleton.tsx
rm client/src/components/ui/slider.tsx
rm client/src/components/ui/switch.tsx
rm client/src/components/ui/table.tsx
rm client/src/components/ui/tabs.tsx
rm client/src/components/ui/textarea.tsx
rm client/src/components/ui/toggle-group.tsx
rm client/src/components/ui/toggle.tsx
```

### Step 4.3: Remove Related Dependencies

```bash
npm uninstall @radix-ui/react-accordion
npm uninstall @radix-ui/react-alert-dialog
npm uninstall @radix-ui/react-aspect-ratio
npm uninstall @radix-ui/react-avatar
npm uninstall @radix-ui/react-checkbox
npm uninstall @radix-ui/react-collapsible
npm uninstall @radix-ui/react-context-menu
npm uninstall @radix-ui/react-dropdown-menu
npm uninstall @radix-ui/react-hover-card
npm uninstall @radix-ui/react-menubar
npm uninstall @radix-ui/react-navigation-menu
npm uninstall @radix-ui/react-popover
npm uninstall @radix-ui/react-progress
npm uninstall @radix-ui/react-radio-group
npm uninstall @radix-ui/react-scroll-area
npm uninstall @radix-ui/react-select
npm uninstall @radix-ui/react-separator
npm uninstall @radix-ui/react-slider
npm uninstall @radix-ui/react-switch
npm uninstall @radix-ui/react-tabs
npm uninstall @radix-ui/react-toggle
npm uninstall @radix-ui/react-toggle-group
npm uninstall @radix-ui/react-tooltip
npm uninstall @radix-ui/react-label
npm uninstall @radix-ui/react-dialog
npm uninstall @radix-ui/react-sheet
npm uninstall @radix-ui/react-toast
npm uninstall @radix-ui/react-slot
npm uninstall @radix-ui/react-drawer
npm uninstall @radix-ui/react-command
npm uninstall @radix-ui/react-calendar
npm uninstall @radix-ui/react-carousel
npm uninstall @radix-ui/react-chart
npm uninstall @radix-ui/react-checkbox
npm uninstall @radix-ui/react-collapsible
npm uninstall @radix-ui/react-context-menu
npm uninstall @radix-ui/react-dropdown-menu
npm uninstall @radix-ui/react-hover-card
npm uninstall @radix-ui/react-input-otp
npm uninstall @radix-ui/react-menubar
npm uninstall @radix-ui/react-navigation-menu
npm uninstall @radix-ui/react-pagination
npm uninstall @radix-ui/react-popover
npm uninstall @radix-ui/react-progress
npm uninstall @radix-ui/react-radio-group
npm uninstall @radix-ui/react-resizable
npm uninstall @radix-ui/react-scroll-area
npm uninstall @radix-ui/react-select
npm uninstall @radix-ui/react-separator
npm uninstall @radix-ui/react-sidebar
npm uninstall @radix-ui/react-skeleton
npm uninstall @radix-ui/react-slider
npm uninstall @radix-ui/react-switch
npm uninstall @radix-ui/react-table
npm uninstall @radix-ui/react-tabs
npm uninstall @radix-ui/react-textarea
npm uninstall @radix-ui/react-toggle
npm uninstall @radix-ui/react-toggle-group
npm uninstall @radix-ui/react-tooltip
```

## Phase 5: Update Vite Configuration

### Step 5.1: Simplify vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
```

## Phase 6: Update Components

### Step 6.1: Remove API Calls

Update components to remove any API calls or server state:

- Remove `useQuery` hooks
- Remove `useMutation` hooks
- Use local state instead

### Step 6.2: Simplify Navigation

Update Navigation component to use smooth scrolling instead of routing:

```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
```

### Step 6.3: Add Section IDs

Add IDs to main sections for navigation:

```tsx
<main>
  <section id="hero">
    <Hero {...heroProps} />
  </section>
  <section id="art">
    <ArtGallery language={language} />
  </section>
  <section id="blog">
    <BlogSection language={language} />
  </section>
  <section id="resume">
    <Resume language={language} />
  </section>
  <section id="contact">
    <Contact language={language} />
  </section>
</main>
```

## Phase 7: Test and Verify

### Step 7.1: Test Build

```bash
npm run build
```

### Step 7.2: Test Development Server

```bash
npm run dev
```

### Step 7.3: Verify Features

- [ ] Dark/light mode toggle works
- [ ] Language switching works
- [ ] Navigation scrolling works
- [ ] All sections display correctly
- [ ] Mobile responsive design works
- [ ] Accessibility features work

## Phase 8: Clean Up

### Step 8.1: Remove Unused Files

```bash
rm client/src/pages/not-found.tsx
rm -rf client/src/components/examples/
```

### Step 8.2: Update Dependencies

```bash
npm install
npm audit fix
```

### Step 8.3: Update Documentation

Update README.md and other documentation to reflect the simplified architecture.

## Expected Results

After simplification:

- **Dependencies**: Reduced from 70+ to ~15-20 packages
- **Bundle Size**: Significantly smaller
- **Build Time**: Faster builds
- **Performance**: Better loading times
- **Maintenance**: Easier to maintain
- **Deployment**: Simple static hosting

## Troubleshooting

### Common Issues

1. **Import Errors**: Remove imports for deleted components
2. **Type Errors**: Update TypeScript types for removed dependencies
3. **Build Errors**: Check for remaining references to removed packages
4. **Runtime Errors**: Ensure all components use local state only

### Rollback Plan

If issues arise, you can always rollback by:

1. Reverting git changes
2. Reinstalling removed dependencies
3. Restoring deleted files

## Next Steps

After simplification:

1. Test thoroughly
2. Deploy to static hosting
3. Update documentation
4. Consider adding static site generation for blog posts
5. Add analytics if needed
