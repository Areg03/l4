import ContactForm from "../forms/contactForm";
import Image from 'next/image';

import Phone from '../../../public/images/phone2.png'
import Mail from '../../../public/images/mail2.png'


const ContactContainer = ({ title, t, data, lang }) => {
    return (
        <section className="container contact-container">
            <div className="map">
                {title && <h3 className="light linebox"><span className="line"></span>{t("contactUs")}</h3>}
                <div className="contact-text" >
                    <p style={{ fontWeight: 'bold' }}>{t("l4")} </p>
                    <p style={{ fontWeight: 'bold' }}>{t("spy")}</p>
                </div>
                <p>{t("smile")}</p>
                <p>{t("entered")}</p>
                <p>{t("daysdemo")}</p>
                <div className="contact-text" >
                    <p >{t("days")} </p>
                    <p>{t("hour")}</p>
                </div>
                <p>{data[0][`address_${lang}`]}</p>
                <p>{t("call")}</p>
                <div className="contact-phone">
                    <div className="contact-text" >
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number2}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number3}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }} ><Image src={Phone} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].phone_number4}</p></div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} ><Image src={Mail} style={{ marginRight: 10 }} alt="phone" /> <p style={{ margin: '9px 0 9px' }} className='phone'>{data[0].email}</p></div>
                    </div>
                    {/* <div className="contact-domain">
                        <p>{data[0].email}</p>
                    </div> */}
                </div>
                <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.147266397486!2d44.56502661534849!3d40.18353597939279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcb26bb34ae1%3A0xf940f2a0be4e89b9!2s13%20Mikoyan%20St%2C%20Yerevan%200090%2C%20Armenia!5e0!3m2!1sen!2s!4v1643370650037!5m2!1sen!2s" allowFullScreen loading="lazy"></iframe>
            </div>
            <ContactForm t={t} />
        </section>
    );
}

export default ContactContainer;