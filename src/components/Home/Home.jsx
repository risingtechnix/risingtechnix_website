import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
	return (
		<>
			<div>
				<div>
					<img
						src="src\assets\Background.png"
						alt="background-image"
						className="absolute top-0 -z-10 h-[90%] md:h-[60vh] lg:h-auto"
					/>
				</div>
				<div className="flex flex-col justify-between items-center gap-6 md:flex-row lg:flex-row m-4 px-4 py-8 font-sora">
					<div className="flex flex-col leading-10 lg:leading-[90px] lg:ml-[64px]">
						<h1 className="text-[10px] text-[#5B5B5B] lg:text-[17px]">
							Trendy's Collection
						</h1>
						<h1 className="font-bold text-[33px] lg:text-[90px]">
							Building <br />a better you
						</h1>
						<p className="font-[500] text-[14px] leading-7 lg:text-[18px]">
							Every pleasure is to be welcomed and every pain avoided.
							<br />
							and every pain avoided. certain circumstances ands
						</p>
						<div className="flex items-center justify-center w-[163px] h-[44px] border-solid border-[2px] mt-6 border-black rounded-[40px] text-center hover:border-none hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
							<Link to="/about">Learn More</Link>
						</div>
					</div>
					<div>
						<img
							src="src\assets\Desktop_image2.png"
							alt="image"
							className="h-[232px] w-[317px] lg:h-[407px] lg:w-[556px] lg:pr-[32px]"
						/>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center gap-5 w-[324.72px] bg-black rounded-lg text-white">
						<h1>Trusted By Clients</h1>
						<img
							src="src\assets\div.chy-trusted-1-video.png"
							alt="video_thumbnail"
						/>
						<div>
							<div>
								<i class="uis uis-star"></i>
							</div>
							<h1>Rated 4.9/5 From over 900 Reviews</h1>
						</div>
						<div>
							<div>
								<h1>Monthly Traffic</h1>
							</div>
							<div>
								<h1>7.9K</h1>
								<input
									type="range"
									min="0"
									max="100"
									step="1"
									value="70"
									className="w-60 h-4 rounded-md bg-gray-300 cursor-pointer "
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
