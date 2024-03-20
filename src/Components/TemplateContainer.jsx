import React from "react";
import Container from "./Container";
import TemplateBox from "./TemplateBox";
import ThemeBtns from "./ThemeBtns";

function TemplateContainer() {
  return (
    <>
      <Container className="bg-white shadow-lg">
        <TemplateBox
          image="https://cdn-icons-png.flaticon.com/128/9751/9751084.png"
          slogan="Learn From Experts"
          mainText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          cupiditate dignissimos velit soluta? Expedita temporibus esse
          molestias. Sint autem, facilis fugiat ipsam illo nulla rem dicta!
          Incidunt, eius quia? Molestiae?"
        >
          <ThemeBtns className="mt-9 px-9 bg-[#dc944b] hover:bg-[#dc944bcc] active:bg-[#dc944b9c] text-white">
            Get Started
          </ThemeBtns>
        </TemplateBox>
      </Container>

      <Container className="shadow-lg">
        <TemplateBox
          image="https://cdn-icons-png.flaticon.com/128/6703/6703900.png"
          slogan="Get Certified"
          mainText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          cupiditate dignissimos velit soluta? Expedita temporibus esse
          molestias. Sint autem, facilis fugiat ipsam illo nulla rem dicta!
          Incidunt, eius quia? Molestiae?"
        >
          <ThemeBtns className="mt-9 px-9 bg-[#dc944b] hover:bg-[#dc944bcc] active:bg-[#dc944b9c] text-white">
            Get Started
          </ThemeBtns>
        </TemplateBox>
      </Container>
    </>
  );
}

export default TemplateContainer;
