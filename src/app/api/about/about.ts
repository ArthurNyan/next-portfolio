import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { instance } from '@/shared/api/api';
import { IMedia, IStrapiType } from '@/shared/types/api';

export type IAbout = IStrapiType<{
    id: number;
    description: Array<RootNode>;
    media: Array<IMedia>;
}>;

export const getAbout = () => instance.get<IAbout>(`/about?populate=*`);
