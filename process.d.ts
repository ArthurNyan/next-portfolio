declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BD_OPEN_URL: string;
            BD_OPEN_URL_STRAPI: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}
export {};
