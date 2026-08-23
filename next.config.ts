import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/andaeseong",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
