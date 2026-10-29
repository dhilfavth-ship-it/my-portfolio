import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#111827] border-t border-[#1E2A3A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">05 — Experience</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
              Work<br />
              <span className="text-[#FF6B8A]">History</span>
            </h2>
            <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed">
              A track record of full-stack engineering and systems leadership.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#1E2A3A] space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node */}
              <div
                className={`absolute -left-[27px] sm:-left-[35px] top-7 w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                  exp.isCurrent
                    ? 'border-[#E8395A] bg-[#E8395A] shadow-[0_0_14px_rgba(232,57,90,0.7)]'
                    : 'border-[#1E2A3A] bg-[#0B0F19] group-hover:border-[#E8395A] group-hover:scale-125'
                }`}
              />

              {/* Card */}
              <div className="rounded-2xl bg-[#0B0F19] border border-[#1E2A3A] hover:border-[#E8395A]/30 p-6 sm:p-8 transition-all duration-200 space-y-5">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#1E2A3A]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-[#FF6B8A] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#E8395A]/15 text-[#FF6B8A] border border-[#E8395A]/25">
                          {exp.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#4A5568] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E8395A]" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#F0EBF5] group-hover:text-[#FF6B8A] transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#E8395A] mt-0.5 font-mono">{exp.company}</p>
                  </div>
                  <span className="text-3xl font-black text-[#1E2A3A] font-mono shrink-0 hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#8B9BB4] leading-relaxed">{exp.summary}</p>

                {/* Key Points */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4A5568]">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.metrics.concat(exp.achievements).slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8B9BB4] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-[#1E2A3A] flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-mono text-[#4A5568] mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111827] text-[#8B9BB4] border border-[#1E2A3A]"
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
