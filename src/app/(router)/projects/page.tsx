import { getAllProjects } from '@/app/api/projects/utils';
import { Link, Paragraph } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';
import { formatDate } from '@/shared/lib/formatDate';

import styles from './projects.module.scss';

export const metadata = {
    title: 'Blog',
    description: 'Read my thoughts on software development, design, and other.',
};

const ProjectsPage = async () => {
    const projects = await getAllProjects();

    return (
        <div className={styles.projects}>
            <PageTitle>check my projects</PageTitle>
            <div className={styles.projects__map}>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Link href={`projects/${project.id}`} fontStyle="dark">
                            <Paragraph>{project.name}</Paragraph>
                            <Paragraph>{formatDate(project.date)}</Paragraph>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
