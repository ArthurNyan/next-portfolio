import styles from './List.module.scss';

interface ListItemProps {
    children: React.ReactNode;
}

const List = ({ children }: ListItemProps) => {
    return <ul className={styles.list}>{children}</ul>;
};

export default List;
