import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // API rate limiting for external data sources
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-RateLimit-Limit",
            value: "100",
          },
          {
            key: "X-RateLimit-Remaining", 
            value: "99",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*.forpublic.id",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
        ],
      },
    ];
  },
  // Redirects for API versioning
  async redirects() {
    return [
      {
        source: "/api/health/:path*",
        destination: "/api/v1/health/:path*",
        permanent: false,
      },
      {
        source: "/api/environment/:path*", 
        destination: "/api/v1/environment/:path*",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);