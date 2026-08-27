import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/website-development",
        destination: "/webpage-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
