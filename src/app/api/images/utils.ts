import { getAbout } from '../about/about';

export const getPortfolioImages = async (locale = 'ru') => {
    const {
        data: {
            data: { media },
        },
    } = await getAbout(locale);

    return media.map(({ id, url }) => ({
        id,
        image: url,
    }));
};
