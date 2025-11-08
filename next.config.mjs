/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
