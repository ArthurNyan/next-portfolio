import moment from 'moment';

export const formatDate = (date: Date | string, format?: string) => {
    return moment(date).format(format || 'L');
};
