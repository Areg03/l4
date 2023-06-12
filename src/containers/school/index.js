import Image from 'next/image';
import vid from '../../../public/videoplayback.mp4'
import { pictureKey } from '@/store/key';
import { useRouter } from 'next/router';

const School = ({ data }) => {

    const { locale } = useRouter()
    return (
        <section className="container">
            <h2 style={{ color: 'red' }}>{data[0][`title_${locale}`]}</h2>
            <div className="school">
                <p style={{ whiteSpace: 'pre-wrap' }}>
                    <Image src={pictureKey + data[0].image} width={500} height={300} alt='school' />{data[0][`description_${locale}`]} </p>
                {/* <video autoPlay loop muted >
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>
        </section>
    );
}

export default School;