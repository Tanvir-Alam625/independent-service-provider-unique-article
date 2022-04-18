import React from "react";
import tanvir from "../../images/about/tanvir.jpg";
const AboutMe = () => {
  return (
    <div className="px-2 md:px-[50px] lg:px-100 min-h-screen flex flex-col lg:flex-row justify-between items-center">
      <div className="about-info  flex flex-col items-start justify-start w-full lg:w-[50%]">
        <h2 className="text-2xl  my-6 lg:text-5xl font-bold text-[#8046B7] font-mono">
          Junior Web Developer
        </h2>
        <p className="text-left text-sm text-gray-600 font-mono my-6">
          I am a web learner. web Complete Web Development Course with Jhangkar
          Mahabub. My goal is to be a good web developer in the next 2 to 3
          years. And I will try to give a good feedback to the web community in
          today's world
        </p>
        <a
          href="https://github.com/Tanvir-Alam625"
          target="_blank"
          className="text-[#8046B7] text-xl border-2 py-2 px-8 rounded-md"
        >
          See My Github
        </a>
      </div>
      <div className="img w-full lg:w-[50%] flex justify-center items-center">
        <img
          src={tanvir}
          alt="about-img"
          className="h-[500px] rounded-md border-2"
        />
      </div>
    </div>
  );
};

export default AboutMe;
