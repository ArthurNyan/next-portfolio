import classNames from 'classnames';
import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { getDictionary } from '@/shared/i18n/dictionary';
import { AppLocale, buildLocalizedPath, locales } from '@/shared/i18n/config';
import { requireLocale } from '@/shared/i18n/server';

import '../../globals.scss';

import Analytics from '../../providers/Analytics';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

const NunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500'],
});

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = ({ params }: LocaleLayoutProps): Metadata => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);

    return {
        metadataBase: new URL('https://www.malos.ru/'),
        title: {
            default: dictionary.metadata.defaultPageTitle,
            template: `${dictionary.metadata.siteName} | %s`,
        },
        description: dictionary.metadata.description,
        openGraph: {
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            url: buildLocalizedPath(locale),
            siteName: dictionary.metadata.siteName,
            locale: locale === 'ru' ? 'ru_RU' : 'en_US',
            type: 'website',
            images: buildLocalizedPath(locale, '/opengraph-image'),
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
            },
        },
        twitter: {
            title: dictionary.metadata.title,
            card: 'summary_large_image',
            images: buildLocalizedPath(locale, '/opengraph-image'),
        },
        alternates: {
            languages: {
                ru: buildLocalizedPath('ru'),
                en: buildLocalizedPath('en'),
            },
        },
    };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const locale = requireLocale(params.locale) as AppLocale;
    const dictionary = getDictionary(locale);

    return (
        <html lang={locale}>
            <body className={classNames(NunitoSans.className, 'layout')}>
                <Analytics />
                <Header locale={locale} labels={dictionary.navigation} />
                <main>{children}</main>
                <Footer text={dictionary.common.rightsReserved} />
            </body>
        </html>
    );
}
