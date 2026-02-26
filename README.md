# Cybersecurity Services Web Application

A modern, responsive Next.js 14+ web application for a cybersecurity services company. Built with TypeScript, Tailwind CSS, and comprehensive testing infrastructure.

## Features

- **Next.js 14+** with App Router for optimal performance
- **TypeScript** with strict mode for type safety
- **Tailwind CSS** with custom cybersecurity theme
- **Form Handling** with React Hook Form and Zod validation
- **Testing** with Jest, React Testing Library, and fast-check for property-based testing
- **Responsive Design** supporting 320px to 1920px viewports
- **SEO Optimized** with metadata and sitemap generation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Additional build commands:

```bash
# Type check without building
npm run type-check

# Run all validation (type check, lint, tests)
npm run validate

# Analyze bundle size (requires @next/bundle-analyzer)
npm run build:analyze
```

## Deployment

### Environment Variables

1. Copy the environment template:

```bash
cp .env.example .env.local
```

2. Configure required variables:
   - `NEXT_PUBLIC_APP_URL`: Your production URL
   - `NEXT_PUBLIC_SITE_NAME`: Your company name

3. Optional configurations:
   - SMTP settings for contact form email delivery
   - Analytics tracking IDs
   - Monitoring service credentials
   - API rate limiting parameters

### Deploy to Vercel (Recommended)

This application is optimized for Vercel deployment:

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via Vercel Dashboard**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Import project at [vercel.com/new](https://vercel.com/new)
   - Vercel auto-detects Next.js configuration
   - Add environment variables in project settings
   - Deploy automatically on every push

3. **Deploy via CLI**:
```bash
vercel
```

4. **Production deployment**:
```bash
vercel --prod
```

### Deploy to Other Platforms

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in site settings

#### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t cybersecurity-webapp .
docker run -p 3000:3000 cybersecurity-webapp
```

#### Traditional Node.js Hosting

1. Build the application:
```bash
npm run build
```

2. Upload files to your server:
   - All project files
   - `.next` directory
   - `node_modules` or run `npm install --production` on server

3. Start the server:
```bash
npm run start
```

4. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "cybersecurity-webapp" -- start
pm2 save
pm2 startup
```

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on mobile devices
- [ ] Validate SEO metadata with browser dev tools
- [ ] Test navigation and all links
- [ ] Verify images load and are optimized
- [ ] Check security headers (use securityheaders.com)
- [ ] Test performance with Lighthouse
- [ ] Set up monitoring and error tracking
- [ ] Configure custom domain and SSL certificate

### Performance Optimization

The application includes:
- Static page generation for optimal performance
- Automatic code splitting
- Image optimization via Next.js Image component
- Prefetching of linked pages
- Compression and minification

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utility functions and data
├── types/                 # TypeScript type definitions
├── __tests__/            # Test files
└── public/               # Static assets
```

## Technology Stack

- **Framework**: Next.js 14.2.0
- **React**: 18.3.0
- **TypeScript**: 5.4.0
- **Styling**: Tailwind CSS 3.4.0
- **Form Management**: React Hook Form 7.51.0
- **Validation**: Zod 3.22.0
- **Testing**: Jest 29.7.0, React Testing Library 14.2.0, fast-check 3.15.0

## Color Theme

The application uses a custom cybersecurity-themed color palette:

- **Cyber Dark**: #0a0e27
- **Cyber Blue**: #00d4ff
- **Cyber Purple**: #7b2cbf
- **Cyber Green**: #00ff88
- **Cyber Red**: #ff006e

## License

Private - All rights reserved