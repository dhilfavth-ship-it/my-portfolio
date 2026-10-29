import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Database, Wrench, Code2 } from 'lucide-react';

export const TechStackRadar: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-[#FB7185]" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-[#38BDF8]" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-[#10B981]" />;
      case 'Tools and Technologies':
      default:
        return <Wrench className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#0A0A0C] border-t border-[#1F1B26]">
      <div id="stack" className="absolute -top-12" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Section 03 · Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-2xl font-normal">
            A comprehensive, organized inventory of core technologies, frameworks, and developer tools I utilize in production.
          </p>
        </div>

        {/* 4 Clean Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#121017] border border-[#231E2C] hover:border-[#E11D48]/50 p-6 sm:p-7 transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#1A1622] border border-[#2B2336]">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#8E8798] mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#201B29]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181420] border border-[#2B2336] hover:border-[#E11D48]/40 hover:bg-[#1E1928] transition-colors"
                    >
                      <span className="text-xs font-medium text-[#E4DFEA] group-hover/tag:text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#8E8798] group-hover/tag:text-[#FB7185]">
                        · {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
