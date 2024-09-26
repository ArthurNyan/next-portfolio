import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
    dest: 'public',
});

const nextConfig = {
    experimental: {
        // ppr: true,
        useLightningcss: true,
    },
    reactStrictMode: true,
    sassOptions: {
        additionalData: `@import "@/shared/styles/_vars.scss";`,
    },
    rewrites() {
        return [
            {
                source: '/',
                destination: '/users',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
            },
        ],
        minimumCacheTTL: 6000,
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: ['@svgr/webpack'],
            },
        );
        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
};

export default withPWA(nextConfig);
