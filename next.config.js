/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['apertura-s3-photos.s3.amazonaws.com'],
        formats: ["image/webp"],
      },
}

module.exports = nextConfig
