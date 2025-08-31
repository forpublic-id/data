import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['id', 'en'],

  // Used when no locale matches
  defaultLocale: 'id',

  // Don't use locale detection based on Accept-Language header
  localeDetection: false,

  // Optionally override the default locale prefix
  localePrefix: 'always', // Default
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};