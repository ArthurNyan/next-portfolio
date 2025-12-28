// import { getSocialLinks } from '@/app/api/sociallinks/utlis';
// import { SocialLink } from '@/shared/components';
import PageTitle from '@/widgets/PageTitle';

const ContactsPage = async () => {
    // const socialLinks = await getSocialLinks();

    return (
        <div>
            <PageTitle>some contacts</PageTitle>
            {/* {socialLinks?.map((link) => (
                <SocialLink href={link.link} key={link.id}>
                    {link.nameEn.toLowerCase()}{' '}
                    {link.type === 'channel' || link.type === 'group' ? link.type : null}
                </SocialLink>
            ))} */}
        </div>
    );
};

export default ContactsPage;
