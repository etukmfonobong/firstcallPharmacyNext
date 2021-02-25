import FaqCard from "@/components/FaqCard.js"
import MetaTags from "@/components/MetaTags.js"

export default function FAQ({}) {
		const faqs = [
				{
						id: 1,
						title: "How do I get health care when I need it?",
						body:
								"You can visit HealSoul Health Services during office hours. Appointments are appreciated, but walk-ins are welcome as well. If possible, please make a call ahead before visiting. This will allow us to arrange services and reduce your waiting time. Hours are Monday through Friday, 9:00 a.m. to 4:30 p.m."
				},
				{
						id: 2,
						title: "Is there coverage for the elderly and juveniles?",
						body:
								"Upon request, HealSoul Health Services staff will provide instructions for individuals whose medical conditions need special attention and additional certificates. Normally, we provide up-to-80%-off or free health care for these cases with specific diseases and illnesses specified by the law. "
				},
				{
						id: 3,
						title: "What if I require lab tests to be performed? ",
						body:
								"HealSoul Health Services provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no cost for prioritized patients or at 70% for people with an insurance. Additional testing can be ordered off site; those costs are the responsibility of the enquirers."
				},
				{
						id: 4,
						title: "Are there Family Planning Services available?",
						body:
								"Yes. Reproductive services are always available at HealSoul Health Services. Additionally, we also have an agreement in which all enrolled clients will only have to pay a nominal fee for the first visit for checkups. They will be exempt from this fee from their second visit. "
				}
		]

		return (
				<main className="bg-gray-100 pageStyle">
						<MetaTags
								title={"F.A.Q | Firstcall Pharmacy"}
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

						{/*FAQ header section start*/}
						<div className="flex relative justify-start items-center py-10 px-5 bg-center bg-cover md:py-28 md:px-28 bg-faq-hero">
								{/*header*/}
								<h2 className="z-10 mt-5 text-2xl font-bold leading-tight text-center text-white md:text-4xl">Frequent Questions</h2>
						</div>
						{/*FAQ header section end*/}

						{/*	frequent questions start	*/}
						{/*	header wrapper*/}
						<div className="flex flex-col justify-between items-center pt-10 pb-5 mb-5 lg:pt-16 lg:pb-10">
								{/*icon*/}
								<svg
										className="w-12 h-12 text-red-600 stroke-current"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
								>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
										/>
								</svg>
								{/*header*/}
								<h2 className="z-10 mt-5 text-lg font-bold leading-tight text-center text-gray-800 md:text-xl md:text-4xl">Frequent Questions</h2>
								{/*sub header*/}
								<p className="z-10 mx-2 mt-5 max-w-3xl text-sm font-semibold text-center text-gray-500 md:text-base leading-leading-relaxed">
										We offer reasonable pricing health care plans, insurance packages based on financial conditions of clients.
								</p>
						</div>
						{/*	header wrapper*/}

						{/*questions and answers start*/}
						<div className="flex flex-col justify-between items-stretch py-5 px-5 md:py-16 md:px-20 lg:px-44 xl:px-56 2xl:px-72">
								{faqs.map((faq) => (
										<FaqCard key={faq.id} id={faq.id} title={faq.title} body={faq.body}/>
								))}
						</div>
						{/*questions and answers end*/}

						{/*	frequent questions end	*/}

						<div className="flex flex-col justify-between items-center py-10 px-5 md:flex-row md:py-20 md:px-20 lg:px-32 xl:px-48 2xl:px-60 bg-deep-blue">
								<h2 className="mb-5 text-lg font-bold text-white md:text-2xl md:mb-0 lg:text-3xl xl:text-4xl">Schedule your appointment today!</h2>
								<button className="py-3 px-5 text-xs font-semibold text-gray-800 bg-white lg:text-sm hover:bg-dull-blue hover:text-white">
										Contact Now
								</button>
						</div>
				</main>
		)
}
