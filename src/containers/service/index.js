import ServiceItem from "@/components/serviceItem";
import OrgReg from '../../../public/images/orgReg.png'
import Scales from '../../../public/images/scales.png'
import Condition from '../../../public/images/condition.png'
import Second from '../../../public/images/second.png'
import First from '../../../public/images/first.png'
import { Fragment } from "react";
import Carousel from "@/components/slider";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Service = ({ data }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const datas = [
        { id: 1, title: t("first"), link: '/services', icon: OrgReg },
        { id: 2, title: t("second"), link: '/services', icon: Second },
        { id: 3, title: t("third"), link: '/services', icon: Condition },
        { id: 4, title: t("five"), link: '/services', icon: Scales },
        { id: 5, title: t("four"), link: '/services', icon: First },
    ]

    return (
        <section className="container">
            <h3 className="light linebox"><span className="line"></span>{t("services")}</h3>
            <h3 className="secondary uppercase">{t("offer")}</h3>
            <Carousel>
                {data?.map((i, k) => (
                    <Fragment key={k} >
                        <ServiceItem t={t} title={datas?.[k]?.title} description={i[`title_${locale}`]} id={datas?.[k].id} link={datas?.[k].link} icon={datas?.[k].icon} />
                    </Fragment>
                ))}

            </Carousel>
        </section>
    );
}

export default Service;