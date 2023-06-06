import { useEffect, useRef, useState } from "react";
import React from 'react';
import Carousel from "@/components/slider";



const Other = ({ t, data, lang }) => {
    const someRef = useRef()
    const [checked, setChecked] = useState(false)
    const [active, setActive] = useState('Ընտրել')
    useEffect(() => {
        const handleClickOutside = (event) => {

            if (someRef.current && !someRef.current.contains(event.target)) {
                setChecked(false);

            }
        };
        if (checked) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, [checked])
    return (
        <section className="other-container">
            <div className="other-both">
                <div className="other-box ">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FL4accounting&tabs=timeline&width=310&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1608418332974737" height="200" allowFullScreen={true} allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                </div>
                <div className="other-box country" >
                    {/* <h4>ԳՈՐԾՈՒՂՄԱՆ ՕՐԱՊԱՀԻԿԻ ԵՎ ԳԻՇԵՐԱՎԱՐՁԻ ԾԱԽՍԵՐԻ ՆՈՐՄԵՐԸ</h4>
                    <h3 className="secondary uppercase green">Սորեն</h3> */}
                    <Carousel one center>
                        {data.map((i, k) => (
                            <div key={k} className="soren-item">
                                <h5 className="uppercase">{i[`title_${lang}`]}</h5>
                                <h4 className="secondary uppercase black">{i[`description_${lang}`]}</h4>
                            </div>
                        ))}

                    </Carousel>
                </div>
            </div>
            <div className="other-both">
                <div className="other-box country">
                    {/* <div style={{ padding: 20 }}>
                    <h4 className="uppercase">{t("cost")}</h4>
                    <fieldset >
                        <input type='checkbox' id="countrys" defaultChecked={checked} />
                      

                    </fieldset>
                </div> */}
                    <a href="" target="_blank" className="other-box country other-last gray" >
                        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <h3 className="secondary uppercase green other-last-text other-last-none">{t("cost")}
                            </h3>
                        </div>
                    </a>
                </div >
                {/* </div> */}


                <a href="https://file-online.taxservice.am/pages/loginPage.jsf" target="_blank" className="other-box country other-last" >
                    <h3 className="secondary uppercase green other-last-text">{t("electro")}
                    </h3>

                </a>
            </div>
        </section >
    );
}

export default Other;