import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getProject } from '@/app/api/projects/[id]/utils';
import { Paragraph, SocialLink } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import PageTitle from '@/widgets/PageTitle';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

import styles from '../../../../(router)/projects/[id]/project.module.scss';

interface ProjectDetailPageProps {
    params: {
        locale: string;
        slug: string;
    };
}

export const dynamic = 'force-dynamic';

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    let project;

    try {
        const response = await getProject(locale, params.slug);
        project = response.data.data;
    } catch {
        notFound();
    }

    if (!project) {
        notFound();
    }

    const primaryLinks = [project.demoUrl, project.githubUrl, project.link].filter(Boolean);
    const secondaryLinks = project.links?.filter((item) => !primaryLinks.includes(item.link)) || [];

    return (
        <MotionWrapper className={styles.project}>
            <PageTitle
                contentSlot={
                    project.date && <Paragraph>{formatDate(project.date, locale)}</Paragraph>
                }
            >
                {project.name}
            </PageTitle>
            {project.banner && (
                <div className={styles.project__image}>
                    <Image
                        src={getImageUrl(project.banner.url)}
                        alt={project.banner.caption || project.name}
                        width={672}
                        height={430}
                        priority
                    />
                </div>
            )}
            {project.techStack && project.techStack.length > 0 && (
                <div className={styles.project__meta}>
                    <Paragraph>{dictionary.common.techStack}</Paragraph>
                    <div className={styles.project__tags}>
                        {project.techStack.map((item) => (
                            <span className={styles.project__tag} key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {project.about && <BlocksRenderer content={project.about} />}
            {project.demoUrl && (
                <SocialLink href={project.demoUrl}>{dictionary.common.openDemo}</SocialLink>
            )}
            {project.githubUrl && (
                <SocialLink href={project.githubUrl}>{dictionary.common.openGithub}</SocialLink>
            )}
            {!project.demoUrl && !project.githubUrl && project.link && (
                <SocialLink href={project.link}>{dictionary.common.openResource}</SocialLink>
            )}
            {secondaryLinks.map((item) => (
                <SocialLink href={item.link} key={item.link}>
                    {item.title}
                </SocialLink>
            ))}
        </MotionWrapper>
    );
};

export default ProjectDetailPage;
