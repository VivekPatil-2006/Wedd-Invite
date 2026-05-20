/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'api.unsplash.com',
      'picsum.photos',
      'source.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@gsap/gsap-core': '@gsap/gsap-core',
    };
    return config;
  },
};

module.exports = nextConfig;
