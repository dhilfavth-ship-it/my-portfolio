import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowDown, Mail, Github, Linkedin, Terminal, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0C]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-b from-[#E11D48]/10 via-[#E11D48]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#16141D] border border-[#2B2435] text-xs font-mono text-[#D4CEDB] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>{PORTFOLIO_INFO.availabilityBadge}</span>
              <span className="text-[#6B6575]">·</span>
              <span className="text-[#9CA3AF] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E11D48]" />
                {PORTFOLIO_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono font-medium text-[#FB7185] tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PORTFOLIO_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#E11D48]">
                {PORTFOLIO_INFO.role}
              </p>
            </div>

            {/* Short Engaging Introduction */}
            <p className="text-base sm:text-lg text-[#C5BFCB] leading-relaxed max-w-xl font-normal">
              {PORTFOLIO_INFO.shortBio}
            </p>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#F43F5E] hover:to-[#E11D48] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(225,29,72,0.35)] hover:shadow-[0_6px_28px_rgba(225,29,72,0.5)] active:scale-95 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14121A] hover:bg-[#1E1B26] border border-[#2B2435] hover:border-[#E11D48]/60 text-white text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#FB7185]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="flex items-center gap-4 pt-3 border-t border-[#201D28]">
              <span className="text-xs font-mono text-[#8E8798]">Connect:</span>
              
              <a
                href={PORTFOLIO_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#C5BFCB] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#FB7185]" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#C5BFCB] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                className="flex items-center gap-1.5 text-xs font-mono text-[#C5BFCB] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Developer Profile Snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#121017] border border-[#262030] p-6 shadow-xl relative overflow-hidden">
              
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-[#E11D48]" />

              {/* Developer Card Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-[#231D2D]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E11D48] to-[#991B1B] flex items-center justify-center text-white font-extrabold text-xl shadow-[0_4px_16px_rgba(225,29,72,0.4)]">
                  FD
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {PORTFOLIO_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E11D48] font-medium">
                    {PORTFOLIO_INFO.role}
                  </p>
                  <p className="text-xs text-[#8E8798] mt-0.5">
                    Engineering reliable, full-stack solutions
                  </p>
                </div>
              </div>

              {/* Focus Areas & Capabilities */}
              <div className="py-5 space-y-3">
                <div className="text-xs font-mono font-semibold text-[#8E8798] uppercase tracking-wider">
                  Core Specializations
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#D4CEDB]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Modern Reactive Frontend (React 19, TypeScript, Next.js)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#D4CEDB]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>REST & GraphQL APIs, Microservices, Node.js & Go</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#D4CEDB]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Relational & In-Memory Databases (PostgreSQL, Redis)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#D4CEDB]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Cloud Deployment & Containerization (Docker, AWS)</span>
                  </div>
                </div>
              </div>

              {/* Quick Tech Stack Pills */}
              <div className="pt-4 border-t border-[#231D2D]">
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#181520] border border-[#2D2638] text-[#C5BFCB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
