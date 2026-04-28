import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/prototypes",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
