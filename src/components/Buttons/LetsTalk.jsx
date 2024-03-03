import React from "react"
import {Link} from "react-router-dom"
const LetsTalk = (classes) => {
	return (
		<div className="hidden px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-500 hover:to-purple-700 rounded-full lg:w-[140px] lg:h-[56px] lg:flex lg:justify-between lg:items-center lg:gap-2 font-sora">
			<Link to="/contact" className="text-white">
				Let's Talk
			</Link>
			<img
				src="src\assets\arrow-up-right.png"
				alt="arrow-image"
				// className="lg:display:inline"
			/>
		</div>
	)
}

export default LetsTalk
