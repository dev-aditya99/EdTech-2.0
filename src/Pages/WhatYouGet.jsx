import Container from "../Components/Container";
import React from "react";
import TemplateBox from "../Components/TemplateBox";

function WhatYouGet() {
  const services = [
    {
      mainText:
        "Gain insights and expertise from industry-leading professionals and subject matter experts.",
      icon: "https://cdn-icons-png.flaticon.com/128/9751/9751084.png",
      slogan: "Learn From Experts.",
    },
    {
      mainText:
        "Engaging and interactive courses covering a wide range of subjects, accessible anytime, anywhere.",
      icon: "https://cdn-icons-png.flaticon.com/128/5000/5000269.png",
      slogan: "Learning without limits.",
    },
    {
      mainText:
        "Tailored learning experiences based on individual strengths, weaknesses, and goals.",
      icon: "https://cdn-icons-png.flaticon.com/128/7672/7672552.png",
      slogan: "Your journey, your pace.",
    },
    {
      mainText:
        "Real-time instruction and interaction with expert educators via virtual classrooms.",
      icon: "https://cdn-icons-png.flaticon.com/128/4957/4957013.png",
      slogan: "Connect, learn, grow.",
    },
    {
      mainText:
        "Assessments to evaluate skill levels and certifications to validate learning achievements.",
      icon: "https://cdn-icons-png.flaticon.com/128/2490/2490354.png",
      slogan: "Empowering skills, rewarding success.",
    },
    {
      mainText:
        "On-demand tutoring and academic support from qualified instructors, available round the clock.",
      icon: "https://cdn-icons-png.flaticon.com/128/4844/4844997.png",
      slogan: "Guidance when you need it.",
    },
    {
      mainText:
        "Forums, discussion groups, and collaborative projects to facilitate peer learning and networking.",
      icon: "https://cdn-icons-png.flaticon.com/128/14274/14274492.png",
      slogan: "Together, we thrive.",
    },
    {
      mainText:
        "Career counseling, job readiness training, and assistance with job placement and internships.",
      icon: "https://cdn-icons-png.flaticon.com/128/15189/15189212.png",
      slogan: "Charting your path to success.",
    },
    {
      mainText:
        "Access courses, study materials, and support services on the go through a user-friendly mobile app.",
      icon: "https://cdn-icons-png.flaticon.com/128/2641/2641422.png",
      slogan: "Learning in your pocket.",
    },
    {
      mainText:
        "Gamified activities and challenges to make learning engaging, fun, and motivating.",
      icon: "https://cdn-icons-png.flaticon.com/128/3292/3292072.png",
      slogan: "Learning made playful.",
    },
    {
      mainText:
        "Opportunities for lifelong learning, professional development, and networking within an active alumni community.",
      icon: "https://cdn-icons-png.flaticon.com/128/2247/2247603.png",
      slogan: "Learning never ends.",
    },
  ];

  return (
    <Container className="bg-white shadow-lg">
      {services.map((serv, idx) => (
        <TemplateBox
          key={idx}
          image={serv.icon}
          slogan={serv.slogan}
          mainText={serv.mainText}
        ></TemplateBox>
      ))}
    </Container>
  );
}

export default WhatYouGet;
