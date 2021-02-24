import MeetOurTeam from "@/components/MeetOurTeam.js"
import MetaTags from "@/components/MetaTags"
import OurServicesCard from "@/components/OurServicesCard"
import drugsIcon from "@/public/assets/icons/drug.svg"
import heartIcon from "@/public/assets/icons/hand-and-heart.svg"
import microscopeIcon from "@/public/assets/icons/microscope.svg"
import process1 from "@/public/assets/images/process1.jpg"
import process2 from "@/public/assets/images/process2.jpg"
import process3 from "@/public/assets/images/process3.jpg"
import process4 from "@/public/assets/images/process4.jpg"
import style from "@/styles/Home.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Home({}) {
		const services = [
				{
						icon: drugsIcon,
						title: "Daily Home Care",
						body: "We send a doctor to visit the patient at home to diagnose and treat the illnesses. He or …"
				},
				{
						icon: heartIcon,
						title: "Hourly Home Care",
						body: "The most common form of home health care, which depends on the individual needs. Through …"
				},
				{
						icon: microscopeIcon,
						title: "Specialized Care",
						body: "Physical, mental, occupational therapy provides patients with help on relearning how to …"
				}
		]

		const processes = [process1, process2, process3, process4]

		return (
				<main className="pageStyle">
						{/*meta tags*/}
						<MetaTags
								title={"Welcome | Firstcall Pharmacy"}
								description={
										"Firstcall Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, " +
										"production, disposal, safe and effective use, and control of medications and drugs. " +
										"The practice of pharmacy requires excellent knowledge of drugs, their mechanism of action, side effects, " +
										"interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process. " +
										"Some specialties of pharmacists, such as that of clinical pharmacists, require other skills, e.g. knowledge about the acquisition and " +
										"evaluation of physical and laboratory data."
								}
								image={"https://firstcall-pharmacy-next.vercel.app/seo-image-large.png"}
						/>

						{/*hero section start*/}
						<section className={style.heroWrapper}>
								{/*gradient overlay*/}
								<div className={style.gradient}/>
								{/*h2 and paragraph*/}
								<div className={style.headlineWrapper}>
										<h2 className={style.headlineHeader}>Dedicated Medicare</h2>
										<p className={style.headlineSubHeader}>Because your health matters most</p>
								</div>
						</section>
						{/*hero section end*/}

						{/*about us section start*/}
						<section className={style.aboutUsSectionWrapper}>
								{/*about us image||left grid*/}
								<div className={style.aboutUsImageWrapper}>
										<Image className={style.aboutUsImage} src={"/assets/images/about-us-bg.png"} alt="our dedication image" layout={"fill"}/>
								</div>
								{/*about us headline||right grid*/}
								{/*about us headline wrapper*/}
								<div className={style.aboutUsHeadlineWrapper}>
										{/*about us sub header*/}
										<h2 className={style.aboutUsHeadlineSubHeader}>About Us</h2>
										{/*about us header*/}
										<h2 className={style.aboutUsHeadlineHeader}>We established cooperation with various global partners.</h2>
										{/*about us headline body*/}
										<p className={style.aboutUsHeadlineBody}>
												We've combined a new kind of doctor's experience that blends the highest level of health care with exceptional service. People
												can enroll membership by paying only an annual membership fee of just $129.
										</p>
								</div>
						</section>
						{/*about us section end*/}

						{/*our services section start*/}
						<div className={style.ourServicesSectionWrapper}>
								{/*our services headline wrapper*/}
								<div className={style.ourServicesHeadlineWrapper}>
										{/*our services headline sub heading*/}
										<p className={style.ourServicesHeadlineSubHeader}>Our Services</p>
										{/*our services headline heading*/}
										<h2 className={style.ourServicesHeadlineHeader}>Managed healthcare services</h2>
										{/*our services headline body*/}
										<p className={style.ourServicesHeadlineBody}>
												Upon request, HealSoul Health Services staff will provide instructions for individuals whose medical conditions need special
												attention and additional certificates.
										</p>
								</div>

								{/*our services grid*/}
								<div className={style.ourServicesGridWrapper}>
										{/*cards*/}
										{services &&
										services.map((service, index) => (
												<OurServicesCard key={index} icon={service.icon} header={service.title} subHeader={service.body}/>
										))}
								</div>

								{/*our services call to action*/}
								<p className={style.ourServicesCta}>
										Don’t hesitate, contact us for better help and services.{" "}
										<span className="text-red-400 underline cursor-pointer">Explore all services</span>
								</p>
						</div>
						{/*our services section end*/}

						<MeetOurTeam/>

						{/*simple process start*/}
						<div className="flex flex-col justify-center items-center py-14 px-5 bg-white">
								<p className="z-10 mt-3 font-bold text-white text-gray-500 uppercase opacity-80">SIMPLE PROCESS</p>
								<h2 className="z-10 mt-5 text-4xl font-bold leading-tight text-center text-gray-700">How it helps you stay strong</h2>
								<p className="z-10 mt-7 max-w-3xl text-base font-semibold text-center text-gray-500 opacity-80 leading-leading-relaxed">
										We have freelance doctors and physicists who are available at all time to deliver on-demand diagnoses and other health related
										services.
								</p>
								{/*process grid*/}
								<div className="grid grid-cols-1 gap-2 my-10 mx-auto w-5/6 bg-top bg-no-repeat bg-contain md:grid-cols-2 xl:grid-cols-4 bg-line-bg">
										{processes.map((process, index) => (
												<div className="flex flex-col justify-center items-center py-5 px-12" key={index}>
														<Image
																className="object-cover object-center rounded-full shadow"
																src={process}
																alt={"process"}
																height={200}
																width={200}
														/>
														<h2 className="z-10 mt-5 mt-10 text-2xl font-bold leading-tight text-center text-gray-700">Application</h2>
														<p className="z-10 mt-7 max-w-3xl text-sm font-semibold leading-relaxed text-center text-gray-500 opacity-80">
																Applicants can submit all health-related documents at our reception desk.
														</p>
												</div>
										))}
								</div>
						</div>
						{/*simple process end*/}

						{/*cta section start*/}
						<div className="flex relative flex-col justify-center items-center py-44 px-5 bg-center bg-cover md:px-20 bg-banner-bg">
								{/*gradient*/}
								<div className="absolute inset-0 bg-gradient-to-r opacity-50 from-dark-teal to-dark-teal"/>
								{/*sub header*/}
								<p className="z-10 max-w-3xl text-lg font-semibold text-center text-white leading-leading-relaxed">
										Stay healthy and strong to enjoy life
								</p>
								{/*header*/}
								<h2 className="z-10 mt-5 text-4xl font-bold leading-tight text-center text-white md:text-5xl">Believe. Consolation. Reality.</h2>
								{/*button*/}
								<div
										className="z-10 py-3 px-5 mt-7 text-sm font-bold text-center text-gray-500 bg-white cursor-pointer hover:bg-red-500 text-dark-teal hover:text-white hover:shadow">
										<Link href={"/"}>Find A Caregiver</Link>
								</div>
						</div>
						{/*cta section end*/}
				</main>
		)
}
