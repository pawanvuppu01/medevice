/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",             // ✅ Enables static export
  images: { unoptimized: true }, // ✅ Fixes next/image with static export
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,          // ✅ Ensures clean static URLs
};

export default nextConfig;
