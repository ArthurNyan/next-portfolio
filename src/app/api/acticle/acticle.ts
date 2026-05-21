import { createStrapiParams, instance } from '@/shared/api/api';
import { ILocalizedEntity, IStrapiType } from '@/shared/types/api';

export interface IArticle extends ILocalizedEntity {
    slug: string;
    title: string;
    date?: string;
    article: string;
    legacyId?: string;
}

export const getArticles = (locale = 'ru') =>
    instance.get<IStrapiType<Array<IArticle>>>('/articles', {
        params: createStrapiParams(locale, undefined, {
            'sort[0]': 'date:desc',
        }),
    });
export const getArticle = (localeOrId: string | number, id?: string | number) => {
    const locale = id === undefined ? 'ru' : String(localeOrId);
    const articleId = id ?? localeOrId;

    return instance.get<IStrapiType<IArticle>>(`/articles/${articleId}`, {
        params: createStrapiParams(locale, '*'),
    });
};
