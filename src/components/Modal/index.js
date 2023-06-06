import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Close from "../../../public/images/close.png"

const Modal = ({ children, text, middle, isOpen, setIsOpen, butt, red, abs }) => {



    const [isBlackBg, setIsBlackBg] = useState(false);
    const modalRef = useRef();

    const handleOpen = () => {

        setIsOpen(true);

        setTimeout(() => {
            setIsBlackBg(true);
        }, 10);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsBlackBg(false)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {

            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsBlackBg(false)
                document.body.classList.remove('modal-open');
                const header = document.getElementsByClassName('all-header')[0]
                header.classList.remove('modal-open')
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                const header = document.getElementsByClassName('all-header')[0]
                setIsOpen(false);
                setIsBlackBg(false)
                document.body.classList.remove('modal-open');
                header.classList.remove('modal-open')
            }
        };
        if (isOpen) {
            setTimeout(() => {
                setIsBlackBg(true);
            }, 10);
            document.body.classList.add('modal-open');
            const header = document.getElementsByClassName('all-header')[0]
            header.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open');
            const header = document.getElementsByClassName('all-header')[0]
            header.classList.remove('modal-open')
        }
        if (isOpen) {

            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            setIsBlackBg(false)
            const header = document.getElementsByClassName('all-header')[0]
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('modal-open');
            header.classList.remove('modal-open')
        };
    }, [isOpen]);

    return (
        <>
            {butt && <button onClick={(e) => {
                e.stopPropagation()
                handleOpen()
            }} style={abs && { position: 'absolute', top: 20, right: 80 }} >{text}</button>}
            {isOpen && (
                <div className={`modal${isBlackBg ? ' black-bg' : ' white-bg'}`}  >
                    <div className={middle ? "modal-content middle" : "modal-content"} ref={modalRef}>
                        <span className="close" onClickCapture={handleClose} style={red && { backgroundColor: 'red' }}>
                            <Image src={Close} width={12} height={12} loading='lazy' alt='close' />
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
