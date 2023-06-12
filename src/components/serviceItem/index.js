import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

import OrgReg from '../../../public/images/orgReg.png'
import { useRouter } from 'next/router';

const ServiceItem = ({ title, description, link, icon, id }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    return (
        <div className="carousel-item" >
            <Link href={`${link}#${id}`} locale={locale}>
                <div className="carousel-item-general gray carousel-item-service">
                    <Image src={icon} width={90} height={100} loading='lazy' alt='Organization registration' />
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p className="more red">{t("read")}</p>
                </div>
            </Link>
        </div>
    );
}

export default ServiceItem;