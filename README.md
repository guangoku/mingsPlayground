# Personal Portfolio Website

## Overview

This is a personal portfolio website for Ming, a data engineer and digital artist. The project showcases her professional experience at Amazon, digital art (featuring her octopus girl character), blog posts, and contact information. The site is built as a single-page application with a modern, ocean-themed design that balances technical professionalism with artistic creativity.

## Project Status & Architecture Decision

### Current State

This project was initially created by Replit with a full-stack architecture (React frontend + Express backend + PostgreSQL database). After evaluation, we determined this is **over-engineered for a personal portfolio** and decided to simplify it to a static website.

### Architecture Status

**Phase 1 Complete**: Backend dependencies removed, converted to static single-page application while preserving all frontend features.

### Recommended Architecture

**Static Website Approach**: Remove backend complexity while preserving the excellent frontend design, accessibility features, and multi-language support.

## Key Features (To Preserve)

✅ **Design System**: Ocean-themed design with custom CSS variables  
✅ **Dark/Light Mode**: Complete theming system  
✅ **Multi-language Support**: Chinese and English  
✅ **Accessibility**: ARIA labels, keyboard navigation, screen reader support  
✅ **Responsive Design**: Mobile-first approach  
✅ **Content Sections**: Hero, Art Gallery, Blog, Resume, Contact

## Simplification Plan

### Phase 1: Remove Backend Complexity ✅ COMPLETED

- ✅ Remove Express server and API endpoints
- ✅ Remove database integration (PostgreSQL, Drizzle ORM)
- ✅ Remove user authentication system
- ✅ Remove TanStack Query (no API calls needed)
- ✅ Convert to single-page application with smooth scrolling navigation

### Phase 2: Simplify State Management ✅ COMPLETED

- ✅ Keep only local React state for theme/language
- ✅ Remove session management
- ✅ Remove complex form handling
- ✅ Remove TanStack Query and queryClient.ts

### Phase 3: Reduce Dependencies

- Remove unused UI components (keep ~10 essential ones)
- Remove Wouter routing (single page app)
- Remove backend-related packages

### Phase 4: Optimize for Static Hosting

- Configure for static export
- Remove server-side dependencies
- Optimize build process

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Documentation Structure

- [Design Guidelines](./docs/design-guidelines.md) - Complete design system and UI guidelines
- [Architecture Decision](./docs/architecture-decision.md) - Detailed analysis of static vs dynamic approach
- [Simplification Guide](./docs/simplification-guide.md) - Step-by-step simplification process
- [Deployment Guide](./docs/deployment.md) - Hosting options and deployment instructions

## Technology Stack

### Frontend (Current)

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** with custom design system
- **Shadcn/ui** component library
- **Single-page application** with smooth scrolling navigation

### Backend (Removed ✅)

- ~~Express.js server~~ ✅ Removed
- ~~PostgreSQL database~~ ✅ Removed
- ~~Drizzle ORM~~ ✅ Removed
- ~~User authentication~~ ✅ Removed

### Recommended Static Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** with custom design system
- **Essential UI components** only
- **Static hosting** (Vercel, Netlify, GitHub Pages)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # Utilities and configuration
│   │   └── App.tsx        # Single-page application
│   └── index.html
├── attached_assets/        # Static assets (images, etc.)
└── docs/                   # Documentation
```

## Contributing

This is a personal portfolio project. For questions or suggestions, please refer to the documentation in the `docs/` directory.

## License

MIT License - see LICENSE file for details.
