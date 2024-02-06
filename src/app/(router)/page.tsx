import { Title, SubTitle, Paragraph, SocialLink, Link } from '@/shared/components';
import GridGallery from '@/shared/components/GridGallery/GridGallery';
import images from '@/shared/data/images.json';

import styles from './MainPage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.main}>
            <Title>home page</Title>
            <SubTitle>hey, I&#39;m Arthur 👋</SubTitle>
            <Paragraph>
                I&#39;m a frontend developer, an optimist, an athlete, and a sleuth of something
                new. I am currently studying at{' '}
                <Link href="https://www.herzen.spb.ru/">Herzen University</Link>, where I learn and
                help to teach people development.
            </Paragraph>
            <GridGallery images={images} />
            <div className={styles.main__social}>
                <SocialLink href="https://t.me/AthurNyan">send message</SocialLink>
                <SocialLink href="mailto:aaryan@aaryan.ru">send email</SocialLink>
            </div>
        </div>
    );
};

export default HomePage;
