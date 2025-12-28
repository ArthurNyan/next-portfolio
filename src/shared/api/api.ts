import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.BD_OPEN_URL_STRAPI}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});
