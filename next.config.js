/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
