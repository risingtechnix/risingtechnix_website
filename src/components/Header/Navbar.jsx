import {Link, NavLink} from "react-router-dom"
// import {useState, useEffect} from "react"

const Navbar = () => {
	return (
		<>
			<nav className=" bg-transparent px-2 h-[100px] z-10">
				{/* Wrapper */}
				<div className="flex justify-between items-center py-[25px]">
					{/* wrapper for  the logo and branding */}
					<div className="flex justify-between items-center gap-[16px]">
						<Link to="/">
							<img src="src\assets\Logo.png" alt="logo" />
						</Link>
						<Link to="/">
							<h1 className=" text-[28px] font-bold">RisingTechnix</h1>
						</Link>
					</div>
					{/*  Navigation Links */}
					<div>
						<ul className="flex justify-between gap-[48px]">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/whatwedo">What We Do</NavLink>
							</li>
							<li>
								<NavLink to="/ourwork">Our Work</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/careers">Careers</NavLink>
							</li>
						</ul>
					</div>
					<div className="flex justify-center items-center w-[163px] h-[56px] bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-500 hover:to-purple-700 text-white rounded-[40px] mr-3">
						<Link to="/contact">Let's Talk</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
