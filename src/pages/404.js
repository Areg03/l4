import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import { contactApi, linkApi } from "@/store";
import { useRouter } from "next/router";

const Custom404 = () => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    return (
        <HelmetLayout title={'404 page'} t={t} lang={locale}>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <h1>404 - Page Not Found</h1>
            </div>
        </HelmetLayout>
    );
}

export async function getStaticProps({ locale }) {


    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),

        },
    }
}


export default Custom404;

