import { createStrapiParams, instance } from '@/shared/api/api';
import { IStrapiType } from '@/shared/types/api';

import { Experience } from '../cv/cv';

export const getExperience = (locale = 'ru') =>
    instance.get<IStrapiType<Experience[]>>('/experiences', {
        params: createStrapiParams(locale, '*'),
    });
