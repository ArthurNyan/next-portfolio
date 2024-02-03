import classNames from 'classnames';
import { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import { Open_Sans } from 'next/font/google';

import themeConfig from '../theme';

import './globals.scss';

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

const openSans = Open_Sans({
    subsets: ['latin'],
});

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <ConfigProvider theme={themeConfig}>
                <body className={classNames(openSans.className, 'layout')}>
                    <main>{children}</main>
                </body>
            </ConfigProvider>
        </html>
    );
}
