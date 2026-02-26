# Deployment Guide

This guide provides detailed instructions for deploying the Cybersecurity Services Web Application to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Configuration](#environment-configuration)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Docker Deployment](#docker-deployment)
- [Traditional Hosting](#traditional-hosting)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed
- Git repository with your code
- Production environment variables ready
- Domain name (optional but recommended)

## Environment Configuration

### Required Variables

Create a `.env.local` file (for local testing) or configure in your hosting platform:

```bash
# Application URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Site Name
NEXT_PUBLIC_SITE_NAME=Your Company Name
```

### Optional Variables

#### Email Integration (Contact Form)

To enable email delivery for contact form submissions:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL_TO=contact@yourcompany.com
```

Note: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

#### Analytics

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

#### Monitoring

```bash
# Sentry Error Tracking
SENTRY_DSN=https://your-key@sentry.io/project-id
NEXT_PUBLIC_SENTRY_DSN=https://your-key@sentry.io/project-id
```

#### Rate Limiting

```bash
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=60000
```

## Vercel Deployment

Vercel is the recommended platform for Next.js applications.

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Visit [vercel.com/new](https://vercel.com/new)

3. Import your repository:
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings

4. Configure environment variables:
   - Go to Project Settings → Environment Variables
   - Add all required variables from `.env.example`
   - Set variables for Production, Preview, and Development

5. Deploy:
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Future pushes to main branch auto-deploy

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to preview:
```bash
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain name
3. Configure DNS records as instructed:
   - Add A record or CNAME record
   - Vercel provides automatic SSL certificates

## Netlify Deployment

### Via Netlify Dashboard

1. Push code to Git repository

2. Visit [app.netlify.com](https://app.netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Connect to your Git provider

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

6. Add environment variables:
   - Go to Site settings → Environment variables
   - Add all variables from `.env.example`

7. Deploy site

### Via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Initialize:
```bash
netlify init
```

4. Deploy:
```bash
netlify deploy --prod
```

## Docker Deployment

### Build Docker Image

1. Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

2. Create `.dockerignore`:

```
node_modules
.next
.git
.gitignore
README.md
.env*.local
```

3. Build the image:
```bash
docker build -t cybersecurity-webapp .
```

4. Run the container:
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_APP_URL=https://yourdomain.com \
  -e NEXT_PUBLIC_SITE_NAME="Your Company" \
  cybersecurity-webapp
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_APP_URL=https://yourdomain.com
      - NEXT_PUBLIC_SITE_NAME=Your Company
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Traditional Hosting

For VPS or dedicated servers (DigitalOcean, AWS EC2, Linode, etc.)

### Setup Steps

1. SSH into your server:
```bash
ssh user@your-server-ip
```

2. Install Node.js 18+:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Clone your repository:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

4. Install dependencies:
```bash
npm ci --production
```

5. Create `.env.local` with production variables

6. Build the application:
```bash
npm run build
```

7. Start with PM2 (process manager):
```bash
npm install -g pm2
pm2 start npm --name "cybersecurity-webapp" -- start
pm2 save
pm2 startup
```

### Nginx Reverse Proxy

1. Install Nginx:
```bash
sudo apt-get install nginx
```

2. Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/cybersecurity-webapp
```

3. Add configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

4. Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/cybersecurity-webapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. Install SSL with Let's Encrypt:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment

### Verification Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services pages display properly
- [ ] About page renders
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] Images load and are optimized
- [ ] SEO metadata is present (view page source)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Security headers are set (check with securityheaders.com)
- [ ] SSL certificate is valid
- [ ] Performance is acceptable (run Lighthouse)

### Performance Testing

Run Lighthouse audit:

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select "Performance, Accessibility, Best Practices, SEO"
4. Click "Analyze page load"

Expected scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Monitoring Setup

Consider setting up:

1. **Uptime Monitoring**: UptimeRobot, Pingdom
2. **Error Tracking**: Sentry, Rollbar
3. **Analytics**: Google Analytics, Plausible
4. **Performance Monitoring**: Vercel Analytics, New Relic

## Troubleshooting

### Build Fails

**Issue**: Build fails with TypeScript errors

**Solution**:
```bash
npm run type-check
# Fix any type errors
npm run build
```

**Issue**: Build fails with missing dependencies

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Runtime Errors

**Issue**: 404 errors on page refresh

**Solution**: Ensure your hosting platform supports Next.js routing. For Vercel/Netlify, this is automatic. For traditional hosting, configure your web server to route all requests to Next.js.

**Issue**: Environment variables not working

**Solution**: 
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Rebuild after changing environment variables
- Check hosting platform's environment variable settings

### Performance Issues

**Issue**: Slow page loads

**Solution**:
- Verify images use Next.js Image component
- Check bundle size with `npm run build:analyze`
- Enable CDN on your hosting platform
- Optimize images before uploading

**Issue**: High server response time

**Solution**:
- Use static generation where possible
- Enable caching headers
- Consider upgrading server resources
- Use a CDN for static assets

### Contact Form Issues

**Issue**: Form submissions not sending emails

**Solution**:
- Verify SMTP credentials are correct
- Check email service allows SMTP access
- Review server logs for error messages
- Test with a simple SMTP test script

## Support

For deployment issues:

1. Check Next.js deployment documentation: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
2. Review hosting platform documentation
3. Check application logs for error messages
4. Verify all environment variables are set correctly

## Security Considerations

- Never commit `.env.local` or `.env.production` to Git
- Use strong, unique passwords for all services
- Enable 2FA on hosting platforms
- Regularly update dependencies: `npm audit fix`
- Monitor security headers: [securityheaders.com](https://securityheaders.com)
- Keep Node.js and npm updated
- Review and rotate API keys periodically
