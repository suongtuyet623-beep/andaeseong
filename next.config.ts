import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/andaeseong",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
