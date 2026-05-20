'use client';

import PageTitle from '@/widgets/PageTitle';
import { getDictionary } from '@/shared/i18n/dictionary';
import { defaultLocale } from '@/shared/i18n/config';

export default function NotFound() {
    return <PageTitle>{getDictionary(defaultLocale).common.notFound}</PageTitle>;
}
