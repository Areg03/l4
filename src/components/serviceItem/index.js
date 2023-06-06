import Image from 'next/image';
import Link from 'next/link';
import OrgReg from '../../../public/images/orgReg.png'

const ServiceItem = ({ t, title, description, link, icon, id }) => {
    return (
        <div className="carousel-item" >
            <Link href={`${link}#${id}`} >
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