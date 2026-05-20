import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { ILocalizedEntity, IMedia } from '@/shared/types/api';

export interface IProject extends ILocalizedEntity {
    slug: number | string;
    name: string;
    about?: Array<RootNode>;
    banner?: IMedia;
    date?: string;
    link?: string;
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    sourceKey?: string;
    techStack?: string[];
    links?: Array<{
        title: string;
        link: string;
    }>;
    legacyId?: string;
}
