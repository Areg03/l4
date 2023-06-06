import Carousel from '@/components/slider';
import TeamItem from '@/components/teamItem';
import { Fragment } from 'react';

const Team = ({ t, data, lang }) => {


    return (
        <section className="container">
            <h3 className="light linebox"><span className="line"></span>{t("team")}</h3>
            <Carousel>
                {data?.map((i, key) => (
                    <Fragment key={key} >
                        <TeamItem name={i[`name_${lang}`]} description={i[`position_${lang}`]} image={i.image} />
                    </Fragment>
                ))}
            </Carousel>
        </section>
    );
}

export default Team;