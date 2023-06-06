import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../../next-i18next.config";
import Gallery from "@/containers/gallery";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { categoryApi, contactApi, galleryApi, linkApi } from "@/store";

const GalleryContainer = ({ contact, links, category, gallery }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    return (
        <HelmetLayout title={t("gallery")} t={t} footer={contact} links={links} lang={locale}>
            <Gallery lang={locale} category={category} gallery={gallery} t={t} />
        </HelmetLayout>
    );
}

export async function getServerSideProps({ locale }) {
    const contact = await contactApi(locale)
    const links = await linkApi(locale)
    const category = await categoryApi(locale)
    const gallery = await galleryApi()
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),
            contact,
            links,
            category,
            gallery
        },
    }
}

export default GalleryContainer;