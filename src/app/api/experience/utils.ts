import { cache } from 'react';

import { IExperience } from '../_model/experience';

// eslint-disable-next-line import/prefer-default-export
export const getExperience = cache(async () => {
    const experience = await fetch(`${process.env.BD_OPEN_URL}/experience`, {
        next: { revalidate: 1000 },
    });

    return experience.json() as unknown as IExperience[];
});
