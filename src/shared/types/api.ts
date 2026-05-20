export interface IStrapiType<Data extends object> {
    data: Data;
}

export interface ILocalization {
    id: number;
    documentId: string;
    locale: string;
    slug?: string;
}

export interface ILocalizedEntity {
    id: number;
    documentId: string;
    locale: string;
    localizations?: ILocalization[];
}

export interface IMedia {
    id: number;
    documentId: string;
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Formats {
    thumbnail: MediaFormat;
    medium: MediaFormat;
    small: MediaFormat;
    large: MediaFormat;
}

export interface MediaFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
