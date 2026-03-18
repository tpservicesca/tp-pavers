import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Hostinger CDN from caching HTML pages
  // Static assets (JS/CSS) keep immutable cache, but HTML must revalidate
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image|images|favicon).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
