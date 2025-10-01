# Deployment Guide

## Overview

This portfolio website is deployed on Vercel with a custom domain. The deployment process is automated and optimized for global access including China.

## Live URLs

- **Primary**: https://mingsplayground.com
- **Vercel**: https://mings-playground.vercel.app
- **Status**: ✅ Live and fully functional

## Mobile Testing Guide

### Overview

This guide covers how to test the portfolio website on mobile devices during development. The site has been optimized for mobile with responsive design and overflow prevention.

### Prerequisites

- Development server running (`npm run dev`)
- Mobile device connected to the same WiFi network as development machine
- Basic terminal/command line access

### Method 1: Network IP Access (Recommended)

**Step 1: Find Your Computer's IP Address**

```bash
# On macOS/Linux
ipconfig getifaddr en0

# Alternative method
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**Step 2: Start Development Server with Network Access**

```bash
# Stop current server (Ctrl+C) and restart with network access
npm run dev -- --host

# Or specify all interfaces explicitly
npm run dev -- --host 0.0.0.0
```

**Step 3: Access from Mobile Device**

1. Connect mobile device to the same WiFi network
2. Open mobile browser
3. Navigate to: `http://[YOUR_IP]:5173` (or 5174 if 5173 is in use)
4. Example: `http://192.168.1.100:5173`

### Method 2: Using ngrok (Tunnel Service)

**Step 1: Install ngrok**

```bash
# Via npm (global install)
npm install -g ngrok

# Or download from https://ngrok.com/
```

**Step 2: Start Development Server**

```bash
npm run dev
```

**Step 3: Create Tunnel**

```bash
# In a new terminal window
ngrok http 5173
```

**Step 4: Use ngrok URL**

- ngrok provides a public URL like `https://abc123.ngrok.io`
- Access this URL from any mobile device (no WiFi network restrictions)

### Method 3: Browser Developer Tools (Quick Testing)

**For rapid testing without mobile device:**

1. Open Chrome DevTools (F12)
2. Click device toggle icon (📱) or press `Ctrl+Shift+M`
3. Select mobile device from dropdown
4. Test different screen sizes and orientations

### Mobile Testing Checklist

**Critical Tests for Mobile Experience:**

