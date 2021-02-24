import Navbar from '@/components/Navbar'
import NavbarSlideIn from '@/components/NavbarSlideIn'
import '../styles/globals.css'
import { NavContext } from '@/lib/context'
import { useNavContext } from '@/lib/hooks'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }) {
    const navData = useNavContext()

    return (
        <NavContext.Provider value={navData}>
            <Navbar />
            <NavbarSlideIn />
            <Component {...pageProps} />
            <Footer />
        </NavContext.Provider>
    )
}

export default MyApp
