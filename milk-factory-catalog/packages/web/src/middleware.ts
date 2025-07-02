// packages/web/src/middleware.ts

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // 👈 Correct the import path here

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
