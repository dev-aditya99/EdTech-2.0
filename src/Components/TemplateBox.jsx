import React from "react";
import ThemeBtns from "../Components/ThemeBtns";

function TemplateBox(props) {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto text-[#dc944b] py-[5rem] lg:px-5 flex gap-6 items-center md:flex-row flex-col relative justify-start text-left`}
      id="what-you-get"
    >
      <div className={`h-full md:w-[40%]`}>
        <div className="md:w-[300px] md:h-[300px] md:px-0 px-9 py-9 bg-[#ffe0c1cc] border-8 border-[#ffe0c1cc] rounded-full flex items-center justify-center shadow-lg">
          <img src={props.image} alt="404" className="sm:w-[200px] w-[100px]" />
        </div>
      </div>
      <div className="lg:w-[60%] md:w-[70%] w-full h-full order-1">
        <p className="font-bold text-[1rem] pb-1">{props.slogan}</p>
        <p className="font-black text-slate-600 sm:text-[1.5rem] text-[1.2rem]">
          {props.mainText}
        </p>
        {/* {props.children} */}
        <ThemeBtns className="mt-9 px-9 bg-[#dc944b] hover:bg-[#dc944bcc] active:bg-[#dc944b9c] text-white">
          Get Started
        </ThemeBtns>
      </div>
    </div>
  );
}

export default TemplateBox;
