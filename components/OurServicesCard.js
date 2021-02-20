import Image from 'next/image';
import style from '@/styles/OurServicesCard.module.scss';

export default function OurServicesCard({ header, subHeader, icon }) {
    return (
        // card wrapper
        <div className={style.cardWrapper}>
            {/*card svg icon*/}
            <Image src={icon} width={'80'} height={'80'} />

            {/*card header*/}
            <h2 className={style.cardHeader}>{header}</h2>
            {/*card body*/}
            <p className={style.cardBody}>{subHeader}</p>
            {/*card button*/}
            <div className={style.cardButton}>Learn more</div>
        </div>
    );
}
