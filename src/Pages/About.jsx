import React from "react";

function About() {
  return (
    <>
      <div className="w-full h-full px-5 p-20 flex items-center justify-center flex-col gap-3 bg-white text-[#dc944b] shadow-lg rounded-3xl">
        {/* <h1 className="font-black text-[2rem]">About :</h1> */}
        <div className="py-5">
          <img
            src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="404"
            className="w-[500px] h-[300px] hover:scale-105 duration-300 hover:opacity-80 object-cover object-center rounded-md shadow-lg"
          />
        </div>
        <div className="font-medium text-justify leading-5">
          Certainly! Here's an about section for an EdTech company: --- Welcome
          to EdTech, where we're revolutionizing education through technology.
          At EdTech, we believe that every learner deserves access to
          high-quality education, regardless of their background or location.
          Our mission is to empower students, educators, and institutions with
          innovative tools and resources to foster lifelong learning and success
          in the digital age. With a passionate team of educators,
          technologists, and designers, we're dedicated to creating cutting-edge
          solutions that address the evolving needs of modern education. Whether
          you're a student seeking personalized learning experiences, an
          educator looking to enhance classroom engagement, or an institution
          striving for academic excellence, EdTech is here to support you every
          step of the way. Our platform offers a diverse range of features and
          services, including interactive learning modules, adaptive assessment
          tools, virtual classrooms, professional development courses, and
          robust analytics to track progress and measure outcomes. We harness
          the power of artificial intelligence, machine learning, and data
          analytics to personalize learning experiences, optimize teaching
          methodologies, and drive student success. At EdTech, we understand
          that education extends beyond the classroom walls. That's why we're
          committed to fostering a vibrant community of learners, educators, and
          thought leaders, where ideas are exchanged, collaborations are formed,
          and knowledge is shared. Join us in shaping the future of education.
          Together, let's inspire minds, empower educators, and unlock the full
          potential of learners worldwide. Welcome to EdTech, where learning
          knows no boundaries.
        </div>
      </div>
    </>
  );
}

export default About;
