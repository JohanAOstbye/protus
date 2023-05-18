/** @type {import('next').NextConfig} */
import path from 'path'

const config = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  webpack: (config) => {
    config.module.rules
      .filter((rule) => rule.test.test('.svg'))
      .forEach((rule) => (rule.exclude = /\.svg$/i))
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default config
