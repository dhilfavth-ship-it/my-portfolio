import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { User, Code2, Server, CheckCircle2, Compass, Layers, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#0D0B10] border-t border-[#1F1B26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Section 02 · About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-2xl font-normal">
            A concise introduction to my background, engineering interests, and problem-solving approach.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#131018] border border-[#241E2C] p-6 sm:p-8 space-y-5 shadow-md">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#E11D48]" />
                <span>Background & Interests</span>
              </h3>
              
              <p className="text-sm sm:text-base text-[#C5BFCB] leading-relaxed">
                {PORTFOLIO_INFO.about.intro}
              </p>

              <p className="text-sm sm:text-base text-[#C5BFCB] leading-relaxed">
                {PORTFOLIO_INFO.about.interests}
              </p>

              <div className="pt-3 border-t border-[#231D2A]">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FB7185] mb-2">
                  Approach to Problem-Solving
                </h4>
                <p className="text-sm text-[#C5BFCB] leading-relaxed">
                  {PORTFOLIO_INFO.about.approach}
                </p>
              </div>

              <div className="pt-4 border-t border-[#231D2A] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D4CEDB] font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>User-Centric Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Maintainable & Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Tested & Scalable Backends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl bg-[#131018] border border-[#241E2C] p-5 hover:border-[#E11D48]/50 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1D1724] border border-[#30263B] flex items-center justify-center text-[#E11D48]">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Frontend Craftsmanship</h4>
              </div>
              <p className="text-xs text-[#9E97A6] leading-relaxed">
                Crafting responsive, accessible, and tactile user interfaces with modern React, TypeScript, and clean CSS design systems.
              </p>
            </div>

            <div className="rounded-2xl bg-[#131018] border border-[#241E2C] p-5 hover:border-[#E11D48]/50 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1D1724] border border-[#30263B] flex items-center justify-center text-[#38BDF8]">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Backend Engineering</h4>
              </div>
              <p className="text-xs text-[#9E97A6] leading-relaxed">
                Structuring robust RESTful and GraphQL APIs, asynchronous job queues, and efficient relational database query flows.
              </p>
            </div>

            <div className="rounded-2xl bg-[#131018] border border-[#241E2C] p-5 hover:border-[#E11D48]/50 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1D1724] border border-[#30263B] flex items-center justify-center text-[#10B981]">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Pragmatic Execution</h4>
              </div>
              <p className="text-xs text-[#9E97A6] leading-relaxed">
                Prioritizing reliability, fast iteration, developer ergonomics, and automated deployments with Docker and CI/CD pipelines.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
