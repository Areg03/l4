import Image from "next/image";
import { Fragment, useState } from "react";
import Link from "next/link";
import { pictureKey } from "@/store/key";
import { useRouter } from "next/router";
import Test from '../../../public/images/noor.png'
import Modal from "@/components/Modal";
import { useTranslation } from "next-i18next";

const Gallery = ({ category, gallery }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const router = useRouter()
    const { id } = router.query
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const handleClickPrev = () => {
        if (active === 0) {
            setActive(0)
        } else {
            setActive(prev => prev - 1)
        }
    }

    const handleClickNext = () => {
        if (active === gallery.length - 1) {
            setActive(gallery.length - 1)
        } else {
            setActive(prev => prev + 1)
        }
    }

    return (
        <>
            <div className="container ">
                <div className="gallery-cat">
                    <Link href='/gallery' style={{ fontWeight: 700 }} className={router.pathname === '/gallery' ? "green" : ""} >
                        {t("l4main")}
                    </Link>
                    {category?.map((i, k) => (
                        <Link href={`/gallery/${k + 1}`} style={{ fontWeight: 700 }} className={id == i.id ? "green" : ""} key={k}>
                            {i[`title_${locale}`]}

                        </Link>
                    ))}
                </div>
                <div className="gallery-cat-select">
                    <select defaultValue={id} onChange={(e) => router.push(`/${e.target.value}`)}>
                        <option value={'gallery'}  >{t("l4main")}</option>
                        {category?.map((i, k) => (
                            <option key={i.id} value={`gallery/${i.id}`} className={id == i.id ? "green" : ""} >{i[`title_${locale}`]}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="container gallery" onClick={(e) => e.stopPropagation()}>
                {gallery?.map((i, k) => (
                    <div key={i.id} onClick={(e) => {
                        setActive(k)
                        setOpen(true)
                    }} style={{ cursor: 'pointer' }}>
                        <Image src={pictureKey + i.image} width={300} height={300} loading='lazy' alt="gallery-image" />
                    </div>
                ))}
            </div>
            <Modal isOpen={open} setIsOpen={setOpen}>
                <div className="galImg" >
                    <Image src={pictureKey + gallery?.[active]?.image} fill={true} loading='lazy' alt="gallery-big-img" />
                </div>
                <div className={"carousel-prev carousel-not-hidden"} onClick={handleClickPrev}>
                    <i className="arrow arrow-left "></i>
                </div>
                <div className={"carousel-next carousel-not-hidden"} onClick={handleClickNext}>
                    <i className="arrow arrow-right"></i>
                </div>
            </Modal>
        </>);
}

export default Gallery;