import { SocialLink } from '@/shared/components';
import GridGallery from '@/shared/components/GridGallery/GridGallery';
import PageTitle from '@/widgets/PageTitle';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import { MotionWrapper } from '@/shared/components/MotionWrapper';

import styles from './MainPage.module.scss';
import { getAbout } from '../api/about/about';

const HomePage = async () => {
    const {
        data: {
            data: { description, media },
        },
    } = await getAbout();

    return (
        <MotionWrapper className={styles.main}>
            <PageTitle>home page</PageTitle>
            <BlocksRenderer content={description} />
            <GridGallery images={media?.map(({ id, url }) => ({ id, image: getImageUrl(url) }))} />
            <div className={styles.main__social}>
                <SocialLink href="https://t.me/AthurNyan">send message</SocialLink>
                <SocialLink href="mailto:aaryan@aaryan.ru">send email</SocialLink>
            </div>
        </MotionWrapper>
    );
};

export default HomePage;
