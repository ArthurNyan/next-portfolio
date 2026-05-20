import { Paragraph } from '@/shared/components';
import ExperienceItem from '@/widgets/ExperienceItem/ExperienceItem';
import { getCV, getEducations } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { EducationBlock } from '@/entities/ui/EducationBlock/EducationBlock';
import { MotionWrapper } from '@/shared/components/MotionWrapper';

import styles from './cv.module.scss';

export const dynamic = 'force-dynamic';

const BlogPage = async () => {
    const {
        data: { data: cv },
    } = await getCV();
    const {
        data: { data: educations },
    } = await getEducations();

    const experience = cv.experiences;

    return (
        <MotionWrapper>
            <div className={styles.cv}>
                <BlocksRenderer content={cv?.baseInfo} />
                {experience.length > 0 && (
                    <div className={styles.cv__experience}>
                        <h3>Experience</h3>
                        {experience.map((item) => (
                            <ExperienceItem
                                key={item.id}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                name={item.name}
                                link={item.link}
                                about={item.about}
                            />
                        ))}
                    </div>
                )}
                {educations.length > 0 &&
                    educations.map((education) => (
                        <EducationBlock
                            key={education.id}
                            startDate={education.startDate}
                            endDate={education.endDate}
                            name={education.name}
                            link={education.link}
                            about={education.about}
                            logo={education.logo}
                            degree={education.degree}
                        />
                    ))}
                {cv?.about && (
                    <div>
                        <h3>About me</h3>
                        <Paragraph>{cv?.about}</Paragraph>
                    </div>
                )}
            </div>
        </MotionWrapper>
    );
};

export default BlogPage;
