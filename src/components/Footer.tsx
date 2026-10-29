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
    <footer className="border-t border-[#1F1B26] bg-[#0A0A0C] text-[#8E8798] text-xs py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#1C1824]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E11D48] to-[#991B1B] flex items-center justify-center font-bold text-xs text-white">
              FD
            </div>
            <div>
              <div className="text-white font-bold text-sm">
                {PORTFOLIO_INFO.name}
              </div>
              <div className="text-[11px] text-[#8E8798]">
                {PORTFOLIO_INFO.role} · Portfolio
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="hover:text-white transition-colors cursor-pointer"
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
              className="p-2 rounded-lg bg-[#14111A] border border-[#231E2C] hover:text-white text-[#9E97A6] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#14111A] border border-[#231E2C] hover:text-white text-[#9E97A6] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_INFO.socials.email}`}
              className="p-2 rounded-lg bg-[#14111A] border border-[#231E2C] hover:text-white text-[#9E97A6] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[#14111A] border border-[#231E2C] hover:border-[#E11D48]/50 text-white transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright Notice */}
        <div className="text-center text-[11px] text-[#6E6778]">
          © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved. Built with React, TypeScript, and modern CSS.
        </div>

      </div>
    </footer>
  );
};
