/** @type {import('next').NextConfig} */
const rootDir = __dirname;

const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
};

module.exports = nextConfig;
