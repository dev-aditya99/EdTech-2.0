import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

function Header() {
  const body = document.querySelector("body");
  const pageDetails = [
    {
      pageName: "Home",
      pageURL: "/",
    },
    {
      pageName: "Courses",
      pageURL: "/courses",
    },
    {
      pageName: "What You Get",
      pageURL: "/what-you-get",
    },
    {
      pageName: "Privacy Policy",
      pageURL: "/privacy-policy",
    },
    {
      pageName: "About",
      pageURL: "/about",
    },
  ];

  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(menu);

    if (menu) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  };

  useEffect(() => {
    menuHandler();
  }, [menu]);

  return (
    <div className="w-full max-w-[1200px] mx-auto text-[#dc944b] py-8 px-5 flex items-center justify-between">
      <div className="font-bold min-[446px]:text-[2rem] text-[1.5rem]">
        <Link to="/" className="flex items-center gap-1">
          <img src="src\assets\FavIcons\favicon-32x32.png" alt="404" />
          EdTech
        </Link>
      </div>

      <div className=" min-[811px]:block hidden">
        <ul className="flex lg:gap-9 gap-6 items-center text-slate-600 font-semibold">
          {pageDetails.map((pD, idx) => {
            return (
              <li key={idx}>
                <Link to={`${pD.pageURL}`} className="hover:text-slate-900">
                  {pD.pageName}
                </Link>
              </li>
            );
          })}

          <li>
            <Link to="/profile">
              <button className="h-10 w-10 rounded-full bg-[#ffe0c1cc] hover:bg-[#f5d7b9de] active:bg-[#f5d7b9a1] duration-200 cursor-pointer flex items-center justify-center">
                <span className="text-[#dc944b] font-bold text-lg">
                  <IoMdPerson fontSize={"1.5rem"}></IoMdPerson>
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="min-[811px]:hidden block">
        <button onClick={() => setMenu(true)} className="cursor-pointer">
          <TiThMenu fontSize={"2rem"} />
        </button>
      </div>

      <div
        className={`min-[811px]:hidden w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-[9999] ${
          menu ? "visible opacity-100" : "invisible opacity-0"
        } duration-300 `}
      >
        <div
          className={`w-[80%] h-full bg-[#dc944b] text-white rounded-r-3xl shadow-lg ${
            menu ? "translate-x-[0%]" : "translate-x-[-100%]"
          } duration-300`}
        >
          <div className="py-5 px-5 flex items-center justify-end">
            <FaXmark
              fontSize={"2rem"}
              className="cursor-pointer hover:bg-[#fdb872]"
              onClick={() => setMenu(false)}
            />
          </div>
          <ul className="flex items-start flex-col gap-3 font-bold px-7 py-5">
            <li className="w-full  pb-5 flex items-center justify-center">
              <Link to="/profile" onClick={() => setMenu(false)}>
                <button className="h-14 w-14 rounded-full bg-[#ffe0c1cc] hover:bg-[#fed5accc] active:bg-[#f5d7b9a1] duration-200 cursor-pointer flex items-center justify-center">
                  <span className="text-[#dc944b] font-bold text-lg">
                    <IoMdPerson fontSize={"2rem"}></IoMdPerson>
                  </span>
                </button>
              </Link>
            </li>
            {pageDetails.map((pD, idx) => {
              return (
                <li
                  key={idx}
                  className="w-full border-b-2 bg-[#ffae5c] rounded text-center hover:bg-[#fdb872]"
                  onClick={() => setMenu(false)}
                >
                  <Link to={`${pD.pageURL}`} className="w-full py-3 block">
                    {pD.pageName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
