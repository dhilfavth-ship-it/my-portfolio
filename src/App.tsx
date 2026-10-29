/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStackRadar } from './components/TechStackRadar';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Intersection observer & scroll listener to highlight current navigation item
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#EDE8F0] selection:bg-[#E11D48]/30 selection:text-[#FFFFFF] relative font-sans antialiased">
      {/* Fixed Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Exactly 7 Main Sections */}
      <main>
        {/* Section 1: Hero Section */}
        <div id="home">
          <Hero
            onExploreProjects={() => handleNavigate('projects')}
            onContact={() => handleNavigate('contact')}
          />
        </div>

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Technical Skills */}
        <TechStackRadar />

        {/* Section 4: Featured Projects */}
        <ProjectsSection />

        {/* Section 5: Experience */}
        <ExperienceTimeline />

        {/* Section 6: Education & Certifications */}
        <EducationSection />

        {/* Section 7: Contact Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Subtle Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-[#14111A]/90 hover:bg-[#1E1926] border border-[#2B2336] hover:border-[#E11D48]/60 text-white shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#FB7185]" />
        </button>
      )}
    </div>
  );
}
