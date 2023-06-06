import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import Mail from '../../../public/images/mail.png'
import Geolocation from '../../../public/images/geolocation.png'
import Phone from '../../../public/images/phone.png'
import FB from '../../../public/images/facebook.png'
import Insta from '../../../public/images/instagram.png'
import Google from '../../../public/images/google.png'
import Twitter from '../../../public/images/twitter.png'

const Footer = ({ t, data, lang, links }) => {

    const year = new Date().getFullYear()

    return (
        <>
            <footer>
                <article>
                    <section className='footlogo'><Image src={Logo} width={162} height={51} priority={true} alt="Logo" /></section>
                    <section className='useful'>
                        <h3>{t("useful")}</h3>
                        {links.map((item, k) => (
                            <a href={item} key={k} target="_blank">{item.link_address}</a>
                        ))}
                    </section>
                    <section className='contact'>
                        <h3>{t("contactUs")}</h3>
                        <p className='item'><Image src={Mail} style={{ marginRight: 10 }} alt="mail" />{" " + t("email")}: {data[0].email}</p>
                        <p className='item'><Image src={Geolocation} style={{ marginRight: 10 }} alt="adress" />{" "}{data[0][`address_${lang}`]}</p>
                        <div className="item" style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>
                        <div className="item" style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>
                        <div className="item" style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>
                        <div className="item" style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>                    </section>
                    <section className='find'>
                        <h3>{t("find")}</h3>
                        <div className="finditem">
                            <a href={data[0].facebook} target="_blank">  <Image src={FB} alt="facebook" /></a>
                            <a href={data[0].instagram} target="_blank">     <Image src={Insta} alt="instagram" /></a>
                            <a href={data[0].google_plus} target="_blank">    <Image src={Google} alt="google-plus" /></a>
                            <a href={data[0].twitter} target="_blank">     <Image src={Twitter} alt="twitter" /></a>
                        </div>
                    </section>
                </article>
            </footer>
            <span className="armcoding">By ArmCoding - &copy; {year} {t("rights")} </span>
        </>
    );
}

export default Footer;