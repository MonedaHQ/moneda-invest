/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['moneda-treasury.000webhostapp.com'],
    unoptimized: true,
  },
  // Re-enable this redirect when the old website should point all traffic to moneda.africa.
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://moneda.africa',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
