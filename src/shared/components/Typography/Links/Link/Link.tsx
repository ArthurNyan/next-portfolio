import NextLink, { LinkProps } from 'next/link';
import classNames from 'classnames';

import styles from './Link.module.scss';
import { ITypography } from '../../model/Typography.model';

const Link = ({
    href,
    children,
    onClick,
    className,
    fontStyle,
    ...props
}: Required<Pick<ITypography, 'href'>> & ITypography & LinkProps) => {
    return (
        <NextLink
            href={href}
            onClick={onClick}
            className={classNames(styles.link, className)}
            {...props}
            data-font={fontStyle}
        >
            {children}
        </NextLink>
    );
};

export default Link;
