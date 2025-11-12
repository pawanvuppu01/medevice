# ---------- Builder Stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Copy Prisma schema first
COPY prisma ./prisma

# Approve Prisma build scripts
RUN pnpm approve-builds prisma @prisma/client

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy everything else
COPY . .

# Generate Prisma client
RUN npx prisma generate --schema=prisma/schema.prisma

# Build Next.js app
RUN pnpm build


# ---------- Runtime Stage ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app from builder
COPY --from=builder /app ./

# Install pnpm globally again for runtime (so it won’t fail)
RUN npm install -g pnpm

# ✅ Start app using pnpm or npm
CMD ["pnpm", "start"]

EXPOSE 3000
