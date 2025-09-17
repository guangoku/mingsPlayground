# Personal Portfolio Website

## Overview

This is a personal portfolio website for Ming, a data engineer and digital artist. The project showcases her professional experience at Amazon, digital art (featuring her octopus girl character), blog posts, and contact information. The site is built as a single-page application with a modern, ocean-themed design that balances technical professionalism with artistic creativity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework**: React 18 with TypeScript, using Vite as the build tool
**Routing**: Single-page application using Wouter for lightweight client-side routing
**State Management**: React hooks with local state management, TanStack Query for server state
**UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling

### Backend Architecture
**Server**: Express.js with TypeScript running in ESM mode
**Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
**API Structure**: RESTful API design with `/api` prefix for all endpoints
**Database Ready**: Configured for PostgreSQL with Drizzle ORM but currently using in-memory storage

### Design System
**Color Palette**: Ocean-themed design with custom CSS variables for light/dark modes
- Primary: Deep blue tones (ocean, deep-sea)
- Secondary: Coral accent colors
- Background: Soft off-white to deep charcoal
**Typography**: Inter font family for headers and body text, JetBrains Mono for code
**Layout**: Tailwind-based spacing system using consistent units (2, 4, 6, 8, 12, 16)

### Component Architecture
**Navigation**: Sticky header with theme toggle, language switcher, and mobile-responsive hamburger menu
**Hero Section**: Large hero with animated typography and octopus girl character artwork
**Art Gallery**: Masonry grid layout with lightbox modals for detailed artwork viewing
**Blog System**: Card-based layout with category filtering and search functionality
**Resume Section**: Timeline-style layout for professional experience

### Data Storage
**Current**: In-memory storage with user management interface
**Planned**: PostgreSQL database with Drizzle ORM migrations ready
**Schema**: User authentication system with username/password fields

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **Vite**: Fast development server and build tool with HMR
- **TypeScript**: Type safety across frontend and backend
- **ESLint**: Code quality and consistency

### Backend Services
- **Neon Database**: Serverless PostgreSQL database (configured but not active)
- **Drizzle ORM**: Type-safe database operations with schema migrations
- **Connect PG Simple**: PostgreSQL session store for Express

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for type safety

### Asset Management
- **Static Assets**: Character artwork stored in attached_assets directory
- **Font Loading**: Google Fonts integration for typography

### Replit Integration
- **Cartographer Plugin**: Development environment integration
- **Runtime Error Modal**: Enhanced error handling in development