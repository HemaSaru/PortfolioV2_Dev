import React from "react";
import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TravelWithD",
    category: "Travel Agency",
    url: "#",
    // pages: "8 Pages",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description:
      "A comprehensive SaaS platform for automated customer support with AI-powered chatbot integration.",
  },
  {
    title: "JaksTravels",
    category: "Travel Agency",
    url: "#",
    // pages: "6 Pages",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description:
      "Flexible software management solution designed for modern businesses and startups.",
  },
  {
    title: "Visual Arts Gallery",
    category: "Design",
    url: "https://artsgallerydesign.vercel.app/",
    // pages: "8 Pages",
    image:
      "https://images.unsplash.com/photo-1719935115623-4857df23f3c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Design-centric project showcasing a portfolio of visual arts and creative works.",
  },
  // {
  //   title: "CryptoraHub",
  //   category: "Crypto & Web3",
  //   url: "#",
  //   // pages: "37 Pages",
  //   image:
  //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
  //   description:
  //     "Comprehensive cryptocurrency platform with advanced trading features and portfolio management.",
  // },
];

const Projects = () => {
  return (
    <section className="w-full mt-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex items-center gap-2 px-3 py-1 text-2xl text-white">
          <FolderOpen className="w-7 h-7" />
          Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-xl border border-gray-700 bg-gray-800/30 overflow-hidden hover:border-gray-500 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              {/* Hover description overlay */}
              <div className="absolute inset-0 flex items-end pointer-events-none">
                <div className="w-full p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <p className="text-sm text-white leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#33FF99] transition-colors">
                  {project.title}
                </h3>
                {/* pages removed */}
              </div>

              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </a>
        ))}
      </div>

      {/* <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white hover:border-gray-400 hover:bg-gray-700/50 transition-colors">
          Load More
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
