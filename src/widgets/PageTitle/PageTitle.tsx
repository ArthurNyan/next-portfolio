import classNames from 'classnames';

import { ITypography } from '../../shared/components/Typography/model/Typography.model';
import styles from './PageTitle.module.scss';

const PageTitle = ({ children, className, contentSlot }: ITypography) => {
    return (
        <div className={classNames(className, styles.title)}>
            <h1>{children}</h1>
            {contentSlot}
        </div>
    );
};

export default PageTitle;
