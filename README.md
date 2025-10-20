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
- 📝 **Blog System** - Hybrid content with Notion integration
- 🔒 **Secure** - Environment variables for API tokens

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

# Set up environment variables
cp docs/env-example.txt .env.local
# Edit .env.local and add your NOTION_TOKEN

# Start development server (with API routes)
vercel dev

# Alternative: Start frontend only (no API routes)
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
- **Notion API** for blog content integration
- **Vercel** for hosting and serverless functions

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── blog/       # Blog-specific components
│   │   │   ├── projects/   # Project showcase components
│   │   │   └── navigation/ # Navigation components
│   │   ├── pages/         # Page components
│   │   │   ├── blog/      # Blog pages
│   │   │   └── projects/  # Project pages
│   │   ├── lib/           # Utilities and data
│   │   │   ├── blog/      # Blog data and Notion API
│   │   │   └── projects/  # Project data
│   │   └── App.tsx        # Main application
│   └── index.html
├── api/                   # Vercel serverless functions
│   └── notion/           # Notion API proxy
├── attached_assets/        # Static assets
├── public/                # Public assets
├── docs/                  # Documentation
├── vercel.json           # Vercel configuration
└── .env.local            # Environment variables (not in git)
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
# Set up environment variables in Vercel dashboard
# Add NOTION_TOKEN to Vercel environment variables

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

## Blog System

The website includes a hybrid blog system that supports both static content and dynamic Notion integration:

### Features

- **Static Posts**: React components for custom content
- **Notion Posts**: Dynamic content fetched from Notion API
- **Unified Navigation**: Modal and individual page views
- **Bilingual Support**: English and Chinese content
- **Responsive Design**: Mobile-optimized layout

### Setup

1. **Create Notion Integration**:

   - Go to https://www.notion.so/my-integrations
   - Create new integration
   - Copy the integration token

2. **Configure Environment**:

   ```bash
   # Add to .env.local
   NOTION_TOKEN=your_integration_token_here
   ```

3. **Share Notion Pages**:
   - Share your Notion pages with the integration
   - Get page IDs from Notion URLs
   - Add pages to blog data configuration

### Development

```bash
# Start with API routes (recommended)
vercel dev

# Or start frontend only
npm run dev
```

For detailed blog system documentation, see `docs/blog-documentation.md`.

## License

MIT License - see LICENSE file for details.
