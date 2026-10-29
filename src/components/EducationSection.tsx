import React from 'react';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#0D0B10] border-t border-[#1F1B26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Section 06 · Education & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-xl font-normal">
            Formal academic background in computer science paired with verified industry credentials.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#FB7185]">
              <GraduationCap className="w-4 h-4 text-[#E11D48]" />
              <span>Academic Education</span>
            </div>

            {EDUCATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#121017] border border-[#231E2C] hover:border-[#E11D48]/50 p-6 sm:p-7 transition-all duration-200 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#201B28]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-semibold text-[#E11D48] font-mono mt-0.5">
                      {item.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#8E8798] flex items-center gap-1.5 bg-[#181420] px-2.5 py-1 rounded-md border border-[#282132]">
                      <Calendar className="w-3 h-3 text-[#FB7185]" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="inline-block text-xs font-mono px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                  {item.badge}
                </div>

                <p className="text-sm text-[#C5BFCB] leading-relaxed">
                  {item.description}
                </p>

                {/* Academic Highlights */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8E8798]">
                    Key Highlights:
                  </h4>
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#D4CEDB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework */}
                <div className="pt-3 border-t border-[#201B28]">
                  <div className="text-xs font-mono text-[#8E8798] mb-2">Relevant Coursework:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#181420] border border-[#262030] text-[#C5BFCB]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#FB7185]">
              <Award className="w-4 h-4 text-[#E11D48]" />
              <span>Professional Certifications</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#121017] border border-[#231E2C] hover:border-[#E11D48]/50 p-5 sm:p-6 transition-all duration-200 shadow-sm space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-[#FB7185] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#8E8798] bg-[#181420] px-2.5 py-1 rounded-md border border-[#262030] shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#C5BFCB] leading-relaxed">
                    {cert.desc}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#201B28] text-[11px] font-mono text-[#8E8798]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Credential ID: {cert.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
