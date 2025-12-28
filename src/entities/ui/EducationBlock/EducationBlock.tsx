import dayjs from 'dayjs';

import { Link, Paragraph } from '@/shared/components';
import { Education } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getImageUrl } from '@/shared/lib/getImageUrl';

import styles from './cv.module.scss';

export const EducationBlock = ({
    startDate,
    name,
    link,
    endDate,
    about,
    logo,
    degree,
}: Education) => (
    <div className={styles.cv__edu}>
        <h3>Education</h3>
        <div className={styles.cv__edu__flex}>
            <img src={getImageUrl(logo.url)} alt={name} className={styles.cv__edu__image} />
            <div>
                {link ? (
                    <Link fontStyle="default" href={link}>
                        {name}
                    </Link>
                ) : (
                    <Paragraph>{name}</Paragraph>
                )}
                <Paragraph fontStyle="light">{degree}</Paragraph>
                {about && <BlocksRenderer content={about} />}
                {startDate && endDate && (
                    <Paragraph fontStyle="light">
                        {dayjs(startDate).year()}-{dayjs(endDate).year()}
                    </Paragraph>
                )}
            </div>
        </div>
    </div>
);
