import style from '@/styles/Home.module.scss';
import Image from 'next/image';

export default function Home({}) {
    return (
        <main className="pageStyle">
            {/*hero section start*/}
            <section className={style.heroWrapper}>
                {/*background image*/}
                <Image
                    className={style.heroImage}
                    src="/assets/images/hero-pattern.jpg"
                    alt="background image"
                    layout={'fill'}
                />
                {/*gradient overlay*/}
                <div className={style.gradient} />
                {/*h2 and paragraph*/}
                <div className={style.headlineWrapper}>
                    <h2 className={style.headlineHeader}>Dedicated Medicare</h2>
                    <p className={style.headlineSubHeader}>
                        Because your health matters most
                    </p>
                </div>
            </section>
            {/*hero section end*/}

            {/*about us section start*/}
            <section className={style.aboutUsSectionWrapper}>
                {/*about us image||left grid*/}
                <div className="h-full w-full relative">
                    <Image
                        className={style.aboutUsImage}
                        src={'/assets/images/about-us-bg.png'}
                        alt="our dedication image"
                        layout={'fill'}
                    />
                </div>
                {/*about us headline||right grid*/}
                {/*about us headline wrapper*/}
                <div className={style.aboutUsHeadlineWrapper}>
                    {/*about us sub header*/}
                    <p className={style.aboutUsHeadlineSubHeader}>About Us</p>
                    {/*about us header*/}
                    <h2 className={style.aboutUsHeadlineHeader}>
                        We established cooperation with various global partners.
                    </h2>
                    {/*about us headline body*/}
                    <p className={style.aboutUsHeadlineBody}>
                        We've combined a new kind of doctor's experience that
                        blends the highest level of health care with exceptional
                        service. People can enroll membership by paying only an
                        annual membership fee of just $129.
                    </p>
                </div>
            </section>
            {/*about us section end*/}
        </main>
    );
}
