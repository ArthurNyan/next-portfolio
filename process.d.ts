declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BD_OPEN_URL: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}
export {};
