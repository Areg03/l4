import AboutUs from "@/containers/aboutUs";
import ContactContainer from "@/containers/contact";
import HelmetLayout from "@/containers/layout";
import Other from "@/containers/Other";
import Partner from "@/containers/partner";
import SchoolLink from "@/containers/school/link";
import Service from "@/containers/service";
import Team from "@/containers/team";
import Video from "@/containers/video";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../next-i18next.config.js'
import { aboutApi, bannerApi, contactApi, contentSliderApi, linkApi, partnerApi, serviceApi, sliderApi, teamApi } from "@/store/index.js";
import { useRouter } from "next/router.js";

const Home = ({ slider, contact, about, team, partner, content, services }) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  return (
    <HelmetLayout title={t("title")}  >
      <Video data={content} />
      <div className="container">
        <h1 className="h1red black">{t("l4")}</h1>
        <h2 className="h2red black">{t("last")}</h2>
        <h3 className="h3red black" style={{ borderBottom: '8px solid red' }}>{t("masnag")}</h3>
      </div>
      <AboutUs data={about} />
      <Service data={services} />
      <Team data={team} />

      <Partner data={partner} />
      <ContactContainer title data={contact} />
    </HelmetLayout>
  )
}

export async function getStaticProps({ locale }) {
  const slider = await sliderApi(locale)
  const contact = await contactApi(locale)
  const about = await aboutApi(locale)
  const team = await teamApi(locale)
  const partner = await partnerApi(locale)
  const content = await contentSliderApi(locale)
  const services = await serviceApi(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], {
        i18n: nextI18NextConfig.i18n,
        loadPaths: ['public/locales'],
      })),
      slider,
      contact,
      about,
      team,
      partner,
      content,
      services,
    },
    revalidate: 120,
  }
}

export default Home;