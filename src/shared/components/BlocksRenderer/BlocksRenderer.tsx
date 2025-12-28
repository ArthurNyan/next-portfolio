'use client';

import { BlocksRenderer as StrapiBlocksRenderer } from '@strapi/blocks-react-renderer';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Markdown from 'react-markdown';

import { Link, Paragraph } from '../Typography';

export const BlocksRenderer = ({ content }: { content: RootNode[] }) => {
    return (
        <StrapiBlocksRenderer
            content={content}
            blocks={{
                link: ({ children, url }) => <Link href={url}>{children}</Link>,
                paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
            }}
        />
    );
};

interface IMarkdownRender {
    content: string;
}

export const MarkdownRender = ({ content }: IMarkdownRender) => <Markdown>{content}</Markdown>;
