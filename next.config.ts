import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /*async redirects() {
    return [
      {
        source: "/",
        destination: "/wc2026",
        permanent: false, //To send 308 redirect status code
      },
    ];
  },*/
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
