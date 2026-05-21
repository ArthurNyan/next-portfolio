type BlockNode = {
    text?: string;
    children?: BlockNode[];
};

const normalizeWhitespace = (value: string) => value.replace(/\s+/g, ' ').trim();

export const truncateText = (value: string, maxLength = 160) => {
    const normalized = normalizeWhitespace(value);

    if (normalized.length <= maxLength) {
        return normalized;
    }

    return `${normalized.slice(0, maxLength).trimEnd()}…`;
};

export const extractTextFromBlocks = (nodes?: BlockNode[] | null): string => {
    if (!nodes?.length) {
        return '';
    }

    const text = nodes
        .flatMap((node) => {
            if (node.text) {
                return [node.text];
            }

            return node.children ? [extractTextFromBlocks(node.children)] : [];
        })
        .filter(Boolean)
        .join(' ');

    return normalizeWhitespace(text);
};

export const stripMarkdown = (value = '') => {
    const normalized = value
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/[*_~>-]/g, ' ')
        .replace(/\n+/g, ' ');

    return normalizeWhitespace(normalized);
};

export const estimateReadingMinutes = (value: string, wordsPerMinute = 220) => {
    const wordCount = normalizeWhitespace(value).split(' ').filter(Boolean).length;

    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};
