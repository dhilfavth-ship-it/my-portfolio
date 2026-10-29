import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Code2, Server, Layers, CheckCircle2, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#0B0F19] border-t border-[#1E2A3A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">02 — About Me</p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
              Background &<br />
              <span className="text-[#FF6B8A]">Philosophy</span>
            </h2>
          </div>
          <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed hidden md:block">
            An engineer who believes simplicity and clarity drive the best outcomes.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111827] border border-[#1E2A3A] p-7 sm:p-9 space-y-6 hover:border-[#E8395A]/30 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A2035] border border-[#1E2A3A] flex items-center justify-center text-[#E8395A]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F0EBF5]">Background & Interests</h3>
              </div>
              
              <p className="text-sm sm:text-base text-[#8B9BB4] leading-relaxed">
                {PORTFOLIO_INFO.about.intro}
              </p>

              <p className="text-sm sm:text-base text-[#8B9BB4] leading-relaxed">
                {PORTFOLIO_INFO.about.interests}
              </p>

              <div className="pt-5 border-t border-[#1E2A3A]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B8A] mb-3">
                  Approach to Problem-Solving
                </h4>
                <p className="text-sm text-[#8B9BB4] leading-relaxed">
                  {PORTFOLIO_INFO.about.approach}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2A3A] grid grid-cols-2 gap-3">
                {[
                  'User-Centric Architecture',
                  'Maintainable & Clean Code',
                  'Tested & Scalable Backends',
                  'Continuous Learning',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#8B9BB4] font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                icon: <Code2 className="w-5 h-5" />,
                color: 'text-[#FF6B8A]',
                bg: 'bg-[#E8395A]/10 border-[#E8395A]/20',
                title: 'Frontend Craftsmanship',
                desc: 'Crafting responsive, accessible, and tactile user interfaces with modern React, TypeScript, and clean CSS design systems.',
              },
              {
                icon: <Server className="w-5 h-5" />,
                color: 'text-[#38BDF8]',
                bg: 'bg-[#38BDF8]/10 border-[#38BDF8]/20',
                title: 'Backend Engineering',
                desc: 'Structuring robust RESTful and GraphQL APIs, asynchronous job queues, and efficient relational database query flows.',
              },
              {
                icon: <Layers className="w-5 h-5" />,
                color: 'text-[#10B981]',
                bg: 'bg-[#10B981]/10 border-[#10B981]/20',
                title: 'Pragmatic Execution',
                desc: 'Prioritizing reliability, fast iteration, developer ergonomics, and automated deployments with Docker and CI/CD pipelines.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#111827] border border-[#1E2A3A] p-5 hover:border-[#E8395A]/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${card.bg} ${card.color}`}>
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#F0EBF5]">{card.title}</h4>
                </div>
                <p className="text-xs text-[#8B9BB4] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
