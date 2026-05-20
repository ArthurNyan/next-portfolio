import { createStrapiParams, instance } from '@/shared/api/api';
import { IStrapiType } from '@/shared/types/api';

import { IProject } from '../../_model/project';

export interface IProjectRes extends IStrapiType<IProject> {}

export const getProject = (localeOrId: string | number, id?: string | number) => {
    const locale = id === undefined ? 'ru' : String(localeOrId);
    const projectId = id ?? localeOrId;

    return instance.get<IProjectRes>(`/projects/${projectId}`, {
        params: createStrapiParams(locale, '*'),
    });
};
