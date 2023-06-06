import Carousel from '@/components/slider';
import TeamItem from '@/components/teamItem';
import { Fragment } from 'react';
import AboutImg from '../../../public/images/about.png'
import Noor from '../../../public/images/noor.png'
const Partner = ({ t, lang, data }) => {

    return (
        <section className="container">
            <h3 className="light linebox"><span className="line"></span>{t("partner")}</h3>
            <Carousel>
                {data?.map((i, k) => (
                    <Fragment key={k} >
                        <TeamItem name={i[`title_${lang}`]} image={i.image} />
                    </Fragment>
                ))}
            </Carousel>
        </section>
    );
}

export default Partner;