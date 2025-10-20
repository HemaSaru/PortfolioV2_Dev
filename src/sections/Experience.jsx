import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "NuralTech",
    period: "2022 - Present",
    description:
      "Building scalable RESTful APIs and modular web applications using ASP.NET Core, MVC, and React.js, optimizing database performance with SQL Server, and enhancing user experience through responsive, efficient front-end solutions.",
  },
  {
    role: "Web Developer Intern",
    company: "India Habitat Center",
    period: "2021 - 2022",
    description:
      "Developing and upgrading software infrastructure to improve efficiency and streamline event bookings, engineering an online event booking system to boost registrations and reduce errors, and creating responsive web layouts to enhance user engagement.",
  },
 
];

const Experience = () => {
  return (
    <section className="w-full mt-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex items-center gap-2 px-3 py-1 text-2xl text-white">
          <Briefcase className="w-7 h-7" />
          Experience
        </span>
        {/* <div className="h-px flex-1 bg-gray-700" /> */}
      </div>

      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700" />
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-0.5 top-2 w-3 h-3 rounded-full bg-[#33FF99] border-2 border-gray-900" />
              <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
