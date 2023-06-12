import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import Gallery from "@/containers/gallery";
import { useTranslation } from "next-i18next";
import { categoryApi, galleryApi, galleryItemApi, } from "@/store";

const GalleryContainerItem = ({ category, gallery, }) => {
    const { t } = useTranslation('common')
    return (
        <HelmetLayout title={t("gallery")} >
            <Gallery category={category} gallery={gallery} />
        </HelmetLayout>
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const gallery = await galleryApi();
    // Get the paths we want to pre-render based on posts
    const paths = gallery.map((post) => ({
        params: { id: post.id.toString() },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }) {

    const category = await categoryApi(locale)
    const gallery = await galleryItemApi(params.id)
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {
                i18n: nextI18NextConfig.i18n,
                loadPaths: ['public/locales'],
            })),
            category,
            gallery,

        },
        revalidate: 30,
    }
}

export default GalleryContainerItem;