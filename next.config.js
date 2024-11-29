/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.mistral.ai'], // Add any other domains you might use for images
  },
  // Enable static exports for Vercel's Edge Network
  output: 'standalone',
}

module.exports = nextConfig

