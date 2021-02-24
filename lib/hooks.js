import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import {useEffect, useState} from "react"

export function useNavContext() {
		// set slideInMenu state
		const [isOpen, setIsOpen] = useState(false)

		let slideInMenu = null
		// get slide-in menu
		useEffect(() => {
				slideInMenu = document.querySelector("#__next")
		}, [isOpen])

		//toggleSlideInMenu
		const toggleSlideInMenu = () => {
				if (isOpen === true) {
						setIsOpen(false)
						enableBodyScroll(slideInMenu)
				} else {
						setIsOpen(true)
						disableBodyScroll(slideInMenu)
				}
		}

		return {isOpen, toggleSlideInMenu}
}
