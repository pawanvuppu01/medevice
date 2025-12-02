# Architecture & Tech Decisions

## Overview
This project uses Next.js for the frontend and API routes, Prisma ORM with MySQL for persistence, and Docker for local development. The design prioritizes a stateless, container-friendly server architecture that can scale horizontally.

## Key Choices
- Frontend / Backend: Next.js (app router) — SSR for marketing pages, CSR for admin dashboard widgets.
- Database: MySQL accessed via Prisma. Existing schema is in `prisma/schema.prisma`.
- Auth: Recommend `NextAuth` for email/password + provider support; alternatively JWT sessions for API-only workflows.
- Realtime: Start with self-hosted `Socket.IO` (Node) with optional Redis adapter for scaling. Managed provider option: `Pusher` or `Ably` if you prefer offload scaling.
- File Storage: Local volumes for dev (via `docker-compose`), S3-compatible (AWS S3, DigitalOcean Spaces) for production.
- CI/CD: GitHub Actions workflows to run lint, typecheck, tests, build, and Docker image build; optional deploy to Vercel, AWS ECS, or DigitalOcean App Platform.
- Observability: Basic structured logs to stdout, and a realtime admin dashboard that consumes event streams for metrics.

## Realtime Design
- Use `socket.io` on server; client connects from admin and project pages.
- For scaling, configure `socket.io-redis` adapter and run Redis in cluster.
- Events: `message:created`, `user:active`, `log:entry`, `notification:created`.

## Security
- Protect admin routes with role checks.
- Use secure cookies, set SameSite and HttpOnly flags.
- Store secrets in environment variables and GitHub Actions secrets.

## Deployment Recommendations
- Staging: Build Docker image and deploy to staging environment using GitHub Actions.
- Production: Use managed DB (RDS/Cloud SQL) and S3 for file storage. Run `prisma migrate` during deployment.

## Files to look at
- `prisma/schema.prisma` — canonical data model
- `docs/requirements.md` — high-level requirements and acceptance criteria

If you confirm these choices, I'll implement the seed script, create basic auth scaffolding (NextAuth), and add a Socket.IO server integration in the API routes.
