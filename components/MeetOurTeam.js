import person1 from "@/public/assets/images/persons/person-1.jpg"
import person2 from "@/public/assets/images/persons/person-2.jpg"
import person4 from "@/public/assets/images/persons/person-4.jpg"
import person5 from "@/public/assets/images/persons/person-5.jpg"
import person6 from "@/public/assets/images/persons/person-6.jpg"
import person7 from "@/public/assets/images/persons/person-7.jpg"
import style from "@/styles/MeetOurTeam.module.scss"
import Image from "next/image"

export default function MeetOurTeam({}) {
		const persons = [person1, person2, person4, person5, person6, person7]

		return (
				<>
						{/*meet our team start*/}
						<div className="flex flex-col justify-center items-center py-14 px-5 bg-gray-700">
								<p className="z-10 mt-3 font-bold text-white text-gray-400 uppercase opacity-80">MEET OUR TEAM</p>
								<h2 className="z-10 mt-5 text-4xl font-bold leading-tight text-center text-white">A professional & friendly care provider</h2>
								<p className="z-10 mt-7 max-w-3xl text-base font-semibold text-center text-gray-400 opacity-80 leading-leading-relaxed">
										HealSoul Health Services provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no
										cost for prioritized patients.
								</p>
								<div className={style.meetOurTeamGrid}>
										{/*employee pictures*/}
										{persons.map((person, index) => (
												<div className="relative w-full h-52 bg-red-200" key={index}>
														<Image alt="profile" className="object-cover object-center w-full h-full" src={person} layout={"fill"}/>
												</div>
										))}
								</div>
						</div>
						{/*meet our team end*/}

						{/*call us banner start*/}
						<div className="p-5 bg-pink-600">
								<p className="mx-auto max-w-3xl text-sm font-semibold leading-relaxed text-center text-white opacity-80">
										We’re here for you. Call us at 1-877-632-6789 or
										<span className="underline">request an appointment online.</span>
								</p>
						</div>
						{/*call us banner end*/}
				</>
		)
}
