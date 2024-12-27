// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("session");

  // Check if the session cookie exists
  if (!session && request.nextUrl.pathname.startsWith("/ace")) {
    return NextResponse.redirect(new URL("/verify", request.url));
  }

  return NextResponse.next(); // Proceed to the requested page if authenticated
}
export const config = {
    matcher: ["/ace/:path*"], // Apply middleware only to /dashboard and its subpaths
  };
  