import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strgdsysburtcher.blob.core.windows.net',
        pathname: '/bway/images/logos/**',
      },
    ],
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/burtcherway-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/burtcherway-portfolio' : '',
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig