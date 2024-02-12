import { cache } from 'react';

import { IProject } from '../_model/project';

// eslint-disable-next-line import/prefer-default-export
export const getAllProjects = cache(async () => {
    const projects = await fetch(`${process.env.BD_OPEN_URL}/projects`, {
        next: { revalidate: 300 },
    });
    return projects.json() as unknown as IProject[];
});
