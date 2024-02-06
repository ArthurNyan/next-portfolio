import { Link, Paragraph } from '@/shared/components';
import SmallTitle from '@/shared/components/Typography/SmallTitle/SmallTitle';
import List from '@/shared/components/List/List';
import ListItem from '@/shared/components/ListItem/ListItem';

import styles from './ExperienceItem.module.scss';

interface ExperienceItemProps {
    title: string;
    date: string;
    link: string;
    duties: Array<string>;
}

const ExperienceItem = ({ title, date, link, duties }: ExperienceItemProps) => {
    return (
        <div className={styles.experienceItem}>
            <div className={styles.experienceItem__date}>
                <Paragraph>{date}</Paragraph>
            </div>
            <div className={styles.experienceItem__duties}>
                <SmallTitle>
                    <Link href={link}>{title}</Link>
                </SmallTitle>
                <List>
                    {duties.map((duty) => (
                        <ListItem key={duty}>{duty}</ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default ExperienceItem;
