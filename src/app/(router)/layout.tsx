import classNames from 'classnames';
import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

import '../globals.scss';

import { getSocialLinks } from '../api/sociallinks/utlis';
import { getExperience } from '../api/experience/utils';

export const metadata: Metadata = {
    title: {
        default: 'Aryan blog',
        template: '%s | Aryan ',
    },
    description: 'Athur Nakhatakyan Blog. All projects and more article',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const NunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500'],
});

export default async function RootLayout({ children }: RootLayoutProps) {
    getSocialLinks();
    getExperience();
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
