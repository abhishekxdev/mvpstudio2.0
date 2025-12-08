/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alignui.com',
      },
    ],
  },
}

module.exports = nextConfig
