import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-[#1E2A3A] bg-[#0B0F19] text-[#8B9BB4] text-xs py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#1E2A3A]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E8395A] to-[#A51535] flex items-center justify-center font-black text-xs text-white shadow-[0_0_12px_rgba(232,57,90,0.4)]">
              FD
            </div>
            <div>
              <div className="text-[#F0EBF5] font-bold text-sm">
                {PORTFOLIO_INFO.name}
              </div>
              <div className="text-[11px] text-[#4A5568]">
                {PORTFOLIO_INFO.role} · Portfolio
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-[#4A5568] hover:text-[#F0EBF5] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/40 hover:text-[#FF6B8A] text-[#8B9BB4] transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] border border-[#1E2A3A] hover:border-[#38BDF8]/40 hover:text-[#38BDF8] text-[#8B9BB4] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_INFO.socials.email}`}
              className="p-2 rounded-lg bg-[#111827] border border-[#1E2A3A] hover:border-[#10B981]/40 hover:text-[#10B981] text-[#8B9BB4] transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/50 hover:text-[#FF6B8A] text-[#8B9BB4] transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright Notice */}
        <div className="text-center text-[11px] text-[#4A5568] font-mono">
          © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
        </div>

      </div>
    </footer>
  );
};
