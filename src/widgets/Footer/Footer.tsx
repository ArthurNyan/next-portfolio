import { Copyright } from '@/shared/components';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Copyright text="all rights reserved" />
        </footer>
    );
};

export default Footer;
