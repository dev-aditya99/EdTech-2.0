import React from "react";
import Container from "./Container.jsx";
import CourseCard from "./CourseCard.jsx";
import { FaCode } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";

function CourseCardHolder() {
  return (
    <>
      <Container className="bg-white">
        <div
          className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 sm:px-3 min-[400px]:py-[11rem] py-[5rem]"
          id="courses"
        >
          <CourseCard
            courseName="Web Developement"
            price="$144"
            icon={
              <FaCode
                fontSize={"3rem"}
                className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
              />
            }
          />

          <CourseCard
            courseName="Digital Marketing"
            price="$104"
            icon={
              <FaArrowPointer
                fontSize={"3rem"}
                className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
              />
            }
          />

          <CourseCard
            courseName="App Developement"
            price="$244"
            icon={
              <IoIosApps
                fontSize={"3rem"}
                className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
              />
            }
          />
        </div>
      </Container>
    </>
  );
}

export default CourseCardHolder;
