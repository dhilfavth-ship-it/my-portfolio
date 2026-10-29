import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#0A0A0C] border-t border-[#1F1B26]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Section 05 · Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-xl font-normal">
            A chronological track record of full-stack leadership, system architecture, and engineering contributions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#282132] space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#E11D48] bg-[#0A0A0C] transition-all duration-200 ${
                  exp.isCurrent
                    ? 'bg-[#E11D48] shadow-[0_0_12px_rgba(225,29,72,0.8)] scale-110'
                    : 'group-hover:border-[#FB7185] group-hover:scale-110'
                }`}
              />

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#121017] border border-[#231E2C] hover:border-[#E11D48]/50 p-6 sm:p-7 transition-all duration-200 shadow-sm space-y-4">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#201B28]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#FB7185] font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E11D48]/20 text-[#FB7185] border border-[#E11D48]/30">
                          {exp.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#8E8798] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E11D48]" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FB7185] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#E11D48] mt-0.5 font-mono">
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-[#C5BFCB] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8E8798]">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.metrics.concat(exp.achievements).slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4CEDB] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-t border-[#201B28] flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-mono text-[#8E8798] mr-1">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1A1622] text-[#D4CEDB] border border-[#2B2336]"
                    >
                      {tech}
                    </span>
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
