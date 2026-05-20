import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.BD_OPEN_URL_STRAPI}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createStrapiParams = (
    locale?: string,
    populate?: string | string[],
    extra?: Record<string, string | number | boolean | undefined>,
) => {
    const params: Record<string, string | number | boolean> = {};

    if (locale) {
        params.locale = locale;
    }

    if (Array.isArray(populate)) {
        populate.forEach((value, index) => {
            params[`populate[${index}]`] = value;
        });
    } else if (populate) {
        params.populate = populate;
    }

    Object.entries(extra || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            params[key] = value;
        }
    });

    return params;
};
