import { getAllProjects } from '@/app/api/projects/utils';
import { Link, Paragraph } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';
import { formatDate } from '@/shared/lib/formatDate';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { buildLocalizedPath } from '@/shared/i18n/config';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

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
                {projects.map((project) => (
                    <div key={project.id}>
                        <Link
                            href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
                            fontStyle="dark"
                        >
                            <Paragraph>{project.name}</Paragraph>
                            {project.date && (
                                <Paragraph>{formatDate(project.date, locale)}</Paragraph>
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    );
};

export default ProjectsPage;
