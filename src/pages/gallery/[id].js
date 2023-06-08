import HelmetLayout from "@/containers/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../../next-i18next.config";
import Gallery from "@/containers/gallery";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { categoryApi, contactApi, galleryApi, galleryItemApi, linkApi } from "@/store";

const GalleryContainerItem = ({ category, gallery, }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    return (
        <HelmetLayout title={t("gallery")} t={t} lang={locale}>
            <Gallery lang={locale} category={category} t={t} gallery={gallery} />
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
    return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {

    const category = await categoryApi(locale)
    const gallery = await galleryItemApi(params.id)
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ],
                nextI18nextConfig,
            )),

            category,
            gallery,

        },
        revalidate: 30,
    }
}

export default GalleryContainerItem;