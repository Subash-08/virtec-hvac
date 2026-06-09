/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.virtec.us",
      },
    ],
  },
};

module.exports = nextConfig;
