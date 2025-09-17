# Deployment Guide: Static Website Hosting

## Overview

After simplifying the portfolio to a static website, you have several excellent hosting options. This guide covers the best platforms for hosting your portfolio.

## Recommended Hosting Platforms

### 1. Vercel (Recommended)

**Best for**: React applications, excellent performance, easy deployment

#### Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repository for automatic deployments
```

#### Features

- ✅ **Free Tier**: Unlimited personal projects
- ✅ **Automatic Deployments**: Push to git = automatic deploy
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Custom Domains**: Free SSL certificates
- ✅ **Preview Deployments**: Test before going live
- ✅ **Analytics**: Built-in performance metrics

#### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 2. Netlify

**Best for**: Static sites, form handling, serverless functions

#### Setup

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Features

- ✅ **Free Tier**: 100GB bandwidth, 300 build minutes
- ✅ **Form Handling**: Built-in contact form processing
- ✅ **Serverless Functions**: Add dynamic features if needed
- ✅ **Branch Deployments**: Preview different branches
- ✅ **Split Testing**: A/B testing capabilities

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Best for**: Free hosting, simple setup, version control integration

#### Setup

1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Select folder (`/` for root)
5. Save

#### Features

- ✅ **Free**: Unlimited public repositories
- ✅ **Custom Domains**: Free with SSL
- ✅ **Automatic Deployments**: Push to main branch
- ✅ **Version Control**: Full git history
- ✅ **Community**: Open source friendly

#### Configuration

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Cloudflare Pages

**Best for**: Performance, security, global reach

#### Setup

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

#### Features

- ✅ **Free Tier**: Unlimited bandwidth
- ✅ **Global CDN**: 200+ cities worldwide
- ✅ **Security**: DDoS protection, WAF
- ✅ **Performance**: Edge computing
- ✅ **Analytics**: Web analytics included

## Deployment Steps

### Step 1: Prepare for Deployment

```bash
# Build the project
npm run build

# Test the build locally
npm run preview
```

### Step 2: Choose Hosting Platform

For this portfolio, **Vercel is recommended** because:

- Excellent React support
- Automatic deployments
- Great performance
- Easy custom domain setup

### Step 3: Deploy

#### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts to configure
```

#### Option B: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Option C: GitHub Pages

1. Push code to GitHub
2. Go to repository Settings > Pages
3. Select source and folder
4. Save

### Step 4: Configure Custom Domain

#### Vercel

1. Go to project dashboard
2. Settings > Domains
3. Add your domain
4. Update DNS records as instructed

#### Netlify

1. Go to site dashboard
2. Domain Management > Add Custom Domain
3. Update DNS records

#### GitHub Pages

1. Repository Settings > Pages
2. Custom Domain section
3. Add your domain
4. Update DNS records

## Performance Optimization

### 1. Image Optimization

```bash
# Install image optimization
npm install --save-dev vite-plugin-imagemin

# Update vite.config.ts
import { defineConfig } from 'vite'
import { ViteImageOptimize } from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    ViteImageOptimize({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ]
})
```

### 2. Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Update vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({
      filename: 'dist/stats.html',
      open: true
    })
  ]
})
```

### 3. Code Splitting

```typescript
// Lazy load components
import { lazy, Suspense } from 'react'

const ArtGallery = lazy(() => import('./components/ArtGallery'))
const BlogSection = lazy(() => import('./components/BlogSection'))

// Use Suspense
<Suspense fallback={<div>Loading...</div>}>
  <ArtGallery />
</Suspense>
```

## Monitoring and Analytics

### 1. Vercel Analytics

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to main.tsx
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <App />
      <Analytics />
    </>
  )
}
```

### 2. Google Analytics

```html
<!-- Add to index.html -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### 3. Performance Monitoring

```bash
# Install Web Vitals
npm install web-vitals

# Add to main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Routing Issues

```typescript
// Add fallback for client-side routing
// In vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
```

#### Image Loading Issues

```typescript
// Use dynamic imports for images
const imageUrl = new URL("./image.png", import.meta.url).href;
```

### Performance Issues

#### Large Bundle Size

- Use dynamic imports
- Remove unused dependencies
- Optimize images
- Enable gzip compression

#### Slow Loading

- Use CDN
- Optimize images
- Minimize JavaScript
- Use lazy loading

## Security Considerations

### 1. Content Security Policy

```html
<!-- Add to index.html -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>
```

### 2. HTTPS

- All hosting platforms provide free SSL
- Ensure HTTPS is enabled
- Use HSTS headers

### 3. Dependencies

```bash
# Regular security audits
npm audit
npm audit fix
```

## Maintenance

### 1. Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
```

### 2. Performance Monitoring

- Monitor Core Web Vitals
- Check loading times
- Monitor user experience

### 3. Content Updates

- Update portfolio content regularly
- Keep blog posts fresh
- Update resume information

## Cost Comparison

| Platform             | Free Tier                   | Paid Plans | Best For                |
| -------------------- | --------------------------- | ---------- | ----------------------- |
| **Vercel**           | Unlimited personal projects | $20/month  | React apps, performance |
| **Netlify**          | 100GB bandwidth             | $19/month  | Static sites, forms     |
| **GitHub Pages**     | Unlimited public repos      | Free       | Open source, simple     |
| **Cloudflare Pages** | Unlimited bandwidth         | Free       | Performance, security   |

## Recommendation

For your portfolio, **Vercel is the best choice** because:

- Excellent React support
- Automatic deployments
- Great performance
- Easy setup
- Free for personal use
- Built-in analytics

The deployment process is simple and the platform handles all the complexity of CDN, SSL, and performance optimization automatically.
