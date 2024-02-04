import NextLink, { LinkProps } from 'next/link';

import styles from './Link.module.scss';
import { ITypography } from '../../model/Typography.model';

const Link = ({
    href,
    children,
    onClick,
    ...props
}: Required<Pick<ITypography, 'href'>> & ITypography & LinkProps) => {
    return (
        <NextLink href={href} onClick={onClick} className={styles.link} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;
