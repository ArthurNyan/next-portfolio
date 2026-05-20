import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { Link, Paragraph } from '@/shared/components';
import SmallTitle from '@/shared/components/Typography/SmallTitle/SmallTitle';
import { Experience } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { AppLocale } from '@/shared/i18n/config';

import styles from './ExperienceItem.module.scss';

interface ExperienceItemProps
    extends Pick<Experience, 'link' | 'startDate' | 'endDate' | 'name' | 'about'> {
    locale?: AppLocale;
    presentLabel?: string;
}

const ExperienceItem = ({
    link,
    startDate,
    endDate,
    name,
    about,
    locale = 'ru',
    presentLabel = 'present',
}: ExperienceItemProps) => {
    const dateLabel = startDate
        ? `${dayjs(startDate).locale(locale).format('MMMM YYYY')} - ${
              endDate ? dayjs(endDate).locale(locale).format('MMMM YYYY') : presentLabel
          }`
        : null;

    return (
        <div className={styles.experienceItem}>
            <div className={styles.experienceItem__date}>
                {dateLabel && <Paragraph>{dateLabel}</Paragraph>}
            </div>
            <div className={styles.experienceItem__duties}>
                <SmallTitle>{link ? <Link href={link}>{name}</Link> : name}</SmallTitle>
                <BlocksRenderer content={about} />
            </div>
        </div>
    );
};

export default ExperienceItem;
