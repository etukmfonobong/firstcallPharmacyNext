import {NavContext} from "@/lib/context"
import style from "@/styles/Navbar.module.scss"
import Link from "next/link"
import {useContext} from "react"

export default function Navbar({}) {
		const {isOpen, toggleSlideInMenu} = useContext(NavContext)

		return (
				<nav className="flex sticky top-0 z-50 justify-between items-center py-5 px-4 bg-gray-50 shadow font-poppins md:px-10 xl:px-14">
						{/* firstcall logo */}
						<div>
								<h2>
										<span className={"text-2xl font-bold text-deep-blue"}>Firstcall</span> <span className={"text-xl text-gray-400"}>Pharmacy</span>
								</h2>
						</div>

						{/* main nav links */}
						<div className="hidden lg:block">
								<Link href="/">
										<a className={style.navLink}>Home</a>
								</Link>
								<Link href="/">
										<a className={style.navLink}>Blog</a>
								</Link>
								<Link href="/">
										<a className={style.navLink}>F.A.Q</a>
								</Link>
								<Link href="/">
										<a className={style.navLink}>Shop</a>
								</Link>
								<Link href="/about-us">
										<a className={style.navLink}>About us</a>
								</Link>
						</div>

						{/* others */}
						<div className="flex items-center">
								{/* phone icon */}
								<svg
										className="hidden w-12 h-12 text-red-600 stroke-current stroke-1 lg:block"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
								>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
								</svg>

								{/* call us for any question */}
								<div className="flex hidden flex-col justify-between self-stretch mr-12 ml-2 lg:block">
										<p className="text-xs text-gray-600">call us for any question</p>
										<Link href="/">
												<a className="text-sm font-semibold text-gray-700">+234 903 0000 857</a>
										</Link>
								</div>

								{/* cart icon */}
								<svg
										className="w-6 h-6 text-gray-600 cursor-pointer stroke-current text hover:text-red-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
								>
										<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
								</svg>

								{/* slide in menu toggle */}
								<div className="ml-8 cursor-pointer lg:hidden" onClick={toggleSlideInMenu}>
										{!isOpen && (
												<svg
														className="w-6 h-6 text-gray-600 stroke-current hover:text-deep-blue"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
												>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
												</svg>
										)}
										{isOpen && (
												<svg
														className="w-6 h-6 text-gray-600 stroke-current hover:text-deep-blue"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
												>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
												</svg>
										)}
								</div>
						</div>
				</nav>
		)
}
