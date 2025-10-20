import React, { useState } from "react";
import {
  Wrench,
  Globe,
  Database,
  Code,
  Palette,
  FileText,
  Server,
  Cloud,
  GitBranch,
  Monitor,
  TestTube,
  Settings,
} from "lucide-react";

const toolsData = {
  languages: [
    { name: "C#", category: "Language", icon: Code },
    { name: "JavaScript", category: "Language", icon: Code },
    { name: "PHP", category: "Language", icon: Code },
    { name: "SQL", category: "Language", icon: Server },
    { name: "MySQL", category: "Language", icon: Server },
    { name: "OOPs", category: "Language", icon: Code },

  ],
  backend: [
    { name: "ASP.NET", category: "Framework", icon: Server },
    { name: "Entity Framework", category: "Framework", icon: Server },
    { name: "ADO.NET", category: "Framework", icon: Server },
    { name: "React JS", category: "Framework", icon: Globe },
    { name: "Tailwind CSS", category: "Framework", icon: Server },
    { name: "MVC Frameworks (C# ,MVC, Yii2,Laravel 9)", category: "Framework", icon: Server },



    // { name: "Node.js", category: "Runtime", icon: Server },
    // { name: "Express.js", category: "Framework", icon: Server },
    // { name: "Python", category: "Language", icon: Code },
    // { name: "Django", category: "Framework", icon: Server },
    // { name: "FastAPI", category: "Framework", icon: Server },
    // { name: "PostgreSQL", category: "Database", icon: Database },
    // { name: "MongoDB", category: "Database", icon: Database },
    // { name: "Redis", category: "Database", icon: Database },
    // { name: "Docker", category: "DevOps", icon: Settings },
    // { name: "AWS", category: "Cloud", icon: Cloud },
    // { name: "Firebase", category: "Backend", icon: Cloud },
  ],
  tools: [
    { name: "Git", category: "Version Control", icon: GitBranch },
    { name: "GitHub", category: "Version Control", icon: GitBranch },
    { name: "VS Code", category: "Editor", icon: Monitor },
    { name: "Vite", category: "Build Tool", icon: Settings },
    { name: "Postman", category: "API Testing", icon: TestTube },
    // { name: "Webpack", category: "Build Tool", icon: Settings },
    // { name: "ESLint", category: "Linting", icon: Code },
    // { name: "Prettier", category: "Formatting", icon: Code },
    // { name: "Jest", category: "Testing", icon: TestTube },
    // { name: "Cypress", category: "Testing", icon: TestTube },
    // { name: "Notion", category: "Productivity", icon: FileText },
  ],
};

const Tools = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const tabs = [
    { id: "languages", label: "Languages" },
    { id: "backend", label: "Frameworks & Libraries" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <section className="w-full mt-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex items-center gap-2 px-3 py-1 text-2xl text-white">
          <Wrench className="w-7 h-7" />
          Skills & Tools
        </span>
      </div>

      {/* Custom Tabs Implementation */}
      <div className="w-full">
        {/* Tab List */}
        <div className="flex border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative cursor-pointer ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-[#33FF99]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? "block" : "hidden"
              } transition-opacity duration-300`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {toolsData[tab.id].map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:border-gray-500 hover:bg-gray-700/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-[#33FF99] transition-colors" />
                        </div>
                        <h4 className="text-sm font-medium text-white group-hover:text-[#33FF99] transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
