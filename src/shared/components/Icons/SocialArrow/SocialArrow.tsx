export const SocialArrow = ({ width }: { width?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || '24'}
        height={width || '24'}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
    </svg>
);

export default SocialArrow;
