import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Keep soulstorries.com as the single public/canonical website.
// Preserve the requested path and query string from the alternate spelling.
export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();

  if (hostname === "soulstoriess.com" || hostname === "www.soulstoriess.com") {
    const target = request.nextUrl.clone();
    target.protocol = "https:";
    target.hostname = "soulstorries.com";
    target.port = "";
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
