import { NextRequest, NextResponse } from "next/server";

export function middleware(requset: NextRequest) {
  const token = requset.cookies.get("token_user");

  if (!token && requset.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", requset.url));
  }
  return NextResponse.next();
}

export const config = {
    matcher: ['/'],
}