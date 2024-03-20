import React from "react";
import Container from "../Components/Container";
import CourseCard from "../Components/CourseCard";
import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaDev,
  FaLaptopCode,
  FaPython,
} from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { SiCyberdefenders, SiHiveBlockchain } from "react-icons/si";
import { AiFillFormatPainter } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";

function Courses() {
  const courseDetails = [
    {
      courseName: "Web Developement",
      price: "$144",
      icon: (
        <FaCode
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Digital Marketing",
      price: "$104",
      icon: (
        <FaArrowPointer
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "App Developement",
      price: "$244",
      icon: (
        <IoIosApps
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Introduction to Python Programming",
      price: "$49.99",
      icon: (
        <FaPython
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Frotend: HTML, CSS, JavaScript",
      price: "$79.99",
      icon: (
        <FaLaptopCode
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Mobile App Development with React Native",
      price: "$99.99",
      icon: (
        <TbBrandReactNative
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Data Science Fundamentals: Python and Pandas",
      price: "$69.99",
      icon: (
        <FaDatabase
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Cybersecurity Essentials: Protecting Your Digital World",
      price: "$59.99",
      icon: (
        <SiCyberdefenders
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "AWS Cloud Practitioner Certification Prep",
      price: "$129.99",
      icon: (
        <FaCloud
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "DevOps Foundations: CI/CD Pipelines with Jenkins",
      price: "$89.99",
      icon: (
        <FaDev
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "UI/UX Design Principles: Creating Engaging Interfaces",
      price: "$69.99",
      icon: (
        <AiFillFormatPainter
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName: "Machine Learning for Beginners: Building Predictive Models",
      price: "$79.99",
      icon: (
        <LuBrainCircuit
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
    {
      courseName:
        "Blockchain Fundamentals: Understanding Decentralized Technology",
      price: "$59.99",
      icon: (
        <SiHiveBlockchain
          fontSize={"3rem"}
          className="text-[#dc944b] duration-300 group-hover:-translate-y-5 group-hover:scale-125"
        />
      ),
    },
  ];

  return (
    <div>
      <Container>
        <div
          className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 sm:px-3 min-[400px]:py-[11rem] py-[5rem]"
          id="courses"
        >
          {courseDetails.map((cD, idx) => (
            <CourseCard
              key={idx}
              courseName={cD.courseName}
              price={cD.price}
              icon={cD.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Courses;
