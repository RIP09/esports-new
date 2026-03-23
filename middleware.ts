import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Custom role-based logic
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;
    if (path.startsWith('/admin') && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    if (path.startsWith('/dashboard') && !['admin', 'author'].includes(token?.role)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ['/dashboard/:path*', '/admin/:path*', '/api/news/:path*'] };