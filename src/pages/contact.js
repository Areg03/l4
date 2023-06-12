import ContactContainer from "@/containers/contact";
import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import { useTranslation } from 'react-i18next';
import { contactApi, linkApi } from "@/store";
import { useRouter } from "next/router";

const Contact = ({ contact, }) => {
    const { t } = useTranslation('common')
    return (
        <HelmetLayout title={t("contact")}>
            <ContactContainer data={contact} />
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {
    const contact = await contactApi(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),
            contact,
        },
        revalidate: 60,
    }
}

export default Contact;