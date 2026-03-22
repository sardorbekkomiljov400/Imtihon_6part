import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/rounting'; 

export default createMiddleware(routing);

export const config = {
  // Bu qismi to'g'ri, tegma
  matcher: ['/', '/(uz|ru|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};