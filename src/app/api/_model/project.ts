export interface IProject {
    id: number | string;
    name: string;
    updateAt?: Date;
    date: Date;
    description: string;
    images?: string;
    link: string;
}
