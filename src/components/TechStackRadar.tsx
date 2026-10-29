import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Database, Wrench } from 'lucide-react';

export const TechStackRadar: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    const cls = "w-5 h-5";
    switch (title) {
      case 'Frontend Development':
        return <Layout className={`${cls} text-[#FF6B8A]`} />;
      case 'Backend Development':
        return <Server className={`${cls} text-[#38BDF8]`} />;
      case 'Databases':
        return <Database className={`${cls} text-[#10B981]`} />;
      case 'Tools and Technologies':
      default:
        return <Wrench className={`${cls} text-[#F59E0B]`} />;
    }
  };

  const getCategoryAccent = (title: string) => {
    switch (title) {
      case 'Frontend Development': return { dot: 'bg-[#FF6B8A]', hover: 'hover:border-[#FF6B8A]/40', tag: 'text-[#FF6B8A]' };
      case 'Backend Development': return { dot: 'bg-[#38BDF8]', hover: 'hover:border-[#38BDF8]/40', tag: 'text-[#38BDF8]' };
      case 'Databases': return { dot: 'bg-[#10B981]', hover: 'hover:border-[#10B981]/40', tag: 'text-[#10B981]' };
      default: return { dot: 'bg-[#F59E0B]', hover: 'hover:border-[#F59E0B]/40', tag: 'text-[#F59E0B]' };
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#111827] border-t border-[#1E2A3A]">
      <div id="stack" className="absolute -top-12" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">03 — Technical Skills</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
              My Tech<br />
              <span className="text-[#FF6B8A]">Stack</span>
            </h2>
            <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed">
              A curated inventory of technologies I actively use in production.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const accent = getCategoryAccent(category.title);
            return (
              <div
                key={category.title}
                className={`rounded-2xl bg-[#0B0F19] border border-[#1E2A3A] ${accent.hover} p-6 sm:p-7 transition-all duration-200 group`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-[#1E2A3A]">
                  <div className="p-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] shrink-0">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                      <h3 className="text-base font-bold text-[#F0EBF5] tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#4A5568] leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/30 hover:bg-[#1A2035] transition-all duration-150 cursor-default"
                    >
                      <span className="text-xs font-medium text-[#8B9BB4] group-hover/tag:text-[#F0EBF5] transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono ${accent.tag} opacity-70`}>
                        · {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
