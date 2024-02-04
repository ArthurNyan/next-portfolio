import classNames from 'classnames';

import { ITypography } from '../model/Typography.model';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, className }: ITypography) => {
    return <p className={classNames(className, styles.paragraph)}>{children}</p>;
};

export default Paragraph;
