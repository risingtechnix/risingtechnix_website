import {useState} from "react"
import {Link, NavLink} from "react-router-dom"
import LetsTalk from "../Buttons/LetsTalk"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<nav className="bg-transparent px-2 z-50 font-sora">
			{/* Wrapper */}
			<div className="flex justify-between items-center py-4">
				{/* Logo and Branding */}
				<div className="flex items-center gap-4">
					<Link to="/">
						<img
							src="src\assets\Rising-technix.png"
							alt="logo"
							className="h-10 w-10 rounded-full bg-transparent"
						/>
					</Link>
					<Link to="/">
						<h1 className="text-[16px] md:text-[18px] lg:text-[28px] font-bold ">
							RisingTechnix
						</h1>
					</Link>
				</div>

				{/* Hamburger Menu */}
				<div className="block lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-700 focus:outline-none"
					>
						<svg
							className="h-6 w-6 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{isOpen ? (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 6h16v2H4V6zM4 11h16v2H4v-2zM4 16h16v2H4v-2z"
								/>
							) : (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 6h16v2H4V6zM4 11h16v2H4v-2zM4 16h16v2H4v-2z"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Navigation Links */}
				<div className="hidden lg:flex lg:items-center">
					<ul className="flex flex-row gap-8">
						<li>
							<NavLink
								to="/"
								className="text-gray-700 hover:text-purple-700"
								activeClassName="font-bold"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/whatwedo"
								className="text-gray-700 hover:text-purple-700"
								activeClassName="font-bold"
							>
								What We Do
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/ourwork"
								className="text-gray-700 hover:text-purple-700"
								activeClassName="font-bold"
							>
								Our Work
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="text-gray-700 hover:text-purple-700"
								activeClassName="font-bold"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/careers"
								className="text-gray-700 hover:text-purple-700"
								activeClassName="font-bold"
							>
								Careers
							</NavLink>
						</li>
					</ul>
				</div>
				<LetsTalk />
			</div>
			{/* Mobile Sidebar Menu */}
			<div
				className={`lg:hidden ${
					isOpen ? "block" : "hidden"
				} fixed inset-0 z-40 bg-gray-900 w-[50%]`}
			>
				{/* Logo and Branding */}
				<div className="flex items-center gap-4 p-4 ml-4">
					<Link to="/">
						<img
							src="src\assets\Rising-technix.png"
							alt="logo"
							className="h-10 w-10 rounded-full"
						/>
					</Link>
					<Link to="/">
						<h1 className="text-[16px] md:text-[18px] lg:text-[28px] font-bold text-white">
							RisingTechnix
						</h1>
					</Link>
				</div>
				<div className="flex flex-col h-full py-8 text-white items-center">
					<NavLink
						to="/"
						className="py-2 px-4 hover:bg-gray-800"
						activeClassName="font-bold"
						onClick={toggleMenu}
					>
						Home
					</NavLink>
					<NavLink
						to="/whatwedo"
						className="py-2 px-4 hover:bg-gray-800"
						activeClassName="font-bold"
						onClick={toggleMenu}
					>
						What We Do
					</NavLink>
					<NavLink
						to="/ourwork"
						className="py-2 px-4 hover:bg-gray-800"
						activeClassName="font-bold"
						onClick={toggleMenu}
					>
						Our Work
					</NavLink>
					<NavLink
						to="/about"
						className="py-2 px-4 hover:bg-gray-800"
						activeClassName="font-bold"
						onClick={toggleMenu}
					>
						About
					</NavLink>
					<NavLink
						to="/careers"
						className="py-2 px-4 hover:bg-gray-800"
						activeClassName="font-bold"
						onClick={toggleMenu}
					>
						Careers
					</NavLink>
					{/* <div className="flex justify-center items-center gap-2 mt-8 py-2 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-500 hover:to-purple-700 rounded-full w-[130px]">
						<Link to="/contact" className="">
							Let's Talk
						</Link>
						<img src="src\assets\arrow-up-right.png" alt="arrow-image" />
					</div> */}
					<LetsTalk />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
