import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/mohsin-al-mamun/static-files/**",
      },
    ],
  },
};

export default nextConfig;
