import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { createStrapiParams, instance } from '@/shared/api/api';
import { IMedia, ILocalizedEntity, IStrapiType } from '@/shared/types/api';

export type IAbout = IStrapiType<
    ILocalizedEntity & {
        description: Array<RootNode>;
        media: Array<IMedia>;
        title: string;
    }
>;

export const getAbout = (locale = 'ru') =>
    instance.get<IAbout>('/about', {
        params: createStrapiParams(locale, '*'),
    });
