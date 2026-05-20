import { MotionWrapper } from '@/shared/components/MotionWrapper';
import PageTitle from '@/widgets/PageTitle';
import { getArticles } from '@/app/api/acticle/acticle';
import { Link, Paragraph } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import { buildLocalizedPath } from '@/shared/i18n/config';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

import styles from '../../../(router)/blog/projects.module.scss';

interface BlogPageProps {
    params: {
        locale: string;
    };
}

export const dynamic = 'force-dynamic';

const BlogPage = async ({ params }: BlogPageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    const {
        data: { data: articles },
    } = await getArticles(locale);

    return (
        <MotionWrapper>
            <PageTitle>{dictionary.blog.title}</PageTitle>
            <div className={styles.projects__map}>
                {articles.map((article) => (
                    <div key={article.id}>
                        <Link
                            href={buildLocalizedPath(locale, `/blog/${article.slug}`)}
                            fontStyle="dark"
                        >
                            <Paragraph>{article.title}</Paragraph>
                            {article.date && (
                                <Paragraph>{formatDate(article.date, locale)}</Paragraph>
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    );
};

export default BlogPage;
