import { cache } from 'react';
import { notFound } from 'next/navigation';

import { IProject } from '../../_model/project';

// eslint-disable-next-line import/prefer-default-export
export const getProject = cache(async (id: number | string) => {
    const project = await fetch(`${process.env.BD_OPEN_URL}/projects/${id}`, {
        next: { revalidate: 300 },
    });

    if (project.status === 404) {
        notFound();
    }

    return project.json() as unknown as IProject;
});
