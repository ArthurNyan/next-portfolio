import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale, isLocale } from '@/shared/i18n/config';

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment && isLocale(firstSegment)) {
        const response = NextResponse.next();
        response.cookies.set('NEXT_LOCALE', firstSegment);
        return response;
    }

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;

    return NextResponse.redirect(redirectUrl);
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
