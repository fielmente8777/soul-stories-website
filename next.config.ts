import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  trailingSlash: true,
  redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.amastaysandtrails.com/en-in/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
