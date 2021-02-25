import style from "@/styles/FaqCard.module.scss"
import {motion} from "framer-motion"
import {useRef, useState} from "react"

export default function FaqCard(props) {
		const [isOpen, setIsOpen] = useState(false)
		const cardRef = useRef()

		const variantsWrapper = {
				open: {height: `${cardRef.current?.firstChild?.offsetHeight + cardRef.current?.lastChild?.offsetHeight}px`},
				closed: {height: "56px"}
		}

		const variantsContent = {
				open: {opacity: 1, y: 0},
				closed: {opacity: 0, y: "-90%"}
		}

		const toggleCard = () => {
				setIsOpen(!isOpen)
		}

		return (
				<motion.article
						initial={"closed"}
						animate={isOpen ? "open" : "closed"}
						variants={variantsWrapper}
						transition={{duration: 0.3, ease: "linear"}}
						ref={cardRef}
						className={style.faqCard}
				>
						{/*card header start*/}
						<div
								className={`flex justify-start items-center py-3 px-3 md:px-5 transition duration-500 group hover:bg-dull-blue cursor-pointer z-10 ${
										isOpen ? "bg-dull-blue" : "bg-white"
								}`}
								onClick={toggleCard}
						>
								<div
										className={`mx-3 text-xl md:text-2xl font-semibold group-hover:text-white ${isOpen ? "text-white" : "text-red-700"}`}
								>{`0${props.id}.`}</div>

								<div className={`mx-3 text-sm md:text-base lg:text-lg font-normal group-hover:text-white ${isOpen ? "text-white" : "text-gray-800"}`}>
										{props.title}
								</div>

								{/* card toggle */}
								<div className="ml-auto cursor-pointer" onClick={toggleCard}>
										{!isOpen && (
												<svg
														className="w-6 h-6 text-gray-500 stroke-current group-hover:text-white hover:text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
												>
														<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
												</svg>
										)}
										{isOpen && (
												<svg
														className="w-6 h-6 text-gray-500 stroke-current group-hover:text-white hover:text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
												>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
												</svg>
										)}
								</div>
						</div>
						{/*card header end*/}

						{/*card content start*/}
						<motion.div
								initial={"closed"}
								animate={isOpen ? "open" : "closed"}
								variants={variantsContent}
								transition={{duration: 0.3, ease: "linear"}}
								className="py-5 px-5 text-xs font-normal tracking-wide leading-relaxed text-gray-600 bg-white md:p-10 md:text-sm md:font-semibold"
						>
								{props.body}
						</motion.div>
						{/*card content end*/}
				</motion.article>
		)
}
