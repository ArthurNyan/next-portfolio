export interface IProject {
    id: number | string;
    name: string;
    updateAt?: Date;
    date: Date;
    description: string;
    image: string;
    link: string;
    links?: { title: string; link: string }[];
}
