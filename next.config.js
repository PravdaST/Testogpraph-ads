/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ads.testograph.eu',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
