import Modal from "@/components/Modal";
import Carousel from "@/components/slider";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import OpinionForm from "../forms/opinionForm";

const Opinion = ({ data, }) => {
    const { t } = useTranslation('common')
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="container">
            <h3 className="light linebox"><span className="line"></span>{t("opinions")}</h3>
            <div className="opinion">
                <Carousel one center>
                    {data?.map((i, k) => (
                        <div className="opinion-item" key={k}>
                            <h3 className="light linebox single-opinion-title">{i.first_name} {i.last_name}</h3>
                            <p>{i.message}</p>
                        </div>
                    ))}

                </Carousel>
            </div>
            <div className="opinion-container" onClick={(e) => e.stopPropagation()}>

                <button onClick={() => setIsOpen(true)}>{t("sendop")}</button>
            </div>
            <Modal middle isOpen={isOpen} setIsOpen={setIsOpen}>
                <OpinionForm t={t} other />
            </Modal>
        </section>
    );
}

export default Opinion;