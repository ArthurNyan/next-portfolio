'use client';

import { Title } from '@/shared/components';

export default function Error({ error }: { error: Error & { digest?: string } }) {
    return <Title>{error.message}</Title>;
}
