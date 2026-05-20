import { SocialLink } from '@/shared/components';
import GridGallery from '@/shared/components/GridGallery/GridGallery';
import PageTitle from '@/widgets/PageTitle';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

import styles from '../../(router)/MainPage.module.scss';
import { getAbout } from '../../api/about/about';
import { getSocialLinks } from '../../api/sociallinks/utlis';

interface HomePageProps {
    params: {
        locale: string;
    };
}

export const dynamic = 'force-dynamic';

const HomePage = async ({ params }: HomePageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    const [
        {
            data: {
                data: { description, media },
            },
        },
        {
            data: { data: socialLinks },
        },
    ] = await Promise.all([getAbout(locale), getSocialLinks(locale)]);

    const messageLink =
        socialLinks.find((item) => item.type === 'profile' && item.url.includes('t.me')) ||
        socialLinks.find((item) => item.type === 'profile');
    const emailLink = socialLinks.find((item) => item.type === 'mail');

    return (
        <MotionWrapper className={styles.main}>
            <PageTitle>{dictionary.home.title}</PageTitle>
            <BlocksRenderer content={description} />
            <GridGallery images={media?.map(({ id, url }) => ({ id, image: getImageUrl(url) }))} />
            <div className={styles.main__social}>
                {messageLink && (
                    <SocialLink href={messageLink.url}>{dictionary.home.sendMessage}</SocialLink>
                )}
                {emailLink && (
                    <SocialLink href={emailLink.url}>{dictionary.home.sendEmail}</SocialLink>
                )}
            </div>
        </MotionWrapper>
    );
};

export default HomePage;
