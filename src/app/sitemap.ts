import type { MetadataRoute } from "next";
import { legacy, canonicalUrl } from "@/lib/legacy";
import { blogsData } from "./blogs/[slug]/blogsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const existing = ["/", "/about-us", "/villas", "/kafuli-cafe", "/contact-us", "/wellness", "/soul-care", "/celebrations", "/gallery", "/nearby-places", "/booking", "/blogs", "/press", "/experience", "/guest-policies", "/privacy-policy", "/cancellation-policy"];
  const paths = new Set([...existing, ...Object.keys(legacy.pages).filter(path => !path.startsWith("/you-may-also-like/") && path !== "/thank-you"), ...Object.keys(legacy.archives), ...Object.keys(legacy.villas).map(slug => `/villas/${slug}`), ...blogsData.map(blog => `/blogs/${blog.slug}`)]);
  return [...paths].map(path => ({ url: canonicalUrl(path), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path.startsWith("/tag/") ? 0.3 : 0.7 }));
}
