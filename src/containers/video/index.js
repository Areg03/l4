import { useTranslation } from 'next-i18next';
import vid from '../../../public/videoplayback.mp4'
import { useEffect, useState } from 'react';
import Other from '../Other';
import { useRouter } from 'next/router';

const Video = ({ data }) => {

    const [active, setActive] = useState(false)
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    useEffect(() => {
        if (active) {
            const element = document.getElementById('about')
            const pos = element.offsetTop
            window.scrollTo({
                top: pos - 90,
                behavior: "smooth"
            })
            setTimeout(() => {
                setActive(false)
            }, 150)
        }
    }, [active])
    return (
        <>
            <section className='container'>
                <div className='first'>
                    <div className='videobox'>
                        <video autoPlay loop muted >
                            <source src={vid} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* <div className='videotext'>
                    <h1>
                        <span>
                            {data[0][`title_${locale}`]}
                        </span>
                    </h1>
                    <p>{data[0][`description_${locale}`]}</p>
                    <button onClick={() => setActive(true)}>{t("read")}</button>
                </div> */}
                    <Other t={t} data={data} locale={locale} />
                </div>
            </section>
        </>);
}

export default Video;