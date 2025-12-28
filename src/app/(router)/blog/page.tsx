import { MotionWrapper } from '@/shared/components/MotionWrapper';
import PageTitle from '@/widgets/PageTitle';
import { getArticles } from '@/app/api/acticle/acticle';
import { Link, Paragraph } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';

import styles from './projects.module.scss';

const BlogPage = async () => {
    const {
        data: { data: projects },
    } = await getArticles();

    return (
        <MotionWrapper>
            <PageTitle>follow the blog</PageTitle>
            <div className={styles.projects__map}>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Link href={`blog/${project.slug}`} fontStyle="dark">
                            <Paragraph>{project.title}</Paragraph>
                            {project.date && <Paragraph>{formatDate(project.date)}</Paragraph>}
                        </Link>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    );
};

export default BlogPage;
