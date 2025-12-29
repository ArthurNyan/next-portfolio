'use client';

import { motion } from 'motion/react';

import { Link } from '@/shared/components';
import { MotionWrapper } from '@/shared/components/MotionWrapper/MotionWrapper';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <MotionWrapper>
            <header className={styles.header}>
                <motion.nav>
                    <Link href="/">home</Link>
                    <Link href="/blog">blog</Link>
                    <Link href="/projects">projects</Link>
                    <Link href="/cv">cv</Link>
                    <Link href="/contacts">contacts</Link>
                </motion.nav>
            </header>
        </MotionWrapper>
    );
};

export default Header;
