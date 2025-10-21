import React from "react";
import Profile from "../components/Profile";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Tools from "../sections/Tools";
import Contact from "../sections/Contact";

const HomePage = () => {
  return (
    <div className="max-w-8xl mx-auto sm:px-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className=" md:w-2/5 p-8 md:p-5 lg:py-3 lg:px-10">
          <Profile />
        </div>
        <div className="w-full md:w-3/5 p-8 md:p-4 lg:p-9 text-left">
          <Hero />
          <Experience />
          <Projects />
          <Tools />
          <Education />
          <Contact />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
