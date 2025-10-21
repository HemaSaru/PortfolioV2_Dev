import React from "react";
import { Download, Send, Mail, Linkedin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
          <span className="text-white text-sm">Software Developer</span>
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

        <a href="https://www.linkedin.com/in/hema-thapa" target="_blank">
          {" "}
          <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
            <FaLinkedin className="w-4 h-4 text-white" />
          </div>
        </a>

        <a href="https://github.com/HemaSaru" target="_blank">
          <div className="w-8 h-8 rounded-lg border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
            <FaGithub className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-2 flex items-center justify-center gap-2 px-2 py-2 bg-[#1A1A1A] border border-gray-600 rounded-lg text-white hover:border-gray-400 transition-colors cursor-pointer">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download CV</span>
        </button>
        <button className="flex-2 flex items-center justify-center gap-2 px-2 py-2 bg-[#28E98C] rounded-lg text-black hover:bg-[#2EE88A] transition-colors  cursor-pointer">
          <Send className="w-4 h-4" />
          <span className="text-sm font-medium">Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
