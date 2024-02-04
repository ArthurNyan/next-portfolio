import { Link } from '@/shared/components';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">home</Link>
                <Link href="/blog">blog</Link>
                <Link href="/projects">projects</Link>
                <Link href="/cv">cv</Link>
                <Link href="/contacts">contacts</Link>
            </nav>
        </header>
    );
};

export default Header;
