/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  images: { unoptimized: true },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  trailingSlash: true,
};

export default nextConfig;
