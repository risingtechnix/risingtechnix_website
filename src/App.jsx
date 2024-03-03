import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Header/Navbar"
import {Outlet} from "react-router-dom"

function App() {
	return (
		<>
			{/* KunalDada  Shinde */}
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
