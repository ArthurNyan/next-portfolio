import classNames from 'classnames';

import { ITypography } from '../model/Typography.model';
import styles from './Title.module.scss';

const Title = ({ children, className }: ITypography) => {
    return <h1 className={classNames(className, styles.title)}>{children}</h1>;
};

export default Title;
