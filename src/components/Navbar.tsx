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
          ? 'bg-[#0B0F19]/96 backdrop-blur-lg border-b border-[#1E2A3A]/80 py-3 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E8395A] to-[#A51535] flex items-center justify-center shadow-[0_0_16px_rgba(232,57,90,0.4)] group-hover:shadow-[0_0_24px_rgba(232,57,90,0.6)] transition-all duration-200">
              <span className="font-black text-xs text-white tracking-wider font-display">FD</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-base tracking-tight text-[#F0EBF5] group-hover:text-[#FF6B8A] transition-colors">
                {PORTFOLIO_INFO.name}
              </span>
            </div>
          </button>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-150 cursor-pointer ${
                    active
                      ? 'text-white bg-[#E8395A]/15 border border-[#E8395A]/40 text-[#FF6B8A]'
                      : 'text-[#8B9BB4] hover:text-[#F0EBF5] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#E8395A] hover:bg-[#FF6B8A] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-[0_2px_16px_rgba(232,57,90,0.35)] hover:shadow-[0_4px_20px_rgba(232,57,90,0.5)] cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] text-[#8B9BB4] hover:text-[#F0EBF5] cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/98 backdrop-blur-xl border-b border-[#1E2A3A] px-4 pt-3 pb-5 mt-1 shadow-2xl">
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
                  className={`text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#E8395A]/15 text-[#FF6B8A] border border-[#E8395A]/30'
                      : 'text-[#8B9BB4] hover:text-[#F0EBF5] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-3 mt-2 border-t border-[#1E2A3A]">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-[#E8395A] hover:bg-[#FF6B8A] text-white shadow-sm cursor-pointer transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
