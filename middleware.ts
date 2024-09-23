import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "./constants/locales";
import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define your Content Security Policy
  const csp = `
    child-src 'self' blob:;
    worker-src 'self' blob:;
    script-src 'self' https://cdn.logrocket.io https://cdn.lr-ingest.io https://cdn.lr-in.com https://cdn.lr-in-prod.com https://cdn.lr-ingest.com https://cdn.ingest-lr.com;
    connect-src https://*.logrocket.io https://*.lr-ingest.io https://*.logrocket.com https://*.lr-in.com https://*.lr-in-prod.com https://*.lr-ingest.com https://*.ingest-lr.com;
  `.replace(/\s+/g, ' ').trim(); // Normalize spaces

  // Check if there is any supported locale in the pathname
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? "/" : ""
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocale}${pathname}${request.nextUrl.search}`,
        request.nextUrl.href
      )
    );
  }

  // Create a response and set the Content Security Policy header
  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  
  return response;
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
