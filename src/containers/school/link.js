import Modal from "@/components/Modal";
import Image from "next/image";
import Sch from "../../../public/images/school.png"
import SchoolForm from "../forms/schoolForm";
import { pictureKey } from "@/store/key";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const SchoolLink = ({ data }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="school container">
            <div className="linkdesc">
                <h2 style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{data[0][`title_${locale}`]}</h2>
                <p className="text">{t("textbig")}</p>
                <div className="read">
                    <Modal middle text={t("register")} isOpen={isOpen} setIsOpen={setIsOpen} butt>
                        <SchoolForm other t={t} />
                    </Modal>
                    <Link href='/course'><p className="more">{t("read")}</p></Link>
                </div>
            </div>
            <div className="linkimg">
                <Image src={pictureKey + data[0].image} width={500} height={300} loading='lazy' alt="school" />
            </div>

        </section >
    );
}

export default SchoolLink;