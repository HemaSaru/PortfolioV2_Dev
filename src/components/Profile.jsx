import React from "react";
import { Download, Send, Mail, Linkedin, Github } from "lucide-react";

const Profile = () => {
  return (
    <div className=" bg-[#101010] rounded-lg p-6 border border-purple-500/20 lg:px-8 sm:px-4 sticky top-8">
      {/* Profile Picture */}
      <div className="rounded-lg overflow-hidden bg-white/30 backdrop-blur-sm">
        <img
          src="/images/profile/HemaThapa.jpg"
          alt="Hema Thapa"
          className="w-auto h-auto"
        />
      </div>

      {/* Status Indicator */}
      <div className="flex justify-center m-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-gray-600 rounded-full">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span className="text-white text-sm">Software Engineer</span>
        </div>
      </div>

      {/* Name */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white">Hema Thapa</h1>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
          <Mail
            className="w-4 h-4 text-white"
            href="mailto:hemasaruthapa@gmail.com"
          />
        </div>

        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
          <Linkedin
            className="w-4 h-4 text-white"
            href="https://www.linkedin.com/in/hema-thapa"
          />
        </div>
        <div className="w-8 h-8 rounded-lg border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
          <Github
            className="w-4 h-4 text-white"
            href="https://github.com/HemaSaru"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg text-white hover:border-gray-400 transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download CV</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-1 bg-[#28E98C] rounded-lg text-black hover:bg-[#2EE88A] transition-colors">
          <Send className="w-4 h-4" />
          <span className="text-sm font-medium">Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
