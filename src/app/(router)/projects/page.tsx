import classNames from 'classnames';

import { getAllProjects } from '@/app/api/projects/utils';
import { Link, Paragraph } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';
import { formatDate } from '@/shared/lib/formatDate';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { extractTextFromBlocks, truncateText } from '@/shared/lib/contentPreview';

import styles from './projects.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog',
    description: 'Read my thoughts on software development, design, and other.',
};

const ProjectsPage = async () => {
    const {
        data: { data: projects },
    } = await getAllProjects();

    return (
        <MotionWrapper className={styles.projects}>
            <PageTitle>check my projects</PageTitle>
            <div className={styles.projects__map}>
                {projects.map((project, index) => {
                    const preview = truncateText(extractTextFromBlocks(project.about), 176);
                    const tags = project.techStack?.slice(0, 4) || [];
                    const isPrivateCase = project.sourceKey?.startsWith('github-org:');

                    return (
                        <Link
                            href={`projects/${project.slug}`}
                            fontStyle="dark"
                            key={project.id}
                            className={classNames(styles.card, {
                                [styles.cardFeatured]: project.featured && index === 0,
                            })}
                        >
                            <div className={styles.card__top}>
                                <div className={styles.card__badges}>
                                    {project.featured && (
                                        <span className={styles.card__badge}>featured</span>
                                    )}
                                    {isPrivateCase && (
                                        <span className={styles.card__badgeMuted}>
                                            private case
                                        </span>
                                    )}
                                </div>
                                {project.date && (
                                    <span className={styles.card__date}>
                                        {formatDate(project.date)}
                                    </span>
                                )}
                            </div>
                            <div className={styles.card__body}>
                                <h2 className={styles.card__title}>{project.name}</h2>
                                {preview && (
                                    <Paragraph className={styles.card__excerpt}>
                                        {preview}
                                    </Paragraph>
                                )}
                            </div>
                            <div className={styles.card__bottom}>
                                <div className={styles.card__tags}>
                                    {tags.map((tag) => (
                                        <span className={styles.card__tag} key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className={styles.card__cta}>Open project</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </MotionWrapper>
    );
};

export default ProjectsPage;
