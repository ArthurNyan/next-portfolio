import PageTitle from '@/widgets/PageTitle';
import { PushNotificationManager } from '@/shared/components/PushNotificationManager';
import { InstallPrompt } from '@/shared/components/InstallPrompt';

import styles from './cv.module.scss';

const PWAPage = () => {
    return (
        <div className={styles.cv}>
            <PageTitle>About PWA</PageTitle>
            <PushNotificationManager />
            <InstallPrompt />
        </div>
    );
};

export default PWAPage;
