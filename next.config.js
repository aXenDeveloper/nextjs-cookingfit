const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  output: 'standalone',
  swcMinify: false
};
