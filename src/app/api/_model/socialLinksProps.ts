export interface ISocialLinksProps {
    id: number;
    documentId: string;
    locale: string;
    label: string;
    url: string;
    type: 'profile' | 'channel' | 'mail' | 'group' | 'phone';
    localizations?: Array<{
        locale: string;
        label: string;
    }>;
}
