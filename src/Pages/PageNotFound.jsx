import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { RiEmotionSadFill } from "react-icons/ri";

function PageNotFound() {
  return (
    <div className="main">
      <div className=" banner w-full min-[640px]:h-[100vh] flex items-start justify-start flex-col">
        <Header></Header>
        <div className="w-full h-full flex items-center justify-center flex-col gap-3 text-[#dc944b]">
          <RiEmotionSadFill className="sm:text-[4rem] text-[2rem]" />
          <h1 className="sm:text-[2rem] text-[1.5rem] font-black">
            Page Not Found
          </h1>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default PageNotFound;
