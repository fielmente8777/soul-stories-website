import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", ...(process.env.VERCEL_ENV === "production" ? { allow: "/", disallow: ["/thank-you/"] } : { disallow: "/" }) }, sitemap: "https://soulstorries.com/sitemap.xml" };
}
