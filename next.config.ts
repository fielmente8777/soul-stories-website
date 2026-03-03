import type { NextConfig } from "next";
import redirectsData from "./redirects.json";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return redirectsData;
  },
};

export default nextConfig;
