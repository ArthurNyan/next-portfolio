import classNames from 'classnames';

import { getAllProjects } from '@/app/api/projects/utils';
import { Link, Paragraph } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';
import { formatDate } from '@/shared/lib/formatDate';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { buildLocalizedPath } from '@/shared/i18n/config';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';
import { extractTextFromBlocks, truncateText } from '@/shared/lib/contentPreview';

import styles from '../../../(router)/projects/projects.module.scss';

interface ProjectsPageProps {
    params: {
        locale: string;
    };
}

export const dynamic = 'force-dynamic';

const ProjectsPage = async ({ params }: ProjectsPageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    const {
        data: { data: projects },
    } = await getAllProjects(locale);

    return (
        <MotionWrapper className={styles.projects}>
            <PageTitle>{dictionary.projects.title}</PageTitle>
            <div className={styles.projects__map}>
                {projects.map((project, index) => {
                    const preview = truncateText(extractTextFromBlocks(project.about), 176);
                    const tags = project.techStack?.slice(0, 4) || [];
                    const isPrivateCase = project.sourceKey?.startsWith('github-org:');

                    return (
                        <Link
                            href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
                            fontStyle="dark"
                            key={project.id}
                            className={classNames(styles.card, {
                                [styles.cardFeatured]: project.featured && index === 0,
                            })}
                        >
                            <div className={styles.card__top}>
                                <div className={styles.card__badges}>
                                    {project.featured && (
                                        <span className={styles.card__badge}>
                                            {dictionary.common.featured}
                                        </span>
                                    )}
                                    {isPrivateCase && (
                                        <span className={styles.card__badgeMuted}>
                                            {dictionary.common.privateCase}
                                        </span>
                                    )}
                                </div>
                                {project.date && (
                                    <span className={styles.card__date}>
                                        {formatDate(project.date, locale)}
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
                            </div>
                        </Link>
                    );
                })}
            </div>
        </MotionWrapper>
    );
};

export default ProjectsPage;
