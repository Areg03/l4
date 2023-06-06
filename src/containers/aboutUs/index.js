import Image from "next/image";
import { useState } from "react";
import { pictureKey } from "@/store/key";

const AboutUs = ({ t, data, lang }) => {
    const [active, setActive] = useState(false)
    return (
        <section className="container about" id="about">
            <div className="aboutdesc">
                <div>
                    <h3 className="light linebox"><span className="line"></span>{t("about")}</h3>
                    <h3 className="secondary">{data[0][`title_${lang}`]}</h3>
                </div>
                <div className="imgsecsmall">
                    <p><Image src={pictureKey + data[0].image} width={225} height={225} loading="lazy" alt="About us" />{!active ? data[0][`description_${lang}`].substring(0, 511) + '...' : data[0][`description_${lang}`]} </p>

                </div>
                {!active && <button onClick={() => setActive(true)}>{t("read")}</button>}
            </div>
            <div className="imgsec">
                <Image src={pictureKey + data[0].image} width={500} height={500} alt="About us" />
            </div>
        </section>
    );
}

export default AboutUs;