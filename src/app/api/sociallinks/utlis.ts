import { createStrapiParams, instance } from '@/shared/api/api';

import { ISocialLinksProps } from '../_model/socialLinksProps';

export const getSocialLinks = (locale = 'ru') =>
    instance.get<{ data: ISocialLinksProps[] }>('/social-links', {
        params: createStrapiParams(locale),
    });
