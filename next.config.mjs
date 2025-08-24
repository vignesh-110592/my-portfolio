/** @type {import('next').NextConfig} */
const nextConfig = {
  /* your config */
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback };
    return config;
  },
};

export default nextConfig;
