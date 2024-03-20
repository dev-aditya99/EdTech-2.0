import React from "react";
import ThemeBtns from "./ThemeBtns";

function CourseCard(props) {
  return (
    <div className="w-full max-w-[400px] mx-auto p-5 bg-white shadow-xl rounded-xl group hover:scale-110 hover:bg-[#ffe0c1cc] duration-300 flex items-center justify-center flex-col text-center">
      <div className="py-4">{props.icon}</div>
      <h4 className="font-black text-[1.5rem]">{props.courseName}</h4>
      <p className="font-black text-[2rem] text-slate-800 my-6">
        {props.price}
      </p>

      <p className="font-bold text-[1rem] text-slate-800 shadow-sm py-2">
        Lorem, ipsum dolor.
      </p>
      <p className="font-bold text-[1rem] text-slate-800 shadow-sm py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea
        nihil!
      </p>

      <p className="font-bold text-[1rem] text-slate-800 shadow-sm py-2">
        Lorem ipsum dolor sit amet.
      </p>

      <ThemeBtns className="bg-[#dc944b] hover:bg-[#dc944bcc] active:bg-[#dc944b9c] text-white mt-8 my-4">
        Start Trial
      </ThemeBtns>
    </div>
  );
}

export default CourseCard;
