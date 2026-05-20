import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { createStrapiParams, instance } from '@/shared/api/api';
import { IMedia, ILocalizedEntity, IStrapiType } from '@/shared/types/api';

export interface Experience extends ILocalizedEntity {
    name: string;
    about: RootNode[];
    link?: string;
    startDate?: string;
    endDate?: string;
    legacyId?: string;
}

export interface Education extends ILocalizedEntity {
    name: string;
    about: RootNode[];
    link?: string;
    startDate?: string;
    endDate?: string;
    logo: IMedia;
    degree: string;
    legacyId?: string;
}

export type ICV = IStrapiType<
    ILocalizedEntity & {
        baseInfo: Array<RootNode>;
        about: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        experiences: Array<Experience>;
        educations: Array<Education>;
    }
>;

export const getCV = (locale = 'ru') =>
    instance.get<ICV>('/cv', {
        params: createStrapiParams(locale, '*'),
    });
export const getEducations = (locale = 'ru') =>
    instance.get<IStrapiType<Array<Education>>>('/educations', {
        params: createStrapiParams(locale, '*'),
    });
