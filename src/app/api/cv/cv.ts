import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { instance } from '@/shared/api/api';
import { IMedia, IStrapiType } from '@/shared/types/api';

export interface Experience {
    id: number;
    name: string;
    about: RootNode[];
    link?: string;
    startDate: string;
    endDate: string;
}

export interface Education {
    id: number;
    documentId: string;
    name: string;
    about: RootNode[];
    link?: string;
    startDate: string;
    endDate: string;
    logo: IMedia;
    degree: string;
}

export type ICV = IStrapiType<{
    id: number;
    documentId: string;
    baseInfo: Array<RootNode>;
    about: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    experiences: Array<Experience>;
    educations: Array<Education>;
}>;

export const getCV = () => instance.get<ICV>('/cv?populate=*');
export const getEducations = () =>
    instance.get<IStrapiType<Array<Education>>>('/educations?populate=*');
