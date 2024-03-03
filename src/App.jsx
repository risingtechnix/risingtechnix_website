import MainFooter from "./components/Footer/MainFooter"
import Navbar from "./components/Header/Navbar"
import {Outlet} from "react-router-dom"


function App() {
	return (
		<>
		{/* KunalDada  Shinde */}
			<Navbar />
			<Outlet />
			<MainFooter />
		</>
	)
}

export default App
