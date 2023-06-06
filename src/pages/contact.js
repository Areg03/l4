import ContactContainer from "@/containers/contact";
import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import { contactApi, linkApi } from "@/store";
import { useRouter } from "next/router";

const Contact = ({ contact, links }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    return (
        <HelmetLayout title={t("contact")} t={t} footer={contact} links={links} lang={locale}>
            <ContactContainer t={t} data={contact} lang={locale} />
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {
    const contact = await contactApi(locale)
    const links = await linkApi(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),
            contact,
            links
        },
    }
}

export default Contact;