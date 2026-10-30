import type { NextConfig } from "next";
import migrationRedirects from "./migration-redirects.json";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return process.env.VERCEL_ENV === "production" ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },

  async redirects() {
    return migrationRedirects;
  },
};

export default nextConfig;
