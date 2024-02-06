import classNames from 'classnames';

import { ITypography } from '../model/Typography.model';
import styles from './SubTitle.module.scss';

const SubTitle = ({ children, className }: ITypography) => {
    return <h2 className={classNames(className, styles.title)}>{children}</h2>;
};

export default SubTitle;
