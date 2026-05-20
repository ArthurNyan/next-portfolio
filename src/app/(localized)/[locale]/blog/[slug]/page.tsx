import { notFound } from 'next/navigation';

import { Paragraph } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import PageTitle from '@/widgets/PageTitle';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { MarkdownRender } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getArticle } from '@/app/api/acticle/acticle';
import { requireLocale } from '@/shared/i18n/server';

import styles from '../../../../(router)/blog/[id]/project.module.scss';

interface BlogDetailPageProps {
    params: {
        locale: string;
        slug: string;
    };
}

export const dynamic = 'force-dynamic';

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
    const locale = requireLocale(params.locale);
    let article;

    try {
        const response = await getArticle(locale, params.slug);
        article = response.data.data;
    } catch {
        notFound();
    }

    if (!article) {
        notFound();
    }

    return (
        <MotionWrapper className={styles.project}>
            <PageTitle
                contentSlot={
                    article.date && <Paragraph>{formatDate(article.date, locale)}</Paragraph>
                }
            >
                {article.title}
            </PageTitle>
            {article.article && <MarkdownRender content={article.article} />}
        </MotionWrapper>
    );
};

export default BlogDetailPage;
