export interface ISocialLinks {
    id: string;
    link: string;
    nameRu: string;
    nameEn: string;
    type: 'profile' | 'channel' | 'mail' | 'group' | 'phone';
}
