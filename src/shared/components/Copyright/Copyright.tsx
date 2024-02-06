import { Paragraph } from '../Typography';

const Copyright = ({ text }: { text: string }) => {
    const year = new Date().getFullYear();
    return (
        <div>
            <Paragraph>
                &#169; {year} {text}
            </Paragraph>
        </div>
    );
};

export default Copyright;
