import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: '#f5f5f5',
                    color: '#404040',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Aryan | Blog
            </div>
        ),
        {
            ...size,
        },
    );
}
