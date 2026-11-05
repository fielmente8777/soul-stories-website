import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import redirectsData from "../redirects.json";

// Matches the 118 URL mappings supplied in the Soul Storries redirection sheet.
// Keep these redirects on the requested domain only; the project also hosts
// other custom domains that were not included in the sheet.
const destinations = new Map(
  redirectsData.map(({ source, destination }) => [source, destination]),
);

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (hostname !== "soulstorries.com" && hostname !== "www.soulstorries.com") {
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
