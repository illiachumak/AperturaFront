/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['apertura-s3-photos.s3.amazonaws.com'],
        formats: ["image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "apertura-s3-photos.s3.amazonaws.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
}

module.exports = nextConfig
