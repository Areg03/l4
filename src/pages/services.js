import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import ServicesAll from "@/containers/service/serviceAll";
import { useTranslation } from "next-i18next";
import { contactApi, linkApi, serviceApi } from "@/store";
import { useRouter } from "next/router";

const Services = ({ contact, links, services }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    console.log(services)
    return (
        <HelmetLayout title={t("services")} t={t} footer={contact} links={links} lang={locale}>
            <ServicesAll t={t} lang={locale} data={services} />
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {
    const contact = await contactApi(locale)
    const links = await linkApi(locale)
    const services = await serviceApi(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),
            contact,
            links,
            services
        },
    }
}


export default Services;