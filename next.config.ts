import type { NextConfig } from "next";

// Vercel: dùng SSR/ISR mặc định (không export) để tối ưu.
// GitHub Pages: giữ output: "export" để tạo thư mục /out
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  images: {
    unoptimized: isGithubPages, // Vercel tự optimize, GitHub Pages cần unoptimized
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // Tăng performance trên Vercel
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
