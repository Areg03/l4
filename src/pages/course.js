import HelmetLayout from "@/containers/layout";
import Opinion from "@/containers/opinion";
import Register from "@/containers/register";
import School from "@/containers/school";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import { bannerApi, contactApi, linkApi, opinionApi } from "@/store";
import { useRouter } from "next/router";

const Course = ({ banner, opinion }) => {

    const { t } = useTranslation('common')
    const { locale } = useRouter()



    return (
        <HelmetLayout title={t("course")} t={t} lang={locale}>
            <School data={banner} lang={locale} />
            <Register t={t} />
            <Opinion t={t} data={opinion} lang={locale} />
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {

    const banner = await bannerApi(locale)
    const opinion = await opinionApi(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),

            banner,
            opinion
        },
        revalidate: 60,
    }
}

export default Course;