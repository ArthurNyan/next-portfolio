import { Paragraph } from '@/shared/components';
import ExperienceItem from '@/widgets/ExperienceItem/ExperienceItem';
import { getCV, getEducations } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { EducationBlock } from '@/entities/ui/EducationBlock/EducationBlock';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

import styles from '../../../(router)/cv/cv.module.scss';

interface CvPageProps {
    params: {
        locale: string;
    };
}

export const dynamic = 'force-dynamic';

const CvPage = async ({ params }: CvPageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    const [
        {
            data: { data: cv },
        },
        {
            data: { data: educations },
        },
    ] = await Promise.all([getCV(locale), getEducations(locale)]);

    const experience = cv.experiences;

    return (
        <MotionWrapper>
            <div className={styles.cv}>
                <BlocksRenderer content={cv?.baseInfo} />
                {experience.length > 0 && (
                    <div className={styles.cv__experience}>
                        <h3>{dictionary.cv.experience}</h3>
                        {experience.map((item) => (
                            <ExperienceItem
                                key={item.id}
                                {...item}
                                locale={locale}
                                presentLabel={dictionary.common.present}
                            />
                        ))}
                    </div>
                )}
                {educations.length > 0 && (
                    <div>
                        <h3>{dictionary.cv.education}</h3>
                        {educations.map((education) => (
                            <EducationBlock {...education} key={education.id} locale={locale} />
                        ))}
                    </div>
                )}
                {cv?.about && (
                    <div>
                        <h3>{dictionary.cv.aboutMe}</h3>
                        <Paragraph>{cv?.about}</Paragraph>
                    </div>
                )}
            </div>
        </MotionWrapper>
    );
};

export default CvPage;
