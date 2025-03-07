import { NextRequest, NextResponse } from 'next/server';
import { languages, defaultLanguage } from './i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // If we're at the root path, redirect to the default language
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLanguage.code}`, request.url)
    );
  }
  
  // Check if the pathname already has a valid language
  const pathnameHasLanguage = languages.some(
    (language) => pathname.startsWith(`/${language.code}/`) || pathname === `/${language.code}`
  );
  
  // If there's already a language code, no need to redirect
  if (pathnameHasLanguage) {
    return;
  }
  
  // For any other path without a language, add the default language
  return NextResponse.redirect(
    new URL(`/${defaultLanguage.code}${pathname}`, request.url)
  );
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}; 