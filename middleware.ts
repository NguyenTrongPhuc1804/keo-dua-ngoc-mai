import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import routing from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Nếu truy cập root path "/", redirect đến locale mặc định
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}`, request.url)
    );
  }
  
  // Xử lý các path khác với next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
