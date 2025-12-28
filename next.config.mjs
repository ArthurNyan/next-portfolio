const nextConfig = {
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
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'hopeful-hero-a31b9d5638.media.strapiapp.com',
                pathname: '/**',
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

export default nextConfig;
