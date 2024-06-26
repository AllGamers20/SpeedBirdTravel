/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const PWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  ...nextConfig,
  ...PWA,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: 'inline',
    remotePatterns: [],
    unoptimized: true,
  },
};
