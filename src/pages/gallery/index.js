import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../../next-i18next.config";
import Gallery from "@/containers/gallery";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { categoryApi, contactApi, galleryApi, linkApi } from "@/store";

const GalleryContainer = ({ category, gallery }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    return (
        <HelmetLayout title={t("gallery")} t={t} lang={locale}>
            <Gallery lang={locale} category={category} gallery={gallery} t={t} />
        </HelmetLayout>
    );
}


export async function getStaticProps({ locale }) {


    const category = await categoryApi(locale)
    const gallery = await galleryApi()
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),

            category,
            gallery
        },
        revalidate: 30,
    }
}

export default GalleryContainer;