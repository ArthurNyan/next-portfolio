import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getProject } from '@/app/api/projects/[id]/utils';
import { Paragraph, SocialLink } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import PageTitle from '@/widgets/PageTitle';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';

import styles from './project.module.scss';

export const dynamic = 'force-dynamic';

export interface ProjectPageProps {
    params: {
        id: string | number;
    };
}

// export async function generateMetadata({ params: { id } }: ProjectPageProps): Promise<Metadata> {
//     const project = await getProject(id);
//     const imageUrl = project.image ? getImageUrl(project.image) : '';

//     return {
//         title: project.name,
//         description: project.description,
//         openGraph: {
//             title: project.name,
//             description: project.description,
//             type: 'article',
//             url: project.link,
//             images: imageUrl
//                 ? [
//                     {
//                         url: imageUrl,
//                     },
//                 ]
//                 : [],
//             publishedTime: formatDate(project.date),
//             modifiedTime: formatDate(project.updateAt || project.date),
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: project.name,
//             description: project.description,
//             images: imageUrl ? [imageUrl] : [],
//         },
//     };
// }

const ProjectPage = async ({ params: { id } }: ProjectPageProps) => {
    const {
        data: {
            data: { banner, date, name, about, techStack, demoUrl, githubUrl, link, links },
        },
    } = await getProject(id);

    if (!id) {
        notFound();
    }

    const primaryLinks = [demoUrl, githubUrl, link].filter(Boolean);
    const secondaryLinks = links?.filter((item) => !primaryLinks.includes(item.link)) || [];

    return (
        <MotionWrapper className={styles.project}>
            <PageTitle contentSlot={date && <Paragraph>{formatDate(date)}</Paragraph>}>
                {name}
            </PageTitle>
            {banner && (
                <div className={styles.project__image}>
                    <Image
                        src={getImageUrl(banner.url)}
                        alt={banner.caption}
                        width={672}
                        height={430}
                        priority
                    />
                </div>
            )}
            {techStack && techStack.length > 0 && (
                <div className={styles.project__meta}>
                    <Paragraph>Stack</Paragraph>
                    <div className={styles.project__tags}>
                        {techStack.map((item) => (
                            <span className={styles.project__tag} key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {about && <BlocksRenderer content={about} />}
            {demoUrl && <SocialLink href={demoUrl}>Open demo</SocialLink>}
            {githubUrl && <SocialLink href={githubUrl}>Open GitHub</SocialLink>}
            {!demoUrl && !githubUrl && link && <SocialLink href={link}>Open</SocialLink>}
            {secondaryLinks.map((item) => (
                <SocialLink href={item.link} key={item.link}>
                    {item.title}
                </SocialLink>
            ))}
        </MotionWrapper>
    );
};

export default ProjectPage;
