/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚙️ Dynamic build — keeps Supabase & API routes working
  reactStrictMode: true,

  // ⚙️ Allow Next.js images without optimization (since you're using Vercel or cPanel)
  images: {
    unoptimized: true,
  },

  // ⚙️ Ignore TypeScript build errors (temporary during dev)
  typescript: {
    ignoreBuildErrors: true,
  },

  // ⚙️ Optional: trailing slash for static URLs
  trailingSlash: true,
};

export default nextConfig;