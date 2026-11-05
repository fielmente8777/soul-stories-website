import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import redirectsData from "../redirects.json";

// Matches the 118 URL mappings supplied in the Soul Storries redirection sheet.
// Apply the same mappings to both Soul Storries domains and their www aliases.
// Other Vercel preview/default domains are intentionally excluded.
const destinations = new Map(
  redirectsData.map(({ source, destination }) => [source, destination]),
);

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (!["soulstorries.com", "www.soulstorries.com", "soulstoriess.com", "www.soulstoriess.com"].includes(hostname)) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const source = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const destination = destinations.get(source);

  if (!destination) {
    return NextResponse.next();
  }

  // The supplied sheet requires HTTP 301 (not Next.js's default 308).
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
