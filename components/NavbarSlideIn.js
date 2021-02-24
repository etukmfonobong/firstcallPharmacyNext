import { useContext } from 'react'
import { NavContext } from '@/lib/context'
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import style from '@/styles/NavbarSlideIn.module.sass'
import Link from 'next/link'

export default function NavbarSlideIn({}) {
    const { isOpen, toggleSlideInMenu } = useContext(NavContext)
    const router = useRouter()

    const handleClick = (page) => {
        toggleSlideInMenu()
        router.push(page)
    }
    return (
        <CSSTransition
            in={isOpen === true}
            timeout={500}
            classNames={{
                enter: style.slideInEnter,
                enterActive: style.slideInEnterActive,
                exit: style.slideInExit,
                exitActive: style.slideInExitActive
            }}
            unmountOnExit
        >
            <nav id="slideInMenu" className="bg-gradient-to-r from-blue-700 to-blue-600 h-screen w-full px-12 py-16 md:px-16 md:py-24 fixed z-30">
                <div className="flex flex-col">
                    <a
                        className={style.navLink}
                        onClick={(e) => {
                            e.preventDefault()
                            handleClick('/')
                        }}
                    >
                        Home
                    </a>

                    <a
                        className={style.navLink}
                        onClick={(e) => {
                            e.preventDefault()
                            handleClick('/blog')
                        }}
                    >
                        Blog
                    </a>

                    <a
                        className={style.navLink}
                        onClick={(e) => {
                            e.preventDefault()
                            handleClick('/faq')
                        }}
                    >
                        F.A.Q
                    </a>

                    <a
                        className={style.navLink}
                        onClick={(e) => {
                            e.preventDefault()
                            handleClick('/shop')
                        }}
                    >
                        Shop
                    </a>

                    <a
                        className={style.navLink}
                        onClick={(e) => {
                            e.preventDefault()
                            handleClick('/about-us')
                        }}
                    >
                        About us
                    </a>
                </div>
            </nav>
        </CSSTransition>
    )
}
