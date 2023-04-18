/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  scope: "/app",
});

module.exports = withPWA(nextConfig);
