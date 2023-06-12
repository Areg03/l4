import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import ServicesAll from "@/containers/service/serviceAll";
import { useTranslation } from "next-i18next";
import { contactApi, linkApi, serviceApi } from "@/store";
import { useRouter } from "next/router";

const Services = ({ services }) => {
    const { t } = useTranslation('common')
    return (
        <HelmetLayout title={t("services")} >
            <ServicesAll data={services} />
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {
    const services = await serviceApi(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {
                i18n: nextI18NextConfig.i18n,
                loadPaths: ['public/locales'],
            })),

            services
        },
        revalidate: 60,
    }
}


export default Services;