import { Fragment, useEffect, useState } from "react";
import Test from '../../../public/images/noor.png'
import Image from "next/image";
import { pictureKey } from "@/store/key";
import Modal from "@/components/Modal";
import OpinionForm from "../forms/opinionForm";

const ServicesAll = ({ t, lang, data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(0)
    const arr = [
        { id: 1, title: t("first"), },
        { id: 2, title: t("second"), },
        { id: 3, title: t("third"), },
        { id: 4, title: t("four"), },
        { id: 5, title: t("five"), },
    ]

    useEffect(() => {
        if (active !== 0) {
            const element = document.getElementById(active)
            const pos = element.offsetTop
            window.scrollTo({
                top: pos - 10,
                behavior: "smooth"
            })
            setTimeout(() => {
                setActive(0)
            }, 150)
        }
    }, [active])

    return (
        <>
            <div className="container">
                <div>
                    <div className="gallery-cat">
                        {arr.map((i, k) => (
                            <p key={k} style={{ textAlign: "center", fontSize: 10, width: 180, cursor: "pointer", color: k === 0 ? '#68BC43' : 'black' }} onClick={() => setActive(i.id)}>{i.title}</p>
                        ))}
                    </div>
                    <div className="gallery-cat-select">
                        <select defaultValue={1} onChange={(e) => setActive(e.target.value)}>
                            {arr?.map((i, k) => (
                                <option key={k} value={i.id}  >{i.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {data?.map((i, k) => (
                    <div key={k} id={`${k + 1}`}>
                        <h3 className="light linebox end"><span className="line"></span>{arr[k].title}</h3>
                        {k % 2 === 0 ?
                            <div className="container-image">
                                <div className="text" onClick={(e) => e.stopPropagation()}>
                                    <h4>{i[`title_${lang}`]}</h4>
                                    <p>{i[`description_${lang}`]}</p>
                                    <button onClick={() => setIsOpen(true)}>{t("order")}</button>
                                </div>
                                <div className="image">
                                    <Image src={pictureKey + i.icon} width={600} height={300} loading='lazy' alt='service-image' />
                                </div>
                            </div> :
                            <div className="container-image reverse">
                                <div className="image">
                                    <Image src={pictureKey + i.icon} width={600} height={300} loading='lazy' alt='service-image' />
                                </div>
                                <div className="text" onClick={(e) => e.stopPropagation()}>
                                    <h4>{i[`title_${lang}`]}</h4>
                                    <p>{i[`description_${lang}`]}</p>
                                    <button onClick={() => setIsOpen(true)}>{t("order")}</button>
                                </div>

                            </div>}
                    </div>
                ))}
            </div>
            <Modal middle isOpen={isOpen} setIsOpen={setIsOpen}>
                <OpinionForm other t={t} />
            </Modal>
        </>);
}

export default ServicesAll;