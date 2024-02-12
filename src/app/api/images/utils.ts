import { cache } from 'react';

import { IImage } from '../_model/image';

// eslint-disable-next-line import/prefer-default-export
export const getPortfolioImages = cache(async () => {
    const images = await fetch(`${process.env.BD_OPEN_URL}/images`, {
        next: { revalidate: 1000 },
    });

    return images.json() as unknown as IImage[];
});
