import { useEffect, useState } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export function useNavContext() {
    // set slideInMenu state
    const [isOpen, setIsOpen] = useState(false)

    let slideInMenu = null
    // get slidein menu
    useEffect(() => {
        slideInMenu = document.querySelector('#__next')
    }, [isOpen])

    //toggleSlideInMenu
    const toggleSlideInMenu = () => {
        if (isOpen === true) {
            setIsOpen(false)
            //     clearAllBodyScrollLocks()
            enableBodyScroll(slideInMenu)
        } else {
            setIsOpen(true)
            disableBodyScroll(slideInMenu)
        }
    }

    return { isOpen, toggleSlideInMenu }
}
