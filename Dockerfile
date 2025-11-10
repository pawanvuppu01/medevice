# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy all project files (so prisma schema exists too)
COPY . .

# Non-interactive install (fixes CI/TTY issue)
ENV CI=true
RUN pnpm install --frozen-lockfile

# Generate Prisma client using your correct schema path
RUN pnpm prisma generate --schema=lib/generated/prisma/schema.prisma

# Build Next.js app
RUN pnpm build

# ---------- Runtime stage ----------
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm for runtime
RUN npm install -g pnpm

# Copy everything from builder
COPY --from=builder /app ./

# Set environment and expose port
ENV NODE_ENV=production
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
