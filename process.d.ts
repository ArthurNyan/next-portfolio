declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BD_OPEN_URL_STRAPI: string;
            LEGACY_API_BASE_URL?: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}
export {};
