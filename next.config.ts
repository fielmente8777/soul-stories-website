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
        source: "/",
        destination:
          "https://www.amastaysandtrails.com/en-in/soul-stories-mussoorie",
        permanent: true,
      },
      {
        source: "/blogs/:path*/",
        destination:
          "https://www.amastaysandtrails.com/en-in/soul-stories-mussoorie",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
