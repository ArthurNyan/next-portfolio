import classNames from 'classnames';
import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

import '../globals.scss';

import { getSocialLinks } from '../api/sociallinks/utlis';
import { getExperience } from '../api/experience/utils';
import { getAllProjects } from '../api/projects/utils';
import { getPortfolioImages } from '../api/images/utils';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.malos.ru/'),
    title: {
        default: 'Aryan blog',
        template: 'Aryan | %s',
    },
    description: 'Athur Nakhatakyan Blog. All projects and more article',
    openGraph: {
        title: 'Arthur Nakhatakyan',
        description: 'Developer, writer, and creator.',
        url: '',
        siteName: 'Arthur Nakhatakyan',
        locale: 'RU',
        type: 'website',
        images: './opengraph-image.tsx',
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
        title: 'Arthur Nakhatakyan',
        card: 'summary_large_image',
        images: './opengraph-image.tsx',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const NunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500'],
});

export default async function RootLayout({ children }: RootLayoutProps) {
    Promise.all([getSocialLinks(), getExperience(), getAllProjects(), getPortfolioImages()]);

    return (
        <html lang="ru">
            <body className={classNames(NunitoSans.className, 'layout')}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
