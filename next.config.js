/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['moneda-treasury.000webhostapp.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
