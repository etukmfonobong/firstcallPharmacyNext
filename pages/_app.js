import Navbar from '@/components/Navbar'
import NavbarSlideIn from '@/components/NavbarSlideIn'
import '../styles/globals.css'
import { NavContext } from '@/lib/context'
import { useNavContext } from '@/lib/hooks'

function MyApp({ Component, pageProps }) {
    const navData = useNavContext()

    return (
        <NavContext.Provider value={navData}>
            <Navbar />
            <NavbarSlideIn />
            <Component {...pageProps} />;
        </NavContext.Provider>
    )
}

export default MyApp
