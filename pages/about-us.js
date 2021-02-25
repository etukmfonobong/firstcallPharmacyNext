import MeetOurTeam from "@/components/MeetOurTeam.js"
import MetaTags from "@/components/MetaTags.js"
import community1 from "@/public/assets/images/community/community1.png"
import community2 from "@/public/assets/images/community/community2.png"
import community3 from "@/public/assets/images/community/community3.png"
import Image from "next/image"
import CountUp from "react-countup"

export default function AboutUs({}) {
		const points = [
				{
						icon: community1,
						num: 6500,
						title: "Worldwide Branches",
						text: "Bring best quality health services to ones who are in need worldwide."
				},
				{icon: community2, num: 1000, title: "Hospital Formed", text: "Bring to the table win-win strategies to ensure proactive domination."},
				{icon: community3, num: 300, title: "Local Partners", text: "We established cooperation with plenty of globally famous partners."}
		]

		return (
				<main className="pageStyle">
						{/*meta tags*/}
						<MetaTags
								title={"About us | Firstcall Pharmacy"}
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

						{/*about us header section start*/}
						<div className="flex relative flex-col justify-center items-center py-56 px-5 bg-center bg-cover md:px-28 bg-about-hero">
								{/*gradient*/}
								<div className="absolute inset-0 bg-gradient-to-r opacity-20 from-deep-blue to-deep-blue"/>
								{/*sub header*/}
								<p className="z-10 max-w-3xl text-lg font-semibold text-center text-white leading-leading-relaxed">
										We do whatever it takes to bring you peace
								</p>
								{/*header*/}
								<h2 className="z-10 mt-5 text-4xl font-bold leading-tight text-center text-white md:text-6xl">Changing home care for the better.</h2>
						</div>
						{/*about us header section end*/}

						{/* Building a healthy community start */}
						<div className="relative py-20 px-5 md:px-28">
								<div className="flex flex-col justify-center items-center">
										{/*header*/}
										<h2 className="z-10 mt-5 text-3xl font-bold leading-loose text-center text-gray-800 md:text-4xl">
												Building a healthy community for all.
										</h2>
										{/*sub header*/}
										<p className="z-10 mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-center text-gray-500">
												Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community.
										</p>
								</div>

								{/* Grid */}
								<div className="grid grid-cols-1 mt-10 lg:grid-cols-3 xl:gap-3">
										{points.map((point, index) => (
												<div
														key={index}
														className="flex relative flex-col justify-between items-center p-5 mx-10 mt-5 text-center lg:mt-0 lg:mx-0 xl:mx-10 fhd:mx-20"
												>
														<div className="relative p-5 mb-10 w-full h-20">
																<Image className="object-contain object-center mx-auto" src={point.icon} layout={"fill"} alt={point.title}/>
														</div>
														<CountUp className="p-3 text-5xl font-bold text-red-500" duration={5} delay={1} end={point.num} suffix={"+"}/>
														<h2 className="p-2 text-lg font-bold text-gray-700 xl:text-2xl">{point.title}</h2>
														<p className="p-2 text-sm font-normal text-gray-500">{point.text}</p>
												</div>
										))}
								</div>
						</div>
						{/* Building a healthy community end */}

						{/* Discover yourself start */}
						<div className="flex relative justify-center items-center py-20 px-5 bg-center bg-cover md:px-28 lg:py-32 xl:py-56 bg-about-two lg:justify-end">
								<div className="p-10 bg-white 2xl:p-16">
										{/*header*/}
										<h2 className="z-10 mt-5 text-2xl font-bold tracking-wide leading-loose text-center text-gray-800 md:text-3xl">
												Building a healthy <br/> community for all
										</h2>
										<div className="flex flex-col justify-between items-start mt-7 text-sm text-gray-500">
												<p className="flex items-center my-1">
														<svg
																className="mr-2 w-4 h-4 text-red-600 stroke-current"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
														>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
														</svg>
														Monthly health check-ups
												</p>
												<p className="flex items-center my-1">
														<svg
																className="mr-2 w-4 h-4 text-red-600 stroke-current"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
														>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
														</svg>
														Early illness diagnoses
												</p>
												<p className="flex items-center my-1">
														<svg
																className="mr-2 w-4 h-4 text-red-600 stroke-current"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
														>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
														</svg>
														Free diet consultation
												</p>
												<p className="flex items-center my-1">
														<svg
																className="mr-2 w-4 h-4 text-red-600 stroke-current"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
														>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
														</svg>
														Custom exercise plans
												</p>
										</div>
								</div>
						</div>
						{/* Discover yourself end */}

						<MeetOurTeam/>
				</main>
		)
}
