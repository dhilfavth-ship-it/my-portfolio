import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const isItemActive = (id: string) => {
    if (activeSection === id) return true;
    if (id === 'home' && (!activeSection || activeSection === 'overview')) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#201B28] py-3 shadow-lg'
          : 'bg-[#0A0A0C]/85 backdrop-blur-sm border-b border-[#201B28]/60 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#991B1B] flex items-center justify-center shadow-[0_0_12px_rgba(225,29,72,0.35)] group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-xs text-white tracking-wider">
                FD
              </span>
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-[#FB7185] transition-colors">
                {PORTFOLIO_INFO.name}
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-[#E11D48] font-semibold uppercase tracking-wider">
                Full Stack
              </span>
            </div>
          </button>

          {/* Center Navigation Links (strictly the 7 required sections) */}
          <nav className="hidden lg:flex items-center p-1 rounded-xl bg-[#121017] border border-[#231E2C]">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#E11D48] text-white font-semibold shadow-sm'
                      : 'text-[#9E97A6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Contact Me */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#F43F5E] hover:to-[#E11D48] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-[0_2px_12px_rgba(225,29,72,0.3)] hover:shadow-[0_4px_16px_rgba(225,29,72,0.45)] cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#16121C] border border-[#282132] text-[#D4CEDB] hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0B11]/98 backdrop-blur-xl border-b border-[#231E2C] px-4 pt-3 pb-5 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#E11D48] text-white font-semibold'
                      : 'text-[#9E97A6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 mt-2 border-t border-[#201B28]">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white shadow-sm cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
