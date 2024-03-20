import React from "react";
import TopBanner from "../Components/TopBanner";
import TemplateContainer from "../Components/TemplateContainer.jsx";
import NewsLetter from "../Components/NewsLetter.jsx";
import CourseCardHolder from "../Components/CourseCardHolder.jsx";

function Home() {
  return (
    <>
      <TopBanner></TopBanner>
      <TemplateContainer></TemplateContainer>
      <NewsLetter></NewsLetter>
      <CourseCardHolder></CourseCardHolder>
    </>
  );
}

export default Home;
