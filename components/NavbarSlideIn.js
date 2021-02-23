import { useContext } from 'react'
import { NavContext } from '@/lib/context'
import { CSSTransition } from 'react-transition-group'
import style from '@/styles/NavbarSlideIn.module.sass'
import Link from 'next/link'

export default function NavbarSlideIn({}) {
    const { isOpen, toggleSlideInMenu } = useContext(NavContext)
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
                    <Link href="/">
                        <a className={style.navLink}>About us</a>
                    </Link>
                </div>
            </nav>
        </CSSTransition>
    )
}
