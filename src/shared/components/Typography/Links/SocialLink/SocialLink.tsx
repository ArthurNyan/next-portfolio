import SocialArrow from '@/shared/components/Icons/SocialArrow/SocialArrow';

import { ITypography } from '../../model/Typography.model';
import styles from './SocialLink.module.scss';

const SocialLink = ({
    href,
    children,
    onClick,
}: Required<Pick<ITypography, 'href'>> & ITypography) => {
    return (
        <a href={href} onClick={onClick} className={styles.link} target="_blank">
            <SocialArrow width={16} />
            {children}
        </a>
    );
};

export default SocialLink;
