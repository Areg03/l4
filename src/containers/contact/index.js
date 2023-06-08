import ContactForm from "../forms/contactForm";
import Image from 'next/image';

import Phone from '../../../public/images/phone2.png'
import Mail from '../../../public/images/mail2.png'


const ContactContainer = ({ title, t, data, lang }) => {
    return (
        <section className="container contact-container">
            <div className="map">
                {title && <h3 className="light linebox"><span className="line"></span>{t("contactUs")}</h3>}
                <div className="contact-text" style={{ marginBottom: 40 }}>
                    <p style={{ fontWeight: 'bold' }}>{t("l4")} </p>
                    <p style={{ fontWeight: 'bold' }}>{t("spy")}</p>
                </div>
                <p>{t("call")}</p>
                <p>{t("daysdemo")}</p>
                <div className="contact-text" >
                    <p >{t("days")} </p>
                    <p>{t("hour")}</p>
                </div>
                <p>{t("entered")}</p>

                <p>{data[0][`address_${lang}`]}</p>
                <p>{t("smile")}</p>
                <div className="contact-phone">
                    <div className="contact-text" >
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Mail} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].email}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'pre-wrap' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number2}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number3}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number4}</p></div>
                    </div>
                    {/* <div className="contact-domain">
                        <p>{data[0].email}</p>
                    </div> */}
                </div>
                <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24371.632632813984!2d44.4904227!3d40.2212051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdc903935bb3%3A0x1bf2564005d8a2a1!2sL4%20Accounting%20center!5e0!3m2!1shy!2sam!4v1686119041637!5m2!1shy!2sam" allowFullScreen loading="lazy"></iframe>
            </div>
            <ContactForm t={t} />
        </section>
    );
}

export default ContactContainer;