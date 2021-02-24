import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import NavbarSlideIn from "@/components/NavbarSlideIn"
import {NavContext} from "@/lib/context"
import {useNavContext} from "@/lib/hooks"
import "@/styles/globals.scss"

function MyApp({Component, pageProps}) {
		const navData = useNavContext()

		return (
				<NavContext.Provider value={navData}>
						<Navbar/>
						<NavbarSlideIn/>
						<Component {...pageProps} />
						<Footer/>
				</NavContext.Provider>
		)
}

export default MyApp
