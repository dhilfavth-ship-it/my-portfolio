import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowRight, Mail, Github, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContact }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#0B0F19]">
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="crimson-glow-radial absolute inset-0 pointer-events-none" />
      
      {/* Geometric decorations — reference image inspired */}
      <div className="absolute top-24 left-16 hidden lg:block">
        <div className="w-5 h-5 border-2 border-[#E8395A]/40 rotate-45" />
      </div>
      <div className="absolute top-40 right-48 hidden lg:block">
        <div className="geo-triangle opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 hidden lg:block">
        <div className="geo-arc w-16 h-16 opacity-50 rotate-45" />
      </div>
      <div className="absolute top-56 left-1/3 hidden lg:block">
        <div className="w-3 h-3 border border-[#E8395A]/50 rotate-45" />
      </div>
      <div className="absolute bottom-40 right-24 hidden lg:block">
        <div className="w-4 h-4 border-2 border-[#E8395A]/30 rotate-12" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#1E2A3A] text-xs font-mono text-[#8B9BB4] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#F0EBF5]">{PORTFOLIO_INFO.availabilityBadge}</span>
              <span className="text-[#4A5568]">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E8395A]" />
                {PORTFOLIO_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono font-semibold text-[#E8395A] tracking-widest uppercase">
                Hello, I am
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F0EBF5] leading-[0.9]">
                {PORTFOLIO_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#FF6B8A] tracking-wide">
                {PORTFOLIO_INFO.role}
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#8B9BB4] leading-relaxed max-w-lg">
              {PORTFOLIO_INFO.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E8395A] hover:bg-[#FF6B8A] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_24px_rgba(232,57,90,0.4)] hover:shadow-[0_6px_32px_rgba(232,57,90,0.55)] active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-transparent hover:bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/50 text-[#F0EBF5] text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FF6B8A]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2 border-t border-[#1E2A3A]">
              <span className="text-xs font-mono text-[#4A5568] uppercase tracking-wider">Connect</span>
              
              <a
                href={PORTFOLIO_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#8B9BB4] hover:text-[#F0EBF5] transition-colors group"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#FF6B8A] group-hover:text-[#E8395A] transition-colors" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#8B9BB4] hover:text-[#F0EBF5] transition-colors group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#38BDF8] group-hover:text-[#38BDF8] transition-colors" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                className="flex items-center gap-1.5 text-xs font-mono text-[#8B9BB4] hover:text-[#F0EBF5] transition-colors group"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#10B981] group-hover:text-[#10B981] transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Typographic Monogram + Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            
            {/* Giant Monogram — primary visual */}
            <div className="relative flex items-center justify-center w-full">
              <div className="hero-monogram animate-float select-none" aria-hidden="true">
                FD
              </div>
              {/* Subtle glow behind monogram */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full bg-[#E8395A]/10 blur-3xl" />
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="w-full max-w-xs rounded-2xl bg-[#111827] border border-[#1E2A3A] p-5 shadow-xl space-y-3">
              <div className="text-xs font-mono text-[#4A5568] uppercase tracking-wider">Core Specializations</div>
              <div className="space-y-2">
                {[
                  'Modern Reactive Frontend (React, TypeScript)',
                  'REST & GraphQL APIs · Node.js · Go',
                  'PostgreSQL · Redis · Cloud Deployments',
                  'Docker · Kubernetes · CI/CD Pipelines',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#8B9BB4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-[#1E2A3A] flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#1A2035] border border-[#1E2A3A] text-[#8B9BB4]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
