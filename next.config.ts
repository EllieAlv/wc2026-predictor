import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/:path*`,
      },
    ];
  },
  //below needed for rewrites from the domain page
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_BUCKET_NAME,
        pathname: "/**",
      },
    ],
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://www.wc2026.elliealvarez.ca"
      : "http://localhost:3000",
};

export default nextConfig;
