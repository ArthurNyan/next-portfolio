export interface ITypography {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
    fontStyle?: 'default' | 'primary' | 'dark' | 'light';
}
