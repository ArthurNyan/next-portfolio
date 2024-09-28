import { Link } from '@/shared/components';

import styles from './Header.module.scss';

const Header = () => {
    const links = [
        { href: '/', label: 'home' },
        { href: '/blog', label: 'blog' },
        { href: '/projects', label: 'projects' },
        { href: '/cv', label: 'cv' },
        { href: '/contacts', label: 'contacts' },
        { href: '/pwa', label: 'pwa' },
    ];

    return (
        <header className={styles.header}>
            <nav>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
