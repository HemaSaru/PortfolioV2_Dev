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
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Container */}
        <div className="lg:w-[350px] lg:fixed lg:h-screen lg:left-0 lg:top-0 p-4 z-50">
          <Profile />
        </div>

        {/* Main Content */}
        <div className="w-full lg:ml-[350px] lg:w-[calc(100%-350px)] p-4 md:p-8 lg:p-12 text-left">
          <div id="hero" className="scroll-mt-10"><Hero /></div>
          <div id="experience" className="scroll-mt-10"><Experience /></div>
          <div id="projects" className="scroll-mt-10"><Projects /></div>
          <div id="tools" className="scroll-mt-10"><Tools /></div>
          <div id="education" className="scroll-mt-10"><Education /></div>
          <div id="contact" className="scroll-mt-10"><Contact /></div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
