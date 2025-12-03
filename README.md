# Medevice — Enterprise Medical Device & Regulatory Platform

![CI Status](https://github.com/pawanvuppu01/medevice/actions/workflows/ci.yml/badge.svg)

## Overview

Medevice is a large-scale, enterprise-grade platform for medical device consulting, training, and project management. It includes a public-facing marketing site, client portals, administrative dashboards, real-time insights, and an AI assistant.

## Quick Start

```bash
# 1. Clone and install
git clone <repo-url> && cd medevice
pnpm install

# 2. Start database
docker-compose up -d db
sleep 10

# 3. Configure environment
export DATABASE_URL="mysql://medevice_user:medevice_pass@localhost:3306/medevice_db"
npx prisma generate
npx prisma db push
pnpm prisma:seed

# Medevice — Enterprise Medical Device & Regulatory Platform
pnpm dev
```

Visit `http://localhost:3000` to see the app.

Medevice is a large-scale, enterprise-grade platform for medical device consulting, training, and project management. It features a public-facing marketing site, client portals, administrative dashboards, real-time insights, and an AI assistant. The project is fully containerized, tested, and CI/CD-enabled.

**Current Status**: ✅ **Production-Ready** — Build passes locally, tests passing, Docker deployment working.
- Email: `admin@medevice.local` | Password: `AdminPass123!` (Admin)
- Email: `client@acme.com` | Password: `ClientPass123!` (Client)

### Local Development (with pnpm)

## Features
# 1. Clone and install
git clone https://github.com/pawanvuppu01/medevice.git
cd medevice
- **Marketing Site**: Home, About, Services, Projects, Case Studies, Careers, Contact
- **Client Portal**: Projects, Messages, Files, Training Requests
# 2. Create environment file
cp .env.example .env
# Edit .env if needed; default values work for local MySQL

# 3. Start MySQL database (Docker)
docker compose up -d db

# 4. Generate Prisma client and push schema
- JWT-based authentication with role-based access control (Admin, Staff, Client)
pnpm prisma:generate
- Real-time SSE stream for events (messages, logs, metrics)
- Type-safe with TypeScript and Tailwind CSS
# 5. Seed database (optional)
node prisma/seed.js

# 6. Start development server
- GitHub Actions CI/CD (lint, test, build, Docker image)
- Unit tests with Vitest

Visit `http://localhost:3000` in your browser.

**Test Credentials** (after seed):
- **Admin**: `admin@medevice.local` / `AdminPass123!`
- **Client**: `client@acme.com` / `ClientPass123!`

### Docker Deployment

```bash
# Start entire stack (db + app)
docker compose up -d

# Tail logs
docker compose logs -f app

# Stop all services
docker compose down
```

The app will be available at `http://localhost:3000`.
- **Database**: MySQL 8.0 + Prisma ORM
- **Auth**: JWT with bcryptjs
- **Real-time**: Server-Sent Events (SSE)
- **Testing**: Vitest
- **Marketing Site**: Home, About, Services, Solutions, Projects, Case Studies, Careers, Contact
- **Consulting**: AI Medtech, Design Control, Post-Market, Quality Systems, Regulatory Strategy, Risk Management
- **Client Portal**: Projects, Messages, Files, Training Requests, Profile Management
- **Admin Dashboard**: User Management, Client Analytics, Real-time Insights, Logs
### Key Directories
```
medevice/
### Technical Capabilities
- ✅ JWT-based authentication with role-based access control (Admin, Staff, Client)
- ✅ Secure API routes with rate limiting and input validation
- ✅ Real-time SSE stream for events (messages, logs, metrics)
- ✅ Prisma ORM with MySQL — production-ready migrations
- ✅ Type-safe with TypeScript and Tailwind CSS
- ✅ Docker Compose for reproducible local & container deployments
- ✅ GitHub Actions CI/CD: lint, test, build, Docker image
- ✅ Unit tests with Vitest
- ✅ Code-free content/asset management (JSON + static files)
- ✅ Vercel-compatible build (no runtime filesystem access)
```

## API Endpoints

### Auth
- **Backend**: Next.js API Routes, Node.js 20+
- **Database**: MySQL 8.0 + Prisma ORM (v6)

### Real-time
- `GET /api/realtime/stream` — SSE stream of events
- **CI/CD**: GitHub Actions (lint, test, build, optional Vercel deploy)

- **Package Manager**: pnpm (v9+)
### Data (CRUD)
- `GET|POST /api/clients`
- `GET|POST /api/projects`
- `GET|POST /api/messages`
├── app/
│   ├── api/              # API routes (auth, realtime, CRUD, etc.)
│   ├── admin/            # Admin-protected pages & dashboards
│   ├── auth/             # Login/logout pages
│   ├── consulting/       # Consulting service pages
│   ├── training/         # Training modules
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page

├── lib/                  # Helper modules (auth, realtime, content loader, etc.)
├── prisma/
│   ├── schema.prisma     # Database schema (Clients, Projects, Messages, etc.)
│   ├── migrations/       # Schema migration history
│   └── seed.js           # Database seeding script
├── public/
│   └── assets/           # Static images, icons (organized by type)
├── resources/
│   └── content/          # JSON files for dynamic content (hero, services, etc.)
├── tests/                # Unit tests
```bash
├── .github/workflows/
│   ├── ci.yml            # CI pipeline (lint, test, build)
│   └── deploy.yml        # Vercel deployment (requires secrets)
└── docker-compose.yml    # Services: db, app
```

### Set Environment Variables
```bash
### Authentication
# Edit .env.local with JWT_SECRET and DATABASE_URL
```

### Real-time Events
```bash
- `POST /api/realtime/publish` — Publish event (admin/staff only)
export DATABASE_URL="mysql://medevice_user:medevice_pass@localhost:3306/medevice_db"
### Data Management (CRUD)

### Initialize Database
```bash
npx prisma generate
- `GET|POST /api/files` — File uploads/list
- `GET|POST /api/profiles` — User profiles

All endpoints support:
- Filtering (`?status=active`)
- Pagination (`?page=1&limit=10`)
- Role-based access control
- Rate limiting (5 req/sec per IP)
npx prisma db push
```

### Start Dev Server
### Scripts
pnpm dev
# Install dependencies
```
### Run Tests
# Development server (live reload, hot modules)
pnpm dev
```bash
# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Run tests
pnpm test

# Generate Prisma client
pnpm prisma:generate

# Push schema to database
npx prisma db push

# Seed database
node prisma/seed.js
```
pnpm build
### Environment Variables

Create a `.env` file (see `.env.example`):
```
# Database
DATABASE_URL="mysql://medevice_user:medevice_pass@localhost:3306/medevice_db"

# Optional: Vercel deployment
VERCEL_TOKEN=<your-vercel-token>
VERCEL_ORG_ID=<your-vercel-org-id>
VERCEL_PROJECT_ID=<your-vercel-project-id>
```

### Managing Content Without Touching Code

The project uses a **code-free content management system**:

1. **Update content**: Edit JSON files in `resources/content/`:
   - `site.json` — General site config
   - `hero.json` — Hero section content
   - `services.json` — Services section
   - `team.json` — Team members
   - `gallery.json` — Project gallery
   - `footer.json` — Footer content

2. **Add images/assets**: Place files in `public/assets/{type}/`:
   - `public/assets/images/` — General images
   - `public/assets/banners/` — Banner images
   - `public/assets/team/` — Team photos
   - `public/assets/icons/` — SVG icons
   - `public/assets/products/` — Product screenshots

3. **Rebuild and deploy**: Run `pnpm build` and deploy. Assets are served from `/assets/{type}/{filename}`.

Example component (no code change needed):
```tsx
import { getContent, getAssetUrl } from '@/lib/content';

export default function HeroSection() {
  const hero = getContent('hero');
  return (
    <div style={{ backgroundImage: `url(${getAssetUrl('banners', hero?.banner, 'placeholder')})` }}>
      {hero?.title}
    </div>
  );
}
```

## Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test realtime.test.ts

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

Current test status: ✅ 1/1 tests passing (realtime pubsub integration test)

## CI/CD Pipeline

### GitHub Actions Workflows

**CI Workflow** (`.github/workflows/ci.yml`):
- Triggers on: push to `main`/`develop`, pull requests to `main`
- Matrix: Node.js 20.x & 22.x, Ubuntu latest
- Steps:
  1. Checkout code
  2. Setup Node + pnpm
  3. Install dependencies
  4. Generate Prisma client
  5. Lint code (enforce all rules)
  6. Build Next.js app
  7. Run tests + coverage upload
  8. Cache artifacts for faster rebuilds

**Deploy Workflow** (`.github/workflows/deploy.yml`):
- Triggers on: push to `main` (or after successful CI)
- Deploys to Vercel (requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets)
- Optional: Comments on PRs with deployment link

### Setting Up Vercel Deployment

1. **Connect repo to Vercel** (https://vercel.com)
2. **Get credentials**:
   - `VERCEL_TOKEN`: From Vercel Account Settings → Tokens
   - `VERCEL_ORG_ID`: From Vercel project URL (team ID)
   - `VERCEL_PROJECT_ID`: From Vercel project URL
3. **Add GitHub secrets**:
   - Go to repo Settings → Secrets and variables → Actions
   - Add the three secrets from step 2
4. **Next push to `main`** will trigger deploy workflow

## Docker Deployment

The project includes a multi-stage Dockerfile:

**Builder Stage**:
- Installs dependencies
- Generates Prisma client
- Builds Next.js app

**Runtime Stage**:
- Copies built app
- Runs `pnpm start` (production server)
- Exposes port 3000

**Environment Variables** (in `docker-compose.yml`):
```yaml
DATABASE_URL: mysql://medevice_user:medevice_pass@db:3306/medevice_db
NODE_ENV: production
NEXT_PUBLIC_APP_NAME: MeDevice
NEXT_PUBLIC_APP_URL: http://localhost:3000
```

### Local Docker Build

```bash
# Build image
docker build -t medevice-app .

# Run container (requires MySQL running on host or docker network)
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://..." \
  -e NODE_ENV=production \
  medevice-app
```

## Troubleshooting

### Issue: `DATABASE_URL not found` during `pnpm build`
**Solution**: Ensure `.env` file exists or `DATABASE_URL` is set in your shell before building.

### Issue: Port 3000 already in use
**Solution**: 
## Deployment
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
### Docker Build
```bash
### Issue: Prisma schema out of sync
**Solution**: 
docker run -e DATABASE_URL="mysql://..." -e JWT_SECRET="..." -p 3000:3000 medevice:latest
npx prisma db push --force-reset  # ⚠️ Clears database; use in dev only

### Environment Variables (Production)
### Issue: Docker container exits (exit code 1)
**Solution**: Check logs:
- `JWT_SECRET` — Strong random secret (minimum 32 chars)
docker logs medevice_app
- `NEXT_PUBLIC_APP_URL` — Your production URL

## Project Structure Highlights

### Authentication Flow
1. User submits email/password to `POST /api/auth/login`
2. Server validates against `Profiles` table (bcrypt comparison)
3. JWT token generated and returned
4. Client stores in localStorage
5. All requests include token in `Authorization: Bearer <token>` header
6. Middleware validates token and role on protected routes

### Real-time Architecture
- Uses **Server-Sent Events (SSE)** for one-way server → client push
- Endpoint: `GET /api/realtime/stream` — client subscribes
- Publishing: `POST /api/realtime/publish` — admin creates event
- Events broadcast to all connected clients
- Example: notifications, logs, dashboard metrics

### Database Schema
Models: `Clients`, `Profiles`, `Projects`, `Messages`, `Trainings`, `Files`, `Logs`, `Notifications`
- All have timestamps (`createdAt`)
- Role-based queries (Profiles have `role` field: admin/staff/client)
- Foreign keys ensure referential integrity

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes and test locally: `pnpm dev && pnpm test`
3. Lint: `pnpm lint` (fix issues with `pnpm lint --fix`)
4. Commit: `git commit -am "feat: describe change"`
5. Push: `git push origin feature/my-feature`
6. Open pull request on GitHub
7. CI will run automatically; address any failures
8. Once approved, merge to `main` (deploy workflow triggers)

## Performance Notes

- **Build time**: ~2-3 minutes locally (includes all modules)
- **Start time**: ~1-2 seconds (production)
- **Database queries**: Optimized with Prisma (lazy loading, relations)
- **Static assets**: CDN-ready (serve from `/public/assets/...`)

## Security

- ✅ JWT tokens with expiration
- ✅ Password hashing with bcryptjs
- ✅ Rate limiting on API endpoints
- ✅ Input validation and sanitization
- ✅ CORS configured (adjust as needed)
- ✅ Environment variables for secrets (never commit `.env`)
- ⚠️ SQL injection: Prisma prevents this automatically
- ⚠️ XSS protection: React escapes by default; use `dangerouslySetInnerHTML` cautiously

## License

Proprietary — MeDevice Enterprise Platform

## Support & Contact

For issues, questions, or contributions, open a GitHub issue or contact the development team.

---

**Last Updated**: December 3, 2025  
**Maintainer**: Pawan Vuppu
```

### Lint & Format
- [ ] Use HTTPS only
- [ ] Rotate JWT_SECRET regularly
```

## Deployment

### Docker Build
```bash
docker build -t medevice:latest .
docker run -e DATABASE_URL="mysql://..." -e JWT_SECRET="..." -p 3000:3000 medevice:latest
```

### Environment Variables (Production)
- `DATABASE_URL` — MySQL connection string (use managed DB like AWS RDS)
- `JWT_SECRET` — Strong random secret (minimum 32 chars)
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL` — Your production URL

### Security Checklist
- [ ] Use HTTPS only
- [ ] Rotate JWT_SECRET regularly
- [ ] Use managed database (RDS, Cloud SQL)
- [ ] Enable CORS and rate limiting
- [ ] Monitor logs and errors
- [ ] Set up database backups
- [ ] Keep dependencies updated

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push/PR:
1. Install dependencies
2. Generate Prisma client
3. Lint code
4. Build project
5. Run tests

All PRs must pass checks before merge.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot find DATABASE_URL" | Create `.env` with `DATABASE_URL` |
| "Port 3000 in use" | `lsof -i :3000 \| awk 'NR!=1 {print $2}' \| xargs kill -9` |
| "DB connection refused" | Check `docker ps`, ensure MySQL is running |
| "Prisma Client not found" | Run `npx prisma generate` |

## Performance

- SSR for marketing pages (SEO & speed)
- CSR for admin dashboard (responsiveness)
- Optimized Tailwind CSS bundle
- Built-in Prisma query caching
- Rate limiting on all public endpoints

## Monitoring

- Real-time event stream on admin insights page
- Structured logs in API routes
- Basic metrics (clients, projects, messages counts)
- Consider Sentry, DataDog for production monitoring

## Documentation

- `docs/requirements.md` — Feature requirements and acceptance criteria
- `docs/architecture.md` — Tech decisions and design patterns

## Support

For issues or questions:
1. Check `docs/` folder
2. Review GitHub Issues
3. Contact development team

## License

Copyright © 2025 Medevice. All rights reserved.

---

## How to Manage Website Content Without Touching Code

### Asset Management
- Place all images, icons, banners, team photos, and uploads in `/public/assets/` and its subfolders.
- To add or replace an image, simply drag-and-drop the file into the correct folder (e.g., `/public/assets/banners/hero.jpg`).
- All components reference assets by static path (e.g., `/assets/images/hero.jpg`).
- If an asset is missing, a placeholder image is shown automatically.
- No need to import images in code—just update the files.

### Dynamic Content
- All dynamic content is stored as JSON in `/resources/content/`.
- Update `site.json`, `hero.json`, `services.json`, `team.json`, `gallery.json`, or `footer.json` to change site settings, hero section, services, team, gallery, or footer content.
- The site auto-reloads content on dev server restart.

### Upload & Replace Workflow
- **Add new photo:** Place it in the correct `/public/assets/` subfolder.
- **Replace photo:** Overwrite the file in the folder; the website updates everywhere.
- **Delete asset:** Remove the file; a placeholder will show instead.
- **Add new service icon:** Place SVG/PNG in `/public/assets/icons/` and reference it in `services.json`.
- **Add team member:** Place photo in `/public/assets/team/` and add entry in `team.json`.
- **Replace hero banner:** Overwrite `/public/assets/banners/hero.jpg` and update `hero.json` if needed.

### Example
- To update the hero banner, replace `/public/assets/banners/hero.jpg` and update `banner` in `hero.json`.
- To add a new service, add an entry to `services.json` and place the icon in `/public/assets/icons/`.
- To add a team member, add to `team.json` and upload their photo to `/public/assets/team/`.

### No Code Changes Needed
- All content and assets are managed via files and folders.
- The system auto-falls back to placeholder images if any asset is missing.
- You can manage your website like a CMS—no React or TypeScript edits required.

---

**Folder Structure Example:**
```
/public/assets/
  images/
  banners/
  team/
  icons/
  products/
  uploads/
  placeholders/
/resources/content/
  site.json
  hero.json
  services.json
  team.json
  gallery.json
  footer.json
- [ ] Use managed database (RDS, Cloud SQL)
- [ ] Enable CORS and rate limiting
**Enjoy instant, code-free content management!**
*** End Patch
- [ ] Set up database backups
- [ ] Keep dependencies updated

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push/PR:
1. Install dependencies
2. Generate Prisma client
3. Lint code
4. Build project
5. Run tests

All PRs must pass checks before merge.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot find DATABASE_URL" | Create `.env.local` with `DATABASE_URL` |
| "Port 3000 in use" | `lsof -i :3000 \| awk 'NR!=1 {print $2}' \| xargs kill -9` |
| "DB connection refused" | Check `docker ps`, ensure MySQL is running |
| "Prisma Client not found" | Run `npx prisma generate` |

## Performance

- SSR for marketing pages (SEO & speed)
- CSR for admin dashboard (responsiveness)
- Optimized Tailwind CSS bundle
- Built-in Prisma query caching
- Rate limiting on all public endpoints

## Monitoring

- Real-time event stream on admin insights page
- Structured logs in API routes
- Basic metrics (clients, projects, messages counts)
- Consider Sentry, DataDog for production monitoring

## Documentation

- `docs/requirements.md` — Feature requirements and acceptance criteria
- `docs/architecture.md` — Tech decisions and design patterns

## Support

For issues or questions:
1. Check `docs/` folder
2. Review GitHub Issues
3. Contact development team

## License

Copyright © 2025 Medevice. All rights reserved.

## How to Manage Website Content Without Touching Code

### Asset Management
- Place all images, icons, banners, team photos, and uploads in `/public/assets/` and its subfolders.
- To add or replace an image, simply drag-and-drop the file into the correct folder (e.g., `/public/assets/banners/hero.jpg`).
- All components reference assets by static path (e.g., `/assets/images/hero.jpg`).
- If an asset is missing, a placeholder image is shown automatically.
- No need to import images in code—just update the files.

### Dynamic Content
- All dynamic content is stored as JSON in `/resources/content/`.
- Update `site.json`, `hero.json`, `services.json`, `team.json`, `gallery.json`, or `footer.json` to change site settings, hero section, services, team, gallery, or footer content.
- The site auto-reloads content on dev server restart.

### Upload & Replace Workflow
- **Add new photo:** Place it in the correct `/public/assets/` subfolder.
- **Replace photo:** Overwrite the file in the folder; the website updates everywhere.
- **Delete asset:** Remove the file; a placeholder will show instead.
- **Add new service icon:** Place SVG/PNG in `/public/assets/icons/` and reference it in `services.json`.
- **Add team member:** Place photo in `/public/assets/team/` and add entry in `team.json`.
- **Replace hero banner:** Overwrite `/public/assets/banners/hero.jpg` and update `hero.json` if needed.

### Example
- To update the hero banner, replace `/public/assets/banners/hero.jpg` and update `banner` in `hero.json`.
- To add a new service, add an entry to `services.json` and place the icon in `/public/assets/icons/`.
- To add a team member, add to `team.json` and upload their photo to `/public/assets/team/`.

### No Code Changes Needed
- All content and assets are managed via files and folders.
- The system auto-falls back to placeholder images if any asset is missing.
- You can manage your website like a CMS—no React or TypeScript edits required.

---

**Folder Structure Example:**
```
/public/assets/
  images/
  banners/
  team/
  icons/
  products/
  uploads/
  placeholders/
/resources/content/
  site.json
  hero.json
  services.json
  team.json
  gallery.json
  footer.json
```

**Enjoy instant, code-free content management!**
