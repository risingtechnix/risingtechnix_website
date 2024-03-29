import { Link } from "react-router-dom";
import UpperFooter from "./UpperFooter";
import React from 'react'

function MainFooter() {
  return (
    <div className="bottom-0">
      {/* This is upper footer */}
      <UpperFooter />
      {/* Bottom footer */}
      <div className="w-full lg:w-[100%] h-auto lg:h-[456px] flex flex-col justify-center font-sora items-center">
        {/* Rising Technix info */}
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row">
          <ul className="w-full lg:w-[387px] h-auto lg:h-[228px] leading-[50px] flex flex-col justify-center">
            <li className="flex items-center">
              <Link to="/"><img src="src\assets\Main_logo.png" alt="" className="w-[48px] h-[48px]" /></Link>
              <h2 className="font-bold text-[28px] ml-2">Rising Technix</h2>
            </li>
            <li>risingtexhnix@gmail.com</li>
            <li>+91 9307850025</li>
            <li>Pune, Maharashtra, India.</li>
          </ul>

          <div className="flex justify-center items-center">
            {/* Columns in footer */}
            <div className="w-full lg:w-[616px] h-auto lg:h-[172px] flex flex-col lg:flex-row justify-center lg:justify-end gap-4 lg:gap-[80px]">
              <ul className="leading-8">
                {/* Pages */}
                <li className="text-[18px] font-bold">Pages</li>
                <li className="text-[14px] text-[#534F69]">Who we are</li>
                <li className="text-[14px] text-[#534F69]">Our Services</li>
                <li className="text-[14px] text-[#534F69]">Works</li>
                <li className="text-[14px] text-[#534F69]">Reviews</li>
              </ul>
              {/*Social Media  */}
              <ul className="leading-8">
                <li className="text-[18px] font-bold">Social Media</li>
                <li className="text-[14px] text-[#534F69]">Facebook</li>
                <li className="text-[14px] text-[#534F69]">Instagram</li>
                <li className="text-[14px] text-[#534F69]">Twitter</li>
                <li className="text-[14px] text-[#534F69]">Linkedin</li>
              </ul>
              {/* Webflow stuff */}
              <ul className="leading-8">
                <li className="text-[18px] font-bold">Webflow Stuff</li>
                <li className="text-[14px] text-[#534F69]">Style Guide</li>
                <li className="text-[14px] text-[#534F69]">Licensing</li>
                <li className="text-[14px] text-[#534F69]">Changelog</li>
                <li className="text-[14px] text-[#534F69]">Instructions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] h-[1.5px] bg-[#F3F4F6] my-3 lg:my-0"></div>

        <p className="mt-3">Copyright © Rising Technix | Privacy Policy | Designed by Chetan </p>
      </div>
    </div>
  )
}

export default MainFooter
