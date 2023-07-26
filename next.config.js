/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
