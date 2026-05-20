import moment from 'moment';
import 'moment/locale/ru';

export const formatDate = (date: Date | string, locale = 'ru', format?: string) => {
    return moment(date)
        .locale(locale)
        .format(format || 'L');
};
