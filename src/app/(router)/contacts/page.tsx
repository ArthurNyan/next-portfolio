import { getSocialLinks } from '@/app/api/sociallinks/socialLinks';
import { Title, SocialLink } from '@/shared/components';

const ContactsPage = async () => {
    const socialLinks = await getSocialLinks();

    return (
        <div>
            <Title>some contacts</Title>
            {socialLinks?.map((link) => (
                <SocialLink href={link.link} key={link.id}>
                    {link.nameEn.toLowerCase()}{' '}
                    {link.type === 'channel' || link.type === 'group' ? link.type : null}
                </SocialLink>
            ))}
        </div>
    );
};

export default ContactsPage;
