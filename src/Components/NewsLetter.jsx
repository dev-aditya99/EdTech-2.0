import React from "react";
import ThemeBtns from "./ThemeBtns";
import Container from "./Container";
import { Link } from "react-router-dom";

function NewsLetter() {
  return (
    <Container className="bg-[#dc944b] shadow-lg">
      <div
        className="w-full max-w-[1200px] mx-auto flex items-center justify-center gap-4 lg:flex-row flex-col py-9"
        id="news-letter"
      >
        <div className="w-full h-full py-4 text-white md:text-[2rem] text-[1.5rem] font-black text-center">
          <h5>Want to learn latest I.T. skills?</h5>

          <p className="text-[1rem] font-bold">
            sign up to our newsletter and stay upto date.
          </p>
        </div>
        <div className="w-full h-full py-4">
          <div className="w-full flex items-center justify-center sm:flex-row flex-col gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="outline-none border-none px-2 py-3 rounded lg:w-[50%] sm:w-[40%] w-[100%]"
            />
            <ThemeBtns className="bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white mt-0">
              Notify Me
            </ThemeBtns>
          </div>

          <div className="w-full flex items-center justify-center gap-3 mt-4 text-slate-700 font-medium text-center">
            <p>
              We care about the protection of your data. Read our{" "}
              <Link
                to="/privacy-policy"
                className="font-black text-white underline decoration-solid"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NewsLetter;
