import Image from 'next/image';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { Link, Paragraph } from '@/shared/components';
import { Education } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import { AppLocale } from '@/shared/i18n/config';

import styles from './cv.module.scss';

interface EducationBlockProps
    extends Pick<
        Education,
        'startDate' | 'name' | 'link' | 'endDate' | 'about' | 'logo' | 'degree'
    > {
    locale?: AppLocale;
}

export const EducationBlock = ({
    startDate,
    name,
    link,
    endDate,
    about,
    logo,
    degree,
    locale = 'ru',
}: EducationBlockProps) => (
    <div className={styles.cv__edu}>
        <div className={styles.cv__edu__flex}>
            {logo?.url && (
                <Image
                    src={getImageUrl(logo.url)}
                    alt={name}
                    className={styles.cv__edu__image}
                    width={120}
                    height={120}
                />
            )}
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
                        {dayjs(startDate).locale(locale).year()}-
                        {dayjs(endDate).locale(locale).year()}
                    </Paragraph>
                )}
            </div>
        </div>
    </div>
);
