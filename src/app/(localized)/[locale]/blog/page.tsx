import classNames from 'classnames';

import { MotionWrapper } from '@/shared/components/MotionWrapper';
import PageTitle from '@/widgets/PageTitle';
import { getArticles } from '@/app/api/acticle/acticle';
import { Link, Paragraph } from '@/shared/components';
import { formatDate } from '@/shared/lib/formatDate';
import { buildLocalizedPath } from '@/shared/i18n/config';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';
import { estimateReadingMinutes, stripMarkdown, truncateText } from '@/shared/lib/contentPreview';

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
        <MotionWrapper className={styles.projects}>
            <PageTitle>{dictionary.blog.title}</PageTitle>
            <div className={styles.projects__map}>
                {articles.map((article, index) => {
                    const plainText = stripMarkdown(article.article);
                    const preview = truncateText(plainText, index === 0 ? 220 : 180);
                    const readingTime = estimateReadingMinutes(plainText);

                    return (
                        <Link
                            href={buildLocalizedPath(locale, `/blog/${article.slug}`)}
                            fontStyle="dark"
                            key={article.id}
                            className={classNames(styles.card, {
                                [styles.cardFeatured]: index === 0,
                            })}
                        >
                            <div className={styles.card__top}>
                                <div className={styles.card__badges}>
                                    {index === 0 && (
                                        <span className={styles.card__badge}>
                                            {dictionary.common.featured}
                                        </span>
                                    )}
                                </div>
                                <div className={styles.card__meta}>
                                    {article.date && (
                                        <span className={styles.card__date}>
                                            {formatDate(article.date, locale)}
                                        </span>
                                    )}
                                    <span className={styles.card__separator} />
                                    <span className={styles.card__date}>
                                        {readingTime} {dictionary.common.minuteShort}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.card__body}>
                                <h2 className={styles.card__title}>{article.title}</h2>
                                {preview && (
                                    <Paragraph className={styles.card__excerpt}>
                                        {preview}
                                    </Paragraph>
                                )}
                            </div>
                            <div className={styles.card__bottom}>
                                <span className={styles.card__cta}>
                                    {dictionary.common.readArticle}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </MotionWrapper>
    );
};

export default BlogPage;
