import styles from './ListItem.module.scss';

interface ListItemProps {
    children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
    return <li className={styles.listItem}>{children}</li>;
};

export default ListItem;
