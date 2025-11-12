#!/bin/sh
echo "🧩 Running postbuild environment sync..."

# --- Detect environment ---
if [ "$VERCEL" = "1" ]; then
  echo "🌐 Detected Vercel environment → using production DB"
  export DATABASE_URL="$DATABASE_URL_PROD"
else
  echo "🐳 Detected local/Docker environment → using local DB"
  export DATABASE_URL="$DATABASE_URL_LOCAL"
fi

# --- Show which DB is active ---
echo "📦 Active DATABASE_URL: $DATABASE_URL"

# --- Regenerate Prisma Client ---
echo "⚙️  Generating Prisma client..."
npx prisma generate --schema=prisma/schema.prisma

# --- Push schema only in non-production (safety guard) ---
if [ "$NODE_ENV" != "production" ] && [ "$VERCEL" != "1" ]; then
  echo "🧱 Pushing Prisma schema to DB..."
  npx prisma db push --schema=prisma/schema.prisma
else
  echo "🚫 Skipping schema push (production mode)"
fi

echo "✅ Prisma setup complete!"
