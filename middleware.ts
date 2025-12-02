import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const TOKEN_NAME = 'medevice_token';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect admin routes under `/admin`
  if (pathname.startsWith('/admin') || pathname.startsWith('/app/admin')) {
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if (!token) {
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      // allow through
      return NextResponse.next();
    } catch (err) {
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/app/admin/:path*']
};
