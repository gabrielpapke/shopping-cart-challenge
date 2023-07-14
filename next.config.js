/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      'files.stripe.com',
    ],
  },

}

module.exports = nextConfig
