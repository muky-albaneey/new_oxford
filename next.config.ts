import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Smaller client bundles via tree-shaking
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Headers for video files
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
};

export default nextConfig;
