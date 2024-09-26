import axios from 'axios';

export const API_URL = process.env.BD_OPEN_URL ?? '/';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
