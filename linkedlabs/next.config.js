/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'bairesdev.mo.cloudinary.net',
      },
      {
        protocol: 'https',
        hostname: 'www.clipartmax.com',
      },
    ],
  },
}

module.exports = nextConfig
