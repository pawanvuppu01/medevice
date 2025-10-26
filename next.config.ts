import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ],
  },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  // ✅ Keep dynamic routes working by removing export mode
  // We’ll deploy via Node or Vercel instead of static export
};

export default nextConfig;
