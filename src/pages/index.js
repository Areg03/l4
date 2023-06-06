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

const Home = ({ banner, slider, contact, links, about, team, partner, content, services }) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  return (
    <HelmetLayout title={t("title")} t={t} footer={contact} links={links} lang={locale}>
      <Video t={t} data={content} lang={locale} />
      <div className="container">
        <h1 className="h1red">{slider[0][`title_${locale}`]}</h1>
      </div>
      <AboutUs t={t} lang={locale} data={about} />
      {/* <SchoolLink t={t} data={banner} lang={locale} /> */}
      <Service t={t} lang={locale} data={services} />
      <Team t={t} lang={locale} data={team} />
      {/* <Other t={t} lang={locale} data={content} /> */}
      <Partner t={t} lang={locale} data={partner} />
      <ContactContainer title t={t} data={contact} lang={locale} />
    </HelmetLayout>
  )
}

export async function getStaticProps({ locale }) {
  const banner = await bannerApi(locale)
  const slider = await sliderApi(locale)
  const contact = await contactApi(locale)
  const links = await linkApi(locale)
  const about = await aboutApi(locale)
  const team = await teamApi(locale)
  const partner = await partnerApi(locale)
  const content = await contentSliderApi(locale)
  const services = await serviceApi(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ],
        nextI18NextConfig,
      )),
      banner,
      slider,
      contact,
      links,
      about,
      team,
      partner,
      content,
      services
    },
  }
}

export default Home;