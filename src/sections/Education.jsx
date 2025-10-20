import React from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Masters of Computer Application",
    institution: "Indira Gandhi National Open University",
    location: "New Delhi",
    period: "2024 - present",
  //   description:
  //     "Gained hands-on experience in UX research, prototyping, wireframing, and usability testing, focusing on designing seamless, user-friendly digital experiences.",
  },
  {
    degree: "PG Diploma in Computer Applications",
    institution: "Indira Gandhi National Open University",
    location: "New Delhi",
    period: "2022 - 2024",
    // description:
    //   "Completed a comprehensive program focused on designing user-centered digital products, integrating aesthetics and functionality through practical interaction design principles.",
  },
];

const Education = () => {
  return (
    <section className="w-full mt-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex items-center gap-2 px-3 py-1 text-2xl text-white">
          <GraduationCap className="w-7 h-7" />
          Education
        </span>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-6 hover:border-gray-500 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
