import classNames from 'classnames';

import { ITypography } from '../model/Typography.model';
import styles from './SmallTitle.module.scss';

const SmallTitle = ({ children, className }: ITypography) => {
    return <h4 className={classNames(className, styles.title)}>{children}</h4>;
};

export default SmallTitle;
