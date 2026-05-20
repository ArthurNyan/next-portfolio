import { AppLocale } from './config';

type Dictionary = {
    metadata: {
        title: string;
        description: string;
        siteName: string;
        defaultPageTitle: string;
    };
    navigation: {
        home: string;
        blog: string;
        projects: string;
        cv: string;
        contacts: string;
    };
    common: {
        rightsReserved: string;
        present: string;
        notFound: string;
        language: string;
        openResource: string;
        openDemo: string;
        openGithub: string;
        techStack: string;
    };
    home: {
        title: string;
        sendMessage: string;
        sendEmail: string;
    };
    blog: {
        title: string;
    };
    projects: {
        title: string;
    };
    cv: {
        experience: string;
        education: string;
        aboutMe: string;
    };
    contacts: {
        title: string;
        empty: string;
    };
};

const dictionaries: Record<AppLocale, Dictionary> = {
    ru: {
        metadata: {
            title: 'Артур Наакатакян',
            description: 'Портфолио, проекты, резюме и статьи Артура Наакатакяна.',
            siteName: 'Артур Наакатакян',
            defaultPageTitle: 'Портфолио',
        },
        navigation: {
            home: 'главная',
            blog: 'блог',
            projects: 'проекты',
            cv: 'резюме',
            contacts: 'контакты',
        },
        common: {
            rightsReserved: 'все права защищены',
            present: 'по настоящее время',
            notFound: 'Страница не найдена',
            language: 'Язык',
            openResource: 'Открыть',
            openDemo: 'Открыть демо',
            openGithub: 'Открыть GitHub',
            techStack: 'Стек',
        },
        home: {
            title: 'главная страница',
            sendMessage: 'написать сообщение',
            sendEmail: 'отправить письмо',
        },
        blog: {
            title: 'читать блог',
        },
        projects: {
            title: 'мои проекты',
        },
        cv: {
            experience: 'Опыт',
            education: 'Образование',
            aboutMe: 'Обо мне',
        },
        contacts: {
            title: 'контакты',
            empty: 'Контакты пока не заполнены.',
        },
    },
    en: {
        metadata: {
            title: 'Arthur Nakhatakyan',
            description: 'Arthur Nakhatakyan portfolio, projects, CV, and articles.',
            siteName: 'Arthur Nakhatakyan',
            defaultPageTitle: 'Portfolio',
        },
        navigation: {
            home: 'home',
            blog: 'blog',
            projects: 'projects',
            cv: 'cv',
            contacts: 'contacts',
        },
        common: {
            rightsReserved: 'all rights reserved',
            present: 'present',
            notFound: 'Page not found',
            language: 'Language',
            openResource: 'Open',
            openDemo: 'Open demo',
            openGithub: 'Open GitHub',
            techStack: 'Stack',
        },
        home: {
            title: 'home page',
            sendMessage: 'send message',
            sendEmail: 'send email',
        },
        blog: {
            title: 'follow the blog',
        },
        projects: {
            title: 'check my projects',
        },
        cv: {
            experience: 'Experience',
            education: 'Education',
            aboutMe: 'About me',
        },
        contacts: {
            title: 'contacts',
            empty: 'Contacts are not configured yet.',
        },
    },
};

export const getDictionary = (locale: AppLocale) => dictionaries[locale];

export type { Dictionary };
