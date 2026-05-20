import { Copyright } from '@/shared/components';

import styles from './Footer.module.scss';

const Footer = ({ text = 'all rights reserved' }: { text?: string }) => {
    return (
        <footer className={styles.footer}>
            <Copyright text={text} />
        </footer>
    );
};

export default Footer;
