# Deployment Guide

## Overview

This portfolio website is deployed on Vercel with a custom domain. The deployment process is automated and optimized for global access including China.

## Live URLs

- **Primary**: https://mingsplayground.com
- **Vercel**: https://mings-playground.vercel.app
- **Status**: ✅ Live and fully functional

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
