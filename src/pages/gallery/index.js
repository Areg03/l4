import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import Gallery from "@/containers/gallery";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { categoryApi, contactApi, galleryApi, linkApi } from "@/store";

const GalleryContainer = ({ category, gallery }) => {
    const { t } = useTranslation('common')
    return (
        <HelmetLayout title={t("gallery")} >
            <Gallery category={category} gallery={gallery} />
        </HelmetLayout>
    );
}


export async function getStaticProps({ locale }) {


    const category = await categoryApi(locale)
    const gallery = await galleryApi()
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {
                i18n: nextI18NextConfig.i18n,
                loadPaths: ['public/locales'],
            })),

            category,
            gallery
        },
        revalidate: 30,
    }
}

export default GalleryContainer;