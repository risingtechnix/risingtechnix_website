import { React } from "react";
import { Link } from "react-router-dom";

const UpperFooter = () => {
  return (
    <div className="bg-[#5A48C3] text-white font-sora gap-x-[24px] w-full lg:w-[100%] h-auto lg:h-[388px] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold h-auto lg:h-[108px] max-w-[1200px] mb-[24px] leading-[54px] text-[36px]">LET'S START A <br /> SUCCESSFUL PROJECT</h3>

        <p className="w-full max-w-[1200px] h-auto text-[18px] font-light mb-[24px]">We deliver immediate business impact and long term ROI for your brand.</p>

        <p className="w-full max-w-[1200px] h-auto text-[18px] font-light mb-[24px]">Find out why Codetech is most trusted website around Pune.</p>

        <button className="w-full max-w-[212px] h-auto lg:h-[56px] rounded-[40px] font-medium flex gap-2 justify-center items-center text-[18px] bg-[#DF21E3]">
          Start A project
          <Link to="/"><img src="src\assets\arrow-up-right.png" className="w-[24px] h-[24px]" alt="upArrow" /></Link>
        </button>
      </div>
    </div>
  );
};

export default UpperFooter;
