import React from "react";
import { ReactTyped } from "react-typed";
import ThemeBtns from "./ThemeBtns";

function TopBanner() {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-[446px]:h-[90vh] text-slate-800 py-5 px-5 flex items-center justify-center">
      <div className="my-5 py-5 flex items-center justify-center flex-col">
        <p className="font-bold md:text-[1.5rem] text-[1.2rem] text-[#dc944b]">
          Learn with us
        </p>
        <h1 className="font-bold md:text-[5rem] min-[446px]:text-[4rem] text-[2.5rem] text-[#dc944b]">
          Grow with us
        </h1>
        <p className="font-bold md:text-[1.5rem] text-[1.2rem] text-[#dc944b] pt-3">
          Learn{" "}
          <ReactTyped
            strings={[
              "Web Developement",
              "Web Designing",
              "Graphics Designing",
            ]}
            typeSpeed={80}
            backSpeed={60}
            backDelay={2000}
            loop={true}
          />
          <br />
        </p>

        <ThemeBtns className="mt-9 bg-[#dc944b] hover:bg-[#dc944bcc] active:bg-[#dc944b9c] text-white">
          Get Started
        </ThemeBtns>
      </div>
    </div>
  );
}

export default TopBanner;
