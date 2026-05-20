import { ImageResponse } from 'next/og';

import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

export const runtime = 'edge';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function Image({ params }: { params: { locale: string } }) {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 86,
                    background: '#f5f5f5',
                    color: '#404040',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '48px',
                    textAlign: 'center',
                }}
            >
                <div>{dictionary.metadata.siteName}</div>
                <div style={{ fontSize: 48, marginTop: 24 }}>
                    {dictionary.metadata.defaultPageTitle}
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
