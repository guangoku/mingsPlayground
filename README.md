# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a simple design with dark/light mode, multi-language support (English/Chinese), and smooth scrolling navigation.

## Features

- 🎨 **Ocean-themed Design** - Custom color palette and typography
- 🌙 **Dark/Light Mode** - Complete theming system
- 🌍 **Multi-language Support** - English and Chinese
- ♿ **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Fast & Modern** - Built with Vite and React 18
- 🎯 **SEO Friendly** - Proper routing and meta tags

## Pages

- **Home** (`/`) - Landing page with smooth scrolling sections
- **Projects** (`/projects`) - Dedicated projects showcase
- **Blog** (`/blog`) - Blog posts and thoughts
- **About** - Professional background and skills
- **Contact** - Get in touch

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** with custom design system
- **Shadcn/ui** component library
- **React Router** for navigation
- **Static hosting ready** (Vercel, Netlify, GitHub Pages)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   └── App.tsx        # Main application
│   └── index.html
├── attached_assets/        # Static assets
├── public/                # Public assets
└── docs/                  # Documentation
```

## Deployment

The project is deployed and live at **https://mingsplayground.com**

### Hosting Platform: Vercel ✅

- **Live URL**: https://mingsplayground.com
- **Vercel URL**: https://mings-playground.vercel.app
- **Configuration**: `vercel.json` for SPA routing
- **Custom Domain**: mingsplayground.com (A record: 76.76.21.21)

### Deployment Process

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Add custom domain (one-time setup)
vercel domains add mingsplayground.com
```

### DNS Configuration

- **Method**: A Record (Option A)
- **Record**: `A @ 76.76.21.21`
- **Registrar**: Cloudflare (proxy disabled)
- **Status**: ✅ Active and working

### Alternative Hosting Options

- **Netlify**: Deploy with `public/_redirects` configuration
- **GitHub Pages**: Works with SPA routing

## License

MIT License - see LICENSE file for details.
