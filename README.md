# Medevice — Enterprise Medical Device & Regulatory Platform

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

# 4. Start dev server
pnpm dev
```

Visit `http://localhost:3000` to see the app.

**Test Login** (after seed): 
- Email: `admin@medevice.local` | Password: `AdminPass123!` (Admin)
- Email: `client@acme.com` | Password: `ClientPass123!` (Client)

## Features

### Platform Modules
- **Marketing Site**: Home, About, Services, Projects, Case Studies, Careers, Contact
- **Client Portal**: Projects, Messages, Files, Training Requests
- **Admin Dashboard**: User Management, Analytics, Real-time Insights
- **Training**: Courses, Sessions, Materials
- **AI Assistant**: Chat widget with voice input support

### Technical Features
- JWT-based authentication with role-based access control (Admin, Staff, Client)
- Secure API routes with rate limiting and input validation
- Real-time SSE stream for events (messages, logs, metrics)
- Prisma ORM with MySQL database
- Type-safe with TypeScript and Tailwind CSS
- Docker Compose for local development
- GitHub Actions CI/CD (lint, test, build, Docker image)
- Unit tests with Vitest

## Architecture

### Tech Stack
- **Frontend**: Next.js 15 (App Router), React 18, Framer Motion, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MySQL 8.0 + Prisma ORM
- **Auth**: JWT with bcryptjs
- **Real-time**: Server-Sent Events (SSE)
- **Testing**: Vitest
- **CI/CD**: GitHub Actions
- **Containerization**: Docker & Docker Compose

### Key Directories
```
medevice/
├── app/api/              # API routes (auth, realtime, CRUD)
├── app/admin/            # Admin-protected pages
├── app/auth/             # Login/logout pages
├── components/           # Reusable React components
├── lib/                  # Helpers (auth, realtime, rate-limiter)
├── prisma/               # Database schema and migrations
├── tests/                # Unit tests
├── docs/                 # Architecture and requirements docs
└── .github/workflows/    # CI/CD pipelines
```

## API Endpoints

### Auth
- `POST /api/auth/login` — Login with email/password
- `POST /api/auth/logout` — Clear session

### Real-time
- `GET /api/realtime/stream` — SSE stream of events
- `POST /api/realtime/publish` — Publish event (authenticated)

### Data (CRUD)
- `GET|POST /api/clients`
- `GET|POST /api/projects`
- `GET|POST /api/messages`
- `GET|POST /api/trainings`

All data endpoints support filtering, pagination, and role-based access control.

## Development

### Install Dependencies
```bash
pnpm install
```

### Set Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with JWT_SECRET and DATABASE_URL
```

### Run Database
```bash
docker-compose up -d db
export DATABASE_URL="mysql://medevice_user:medevice_pass@localhost:3306/medevice_db"
```

### Initialize Database
```bash
npx prisma generate
npx prisma db push
pnpm prisma:seed
```

### Start Dev Server
```bash
pnpm dev
```

### Run Tests
```bash
pnpm test
```

### Lint & Format
```bash
pnpm lint
```

### Build for Production
```bash
pnpm build
pnpm start
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
