import Carousel from '@/components/slider';
import TeamItem from '@/components/teamItem';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Team = ({ data, }) => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()

    return (
        <section className="container">
            <h3 className="light linebox"><span className="line"></span>{t("team")}</h3>
            <Carousel>
                {data?.map((i, key) => (
                    <Fragment key={key} >
                        <TeamItem name={i[`name_${locale}`]} description={i[`position_${locale}`]} image={i.image} />
                    </Fragment>
                ))}
            </Carousel>
        </section>
    );
}

export default Team;