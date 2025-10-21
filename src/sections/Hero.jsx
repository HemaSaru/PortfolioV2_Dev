import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [textT] = useTypewriter({
    words: ["Software Developer", "ASP.NET", "Full Stack Developer", "Laravel Developer"],
    loop: {},
  });

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="mb-8 py-6">
        <span className=" px-4 py-2 text-sm  text-[#c2c2c2]">
          <span className="text-2xl font-medium">👋 Hello </span>
        </span>
      </div>

      <div className="space-y-4 mb-8">
        <h1 className="text-5xl md:text-5xl leading-tight font-medium text-white">
          I'm <span className="text-white">Hema Thapa,</span>
        </h1>

        <h1 className="text-emerald-500 text-5xl md:text-5xl">
          {textT}
          <Cursor />
        </h1>
        <h2 className="text-5xl md:text-5xl font-semibold text-white">
          Based in New Delhi, India
        </h2>
      </div>

      <p className="text-md text-gray-300 leading-relaxed max-w-3xl mb-12">
        I craft scalable, user-focused web applications that blend creativity
        with functionality. With 3 years of experience in full-cycle development
        using C#, .NET, React, PHP, and SQL, I’m passionate about building
        intuitive digital solutions that deliver seamless and engaging user
        experiences.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 text-center hover:border-gray-500 transition-colors">
          <div className="text-3xl font-bold text-white mb-2">4</div>
          <div className="text-sm text-gray-400">Completed Projects</div>
        </div>
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 text-center hover:border-gray-500 transition-colors">
          <div className="text-3xl font-bold text-white mb-2">3</div>
          <div className="text-sm text-gray-400">Years of Experience</div>
        </div>
        {/* <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 text-center hover:border-gray-500 transition-colors">
          <div className="text-3xl font-bold text-white mb-2">26+</div>
          <div className="text-sm text-gray-400">Happy Clients</div>
        </div>
        <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 text-center hover:border-gray-500 transition-colors">
          <div className="text-3xl font-bold text-white mb-2">1+</div>
          <div className="text-sm text-gray-400">Awards Received</div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
