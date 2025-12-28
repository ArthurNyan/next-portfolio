import { Paragraph } from '@/shared/components';
import ExperienceItem from '@/widgets/ExperienceItem/ExperienceItem';
import { getCV, getEducations } from '@/app/api/cv/cv';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { EducationBlock } from '@/entities/ui/EducationBlock/EducationBlock';
import { MotionWrapper } from '@/shared/components/MotionWrapper';

import styles from './cv.module.scss';

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
                        {experience.map(({ id, link, startDate, endDate, about, name }) => (
                            <ExperienceItem
                                key={id}
                                startDate={startDate}
                                endDate={endDate}
                                name={name}
                                link={link}
                                about={about}
                                id={id}
                            />
                        ))}
                    </div>
                )}
                {educations.length > 0 &&
                    educations.map((education) => (
                        <EducationBlock {...education} key={education.id} />
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
