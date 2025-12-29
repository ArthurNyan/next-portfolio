import { instance } from '@/shared/api/api';
import { IStrapiType } from '@/shared/types/api';

export interface IArticle {
    id: number;
    slug: string;
    title: string;
    date?: string;
    article: string;
}

export const getArticles = () => instance.get<IStrapiType<Array<IArticle>>>('/articles');
export const getArticle = (id: string | number) =>
    instance.get<IStrapiType<IArticle>>(`/articles/${id}?populate=*`);
