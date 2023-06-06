import { pictureKey } from "@/store/key";
import Image from "next/image";

const TeamItem = ({ name, description, image }) => {
    return (
        <div className="carousel-item" >
            <div className="carousel-item-general carousel-item-member">
                <div className="carousel-item-box">
                    <Image src={pictureKey + image} width={300} height={300} loading='lazy' alt='Organization registration' />
                </div>
                <h4>{name}</h4>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

export default TeamItem;