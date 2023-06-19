import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../public/images/logo.png'
import Hayastan from '../../../public/images/hayastan.png'
import Britain from '../../../public/images/britain.jpg'
import Russia from '../../../public/images/russia.jpg'
// import Select from 'react-select';

import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Modal from '@/components/Modal';
import SchoolForm from '../forms/schoolForm';
import { appWithTranslation, useTranslation } from 'next-i18next';




const Header = () => {
    const { t } = useTranslation('common')
    const router = useRouter();
    const { pathname, asPath, query, locale } = router;

    const flagRef = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false)

    const options = [
        { id: 1, value: 'am', image: <Image src={Hayastan} width={28} height={17} alt="Armenian flag" /> },
        { id: 2, value: 'en', image: <Image src={Britain} width={28} height={17} alt="Britain flag" /> },
        { id: 3, value: 'ru', image: <Image src={Russia} width={28} height={17} alt="Russian flag" /> },
    ];

    // useEffect(() => {
    //     const header = document.querySelector('header');
    //     const main = document.querySelector('main');
    //     const thresholdCoord = 150;

    //     function handleScroll() {
    //         if (window.pageYOffset > thresholdCoord) {
    //             header.classList.add('scrolled')
    //             main.classList.add('scroll-main')
    //         } else {
    //             header.classList.remove('scrolled')
    //             main.classList.remove('scroll-main')
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (flagRef.current && !flagRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {

            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, [open]);
    return (
        <>
            <header className='scrolled'>
                <div className='all-header' itemID='head'>
                    <div className='hiddenLine'>

                    </div>
                    <div className='logo' >
                        <Link href='/' locale={locale}><Image src={Logo} width={261} height={82} priority={true} alt="Logo" /></Link>

                    </div>
                    <nav className='nav-comp'>
                        <ul className='computer'>
                            <Link href='/services' locale={locale}><li className={pathname === "/services" ? "navactive" : ""}>{t("services")}</li></Link>
                            <Link href='/course' locale={locale}><li className={pathname === "/course" ? "navactive" : ""}>{t("course")}</li></Link>
                            <Link href='/gallery' locale={locale}><li className={(pathname === "/gallery" || pathname === "/gallery/[id]") ? "navactive" : ""}>{t("gallery")}</li></Link>
                            <Link href='/contact' locale={locale}><li className={pathname === "/contact" ? "navactive" : ""}>{t("contact")}</li></Link>
                        </ul>

                    </nav>
                    <div className='drosh'>
                        {/* <Image src={Search} alt="Search" /> */}
                        {/* <Select styles={customStyles} options={options} isSearchable={false} value={options[0]} onChange={(e) => router.push({ pathname, query }, asPath, { locale: e.target.value })} /> */}
                        <div className='flags'>
                            {options.filter((e) => e.value === locale).map((i) => (
                                <div onClick={() => setOpen(!open)} key={i.id} ref={flagRef} className='hov'>
                                    {i.image}
                                </div>
                            ))}

                            {open && <div className='flagsabs'>
                                {options.map((i) => {
                                    if (i.value !== locale) {
                                        return <div onClick={() => {
                                            router.push({ pathname, query }, asPath, { locale: i.value, scroll: false })
                                            setOpen(false)
                                        }} className="oneflag hov" key={i.id}>
                                            {i.image}
                                        </div>
                                    }
                                })}

                            </div>}

                            <Modal middle abs text={t("register")} isOpen={isOpen} setIsOpen={setIsOpen} butt>
                                <SchoolForm other t={t} />
                            </Modal>

                        </div>
                        <div className="burger">
                            <input type="checkbox" id="burger-toggle" onChange={(e) => setChecked(e.target.checked)} className="burger-toggle" />
                            <label htmlFor="burger-toggle" className="burger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                    </div>
                    <div className={checked ? 'burger-menu-active' : 'burger-menu'}>
                        <nav className='nav-tel'>
                            <ul className='telephone'>
                                <Link href='/services' locale={locale} ><li className={pathname === "/services" ? "navactivetel" : ""}>{t("services")}</li></Link>
                                <Link href='/course' locale={locale}><li className={pathname === "/course" ? "navactivetel" : ""}>{t("course")}</li></Link>
                                <Link href='/gallery' locale={locale}><li className={pathname === "/gallery" ? "navactivetel" : ""}>{t("gallery")}</li></Link>
                                <Link href='/contact' locale={locale}><li className={pathname === "/contact" ? "navactivetel" : ""}>{t("contact")}</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    );
}

export default appWithTranslation(Header);
