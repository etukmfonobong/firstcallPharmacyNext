import style from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import OurServicesCard from '@/components/OurServicesCard';
import drugsIcon from '@/public/assets/icons/drug.svg';
import heartIcon from '@/public/assets/icons/hand-and-heart.svg';
import microscopeIcon from '@/public/assets/icons/microscope.svg';
import person1 from '@/public/assets/images/persons/person-1.jpg';
import person2 from '@/public/assets/images/persons/person-2.jpg';
import person3 from '@/public/assets/images/persons/person-3.jpg';
import person4 from '@/public/assets/images/persons/person-4.jpg';
import person5 from '@/public/assets/images/persons/person-5.jpg';
import person6 from '@/public/assets/images/persons/person-6.jpg';
import person7 from '@/public/assets/images/persons/person-7.jpg';
import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';

export default function Home({}) {
    const services = [
        {
            icon: drugsIcon,
            title: 'Daily Home Care',
            body:
                'We send a doctor to visit the patient at home to diagnose and treat the illnesses. He or …'
        },
        {
            icon: heartIcon,
            title: 'Hourly Home Care',
            body:
                'The most common form of home health care, which depends on the individual needs. Through …'
        },
        {
            icon: microscopeIcon,
            title: 'Specialized Care',
            body:
                'Physical, mental, occupational therapy provides patients with help on relearning how to …'
        }
    ];

    const persons = [person1, person2, person4, person5, person6, person7];

    const process = [person3, person3, person3, person3];

    return (
        <main className="pageStyle">
            {/*meta tags*/}
            <MetaTags
                title={'Welcome | Firstcall Pharmacy'}
                description={
                    'Firstcall Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs. The practice of pharmacy requires excellent knowledge of drugs, their mechanism of action, side effects, interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process. Some specialties of pharmacists, such as that of clinical pharmacists, require other skills, e.g. knowledge about the acquisition and evaluation of physical and laboratory data.'
                }
                image={'/seo-image-large.png'}
            />

            {/*hero section start*/}
            <section className={style.heroWrapper}>
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
                <div className={style.aboutUsImageWrapper}>
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
                    <h2 className={style.aboutUsHeadlineSubHeader}>About Us</h2>
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

            {/*our services section start*/}
            <div className={style.ourServicesSectionWrapper}>
                {/*our services headline wrapper*/}
                <div className={style.ourServicesHeadlineWrapper}>
                    {/*our services headline sub heading*/}
                    <p className={style.ourServicesHeadlineSubHeader}>
                        Our Services
                    </p>
                    {/*our services headline heading*/}
                    <h2 className={style.ourServicesHeadlineHeader}>
                        Managed healthcare services
                    </h2>
                    {/*our services headline body*/}
                    <p className={style.ourServicesHeadlineBody}>
                        Upon request, HealSoul Health Services staff will
                        provide instructions for individuals whose medical
                        conditions need special attention and additional
                        certificates.
                    </p>
                </div>

                {/*our services grid*/}
                <div className={style.ourServicesGridWrapper}>
                    {/*cards*/}
                    {services &&
                        services.map((service) => (
                            <OurServicesCard
                                key={service}
                                icon={service.icon}
                                header={service.title}
                                subHeader={service.body}
                            />
                        ))}
                </div>

                {/*our services call to action*/}
                <p className={style.ourServicesCta}>
                    Don’t hesitate, contact us for better help and services.{' '}
                    <span className="text-red-400 underline cursor-pointer">
                        Explore all services
                    </span>
                </p>
            </div>
            {/*our services section end*/}

            {/*meet our team start*/}
            <div className="flex flex-col justify-center items-center py-14 px-5 bg-gray-700">
                <p className="font-bold text-white opacity-80 text-gray-400 mt-3 z-10 uppercase">
                    MEET OUR TEAM
                </p>
                <h2 className="text-4xl font-bold text-center  text-white leading-tight mt-5 z-10">
                    A professional & friendly care provider
                </h2>
                <p className="text-center font-semibold text-base text-gray-400 opacity-80 mt-7 leading-leading-relaxed z-10 max-w-3xl">
                    HealSoul Health Services provide patients with choices to
                    ask for the conducting and analyzing of several lab tests
                    on-site at no cost for prioritized patients.
                </p>
                <div className={style.meetOurTeamGrid}>
                    {/*employee pictures*/}
                    {persons.map((person) => (
                        <div
                            className="h-52 w-full relative bg-red-200"
                            key={person}
                        >
                            <Image
                                alt="profile"
                                className="w-full h-full object-cover object-center"
                                src={person}
                                layout={'fill'}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/*meet our team footer*/}
            <div className="p-5 bg-pink-600">
                <p className="text-center text-white mx-auto font-semibold text-sm opacity-80 leading-relaxed max-w-3xl">
                    We’re here for you. Call us at 1-877-632-6789 or
                    <span className="underline">
                        request an appointment online.
                    </span>
                </p>
            </div>
            {/*meet our team end*/}

            {/*simple process start*/}
            <div className="flex flex-col justify-center items-center py-14 px-5 bg-white">
                <p className="font-bold text-white opacity-80 text-gray-500 mt-3 z-10 uppercase">
                    SIMPLE PROCESS
                </p>
                <h2 className="text-4xl font-bold text-center  text-gray-700 leading-tight mt-5 z-10">
                    How it helps you stay strong
                </h2>
                <p className="text-center font-semibold text-base text-gray-500 opacity-80 mt-7 leading-leading-relaxed z-10 max-w-3xl">
                    We have freelance doctors and physicists who are available
                    at all time to deliver on-demand diagnoses and other health
                    related services.
                </p>
                {/*process grid*/}
                <div className="w-5/6 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 bg-line-bg bg-contain bg-no-repeat bg-top">
                    {process.map((p) => (
                        <div
                            className="py-5 px-12 w-full flex flex-col items-center justify-center"
                            key={p}
                        >
                            <img
                                className="w-44 h-44 object-cover object-top shadow-2xl rounded-full"
                                src={p}
                                alt={'process'}
                            />
                            <h2 className="text-2xl mt-10 font-bold text-center text-gray-700 leading-tight mt-5 z-10">
                                Application
                            </h2>
                            <p className="text-center font-semibold text-sm text-gray-500 opacity-80 mt-7 leading-relaxed z-10 max-w-3xl">
                                Applicants can submit all health-related
                                documents at our reception desk.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/*simple process end*/}

            {/*cta section start*/}
            <div className="relative md:px-20 px-5 py-44 bg-banner-bg bg-cover bg-center flex flex-col items-center justify-center">
                {/*gradient*/}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-teal to-dark-teal opacity-50" />
                {/*sub header*/}
                <p className="text-center font-semibold text-lg text-white leading-leading-relaxed z-10 max-w-3xl">
                    Stay healthy and strong to enjoy life
                </p>
                {/*header*/}
                <h2 className="md:text-5xl text-4xl font-bold text-center  text-white leading-tight mt-5 z-10">
                    Believe. Consolation. Reality.
                </h2>
                {/*button*/}
                <div className="font-bold text-center bg-white hover:bg-red-500 text-dark-teal hover:text-white mt-7 text-gray-500 text-sm z-10 px-5 py-3 cursor-pointer hover:shadow">
                    <Link href={'/'}>Find A Caregiver</Link>
                </div>
            </div>
            {/*cta section end*/}

            {/*footer*/}
            <Footer />
        </main>
    );
}