- [ ] **Horizontal Scrolling**: Verify no horizontal overflow (users can't swipe to see page edges)
- [ ] **Text Responsiveness**: Hero text scales properly on small screens
- [ ] **Button Layout**: Buttons are properly sized and positioned
- [ ] **Navigation**: Mobile menu works correctly
- [ ] **Touch Interactions**: All interactive elements respond to touch
- [ ] **Performance**: Page loads quickly on mobile networks
- [ ] **Orientation**: Layout works in both portrait and landscape

**Screen Sizes to Test:**

- iPhone SE (375px width)
- iPhone 12/13 (390px width)
- iPhone 12/13 Pro Max (428px width)
- Samsung Galaxy S21 (360px width)
- iPad (768px width)

### Troubleshooting

**Common Issues:**

1. **Can't access from mobile device**

   - Ensure both devices are on same WiFi network
   - Check firewall settings on development machine
   - Try using ngrok method instead

2. **Site looks broken on mobile**

   - Clear mobile browser cache
   - Check browser console for errors
   - Verify responsive CSS is loading

3. **Slow loading on mobile**
   - Test on different network speeds
   - Check image optimization
   - Monitor network tab in mobile browser dev tools

### Mobile-Specific Features

**Responsive Design Elements:**

- **Hero Section**: Text scales from 3xl on mobile to 7xl on desktop
- **Navigation**: Collapsible mobile menu with proper touch targets
- **Images**: Optimized loading and sizing for mobile bandwidth
- **Buttons**: Full-width on mobile, auto-width on larger screens
- **Overflow Prevention**: Global CSS prevents horizontal scrolling

**Performance Optimizations:**

- Mobile-first CSS approach
- Optimized images and assets
- Touch-friendly interaction areas
- Fast loading on mobile networks

## Deployment Process

### Initial Setup (One-time)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy to Production**

   ```bash
   npm run build
   vercel --prod
   ```

4. **Add Custom Domain**
   ```bash
   vercel domains add mingsplayground.com
   ```

### DNS Configuration

**Method**: A Record (Option A)

- **Record Type**: A
- **Name**: @ (root domain)
- **Value**: 76.76.21.21
- **TTL**: 300 (or default)
- **Provider**: Cloudflare (proxy disabled)

### Regular Deployments

For future updates:

```bash
# Build and deploy
npm run build
vercel --prod

# Or just deploy (builds automatically)
vercel --prod
```

## Configuration Files

### vercel.json

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### public/\_redirects (Netlify backup)

```
/*    /index.html   200
```

## Domain Management

### Current Setup

- **Domain**: mingsplayground.com
- **Registrar**: Cloudflare
- **DNS Method**: A Record
- **Proxy Status**: Disabled (gray cloud)
- **SSL**: Automatic (Vercel managed)

### Adding Subdomains (Future)

If you need subdomains like `blog.mingsplayground.com`:

1. Add CNAME record in Cloudflare
2. Configure in Vercel dashboard
3. Deploy subdomain-specific content

## Performance Optimization

### Current Optimizations

- **Global CDN**: Vercel Edge Network
- **China Access**: Optimized routing
- **SSL**: Automatic HTTPS
- **Compression**: Gzip enabled
- **Caching**: Static assets cached

### Future Optimizations

- **Image Optimization**: Compress large images (some >1MB)
- **Analytics**: Add Vercel Analytics or Google Analytics
- **Monitoring**: Set up performance monitoring

## Troubleshooting

### Common Issues

1. **Domain not working**

   - Check DNS propagation: `nslookup mingsplayground.com`
   - Verify A record points to 76.76.21.21
   - Ensure Cloudflare proxy is disabled

2. **Build failures**

   - Check TypeScript errors: `npm run check`
   - Verify all imports are correct
   - Test locally: `npm run preview`

3. **Routing issues**
   - Verify `vercel.json` configuration
   - Check React Router setup
   - Test all routes manually

### Useful Commands

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel inspect [deployment-url] --logs

# Check domain status
vercel domains inspect mingsplayground.com

# Redeploy specific deployment
vercel redeploy [deployment-url]
```

## Monitoring

### Current Monitoring

- **Uptime**: Vercel SLA (99.99%)
- **Performance**: Basic Vercel metrics
- **SSL**: Automatic renewal

### Recommended Additions

- **Vercel Analytics**: Built-in performance tracking
- **Google Analytics**: User behavior tracking
- **Uptime monitoring**: External service like UptimeRobot

## Cost Management

### Current Costs

- **Vercel**: Free tier (100GB bandwidth/month)
- **Domain**: ~$8/year (Cloudflare)
- **Total**: ~$8/year

### Scaling Considerations

- **Bandwidth**: 100GB/month (free tier)
- **Builds**: Unlimited (free tier)
- **Custom Domains**: Unlimited (free tier)
- **Upgrade**: $20/month if needed

## Security

### Current Security

- **SSL Certificate**: Automatic HTTPS
- **Security Headers**: Vercel managed
- **DDoS Protection**: Cloudflare + Vercel
- **No Server**: Static site (reduced attack surface)

### Best Practices

- Keep dependencies updated
- Use environment variables for sensitive data
- Regular security audits
- Monitor for vulnerabilities

## Backup Strategy

### Code Backup

- **Primary**: GitHub repository
- **Local**: Regular commits and pushes
- **Vercel**: Automatic deployments from Git

### Domain Backup

- **DNS Records**: Documented in this guide
- **Configuration**: `vercel.json` in repository
- **Alternative**: Netlify configuration ready

## Future Considerations

### Potential Upgrades

1. **Vercel Pro**: If traffic exceeds free tier
2. **Custom Analytics**: Advanced tracking
3. **CDN Optimization**: China-specific CDN
4. **Monitoring**: Advanced performance monitoring

### Migration Options

- **Netlify**: Alternative static hosting
- **AWS S3 + CloudFront**: More control
- **GitHub Pages**: Free alternative

## Support

### Vercel Support

- **Documentation**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions
- **Status**: https://vercel-status.com

### Domain Support

- **Cloudflare**: https://dash.cloudflare.com
- **Documentation**: https://developers.cloudflare.com

---

**Last Updated**: December 2024  
**Status**: ✅ Live and operational
