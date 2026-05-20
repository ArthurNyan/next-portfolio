'use client';

import PageTitle from '@/widgets/PageTitle';

export default function Error({ error }: { error: Error & { digest?: string } }) {
    return <PageTitle>{error.message}</PageTitle>;
}
