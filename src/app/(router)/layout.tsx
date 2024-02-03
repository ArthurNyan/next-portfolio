import classNames from 'classnames';
import { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Header from '@/widgets/Header/Header';

import '../globals.scss';

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
    return (
        <html lang="ru">
            <body className={classNames(NunitoSans.className, 'layout')}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
