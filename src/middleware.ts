import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Check for the token in cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("token",token)

  // List of paths that should be protected
  const protectedPaths = ['/cart', '/products'];

  const pathIsProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (pathIsProtected && !token) {
    // If trying to access a protected route and not authenticated, redirect to login
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // If authenticated or accessing a non-protected path, continue to the requested route
  return NextResponse.next();
}

// Configure which paths should be intercepted by this middleware
export const config = {
  matcher: ['/cart/:path*', '/products/:path*'], // Add more paths as needed
};
