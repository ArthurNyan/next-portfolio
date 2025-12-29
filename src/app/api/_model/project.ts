import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

import { IMedia } from '@/shared/types/api';

export interface IProject {
    id: number | string;
    slug: number | string;
    name: string;
    about?: Array<RootNode>;
    banner: IMedia;
    date?: string;
}
