import React from "react";
import { Download, Send, Mail, Home, Briefcase, FolderGit2, Wrench, GraduationCap } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Profile = () => {
  const menuItems = [
    { icon: <Home size={18} />, label: "Home", href: "#hero" },
    { icon: <Briefcase size={18} />, label: "Experience", href: "#experience" },
    { icon: <FolderGit2 size={18} />, label: "Projects", href: "#projects" },
    { icon: <Wrench size={18} />, label: "Skills", href: "#tools" },
    { icon: <GraduationCap size={18} />, label: "Education", href: "#education" },
    { icon: <Mail size={18} />, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="h-full bg-[#101010] rounded-2xl  flex flex-col overflow-hidden">
      {/* Profile Header */}
      <div className="p-6 text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="w-full h-full rounded-xl overflow-hidden border-2 border-gray-700">
            <img
              src="/images/profile/HemaThapa.jpg"
              alt="Hema Thapa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#101010] p-1 rounded-full">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#101010]"></div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white mb-1">Hema Thapa</h2>
        <p className="text-gray-400 text-sm">Software Developer</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 overflow-y-auto py-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
              >
                <span className="group-hover:text-[#28E98C] color-[#28E98C]">
                  {item.icon}
                </span>
                <span className="text-lg text-white">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Footer */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/hema-thapa"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#28E98C] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/HemaSaru"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#28E98C] transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:hemasaruthapa@gmail.com"
            className="text-gray-400 hover:text-[#28E98C] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="mt-6 text-center">
          <button className="w-full py-2 bg-[#28E98C] text-black font-medium rounded-lg hover:bg-[#2EE88A] transition-colors text-sm flex items-center justify-center gap-2">
            <Send size={16} /> Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
