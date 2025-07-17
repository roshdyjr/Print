import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    pathname !== '/favicon.ico' &&
    pathname !== '/manifest.json'

  if (!shouldHandleLocale) return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ['en', 'ar'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en'
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
}