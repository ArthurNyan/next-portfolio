import { cache } from 'react';

import { ISocialLinks } from '../_model/socialLinks.model';

// eslint-disable-next-line import/prefer-default-export
export const getSocialLinks = cache(async () => {
    const socialLinks = await fetch(`${process.env.BD_OPEN_URL}/social-links`, {
        next: { revalidate: 1000 },
    });
    const data = socialLinks.json();
    return data as unknown as ISocialLinks[];
});
