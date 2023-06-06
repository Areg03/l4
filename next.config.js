/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { i18n } = require('./next-i18next.config')



module.exports = {
  ...nextConfig,
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash].[ext]',
        },
      }],
    });

    return config;
  },
  i18n,
  images: {
    domains: ['back.smdesigner.am'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'back.smdesigner.am',
        port: '8000',
        pathname: '/storage/images',
      },
    ],
  },
}