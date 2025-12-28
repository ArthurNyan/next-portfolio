import { getAllProjects } from '@/app/api/projects/utils';
import { Link, Paragraph } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';
import { formatDate } from '@/shared/lib/formatDate';
import { MotionWrapper } from '@/shared/components/MotionWrapper';

import styles from './projects.module.scss';

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
                {projects.map((project) => (
                    <div key={project.id}>
                        <Link href={`projects/${project.slug}`} fontStyle="dark">
                            <Paragraph>{project.name}</Paragraph>
                            {project.date && <Paragraph>{formatDate(project.date)}</Paragraph>}
                        </Link>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    );
};

export default ProjectsPage;
