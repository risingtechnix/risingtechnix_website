import Header from "./components/Header/Header"
import MainFooter from "./components/Footer/MainFooter"
import {Outlet} from "react-router-dom"


function App() {
	return (
		<>
			<Header />
			<Outlet />
			<MainFooter />
		</>
	)
}

export default App
