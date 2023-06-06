import { useState, Fragment, useEffect } from 'react';




const Carousel = ({ children, one, center }) => {
    const [position, setPosition] = useState(0);

    const handleClickPrev = () => {
        if (position === 0) {
            if (one) {
                setPosition(children.length - 1);
            }
            else {
                setPosition(Math.floor((children.length - 1) / 3));
            }
        } else {
            setPosition(prev => prev - 1);
        }

    };

    useEffect(() => {
        if (center) {
            const asd = setTimeout(() => {
                if (one) {
                    if (position === children.length - 1) {
                        console.log(position, 'qqqqqqqqqqqq')
                        setPosition(0);
                    } else {
                        console.log(position, 'ppppppppppp')

                        setPosition(prev => prev + 1);
                    }
                } else {
                    if (position === Math.floor((children.length - 1) / 3)) {
                        setPosition(0);
                    } else {
                        setPosition(prev => prev + 1);
                    }
                }
            }, 2500)

            return () => {
                clearTimeout(asd)
            }
        }
    },)

    const handleClickNext = () => {
        if (one) {
            if (position === children.length - 1) {
                setPosition(0);
            } else {
                setPosition(prev => prev + 1);
            }
        } else {
            if (position === Math.floor((children.length - 1) / 3)) {
                setPosition(0);
            } else {
                setPosition(prev => prev + 1);
            }
        }

    };

    return (
        <>
            <div className={one ? "carousel-one" : "carousel"}>
                <div className="carousel-items" style={center ? { transform: `translateX(-${position * 100}%)` } : { transform: `translateX(-${position * 100}%)` }}>

                    {children?.map((item, k) => (
                        <Fragment key={k}>
                            {item}
                        </Fragment>
                    ))}
                </div>
            </div>
            {!center && children.length > 3 && <div className={one ? "carousel-prev carousel-not-hidden" : "carousel-prev"} onClick={handleClickPrev}>
                <i className="arrow arrow-left "></i>
            </div>}
            {!center && children.length > 3 && <div className={one ? "carousel-next carousel-not-hidden" : "carousel-next"} onClick={handleClickNext}>
                <i className="arrow arrow-right"></i>
            </div>}
        </>
    );
};

export default Carousel;
