import PageTitle from '@/widgets/PageTitle';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { Paragraph, SocialLink } from '@/shared/components';
import { getDictionary } from '@/shared/i18n/dictionary';
import { requireLocale } from '@/shared/i18n/server';

import { getSocialLinks } from '../../../api/sociallinks/utlis';

interface ContactsPageProps {
    params: {
        locale: string;
    };
}

export const dynamic = 'force-dynamic';

const ContactsPage = async ({ params }: ContactsPageProps) => {
    const locale = requireLocale(params.locale);
    const dictionary = getDictionary(locale);
    const {
        data: { data: socialLinks },
    } = await getSocialLinks(locale);

    return (
        <MotionWrapper>
            <PageTitle>{dictionary.contacts.title}</PageTitle>
            {socialLinks.length === 0 && <Paragraph>{dictionary.contacts.empty}</Paragraph>}
            {socialLinks.map((link) => (
                <SocialLink href={link.url} key={link.id}>
                    {link.label}
                </SocialLink>
            ))}
        </MotionWrapper>
    );
};

export default ContactsPage;
