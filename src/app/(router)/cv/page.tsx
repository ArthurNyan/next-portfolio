import { Link, Paragraph, SubTitle, HerzenLogo } from '@/shared/components';
import ExperienceItem from '@/widgets/ExperienceItem/ExperienceItem';
import { getExperience } from '@/app/api/experience/utils';
import PageTitle from '@/widgets/PageTitle';

import styles from './cv.module.scss';

const BlogPage = async () => {
    const experience = await getExperience();

    return (
        <div className={styles.cv}>
            <PageTitle>frontend developer</PageTitle>
            <div className={styles.cv__title}>
                <SubTitle>Arthur Nakhatakyan — St. Petersburg, Russia</SubTitle>
                <Paragraph>TypeScript, Next, Redux, React Query, Webpack, Docker</Paragraph>
            </div>
            <div>
                <h3>Languages</h3>
                <Paragraph>Russian — native, English — B1, Armenian — spoken.</Paragraph>
            </div>
            <div>
                <h3>Skills</h3>
                <Paragraph>
                    TypeScript, JavaScript, Next/React, Redux (toolkit, saga, thank, persist), React
                    Query, Axios, Webpack, Docker, Vite, EsLint, i18n, Jest, Mocha-chai, lodash,
                    husky hooks, Chart js, Cocos creator.
                </Paragraph>
                <Paragraph>Sass, MUI, Ant design, Bootstrap, Tailwind, React-hook-form.</Paragraph>
                <Paragraph>
                    Node/Express, Mongo DB, My SQL, SQL lite, PostrgreSQL, Linux(Ubuntu).
                </Paragraph>
            </div>
            <div className={styles.cv__experience}>
                <h3>Experience</h3>
                {experience
                    .map(({ date, duties, id, link, title }) => (
                        <ExperienceItem
                            key={id}
                            date={date}
                            title={title}
                            link={link}
                            duties={duties}
                        />
                    ))
                    .reverse()}
            </div>
            <div className={styles.cv__edu}>
                <h3>Education</h3>
                <div className={styles.cv__edu__flex}>
                    <div>
                        <HerzenLogo width="98px" />
                    </div>
                    <div>
                        <Link fontStyle="default" href="https://www.herzen.spb.ru/">
                            Herzen State Pedagogical University
                        </Link>
                        <Paragraph fontStyle="light">Bachelor&#39;s degree, 2nd course</Paragraph>
                        <Paragraph>
                            Institute of Information Technologies and Technological Education &gt;
                            Informatics and Computer Science &gt; Software Engineering Technologies
                        </Paragraph>
                        <Paragraph fontStyle="light">2022-2026</Paragraph>
                    </div>
                </div>
            </div>
            <div>
                <h3>About me</h3>
                <Paragraph>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur
                    maiores maxime explicabo ratione ad laborum aut magnam quisquam? Illo velit
                    voluptatem tempore ullam? Veritatis sapiente id suscipit iure unde!
                </Paragraph>
            </div>
        </div>
    );
};

export default BlogPage;
