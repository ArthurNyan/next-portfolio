import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

import { getProject } from '@/app/api/projects/[id]/utils';
import { getAllProjects } from '@/app/api/projects/utils';
import { Paragraph, SocialLink } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import PageTitle from '@/widgets/PageTitle';

import styles from './project.module.scss';

export const generateStaticParams = async () => {
    const projects = await getAllProjects();

    return projects.map(({ id }) => ({ id: id.toString() }));
};

export interface ProjectPageProps {
    params: {
        id: string | number;
    };
}

export async function generateMetadata({ params: { id } }: ProjectPageProps): Promise<Metadata> {
    const project = await getProject(id);
    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            type: 'article',
            url: project.link,
            images: [
                {
                    url: project.image,
                    protocol: 'https',
                    hostname: 'i.postimg.cc',
                },
            ],
            publishedTime: formatDate(project.date),
            modifiedTime: formatDate(project.updateAt || project.date),
        },
        twitter: {
            card: 'summary_large_image',
            title: project.name,
            description: project.description,
            images: [project.image],
        },
    };
}

const ProjectPage = async ({ params: { id } }: ProjectPageProps) => {
    const { image, updateAt, ...project } = await getProject(id);

    if (!project.id) {
        notFound();
    }

    return (
        <div className={styles.project}>
            <PageTitle contentSlot={<Paragraph>{formatDate(project.date)}</Paragraph>}>
                {project.name}
            </PageTitle>
            {image && (
                <div className={styles.project__image}>
                    <Image src={image} alt={project.name} width={672} height={430} priority />
                </div>
            )}
            <Paragraph>{project.description}</Paragraph>
            {updateAt && (
                <SocialLink href={project.link || ''}>Updated at {formatDate(updateAt)}</SocialLink>
            )}
        </div>
    );
};

export default ProjectPage;
