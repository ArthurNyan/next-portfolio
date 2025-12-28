import { notFound } from 'next/navigation';

import { Paragraph } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import PageTitle from '@/widgets/PageTitle';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { MarkdownRender } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getArticle, getArticles } from '@/app/api/acticle/acticle';

import styles from './project.module.scss';

export const generateStaticParams = async () => {
    const {
        data: { data: projects },
    } = await getArticles();

    return projects.map(({ slug }) => ({ id: slug.toString() }));
};

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
            data: { article, title, date },
        },
    } = await getArticle(id);

    if (!id) {
        notFound();
    }

    return (
        <MotionWrapper className={styles.project}>
            <PageTitle contentSlot={date && <Paragraph>{formatDate(date)}</Paragraph>}>
                {title}
            </PageTitle>
            {/* {banner && (
                <div className={styles.project__image}>
                    <Image src={getImageUrl(banner.url)} alt={banner.caption} width={672} height={430} priority />
                </div>
            )} */}
            {/* {article && <BlocksRenderer content={[article]} />} */}
            {article && <MarkdownRender content={article} />}
            {/* <Paragraph>{project.description}</Paragraph> */}
            {/* {project.links && <Paragraph>Ссылки</Paragraph>}
            {project.links?.map(({ link, title }) => (
                <SocialLink href={link || ''} key={link}>
                    {title}
                </SocialLink>
            ))} */}
            {/* {date && (
                <SocialLink href={project.link || ''}>Updated at {formatDate(date)}</SocialLink>
            )} */}
        </MotionWrapper>
    );
};

export default ProjectPage;
