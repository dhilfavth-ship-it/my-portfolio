import React from 'react';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-[#0B0F19] border-t border-[#1E2A3A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">06 — Education & Certifications</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
              Academic &<br />
              <span className="text-[#FF6B8A]">Credentials</span>
            </h2>
            <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed">
              Formal CS foundation paired with verified industry certifications.
            </p>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B8A]">
              <GraduationCap className="w-4 h-4 text-[#E8395A]" />
              <span>Academic Education</span>
            </div>

            {EDUCATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/30 p-6 sm:p-8 transition-all duration-200 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#1E2A3A]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#F0EBF5] tracking-tight leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#E8395A] font-mono mt-1">{item.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-[#4A5568] flex items-center gap-1.5 bg-[#0B0F19] px-2.5 py-1.5 rounded-lg border border-[#1E2A3A] shrink-0">
                    <Calendar className="w-3 h-3 text-[#FF6B8A]" />
                    {item.period}
                  </span>
                </div>

                <div className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#10B981]/10 text-[#34D399] border border-[#10B981]/25">
                  {item.badge}
                </div>

                <p className="text-sm text-[#8B9BB4] leading-relaxed">{item.description}</p>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4A5568]">Key Highlights</h4>
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#8B9BB4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1E2A3A]">
                  <div className="text-xs font-mono text-[#4A5568] mb-2">Relevant Coursework</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0B0F19] border border-[#1E2A3A] text-[#8B9BB4]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B8A]">
              <Award className="w-4 h-4 text-[#E8395A]" />
              <span>Professional Certifications</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/30 p-5 sm:p-6 transition-all duration-200 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-black text-[#F0EBF5] tracking-tight leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-[#FF6B8A] mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-[#8B9BB4] bg-[#0B0F19] px-2.5 py-1.5 rounded-lg border border-[#1E2A3A] shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#8B9BB4] leading-relaxed">{cert.desc}</p>

                  <div className="flex items-center gap-2 pt-3 border-t border-[#1E2A3A] text-[11px] font-mono text-[#4A5568]">
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
