import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/rounting';

export default createMiddleware(routing);

export const config = {
  // Tilni URL'ga qo'shmaydigan fayl turlarini chetlab o'tish
  matcher: ['/', '/(uz|ru|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};