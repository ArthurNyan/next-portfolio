import { notFound } from 'next/navigation';

import { AppLocale, isLocale } from './config';

export const requireLocale = (value: string): AppLocale => {
    if (!isLocale(value)) {
        notFound();
    }

    return value;
};
