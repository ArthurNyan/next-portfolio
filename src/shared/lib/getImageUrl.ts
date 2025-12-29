/**
 * Преобразует относительный путь изображения из Strapi в полный URL
 * @param url - Относительный путь (например, /uploads/photo.jpg) или полный URL
 * @returns Полный URL для использования в Next.js Image компоненте
 */
export const getImageUrl = (url: string): string => {
    // Если URL уже полный (начинается с http:// или https://), возвращаем как есть
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }

    // Если URL относительный, добавляем базовый URL Strapi
    const baseUrl = process.env.BD_OPEN_URL_STRAPI || 'http://localhost:1337';
    return `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
};
