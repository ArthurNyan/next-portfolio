import { instance } from '@/shared/api/api';
import { IStrapiType } from '@/shared/types/api';

import { IProject } from '../../_model/project';

export interface IProjectRes extends IStrapiType<IProject> {}

export const getProject = (id: string | number) =>
    instance.get<IProjectRes>(`/projects/${id}?populate=*`);
