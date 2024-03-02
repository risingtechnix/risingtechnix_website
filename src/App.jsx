import Footer from "./components/Footer/Footer"
import Navbar from "./components/Header/Navbar"
import {Outlet} from "react-router-dom"

function App() {
	return (
		<>
		{/* KunalDada  Shinde */}
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
