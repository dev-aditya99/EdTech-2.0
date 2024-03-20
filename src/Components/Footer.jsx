import React from "react";
import Container from "./Container";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="pt-28">
      <div className="max-w-[1200px] mx-auto md:grid md:grid-cols-3 md:gap-5 flex flex-col gap-8 ">
        <div className="">
          <div className="font-bold min-[446px]:text-[2rem] text-[1.5rem] text-[#dc944b] mb-2">
            <Link to="/" className="flex items-center gap-1">
              <img src="src\assets\FavIcons\favicon-32x32.png" alt="404" />
              EdTech
            </Link>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur
            sint culpa inventore necessitatibus ducimus, asperiores voluptates
            autem assumenda voluptatum pariatur dolores veritatis dolorum eius.
            Deserunt ducimus illum modi libero.
          </p>

          <div className="text-[#dc944b] text-[1.5rem] flex items-center gap-3 mt-7 md:justify-start justify-center">
            <a href="https://github.com/dev-aditya99" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-sharma-b528642b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 md:col-span-2 flex items-start justify-center">
          <div className="mx-auto">
            <span className="font-bold sm:text-[1.2rem] text-[1rem] text-[#dc944b] block mb-3">
              Projects
            </span>

            <ul className="font-medium text-slate-700 sm:text-[1rem] text-[0.8rem] flex items-start flex-col gap-2">
              <li>
                <a
                  href="https://dev-aditya99.github.io/Memo-Card/"
                  target="_blank"
                >
                  Memo Card
                </a>
              </li>
              <li>
                <a
                  href="https://dev-aditya99.github.io/Car-Crash-Game/"
                  target="_blank"
                >
                  Car Crash Game
                </a>
              </li>
              <li>
                <a href="https://dev-aditya99.github.io/Typo/" target="_blank">
                  Typo
                </a>
              </li>
              <li>
                <a
                  href="https://dev-aditya99.github.io/Vessel-Basic/"
                  target="_blank"
                >
                  Vessel
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <span className="font-bold sm:text-[1.2rem] text-[1rem] text-[#dc944b] block mb-3">
              Source
            </span>

            <ul className="font-medium text-slate-700 sm:text-[1rem] text-[0.8rem] flex items-start flex-col gap-2">
              <li>
                <a
                  href="https://github.com/dev-aditya99/Memo-Card/tree/newMemoCard"
                  target="_blank"
                >
                  Memo Card
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dev-aditya99/Clocks/tree/Diaoclock"
                  target="_blank"
                >
                  Clocks
                </a>
              </li>
              <li>
                <a href="https://github.com/dev-aditya99/Typo" target="_blank">
                  Typo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dev-aditya99/Basic-One-Side-Chat-App"
                  target="_blank"
                >
                  Chat App
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <span className="font-bold sm:text-[1.2rem] text-[1rem] text-[#dc944b] block mb-3">
              Company
            </span>

            <ul className="font-medium text-slate-700 sm:text-[1rem] text-[0.8rem] flex items-start flex-col gap-2">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/what-you-get">You Get</Link>
              </li>
              <li>
                <Link to="/user-queries">Query</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto text-center text-[#dc944b] font-medium mt-9 ">
        Developed with <FaHeart className="inline" /> by{" "}
        <a
          href="https://www.linkedin.com/in/aditya-sharma-b528642b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="font-black underline"
        >
          Aditya
        </a>
      </div>
    </Container>
  );
}

export default Footer;
