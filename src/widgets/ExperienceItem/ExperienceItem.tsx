import dayjs from 'dayjs';

import { Link, Paragraph } from '@/shared/components';
import SmallTitle from '@/shared/components/Typography/SmallTitle/SmallTitle';
import { Experience } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';

import styles from './ExperienceItem.module.scss';

const ExperienceItem = ({ link, startDate, endDate, name, about }: Experience) => {
    return (
        <div className={styles.experienceItem}>
            <div className={styles.experienceItem__date}>
                <Paragraph>{`${dayjs(startDate).format('MMMM YYYY')}-${dayjs(endDate).format('MMMM YYYY')}`}</Paragraph>
            </div>
            <div className={styles.experienceItem__duties}>
                <SmallTitle>{link ? <Link href={link}>{name}</Link> : name}</SmallTitle>
                <BlocksRenderer content={about} />
            </div>
        </div>
    );
};

export default ExperienceItem;
