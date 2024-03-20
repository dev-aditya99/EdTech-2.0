import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MainPage() {
  return (
    <>
      <div className="main w-full">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default MainPage;
