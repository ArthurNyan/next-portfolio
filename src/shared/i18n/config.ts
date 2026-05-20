export const locales = ['ru', 'en'] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = 'ru';

export const isLocale = (value: string): value is AppLocale => locales.includes(value as AppLocale);

export const stripLocaleFromPath = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length === 0) {
        return '/';
    }

    if (isLocale(segments[0])) {
        const nextPath = `/${segments.slice(1).join('/')}`;
        return nextPath === '/' ? '/' : nextPath.replace(/\/$/, '') || '/';
    }

    return pathname === '' ? '/' : pathname;
};

export const buildLocalizedPath = (locale: AppLocale, pathname = '/') => {
    const normalized = stripLocaleFromPath(pathname);

    if (normalized === '/') {
        return `/${locale}`;
    }

    return `/${locale}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
};

export const switchLocaleInPath = (pathname: string, locale: AppLocale) =>
    buildLocalizedPath(locale, pathname);
