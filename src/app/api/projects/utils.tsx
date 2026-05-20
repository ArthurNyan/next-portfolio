import { IStrapiType } from '@/shared/types/api';
import { createStrapiParams, instance } from '@/shared/api/api';

import { IProject } from '../_model/project';

export interface IProjects extends IStrapiType<Array<IProject>> {}

export const getAllProjects = (locale = 'ru') =>
    instance.get<IProjects>('/projects', {
        params: createStrapiParams(locale, undefined, {
            'sort[0]': 'featured:desc',
            'sort[1]': 'date:desc',
        }),
    });
