'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

import { Link } from '@/shared/components';
import { MotionWrapper } from '@/shared/components/MotionWrapper/MotionWrapper';
import { AppLocale, buildLocalizedPath, switchLocaleInPath } from '@/shared/i18n/config';

import styles from './Header.module.scss';

interface HeaderProps {
    locale?: AppLocale;
    labels?: {
        home: string;
        blog: string;
        projects: string;
        cv: string;
        contacts: string;
    };
    alternatePathMap?: Partial<Record<AppLocale, string>>;
}

const Header = ({ locale, labels, alternatePathMap }: HeaderProps) => {
    const pathname = usePathname();
    const navLocale = locale || 'ru';
    const navigation = labels || {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        cv: 'cv',
        contacts: 'contacts',
    };
    const nextLocale = navLocale === 'ru' ? 'en' : 'ru';
    const languageTarget =
        alternatePathMap?.[nextLocale] ||
        switchLocaleInPath(pathname || buildLocalizedPath(navLocale), nextLocale);

    return (
        <MotionWrapper>
            <header className={styles.header}>
                <motion.nav>
                    <Link href={locale ? buildLocalizedPath(navLocale) : '/'}>
                        {navigation.home}
                    </Link>
                    <Link href={locale ? buildLocalizedPath(navLocale, '/blog') : '/blog'}>
                        {navigation.blog}
                    </Link>
                    <Link href={locale ? buildLocalizedPath(navLocale, '/projects') : '/projects'}>
                        {navigation.projects}
                    </Link>
                    <Link href={locale ? buildLocalizedPath(navLocale, '/cv') : '/cv'}>
                        {navigation.cv}
                    </Link>
                    <Link href={locale ? buildLocalizedPath(navLocale, '/contacts') : '/contacts'}>
                        {navigation.contacts}
                    </Link>
                    {locale && (
                        <Link href={languageTarget} className={styles.header__toggle}>
                            {navLocale.toUpperCase()} / {nextLocale.toUpperCase()}
                        </Link>
                    )}
                </motion.nav>
            </header>
        </MotionWrapper>
    );
};

export default Header;
