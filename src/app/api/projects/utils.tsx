import { IStrapiType } from '@/shared/types/api';
import { instance } from '@/shared/api/api';

import { IProject } from '../_model/project';

export interface IProjects extends IStrapiType<Array<IProject>> {}

export const getAllProjects = () => instance.get<IProjects>('/projects');
